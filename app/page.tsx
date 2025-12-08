import AmbulanceService from "./component/AmbulanceService";
import ContactSection from "./component/ContactSection";
import DepartmentsSection from "./component/DepartmentsSection";
import DoctorsSection from "./component/DoctorsSection";
import HeroSection from "./component/Hero";
import NewsSection from "./component/About";
import Package from "./component/Package";
import ServicesSection from "./component/Services";
import AboutHospitalSection from "./component/About";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <div className="bg-[#f0f8ff] pt-20">
    
      <HeroSection />
      <ServicesSection />
      <AmbulanceService />
      <DoctorsSection />
      <DepartmentsSection />
      <Package />
      <AboutHospitalSection />
      <ContactSection />
      <Footer />
      {/* You can add more sections below like Services, About, Contact */}
    </div>
  );
}
