import React, { useState } from "react";
import { BiTime, BiMap, BiPhone } from "react-icons/bi";
import { Link } from "react-router-dom";
import family from "../../assets/family.webp";
import couple from "../../assets/couple3.webp";
import lady from "../../assets/lady.webp";
import img1 from "../../assets/img1.webp";
import img2 from "../../assets/img2.webp";
import { FaPlus } from "react-icons/fa";

const ContactSection = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  const images = [family, couple, family, couple, img2, family];
  return (
    <div className="relative bg-[#5a9e7c] text-white">
      <div className="flex flex-wrap lg:flex-nowrap gap-10 lg:gap-0 justify-between w-[80%] mx-auto items-center  lg:px-8 py-10">
        {/* Working Hours */}
        <div className="flex flex-col items-left">
          <BiTime className="text-4xl mr-4" />
          <div>
            <p>Mon - Sat: 8AM - 9PM</p>
            <p>Sunday: 10AM - 8PM</p>
          </div>
        </div>

        {/* Location */}
        <div className="flex flex-col items-left">
          <BiMap className="text-4xl mr-4" />
          <div>
            <p>789 Elm Avenue</p>
            <p>Brooklyn, NY 11201</p>
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-left">
          <BiPhone className="text-4xl mr-4" />
          <div>
            <p>+929 333 9296</p>
            <p>contact@mindthera.com</p>
          </div>
        </div>

        {/* Make Appointment Button */}
        <div>
          <Link
            to="/appointment"
            className="bg-green-500 text-white rounded-full px-6 py-2 text-lg font-semibold"
          >
            Make Appointment
          </Link>
        </div>
      </div>

      {/* Images Section */}
      <div className="flex flex-col lg:flex-row ">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-[50%]"
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <img
              src={image}
              alt={`Image ${index + 1}`}
             className="object-cover hover:scale-110 duration-500"
            />
            <FaPlus
              className={`absolute top-[65%] left-[50%] transform -translate-x-1/2 text-white text-5xl transition-opacity duration-500 ${
                hoverIndex === index ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactSection;
