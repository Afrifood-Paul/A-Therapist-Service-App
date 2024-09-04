import { Clock, MapPin, Phone } from 'lucide-react';

const ServiceContactFooter = () => {
  return (
    <div className=" text-black font-poppins">
      <div className="items-start">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="flex flex-col px-6 py-6 bg-[#5a9e7c] text-white">
            <Clock className="mb-3" />
            <div>
              <p>Mon - Sat: 8AM - 9PM</p>
              <p>Sunday: 10AM - 8PM</p>
            </div>
          </div>
          <div className="flex flex-col  px-6 py-6 bg-[#83cc61] text-white">
            <MapPin className="mb-3" />
            <div>
              <p>789 Elm Avenue</p>
              <p>Brooklyn, NY 11201</p>
            </div>
          </div>
          <div className="flex flex-col px-6 py-6 bg-[#e1ffd4]">
            <Phone className="mb-3" />
            <div>
              <p>+929 333 9296</p>
              <p>contact@mindthera.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
 export default ServiceContactFooter;