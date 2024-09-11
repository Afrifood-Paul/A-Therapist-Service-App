import React from 'react';

const VisionMission = () => {
  return (
    <section className="bg-white py-16">
  <div className="container mx-auto px-6">
    {/* Section Title */}
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-800">
        Vision & Mission
      </h2>
      <div className="w-20 h-1 bg-green-500 mx-auto my-4"></div>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      {/* Vision Section */}
      <div>
        <h3 className="text-lg font-semibold font-poppins text-gray-600 mb-4">Our Vision</h3>
        <p className="text-gray-400 text-2xl font-san font-semibold leading-8">
          To create a compassionate and supportive environment where individuals can heal, grow, and thrive. Our vision is to empower every person to overcome life challenges, foster mental well-being, and build stronger relationships, contributing to a healthier, more resilient society.
        </p>
      </div>

      {/* Mission Section */}
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Mission</h3>
        <div className="space-y-6">
          {/* Mission Point 1 */}
          <div className="flex">
            <div className="w-32 h-10 flex items-center justify-center bg-[#e1ffd4] text-gray-600 font-poppins font-semibold rounded-full mr-4">
              1
            </div>
            <div>
              <h4 className="font-bold font-poppins text-[#559e7a]">Personalized Care</h4>
              <p className=" font-poppins text-gray-500">
                We are committed to providing personalized and compassionate counseling services tailored to the unique needs of each individual, helping them navigate their emotional and mental health journeys with confidence and clarity.
              </p>
            </div>
          </div>

          {/* Mission Point 2 */}
          <div className="flex">
            <div className="w-32 h-10 flex items-center justify-center bg-[#e1ffd4] text-gray-600 font-poppins font-semibold rounded-full mr-4">
              2
            </div>
            <div>
              <h4 className="font-bold font-poppins text-[#559e7a]">Holistic Approach</h4>
              <p className=" font-poppins text-gray-500">
                Our approach to therapy is holistic, integrating emotional, mental, and physical well-being to create a balanced and fulfilling life for each client. We strive to nurture the mind, body, and spirit as part of the healing process.
              </p>
            </div>
          </div>

          {/* Mission Point 3 */}
          <div className="flex">
            <div className="w-32 h-10 flex items-center justify-center bg-[#e1ffd4] text-gray-600 font-poppins font-semibold rounded-full mr-4">
              3
            </div>
            <div>
              <h4 className="font-bold font-poppins text-[#559e7a]">Empowerment & Growth</h4>
              <p className=" font-poppins text-gray-500">
                Our mission is to empower individuals to overcome obstacles, achieve personal growth, and foster resilience. Through empathetic counseling, we help clients build skills for coping with stress, anxiety, and life transitions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default VisionMission;
