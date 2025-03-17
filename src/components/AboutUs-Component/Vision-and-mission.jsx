import React from "react";

const VisionMission = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Vision & Mission</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto my-4"></div>
        </div>

        <div className="grid md:grid-cols-1 xl:grid-cols-2 gap-8">
          {/* Vision Section */}
          <div>
            <h3 className="text-lg font-semibold font-poppins text-gray-600 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-400 text-xl font-san font-semibold leading-8">
              At Open-Minded Service Center Inc., we envision a world where
              mental health is prioritized, and individuals feel empowered to
              seek support without stigma. We strive to be a leading provider of
              compassionate and inclusive counseling services, fostering a
              community where every person can achieve emotional well-being and
              resiliences.
            </p>
          </div>

          {/* Mission Section */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h3>
            <div className="space-y-6">
              {/* Mission Point 1 */}
              <div className="flex items-start">
                <p className="font-poppins text-gray-500">
                  Open-Minded Service Center Inc. is dedicated to providing
                  accessible and comprehensive counseling services and mental
                  health support. Our mission is to create a safe and welcoming
                  environment for individuals to explore their thoughts and
                  feelings. We are committed to delivering personalized care
                  through evidence-based practices, promoting mental health
                  awareness, and empowering our clients to lead fulfilling
                  lives. Our team of skilled professionals works collaboratively
                  with each client, respecting their unique experiences and
                  cultural backgrounds, to cultivate hope, healing, and personal
                  growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
