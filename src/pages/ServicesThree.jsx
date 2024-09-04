import { services } from "../constants/Services-Constant";
import ServiceFooter from "../Services-Component/ServicesFooter";

import Flower from '../assets/flowers-crop-3-white.webp'
import Header from "../Services-Component/Services-header";


const ServiceCard = ({ service }) => {
  return (
    
    <div className="relative group font-poppins sm:w-1/3 p-3 ">
      <div className="relative overflow-hidden rounded-lg shadow-lg">
        <img
          src={service.image}
          alt={service.title}
          className="object-cover w-full h-84 rounded-lg"
        />
        <div className="absolute bottom-0 left-0 transform -rotate-180 ">
            <img src={Flower} alt="Flower" className="w-32" />
          </div>
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-center text-normal px-4">{service.description}</p>
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-white group-hover:opacity-0 transition-opacity duration-300">
          <h2 className="text-lg font-semibold">{service.title}</h2>
        </div>
      </div>
    </div>
  );
};

const ServicesList = () => {
  return (
    <div className=" mx-auto m-8 py-16 px-4">
          <div className="text-center mb-12 relative z-10">
            <span className="inline-block bg-[#e1ffd4] text-[#2f5b1b] text-sm font-bold px-4 py-2 rounded-full mb-4">
              Our Services
            </span>
            <h2 className="text-3xl font-bold text-gray-800">Therapist&  
              <span className=" font-greatvibes font-semibold text-[#b7e576]"> Treatments</span>
            </h2>
          </div>
          <div className="flex flex-wrap justify-center">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
    </div>
  );
};

const ServicesThree = () => {
  return (
    <>
      <Header />
      <ServicesList />
      <ServiceFooter />
    </>
  );
};

export default ServicesThree;

