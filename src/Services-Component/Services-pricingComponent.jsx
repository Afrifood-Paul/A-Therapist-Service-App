import PricingCard from "./Services-PricingCard";
import { pricingPlans } from "../constants/Services-Constant";
import backgroundImage from "../assets/bushes.jpg";

const PricingComponent = () => {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="relative z-10">
        <header className="text-white pt-10">
          <div className="container mx-auto text-center">
            <h2 className="inline-block bg-gray-400 bg-opacity-20 text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
              Our Package
            </h2>
            {/* <h1 className="text-3xl font-semibold">Pricing Plans</h1> */}
          </div>
        </header>
        <div className="w-[100%] md:w-[60%] lg:w-[60%] xl:w-[30%] mx-auto px-4 py-5">
          <div className="flex justify-center">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingComponent;
