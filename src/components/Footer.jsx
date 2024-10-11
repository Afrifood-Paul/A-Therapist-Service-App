import React, { useState } from "react";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoPaypal,
  BiLogoTwitter,
  BiLogoYoutube,
} from "react-icons/bi";
import logo from "../assets/open-minded-logo.png";
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
    land is traditional of many First Nations such as Nehiyawak/Cree, Tsuut'ina, 
    Niitsitapi/Blackfoot, Otipemisiwak/Métis, Nakota Sioux, Haudenosaunee/Iroquois, Déné, 
    Anishinaabe/Ojibway/Saulteaux, Inuit, and many others. We continue to protect the land 
    within the Edmonton region, recognize the importance of this land and continue the legacy 
    of stewardship that has fostered this land since time ancient through the work that we do.`;

  const shortText = fullText.slice(0, 155);

  return (
    <footer className="bg-[#f6f8f9] pt-12 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {/* Logo and Description */}
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <img src={logo} alt="Logo" className="mb-4" width={150} />
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              {isExpanded ? fullText : `${shortText}...`}
            </p>
            <button
              className="bg-[#5a9e7c] text-white px-4 py-2 rounded-full text-sm focus:outline-none"
              onClick={toggleReadMore}
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <h3 className="text-lg font-semibold mb-4">Please contact for details</h3>
            <p className="text-gray-600 text-sm mb-2">Virtual Consultation</p>
            <NavLink
              to="#"
              onClick={(e) => {
                window.location.href = "mailto:info@openmindedservices.com";
                e.preventDefault();
              }}
              className="text-gray-600 text-sm mb-4 block"
            >
              appointment@openmindedservices.com
            </NavLink>

            <div className="flex items-center gap-2 mt-6 mb-2">
              <FaMessage className="text-green-800" />
              <h3 className="text-lg font-semibold">Email Us</h3>
            </div>
            <NavLink
              to="#"
              onClick={(e) => {
                window.location.href = "mailto:info@openmindedservices.com";
                e.preventDefault();
              }}
              className="text-gray-600 text-sm mb-4 block"
            >
              info@openmindedservices.com
            </NavLink>
          </div>

          {/* Social Media Links */}
          <div className="w-full lg:w-1/3 px-4 mb-8">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <SocialLink icon={BiLogoFacebook} url="https://www.facebook.com/profile.php?id=61552553109527&mibextid=ZbWKwL" openInNewTab={openInNewTab} />
              <SocialLink icon={BiLogoTwitter} url="#" openInNewTab={openInNewTab} />
              <SocialLink icon={BiLogoPaypal} url="#" openInNewTab={openInNewTab} />
              <SocialLink icon={BiLogoInstagram} url="https://www.instagram.com/openmindedservicecenter?igsh=dThndGNkMmVyOG43" openInNewTab={openInNewTab} />
              <SocialLink icon={BiLogoYoutube} url="#" openInNewTab={openInNewTab} />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright and Terms */}
      <div className="border-t border-gray-300 mt-5 py-5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm font-medium text-center md:text-left mb-4 md:mb-0">
              <p>
                Copyright 2024 - Open-Minded Service Center - Developed by{" "}
                <NavLink
                  to="#"
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
      </div>
    </footer>
  );
};

const SocialLink = ({ icon: Icon, url, openInNewTab }) => (
  <NavLink
    to="#"
    onClick={(e) => {
      e.preventDefault();
      openInNewTab(url);
    }}
    className="hover:bg-white hover:rounded duration-200 p-2"
  >
    <Icon className="text-xl text-gray-600" />
  </NavLink>
);

export default Footer;