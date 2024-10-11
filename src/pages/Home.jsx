import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "./Caraousel/Carousel";
import bg3 from "../assets/bg3.jpg";
import jaffery from "../assets/jaffery2.jpg";
import testimony from "../assets/test.jpg";
// import paul from "../assets/my profile.jpg"
import StatsSection from "../components/Sections/StatsSections";
import TeamSection from "../components/Sections/TeamSection";
import ContactSection from "../components/Sections/ContactSection";
import Footer from "../components/Footer";
import Therapist from "../components/Sections/Therapist";
import PricingComponent from "../Services-Component/Services-pricingComponent";
import OurPackages from "../components/Sections/OurPackages";
import FAQAndContactSection from "../Services-Component/ServiceFaq.component";
import MentalPage2 from "../components/Sections/MentalPage2";
import VisionMission from "../components/AboutUs-Component/Vision-and-mission";
import TherapyTopicsComponent from "../Services-Component/Specialization";

const Home = () => {
  return (
    <div className="w-full h-full  ">
      <div className="fixed top-0 w-full z-30">
        <Navbar />
      </div>
      <div className="">
        <Carousel />
      </div>
      <div className="mx-32 ">
        <MentalPage2 />
      </div>

      <div>
        <Therapist />
        <TherapyTopicsComponent />
      </div>
        < VisionMission />
        <ContactSection />
        {/* <FAQAndContactSection /> */}
        <Footer />
    </div>
  );
};

export default Home;
