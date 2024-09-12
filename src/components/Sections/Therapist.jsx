import React from "react";
import { services } from "../../constants/Services-Constant";
import Flower from "../../assets/flowers-crop-3-white.webp";
import flowerCrop from "../../assets/flowers-crop-2.webp";

const CounselingCard = ({ title, description, image }) => {
  return (
    <div>
      <div className="relative group overflow-hidden rounded-lg shadow-md bg-white">
        <div className="relative">
          <img src={image} alt={title} className="w-full h-80 object-cover" />
          <div className="absolute top-2 right-2">
            <img src={Flower} alt="Flower" className="w-40" />
          </div>
          <div className="absolute inset-0 bg-gray-300 bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="bg-[#5a9e7c] text-white px-5 py-3 rounded-full flex items-center font-bold text-sm">
              Read More
            </button>
          </div>
        </div>
      </div>
      <div className="p-5">
        <h3 className="lg:text-xl font-san font-medium">{title}</h3>
        <p className="text-gray-400 font-medium font-serif leading-7 text-sm">
          {description}
        </p>
      </div>
    </div>
  );
};

const Therapist = () => {
  return (
    <div className="relative lg:w-[80%] mx-auto m-8 py-16 px-4">
      <div className="text-center mb-12 relative z-10">
        <span className="inline-block bg-[#e1ffd4] text-[#2f5b1b] text-sm font-bold px-4 py-2 rounded-full mb-4">
          Our Services
        </span>
        <h2 className=" text-2xl lg:text-4xl pb-4 font-sans font-bold text-gray-800">
          Therapist &
          <span
            className=" font-sans text-3xl lg:text-5xl font-semibold text-[#b7e576]"
            style={{ fontFamily: "Great Vibes, cursive" }}
          >
            {" "}
            Treatments
          </span>
        </h2>
        <p className="text-gray-500 w-full lg:w-[50%] mx-auto leading-7">
          Qui culpa qui consequat officia cillum quis irure aliquip ut dolore
          sit eu culpa ut irure nisi occaecat dolore adipisicing do pariatur.
        </p>
      </div>

      <div className="grid mx-5 my-3  grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <CounselingCard key={index} {...service} />
        ))}
      </div>
      <div className="absolute -top-8 -left-40 hidden md:block">
        <img
          src={flowerCrop}
          alt=""
          className="w-[400px] lg:w-[280px] xl:w-[450px]"
        />
      </div>
    </div>
  );
};

export default Therapist;
