import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaCarCrash, FaFemale } from "react-icons/fa";
import { MdMoodBad } from "react-icons/md";
import { AiOutlineWarning, AiOutlineTeam } from "react-icons/ai";
import { BiPulse } from "react-icons/bi";
import { GiBrokenHeart, GiFoodChain, GiCigarette } from "react-icons/gi";

const therapyTopics = [
  { id: 1, icon: FaBrain, title: "PTSD", description: "Treatment for Post-Traumatic Stress Disorder" },
  { id: 2, icon: MdMoodBad, title: "Mood Disorder and Major Depression", description: "Addressing severe mood swings and persistent feelings of sadness" },
  { id: 3, icon: AiOutlineWarning, title: "Anxiety and Panic Disorder", description: "Managing excessive worry and sudden episodes of intense fear" },
  { id: 4, icon: BiPulse, title: "Stress Management", description: "Techniques to cope with and reduce stress in daily life" },
  { id: 5, icon: GiBrokenHeart, title: "Anger Management", description: "Learning to control and express anger in healthy ways" },
  { id: 6, icon: FaCarCrash, title: "Overcoming Trauma of Vehicle Accidents", description: "Healing from the psychological impact of car accidents" },
  { id: 7, icon: GiFoodChain, title: "Eating Disorder", description: "Addressing unhealthy relationships with food and body image" },
  { id: 8, icon: FaFemale, title: "Gender-based Violence", description: "Support and healing for survivors of gender-based violence" },
  { id: 9, icon: GiCigarette, title: "Addiction", description: "Recovery support for various forms of addiction" },
  { id: 10, icon: AiOutlineTeam, title: "Interpersonal Relationships", description: "Improving communication and connection in relationships" },
];

const TherapyTopicsComponent = () => {
  const [hoveredTopic, setHoveredTopic] = useState(null);

  return (
    <div className="p-8 bg-gradient-to-br from-green-50 to-blue-50">
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {therapyTopics.map((topic) => (
          <motion.div
            key={topic.id}
            className="relative bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
            whileHover={{ scale: 1.05, zIndex: 1 }}
            onHoverStart={() => setHoveredTopic(topic.id)}
            onHoverEnd={() => setHoveredTopic(null)}
          >
            <div className="p-6">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-[#e1ffd4] p-3 rounded-full">
                  <topic.icon className="text-[#5a9e7c] text-3xl" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
                {topic.title}
              </h3>
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ 
                  opacity: hoveredTopic === topic.id ? 1 : 0,
                  height: hoveredTopic === topic.id ? 'auto' : 0
                }}
                transition={{ duration: 0.3 }}
                className="text-sm text-gray-600 text-center"
              >
                {topic.description}
              </motion.div>
            </div>
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-[#5a9e7c] to-transparent opacity-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredTopic === topic.id ? 0.2 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TherapyTopicsComponent;