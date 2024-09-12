import React from "react";
import { Link } from "react-router-dom";

const PricingCard = ({ title, price, image, description, features }) => {
  const titleBackgroundColors = {
    "Individual Therapy": "#5a9e7c",
    "Couples Counseling": "#83cc61",
    "Career Counseling": "#5a9e7c",
  };

  
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div
        className="py-3 px-6"
        style={{ backgroundColor: titleBackgroundColors[title] }}
      >
        <h3 className="text-white text-xl font-semibold">{title}</h3>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-gray-500">Start from</p>
            <p className="text-4xl font-semibold text-[#83cc61]">
              ${price}
              <span className="text-sm text-gray-500">/session</span>
            </p>
          </div>
          <img
            src={image}
            alt="Therapy session"
            className="w-20 h-20 rounded-full object-cover"
          />
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 font-bold text-[#83cc61]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
        <Link to="/appointment" >
          <button className="w-full font-semibold bg-gray-100 text-gray-600 py-2 rounded-full hover:bg-[#5a9e7c] hover:text-white transition">
            Make Appointment
          </button>
        </Link>
      </div>
    </div>
  );
};
export default PricingCard;
