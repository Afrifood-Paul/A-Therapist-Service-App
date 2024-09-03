import FAQAndContactSection from "../Services-Component/ServiceFaq.component";
import Header from "../Services-Component/Services-header";
import ServiceContactFooter from "../Services-Component/serviceContact3";
import Card from "../components/ServiceSingle-Component/CardServicesingle";
import IndividualTherapy from "../components/ServiceSingle-Component/IndividualTherapy";




const ServicesSingle = () => {
  return (
    <>
      <Header/>
      <IndividualTherapy/>
      <Card/>
      <FAQAndContactSection/>
      <ServiceContactFooter />
    </>
  );
};

export default ServicesSingle;
