import React from "react";
import { useNavigate } from "react-router-dom";

const AdminCredentials = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="w-full md:w-2/3">
        <div className="flex  justify-center items-center md:justify-start mb-4 mx-auto">
          <button
            onClick={() => navigate("/admin/menu-items")}
            className="bg-background  border-2 border-primary text-text dark:text-text-dark hover:bg-primary dark:hover:bg-primary-dark hover:text-background dark:hover:text-background-dark px-4 py-2 rounded-md m-2"
          >
            Menu Items
          </button>
          <button
            onClick={() => navigate("/admin/users")}
            className="bg-background  border-2 border-primary text-text dark:text-text-dark hover:bg-primary dark:hover:bg-primary-dark hover:text-background dark:hover:text-background-dark px-4 py-2 rounded-md m-2"
          >
            Users
          </button>
          <button
            onClick={() => navigate("/admin/orders")}
            className="bg-background border-2 border-primary text-text dark:text-text-dark hover:bg-primary dark:hover:bg-primary-dark hover:text-background dark:hover:text-background-dark px-4 py-2 rounded-md m-2"
          >
            Orders
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminCredentials;
