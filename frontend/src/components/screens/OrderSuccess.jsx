import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Home, Truck, ThumbsUp } from "lucide-react";

const OrderSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { order } = location.state || {};

  if (!order) {
    return <div className="text-center text-primary">No order details available.</div>;
  }

  return (
    <div className="container mx-auto p-4 mt-24 bg-background text-text">
      <button
        onClick={() => navigate("/")}
        className="fixed top-4 left-4 mt-24 flex items-center gap-2 bg-primary text-white py-2 px-4 rounded-full shadow-lg hover:bg-red-600 dark:bg-primary-dark dark:hover:bg-red-700 focus:outline-none"
      >
        <Home className="w-6 h-6" />
        <span>Back to Home</span>
      </button>
      <h1 className="text-4xl font-bold mb-4 text-center text-primary dark:text-primary-dark">
        Your Order <ThumbsUp className="inline-block w-8 h-8 ml-2 text-red-500" />
      </h1>
      <p className="text-center mb-8 font-semibold text-primary text-2xl">
        Thanks for your order. We will call you when your order is on the way.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Order Details</h2>
          {order.items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow-lg mb-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded mr-4"
              />
              <div>
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p>${item.price}</p>
              </div>
              <p className="text-text font-semibold">
                ${item.price * item.quantity}
              </p>
            </div>
          ))}
          <div className="text-lg font-semibold">
            <p className="text-text">Subtotal: ${order.amount}</p>
            <p className="text-text flex items-center">
              Delivery: $5 <Truck className="ml-2 w-6 h-6 text-red-500" />
            </p>
            <p className="text-gray-700">Total: ${order.amount + 5}</p>
          </div>
        </div>

        <div className="p-8 rounded-lg shadow-2xl">
          <h2 className="text-4xl text-primary font-bold mb-4">Delivery Information</h2>
          <div className="mb-4">
            <label className="block font-semibold">Phone</label>
            <input
              type="text"
              value={order.address.phone}
              readOnly
              className="w-full px-4 py-2 border bg-gray-100 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold">Street address</label>
            <input
              type="text"
              value={order.address.street}
              readOnly
              className="w-full px-4 py-2 border bg-gray-200 rounded-lg"
            />
          </div>
          <div className="flex space-x-4 mb-4">
            <div className="w-1/2">
              <label className="block font-semibold">City</label>
              <input
                type="text"
                value={order.address.city}
                readOnly
                className="w-full px-4 py-2 border bg-gray-200 rounded-lg"
              />
            </div>
            <div className="w-1/2">
              <label className="block font-semibold">Country</label>
              <input
                type="text"
                value={order.address.country}
                readOnly
                className="w-full px-4 py-2 border bg-gray-200 rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
