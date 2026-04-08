import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ServiceSection from "../components/ServiceSection";
import ExecutiveTestimonials from "../components/ExecutiveTestimonials";
import EngagementSection from "../components/EngagementSection";
import ContactSection from "../components/ContactSection";
import FooterSection from "../components/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#111]">
      <Header />
      <HeroSection />
      <ServiceSection />
      <ExecutiveTestimonials />
      <EngagementSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
