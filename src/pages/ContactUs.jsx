import React from "react";
import Navbar from "../components/Navbar";
import { FaAngleRight } from "react-icons/fa";
import NavbarContact from "../components/NavbarContact";
import { NavLink } from "react-router-dom";
import office from "../assets/building.webp";
import { ImLocation, ImLocation2 } from "react-icons/im";
import { BiSolidMessage, BiSolidPhone, BiTime } from "react-icons/bi";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <section>
      <div className="sticky top-0 w-full z-30 bg-white">
        <NavbarContact />
      </div>
      <div className="bg-gradient-to-r from-[#5a9e7c] to-[#83cc61]">
        <div className="w-[80%] mx-auto flex justify-between items-center py-5">
          <h2 className="text-white text-2xl font-medium">Contact</h2>
          <div className="flex items-center gap-3 text-sm">
            <div className="flex items-center gap-2">
              <NavLink to={"/"} className="font-medium text-white">
                Home
              </NavLink>
              <FaAngleRight className="font-medium text-white" />
            </div>
            <p className="font-medium text-white">Contact</p>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-5 my-20 w-[90%] lg:w-[80%] mx-auto">
        <div className="flex flex-col gap-5">
          <h2 className="bg-[#83cc61] bg-opacity-55 w-28 text-black font-sans text-xs font-semibold rounded-xl px-3 py-2">
            Contact Form
          </h2>
          <h1 className="text-4xl font-sans font-semibold">Get In Touch</h1>
          <p className="text-gray-500 font-sans leading-8 text-[16px]">
            Whether you have a question, a suggestion, or just want to say
            hello, this is the place to do it. Please fill out the form below
            with your details and message, and we'll get back to you as soon as
            possible.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="relative">
              <h1 className="text-xl font-medium font-san py-4">Our Office</h1>
              <img
                src={office}
                alt=""
                className="rounded-xl w-full object-cover"
              />

              <p className="absolute bottom-0 left-20 lg:left-14 py-2 text-white font-medium">
                Mon - Fri 08.00 - 18.00
              </p>
            </div>
            <div className="flex flex-col gap-14 lg:gap-12 lg:mt-14">
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <ImLocation2 className="text-green-800" />
                  <h1 className="text-lg font-semibold">Office Location</h1>
                </div>
                <p className="text-gray-500">100 S Main St, Los Angeles, CA</p>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <BiSolidMessage className="text-green-800" />
                  <h1 className="text-lg font-semibold">Send Message</h1>
                </div>
                <p className="text-gray-500">Contact@open-minded.com</p>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <BiSolidPhone className="text-green-800" />
                  <h1 className="font-semibold">Call Us Directly</h1>
                </div>
                <p className="text-gray-500 text-sm">+234 5655 6565</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100  lg:mt-0 rounded-xl w-full">
          <div className="w-[90%] mx-auto">
            <form className="my-5 flex flex-col gap-5">
              <div>
                <input
                  type="text"
                  autoComplete="off"
                  placeholder="Your Name"
                  className="bg-white w-full font-sans placeholder-gray-500 text-sm px-2 py-3 rounded-lg border-none focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="email"
                  autoComplete="off"
                  placeholder="Your Email"
                  className="bg-white w-full font-sans placeholder-gray-500 text-sm px-2 py-3 rounded-lg border-none focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="phone"
                  autoComplete="off"
                  placeholder="Your Phone"
                  className="bg-white w-full font-sans placeholder-gray-500 text-sm px-2 py-3 rounded-lg border-none focus:outline-none"
                />
              </div>
              <div>
                <textarea
                  type="email"
                  placeholder="Your Messages"
                  className="bg-white w-full font-sans h-60 placeholder-gray-500 text-sm px-2 py-2 rounded-lg border-none focus:outline-none"
                />
              </div>
              <div className="flex items-start">
                <button className="px-4 py-3 bg-[#5a9e7c] text-white font-sans rounded-xl">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/*clicnic section */}
      <div className="flex flex-col lg:flex-row">
        {/* Left Section */}
        <div className="flex-1 bg-[#5a9e7c] flex flex-col items-center justify-center p-10 text-white">
          <div className="text-center">
            <div className="mb-4 flex items-center justify-center">
              <BiTime className="text-5xl" />
            </div>
            <h2 className="text-2xl font-semibold mb-2">
              Schedule Your Appointment Today!
            </h2>
            <p className="mb-4">
              Mon - Sat: 8AM - 9PM <br /> Sunday: 10AM - 8PM
            </p>
            <button className="bg-[#28744e] bg-opacity-35 py-2 px-4 rounded-full hover:bg-green-700 transition duration-300">
              Make Appointment
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 bg-[#83cc61] flex flex-col items-center justify-center p-10 text-white">
          <div className="text-center">
            <div className="mb-4 flex items-center justify-center">
              <ImLocation className="text-5xl" />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Visit Our Clinic</h2>
            <p className="mb-4">
              789 Elm Avenue <br /> Brooklyn, NY 11201
            </p>
            <button className="bg-lime-50 bg-opacity-35 py-2 px-4 rounded-full hover:bg-green-500 transition duration-300">
              Get Direction
            </button>
          </div>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </section>
  );
};

export default Contact;
