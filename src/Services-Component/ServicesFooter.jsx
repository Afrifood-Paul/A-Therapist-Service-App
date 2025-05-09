import { Clock, MapPin} from 'lucide-react';
import { Link } from 'react-router-dom';

export const ServiceFooter = () => {
  return (
    <div className="flex items-center font-roboto justify-center bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full ">
        <div className="flex flex-col items-center justify-center px-6 py-8 bg-[#5a9e7c] text-white text-center">
          <Clock className="mb-4 text-5xl" />
          <h3 className="text-2xl font-semibold mb-3">Schedule Your Appointment Today!</h3>
          <div className="mb-6">
            <p>Please contact for details </p>
            <p>Yemi Fadipe</p>
            <p>780-884-1985</p>
          </div>
        <Link to="/appointment">
          <button className="bg-[#457a60] text-sm text-white px-3 py-2 rounded-full font-medium hover:bg-[#284838] transition-colors duration-500">
            Make Appointment
          </button>
        </Link>
        </div>
        <div className="flex flex-col items-center justify-center px-6 py-8 bg-[#83cc61] text-white text-center">
          <MapPin className="mb-4 text-3xl" />
          <h3 className="text-2xl font-semibold mb-3">Session Format</h3>
          <div className="mb-6">
            <p>Virtual</p>
            <p>info@openmindedservices.com</p> 
          </div>
          <Link to="/appointment">
          <button className="bg-[#457a60] text-sm text-white px-3 py-2 rounded-full font-medium hover:bg-[#284838] transition-colors duration-500">
            Make Appointment
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
};
export default ServiceFooter;