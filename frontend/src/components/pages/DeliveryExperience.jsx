/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";
import man from "../../assets/man.png";
import deliver4 from "../../assets/deliver4.png";
import uber from "../../assets/uber.png";
import website from "../../assets/website.png";
import Wrapper from "../Wrapper";

const deliveryImages = [
  {
    id: 1,
    src: uber,
    alt: "Uber Eats delivery driver on motorcycle",
    className: "object-cover w-full h-full rounded-lg",
  },
  {
    id: 2,
    src: deliver4,
    alt: "Restaurant table card",
    className: "object-cover w-full h-full rounded-lg",
  },
  {
    id: 3,
    src: man,
    alt: "Delivery person with backpack",
    className: "object-cover w-full h-full rounded-lg",
  },
  {
    id: 4,
    src: website,
    alt: "Food delivery app interface",
    className: "object-cover w-full h-full rounded-lg",
  },
];

export default function DeliveryExperience() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <Wrapper>
        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {deliveryImages.map((image) => (
            <div
              key={image.id}
              className="aspect-square relative overflow-hidden rounded-lg"
            >
              <img
                src={image.src}
                alt={image.alt}
                className={image.className}
              />
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-6 leading-tight">
            Let's take your Delivery
            <br />
            Experience to the next level
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Pick one of our stock themes, or create your custom theme with the
            most advanced theme editor on any online survey building tool. Pick
            one of our stock themes, or create your custom theme with the most
            advanced theme editor on any online survey building tool.
          </p>
        </div>
      </Wrapper>
    </section>
  );
}
