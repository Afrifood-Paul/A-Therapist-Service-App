import React from "react";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoPaypal,
  BiLogoTiktok,
  BiLogoTwitter,
  BiLogoYoutube,
} from "react-icons/bi";
import logo from "../assets/open-minded-logo.png";
import contactFlower from "../assets/flowers-crop-3.webp";
import { ImLocation } from "react-icons/im";
import { FaMessage } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener, noreferrer");
  };
  return (
    <footer className="bg-[#f6f8f9] pt-12 relative">
      <div className="w-[90%] mx-auto lg:w-[80%] lg:ms-16 text-sm grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {/* Logo and Description */}
        <div className="lg:w-[80%] mb-8 lg:mb-0 col-span-2">
          <img src={logo} alt="Logo" className="mb-4" width={150} />
          <p className="text-gray-500 font-san leading-8">
            At Open-Minded, we understand that life’s challenges can sometimes
            feel overwhelming, and seeking support can be a daunting step.
            That’s why our team of dedicated therapists is here to provide you
            with the compassionate guidance and expert care you deserve.
          </p>
        </div>

        {/* Company Links */}
        <div className="w-full mb-8 lg:mb-0">
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="text-gray-600 space-y-2">
            <li className="hover:text-[#83ec3d] duration-300">
              <NavLink>Individual Therapy</NavLink>
            </li>
            <li className="hover:text-[#83ec3d] duration-300">
              <NavLink>Couples Counseling</NavLink>
            </li>
            <li className="hover:text-[#83ec3d] duration-300">
              <NavLink>Career Counseling</NavLink>
            </li>
            <li className="hover:text-[#83ec3d] duration-300">
              <NavLink>Stress management</NavLink>
            </li>
            <li className="hover:text-[#83ec3d] duration-300">
              <NavLink>Anxiety Treatment</NavLink>
            </li>
            <li className="hover:text-[#83ec3d] duration-300">
              <NavLink>Depression Therapy</NavLink>
            </li>
          </ul>
        </div>

        {/* Services Links */}
        <div className="w-full mb-8 lg:mb-0">
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul className="text-gray-600 space-y-2">
            <li className="hover:text-[#83ec3d]">
              <NavLink>About Us</NavLink>
            </li>
            <li className="hover:text-[#83ec3d] duration-300">
              <NavLink>Our Services</NavLink>
            </li>
            <li className="hover:text-[#83ec3d] duration-300">
              <NavLink>Study Case</NavLink>
            </li>
            <li className="hover:text-[#83ec3d] duration-300">
              <NavLink>Blog</NavLink>
            </li>
            <li className="hover:text-[#83ec3d] duration-300">
              <NavLink>Contact Us</NavLink>
            </li>
            <li className="hover:text-[#83ec3d] duration-300">
              <NavLink>Testimonials</NavLink>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="w-full">
          <div className="flex items-center gap-2 pb-2 lg:pb-4">
            <ImLocation className="text-green-800 text-xl" />
            <h3 className="text-lg font-semibold">Office Location</h3>
          </div>
          <p className="text-gray-600 text-xs lg:text-sm">
            100 S Main St, Los Angeles, CA
          </p>

          <div className="flex items-center gap-2 mt-6">
            <FaMessage className="text-green-800" />
            <h3 className="text-lg font-semibold">Send a Message</h3>
          </div>
          <p className="text-gray-600 mb-4">Open-Minded@gmail.com</p>
          <div className="flex space-x-4">
            <NavLink
              to={"#"}
              onClick={(e) => {
                e.preventDefault();
                openInNewTab(
                  "https://www.facebook.com/profile.php?id=61552553109527&mibextid=ZbWKwL"
                );
              }}
              className="hover:bg-[white] hover:rounded duration-200 p-2"
            >
              <BiLogoFacebook className="text-xl text-gray-600" />
            </NavLink>
            <NavLink className="hover:bg-[white] hover:rounded duration-200 p-2">
              <BiLogoTwitter className="text-xl text-gray-600" />
            </NavLink>
            <NavLink className="hover:bg-[white] hover:rounded duration-200 p-2">
              <BiLogoPaypal className="text-xl text-gray-600" />
            </NavLink>
            <NavLink
              onClick={(e) => {
                e.preventDefault();
                openInNewTab(
                  "https://www.instagram.com/openmindedservicecenter?igsh=dThndGNkMmVyOG43"
                );
              }}
              className="hover:bg-[white] hover:rounded duration-200 p-2"
            >
              <BiLogoInstagram className="text-xl text-gray-600" />
            </NavLink>
            <NavLink className="hover:bg-[white] hover:rounded duration-200 p-2">
              <BiLogoYoutube className="text-xl text-gray-600" />
            </NavLink>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-5 py-5">
        <div className="w-[90%] mx-auto flex flex-col lg:flex-row gap-3 items-center justify-between">
          <div className="text-gray-500 text-sm font-medium text-center lg:text-left">
            <p>Copyright 2024 - Open-Minded Service Center-Developed by Placid</p>
          </div>
          <div className="flex gap-5 items-center text-gray-500 text-sm font-medium">
            <h2>Terms & Conditions</h2>
            <h2>Privacy Policy</h2>
          </div>
        </div>
      </div>
      <div>
        <img
          src={contactFlower}
          alt=""
          className="w-60 absolute top-0 right-0"
        />
      </div>
    </footer>
  );
};

export default Footer;
