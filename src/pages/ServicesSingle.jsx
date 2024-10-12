
import Header from "../Services-Component/Services-header";
import NavbarContact from "../components/NavbarContact";
import Footer from '../components/Footer';
import ServiceContactFooter from "../Services-Component/serviceContact3";
import Card from "../components/ServiceSingle-Component/CardServicesingle";

import WPServices from "../Services-Component/WPserviceT";
import ContactSection from "../components/Sections/ContactSection";

const ServicesSingle = () => {
  return (
    <>
      <div className="sticky top-0 w-full z-30 bg-white">
        <NavbarContact />
      </div>
      <Header />
      <WPServices />
      <Card />
      <ContactSection />
      <Footer />
    </>
  );
};

export default ServicesSingle;
