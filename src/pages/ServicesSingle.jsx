import FAQAndContactSection from "../Services-Component/ServiceFaq.component";
import Header from "../Services-Component/Services-header";
import NavbarContact from "../components/NavbarContact";
import Footer from '../components/Footer';
import ServiceContactFooter from "../Services-Component/serviceContact3";
import Footer from "../components/Footer";
import NavbarContact from "../components/NavbarContact";
import Card from "../components/ServiceSingle-Component/CardServicesingle";
import IndividualTherapy from "../components/ServiceSingle-Component/IndividualTherapy";

const ServicesSingle = () => {
  return (
    <>
<<<<<<< HEAD
      <div className="fixed bg-white top-0 w-full z-30">
       <NavbarContact />
      </div>
      <Header/>
      <IndividualTherapy/>
      <Card/>
      <FAQAndContactSection/>
=======
      <div className="sticky top-0 w-full z-30 bg-white">
        <NavbarContact />
      </div>
      <Header />
      <IndividualTherapy />
      <Card />
      <FAQAndContactSection />
>>>>>>> origin/main
      <ServiceContactFooter />
      <Footer />
    </>
  );
};

export default ServicesSingle;
