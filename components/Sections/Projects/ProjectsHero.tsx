"use client";
import { Building2 } from 'lucide-react';
import { COLORS } from '@/lib/Constants';
import { motion, Variants } from 'framer-motion';

const ProjectsHero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative pt-32 pb-20 bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-800/80"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Proven Excellence in <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r" style={{ backgroundImage: `linear-gradient(to right, ${COLORS.primary}, ${COLORS.secondary})` }}>Major Projects</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-slate-300 text-lg md:text-xl leading-relaxed">
            From routine maintenance in petrochemical plants to large-scale scaffolding in power generation. We deliver safety and quality, on time, every time.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsHero;