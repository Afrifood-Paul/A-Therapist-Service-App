import React from "react";
import NavbarContact from "../components/NavbarContact";
import { NavLink } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import Footer from "../components/Footer";
import office from "../assets/office.jpg";
import { BiSolidMessage, BiSolidPhone } from "react-icons/bi";

const Support = () => {
  return (
    <section>
      <div className="sticky top-0 w-full z-30 bg-white">
        <NavbarContact />
      </div>
      <div className="bg-gradient-to-r from-[#5a9e7c] to-[#83cc61]">
        <div className="w-[80%] mx-auto flex justify-between items-center py-5">
          <h2 className="text-white text-2xl font-medium">Support</h2>
          <div className="flex items-center gap-3 text-sm">
            <div className="flex items-center gap-2">
              <NavLink to={"/"} className="font-medium text-white">
                Home
              </NavLink>
              <FaAngleRight className="font-medium text-white" />
            </div>
            <p className="font-medium text-white">Support</p>
          </div>
        </div>
      </div>
      <div className="mt-10 lg:mt-20">
        <div className="flex flex-col xl:flex-row gap-20 w-[90%] lg:w-[80%] mx-auto">
          <div className="lg:w-[70%]">
            <h1 className="text-4xl font-sans font-semibold">Get In Touch</h1>
            <p className="text-gray-500 font-sans leading-8 text-[16px]">
              For further inquiries, please click the "Need Support" button
              below and complete the form. Our team will review your request and
              respond promptly, ensuring there are no delays.
            </p>
            <button className="mt-20 ">
              <NavLink
                to="https://tinyurl.com/4v65uwj6"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#5a9e7c] text-xl hover:bg-[#5dc390] transition duration-500  text-white px-20 lg:px-32 py-10 rounded-full font-poppins font-semibold"
              >
                Need Support ?
              </NavLink>
            </button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="relative">
              <h1 className="text-xl font-medium font-san py-4">Our Office</h1>
              <img
                src={office}
                alt=""
                className="rounded-xl w-full h-60 object-cover"
              />

              <p className="absolute bottom-0 left-20 lg:left-14 py-2 text-white font-medium">
                Mon - Fri 08.00 - 18.00
              </p>
            </div>
            <div className="flex flex-col gap-14 lg:gap-12 lg:mt-14">
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  {/* <ImLocation2 className="text-green-800" /> */}
                  <h1 className="text-lg font-semibold">
                    Please contact for details
                  </h1>
                </div>
                <p className="text-gray-500">Virtual Consultation</p>
                <p>appointment@openmindedservices.com</p>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <BiSolidMessage className="text-green-800" />
                  <h1 className="text-lg font-semibold">Email Us:</h1>
                </div>
                <p className="text-gray-500">
                  info@openminded
                  <br />
                  services.com
                </p>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <BiSolidPhone className="text-green-800" />
                  <h1 className="font-semibold">Call Us Directly</h1>
                </div>
                <p className="text-gray-500 text-sm">(780)-953-0173</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </section>
  );
};

export default Support;
