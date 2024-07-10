import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import sallad1 from "../../assets/sallad1.png";
import sallad2 from "../../assets/sallad2.png";
import MenuItem from "../menu/MenuItem";

const HomePage = () => {
  return (
    <section className="bg-background text-text dark:bg-background-dark dark:text-text-dark">
      <div className="relative w-full">
        <div className="absolute left-0 -top-[70px] -z-10">
          <img src={sallad1} alt="Sallad1" width={107} height={195} />
        </div>

        <div className="absolute -top-[100px] right-0 -z-10">
          <img src={sallad2} alt="Sallad2" width={107} height={195} />
        </div>
      </div>
      <div className="text-center">
        <h3 className="uppercase text-gray-500 dark:text-gray-300 font-semibold leading-4">
          Check out
        </h3>
        <h2 className="text-primary dark:text-primary-dark font-bold text-4xl italic">
          Our Best Sellers
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <MenuItem />
        {/* <MenuItem />
       <MenuItem />
       <MenuItem />
       <MenuItem />
       <MenuItem /> */}
      </div>
      <div className="text-center mt-24">
        <Link
          to="/food-list"
          className="bg-primary text-white dark:bg-primary-dark dark:text-text-dark px-2 py-2 rounded-full shadow-lg transform transition-transform hover:scale-105 flex items-center justify-center group w-40 mx-auto"
        >
          Learn More
          <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
};

export default HomePage;
