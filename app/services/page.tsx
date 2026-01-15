import Navbar from '@/components/Layout/Navbar';
import ServicesHero from '@/components/Sections/Services/ServicesHero';
import DetailedServices from '@/components/Sections/Services/DetailedServices';
import ProcessFlow from '@/components/Sections/Services/ProcessFlow';
import Footer from '@/components/Layout/Footer';

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      <Navbar />
      <ServicesHero />
      <DetailedServices />
      <ProcessFlow />
      <Footer />
    </div>
  );
}

export default ServicesPage;