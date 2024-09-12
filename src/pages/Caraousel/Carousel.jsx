import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";

import bg1 from "../../assets/slider3.jpg";
import bg2 from "../../assets/slider1.jpg";
import FlowerCrop from "../../assets/flowers-crop1.webp";
import { Link } from "react-router-dom";

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="p-3 rounded-full bg-opacity-50 text-[whitesmoke] text-3xl hover:bg-opacity-75 transition absolute right-4 top-1/2 transform -translate-y-1/2"
  >
    <MdOutlineArrowForwardIos />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="p-3 rounded-full bg-opacity-50 text-[whitesmoke] text-3xl hover:bg-opacity-75 transition absolute left-4 top-1/2 transform -translate-y-1/2 z-10"
  >
    <MdOutlineArrowBackIos />
  </button>
);

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const slides = [
    {
      id: 1,
      content: (
        <div
          className="relative w-full h-screen bg-cover bg-center"
          style={{ backgroundImage: `url(${bg2})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="absolute lg:w-[70%] lg:mx-auto grid grid-cols-1 lg:grid-cols-2 inset-0 items-center lg:ps-10">
            <div className="hidden lg:block"></div>
            <div className=" px-5 lg:px-2 md:text-left">
              <p className="inline-block px-4 py-2 bg-gray-400 bg-opacity-50 rounded-full text-white text-sm md:text-lg lg:text-sm font-semibold">
               Open-Minded
              </p>
              <div className="flex-flex-col">
                <h2 className="text-5xl  md:text-6xl font-medium text-white py-4 lg:py-3">
                  Begin Your <br />
                </h2>
                <span
                  className="text-green-300 text-4xl md:text-6xl font-bold italic"
                  style={{ fontFamily: "Great Vibes, cursive" }}
                >
                  Inner Peace Journey
                </span>
              </div>
              <p className="text-white text-lg md:text-xl lg:text-lg max-w-md">
                Embark on a journey of self-discovery and emotional healing with
                our expert therapists.
              </p>
            <Link to ="/services">

              <button className="mt-6 px-5 py-2 bg-green-500 text-white font-semibold rounded-2xl hover:bg-green-600">
                Our Services
              </button>
            </Link>
            </div>
          </div>
          <div className="absolute bottom-0 left-0">
            <img
              src={FlowerCrop}
              alt="flowercrop1"
              className="bg-cover w-40 md:w-80 lg:w-[27rem]"
            />
          </div>
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div
          className="relative w-full h-screen bg-cover bg-center"
          style={{ backgroundImage: `url(${bg1})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
          <div className="absolute lg:w-[70%] lg:mx-auto grid grid-cols-1 lg:grid-cols-2 inset-0 items-center lg:ps-10">
            <div className="hidden lg:block"></div>
            <div className=" px-5 lg:px-2 md:text-left">
              <p className="inline-block px-4 py-2 bg-gray-400 bg-opacity-50 rounded-full text-white text-sm md:text-lg lg:text-sm font-semibold">
                Open-Minded
              </p>
              <div className="flex-flex-col">
                <h2 className="text-5xl  md:text-6xl font-medium text-white py-4 lg:py-3">
                  Begin Your <br />
                </h2>
                <span
                  className="text-green-300 text-4xl md:text-6xl font-bold italic"
                  style={{ fontFamily: "Great Vibes, cursive" }}
                >
                  Inner Peace Journey
                </span>
              </div>
              <p className="text-white text-lg md:text-xl lg:text-lg max-w-md">
                Embark on a journey of self-discovery and emotional healing with
                our expert therapists.
              </p>
              <button className="mt-6 px-5 py-2 bg-green-500 text-white font-semibold rounded-2xl hover:bg-green-600">
                Our Services
              </button>
            </div>
          </div>
          <div className="absolute bottom-0 left-0">
            <img
              src={FlowerCrop}
              alt="flowercrop1"
              className="bg-cover w-40 md:w-80 lg:w-[27rem]"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id}>{slide.content}</div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
