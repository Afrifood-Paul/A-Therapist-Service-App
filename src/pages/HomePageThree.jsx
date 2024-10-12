import Navbar from "../components/Navbar";
import bushes from "../assets/bushes.jpg";
import Footer from "../components/Footer";
import FAQAndContactSection from "../Services-Component/ServiceFaq.component";
import ContactSection from "../components/Sections/ContactSection";
import { Link } from "react-router-dom";

const HomePageThree = () => {
  return (
    <section className="w-full   h-full">
      <div className="fixed top-0 w-full z-30 bg-white lg:bg-inherit">
        <Navbar />
      </div>
      <div
        className="relative bg-white bg-opacity-50 h-screen lg:h-[50%] xl:h-screen lg:pt-40 xl:pt-0 bg-cover bg-center flex flex-col lg:flex-row lg: justify-between items-center pt-20 md:mt-0"
        style={{ backgroundImage: `url(${bushes})` }}
      >
        {/* Overlay to darken background */}
        <div className="relative   z-10  flex flex-col justify-center w-full lg:w-[90%] mx-auto h-full px-6 lg:px-24 text-left">
          <div className="w-full lg:max-w-2xl text-bg-[#5a9e7c]">
            <p className="text-xs sm:text-sm mb-2 uppercase tracking-wide bg-white bg-opacity-50 font-bold px-3 py-2 text-white rounded-xl inline-block">
              Your Personal Therapist
            </p>
            <h1 className="text-3xl sm:text-4xl text-white md:text-5xl xl:text-6xl font-sans font-bold mb-4">
              Helping You Find <br />
              the{" "}
              <span
                className="text-green-400"
                style={{ fontFamily: "Great Vibes, cursive" }}
              >
                Answers
              </span>
            </h1>
            <p className="text-lg font-bold text-white font-mono sm:text-lg lg:text-base w-full sm:w-[90%] leading-6 sm:leading-7 mb-6 sm:Pb-8">
             The good life is a process, not a state of being. It is a direction, not a destination
             <br/>
                 — CARL ROGERS
            </p>
            <Link to ='/services-two'>
              <button className="bg-[#5a9e7c] text-white font-bold px-6 py-2 rounded-full hover:bg-green-700 transition duration-300 mb-5">
                Our Services
              </button>
            </Link>
          </div>
        </div>
        {/* Image of the therapist positioned below text */}
        {/* <div className="relative z-10 lg:hidden mt-6 lg:mt-0 xl:absolute xl:bottom-0 xl:right-28">
          <img
            src={bgpage3}
            alt="Therapist"
            className="w-52 sm:w-96 lg:w-[34rem]"
          />
        </div> */}
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
