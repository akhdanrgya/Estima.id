import React from 'react';
import { Factory, ShieldCheck, ArrowRight, Flame, Zap } from 'lucide-react';
import { COLORS } from '@/lib/Constants';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
      <div className="absolute top-0 right-0 w-[50%] h-full bg-white skew-x-12 translate-x-32 z-0 hidden md:block border-l border-slate-100"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl z-0" style={{ backgroundColor: COLORS.primaryLight }}></div>
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 animate-fadeInLeft">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-sm font-bold tracking-wide uppercase" style={{ backgroundColor: COLORS.primaryLight, color: COLORS.primary, borderColor: COLORS.primaryLight, borderWidth: '1px' }}>
            <Factory size={16} /> Industrial Services Partner
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-[1.1]">
            Oil, Gas & Power <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r" style={{ backgroundImage: `linear-gradient(to right, ${COLORS.primary}, ${COLORS.secondary})` }}>
              Plant Specialist
            </span>
          </h1>
          <p className="text-slate-600 text-lg md:text-xl max-w-lg leading-relaxed border-l-4 pl-4" style={{ borderColor: COLORS.secondary }}>
            PT Estima Reka Sakti provides integrated maintenance solutions: Thermal Insulation, Scaffolding, and Painting for high-risk industrial environments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button className="text-white px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all shadow-lg hover:-translate-y-1" style={{ backgroundColor: COLORS.primary }}>Our Services <ArrowRight className="w-5 h-5" /></button>
            <button className="border-2 border-slate-200 hover:border-slate-800 text-slate-600 hover:text-slate-900 px-8 py-4 rounded-lg font-bold transition-all bg-white hover:bg-slate-50">View Portfolio</button>
          </div>
          <div className="flex items-center gap-6 text-sm font-medium text-slate-500 pt-4">
            <div className="flex items-center gap-2"><ShieldCheck style={{ color: COLORS.secondary }} size={18} /> HSE Compliant</div>
            <div className="flex items-center gap-2"><ShieldCheck style={{ color: COLORS.secondary }} size={18} /> ISO Certified</div>
          </div>
        </div>
        <div className="relative hidden lg:block h-[600px] w-full animate-fadeInRight">
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1563293777-62a2d4277732?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"></div>
           <div className="absolute top-10 -left-10 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 animate-float">
              <div className="p-2 rounded-lg" style={{ backgroundColor: COLORS.primaryLight, color: COLORS.primary }}><Flame size={24}/></div>
              <div><div className="text-xs text-slate-500 font-bold uppercase">Oil & Gas</div><div className="font-bold text-slate-800">Pipeline Insulation</div></div>
           </div>
           <div className="absolute bottom-20 -right-10 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 animate-float-delayed">
              <div className="p-2 rounded-lg" style={{ backgroundColor: COLORS.secondaryLight, color: COLORS.secondary }}><Zap size={24}/></div>
              <div><div className="text-xs text-slate-500 font-bold uppercase">Power Plant</div><div className="font-bold text-slate-800">Turbine Maintenance</div></div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;