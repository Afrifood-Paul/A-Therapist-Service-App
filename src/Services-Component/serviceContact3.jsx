import { Clock, MapPin, Phone } from 'lucide-react';

const ServiceContactFooter = () => {
  return (
    <div className=" text-black font-poppins">
      <div className="items-start">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="flex flex-col px-6 py-6 bg-[#5a9e7c] text-white">
            <div>
              <span className='mb-3 text-xl font-bold' ><Clock/>Hours Of Operation</span>
            </div>
              <p>Please contact for details </p>
          </div>
          <div className="flex flex-col  px-6 py-6 bg-[#83cc61] text-white">
            <MapPin className="mb-3" />
            <div>
              <p>Virtual</p>
              <p>info@openmindedservices.com</p> 
            </div>
          </div>
          <div className="flex flex-col px-6 py-6 bg-[#e1ffd4]">
            <Phone className="mb-3" />
            <div>
              <p>Yemi Fadipe</p>
              <p>780-884-1985</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
 export default ServiceContactFooter;