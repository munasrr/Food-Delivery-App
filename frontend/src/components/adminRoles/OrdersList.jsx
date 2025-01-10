import React, { useState } from "react";
import { useGetOrdersQuery } from "../../slices/ordersApiSlice";
import Loader from "../pages/Loader";
import Header from "../pages/Header";
import Footer from "../pages/Footer";
import AdminCredentials from "./AdminCredentials";

const OrdersList = () => {
  const { data, error, isLoading } = useGetOrdersQuery();
  const [selectedOrder, setSelectedOrder] = useState(null);

  if (isLoading) return <Loader />;
  if (error) return <div>Error loading orders</div>;

  const orders = data?.data || [];

  const handleShowOrder = (order) => {
    setSelectedOrder(order);
  };

  const handleBackToList = () => {
    setSelectedOrder(null);
  };

  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4 text-center mt-14 text-primary dark:text-primary-dark">
          Orders List
        </h1>
        <div className="relative md:left-[40%]">
          <AdminCredentials />
        </div>
        {selectedOrder ? (
          <div className="bg-background text-text p-6 rounded-lg shadow-lg max-w-lg mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Order Details
            </h2>
            <p>
              <strong>Order ID:</strong> {selectedOrder._id}
            </p>
            <p>
              <strong>Payment Status:</strong>{" "}
              {selectedOrder.isPaid ? "Paid" : "Not paid"}
            </p>
            <p>
              <strong>Created At:</strong>{" "}
              {new Date(selectedOrder.createdAt).toLocaleString()}
            </p>
            <h3 className="text-xl font-bold mt-4">Items:</h3>
            <ol className="list-disc list-inside">
              {selectedOrder.items.map((item, index) => (
                <li key={index} className="mt-2">
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <p>{item.name}</p>
                      <p>Quantity: {item.quantity}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
            <div className="flex justify-center">
              <button
                onClick={handleBackToList}
                className="mt-6 bg-primary dark:bg-primary-dark text-white text-xl font-semibold px-6 py-2 rounded hover:bg-primary/90 "
              >
                Back to list
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4 lg:w-2/4 sm:w-2/4 mx-auto">
            {orders.map((order) => (
              <div
                key={order._id}
                className="flex items-center justify-between bg-background text-text  p-4 rounded-lg shadow-lg"
              >
                <div className="flex items-center space-x-4">
                  <div
                    className={`px-3 py-1 rounded-full text-white ${
                      order.isPaid ? "bg-green-500" : "bg-primary"
                    }`}
                  >
                    {order.isPaid ? "Paid" : "Not paid"}
                  </div>
                  <div>
                    <div className="font-bold">{order._id}</div>
                    <div>{order.items.map((item) => item.name).join(", ")}</div>
                  </div>
                </div>
                <div className="text-gray-600">
                  {new Date(order.createdAt).toLocaleString()}
                </div>
                <button
                  onClick={() => handleShowOrder(order)}
                  className="bg-primary dark:bg-primary-dark text-white px-4 py-2 rounded hover:bg-primary/90 dark:bg-primary/90"
                >
                  Show order
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default OrdersList;
