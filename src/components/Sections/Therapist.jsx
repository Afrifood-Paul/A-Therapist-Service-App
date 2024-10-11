import {useState} from "react";
import { services } from "../../constants/Services-Constant";

const CounselingCard = ({ image }) => {
 

  return (
    <div>
      <div className="relative group overflow-hidden rounded-lg shadow-md bg-white">
        <div className="relative">
          <img src={image}  className="w-full h-80 object-cover border-4 border-green-500" />
        </div>
      </div>
    </div>
  );
};

const Therapist = () => {
  return (
    <div className="relative lg:w-[80%] mx-auto m-8 py-16 px-4">
      <div className="text-center mb-12 relative z-10">
        <span className="inline-block bg-[#e1ffd4] text-[#2f5b1b] text-sm font-bold px-4 py-2 rounded-full mb-4">
          Our Services
        </span>
        <h2 className=" text-2xl lg:text-4xl pb-4 font-sans font-bold text-gray-800">
          Therapist &
          <span
            className=" font-sans text-3xl lg:text-5xl font-semibold text-[#b7e576]"
            style={{ fontFamily: "Great Vibes, cursive" }}
          >
            {" "}
            Treatments
          </span>
        </h2>
        <p className="text-gray-500 w-full lg:w-[50%] mx-auto leading-7">
          "We offer a range of therapies designed to support your mental and
          emotional well-being. Our treatments are tailored to meet your unique
          needs and help you find balance and peace."
        </p>
      </div>

      <div className="grid mx-5 grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <CounselingCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Therapist;
