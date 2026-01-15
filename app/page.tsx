import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import Hero from "@/components/Sections/Hero";
import Performance from "@/components/Sections/Performance";
import WhyUs from "@/components/Sections/WhyUs";
import Contact from "@/components/Sections/Contact";
import VisionMission from "@/components/Sections/VisionMission";
import Services from "@/components/Sections/Services";

const MainPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <VisionMission /> 
      <Performance />
      <Contact />
      <Footer />
    </div>
  );
}

export default MainPage;