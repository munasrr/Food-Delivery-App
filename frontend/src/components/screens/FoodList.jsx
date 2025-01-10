import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  useGetFoodQuery,
  useDeleteFoodMutation,
} from "../../slices/foodApiSlice";
import Loader from "../../components/pages/Loader";
import { addItemToCart } from "../../slices/cartReducer";
import Header from "../../components/pages/Header";
import Footer from "../../components/pages/Footer";
import toast from "react-hot-toast";
import { Pizza } from "lucide-react";
import Wrapper from "../Wrapper";

const FoodList = () => {
  const dispatch = useDispatch();
  const { data, error, isLoading, refetch } = useGetFoodQuery();

  const [editing, setEditing] = useState(null);
  const [editFormData, setEditFormData] = useState({
    name: "",
    description: "",
    price: "",
  });

  const handleEditClick = (food) => {
    setEditing(food._id);
    setEditFormData({
      name: food.name,
      description: food.description,
      price: food.price,
    });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({ ...editFormData, [name]: value });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateFood({ id: editing, ...editFormData });
      setEditing(null);
      toast.success("Food item updated");
      refetch();
    } catch (error) {
      console.error("Error updating food item", error);
    }
  };

  const addToCartHandler = (food) => {
    dispatch(addItemToCart(food));
  };

  const renderFoodAsCards = (foods) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {foods.map((food) => (
        <div key={food._id} className="bg-background p-4 rounded-lg shadow-2xl">
          <div className="flex flex-col justify-between h-full">
            <div className="flex-grow">
              <img
                src={food.image}
                alt={food.name}
                className="w-full h-62 object-cover rounded mb-4"
              />
              <h2 className="text-xl font-semibold text-primary dark:text-primary-dark">
                {food.name}
              </h2>
              <p>{food.description}</p>
              <p>${food.price}</p>
            </div>
            <div className="flex space-x-2 mt-4">
              <button
                className="bg-primary text-background px-4 py-2 rounded hover:bg-primary dark:bg-primary/90"
                onClick={() => addToCartHandler(food)}
              >
                Add to Cart ${food.price}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  if (isLoading) return <Loader />;
  if (error) return <div>Error loading food items</div>;

  const foods = data?.data || [];

  return (
    <>
      <Header />
      <div className="container mx-auto p-4 bg-background text-text dark:bg-background-dark dark:text-text-dark">
        <Wrapper>
          <h1 className="text-4xl font-bold mb-4 mt-24 text-center text-primary dark:text-primary-dark flex items-center justify-center gap-2">
            <Pizza size={32} />
            Food List
          </h1>

          {foods.length > 0 ? (
            renderFoodAsCards(foods)
          ) : (
            <p className="text-gray-700 dark:text-gray-300">
              No food items available.
            </p>
          )}
        </Wrapper>
      </div>
      <Footer />
    </>
  );
};

export default FoodList;
