"use client";
import { Wrench } from 'lucide-react';
import { COLORS } from '@/lib/Constants';
import { motion, Variants } from 'framer-motion';

const ServicesHero = () => {
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
      {/* Abstract Background */}
      <div className="absolute inset-0 bg-[url('/header.jpg')] bg-cover bg-center opacity-70"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>

      <motion.div
        className="container mx-auto px-6 relative z-10 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
          Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r" style={{ backgroundImage: `linear-gradient(to right, ${COLORS.primary}, ${COLORS.secondary})` }}>Industrial Solutions</span>
        </motion.h1>
        <motion.p variants={itemVariants} className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Delivering asset integrity and efficiency through specialized maintenance services for Oil & Gas, Power Plants, and Petrochemical industries.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default ServicesHero;