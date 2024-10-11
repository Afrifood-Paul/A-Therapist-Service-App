import React from 'react';
import { User, Users, Heart, Target, Smile, Sun } from 'lucide-react';  // Import Lucide icons

const services = [
  { name: 'Teen/Youth', description: 'Support and counseling for teens and youth.', icon: <User /> },
  { name: 'Young Adults', description: 'Guidance and mentorship for young adults.', icon: <Target /> },
  { name: 'Adults', description: 'Counseling services for adults.', icon: <Users /> },
  { name: 'Seniors', description: 'Specialized care for seniors.', icon: <Smile /> },
  { name: 'Individual', description: 'One-on-one personal development.', icon: <Heart /> },
  { name: 'Marriage/Couples', description: 'Marriage and couples therapy.', icon: <Sun /> }
];

const WPServices = () => {
  return (
    <section className="bg-gradient-to-br from-green-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-[#83cc61] mb-12" style={{ fontFamily: "Great Vibes, cursive" }}>Who We Provide Services To</h2>
        
        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="relative shadow-md rounded-lg p-6 text-center hover:shadow-lg transform transition-transform hover:scale-105 duration-300"
            >
              {/* Icon */}
              <div className="flex justify-center items-center mb-4  text-[#5a9e7c]">
                <div className="w-16 h-16">
                  {service.icon}
                </div>
              </div>
              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
              {/* Description */}
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WPServices;
