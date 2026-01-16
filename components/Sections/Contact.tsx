"use client"
import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import { COLORS } from '@/lib/Constants';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-slate-100">
          
          <div className="md:w-5/12 bg-slate-900 p-10 text-white relative flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-full h-full z-0" style={{ backgroundColor: COLORS.primaryLight, opacity: 0.1 }}></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
              <p className="text-slate-300 mb-8 text-sm">Consult your building insulation needs. Free site survey available for specific areas.</p>
              
              <div className="space-y-6">
                {[
                  { icon: <MapPin size={20} />, title: "Head Office", desc: "Pondok Aren, Tangerang Selatan" },
                  { icon: <Mail size={20} />, title: "Email", desc: "marketing@estima.id" },
                  { icon: <Phone size={20} />, title: "WhatsApp / Call", desc: "+62(21)7312345" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center transition-colors group-hover:text-white"
                         onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = COLORS.primary; }}
                         onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#1e293b'; }}>
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 uppercase">{item.title}</div>
                      <div className="font-medium text-sm">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 mt-12">
               <div className="text-xs text-slate-500 mb-2">Social Media</div>
               <div className="flex gap-4">
                  {['IG', 'FB', 'LI'].map((social) => (
                    <div key={social} className="w-8 h-8 bg-slate-800 rounded-full hover:bg-white hover:text-slate-900 transition-colors cursor-pointer flex items-center justify-center text-xs">
                      {social}
                    </div>
                  ))}
               </div>
            </div>
          </div>

          <div className="md:w-7/12 p-10 md:p-12 bg-slate-50">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Request a Quote</h3>
            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase">Name</label>
                  <input type="text" className="w-full bg-white border border-slate-200 p-3 rounded-lg focus:outline-none focus:ring-1 transition-all" 
                         style={{ '--tw-ring-color': COLORS.primary, '--tw-border-opacity': 1 } as React.CSSProperties} // 💉 Vaksinasi Type
                         placeholder="Your Name" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase">Company</label>
                  <input type="text" className="w-full bg-white border border-slate-200 p-3 rounded-lg focus:outline-none focus:ring-1 transition-all" 
                         style={{ '--tw-ring-color': COLORS.primary } as React.CSSProperties} // 💉 Vaksinasi Type
                         placeholder="Company Name" />
                </div>
              </div>
              
              <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase">Service Type</label>
                  <select className="w-full bg-white border border-slate-200 p-3 rounded-lg focus:outline-none focus:ring-1 transition-all text-slate-600"
                          style={{ '--tw-ring-color': COLORS.primary } as React.CSSProperties} // 💉 Vaksinasi Type
                  >
                    <option>Select Requirement...</option>
                    <option>Polyurethane Spray Foam</option>
                    <option>Cold Storage Construction</option>
                    <option>Roof Insulation</option>
                    <option>Soundproofing</option>
                  </select>
              </div>

              <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase">Message</label>
                  <textarea rows={4} className="w-full bg-white border border-slate-200 p-3 rounded-lg focus:outline-none focus:ring-1 transition-all"
                            style={{ '--tw-ring-color': COLORS.primary } as React.CSSProperties} // 💉 Vaksinasi Type
                            placeholder="Details (Area size, Project location, etc...)"></textarea>
              </div>

              <button className="w-full text-white font-bold py-4 rounded-lg shadow-lg transition-all"
                      style={{ backgroundColor: COLORS.primary }}
                      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = COLORS.primaryHover; }}
                      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = COLORS.primary; }}>
                Send Request
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;