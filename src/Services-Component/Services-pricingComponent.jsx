import PricingCard from "./Services-PricingCard";
import { pricingPlans } from "../constants/Services-Constant";
import backgroundImage from "../assets/bushes.jpg";

const PricingComponent = () => {
  return (
    <div className="min-h-screen relative">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="relative z-10">
        <header className="text-white py-20">
          <div className="container mx-auto text-center">
            <h2 className="inline-block bg-gray-400 bg-opacity-20 text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
              Our Package
            </h2>
            <h1 className="text-3xl font-semibold">Pricing Plans</h1>
          </div>
          <p className="text-white w-full px-4 text-center lg:w-[40%] mx-auto leading-7">
            Explore our flexible pricing plans designed to meet your needs,
            whether you're seeking individual therapy or comprehensive treatment
            packages. We're here to support your journey toward well-being at a
            price that's right for you.
          </p>
        </header>
        <div className="w-[95%] lg:w-[80%] mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
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
