import AppointmentForm from "../components/Apppoinment-Component/AppointmenForm";
import AppointmentHeader from "../components/Apppoinment-Component/AppointmentHeader";
import Footer from "../components/Footer";
import NavbarContact from "../components/NavbarContact"
import ServiceFooter from "../Services-Component/ServicesFooter";

const Appointment = () => {
 return(
    <>
    <div className="fixed bg-white top-0 w-full z-30">
        <NavbarContact />
    </div>
        <AppointmentHeader />
        <AppointmentForm/>
        <ServiceFooter />
        <Footer />
    </>
 )
  ;
};

export default Appointment;
