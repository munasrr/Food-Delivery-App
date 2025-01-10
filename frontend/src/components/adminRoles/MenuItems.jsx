import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  useGetFoodQuery,
  useDeleteFoodMutation,
  useAddFoodMutation,
  useUpdateFoodMutation,
} from "../../slices/foodApiSlice";
import Loader from "../pages/Loader";
import { addItemToCart } from "../../slices/cartReducer";
import Header from "../pages/Header";
import Footer from "../pages/Footer";
import toast from "react-hot-toast";
import { ArrowRight } from "lucide-react";
import AdminCredentials from "./AdminCredentials";
import Wrapper from "../Wrapper";

const MenuItems = () => {
  const dispatch = useDispatch();
  const { data, error, isLoading, refetch } = useGetFoodQuery();
  const [deleteFood] = useDeleteFoodMutation();
  const [addFood] = useAddFoodMutation();
  const [updateFood] = useUpdateFoodMutation();

  const [editing, setEditing] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [editFormData, setEditFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: null,
  });

  const [newFoodFormData, setNewFoodFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: null,
  });

  const [viewMode, setViewMode] = useState("card");

  // ------------------------
  //   CRUD Handlers
  // ------------------------
  const handleDelete = async (foodId) => {
    try {
      await deleteFood(foodId);
      toast.error("Food item deleted");
      refetch();
    } catch (error) {
      console.error("Error deleting food item", error);
      toast.error("Error deleting food item");
    }
  };

  const handleEditClick = (food) => {
    setEditing(food._id);
    setEditFormData({
      name: food.name,
      description: food.description,
      price: food.price,
      category: food.category,
      image: null, // we only replace image if user uploads a new one
    });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditImageChange = (e) => {
    setEditFormData((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", editFormData.name);
    formData.append("description", editFormData.description);
    formData.append("price", editFormData.price);
    formData.append("category", editFormData.category);
    if (editFormData.image) {
      formData.append("image", editFormData.image);
    }

    try {
      await updateFood({ id: editing, data: formData });
      setEditing(null);
      toast.success("Food item updated");
      refetch();
    } catch (error) {
      console.error("Error updating food item", error);
      toast.error("Error updating food item");
    }
  };

  const handleAddChange = (e) => {
    const { name, value } = e.target;
    setNewFoodFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddImageChange = (e) => {
    setNewFoodFormData((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  const handleAddSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", newFoodFormData.name);
    formData.append("description", newFoodFormData.description);
    formData.append("price", newFoodFormData.price);
    formData.append("category", newFoodFormData.category);
    if (newFoodFormData.image) {
      formData.append("image", newFoodFormData.image);
    }

    try {
      const result = await addFood(formData);
      console.log("Add food result:", result);
      setNewFoodFormData({
        name: "",
        description: "",
        price: "",
        category: "",
        image: null,
      });
      setIsAdding(false);
      toast.success("Food item added");
      refetch();
    } catch (error) {
      console.error("Error adding food item", error);
      toast.error("Error adding food item");
    }
  };

  // ------------------------
  //   Cart Handler
  // ------------------------
  const addToCartHandler = (food) => {
    dispatch(addItemToCart(food));
  };

  // ------------------------
  //   Render Helpers
  // ------------------------
  const renderFoodAsCards = (foods) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {foods.map((food) => (
        <div
          key={food._id}
          className="bg-background text-text dark:bg-background-dark dark:text-text-dark p-4 rounded-lg shadow-2xl"
        >
          {/* If this item is in edit mode, render the edit form, otherwise show the normal card  */}
          {editing === food._id ? (
            // ----------------
            //  Edit Form
            // ----------------
            <form onSubmit={handleEditSubmit} className="space-y-4">
              <div>
                <label className="block font-semibold" htmlFor="editName">
                  Name
                </label>
                <input
                  id="editName"
                  type="text"
                  name="name"
                  value={editFormData.name}
                  onChange={handleEditChange}
                  required
                  className="w-full px-2 py-1 border bg-gray-100 rounded-md"
                />
              </div>
              <div>
                <label
                  className="block font-semibold"
                  htmlFor="editDescription"
                >
                  Description
                </label>
                <input
                  id="editDescription"
                  type="text"
                  name="description"
                  value={editFormData.description}
                  onChange={handleEditChange}
                  required
                  className="w-full px-2 py-1 border bg-gray-100 rounded-md"
                />
              </div>
              <div>
                <label className="block font-semibold" htmlFor="editPrice">
                  Price
                </label>
                <input
                  id="editPrice"
                  type="number"
                  name="price"
                  value={editFormData.price}
                  onChange={handleEditChange}
                  required
                  className="w-full px-2 py-1 border bg-gray-100 rounded-md"
                />
              </div>
              <div>
                <label className="block font-semibold" htmlFor="editCategory">
                  Category
                </label>
                <input
                  id="editCategory"
                  type="text"
                  name="category"
                  value={editFormData.category}
                  onChange={handleEditChange}
                  required
                  className="w-full px-2 py-1 border bg-gray-100 rounded-md"
                />
              </div>
              <div>
                <label className="block font-semibold" htmlFor="editImage">
                  Image
                </label>
                <input
                  id="editImage"
                  type="file"
                  name="image"
                  onChange={handleEditImageChange}
                  className="w-full px-2 py-1 border bg-gray-100 rounded-md"
                />
              </div>
              <button
                type="submit"
                className="block w-full py-2 mt-2 text-white bg-primary rounded-md"
              >
                Update
              </button>
              <button
                type="button"
                className="block w-full py-2 mt-2 text-white bg-red-500 rounded-md"
                onClick={() => setEditing(null)}
              >
                Cancel
              </button>
            </form>
          ) : (
            // ----------------
            //  Normal Card
            // ----------------
            <div className="flex flex-col justify-between h-full">
              <div className="flex-grow">
                <img
                  src={food.image}
                  alt={food.name}
                  className="w-full h-48 object-cover rounded"
                />
                <h2 className="text-xl font-semibold text-primary dark:text-primary-dark mt-2">
                  {food.name}
                </h2>
                <p className="mt-1">{food.description}</p>
                <p className="mt-1">${food.price}</p>
              </div>
              <div className="flex space-x-2 mt-4">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  onClick={() => handleDelete(food._id)} // <-- FIX: call handleDelete
                >
                  Delete
                </button>
                <button
                  className="bg-primary text-white px-4 py-2 rounded hover:bg-gray-700 dark:hover:bg-gray-900"
                  onClick={() => handleEditClick(food)}
                >
                  Edit
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );

  const renderFoodAsTable = (foods) => (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-background text-text dark:bg-background-dark dark:text-text-dark shadow-4xl border border-primary dark:border-primary-dark rounded-full">
        <thead>
          <tr>
            <th className="py-2 px-4">Image</th>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Description</th>
            <th className="py-2 px-4">Price</th>
            <th className="py-2 px-4">Category</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {foods.map((food) => (
            <tr key={food._id}>
              <td className="py-2 px-4">
                <img
                  src={food.image}
                  alt={food.name}
                  className="w-16 h-16 object-cover rounded"
                />
              </td>
              <td className="py-2 px-4 text-primary dark:text-primary-dark">
                {food.name}
              </td>
              <td className="py-2 px-4">{food.description}</td>
              <td className="py-2 px-4">${food.price}</td>
              <td className="py-2 px-4">{food.category}</td>
              <td className="py-2 px-4">
                {/* If we're editing this row, show an Edit Form inside the table row. */}
                {editing === food._id ? (
                  <form onSubmit={handleEditSubmit} className="space-y-2">
                    <input
                      type="text"
                      name="name"
                      value={editFormData.name}
                      onChange={handleEditChange}
                      required
                      className="w-full px-2 py-1 border bg-gray-100 rounded-md my-1"
                      placeholder="Name"
                    />
                    <input
                      type="text"
                      name="description"
                      value={editFormData.description}
                      onChange={handleEditChange}
                      required
                      className="w-full px-2 py-1 border bg-gray-100 rounded-md my-1"
                      placeholder="Description"
                    />
                    <input
                      type="number"
                      name="price"
                      value={editFormData.price}
                      onChange={handleEditChange}
                      required
                      className="w-full px-2 py-1 border bg-gray-100 rounded-md my-1"
                      placeholder="Price"
                    />
                    <input
                      type="text"
                      name="category"
                      value={editFormData.category}
                      onChange={handleEditChange}
                      required
                      className="w-full px-2 py-1 border bg-gray-100 rounded-md my-1"
                      placeholder="Category"
                    />
                    <input
                      type="file"
                      name="image"
                      onChange={handleEditImageChange}
                      className="w-full px-2 py-1 border bg-gray-100 rounded-md my-1"
                    />
                    <button
                      type="submit"
                      className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/80"
                    >
                      Update
                    </button>
                    <button
                      type="button"
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 ml-2"
                      onClick={() => setEditing(null)}
                    >
                      Cancel
                    </button>
                  </form>
                ) : (
                  <>
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-1"
                      onClick={() => addToCartHandler(food)}
                    >
                      Add to Cart
                    </button>
                    <button
                      className="bg-text text-white px-4 py-2 rounded hover:bg-gray-900 mb-1 ml-2"
                      onClick={() => handleEditClick(food)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                      onClick={() => handleDelete(food._id)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  // ------------------------
  //   Main Render
  // ------------------------
  if (isLoading) return <Loader />;
  if (error) return <div>Error loading food items</div>;

  const foods = data?.data || [];

  return (
    <>
      <Header />
      <Wrapper>
        <div className="container mt-24 overflow-x-hidden mx-auto p-4">
          <h1 className="text-4xl font-bold mb-4 text-primary dark:text-primary-dark text-center">
            Food List
          </h1>
          <div className="relative md:left-[40%]">
            <AdminCredentials />
          </div>

          <div className="flex justify-center mb-8">
            <button
              onClick={() => setIsAdding((prev) => !prev)}
              className="flex items-center justify-center text-center py-4 px-4 mt-12 text-primary dark:text-primary-dark border border-primary dark:border-primary-dark rounded-full"
            >
              {isAdding ? "Go Back to Menu Items" : "Create new menu item"}
              <ArrowRight className="ml-2" />
            </button>
          </div>

          {isAdding ? (
            <div className="mb-8 sm:w-1/2 md:w-1/3 lg:w-2/4 mx-auto text-center bg-background p-4 rounded-lg shadow-2xl">
              <h2 className="text-2xl font-bold mb-4 text-primary ">
                Add New Food
              </h2>
              <form onSubmit={handleAddSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={newFoodFormData.name}
                    onChange={handleAddChange}
                    required
                    placeholder="Name"
                    className="w-full px-4 py-2 border bg-gray-100  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="description"
                    value={newFoodFormData.description}
                    onChange={handleAddChange}
                    required
                    placeholder="Description"
                    className="w-full px-4 py-2 border bg-gray-100  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    name="price"
                    value={newFoodFormData.price}
                    onChange={handleAddChange}
                    required
                    placeholder="Price"
                    className="w-full px-4 py-2 border bg-gray-100  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="category"
                    value={newFoodFormData.category}
                    onChange={handleAddChange}
                    required
                    placeholder="Category"
                    className="w-full px-4 py-2 border bg-gray-100  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400"
                  />
                </div>
                <div>
                  <input
                    type="file"
                    name="image"
                    onChange={handleAddImageChange}
                    className="w-full px-4 py-2 border bg-gray-100  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 "
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 mt-4 text-white bg-primary rounded-lg shadow-lg bg-primary/90   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 "
                >
                  Add Food
                </button>
              </form>
            </div>
          ) : (
            <>
              <div className="flex justify-center mb-8">
                <label
                  htmlFor="viewMode"
                  className="mr-2 relative top-2 text-primary dark:text-primary-dark font-bold"
                >
                  View Mode:
                </label>
                <select
                  id="viewMode"
                  value={viewMode}
                  onChange={(e) => setViewMode(e.target.value)}
                  className="w-1/3 bg-primary dark:bg-primary-dark text-background px-4 py-2 border border-gray-300  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="card">Card View</option>
                  <option value="table">Table View</option>
                </select>
              </div>

              {foods.length > 0 ? (
                viewMode === "card" ? (
                  renderFoodAsCards(foods)
                ) : (
                  renderFoodAsTable(foods)
                )
              ) : (
                <p className="text-primary text-4xl font-semibold dark:text-gray-300">
                  No food items available.
                </p>
              )}
            </>
          )}
        </div>
      </Wrapper>
      <Footer />
    </>
  );
};

export default MenuItems;
