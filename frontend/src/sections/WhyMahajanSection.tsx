import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Users, HeartHandshake, Scale, ShieldAlert } from 'lucide-react';
import { WHY_MAHAJAN_POINTS } from '../config/hospitalData';

export const WhyMahajanSection: React.FC = () => {
  const icons = [Cpu, Users, HeartHandshake, Scale, ShieldAlert];

  return (
    <section className="py-24 sm:py-32 bg-hospital-navy text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-900/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-hospital-slate/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <p className="text-xs uppercase tracking-widest text-sky-400 font-semibold mb-3">
            Why Choose Mahajan Hospital
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Technology meets the human touch.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Healthcare built on clinical rigor, sophisticated surgical infrastructure, and an empathetic doctor-patient relationship.
          </p>
        </div>

        {/* 5 Points Minimalist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_MAHAJAN_POINTS.map((point, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-sky-400 mb-6">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight mb-3">
                    {point.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
