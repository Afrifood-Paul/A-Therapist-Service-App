// import React from "react";
// import { FaAngleDown } from "react-icons/fa";
// import { NavLink } from "react-router-dom";

// const Dropdown = ({ label, items, isOpen, toggleDropdown }) => {
//   return (
//     <div onMouseEnter={() => toggleDropdown(true)}
//     onMouseLeave={() => toggleDropdown(false)}>
//       <div
//       className="relative"

//     >
//       <div className="flex justify-between border-b lg:border-none w-[95%] mx-auto border-gray-700 py-4 lg:py-0 items-center gap-2 cursor-pointer">
//         <span className="text-white lg:text-black text-sm font-semibold">
//           {label}
//         </span>
//         <FaAngleDown
//           className={`transition-transform duration-500 ${
//             isOpen ? "rotate-180" : ""
//           }`}
//         />
//       </div>
//       {isOpen && (
//         <div className="flex flex-col lg:absolute w-[85%] lg:w-[12vw] mx-auto bg-[#222] lg:bg-white rounded mt-2 lg:mt-0 lg:top-6 transition-all duration-300 transform opacity-100 scale-100 z-10">
//           {items.map((item, index) => (
//             <NavLink
//               key={index}
//               to={item.path}
//               className="py-3 lg:border border-gray-200 hover:bg-green-400 lg:px-2 rounded text-xs transition-colors duration-300"
//             >
//               {item.label}
//             </NavLink>
//           ))}
//         </div>
//       )}
//     </div>
//     </div>
//   );
// };

// export default Dropdown;

import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Dropdown = ({ label, items, isOpen, toggleDropdown, isScrolled }) => {
  let timeoutId;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    toggleDropdown(true);
  };

  const handleMouseLeave = () => {
    toggleDropdown(false);
  };

  const handleClick = () => {
    toggleDropdown(!isOpen);
  };

  return (
    <div
      className={`relative ${isOpen ? "lg:hover-trigger" : ""}`}
      onMouseEnter={() => window.innerWidth >= 1024 && handleMouseEnter()}
      onMouseLeave={() => window.innerWidth >= 1024 && handleMouseLeave()}
      onClick={() => window.innerWidth < 1024 && handleClick()}
    >
      <div
        className={`flex font-sans justify-between border-b lg:border-none w-[95%] mx-auto border-gray-700 py-4 lg:py-0 items-center gap-2 cursor-pointer ${
          isScrolled ? "text-black lg:text-black" : " lg:text-white"
        }`}
      >
        <span className="text-sm font-semibold ">{label}</span>
        <FaAngleDown
          className={`transition-transform duration-500 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>
      {isOpen && (
        <div className="flex flex-col  lg:absolute w-[85%] lg:w-[12vw] mx-auto bg-[#222] lg:bg-white rounded mt-2 lg:top-3 transition-all duration-300 transform opacity-100 scale-100">
          {items.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className="py-3 lg:border border-gray-200 hover:bg-green-400 lg:px-2 rounded text-xs transition-colors duration-300"
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
