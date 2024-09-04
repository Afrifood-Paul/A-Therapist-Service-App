import React from 'react';
import IT from '../../assets/2.webp'

function IndividualTherapy() {
      return (
        <div className="max-w-6xl mx-auto p-8 font-poppins">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 ml-20">
              <div className="bg-[#e1ffd4] font-semibold text-green-800 px-4 py-2 inline-block rounded-full mb-4">
                Our Services
              </div>
              <h1 className="text-4xl font-bold mb-4">
                Individual Therapy
              </h1>
              <p className="text-gray-600 mb-6">
                Individual therapy, also known as counseling or psychotherapy, is a collaborative process between a therapist and a client that aims to explore and address emotional, psychological, and behavioral challenges.
              </p>
              <div className="text-gray-800">
                <span className="block text-sm">
                  Start from
                </span>
                <span className="text-4xl font-bold text-[#83cc61]">
                  $150
                </span>
                <span className="text-sm">
                  /session
                </span>
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 h-34 md:ml-8">
              <img
                src={IT}
                className="rounded-lg shadow-lg"
                width='90%'
                height='30%'
              />
            </div>
          </div>
        </div>
      );
    }
export default IndividualTherapy;