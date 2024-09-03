// src/components/Navbar.js
import React, { useEffect, useState } from "react";
import logo from "../assets/open-minded.jpg";
import { NavLink } from "react-router-dom";
import { MdHeadsetMic, MdOutlineMenu } from "react-icons/md";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to handle scroll and change background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const homeDropdownItems = [
    { label: "Home Page One", path: "/" },
    { label: "Home Page Two", path: "/home-page-two" },
    { label: "Home Page Three", path: "/home-page-three" },
    { label: "Home Page Four", path: "/home-page-four" },
  ];

  const serviceDropdownItems = [
    { label: "Service Style 1", path: "/service-1" },
    { label: "Service Style 2", path: "/service-2" },
    { label: "Service Style 3", path: "/service-3" },
    { label: "Service Single", path: "/service-single" },
    { label: "Appointment", path: "/appointment" },
  ];

  return (
    <header
      className={`py-2 shadow-md transition-colors duration-300  ${
        isScrolled ? "bg-white" : "bg-inherit"
      }`}
    >
      <div className="w-[95%] lg:w-full xl:w-[80%] mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Open-Minded Logo" width={150} />
        </div>

        {/* Desktop Navigation */}
        <nav className={`hidden lg:flex space-x-6`}>
          <Dropdown
            label="Home"
            items={homeDropdownItems}
            isOpen={isHomeDropdownOpen}
            toggleDropdown={() => setIsHomeDropdownOpen(!isHomeDropdownOpen)}
            isScrolled={isScrolled}
          />
          <Dropdown
            label="Services"
            items={serviceDropdownItems}
            isOpen={isServiceDropdownOpen}
            toggleDropdown={() =>
              setIsServiceDropdownOpen(!isServiceDropdownOpen)
            }
            isScrolled={isScrolled}
          />
          <div
            className={`space-x-6 font-sans ${
              isScrolled ? "text-black lg:text-black" : " lg:text-white"
            }`}
          >
            <NavLink className="text-sm font-semibold">About Us</NavLink>
            <NavLink className="text-sm font-semibold">Study Case</NavLink>
            <NavLink className="text-sm font-semibold">Blog</NavLink>
            <NavLink className="text-sm font-semibold">Contact</NavLink>
          </div>
        </nav>

        {/* Contact Info */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <MdHeadsetMic className=" lg:text-3xl xl:text-5xl text-green-500" />
            <div
              className={`flex flex-col items-center ${
                isScrolled ? "text-black lg:text-black" : "lg:text-white"
              }`}
            >
              <p className="text-xs">Need Help?</p>
              <p className="font-bold">+929 333 9296</p>
            </div>
          </div>
          <NavLink className="bg-[#02bc5f] text-sm  text-white px-6 py-3 rounded-full hover:bg-green-600">
            Make Appointment
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex gap-10 items-center">
          <div className="items-center space-x-1 hidden md:flex ">
            <MdHeadsetMic className="text-3xl text-green-500" />
            <div className="flex flex-col items-center">
              <p className="text-xs">Need Help?</p>
              <p className="font-bold">+929 333 9296</p>
            </div>
          </div>
          <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
            <MdOutlineMenu className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden w-full h-[85vh] mt-2 bg-[#222] text-white">
          <Dropdown
            label="Home"
            items={homeDropdownItems}
            isOpen={isHomeDropdownOpen}
            toggleDropdown={() => setIsHomeDropdownOpen(!isHomeDropdownOpen)}
          />
          <Dropdown
            label="Services"
            items={serviceDropdownItems}
            isOpen={isServiceDropdownOpen}
            toggleDropdown={() =>
              setIsServiceDropdownOpen(!isServiceDropdownOpen)
            }
          />
          <NavLink className="block py-3 px-2 md:px-5 font-semibold text-sm border-b border-gray-700">
            About Us
          </NavLink>
          <NavLink className="block py-3 px-2 md:px-5 font-semibold text-sm border-b border-gray-700">
            Study Case
          </NavLink>
          <NavLink className="block py-3 px-2 md:px-5 font-semibold text-sm border-b border-gray-700">
            Blog
          </NavLink>
          <NavLink className="block py-3 px-2 md:px-5 font-semibold text-sm border-b border-gray-700">
            Contact
          </NavLink>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
