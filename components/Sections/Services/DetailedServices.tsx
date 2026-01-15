import { ArrowRight, ClipboardCheck, Construction, Layers, Thermometer, Wrench } from 'lucide-react';
import { COLORS } from '@/lib/Constants';

const DetailedServices = () => {
  const serviceDetails = [
    {
      id: "insulation",
      title: "Industrial Insulation",
      subtitle: "Thermal & Acoustic Protection",
      desc: "Our core expertise. We provide complete insulation systems to maintain process temperatures, prevent condensation, and protect personnel.",
      features: [
        "Hot Insulation (Pipes, Boilers, Turbines)",
        "Cold/Cryogenic Insulation (LNG Tanks, Chiller Lines)",
        "Acoustic Insulation for Noise Control",
        "Personnel Protection & Energy Conservation"
      ],
      icon: <Thermometer size={40} />,
      image: "https://images.unsplash.com/photo-1565610166456-4c4f3468536b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      color: COLORS.primary
    },
    {
      id: "scaffolding",
      title: "Scaffolding Access",
      subtitle: "Safe Working Platforms",
      desc: "Providing secure temporary access structures for construction, maintenance, and repair works at height.",
      features: [
        "Tubular & Fitting Scaffolding",
        "Modular System Scaffolding (Ringlock/Cuplock)",
        "Suspended & Cantilever Scaffolding",
        "Certified Scaffolders & Inspectors"
      ],
      icon: <Construction size={40} />,
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      color: COLORS.secondary
    },
    {
      id: "painting",
      title: "Blasting & Painting",
      subtitle: "Corrosion Control",
      desc: "Surface preparation and protective coating application to extend the lifespan of steel structures and equipment.",
      features: [
        "Abrasive Blasting (Grit, Sand, Garnet)",
        "Power Tool Cleaning",
        "Industrial Coating & Lining Application",
        "CUI (Corrosion Under Insulation) Mitigation"
      ],
      icon: <Layers size={40} />,
      image: "https://plus.unsplash.com/premium_photo-1664303228186-a61e7dc91597?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: COLORS.primary
    },
    {
      id: "maintenance",
      title: "Plant Maintenance",
      subtitle: "Turnaround & Shutdown",
      desc: "Integrated manpower and equipment supply for scheduled plant shutdowns and emergency repairs.",
      features: [
        "General Mechanical Works",
        "Valve & Flange Management",
        "Refractory Works",
        "Manpower Supply (Fitters, Welders, Riggers)"
      ],
      icon: <Wrench size={40} />,
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      color: COLORS.secondary
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="space-y-32">
          {serviceDetails.map((service, index) => (
            <div key={service.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}>
              
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-all duration-500 rounded-3xl z-10"></div>
                <div className="absolute -inset-4 rounded-3xl opacity-20 group-hover:opacity-40 transition-all duration-500 blur-xl" style={{ backgroundColor: service.color }}></div>
                <img src={service.image} alt={service.title} className="relative rounded-3xl shadow-2xl w-full h-[400px] object-cover z-0" />
                
                {/* Floating Icon */}
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center z-20" style={{ color: service.color }}>
                  {service.icon}
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="inline-block px-3 py-1 bg-slate-100 rounded text-xs font-bold uppercase tracking-wider text-slate-500">
                  {service.subtitle}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{service.title}</h2>
                <div className="w-20 h-1.5 rounded-full" style={{ backgroundColor: service.color }}></div>
                <p className="text-slate-600 text-lg leading-relaxed">
                  {service.desc}
                </p>
                
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <ClipboardCheck size={20} style={{ color: service.color }} /> Key Capabilities
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: service.color }}></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="flex items-center gap-2 font-bold hover:gap-3 transition-all mt-4" style={{ color: service.color }}>
                  Request Technical Spec <ArrowRight size={20} />
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailedServices;