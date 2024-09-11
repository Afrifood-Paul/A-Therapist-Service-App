import NavbarContact from "../components/NavbarContact";
import FAQAndContactSection from "../Services-Component/ServiceFaq.component";
import ServicesSection from "../Services-Component/Service-Card-Section";
import Header from '../Services-Component/Services-header'
import Footer from '../components/Footer'
import PricingComponent from "../Services-Component/Services-pricingComponent";
import ServiceContactFooter from "../Services-Component/serviceContact3";





const Services = () => {
  return (
    <>
      <div className="fixed bg-white top-0 w-full z-30">
       <NavbarContact />
      </div>
       <Header />
      <ServicesSection />
      <PricingComponent />
      <FAQAndContactSection />
      <ServiceContactFooter />
      <Footer />
    </>
  );
};

export default Services;