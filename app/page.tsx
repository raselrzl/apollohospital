import AmbulanceService from "./component/AmbulanceService";
import DoctorsSection from "./component/DoctorsSection";
import HeroSection from "./component/Hero";
import ServicesSection from "./component/Services";

export default function Home() {
  return (
    <div className="bg-[#f0f8ff] pt-20">
    
      <HeroSection />
      <ServicesSection />
      <AmbulanceService />
      <DoctorsSection />
      {/* You can add more sections below like Services, About, Contact */}
    </div>
  );
}
