"use client"
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { COLORS } from '@/lib/Constants';

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        { q: "What industries do you specialize in?", a: "We primarily serve Heavy Industries such as Oil & Gas Refineries, Petrochemical Plants, Power Generation (PLTU/PLTGU), and Fertilizer Plants." },
        { q: "Do you provide certified scaffolding inspectors?", a: "Yes, all our scaffolding supervisors and inspectors are certified by Kemenaker RI and Migas to ensure the highest safety standards." },
        { q: "Can you handle cryogenic insulation projects?", a: "Absolutely. We have extensive experience in installing PIR/PUR foam and Cellular Glass for LNG/LPG lines operating at temperatures as low as -160°C." },
        { q: "What is your coverage area in Indonesia?", a: "We operate nationwide (Sabang to Merauke), with major project hubs in Cilegon, Balongan, Cilacap, and East Kalimantan (Bontang/Balikpapan)." }
    ];

    return (
        <section className="py-24 bg-white border-t border-slate-100">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900">Common Questions</h2>
                    <p className="text-slate-500 mt-2">Quick answers to frequently asked technical questions.</p>
                </div>
                
                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300" style={{ borderColor: openIndex === idx ? COLORS.primary : '#e2e8f0' }}>
                            <button 
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full flex justify-between items-center p-6 text-left bg-white hover:bg-slate-50 transition-colors"
                            >
                                <span className={`font-bold ${openIndex === idx ? 'text-slate-900' : 'text-slate-700'}`}>{faq.q}</span>
                                <ChevronDown size={20} className={`text-slate-400 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} />
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? 'max-h-48' : 'max-h-0'}`}>
                                <div className="p-6 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                                    {faq.a}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default FAQSection;