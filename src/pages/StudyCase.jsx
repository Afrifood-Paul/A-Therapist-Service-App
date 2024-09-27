
import { Link, Route, Routes } from 'react-router-dom';
import IT from '../assets/2.webp'
<<<<<<< HEAD
import CC from '../assets/5.webp'
import CareerCou from '../assets/Career couseling.webp'
import StressM from '../assets/stress.jpeg'
=======
import StressM from '../assets/Stress M.webp'
>>>>>>> b02b639256a15a712c180561ff70c8f73a93a10e
import AT from '../assets/Anxiety.webp'
import DT from '../assets/depression therapy.webp'
import NavbarContact from '../components/NavbarContact';
import Footer from '../components/Footer';
import StudyCaseHeader from '../components/StudyCase-Component/StudyCase-Header';

// Sidebar Component
const Sidebar = () => (
  <div className="w-64 p-8 ">
    <nav>
      <Link to="/study-case" className="block py-2 text-green-600 font-semibold hover:text-green-800">
        All Services
      </Link>
      <Link to="individual-therapy" className="block py-2 text-green-600 font-semibold hover:text-green-800">
        Individual Therapy
      </Link>
      <Link to="stress-management" className="block py-2 text-green-600 font-semibold hover:text-green-800">
        Stress Management
      </Link>
      <Link to="anxiety-treatment" className="block py-2 text-green-600 font-semibold hover:text-green-800">
        Anxiety Treatment
      </Link>
      <Link to="depression-therapy" className="block py-2 text-green-600 font-semibold hover:text-green-800">
        Depression Therapy
      </Link>
    </nav>
  </div>
);

// Service Card Component
const ServiceCard = ({ image, title, description }) => (
  <div>
    <div className=" rounded-lg overflow-hidden">
      <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}></div>
    </div>
    <div className="font-poppins p-2">
      <h3 className=" font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
    
);

// Individual Service Pages
// Individual Service Pages

const IndividualTherapy = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-8">
    <div className="rounded-lg overflow-hidden">
      <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${IT})` }}></div>
    </div>
    <div className="font-poppins text-2xl p-2">
      <h3 className="font-semibold mb-2">Navigating Identity</h3>
      <p className="text-gray-500 text-sm">
        We offer highly effective one-on-one counseling that best suits our client’s needs, and we meet our clients where they are at. Whether you're navigating personal challenges, coping with past trauma, or seeking clarity in life transitions, individual therapy provides a safe and confidential space for you to explore your emotions. Our tailored approach ensures that your therapy sessions are focused on your unique experiences and goals
      </p>
    </div>
  </div>
);

const StressManagement = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
    <div className="rounded-lg overflow-hidden">
      <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${StressM})` }}></div>
    </div>
    <div className="font-poppins p-2">
      <h3 className="font-semibold text-2xl mb-2">Finding Peace</h3>
      <p className="text-gray-500 text-sm">Is stress interfering with your daily life, leaving you feeling overwhelmed, exhausted, or unable to cope with the challenges you face? At Open-Minded Services, we understand how stress can manifest both physically and emotionally. Our stress management therapy is designed to help you identify the root causes of your stress, whether it stems from work, relationships, or personal pressures.</p>
    </div>
  </div>
);

const AnxietyTreatment = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
    <div className="rounded-lg overflow-hidden">
      <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${AT})` }}></div>
    </div>
    <div className="font-poppins text-2xl p-2">
      <h3 className="font-semibold mb-2">Overcoming Anxiety</h3>
      <p className="text-gray-500 text-lg">
        At Open-Minded Services, you will learn how to navigate your emotions and understand what is holding you back. With the right therapy, you can implement coping skills that will help you live the life you want. You do not need to face these challenges alone; we are here to support you.
      </p>
    </div>
  </div>
);

const DepressionTherapy = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
    <div className="rounded-lg overflow-hidden">
      <div className="h-[258px] bg-cover bg-center" style={{ backgroundImage: `url(${DT})` }}></div>
    </div>
    <div className="font-poppins p-2">
      <h3 className="font-semibold text-2xl mb-2">Overcoming Depression</h3>
      <p className="text-gray-500 text-lg">
        Open-Minded Services will help you understand and address your emotions and how they might physically manifest. Gain balance, motivation, and confidence for long-term emotional well-being.
      </p>
    </div>
  </div>
);

// All Services Component
const AllServices = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
    <ServiceCard
      image={AT}
      title="Navigating Identity"
      description="Anxiety Treatment"
    />
    <ServiceCard
      image={IT}
      title="From Trauma to Resilience"
      description="Individual Therapy"
    />
    <ServiceCard
      image={StressM}
      title="Finding Peace"
      description="Stress Management"
    />
    <ServiceCard
      image={DT}
      title="Overcoming Challenges"
      description="Depression Therapy"
    />
  </div>
);

// Main StudyCase Component
const StudyCase = () => {
  return (
    <>
     <div className="fixed bg-white top-0 w-full z-30">
       <NavbarContact />
      </div>
      <StudyCaseHeader />
      <div className="flex"> 
        {/* Sidebar */}
        <Sidebar />
        
        {/* Main Content */}
        <div className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<AllServices />} />
            <Route path="individual-therapy" element={<IndividualTherapy />} />
            <Route path="stress-management" element={<StressManagement />} />
            <Route path="anxiety-treatment" element={<AnxietyTreatment />} />
            <Route path="depression-therapy" element={<DepressionTherapy />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StudyCase;