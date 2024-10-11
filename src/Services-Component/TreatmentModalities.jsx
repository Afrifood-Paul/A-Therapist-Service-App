import  { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import TM from '../assets/TM.jpeg'
import { Brain, Heart, HandMetal, MessageCircle, GitBranch, ChevronDown, ChevronUp } from 'lucide-react';

const TreatmentModalities = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const treatments = [
    { 
      name: 'Cognitive Behaviour Therapy (CBT)', 
      icon: Brain,
      description: 'CBT focuses on challenging and changing cognitive distortions and behaviors, improving emotional regulation, and developing personal coping strategies.'
    },
    { 
      name: 'Trauma Therapies', 
      icon: Heart,
      description: 'These therapies address the impact of traumatic experiences on mental health, helping individuals process and heal from past traumas.'
    },
    { 
      name: 'Acceptance and Commitment Therapy', 
      icon: HandMetal,
      description: 'ACT teaches mindfulness skills to help people live and behave in ways consistent with personal values while developing psychological flexibility.'
    },
    { 
      name: 'Talk Therapy', 
      icon: MessageCircle,
      description: 'Also known as psychotherapy, this involves talking with a mental health professional to treat mental health issues and personal challenges.'
    },
    { 
      name: 'Dialectical Behaviour Therapy (DBT)', 
      icon: GitBranch,
      description: 'DBT is a comprehensive cognitive-behavioral treatment for complex mental disorders, emphasizing mindfulness, distress tolerance, emotion regulation, and interpersonal effectiveness.'
    },
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto p-6 rounded-lg bg-gradient-to-br from-green-50 to-blue-50 "
    >
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Treatment <span className="text-[#83cc61] " style={{ fontFamily: "Great Vibes, cursive" }}>Modalities</span>
      </h2>
      
      <div className="mb-8 flex justify-center">
        <motion.div 
          className="relative w-48 h-48"
          initial={{ scale: 0.8, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-green-500 rounded-full opacity-20"></div>
          <img 
            src={TM}
            alt="Treatment Modalities" 
            className="absolute inset-0 w-full h-full object-cover rounded-full shadow-lg"
          />
        </motion.div>
      </div>
      
      <ul className="space-y-4">
        {treatments.map((treatment, index) => (
          <motion.li 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div 
              className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
              onClick={() => toggleExpand(index)}
            >
              <div className="flex items-center space-x-4">
                <div className="bg-[#e1ffd4] p-2 rounded-full">
                  <treatment.icon className="w-6 h-6 text-[#5a9e7c]" />
                </div>
                <span className="text-gray-800 font-semibold">{treatment.name}</span>
              </div>
              {expandedIndex === index ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
            </div>
            {expandedIndex === index && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="px-4 pb-4 text-gray-600"
              >
                {treatment.description}
              </motion.div>
            )}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default TreatmentModalities;