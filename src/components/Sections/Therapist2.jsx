import React from "react";
import { services } from "../../constants/Services-Constant";
import Flower from "../../assets/flowers-crop-3-white.webp";

const ServiceCard = ({ service }) => {
  return (
    <div className="relative group font-poppins sm:w-1/3 p-3 ">
      <div className="relative overflow-hidden rounded-lg shadow-lg">
        <img
          src={service.image}
          alt={service.title}
          className="object-cover w-full h-84 rounded-lg"
        />
        <div className="absolute bottom-0 left-0 transform -rotate-180 ">
          <img src={Flower} alt="Flower" className="w-32" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-center text-normal px-4">{service.description}</p>
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-white group-hover:opacity-0 transition-opacity duration-300">
          <h2 className="text-lg font-semibold">{service.title}</h2>
        </div>
      </div>
    </div>
  );
};

const Therapist2 = () => {
  return (
    <div className="flex flex-wrap justify-center m-4">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
};

export default Therapist2;
