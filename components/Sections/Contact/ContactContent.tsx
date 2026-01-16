"use client"
import { MapPin, Mail, Phone, Clock, Building2, Send } from 'lucide-react';
import { COLORS } from '@/lib/Constants';

const ContactContent = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16">

                    {/* --- LEFT: SENSORY INPUT (Info & Map) --- */}
                    <div className="lg:w-5/12 space-y-12">
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">Headquarters</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: COLORS.primaryLight, color: COLORS.primary }}>
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">Office Location</h4>
                                        <p className="text-slate-600 leading-relaxed">
                                            Jl. Raya Dr. Setia Budi No.288<br />
                                            Pondok Aren, Tangerang Selatan, Banten, 15226<br />
                                            Indonesia
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: COLORS.primaryLight, color: COLORS.primary }}>
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">Email Us</h4>
                                        <p className="text-slate-600">marketing@estima.id</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: COLORS.primaryLight, color: COLORS.primary }}>
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">Call Us</h4>
                                        <p className="text-slate-600">+62(21)7312345 (Office)</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: COLORS.secondaryLight, color: COLORS.secondary }}>
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">Operational Hours</h4>
                                        <p className="text-slate-600">Mon - Fri: 08:00 AM - 05:00 PM</p>
                                        <p className="text-slate-600">Sat - Sun: Closed (Emergency Call Only)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="w-full h-64 bg-slate-100 rounded-2xl overflow-hidden relative border border-slate-200 group shadow-md">
                            <iframe
                                title="Estima Location"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                scrolling="no"
                                src="https://maps.google.com/maps?q=Ruko+Grand+Galaxy+City+Blok+RGA+No+23+Bekasi&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                className="filter grayscale hover:grayscale-0 transition-all duration-700"
                            ></iframe>

                            {/* Overlay Badge */}
                            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm text-xs font-bold text-slate-800 border border-slate-100 flex items-center gap-2">
                                <MapPin size={14} style={{ color: COLORS.primary }} /> PT Estima Reka Sakti
                            </div>
                        </div>
                    </div>

                    {/* --- RIGHT: SYNAPSE TRANSMISSION (Form) --- */}
                    <div className="lg:w-7/12">
                        <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100 h-full">
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Send a Message</h3>
                            <p className="text-slate-500 mb-8">Fill out the form below and our engineering team will respond within 24 hours.</p>

                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase">Full Name</label>
                                        {/* 💉 VACCINATED: Added 'as React.CSSProperties' to soothe TypeScript */}
                                        <input type="text" className="w-full bg-white border border-slate-200 p-4 rounded-xl focus:outline-none focus:ring-2 transition-all" style={{ '--tw-ring-color': COLORS.primary } as React.CSSProperties} placeholder="John Doe" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase">Email Address</label>
                                        <input type="email" className="w-full bg-white border border-slate-200 p-4 rounded-xl focus:outline-none focus:ring-2 transition-all" style={{ '--tw-ring-color': COLORS.primary } as React.CSSProperties} placeholder="john@company.com" />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase">Company / Organization</label>
                                        <div className="relative">
                                            <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                            <input type="text" className="w-full bg-white border border-slate-200 p-4 pl-12 rounded-xl focus:outline-none focus:ring-2 transition-all" style={{ '--tw-ring-color': COLORS.primary } as React.CSSProperties} placeholder="PT Estima" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase">Subject</label>
                                        <select className="w-full bg-white border border-slate-200 p-4 rounded-xl focus:outline-none focus:ring-2 transition-all text-slate-600 appearance-none" style={{ '--tw-ring-color': COLORS.primary } as React.CSSProperties}>
                                            <option>General Inquiry</option>
                                            <option>Request for Quotation (RFQ)</option>
                                            <option>Project Consultation</option>
                                            <option>Partnership Proposal</option>
                                            <option>Career</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase">Message / Project Details</label>
                                    <textarea rows={6} className="w-full bg-white border border-slate-200 p-4 rounded-xl focus:outline-none focus:ring-2 transition-all" style={{ '--tw-ring-color': COLORS.primary } as React.CSSProperties} placeholder="Please describe your project scope, location, and timeline..."></textarea>
                                </div>

                                <div className="flex items-center gap-3">
                                    <input type="checkbox" id="consent" className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                                    <label htmlFor="consent" className="text-sm text-slate-500">I agree to the processing of my data for the purpose of this inquiry.</label>
                                </div>

                                <button className="w-full text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
                                    style={{ backgroundColor: COLORS.primary }}
                                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = COLORS.primaryHover}
                                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = COLORS.primary}>
                                    Send Message <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactContent;