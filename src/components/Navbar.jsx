// src/components/Navbar.js
import React, { useEffect, useState } from "react";
import logo from "../assets/open-minded-logo.png";
import { NavLink, useNavigate } from "react-router-dom";
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
    { label: "Service Style 1", path: "/services" },
    { label: "Service Style 2", path: "/services-two" },
    { label: "Service Style 3", path: "/services-three" },
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
          <img src={logo} alt="Open-Minded Logo" width={160} />
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
            <NavLink to={"/about-us"} className="text-sm font-semibold">About Us</NavLink>
            <NavLink to={"/study-case"} className="text-sm font-semibold">Study Case</NavLink>
            <NavLink to={"/blog"} className="text-sm font-semibold">Blog</NavLink>
            <NavLink to={"/contact-us"} className="text-sm font-semibold">
              Contact
            </NavLink>
          </div>
        </nav>

        {/* Contact Info */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <MdHeadsetMic className=" lg:text-3xl xl:text-5xl text-[#5a9e7c] " />
            <div
              className={`flex flex-col items-center ${
                isScrolled ? "text-black lg:text-black" : "lg:text-white"
              }`}
            >
              <p className="text-xs">Need Help?</p>
              <p className="font-bold">+7808841985</p>
            </div>
          </div>
          <NavLink to="/appointment" className="bg-[#5a9e7c] text-sm  text-white px-3 py-2 rounded-full font-poppins font-semibold">
            Make Appointment
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex gap-10 items-center">
          <div className="items-center space-x-1 hidden md:flex ">
            <MdHeadsetMic className="text-3xl text-[#83cc61]" />
            <div className="flex flex-col items-center">
              <p className="text-xs">Need Help?</p>
              <p className="font-bold">+780 884 1985</p>
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
          <NavLink to={"/aboutus"} className="block py-3 px-2 md:px-5 font-semibold text-sm border-b border-gray-700">
            About Us
          </NavLink>
          <NavLink to={"/Studycase"} className="block py-3 px-2 md:px-5 font-semibold text-sm border-b border-gray-700">
            Study Case
          </NavLink>
          <NavLink to={"/blog"} className="block py-3 px-2 md:px-5 font-semibold text-sm border-b border-gray-700">
            Blog
          </NavLink>
          <NavLink to={"/contact"} className="block py-3 px-2 md:px-5 font-semibold text-sm border-b border-gray-700">
            Contact
          </NavLink>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
