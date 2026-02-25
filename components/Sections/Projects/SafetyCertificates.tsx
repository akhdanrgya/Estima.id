"use client";
import { ShieldCheck, FileCheck, Check, Trophy, Award } from "lucide-react"
import { COLORS } from "@/lib/Constants";

const SafetyCertificates = () => {
  const awards = [
    { 
      id: 1, 
      name: "EXXONMOBIL CEPU EPC 1", 
      title: "CONSTRUCTION SAFETY SUBCONTRACTOR AWARD",
      desc: "Appreciated for our commitment to operational safety at the Banyu Urip Project, ensuring zero Lost Time Injuries (LTI) despite challenging and high-risk conditions.",
      img: "/certificates/SafetyApperciation.png" 
    },
    { 
      id: 2, 
      name: "EXXONMOBIL CEPU EPC 1", 
      title: "15 Million Safe Man-Hours",
      desc: "Recognized for our contribution to achieving a major safety milestone at the Banyu Urip Project, maintaining zero Lost Time Injuries (LTI) across 15 million safe man-hours in high-risk operations.",
      img: "/certificates/SafetyApperciation2.png" 
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl -z-10 opacity-50" style={{ backgroundColor: COLORS.primaryLight }}></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl -z-10 opacity-50" style={{ backgroundColor: COLORS.secondaryLight }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
            <Trophy size={16} style={{ color: COLORS.secondary }} /> Awards & Recognition
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Proven Track Record</h2>
          <p className="text-slate-600">Our commitment to safety has been recognized by industry leaders and national bodies through various prestigious awards.</p>
        </div>

        {/* 🧬 Grid 3 Kolom untuk 3 Sertifikat Utama */}
        <div className="grid md:grid-cols-3 gap-8">
          {awards.map((award) => (
            <div key={award.id} className="group bg-white rounded-2xl border border-slate-100 hover:border-blue-100 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full">
              {/* Image Header */}
              <div className="h-64 bg-slate-50 flex items-center justify-center p-6 border-b border-slate-50 relative">
                 <img 
                   src={award.img} 
                   alt={award.title} 
                   className="max-w-full max-h-full object-contain shadow-md rounded-md transform group-hover:scale-105 transition-all duration-500"
                   onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                   }}
                 />
                 {/* Fallback Icon if image missing */}
                 <div className="hidden flex-col items-center justify-center text-slate-300">
                    <Award size={64} />
                    <span className="text-xs mt-2 font-bold uppercase">Image Missing</span>
                 </div>
                 
                 {/* Achievement Badge */}
                 <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-sm text-yellow-500 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <Trophy size={20} />
                 </div>
              </div>
              
              {/* Content Body */}
              <div className="p-8 flex-1 flex flex-col">
                <div className="mb-auto">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">{award.issuer}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">{award.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{award.desc}</p>
                </div>
                
                <div className="mt-6 pt-6 border-t border-slate-50 flex items-center gap-2 text-xs font-bold" style={{ color: COLORS.secondary }}>
                    <ShieldCheck size={14} /> Safety Achievement
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SafetyCertificates;