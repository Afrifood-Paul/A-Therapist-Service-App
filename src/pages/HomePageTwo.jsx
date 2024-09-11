import React from "react";
import Navbar from "../components/Navbar";
import bg4 from "../assets/bg4.webp";
import bg3 from "../assets/bg3.webp";
import bushes from "../assets/bushes.webp";
import { FaPlay } from "react-icons/fa";
import jaffery from "../assets/jaffery2.webp";
import { LuClock9, LuPhoneCall } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";
import CountUp from "react-countup";
import TeamSection from "../components/Sections/TeamSection";
import Footer from "../components/Footer";
import HowItWorks from "../components/Sections/HowItWorks";
import MentalHealthTransfom from "./MentalHealthTransfom";
import OurPackage from "../components/Sections/OurPackages";
import FAQAndContactSection from "../Services-Component/ServiceFaq.component";

const HomePageTwo = () => {
  return (
    <div>
      <div className="fixed top-0 w-full z-30">
        <Navbar />
      </div>
      <div
        className="relative w-full h-screen bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${bg4})` }}
      >
        <section
          className="relative h-screen bg-cover bg-center flex items-center"
          style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}
        >
          {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
          <div className="relative lg:max-w-6xl mx-auto ps-3  text-white z-10">
            <div className="inline-block px-4 py-2 bg-gray-400 bg-opacity-50 rounded-full text-white text-sm md:text-lg lg:text-sm font-semibold">
              Your Personal Therapist
            </div>
            <h1 className="text-4xl md:text-5xl font-sans font-bold lg:leading-[4rem]">
              Your <span className="font-light text-[#166f16de]">Pathway</span>{" "}
              to <br />
              Mental <span className="font-light text-[#5a9e7c]">Wellness</span>
            </h1>
            <p className=" text-sm md:text-lg xl:text-lg font-sans leading-8 md:w-[70%] lg:w-[50%]">
              Lorem ipsum consequat ut mollit consequat ad reprehenderit sint in
              consequat ex mollit ex adipisicing nulla in incididnt officia sit
              nostrud culpa eu culpa commodo velit in ad cupidatat laboris in ut
              sit.
            </p>
            <button className="mt-6 bg-[#5a9e7c] hover:bg-green-600 text-white py-2 px-5 rounded-full text-sm font-sans">
              Our Services
            </button>
          </div>
        </section>
        <section className="w-full grid grid-cols-1 md:grid-cols-3">
          <div className="bg-[#5a9e7c] h-40 w-full">
            <div className="flex flex-col p-5 items-start">
              <div className="flex items-center mb-4">
                <div className="text-white">
                  <LuClock9 size={43} />
                </div>
              </div>
              <div className="text-white leading-7">
                <p>Mon - Sat: 8AM - 9PM</p>
                <p>Sunday: 10AM - 8PM</p>
              </div>
            </div>
          </div>
          <div className="bg-[#83cc61] h-40 w-full">
            <div className="flex flex-col p-5 items-start">
              <div className="flex items-center mb-4">
                <div className="text-white">
                  <SlLocationPin size={43} />
                </div>
              </div>
              <div className="text-white leading-7">
                <p>789 Elm Avenue</p>
                <p>Brooklyn, NY 11201</p>
              </div>
            </div>
          </div>
          <div className="bg-[#e1ffd4] h-40 w-full">
            <div className="flex flex-col p-5 items-start">
              <div className="flex items-center mb-4">
                <div className="text-black">
                  <LuPhoneCall size={43} />
                </div>
              </div>
              <div className="text-black leading-7">
                <p>+989 34354 4322</p>
                <p>Contact@mindthera.com</p>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col lg:flex-row items-center max-w-7xl mx-auto p-6 md:p-10">
          {/* Image Section */}
          <div className="flex-1 mb-8 md:mb-0">
            <div className="relative">
              <img
                src={bg4}
                alt="Psychology Professional"
                className="rounded-xl shadow-lg"
              />
              <button className="absolute inset-0 flex items-center justify-center">
                <div className="bg-[#83cc61] text-white p-4 rounded-full">
                  <FaPlay size={30} />
                </div>
              </button>
            </div>
          </div>

          {/* Text Section */}
          <div className="flex-1 text-left md:pt-10 lg:pt-0 lg:pl-10">
            <div className="inline-block bg-[#e1ffd4] text-black font-semibold px-4 py-2 rounded-full mb-4">
              Who We Are
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Introducing Our Expert Psychology Professionals
            </h2>
            <p className="text-gray-500 leading-7 font-san mb-8">
              Located in New York, NY, Mindthera specializes in providing
              top-notch psychotherapy services. Our team of experienced
              professionals is dedicated to helping you achieve mental wellness
              and personal growth. Trust Mindthera for all your psychotherapy
              needs.
            </p>
            <button className="bg-[#83cc61] text-white font-semibold px-6 py-3 rounded-full hover:bg-green-600 transition-colors">
              About Us
            </button>
          </div>
        </section>
        <MentalHealthTransfom />
        <section
          className="w-full bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${bushes})` }}
        >
          <div className="grid grid-cols-1 gap-10 md:grid-cols-4 items-center py-14 max-w-6xl mx-auto">
            <div className="flex flex-col items-center gap-2 text-white">
              <h1 className="text-4xl font-semibold">
                <CountUp end={6250} duration={2.5} />+
              </h1>
              <p className="font-sans">Happy Customers</p>
            </div>
            <div className="flex flex-col items-center gap-2 text-white">
              <h1 className="text-4xl font-semibold">
                <CountUp end={3200} duration={2.5} />+
              </h1>
              <p className="font-sans">Successful Therapy</p>
            </div>
            <div className="flex flex-col items-center gap-2 text-white">
              <h1 className="text-4xl font-semibold">
                <CountUp end={20} duration={2.5} />+
              </h1>
              <p className="">Years of Experience</p>
            </div>
            <div className="flex flex-col items-center gap-2 text-white">
              <h1 className="text-4xl font-semibold">
                <CountUp end={15} duration={2.5} />+
              </h1>
              <p className="">Specialist</p>
            </div>
          </div>
        </section>
        <div>
          <TeamSection />
          <OurPackage />
          <HowItWorks />
          <FAQAndContactSection />
          <section>
            <div
              className="relative bg-cover bg-center xl:bg-cover xl:bg-center lg:h-[400px] bg-fixed"
              style={{ backgroundImage: `url(${bushes})` }}
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
                      <span className="text-[#83cc61]">Mindthera</span> is
                      exceptional! Their psychologists are highly professional
                      and caring. The atmosphere is welcoming and calming, and
                      the staff provides outstanding support. Thank you,
                      Mindthera, for your excellent service!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomePageTwo;
