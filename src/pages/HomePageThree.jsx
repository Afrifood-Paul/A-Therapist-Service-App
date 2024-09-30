import React from "react";
import Navbar from "../components/Navbar";
import bushes from "../assets/bushes.jpg";
import bgpage3 from "../assets/fadipe.jpg";
import Footer from "../components/Footer";
import MentalHealthTransfom from "./MentalHealthTransfom";

import OurPackage2 from "../components/Sections/OurPackage2";
import MentalPage2 from "../components/Sections/MentalPage2";
import ServiceProcess from "../components/Sections/ServiceProcess";
import Team from "../components/Sections/Team";
import StatsSection from "../components/Sections/StatsSections";
import FAQAndContactSection from "../Services-Component/ServiceFaq.component";
import ContactSection from "../components/Sections/ContactSection";

const HomePageThree = () => {
  return (
    <section className="w-full h-full">
      <div className="fixed top-0 w-full z-30 bg-white lg:bg-inherit">
        <Navbar />
      </div>
      <div
        className="relative h-screen lg:h-[50%] xl:h-screen lg:pt-40 xl:pt-0 bg-cover bg-center flex flex-col lg:flex-row lg: justify-between items-center pt-20 md:mt-0"
        style={{ backgroundImage: `url(${bushes})` }}
      >
        {/* Overlay to darken background */}
        <div className="relative z-10 flex flex-col justify-center w-full lg:w-[90%] mx-auto h-full px-6 lg:px-24 text-left">
          <div className="w-full lg:max-w-2xl text-white">
            <p className="text-xs sm:text-sm mb-2 uppercase tracking-wide bg-gray-300 bg-opacity-50 px-3 py-2 rounded-xl inline-block">
              Your Personal Therapist
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-sans font-bold mb-4">
              Helping You Find <br />
              the{" "}
              <span
                className="text-green-400"
                style={{ fontFamily: "Great Vibes, cursive" }}
              >
                Answers
              </span>
            </h1>
            <p className="text-sm sm:text-lg lg:text-base w-full sm:w-[90%] leading-6 sm:leading-7 mb-6 sm:Pb-8">
              Helping you find clarity and direction in life’s challenges. With
              compassionate guidance, we help you explore the answers within
              yourself. Discover personalized support through our expert
              services to uncover the solutions that work best for you
            </p>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300 mb-5">
              Our Services
            </button>
          </div>
        </div>
        {/* Image of the therapist positioned below text */}
        <div className="relative z-10 lg:hidden mt-6 lg:mt-0 xl:absolute xl:bottom-0 xl:right-28">
          <img
            src={bgpage3}
            alt="Therapist"
            className="w-52 sm:w-96 lg:w-[34rem]"
          />
        </div>
      </div>
      <MentalHealthTransfom />
      <div className="">
        <OurPackage2 />
      </div>
      <div className="pb-20 ">
        <MentalPage2 />
      </div>
      <div className="mt-72 lg:mt-5">
        <ServiceProcess />
      </div>
      {/* <Team />
      <StatsSection /> */}
      <FAQAndContactSection />
      <ContactSection />
      <Footer />
    </section>
  );
};

export default HomePageThree;
