"use client";
import React from 'react';
import { Target, Compass, Heart } from 'lucide-react';
import { COLORS } from '@/lib/Constants';
import { motion, Variants } from 'framer-motion';

const VisionMission = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-bold tracking-wider uppercase text-sm" style={{ color: COLORS.primary }}>Corporate Identity</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Vision, Mission & Values</h2>
          <div className="w-20 h-1 mx-auto mt-4 rounded-full" style={{ backgroundColor: COLORS.secondary }}></div>
        </motion.div>
        <motion.div
          className="w-full grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >

          {/* Vision */}
          <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border-t-4 h-full" style={{ borderColor: COLORS.primary }}>
            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: COLORS.primaryLight, color: COLORS.primary }}>
              <Target size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Vision</h3>
            <ul className="space-y-3 text-slate-600">
              {[
                'Put PT Estima Reka Sakti as one of the main insulation services in Indonesia',
                'Be the best provider in quality and environmental management system',
                'Get customer’s recognition in those insulation services by PT Estima Reka Sakti'
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: COLORS.primary }}></span>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Mission */}
          <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border-t-4 h-full" style={{ borderColor: COLORS.secondary }}>
            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: COLORS.secondaryLight, color: COLORS.secondary }}>
              <Compass size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Mission</h3>
            <ul className="space-y-3 text-slate-600">
              {[
                'Produce qualified insulation services in relation with the punctuality and condition',
                'Priority to customer’s satisfaction and good relationship',
                'Get customer’s recognition in those insulation services by PT Estima Reka Sakti'
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: COLORS.secondary }}></span>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Values */}
          <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border-t-4 h-full" style={{ borderColor: COLORS.primary }}>
            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: COLORS.primaryLight, color: COLORS.primary }}>
              <Heart size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Values</h3>
            <ul className="space-y-3 text-slate-600">
              {[
                'To be an efficient, effective and consequent person',
                'To be reliable attitude and thoroughly task oriented and liable for increasing product',
                'To be honest, professional and innovative'
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: COLORS.primary }}></span>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
export default VisionMission;