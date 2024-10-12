import React from "react";
// import img1 from "../../assets/img1.webp";
import Fadipe from "../../assets/fadipe.jpg"
// import img2 from "../../assets/img2.webp";
// import img3 from "../../assets/img3.webp";
// import img4 from "../../assets/img4.webp";
import { motion } from "framer-motion";
import leaf from "../../assets/leaf.jpg";
import { FaCheckCircle, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const MentalPage2 = () => {
  return (
    <div className="w-[90%] lg:w-full xl:w-[80%] mx-auto xl:mt-10 h-full grid lg:grid-cols-2 gap-10">
      <div className="grid pt-8 lg:py-8 lg:px-8">
        <div className="flex justify-center items-center ">
        <motion.div >
            <img
              src={Fadipe}
              alt="Woman in field"
              className="w-full h-[32rem] object-cover rounded-3xl border-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9 }}
            />
          </motion.div>
        </div>
      </div>

      <div className="h-96">
        <div className="flex justify-between items-center">
          <div className="flex-flex-col lg:pt-10">
            <p className="inline-block px-4 py-2 bg-[#83cc61] bg-opacity-30 rounded-full text-black text-sm md:text-lg lg:text-sm font-semibold">
              Welcome
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-medium text-black py-4 lg:py-3">
              Transform Your
              <br />
            </h2>
            <span
              className="text-[#83cc61] text-4xl md:text-6xl lg:text-4xl xl:text-6xl font-bold italic"
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
            Empowering minds, enriching lives. At Open-Minded Service Center
            Inc, we are dedicated to delivering exceptional counseling services,
            mental health support, and referrals with kindness, compassion, and
            respect. Our mission is to create a supportive community where
            individuals feel heard, validated, and empowered to overcome life's
            challenges. We believe in the transformative power of
            open-mindedness, and we're committed to helping our clients achieve
            their full potential.
          </p>
        </div>
        <Link to="/services-two">
          <button className="mt-4 xl:mt-6 px-4 py-2 bg-[#5a9e7c] text-white rounded-full">
            About Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MentalPage2;