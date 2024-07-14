import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useVerifyOrderMutation } from "../../slices/ordersApiSlice";

const VerifyPayment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [verifyOrder] = useVerifyOrderMutation();
  const query = new URLSearchParams(location.search);
  const success = query.get("success");
  const orderId = query.get("orderId");

  useEffect(() => {
    const verify = async () => {
      try {
        console.log("Verifying payment for order ID:", orderId);
        const response = await verifyOrder({ orderId, success }).unwrap();
        if (response.success) {
          console.log("Verification successful:", response.order);
          navigate("/order-success", { state: { order: response.order } });
        } else {
          console.log("Verification failed:", response.message);
          navigate("/order-failure");
        }
      } catch (error) {
        console.error("Error verifying payment:", error);
        navigate("/order-failure");
      }
    };

    verify();
  }, [orderId, success, verifyOrder, navigate]);

  return <div>Verifying payment...</div>;
};

export default VerifyPayment;
