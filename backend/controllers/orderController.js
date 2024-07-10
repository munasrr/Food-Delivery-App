import orderModel from '../models/orderModel.js';
import userModel from '../models/userModel.js';
import Stripe from 'stripe';
import dotenv from 'dotenv';
dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;

    if (!userId || !items || !amount || !address) {
      console.log('Missing required fields', {
        userId,
        items,
        amount,
        address,
      });
      return res
        .status(400)
        .json({ success: false, message: 'Missing required fields' });
    }

    const newOrder = new orderModel({
      userId,
      items,
      amount,
      address,
    });

    await newOrder.save();

    const line_items = items.map((item) => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100, // Note: Stripe expects amount in the smallest currency unit
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items,
      success_url: `http://localhost:3000/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `http://localhost:3000/verify?success=false&orderId=${newOrder._id}`,
    });

    res.json({ success: true, session_url: session.url });
  } catch (error) {
    console.log('Error in placeOrder:', error.message);
    res.status(500).json({ success: false, message: 'Error placing order' });
  }
};

const listOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.json({ success: true, data: orders });
  } catch (error) {
    console.log('Error in listOrders:', error.message);
    res.status(500).json({ success: false, message: 'Error listing orders' });
  }
};

const userOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({ userId: req.body.userId });
    console.log(orders);
    res.json({ success: true, data: orders });
  } catch (error) {
    console.log('Error in userOrders:', error.message);
    res
      .status(500)
      .json({ success: false, message: 'Error fetching user orders' });
  }
};

const updateStatus = async (req, res) => {
  try {
    await orderModel.findByIdAndUpdate(req.body.orderId, {
      status: req.body.status,
    });
    res.json({ success: true, message: 'Status updated' });
  } catch (error) {
    console.log('Error in updateStatus:', error.message);
    res.status(500).json({ success: false, message: 'Error updating status' });
  }
};

const verifyOrder = async (req, res) => {
  const { orderId, success } = req.body;
  try {
    if (success === 'true') {
      const updatedOrder = await orderModel.findByIdAndUpdate(
        orderId,
        { isPaid: true },
        { new: true }
      );
      res.json({ success: true, order: updatedOrder });
    } else {
      await orderModel.findByIdAndDelete(orderId);
      res.json({ success: false, message: 'Payment not verified' });
    }
  } catch (error) {
    console.log('Error in verifyOrder:', error.message);
    res
      .status(500)
      .json({ success: false, message: 'Error verifying payment' });
  }
};

export { placeOrder, listOrders, userOrders, updateStatus, verifyOrder };
