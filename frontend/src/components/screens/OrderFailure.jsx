import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const OrderFailure = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background text-text dark:bg-background-dark dark:text-text-dark">
      <h1 className="text-3xl text-red-600 dark:text-red-400 font-bold mb-8">There was an issue with your order. Please try again.</h1>
      <button
        onClick={handleHomeClick}
        className="flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-red-700 dark:bg-primary-dark dark:hover:bg-red-800 transition-colors duration-300"
      >
        <FaHome className="mr-2" />
        Back to Home
      </button>
    </div>
  );
};

export default OrderFailure;
