import { useState } from 'react';

const ServiceCard = ({ title, description, image, number }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to toggle the expanded state
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  // Limit the description to 100 characters if not expanded
  const shortDescription = description.length > 180 ? `${description.slice(0, 180)}...` : description;

  return (
    <div className="bg-gray-300 bg-opacity-50 w-[90%] h-[100%] shadow-lg rounded-lg p-8 mb-6 text-center relative">
      <div className="w-20 h-20 mx-auto rounded-full overflow-hidden -mt-16 mb-4 shadow-md">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <span
        style={{ fontFamily: "Great Vibes, cursive" }}
        className="absolute top-4 right-4 text-2xl font-bold text-[#3eb307]"
      >
        {number}
      </span>
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>

      {/* Render either the shortened or full description */}
      <p className="text-gray-500 text-sm font-poppins mt-2 mb-4">
        {isExpanded ? description : shortDescription}
      </p>

      {/* Button to toggle the description */}
      {description.length > 100 && (
        <button
          onClick={toggleReadMore}
          className="bg-gray-300 text-gray-700 font-medium px-4 py-2 rounded-full hover:bg-[#5a9e7c] hover:text-white transition"
        >
          {isExpanded ? 'Show Less' : 'Read More'}
        </button>
      )}
    </div>
  );
};

export default ServiceCard;
