import { Award, ChevronRight, CheckCircle2 } from 'lucide-react';
import { COLORS } from '@/lib/Constants';

const FeaturedCaseStudy = () => {
    return (
        <section className="py-24 bg-slate-50 border-y border-slate-200">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    
                    <div className="lg:w-1/2 space-y-6">
                        <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider" style={{ color: COLORS.secondary }}>
                            <Award size={18} /> Featured Case Study
                        </div>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                            Major Turnaround at <br />
                            <span className="text-slate-500">Pertamina Balongan</span>
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            Successfully executed insulation and scaffolding works for the 2023 massive turnaround. Deployed 200+ certified manpower with Zero Accident record over 45 days of non-stop operation.
                        </p>
                        
                        <div className="grid grid-cols-2 gap-6 pt-4">
                            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                                <div className="text-3xl font-bold mb-1" style={{ color: COLORS.primary }}>45</div>
                                <div className="text-xs text-slate-500 uppercase font-bold">Days Duration</div>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                                <div className="text-3xl font-bold mb-1" style={{ color: COLORS.secondary }}>0</div>
                                <div className="text-xs text-slate-500 uppercase font-bold">LTI (Lost Time Injury)</div>
                            </div>
                        </div>

                        <button className="flex items-center gap-2 font-bold hover:gap-3 transition-all mt-4" style={{ color: COLORS.primary }}>
                            Read Full Case Study <ChevronRight size={20} />
                        </button>
                    </div>

                    <div className="lg:w-1/2 relative">
                         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-100 to-transparent rounded-full opacity-50 blur-3xl -z-10"></div>
                         <img 
                            src="https://images.unsplash.com/photo-1590247813693-5541d1c609fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                            alt="Refinery Project" 
                            className="rounded-3xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500"
                        />
                         {/* Floating Stat Card */}
                         <div className="absolute bottom-8 -left-4 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 animate-float">
                            <div className="p-2 rounded-full bg-green-100 text-green-600">
                                <CheckCircle2 size={24} />
                            </div>
                            <div>
                                <div className="text-xs text-slate-500 font-bold uppercase">Status</div>
                                <div className="font-bold text-slate-900">100% Completed</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FeaturedCaseStudy;