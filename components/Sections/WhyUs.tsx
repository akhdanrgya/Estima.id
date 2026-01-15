import { FC } from 'react';
import { COLORS } from '@/lib/Constants';

const WhyUs = () => {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-16 items-center">
         <div>
           <h2 className="text-3xl md:text-4xl font-bold mb-6">Why PT Estima Reka Sakti?</h2>
           <div className="space-y-6">
              {[
                { title: "Safety First (Zero Accident)", desc: "Strict HSE protocols are the backbone of our operations in Oil, Gas & Power sectors.", color: COLORS.secondary },
                { title: "Certified Manpower", desc: "Engineers and technicians certified for high-risk industrial tasks.", color: COLORS.primary },
                { title: "Asset Integrity Focus", desc: "We focus on prolonging the life of your critical assets through quality maintenance.", color: COLORS.secondary }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1"><div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div></div>
                  <div><h4 className="font-bold text-lg" style={{ color: item.color }}>{item.title}</h4><p className="text-slate-400 text-sm">{item.desc}</p></div>
                </div>
              ))}
           </div>
         </div>
         <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
            <div className="grid grid-cols-2 gap-8 text-center">
               <div><div className="text-4xl font-extrabold text-white mb-1">50+</div><div className="text-xs uppercase tracking-wider text-slate-400">Industrial Projects</div></div>
               <div><div className="text-4xl font-extrabold text-white mb-1">10<span className="text-2xl" style={{ color: COLORS.primary }}>Yrs</span></div><div className="text-xs uppercase tracking-wider text-slate-400">Experience</div></div>
               <div className="col-span-2 border-t border-slate-700 pt-6 mt-2"><p className="text-slate-300 italic">"Estima delivered scaffolding and insulation for our turbine overhaul ahead of schedule."</p><div className="mt-2 text-sm font-bold" style={{ color: COLORS.secondary }}>- Plant Manager Testimonial</div></div>
            </div>
         </div>
      </div>
    </section>
  );
};

export default WhyUs;