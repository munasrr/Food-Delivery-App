// routes/webhookRoutes.js
import express from 'express';
import bodyParser from 'body-parser';
import Stripe from 'stripe';
import orderModel from '../models/orderModel.js'; // Adjust the import path according to your project structure

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const router = express.Router();

router.post(
  '/webhook',
  bodyParser.raw({ type: 'application/json' }),
  async (req, res) => {
    const sig = req.headers['stripe-signature'];
    let event;

    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      return res.status(400).send(`Webhook error: ${err.message}`);
    }

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;
      const orderId = session.client_reference_id;

      const order = await orderModel.findById(orderId);
      if (order) {
        order.isPaid = true;
        await order.save();
      }
    }

    res.status(200).send('Received');
  }
);

export default router;
