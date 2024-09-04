import FAQAndContactSection from "../Services-Component/ServiceFaq.component";
import ServicesSection from "../Services-Component/Service-Card-Section";
import Header from "../Services-Component/Services-header";
import PricingComponent from "../Services-Component/Services-pricingComponent";
import ServiceContactFooter from "../Services-Component/serviceContact3";

const Services = () => {
  return (
    <>
      <Header />
      <ServicesSection />
      <PricingComponent />
      <FAQAndContactSection />
      <ServiceContactFooter />
    </>
  );
};

export default Services;
