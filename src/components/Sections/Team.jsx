import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
// import img1 from "../../assets/img1.webp";
// import img2 from "../../assets/img2.webp";
// import img3 from "../../assets/img3.webp";
// import img4 from "../../assets/img4.webp";
// import leaf from "../../assets/leaf.webp";

const Team = () => {
  return (
    <section className="py-16 bg-white lg:w-[85%] mx-auto md:mb-10 lg:mb-0">
      {/* Behind the Scene Badge */}
      <div className="text-center">
        <span className="bg-green-200 bg-opacity-50 text-black text-sm rounded-full px-4 py-2 font-semibold">
          Behind the Scene
        </span>
      </div>

      {/* Title */}
      <h2 className="text-4xl font-bold text-center mt-4">
        Our{" "}
        <span
          className="text-lime-500 text-4xl"
          style={{ fontFamily: "Great Vibes, cursive" }}
        >
          Team
        </span>
      </h2>

      {/* Description */}
      <p className="text-gray-500 text-center mt-2 max-w-2xl mx-auto">
        Qui culpa qui consequat officia cillum quis irure aliquip ut dolore sit
        eu culpa ut irure nisi occaecat dolore adipisicing.
      </p>

      {/* Team Members */}
      <div className="grid md:grid-cols-2 gap-20 lg:gap-10 mt-12 mx-16 md:mx-5 lg:mx-10">
        {/* First Team Member */}
        <div className="relative w-full max-w-xs">
          {/* Image */}
          <img
            className="rounded-lg object-cover w-full h-72"
            src={img1}
            alt="Jeffery Mussman"
          />
          {/* Card Content Overlay */}
          <div className="absolute transform translate-y-1/2 md:left-0 lg:-right-1/2 top-1/2 lg:-translate-y-1/2 bg-green-100 p-6 rounded-lg shadow-md w-11/12">
            <h3 className="text-lg font-semibold">Jeffery Mussman</h3>
            <p className="text-gray-600">Psychologist</p>
            {/* Social Icons */}
            <div className="flex justify-center gap-4 mt-4">
              <a href="#" className="text-gray-600 hover:text-green-600">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-600 hover:text-green-600">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-600 hover:text-green-600">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Second Team Member */}
        <div className="relative w-full max-w-xs">
          {/* Image */}
          <img
            className="rounded-lg object-cover w-full h-72"
            src={img2}
            alt="Sophia Jenkins"
          />
          {/* Card Content Overlay */}
          <div className="absolute transform translate-y-1/2 md:left-0 lg:-right-1/2 top-1/2 lg:-translate-y-1/2 bg-green-100 p-6 rounded-lg shadow-md w-11/12">
            <h3 className="text-lg font-semibold">Sophia Jenkins</h3>
            <p className="text-gray-600">Psychologist</p>
            {/* Social Icons */}
            <div className="flex justify-center gap-4 mt-4">
              <a href="#" className="text-gray-600 hover:text-green-600">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-600 hover:text-green-600">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-600 hover:text-green-600">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Third Team Member */}
        <div className="relative w-full max-w-xs">
          {/* Image */}
          <img
            className="rounded-lg object-cover w-full h-72"
            src={img3}
            alt="Michael Stone"
          />
          {/* Card Content Overlay */}
          <div className="absolute transform translate-y-1/2 md:left-0 lg:-right-1/2 top-1/2 lg:-translate-y-1/2 bg-green-100 p-6 rounded-lg shadow-md w-11/12">
            <h3 className="text-lg font-semibold">Michael Stone</h3>
            <p className="text-gray-600">Psychologist</p>
            {/* Social Icons */}
            <div className="flex justify-center gap-4 mt-4">
              <a href="#" className="text-gray-600 hover:text-green-600">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-600 hover:text-green-600">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-600 hover:text-green-600">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Fourth Team Member */}
        <div className="relative w-full max-w-xs">
          {/* Image */}
          <img
            className="rounded-lg object-cover w-full h-72"
            src={img4}
            alt="Emily Clarke"
          />
          {/* Card Content Overlay */}
          <div className="absolute transform translate-y-1/2 md:left-0 lg:-right-1/2 top-1/2 lg:-translate-y-1/2 bg-green-100 p-6 rounded-lg shadow-md w-11/12">
            <h3 className="text-lg font-semibold">Emily Clarke</h3>
            <p className="text-gray-600">Psychologist</p>
            {/* Social Icons */}
            <div className="flex justify-center gap-4 mt-4">
              <a href="#" className="text-gray-600 hover:text-green-600">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-600 hover:text-green-600">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-600 hover:text-green-600">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
