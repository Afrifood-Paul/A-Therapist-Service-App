import Flower from "../assets/flowers-crop-3-white.webp";
import Header from "../Services-Component/Services-header";
import Footer from '../components/Footer'
import NavbarContact from "../components/NavbarContact";
import { services } from "../constants/Services-Constant";
import ServiceFooter from "../Services-Component/ServicesFooter";
import { Link } from "react-router-dom";


const CounselingCard = ({ title, description, image }) => {
  return (
    <div>
      <div className="relative group overflow-hidden rounded-lg shadow-md bg-white">
        <div className="relative">
          <img src={image} alt={title} className="w-full h-80 object-cover" />
          <div className="absolute top-2 right-2">
            <img src={Flower} alt="Flower" className="w-32" />
          </div>
          <div className="absolute inset-0 bg-gray-300 bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
           <Link to='/study-case'>
            <button className="bg-[#5a9e7c] text-white px-5 py-3 rounded-full flex items-center font-bold text-sm">
              Read More
            </button> 
          </Link>
          </div>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-400 font-semibold text-sm">{description}</p>
      </div>
    </div>
  );
};

const CounselingServicesGrid = () => {
  return (
    <div className="w-[80%] mx-auto m-8 py-16 px-4">
      <div className="text-center mb-12 relative z-10">
        <span className="inline-block bg-[#e1ffd4] text-[#2f5b1b] text-sm font-bold px-4 py-2 rounded-full mb-4">
          Our Services
        </span>
        <h2 className="text-3xl font-bold text-gray-800">
          Therapist&
          <span className=" font-greatvibes font-semibold text-[#b7e576]">
            {" "}
            Treatments
          </span>
        </h2>
      </div>

      <div className="grid mx-5 my-3  grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <CounselingCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};
const ServicesTwo = () => {
  return (
    <>
      <div className="fixed bg-white top-0 w-full z-30">
       <NavbarContact />
      </div>
      <Header />
      <CounselingServicesGrid />
      <ServiceFooter />
      <Footer/>
    </>
  );
};

export default ServicesTwo;
