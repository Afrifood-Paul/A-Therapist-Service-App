import React from "react";
import NavbarContact from "../components/NavbarContact";
import { NavLink } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import Footer from "../components/Footer";
import img2 from "../assets/img2.webp";
import img1 from "../assets/Team1.webp";
import img3 from "../assets/lady.webp";
import img4 from "../assets/Team4.webp";
import img5 from "../assets/couple3.webp";
import img6 from "../assets/family.webp";
import cardpic from "../assets/cardpic.jpg";
import { MdOutlineCalendarMonth } from "react-icons/md";

const Blog = () => {
  const articles = [
    {
      image: img1,
      title: "The Power of Positive Thinking",
      description:
        "Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...",
    },
    {
      image: img2,
      title: "Understanding the Roots of Anxiety",
      description:
        "Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...",
    },
    {
      image: img3,
      title: "The Psychology of Procrastination",
      description:
        "Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...",
    },
    {
      image: img4,
      title: "Stress Management Techniques",
      description:
        "Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...",
    },
    {
      image: img5,
      title: "The Psychology of Resilience",
      description:
        "Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...",
    },
    {
      image: img6,
      title: "The Secrets to a Fulfilling Life",
      description:
        "Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...",
    },
  ];

  return (
    <section>
      <div className="sticky top-0 w-full z-30 bg-white">
        <NavbarContact />
      </div>

      <div className="bg-gradient-to-r from-[#5a9e7c] to-[#83cc61]">
        <div className="w-[80%] mx-auto flex justify-between items-center py-5">
          <h2 className="text-white text-2xl font-medium">Blog</h2>
          <nav className="flex items-center gap-3 text-sm">
            <div className="flex items-center gap-2">
              <NavLink to="/" className="font-medium text-white">
                Home
              </NavLink>
              <FaAngleRight className="font-medium text-white" />
            </div>
            <p className="font-medium text-white">Blog</p>
          </nav>
        </div>
      </div>

      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-20 gap-5">
        {articles.map((article, index) => (
          <article key={index} className="flex flex-col relative">
            <img
              src={article.image}
              alt={`Image ${index + 1}`}
              className="w-full h-[15rem] rounded-xl object-cover object-center"
            />
            <div className="absolute top-3 right-3">
              <p className="capitalize bg-[#83cc61] text-white px-3 py-1 font-semibold text-sm rounded-md">
                Tips & tricks
              </p>
            </div>
            <div className="py-4 text-left flex-grow">
              <h1 className="text-md font-medium">{article.title}</h1>
              <p className="text-sm leading-7 text-gray-500 pt-2">
                {article.description}
              </p>
            </div>
            <div className="bg-gray-200 bg-opacity-50 flex items-center py-2 px-3 rounded-xl gap-3">
              <div className="flex items-center gap-2">
                <img
                  src={cardpic}
                  alt={`Author ${index + 1}`}
                  className="w-5 rounded-full"
                />
                <p className="text-gray-500 font-medium text-sm">
                  Brunilda Doniger
                </p>
              </div>
              <div className="flex items-center gap-2">
                <MdOutlineCalendarMonth className="text-[#5a9e7c]" />
                <p className="text-gray-500 font-medium text-sm">18 Mar 2024</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <Footer />
    </section>
  );
};

export default Blog;
