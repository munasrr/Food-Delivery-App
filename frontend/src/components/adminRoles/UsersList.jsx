import React, { useState } from "react";
import {
  useGetUsersQuery,
  useDeleteUserMutation,
  useUpdateUserMutation,
} from "../../slices/usersApiSlice";
import Loader from "../pages/Loader";
import Header from "../pages/Header";
import Footer from "../pages/Footer";
import toast from "react-hot-toast";
import AdminCredentials from "./AdminCredentials";

const UsersList = () => {
  const { data, error, isLoading, refetch } = useGetUsersQuery();
  const [deleteUser] = useDeleteUserMutation();
  const [updateUser] = useUpdateUserMutation();

  const [editing, setEditing] = useState(null);
  const [editFormData, setEditFormData] = useState({
    name: "",
    email: "",
  });

  if (isLoading) return <Loader />;
  if (error) return <div>Error loading users</div>;

  const users = data?.data || [];

  const handleDelete = async (userId) => {
    try {
      await deleteUser(userId).unwrap();
      toast.success("User deleted");
      refetch();
    } catch (error) {
      toast.error("Error deleting user");
    }
  };

  const handleEditClick = (user) => {
    setEditing(user._id);
    setEditFormData({
      name: user.name,
      email: user.email,
    });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({ ...editFormData, [name]: value });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUser({ id: editing, data: editFormData }).unwrap();
      setEditing(null);
      toast.success("User updated");
      refetch();
    } catch (error) {
      toast.error("Error updating user");
    }
  };

  return (
    <>
      <Header />
      <div className="container mx-auto p-4 mt-14">
        <h1 className="text-4xl font-bold mb-4 text-center text-primary dark:text-primary-dark">
          Users List
        </h1>
        <div className="relative md:left-[40%]">
          <AdminCredentials />
        </div>
        <div className="overflow-x-auto">
          <table className="lg:w-2/4 sm:w-2/4 mx-auto bg-background text-text dark:bg-background-dark dark:text-text-dark shadow-2xl rounded-lg">
            <thead>
              <tr>
                <th className="py-2 px-4">ID</th>
                <th className="py-2 px-4">Name</th>
                <th className="py-2 px-4">Email</th>
                {/* <th className="py-2 px-4">Role</th> */}
                <th className="py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <td className="py-2 px-4 text-primary dark:text-primary-dark">
                    {index + 1}
                  </td>
                  <td className="py-2 px-4">{user.name}</td>
                  <td className="py-2 px-4">{user.email}</td>
                  {/* <td className="py-2 px-4">{user.role}</td> */}
                  <td className="py-2 px-4">
                    <button
                      className="bg-primary text-white px-4 py-2 m-2 rounded hover:bg-red-600 dark:hover:bg-red-800"
                      onClick={() => handleDelete(user._id)}
                    >
                      Delete
                    </button>
                    <button
                      className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 m-2 py-2 rounded hover:bg-gray-400 dark:hover:bg-gray-600"
                      onClick={() => handleEditClick(user)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {editing && (
          <div
            className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50"
            onClick={() => setEditing(null)}
          >
            <div
              className="bg-background dark:bg-background-dark text-text dark:text-text-dark p-6 rounded-lg shadow-2xl w-full max-w-md mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold mb-4 text-primary dark:text-primary-dark">
                Edit User
              </h2>
              <form onSubmit={handleEditSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={editFormData.name}
                    onChange={handleEditChange}
                    required
                    placeholder="Name"
                    className="w-full px-4 py-2 border bg-gray-100  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={editFormData.email}
                    onChange={handleEditChange}
                    required
                    placeholder="Email"
                    className="w-full px-4 py-2 border bg-gray-100  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 mt-4 text-white bg-primary rounded-lg shadow-lg hover:bg-red-600 dark:bg-primary-dark  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 "
                >
                  Update User
                </button>
                <button
                  type="button"
                  className="w-full py-3 mt-4 text-white bg-gray-500 rounded-lg shadow-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  onClick={() => setEditing(null)}
                >
                  Cancel
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

export default UsersList;
