import React from "react";
import ServiceCard from "../Services-Component/Service-Card";
import { services } from "../constants/Services-Constant";
// import flowerCrop from "../assets/flowers-crop2.jpg";

const MentalHealthTransfom = () => {
  return (
    <section className="bg-gray-200 pt-10 relative">
      <div className="text-center max-w-2xl mx-auto py-20">
        <div className="bg-[#d9f6e0] inline-block px-4 py-1 text-sm font-sans font-semibold rounded-full text-gray-800 mb-4">
          Our Services
        </div>
        <h2 className="text-4xl flex flex-col gap-2 font-semibold">
          Transform Your{" "}
          <span
            style={{ fontFamily: "Great Vibes, cursive" }}
            className="text-[#8CC63E] text-4xl"
          >
            Mental Health
          </span>
        </h2>
      </div>
      <div className="w-[80%] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 lg:pb-12">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              image={service.image}
              number={`0${index + 1}`}
            />
          ))}
        </div>
        {/* <div className="absolute top-0 -left-20 hidden md:block">
          <img
            src={flowerCrop}
            alt=""
            className="w-[400px] lg:w-[280px] xl:w-[450px]"
          />
        </div> */}
      </div>
    </section>
  );
};

export default MentalHealthTransfom;
