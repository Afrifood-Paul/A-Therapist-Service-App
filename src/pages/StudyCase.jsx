
import { Link, Route, Routes } from 'react-router-dom';
import IT from '../assets/2.webp'
import CC from '../assets/5.webp'
import CareerCou from '../assets/Career couseling.webp'
import StressM from '../assets/Stress M.webp'
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
      <Link to="couples-counseling" className="block py-2 text-green-600 font-semibold hover:text-green-800">
        Couples Counseling
      </Link>
      <Link to="career-counseling" className="block py-2 text-green-600 font-semibold hover:text-green-800">
        Career Counseling
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
const IndividualTherapy = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
    <ServiceCard
      image={IT}
      title="Navigating Identity"
      description="We offer highly effective one-on-one counseling that best suit our client’s needs and we do meet our clients where they are at."
    />
  </div>
);

const CouplesCounseling = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
    <ServiceCard
      image={CC}
      title="Breaking the Cycle"
      description="Couples Counseling"
    />
  </div>
);

const CareerCounseling = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
    <ServiceCard
      image={CareerCou}
      title="Navigating Career Paths"
      description="Career Counseling"
    />
  </div>
);

const StressManagement = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
    <ServiceCard
      image={StressM}
      title="Finding Peace"
      description="Stress Management"
    />
  </div>
);

const AnxietyTreatment = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
    <ServiceCard
      image={AT}
      title="Overcoming Anxiety"
      description="At Open-Minded Services, you will learn how to navigate your emotions and understand what is holding you back. With the right therapy, you can implement coping skills that will help you live the life you want. You do not need to face these challenges alone; we are here to support you."
    />
  </div>
);

const DepressionTherapy = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
    <ServiceCard
      image={DT}
      title="Overcoming Depression"
      description="Open-Minded Services will help you understand and address your emotions and how they might physically manifest. Gain balance, motivation, and confidence for long-term emotional well-being."
    />
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
      image={CC}
      title="Breaking the Cycle"
      description="Couples Counseling"
    />
    <ServiceCard
      image={StressM}
      title="Finding Peace"
      description="Stress Management"
    />
    <ServiceCard
      image={CareerCou}
      title="Building Connections"
      description="Career Counseling"
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
            <Route path="couples-counseling" element={<CouplesCounseling />} />
            <Route path="career-counseling" element={<CareerCounseling />} />
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