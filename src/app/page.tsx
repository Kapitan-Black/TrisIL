
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import ServiceSection from "../components/ServiceSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <div dir="rtl">
      <div>
        <HeroSection />

        <div className="min-h-screen overflow-x-hidden container mx-auto">
          <NavBar />
          <ServiceSection />
          <AboutSection />
          <ContactSection />
        </div>

        <Footer />
        {/* WhatsApp Floating Icon */}
        <a
          href="https://wa.me/972501234567" // replace with your number
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 left-5 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:-translate-y-1
 hover:scale-105"
        >
          <FaWhatsapp size={42} />
        </a>
      </div>
    </div>
  );
}
