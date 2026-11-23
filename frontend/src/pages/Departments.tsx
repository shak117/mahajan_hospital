import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Search, Activity, Stethoscope } from 'lucide-react';
import { DEPARTMENTS, DepartmentItem } from '../config/hospitalData';

export const Departments: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDept, setSelectedDept] = useState<DepartmentItem | null>(null);

  const filtered = DEPARTMENTS.filter((dept) =>
    dept.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dept.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dept.details.some(d => d.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-hospital-white min-h-screen">
      {/* Header Banner */}
      <section className="py-16 sm:py-20 bg-hospital-navy text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-sky-300 border border-white/15 mb-4">
              Comprehensive Medical Scope
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              Fourteen Specialized Departments.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl">
              From round-the-clock emergency casualty and robotic joint restoration to laparoscopic surgery, clinical dermatology, and pathology.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters Bar */}
      <section className="py-8 bg-hospital-soft border-b border-hospital-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="relative w-full sm:max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search speciality (e.g. Orthopaedics, Trauma, Laparoscopy)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-hospital-border bg-white text-xs sm:text-sm text-hospital-charcoal focus:outline-none focus:ring-2 focus:ring-hospital-accent"
              />
            </div>
            <p className="text-xs text-hospital-muted">
              Showing <strong>{filtered.length}</strong> of 14 clinical departments
            </p>
          </div>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((dept, idx) => (
            <motion.div
              key={dept.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (idx % 3) * 0.1 }}
              className="rounded-2xl border border-hospital-border bg-white overflow-hidden shadow-subtle hover:border-hospital-navy/30 transition-all flex flex-col justify-between"
            >
              {/* Department Thumbnail */}
              <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                <img
                  src={dept.image}
                  alt={dept.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.src = '/images/facilities-emergency-care.avif';
                  }}
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded bg-hospital-navy/80 backdrop-blur-md text-white text-[11px] font-mono font-bold">
                    #{String(idx + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* Department Info */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-hospital-navy tracking-tight">
                    {dept.name}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-hospital-accent font-semibold mt-1">
                    {dept.tagline}
                  </p>
                  <p className="mt-3 text-xs sm:text-sm text-hospital-slate leading-relaxed">
                    {dept.description}
                  </p>

                  {/* Procedures Checklist */}
                  <div className="mt-5 pt-4 border-t border-hospital-border">
                    <span className="text-[11px] uppercase tracking-wider font-bold text-hospital-navy block mb-2">
                      Key Clinical Focus:
                    </span>
                    <ul className="space-y-1.5">
                      {dept.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2 text-xs text-hospital-charcoal">
                          <Check className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-hospital-border">
                  <Link
                    to="/contact"
                    className="w-full py-2.5 px-4 rounded-xl bg-hospital-soft hover:bg-hospital-navy hover:text-white text-hospital-navy font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>Consult This Department</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
