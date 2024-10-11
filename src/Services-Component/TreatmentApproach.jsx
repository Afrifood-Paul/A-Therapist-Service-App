
import TAP from "../assets/theA.jpg"
import { Globe, Scissors, Brain, Star } from 'lucide-react';

const TreatmentApproach = () => {
  const approaches = [
    { name: 'Culture Sensitive', icon: Globe, description: 'Tailored to respect and incorporate cultural backgrounds' },
    { name: 'Tailored Treatment', icon: Scissors, description: 'Customized plans to meet individual needs' },
    { name: 'Trauma-Informed', icon: Brain, description: 'Recognizing and addressing the impact of trauma' },
    { name: 'Strength-Based', icon: Star, description: 'Focusing on personal strengths and resilience' },
  ];

  return (
    <div className="max-w-6xl mx-auto p-8 rounded-xl bg-gradient-to-br from-green-50 to-blue-50 ">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Treatment <span className="text-[#83cc61] text-3xl font-bold  md:text-6xl lg:text-4xl xl:text-6xl  "
      style={{ fontFamily: "Great Vibes, cursive" }}>Approach</span></h2>
      
      <div className="flex flex-col lg:flex-row gap-8 mb-10">
        <div className="lg:w-1/3">
          <div className="relative h-64 lg:h-full rounded-xl overflow-hidden shadow-md">
            <img 
              src={TAP} 
              alt="Therapist and patient in session" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-indigo-900 opacity-20"></div>
          </div>
        </div>
        
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {approaches.map((approach, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="bg-[#e1ffd4]  p-3 rounded-full mr-4">
                  <approach.icon className="w-6 h-6 text-[#5a9e7c]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{approach.name}</h3>
              </div>
              <p className="text-gray-600">{approach.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="text-center">
        <p className="text-lg text-gray-700 mb-4">Our comprehensive approach ensures personalized and effective treatment for each individual.</p>
        
      </div>
    </div>
  );
};

export default TreatmentApproach;