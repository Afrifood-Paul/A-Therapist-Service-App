import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, description, image, number }) => {
  return (
    <div className="bg-gray-300 bg-opacity-50 w-[90%] h-[100%] shadow-lg rounded-lg p-8 mb-6 text-center relative">
      <div className="w-20 h-20 mx-auto rounded-full overflow-hidden -mt-16 mb-4 shadow-md">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <span style={{ fontFamily: "Great Vibes, cursive" }} className="absolute top-4 right-4 text-2xl font-bold text-[#3eb307]">{number}</span>
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-500 text-sm font-poppins mt-2 mb-4">{description}</p>
      <Link to = "/study-case">
        <button className="bg-gray-300 text-gray-700 font-medium px-4 py-2 rounded-full hover:bg-[#5a9e7c] hover:text-white transition">
          Read More
        </button>
      </Link>
    </div>
  );
};
export default ServiceCard;