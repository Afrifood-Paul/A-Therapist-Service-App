import React, { useState } from "react";
import { FaArrowRight, FaPlus } from "react-icons/fa";
import bushes from "../../assets/bushes.jpg";

const ServiceProcess = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const steps = [
    {
      step: "Step 1",
      title: "Orientation",
      description:
        "Qui culpa qui consequat officia cillum quis irure aliquip ut dolore sit eu culpa ut irure nisi occaecat.",
    },
    {
      step: "Step 2",
      title: "Identification",
      description:
        "Qui culpa qui consequat officia cillum quis irure aliquip ut dolore sit eu culpa ut irure nisi occaecat.",
    },
    {
      step: "Step 3",
      title: "Exploration",
      description:
        "Qui culpa qui consequat officia cillum quis irure aliquip ut dolore sit eu culpa ut irure nisi occaecat.",
    },
    {
      step: "Step 4",
      title: "Resolution",
      description:
        "Qui culpa qui consequat officia cillum quis irure aliquip ut dolore sit eu culpa ut irure nisi occaecat.",
    },
  ];

  //   const images = [family, couple, lady, couple, img2, family];

  return (
    <section
      className="relative py-10 text-white"
      style={{ backgroundImage: `url(${bushes})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      {/* <div className="relative text-center mb-10">
        <span className="bg-[#ebf8e1] text-[#000] py-1 px-4 rounded-md font-semibold">
          Services Process
        </span>
        <h2 className="text-3xl font-bold mt-3">
          How It{" "}
          <span className="text-4xl text-lime-500" style={{ fontFamily: "Great Vibes, cursive" }}> Works</span>
        </h2>
        <p className="text-white leading-8 mt-2 w-[90%] md:max-w-xl mx-auto">
          Qui culpa qui consequat officia cillum quis irure aliquip ut dolore
          sit eu culpa ut irure nisi occaecat dolore adipisicing do pariatur.
        </p>
      </div> */}
      {/* <div className="w-[90%] lg:max-w-7xl relative mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center lg:flex-row lg:items-center"
          >
          
            <div className="flex flex-col items-left">
              <div className="flex items-center mb-4">
                <span className="bg-[#5a9e7c] text-white text-left py-1 px-4 rounded-xl font-semibold text-sm">
                  {step.step}
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-white text-sm text-left leading-7">
                {step.description}
              </p>
            </div>
            
            {index < steps.length - 1 && (
              <FaArrowRight className="text-6xl hidden lg:block text-white lg:mx-6 mt-6 lg:-mt-40" />
            )}
          </div>
        ))}
      </div> */}

      {/* Images Section */}
      {/* <div className="flex flex-col lg:flex-row mt-32">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-full"
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="object-cover hover:scale-110 duration-500"
            />
            <FaPlus
              className={`absolute top-[40%] left-[50%] transform -translate-x-1/2 text-white text-5xl transition-opacity duration-500 ${
                hoverIndex === index ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        ))}
      </div> */}
    </section>
  );
};

export default ServiceProcess;
