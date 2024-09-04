import AboutUsHeader from "../components/AboutUs-Component/AboutUs-Header";
import WhoWeAre from "../components/AboutUs-Component/Who-we-are";
import { PsychologistsData } from "../constants/Services-Constant";


function PsychologistCard({ PsychologistsData }) {
    return (
        <div className="text-center">
            <img
                src={PsychologistsData.image}
                alt={PsychologistsData.name}
                className="w-full h-auto rounded-xl mb-4 shadow-lg"
            />
            <h3 className="text-lg font-semibold">{PsychologistsData.name}</h3>
            <p className="text-sm text-gray-600 mb-4">{PsychologistsData.role}</p>
            <div className="flex justify-center space-x-4">
                <a href={PsychologistsData.social.facebook} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href={PsychologistsData.social.twitter} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href={PsychologistsData.social.instagram} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
            </div>
        </div>
    );
}

function PsychologistsSection() {
    return (
        <div className="bg-green-100 py-12">
            <div className="text-center mb-12">
                <span className="bg-green-200 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                    We Have Best Team
                </span>
                <h2 className="text-3xl font-bold text-gray-800 mt-4">Our Specialist</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-screen-xl mx-auto px-6">
                {PsychologistsData.map((psychologist, index) => (
                    <PsychologistCard key={index} psychologist={psychologist} />
                ))}
            </div>
        </div>
    );
}



const AboutUs = () => {
  return (
    <>
    <AboutUsHeader />
    <WhoWeAre />
    <PsychologistsSection />
      
    </>
  );
};

export default AboutUs;
