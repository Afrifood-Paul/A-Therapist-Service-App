import FAQAndContactSection from "../Services-Component/ServiceFaq.component";
import Header from "../Services-Component/Services-header";
import NavbarContact from "../components/NavbarContact";
import Footer from '../components/Footer';
import ServiceContactFooter from "../Services-Component/serviceContact3";
import Card from "../components/ServiceSingle-Component/CardServicesingle";
import IndividualTherapy from "../components/ServiceSingle-Component/IndividualTherapy";




const ServicesSingle = () => {
  return (
    <>
      <div className="fixed bg-white top-0 w-full z-30">
       <NavbarContact />
      </div>
      <Header/>
      <IndividualTherapy/>
      <Card/>
      <FAQAndContactSection/>
      <ServiceContactFooter />
      <Footer />
    </>
  );
};

export default ServicesSingle;
