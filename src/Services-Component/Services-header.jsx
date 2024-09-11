import { NavLink } from "react-router-dom";
import Flower from "../assets/flowers-crop-2.webp";
import { FaAngleRight } from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-[#5a9e7c] to-[#83cc61]">
      <div className="w-[80%] mx-auto flex justify-between items-center py-5">
        <h2 className="text-white text-2xl font-medium">Our Services</h2>
        <div className="flex items-center gap-3 text-sm">
          <div className="flex items-center gap-2">
            <NavLink to={"/"} className="font-medium text-white">
              Home
            </NavLink>
            <FaAngleRight className="font-medium text-white" />
          </div>
          <p className="font-medium text-white">Services</p>
        </div>
      </div>
      <div className="absolute top-20 py-16 -left-20 w-1/3">
        <img src={Flower} alt="Decorative flower" className="w-full" />
      </div>
    </div>
  );
};
export default Header;
