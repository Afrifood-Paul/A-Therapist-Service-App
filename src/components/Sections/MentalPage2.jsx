import React from "react";
import leaf from "../../assets/leaf.jpg";

const MentalPage2 = () => {
  return (
    <div className="w-[90%] lg:w-full xl:w-[80%] mx-auto xl:mt-10 grid h-full">
      <div className="flex flex-col lg:flex-row items-center justify-between h-auto">

        {/* Text Section */}
        <div className="flex flex-col lg:pt-10 space-y-4 lg:max-w-[60%]">
          <p className="inline-block px-4 py-2 text-[#5a9e7c] text-6xl " style={{ fontFamily: "Great Vibes, cursive" }}>
            Welcome To Open-Minded
          </p>
          <h2 className="text-3xl font-bold text-gray-800 md:text-4xl lg:text-3xl xl:text-5xl leading-tight">
            Transform Your <br /> 
            <span className="text-[#83cc61] text-4xl md:text-5xl lg:text-4xl xl:text-6xl" style={{ fontFamily: "Great Vibes, cursive" }}>
              Mental Health
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-500 text-lg md:text-xl font-sans font-semibold leading-relaxed max-w-xl lg:max-w-lg">
            Empowering minds, enriching lives. At Open-Minded Service Center Inc,
            we are dedicated to delivering exceptional counseling services,
            mental health support, and referrals with kindness, compassion, and
            respect. Our mission is to create a supportive community where
            individuals feel heard, validated, and empowered to overcome life's
            challenges. We believe in the transformative power of open-mindedness,
            and we're committed to helping our clients achieve their full potential.
          </p>
        </div>

        {/* Image Section */}
        <div className="mt-8 lg:mt-0 lg:ml-8 hidden lg:block">
          <img
            src={leaf}
            alt="leaf"
            className="w-24 md:w-28 xl:w-32 animate-float"
          />
        </div>
      </div>
    </div>
  );
};

export default MentalPage2;

