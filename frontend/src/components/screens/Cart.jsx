import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItemFromCart } from "../../slices/cartReducer";
import Header from "../../components/pages/Header";
import Footer from "../../components/pages/Footer";
import { Trash2 } from "lucide-react";
import { usePlaceOrderMutation } from "../../slices/ordersApiSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const userInfo = useSelector((state) => state.auth.userInfo);
  const userId = userInfo ? userInfo.user._id : null;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [placeOrder] = usePlaceOrderMutation();

  const [address, setAddress] = useState({
    phone: "",
    street: "",
    city: "",
    country: "",
  });

  const handleAddressChange = (e) => {
    const { id, value } = e.target;
    setAddress((prevAddress) => ({ ...prevAddress, [id]: value }));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeItemFromCart({ id }));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleCheckout = async (e) => {
    e.preventDefault();
    const amount = subtotal;

    const orderData = {
      userId,
      items: cartItems.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        image: item.image,
      })),
      amount,
      address: {
        phone: address.phone,
        street: address.street,
        city: address.city,
        country: address.country,
      },
    };

    try {
      const response = await placeOrder(orderData).unwrap();
      window.location.href = response.session_url;
    } catch (error) {
      console.error("Failed to place order:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="container mx-auto p-4 bg-background mt-24 text-text ">
        <h1 className="text-4xl font-bold mb-4 text-primary text-center dark:text-primary-dark">
          Cart
        </h1>
        {cartItems.length === 0 ? (
          <p className="text-center text-lg text-gray-700 dark:text-gray-300">
            Your cart is empty 😔
          </p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between bg-white  p-4 rounded-lg shadow-lg mb-4"
                >
                  <div className="flex items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded mr-4"
                    />
                    <div>
                      <h2 className="text-xl font-semibold">{item.name}</h2>
                      <p className="text-gray-500 dark:text-gray-400">
                        ${item.price}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <p className="text-gray-700 font-semibold dark:text-gray-300">
                      ${item.price * item.quantity}
                    </p>
                    <button
                      className="bg-primary text-white px-3 py-2 rounded hover:bg-yellow-600 transition-colors"
                      onClick={() => removeFromCartHandler(item.id)}
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
              <div className="flex justify-end items-center text-lg font-semibold">
                <p className="text-gray-700 dark:text-gray-300">
                  Subtotal: ${subtotal}
                </p>
              </div>
            </div>
            <div className="bg-gray-100  p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
              <form onSubmit={handleCheckout} className="space-y-4">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 dark:text-gray-700"
                  >
                    Phone
                  </label>
                  <input
                    type="text"
                    id="phone"
                    placeholder="Enter your phone number"
                    value={address.phone}
                    onChange={handleAddressChange}
                    className="w-full px-4 py-2 border bg-gray-200  rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="street"
                    className="block text-gray-700 dark:text-gray-700"
                  >
                    Street address
                  </label>
                  <input
                    type="text"
                    id="street"
                    placeholder="Enter your street"
                    value={address.street}
                    onChange={handleAddressChange}
                    className="w-full px-4 py-2 border bg-gray-200  rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark"
                    required
                  />
                </div>
                <div className="flex space-x-4">
                  <div className="w-1/2">
                    <label
                      htmlFor="city"
                      className="block text-gray-700 dark:text-gray-700"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      placeholder="Enter your city"
                      value={address.city}
                      onChange={handleAddressChange}
                      className="w-full px-4 py-2 border bg-gray-200  rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark"
                      required
                    />
                  </div>
                  <div className="w-1/2">
                    <label
                      htmlFor="country"
                      className="block text-gray-700 dark:text-gray-700"
                    >
                      Country
                    </label>
                    <input
                      type="text"
                      id="country"
                      placeholder="Enter your country"
                      value={address.country}
                      onChange={handleAddressChange}
                      className="w-full px-4 py-2 border bg-gray-200  rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark"
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-2 rounded-lg hover:bg-yellow-300 transition-colors"
                >
                  Pay ${subtotal}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
