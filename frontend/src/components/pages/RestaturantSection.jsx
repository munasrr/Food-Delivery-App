// eslint-disable-next-line no-unused-vars
import React from "react";
import pizza2 from "../../assets/pizza2.png";
import chipot from "../../assets/chipot.png";
import baked from "../../assets/baked.png";
import chips from "../../assets/chips.png";
import chips2 from "../../assets/chips2.png";
import mcdonald from "../../assets/mcdonald.png";
import Wrapper from "../Wrapper";

const restaurants = [
  {
    id: 1,
    name: "Qoobeey Restaurant",
    address: "Makka Al-Mukarama Road, Mogadishu",
    image: pizza2,
    categories: ["Somali", "Traditional", "Seafood"],
    description: "Famous for authentic Somali dishes and fresh seafood",
  },
  {
    id: 2,
    name: "Safari Hotel Restaurant",
    address: "Wadada Sodonka, Mogadishu",
    image: chipot,
    categories: ["Somali", "Modern", "Breakfast"],
    description: "Traditional breakfast and modern Somali cuisine",
  },
  {
    id: 3,
    name: "Liido Seafood Restaurant",
    address: "Liido Beach, Mogadishu",
    image: chips,
    categories: ["Seafood", "Somali", "Grilled"],
    description: "Beachfront dining with fresh catch of the day",
  },
  {
    id: 4,
    name: "Jazeera Palace Restaurant",
    address: "Airport Road, Mogadishu",
    image: chips2,
    categories: ["Somali", "International", "Camel Meat"],
    description: "Luxury dining with traditional Somali flavors",
  },
  {
    id: 5,
    name: "Beydan Restaurant",
    address: "Maka Al-Mukarama Road, Mogadishu",
    image: mcdonald,
    categories: ["Somali", "Traditional", "Breakfast"],
    description: "Famous for canjeelo and traditional breakfast",
  },
  {
    id: 6,
    name: "Al Xayat Restaurant",
    address: "Bakara Market Area, Mogadishu",
    image: baked,
    categories: ["Somali", "Local", "Street Food"],
    description: "Authentic street food and local specialties",
  },
];

export default function RestaurantSection() {
  return (
    <section className="py-12">
      <Wrapper>
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">
          Our best sellers
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Discover the Best Somali Restaurants in Your Area
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700 shadow-sm">
                    Open
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {restaurant.name}
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  {restaurant.address}
                </p>
                <p className="text-gray-600 text-sm mb-3">
                  {restaurant.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {restaurant.categories.map((category, index) => (
                    <span
                      key={index}
                      className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-medium text-gray-700"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>
              <div className="px-4 py-3 border-t border-gray-100">
                <button className="w-full bg-[#FF9800] text-white py-2 rounded-md hover:bg-[#F57C00] transition-colors duration-300">
                  Ka Dalbo
                </button>
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
