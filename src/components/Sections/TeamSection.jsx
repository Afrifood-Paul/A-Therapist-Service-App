import React from "react";
import Team1 from "../../assets/Team1.webp";
import Team2 from "../../assets/Team2.webp";
import Team3 from "../../assets/Team3.webp";
import Team4 from "../../assets/Team4.webp";
import flowerCrop from "../../assets/flower-crop2.webp";
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter } from "react-icons/bi";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Jeffery Mussman",
      role: "Psychologist",
      image: (
        <img
          src={Team1}
          alt="Team1"
          className="rounded-lg w-full h-full object-cover mb-4"
        />
      ),
    },
    {
      name: "Sophia Jenkins",
      role: "Psychologist",
      image: (
        <img
          src={Team2}
          alt="Team2"
          className="rounded-lg w-full h-full object-cover mb-4"
        />
      ),
    },
    {
      name: "Melissa Taylor",
      role: "Psychologist",
      image: (
        <img
          src={Team3}
          alt="Team3"
          className="rounded-lg w-full h-full object-cover mb-4"
        />
      ),
    },
    {
      name: "Noah Anderson",
      role: "Psychologist",
      image: (
        <img
          src={Team4}
          alt="Team4"
          className="rounded-lg w-full h-full object-cover mb-4"
        />
      ),
    },
  ];

  return (
    <section className="py-10 relative">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="bg-[#d9f6e0] inline-block px-4 py-1 text-sm rounded-full text-gray-800 mb-4">
          We have best Team
        </div>
        <h2 className="text-4xl font-semibold">
          Our{" "}
          <span
            style={{ fontFamily: "Great Vibes, cursive" }}
            className="text-[#8CC63E]"
          >
           SPecialists
          </span>
        </h2>
        <p className="text-gray-500 mt-3 leading-8 px-4 lg:px-0">
          Qui culpa qui consequat officia cillum quis irure aliquip ut dolore
          sit eu culpa ut irure nisi occaecat dolore adipisicing.
        </p>
      </div>
      {/* <div className="relative flex flex-wrap justify-center mb-20">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-4 text-center max-w-xs"
          >
            {member.image}
            <div className="bg-[#cfefd7] rounded-xl absolute ms-6 -bottom-16 w-[15rem]">
              <h3 className="text-xl font-semibold text-gray-800 pt-2">
                {member.name}
              </h3>
              <p className="text-[#8CC63E]">{member.role}</p>
              <div className="flex justify-center gap-4 mt-4 mb-2">
                <div className="bg-white p-2 rounded-md">
                  <BiLogoFacebook className="text-green-800 text-xl" />
                </div>
                <div className="bg-white p-2 rounded-md">
                  <BiLogoTwitter className="text-green-800 text-xl" />
                </div>
                <div className="bg-white p-2 rounded-md">
                  <BiLogoInstagram className="text-green-800 text-xl" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div> */}

      <div className="relative flex flex-wrap md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 xl:flex justify-center mb-20 gap-16 lg:gap-0">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative bg-white rounded-lg p-4 text-center w-[20rem] md:w-[22rem] lg:w-[16rem] xl:w-[20rem] pb-6 lg:pb-7"
          >
            {member.image}
            <div className="bg-[#d1fedc] rounded-xl absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-1/2 w-[15rem] md:w-[16rem] lg:w-[12rem] xl:w-[15rem] shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 pt-2">
                {member.name}
              </h3>
              <p className="text-[#8CC63E]">{member.role}</p>
              <div className="flex justify-center gap-4 mt-4 mb-2">
                <div className="bg-white p-2 rounded-md">
                  <BiLogoFacebook className="text-green-800 text-xl" />
                </div>
                <div className="bg-white p-2 rounded-md">
                  <BiLogoTwitter className="text-green-800 text-xl" />
                </div>
                <div className="bg-white p-2 rounded-md">
                  <BiLogoInstagram className="text-green-800 text-xl" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute top-0 right-0 hidden md:block">
        <img src={flowerCrop} alt="" className="w-[400px] lg:w-[280px] xl:w-[400px]"/>
      </div>
    </section>
  );
};

export default TeamSection;
