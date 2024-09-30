import React, { useState } from "react";
import { BiTime, BiMap, BiPhone } from "react-icons/bi";
import { Link } from "react-router-dom";
// import family from "../../assets/family.jpg";
// import couple from "../../assets/couple3.webp";
// import lady from "../../assets/lady.webp";
// import img1 from "../../assets/img1.webp";
// import img2 from "../../assets/img2.webp";
import { FaPlus } from "react-icons/fa";

const ContactSection = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  // const images = [family, couple, family, couple, img2, family];
  return (
    <div className="relative bg-[#5a9e7c] text-white">
      <div className="flex flex-wrap lg:flex-nowrap gap-10 lg:gap-0 justify-between mx-5 py-10">
        {/* Working Hours */}
        <div className="flex flex-col items-center">
          <BiTime className="text-4xl mr-4" />
          <div>
            <p>Please contact for details</p>
           
          </div>
        </div>

        {/* Location */}
        <div className="flex flex-col items-center">
          <BiMap className="text-4xl mr-4" />
          <div>
            <p>Virtual Consultation</p>
            {/* <p> consultation will take place online</p> */}
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-left">
          <BiPhone className="text-4xl mr-4" />
          <div>
            <p>+7808841985</p>
            <p>fadipe.o@openmindedservices.com</p>
          </div>
        </div>

        {/* Make Appointment Button */}
        <div>
          <Link
            to="/appointment"
            className="bg-[#83cc61] text-white rounded-full px-6 py-3 font-sans text-sm "
          >
            Make Appointment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
