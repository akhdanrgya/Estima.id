import { Wrench } from 'lucide-react';
import { COLORS } from '@/lib/Constants';

const ServicesHero = () => {
  return (
    <section className="relative pt-32 pb-20 bg-slate-900 overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
          Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r" style={{ backgroundImage: `linear-gradient(to right, ${COLORS.primary}, ${COLORS.secondary})` }}>Industrial Solutions</span>
        </h1>
        <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Delivering asset integrity and efficiency through specialized maintenance services for Oil & Gas, Power Plants, and Petrochemical industries.
        </p>
      </div>
    </section>
  );
};

export default ServicesHero;