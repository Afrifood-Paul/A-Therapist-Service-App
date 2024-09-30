import React, { useState } from "react";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoPaypal,
  BiLogoTiktok,
  BiLogoTwitter,
  BiLogoYoutube,
} from "react-icons/bi";
import logo from "../assets/open-minded-logo.png";
// import contactFlower from "../assets/flowers-crop3.jpg";
import { ImLocation } from "react-icons/im";
import { FaMessage } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener, noreferrer");
  };

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const fullText = `
    At Open-Minded Service Center Inc., we acknowledge that we are located on Treaty 6 
    Territory, Métis Homelands, and Nations of Alberta Region 4. We acknowledge that this 
    land is traditional of many First Nations such as Nehiyawak/Cree, Tsuut’ina, 
    Niitsitapi/Blackfoot, Otipemisiwak/Métis, Nakota Sioux, Haudenosaunee/Iroquois, Déné, 
    Anishinaabe/Ojibway/Saulteaux, Inuit, and many others. We continue to protect the land 
    within the Edmonton region, recognize the importance of this land and continue the legacy 
    of stewardship that has fostered this land since time ancient through the work that we do.`;

  const shortText = fullText.slice(0, 155); // Show only the first 150 characters

  return (
    <footer className="bg-[#f6f8f9] pt-12 relative">
      <div className="w-[90%] mx-auto lg:w-[80%] lg:ms-16 text-sm grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {/* Logo and Description */}
        <div className="lg:w-[80%] mb-8 lg:mb-0 col-span-2">
          <img src={logo} alt="Logo" className="mb-4" width={150} />
          <p className="text-gray-500 font-san leading-8">
            {isExpanded ? fullText : `${shortText}...`}
          </p>
          <button
            className="bg-[#83cc61] text-white px-5 py-2 rounded-md focus:outline-none"
            onClick={toggleReadMore}
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </div>

        {/* Company Links */}
        <div className="w-full mb-8 lg:mb-0">
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="text-gray-600 space-y-2">
            <li className="hover:text-[#83ec3d] duration-300">
              <NavLink>Individual Counseling</NavLink>
            </li>
            <li className="hover:text-[#83ec3d] duration-300">
              <NavLink>Stress</NavLink>
            </li>
            <li className="hover:text-[#83ec3d] duration-300">
              <NavLink>Anxiety</NavLink>
            </li>
            <li className="hover:text-[#83ec3d] duration-300">
              <NavLink>Depression</NavLink>
            </li>
          </ul>
        </div>

        {/* Services Links */}
        <div className="w-full mb-8 lg:mb-0">
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul className="text-gray-600 space-y-2">
            <li className="hover:text-[#83ec3d]">
              <NavLink to={"/about-us"}>About Us</NavLink>
            </li>
            <li className="hover:text-[#83ec3d] duration-300">
              <NavLink to={"/services"}> Our Services</NavLink>
            </li>
            <li className="hover:text-[#83ec3d] duration-300">
              <NavLink to={"/study-case"}>Study Case</NavLink>
            </li>
            {/* <li className="hover:text-[#83ec3d] duration-300">
              <NavLink to={"/blog"}>Blog</NavLink>
            </li> */}
            <li className="hover:text-[#83ec3d] duration-300">
              <NavLink to={"/contact-us"}>Contact Us</NavLink>
            </li>
            <li className="hover:text-[#83ec3d] duration-300">
              <NavLink
                to={"/appointment"}
                // onClick={(e) => {
                //   e.preventDefault();
                //   openInNewTab(
                //     "appointment@openmindedservices.com"
                //   );
                // }}
              >
                Appointments
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="w-full">
          <div className="flex items-center gap-2 pb-2">
            {/* <ImLocation className="text-green-800 text-xl" /> */}
            <h3 className="text-lg font-semibold">
              Please contact for details
            </h3>
          </div>
          <p className="text-gray-600 text-xs lg:text-sm">
            Virtual Consultation
          </p>
          <NavLink
            to="#"
            onClick={(e) => {
              window.location.href = "mailto:info@openmindedservices.com";
              e.preventDefault(); // Prevent NavLink's default behavior
            }}
            className="text-gray-600 mb-4"
          >
            fadipe.o@openmindedservices.com
          </NavLink>

          <div className="flex items-center gap-2 mt-6">
            <FaMessage className="text-green-800" />
            <h3 className="text-lg font-semibold">Email Us</h3>
          </div>
          <NavLink
            to="#"
            onClick={(e) => {
              window.location.href = "mailto:info@openmindedservices.com";
              e.preventDefault(); // Prevent NavLink's default behavior
            }}
            className="text-gray-600 mb-4"
          >
            info@openmindedservices.com
          </NavLink>
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
            <p>
              Copyright 2024 - Open-Minded Service Center-Developed by{" "}
              <NavLink
                onClick={(e) => {
                  e.preventDefault();
                  openInNewTab("https://placid.ng/");
                }}
              >
                Placid
              </NavLink>
            </p>
          </div>
          <div className="flex gap-5 items-center text-gray-500 text-sm font-medium">
            <h2>Terms & Conditions</h2>
            <h2>Privacy Policy</h2>
          </div>
        </div>
      </div>
      {/* <div>
        <img
          src={contactFlower}
          alt=""
          className="w-60 absolute top-0 right-0"
        />
      </div> */}
    </footer>
  );
};

export default Footer;
