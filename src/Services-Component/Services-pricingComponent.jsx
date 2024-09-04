import PricingCard from "./Services-PricingCard";
import { pricingPlans } from "../constants/Services-Constant";
import backgroundImage from "../assets/1.webp";


const PricingComponent =() =>{
  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage:`url(${backgroundImage})`}}></div>
      <div className="relative z-10">
        <header className="text-white py-20">
          <div className="container mx-auto text-center">
            <h2 className="inline-block bg-gray-400 bg-opacity-20 text-white text-sm font-bold px-4 py-2 rounded-full mb-4">Our Package</h2>
            <h1 className="text-3xl font-semibold">Pricing Plans</h1>
          </div>
        </header>
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>
        </div>
      </div>
    </div>

  )
}
export default PricingComponent;