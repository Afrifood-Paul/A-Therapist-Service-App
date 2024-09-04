import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "./Caraousel/Carousel";
import leaf from "../assets/leaf.webp";
import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.webp";
import img4 from "../assets/img4.webp";
import bg3 from "../assets/bg3.webp";
import jaffery from "../assets/jaffery2.webp";
import { FaCheckCircle, FaStar } from "react-icons/fa";
import StatsSection from "../components/Sections/StatsSections";
import TeamSection from "../components/Sections/TeamSection";
import ContactSection from "../components/Sections/ContactSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="w-full h-full">
      <div className="fixed top-0 w-full z-30">
        <Navbar />
      </div>
      <div className="">
        <Carousel />
      </div>
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
              <p className="inline-block px-4 py-2 bg-green-400 bg-opacity-50 rounded-full text-black text-sm md:text-lg lg:text-sm font-semibold">
                Welcome
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-medium text-black py-4 lg:py-3">
                Transform Your
                <br />
              </h2>
              <span
                className="text-[#0aad02] text-4xl md:text-6xl lg:text-4xl xl:text-6xl font-bold italic"
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
          <button className="mt-4 xl:mt-6 px-4 py-2 bg-green-500 text-white rounded-full">
            About Us
          </button>
        </div>
      </div>

      <div
        className="relative bg-cover bg-center xl:bg-cover xl:bg-center lg:h-[400px] mt-[23rem] lg:mt-[12rem] xl:mt-14 bg-fixed"
        style={{ backgroundImage: `url(${bg3})` }}
      >
        {/* Content Container */}
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white p-4">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-10 max-w-4xl mx-auto">
            {/* Profile Image */}
            <div className="flex flex-col justify-center md:block my-10 md:mb-0">
              <img
                src={jaffery}
                alt="Jeffery Mussman"
                className="lg:w-full w-66 lg:h-full rounded-full shadow-lg lg:bg-cover"
              />
              <div className="py-2">
                <p className="text-sm font-bold pb-2">Jeffery Mussman</p>
                <p className="text-xs">Individual Therapy</p>
              </div>
            </div>

            {/* Text Content */}
            <div>
              <p className="text-3xl leading-10 w-[90%] lg:w-full text-left md:text-xl lg:text-3xl font-semibold">
                Mindthera is exceptional! Their psychologists are highly
                professional and caring. The atmosphere is welcoming and
                calming, and the staff provides outstanding support. Thank you,
                Mindthera, for your excellent service!
              </p>
            </div>
          </div>
        </div>
        {/* Scroll to top indicator */}
        {/* <div className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white text-xs font-semibold flex flex-col items-center">
          <span className="rotate-90 transform">Scroll to top</span>
          <div className="h-16 w-1 bg-gray-200 opacity-30 my-10"></div>
        </div> */}
      </div>
      <div>
        <StatsSection />
        <TeamSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
