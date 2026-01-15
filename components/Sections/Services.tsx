"use client"
import React from 'react';
import { Layers, ArrowRight, Thermometer, Construction, Wrench } from 'lucide-react';
import { COLORS } from '@/lib/Constants';

const Services = () => {
  const servicesList = [
    { title: "Hot & Cold Insulation", desc: "Thermal efficiency for pipes, tanks, and vessels in extreme temperatures (Cryogenic to High Heat).", icon: <Thermometer className="w-8 h-8" style={{ color: COLORS.primary }} /> },
    { title: "Industrial Scaffolding", desc: "Safe and reliable temporary structures for maintenance access in Power Plants and Refineries.", icon: <Construction className="w-8 h-8" style={{ color: COLORS.primary }} /> },
    { title: "Blasting & Painting", desc: "Anti-corrosion protection (Sandblasting & Coating) to extend the lifespan of industrial assets.", icon: <Layers className="w-8 h-8" style={{ color: COLORS.secondary }} /> },
    { title: "Plant Maintenance", desc: "Routine turnaround and shutdown services to ensure continuous operational excellence.", icon: <Wrench className="w-8 h-8" style={{ color: COLORS.secondary }} /> }
  ];
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl"><h2 className="text-4xl font-bold text-slate-900 mb-4">Integrated Maintenance</h2><p className="text-slate-600 text-lg">Comprehensive solutions for heavy industry asset integrity.</p></div>
          <a href="#" className="font-bold flex items-center gap-2 hover:gap-3 transition-all" style={{ color: COLORS.primary }}>View All Solutions <ArrowRight size={20}/></a>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesList.map((service, index) => (
            <div key={index} className="group p-8 rounded-2xl bg-white hover:bg-slate-50 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-300 relative overflow-hidden" style={{ borderColor: 'transparent' }}>
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-100/50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:text-white group-hover:border-transparent transition-colors duration-300" onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = COLORS.primary; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#f8fafc'; }}>
                 {React.cloneElement(service.icon, { className: "w-7 h-7 transition-colors group-hover:text-white" })}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[hsl(207,96%,69%)] transition-colors">{service.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;