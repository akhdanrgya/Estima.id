import { ClipboardCheck, HardHat, PenTool, Ruler } from 'lucide-react';
import { COLORS } from '@/lib/Constants';

const ProcessFlow = () => {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Decorative Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 z-0"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Methodology</h2>
                    <p className="text-slate-600">We follow a strict operational workflow to ensure safety, quality, and punctuality in every project.</p>
                </div>

                <div className="grid md:grid-cols-4 gap-8">
                    {[
                        { title: "Survey & Assessment", desc: "Site visit to analyze requirements and risks.", icon: <Ruler size={24} /> },
                        { title: "Planning & Design", desc: "Material selection and engineering calculation.", icon: <PenTool size={24} /> },
                        { title: "Execution", desc: "Installation by certified manpower.", icon: <HardHat size={24} /> },
                        { title: "Quality Control", desc: "Final inspection and handover.", icon: <ClipboardCheck size={24} /> },
                    ].map((step, idx) => (
                        <div key={idx} className="relative group">
                            <div className="w-16 h-16 bg-white rounded-full border-4 border-slate-100 flex items-center justify-center mx-auto mb-6 relative z-10 group-hover:scale-110 transition-transform shadow-sm" style={{ borderColor: idx % 2 === 0 ? COLORS.primary : COLORS.secondary, color: idx % 2 === 0 ? COLORS.primary : COLORS.secondary }}>
                                {step.icon}
                            </div>
                            <div className="text-center bg-white p-6 rounded-xl shadow-sm h-full group-hover:shadow-md transition-shadow">
                                <div className="text-4xl font-black text-slate-100 absolute top-4 right-4 z-0">{idx + 1}</div>
                                <h3 className="font-bold text-slate-900 mb-2 relative z-10">{step.title}</h3>
                                <p className="text-sm text-slate-500 relative z-10">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default ProcessFlow;