import { services } from "../constants/Services-Constant";
import Flower from "../assets/flowers-crop-2.webp";
import ServiceCard from "./Service-Card";


const ServicesSection = () => {
  return (
      <div className="py-16 bg-gray-100 relative">
        <div className="absolute top-0 left-0 w-1/4">
          <img src={Flower} alt="Decorative flower" className="w-full" />
        </div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 relative z-10">
            <span className="inline-block bg-[#e1ffd4] text-[#2f5b1b] text-sm font-bold px-4 py-2 rounded-full mb-4">
              Our Services
            </span>
            <h2 className="text-4xl font-bold text-gray-800">Therapist & Treatments</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                image={service.image}
                number={`0${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
     
  );
};
export default ServicesSection;