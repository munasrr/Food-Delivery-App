// eslint-disable-next-line no-unused-vars
import React from "react";
import deliver3 from "/deliver-3.png";
import Wrapper from "../Wrapper";

export default function Order() {
  return (
    <section className="bg-[#FFF5EB] min-h-[600px] flex items-center">
      <Wrapper>
        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Column - Content */}
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl font-bold text-[#0A2540] leading-tight mb-6">
                Your order knocking on
                <br />
                the door. Please receive
              </h1>
              <p className="text-gray-600 text-lg mb-8">
                Pick one of our stock themes, or create your custom theme with
                the most advanced theme editor on any online.
              </p>
              <button className="bg-[#00D084] text-white px-8 py-3 rounded-full font-medium inline-flex items-center group hover:bg-[#00B371] transition-colors">
                Order More
                <svg
                  className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* Right Column - Image */}
            <div className="relative h-[400px] lg:h-[500px]">
              <img
                src={deliver3}
                alt="Delivery person with food"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
