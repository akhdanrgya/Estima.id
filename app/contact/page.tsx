import Navbar from '@/components/Layout/Navbar';
import ContactHero from '@/components/Sections/Contact/ContactHero';
import ContactContent from '@/components/Sections/Contact/ContactContent';
import FAQSection from '@/components/Sections/Contact/FAQSection';
import Footer from '@/components/Layout/Footer';

const ContactPage = () => {
    return (
        <div className="min-h-screen bg-white font-sans text-slate-800">
            <Navbar />
            <ContactHero />
            <ContactContent />
            <FAQSection />
            <Footer />
        </div>
    );
};

export default ContactPage;