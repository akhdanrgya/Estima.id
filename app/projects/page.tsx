import Navbar from '@/components/Layout/Navbar';
import ProjectsHero from '@/components/Sections/Projects/ProjectsHero';
import ClientCarousel from '@/components/Sections/Projects/ClientsCarousell';
import ProjectsGallery from '@/components/Sections/Projects/ProjectsGallery';
import FeaturedCaseStudy from '@/components/Sections/Projects/FeaturedCaseStudy';
import Footer from '@/components/Layout/Footer';

const ProjectsPage = () => {
    return (
        <div className="min-h-screen bg-white font-sans text-slate-800">
            <Navbar />
            <ProjectsHero />
            <ClientCarousel />
            <ProjectsGallery />
            <FeaturedCaseStudy />
            <Footer />
        </div>
    );
};

export default ProjectsPage;