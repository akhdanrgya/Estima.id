"use client";
import { MessageSquare } from 'lucide-react';
import { COLORS } from '@/lib/Constants';
import { motion, Variants } from 'framer-motion';

const ContactHero = () => {
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
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-800/90"></div>

      <motion.div
        className="container mx-auto px-6 relative z-10 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
          Let&apos;s Engineer Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r" style={{ backgroundImage: `linear-gradient(to right, ${COLORS.primary}, ${COLORS.secondary})` }}>Next Solution</span>
        </motion.h1>
        <motion.p variants={itemVariants} className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Ready to optimize your plant's efficiency? Contact our engineering team for a consultation on Insulation, Scaffolding, or Maintenance services.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default ContactHero;