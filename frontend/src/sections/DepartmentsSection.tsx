import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check, X, ArrowRight } from 'lucide-react';
import { DEPARTMENTS, DepartmentItem } from '../config/hospitalData';

export const DepartmentsSection: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState<DepartmentItem | null>(null);

  return (
    <section id="departments-section" className="py-24 sm:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <p className="text-xs uppercase tracking-widest text-hospital-accent font-semibold mb-3">
            Clinical Disciplines
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-hospital-navy">
            Expertise across every speciality.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-hospital-slate leading-relaxed">
            Fourteen coordinated medical and surgical divisions providing continuous, precision healthcare under one roof in Satara.
          </p>
        </div>

        {/* 14 Departments Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {DEPARTMENTS.map((dept, index) => {
            const formattedIndex = String(index + 1).padStart(2, '0');
            return (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                onClick={() => setSelectedDept(dept)}
                className="group cursor-pointer rounded-2xl border border-hospital-border bg-white hover:border-hospital-navy/30 hover:shadow-subtle transition-all duration-300 flex flex-col justify-between overflow-hidden p-6"
              >
                <div>
                  {/* Top Line: Number & Arrow */}
                  <div className="flex items-center justify-between pb-6 border-b border-hospital-border/50">
                    <span className="text-xs font-mono font-semibold text-hospital-muted tracking-wider">
                      {formattedIndex}
                    </span>
                    <span className="p-1.5 rounded-full bg-slate-50 text-hospital-muted group-hover:bg-hospital-navy group-hover:text-white transition-all">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-hospital-navy tracking-tight group-hover:text-hospital-accent transition-colors">
                      {dept.name}
                    </h3>
                    <p className="text-xs uppercase tracking-wider text-hospital-muted font-medium mt-1">
                      {dept.tagline}
                    </p>
                    <p className="mt-3 text-xs sm:text-sm text-hospital-slate line-clamp-2 leading-relaxed">
                      {dept.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Procedure Highlights */}
                <div className="mt-6 pt-4 border-t border-hospital-border/40">
                  <span className="text-[11px] font-semibold text-hospital-navy flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    View clinical scope & procedures <ArrowRight className="w-3 h-3 text-hospital-accent" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All Dedicated Page CTA */}
        <div className="mt-16 text-center">
          <Link
            to="/departments"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-hospital-navy text-white text-xs uppercase tracking-wider font-semibold hover:bg-hospital-charcoal transition-all shadow-subtle"
          >
            <span>Explore Comprehensive Department Guides</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Department Detail Modal */}
      <AnimatePresence>
        {selectedDept && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-hospital-navy/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-xl bg-white rounded-2xl shadow-floating border border-hospital-border overflow-hidden p-6 sm:p-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedDept(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-hospital-navy hover:bg-slate-100 transition-colors"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="pr-8">
                <span className="text-xs uppercase tracking-widest text-hospital-accent font-semibold">
                  Department Profile
                </span>
                <h3 className="text-2xl font-bold text-hospital-navy tracking-tight mt-1">
                  {selectedDept.name}
                </h3>
                <p className="text-xs uppercase tracking-wider text-hospital-muted font-medium mt-0.5">
                  {selectedDept.tagline}
                </p>
              </div>

              <p className="mt-4 text-sm text-hospital-slate leading-relaxed">
                {selectedDept.description}
              </p>

              {/* Clinical Procedures / Capabilities */}
              <div className="mt-6 pt-5 border-t border-hospital-border">
                <h4 className="text-xs uppercase tracking-widest text-hospital-navy font-bold mb-3">
                  Clinical Capabilities & Procedures:
                </h4>
                <ul className="space-y-2.5">
                  {selectedDept.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-hospital-charcoal">
                      <div className="p-0.5 rounded-full bg-sky-100 text-sky-800 shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
                <Link
                  to="/contact"
                  onClick={() => setSelectedDept(null)}
                  className="w-full sm:w-auto flex-1 text-center py-2.5 px-4 rounded-xl bg-hospital-navy text-white text-xs uppercase tracking-wider font-semibold hover:bg-hospital-charcoal transition-colors"
                >
                  Consult this Department
                </Link>
                <button
                  onClick={() => setSelectedDept(null)}
                  className="w-full sm:w-auto py-2.5 px-5 rounded-xl border border-hospital-border text-xs uppercase tracking-wider font-semibold text-hospital-charcoal hover:bg-slate-50 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
