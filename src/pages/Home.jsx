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

const Home = () => {
  return (
    <div className="w-full h-full">
      <div className="fixed top-0 w-full z-30">
        <Navbar />
      </div>
      <div className="">
        <Carousel />
      </div>
      <div>
        <MentalPage2 />
      </div>

      <div
        className="relative bg-cover bg-center xl:bg-cover xl:bg-center lg:h-[400px] mt-[14rem] lg:mt-[12rem] xl:mt-14 bg-fixed"
        style={{ backgroundImage: `url(${bg3})` }}
      >
        {/* Content Container */}
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white p-4">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="flex flex-col md:flex-row md:items-center md:space-x-10 max-w-4xl mx-auto">
            {/* Profile Image */}
            <div className="flex flex-col justify-center md:block my-10 md:mb-0">
              <img
                src={testimony}
                alt="Jeffery Mussman"
                className="lg:w-[32rem] w-[20rem] h-full rounded-full shadow-lg lg:bg-cover"
              />
              <div className="pt-2">
                <p className="font-bold pb-2">Tols Onijingin</p>
              </div>
            </div>

            {/* Text Content */}
            <div>
              <p className="text-3xl leading-10 w-[90%] lg:w-full text-left md:text-xl lg:text-3xl font-semibold">
                Open-Minded Services Center is exceptional! Their psychologists
                are highly professional and caring. The atmosphere is welcoming
                and calming, and the staff provides outstanding support. Thank
                you,Open-Minded Services Center, for your excellent service!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Therapist />
        {/* <StatsSection /> */}
        <TeamSection />
        <OurPackages />
        <ContactSection />
        <FAQAndContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
