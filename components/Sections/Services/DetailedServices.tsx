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
      image: "services/insulation.png",
      color: COLORS.secondary
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
      image: "services/scaffolding.png",
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
      image: "services/maintenance.jpg",
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