import React from 'react';
import { motion } from 'framer-motion';
import { HOSPITAL_HIGHLIGHTS } from '../config/hospitalData';

export const HighlightsSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-hospital-soft border-y border-hospital-border/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Context Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-hospital-muted font-semibold mb-2">
              Established Clinical Care
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-hospital-navy">
              Measured in trust, precision, and patient recovery.
            </h2>
          </div>
          <p className="text-xs text-hospital-muted max-w-xs md:text-right">
            Figures reflected from institutional hospital records in Satara.
          </p>
        </div>

        {/* Oversized Typography Grid (Apple-style) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16">
          {HOSPITAL_HIGHLIGHTS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col border-l-2 border-hospital-navy/20 pl-6 py-2"
            >
              {/* Oversized Number */}
              <span className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-hospital-navy leading-none">
                {item.value}
              </span>
              
              {/* Refined Label */}
              <span className="mt-4 text-base sm:text-lg font-bold text-hospital-charcoal tracking-tight">
                {item.label}
              </span>
              
              {/* Minimal Description */}
              <span className="mt-1 text-xs text-hospital-slate leading-relaxed">
                {item.sublabel}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
