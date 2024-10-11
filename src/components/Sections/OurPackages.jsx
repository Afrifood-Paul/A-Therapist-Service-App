import React from "react";
import { pricingPlans } from "../../constants/Services-Constant";
import backgroundImage from "../../assets/bushes.jpg";
import PricingCard from "../../Services-Component/Services-PricingCard";

const OurPackage = () => {
  return (
    <div className="min-h-screen relative">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="relative z-10">
        <header className="text-white lg:pt-20">
          <div className="container mx-auto text-center">
            <h2 className="inline-block bg-gray-400 bg-opacity-20 text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
              Our Package
            </h2>
            <h1 className="text-4xl font-semibold pb-5">
              Pricing{" "}
              <span
                className="text-[#83cc61] text-4xl"
                style={{ fontFamily: "Great Vibes, cursive" }}
              >
                Plans
              </span>
            </h1>
            <p className="text-white w-full px-4 lg:w-[40%] mx-auto leading-7">
              Explore our flexible pricing plans designed to meet your needs,
              whether you're seeking individual therapy or comprehensive
              treatment packages. We're here to support your journey toward
              well-being at a price that's right for you.
            </p>
          </div>
        </header>
        <div className="lg:w-[80%] mx-auto px-4 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPackage;
