import { Building2 } from 'lucide-react';
import { COLORS } from '@/lib/Constants';

const ProjectsHero = () => {
  return (
    <section className="relative pt-32 pb-20 bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-800/80"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Proven Excellence in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r" style={{ backgroundImage: `linear-gradient(to right, ${COLORS.primary}, ${COLORS.secondary})` }}>Major Projects</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
              From routine maintenance in petrochemical plants to large-scale scaffolding in power generation. We deliver safety and quality, on time, every time.
            </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsHero;