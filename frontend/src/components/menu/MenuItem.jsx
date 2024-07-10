import React from "react";
import { useDispatch } from "react-redux";
import pizza from "../../assets/pizza.png";
import meat from "../../assets/meat-sallad.jpg";
import pasta1 from "../../assets/pasta-1.jpg";
import { addItemToCart } from "../../slices/cartReducer";

const MenuItem = () => {
  const dispatch = useDispatch();

  const menuItems = [
    {
      id: "1",
      image: pizza,
      name: "Pepperoni Pizza",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
      price: 10, // Set your prices here
    },
    {
      id: "2",
      image: meat,
      name: "Meat with Salad",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
      price: 15,
    },
    {
      id: "3",
      image: pasta1,
      name: "Pasta with Salad",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
      price: 12,
    },
  ];

  const addToCartHandler = (item) => {
    dispatch(
      addItemToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        quantity: 1,
      })
    );
  };

  return (
    <>
      {menuItems.map((item) => (
        <div
          key={item.id}
          className=" bg-background text-text relative top-14 p-4 rounded-lg text-center w-4/5 mx-auto shadow-2xl mb-6"
          style={{ height: "400px" }} // Fixed height for each cart item
        >
          <div className="h-2/3">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover rounded-t-lg"
            />
          </div>
          <div className="h-1/3 flex flex-col justify-between">
            <h4 className="font-semibold my-3 text-xl">{item.name}</h4>
            <p className="text-gray-500 text-sm">{item.description}</p>
            <button
              className="bg-primary text-white rounded-full px-4 py-2 mt-3 text-lg font-semibold"
              onClick={() => addToCartHandler(item)}
            >
              Add to cart - ${item.price}
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default MenuItem;
