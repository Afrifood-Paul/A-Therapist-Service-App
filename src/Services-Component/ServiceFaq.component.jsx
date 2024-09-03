import { useState } from "react";
import { faqitems } from "../constants/Services-Constant";
import { ChevronDown } from "lucide-react";

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border-b font-poppins border-gray-200">
      <button
        className="flex justify-between items-center w-full py-4 text-left"
        onClick={onToggle}
      >
        <span className="text-gray-800 font-bold">{question}</span>
        <ChevronDown className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && <div className="pb-4 text-gray-400">{answer}</div>}
    </div>
  );
};
 
const FAQAndContactSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-8">
          <span className=" font-bold inline-block bg-[#d8efce] text-[#1a2415] text-sm  px-4 py-2 rounded-full mb-4">Do you have</span>
          <h2 className="text-3xl font-bold mt-2">Any Questions</h2>
        </div>
        <div className="mx-auto">
          {faqitems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQAndContactSection;