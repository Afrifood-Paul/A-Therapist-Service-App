import React from "react";
import img1 from "../../assets/img1.webp";
import img2 from "../../assets/img2.webp";
import img3 from "../../assets/img3.webp";
import img4 from "../../assets/img4.webp";
import leaf from "../../assets/leaf.webp";
import { FaCheckCircle, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const MentalPage2 = () => {
  return (
    <div className="w-[90%] lg:w-full xl:w-[80%] mx-auto h-full grid lg:grid-cols-2 gap-10">
      <div className="grid grid-cols-2 pt-8 lg:py-8 lg:px-8 lg:mt-20">
        <div className="flex justify-center items-center ">
          <div className="w-[85%] h-[85%] xl:w-[85%] xl:h-[85%] rounded-xl overflow-hidden">
            <img
              src={img1}
              alt="Woman in field"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="rounded-xl overflow-hidden">
          <img
            src={img2}
            alt="Couple talking in park"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="rounded-xl overflow-hidden">
          <img
            src={img3}
            alt="Woman smiling in park"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex justify-center items-center">
          <div className="w-[85%] h-[85%] rounded-xl overflow-hidden">
            <img
              src={img4}
              alt="Woman smiling in park"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="h-96">
        <div className="flex justify-between items-center">
          <div className="flex-flex-col lg:pt-10 xl:pt-32">
            <p className="inline-block px-4 py-2 bg-[#83cc61] bg-opacity-30 rounded-full text-black text-sm md:text-lg lg:text-sm font-semibold">
              Welcome
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-medium text-black py-4 lg:py-3">
              Transform Your
              <br />
            </h2>
            <span
              className="text-[#83cc61] text-4xl md:text-6xl lg:text-4xl xl:text-6xl font-bold italic"
              style={{ fontFamily: "Great Vibes, cursive" }}
            >
              Mental Health
            </span>
          </div>
          <div className="hidden lg:block">
            <img
              src={leaf}
              alt="leaf"
              className="w-28 -mt-10 lg:mr-10 xl:mr-0 animate-float"
            />
          </div>
        </div>
        <div className="lg:text-left">
          <p className="text-gray-500 leading-8 py-4 text-sm lg:text-[16px]">
            Located in New York, NY, Mindthera specializes in providing
            top-notch psychotherapy services. Our team of experienced
            professionals is dedicated to helping you achieve mental wellness
            and personal growth. Trust Mindthera for all your psychotherapy
            needs.
          </p>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-0 justify-between items-center  ">
          {/* Left Section with Checkmarks and Text */}
          <div className="space-y-2 font-medium">
            <div className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" />
              <span>Ut cupidatat veniam cillum.</span>
            </div>
            <div className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" />
              <span>Ex labore dolore eiusmod aliquip.</span>
            </div>
            <div className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" />
              <span>Culpa exercitation.</span>
            </div>
            <div className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" />
              <span>Lorem ipsum elit sed commodo amet.</span>
            </div>
          </div>

          {/* Right Section with Review and Stars */}
          <div className="space-y-3">
            <div className="text-xl font-bold">Excellent</div>
            <div className="flex items-center ">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="text-yellow-400 mr-2" />
              ))}
            </div>
            <div className=" text-gray-500">
              Based on{" "}
              <span className="font-semibold text-gray-800">185 reviews</span>
            </div>
            <div className=" flex items-center">
              <img src="" alt="Trustpilot Logo" className="w-6 h-6 mr-2" />
              <span className="font-semibold">Trustpilot</span>
            </div>
          </div>
        </div>
        <Link to ="/about-us">
          <button className="mt-4 xl:mt-6 px-4 py-2 bg-[#5a9e7c] text-white rounded-full">
            About Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MentalPage2;
