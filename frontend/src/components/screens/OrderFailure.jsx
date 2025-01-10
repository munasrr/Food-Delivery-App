import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import Wrapper from "../Wrapper";

const OrderFailure = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background text-text dark:bg-background-dark dark:text-text-dark">
      <Wrapper>
        <h1 className="text-3xl text-primary  font-bold mb-8">
          There was an issue with your order. Please try again.
        </h1>
        <button
          onClick={handleHomeClick}
          className="flex items-center px-6 py-3 bg-primary text-white rounded-lg bg-primary/90 dark:bg-primary-dark dark:bg-primary/90 transition-colors duration-300"
        >
          <FaHome className="mr-2" />
          Back to Home
        </button>
      </Wrapper>
    </div>
  );
};

export default OrderFailure;
