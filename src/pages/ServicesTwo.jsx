
import Header from "../Services-Component/Services-header";
import Footer from "../components/Footer";
import NavbarContact from "../components/NavbarContact";
import TreatmentModalities from "../Services-Component/TreatmentModalities";
import ContactSection from "../components/Sections/ContactSection";
import TreatmentApproach from "../Services-Component/TreatmentApproach";
import PricingComponent from "../Services-Component/Services-pricingComponent";

// const CounselingCard = ({ title, description, image }) => {
//   return (
//     <div>
//       <div className="relative group overflow-hidden rounded-lg shadow-md bg-white">
//         <div className="relative">
//           <img src={image} alt={title} className="w-full h-80 object-cover" />
//           <div className="absolute top-2 right-2">
//             <img src={Flower} alt="Flower" className="w-32" />
//           </div>
//           <div className="absolute inset-0 bg-gray-300 bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//             <Link to="/study-case">
//               <button className="bg-[#5a9e7c] text-white px-5 py-3 rounded-full flex items-center font-bold text-sm">
//                 Read More
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//       <div className="p-5">
//         <h3 className="text-xl font-semibold">{title}</h3>
//         <p className="text-gray-400 font-semibold text-sm">{description}</p>
//       </div>
//     </div>
//   );
// };

// const CounselingServicesGrid = () => {
//   return (
//     <div className="lg:w-[80%] mx-auto m-8 lg:px-4">
//       <div className="text-center mb-12 relative z-10">
//         <span className="inline-block bg-[#e1ffd4] text-[#2f5b1b] text-sm font-bold px-4 py-2 rounded-full mb-4">
//           Our Services
//         </span>
//         <h2 className="text-3xl font-bold pb-2 text-gray-800">
//           What We
//           <span className=" font-greatvibes font-semibold text-[#b7e576]">
//             {" "}
//             Offer
//           </span>
//         </h2>
//         <p className="text-gray-600 text-center md:w-[60%] mx-auto leading-7">
//           We offer personalized therapy and treatment plans designed to address
//           your unique mental health needs. Our expert team provides
//           compassionate care to support your journey toward healing and
//           well-being.
//         </p>
//       </div>

//       <div className="grid mx-5 my-3  grid-cols-1 md:grid-cols-2 gap-6">
//         {services.map((service, index) => (
//           <CounselingCard key={index} {...service} />
//         ))}
//       </div>
//     </div>
//   );
// };
const ServicesTwo = () => {
  return (
    <div className="bg-gradient-to-br from-green-50 to-blue-50">
      <div className="fixed bg-white top-0 w-full z-30">
        <NavbarContact />
      </div>
      <div className="mt-16">
        <Header />
      </div>
     <div className="mt-5">
      <TreatmentModalities />

      <TreatmentApproach />
     </div>
      <PricingComponent />
      <Footer />
    </div>
  );
};

export default ServicesTwo;
