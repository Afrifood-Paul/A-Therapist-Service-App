import AboutUsHeader from "../components/AboutUs-Component/AboutUs-Header";
import WhoWeAre from "../components/AboutUs-Component/Who-we-are";
import VisionMission from "../components/AboutUs-Component/Vision-and-mission";
import NavbarContact from "../components/NavbarContact";
import StatsSection from "../components/Sections/StatsSections";
import Footer from "../components/Footer";
import TeamSection from '../components/Sections/TeamSection'
import ServiceContactFooter from "../Services-Component/serviceContact3";





const AboutUs = () => {
  return (
    <>
     <div className="fixed bg-white top-0 w-full z-30">
       <NavbarContact />
      </div>
      <AboutUsHeader />
      <WhoWeAre />
      <StatsSection />
      <TeamSection />
      <VisionMission />
      <ServiceContactFooter />
      <Footer />
    </>
  );
};

export default AboutUs;
