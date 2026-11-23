import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, CheckCircle, ArrowRight } from 'lucide-react';
import { DIRECTORS } from '../config/hospitalData';

export const DirectorsSection: React.FC = () => {
  return (
    <section id="directors-section" className="py-24 sm:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <p className="text-xs uppercase tracking-widest text-hospital-accent font-semibold mb-3">
            Clinical Leadership
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-hospital-navy">
            Our Medical Directors.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-hospital-slate leading-relaxed">
            Led by internationally credentialed clinicians committed to modern medical science, surgical precision, and ethical healthcare for the community of Satara.
          </p>
        </div>

        {/* Two Directors Editorial Profile Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {DIRECTORS.map((director, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="rounded-3xl border border-hospital-border bg-hospital-soft/40 overflow-hidden flex flex-col justify-between hover:border-hospital-navy/20 transition-all duration-300"
            >
              {/* Profile Image & Badge */}
              <div className="relative aspect-[4/3] w-full bg-slate-200 overflow-hidden">
                <img
                  src={director.image}
                  alt={director.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-102"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to building if specific image fails
                    const target = e.currentTarget;
                    target.src = '/images/mahajan-building.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hospital-navy/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-6 right-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md text-white border border-white/20">
                    <Award className="w-3.5 h-3.5 text-sky-300" />
                    Medical Director
                  </span>
                </div>
              </div>

              {/* Bio & Credentials Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-hospital-navy tracking-tight">
                    {director.name}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-hospital-accent font-semibold mt-1">
                    {director.title}
                  </p>

                  {/* Qualifications */}
                  <div className="mt-4 p-3 rounded-xl bg-white border border-hospital-border text-xs text-hospital-slate font-medium leading-relaxed">
                    <span className="font-bold text-hospital-navy block mb-0.5 text-[11px] uppercase tracking-wider">
                      Credentials & Qualifications:
                    </span>
                    {director.qualifications}
                  </div>

                  {/* Biography */}
                  <p className="mt-4 text-xs sm:text-sm text-hospital-slate leading-relaxed">
                    {director.bio}
                  </p>

                  {/* Expertise Badges */}
                  <div className="mt-6">
                    <h4 className="text-xs uppercase tracking-widest text-hospital-navy font-bold mb-2.5">
                      Areas of Clinical Expertise:
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {director.expertise.map((exp, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white border border-hospital-border text-xs text-hospital-charcoal font-medium"
                        >
                          <CheckCircle className="w-3 h-3 text-sky-600 shrink-0" />
                          <span>{exp}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom consult link */}
                <div className="mt-8 pt-4 border-t border-hospital-border flex items-center justify-between">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-hospital-navy hover:text-hospital-accent transition-colors"
                  >
                    <span>Request consultation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dedicated Directors Link */}
        <div className="mt-14 text-center">
          <Link
            to="/directors"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-hospital-navy hover:text-hospital-accent transition-colors"
          >
            <span>Read detailed clinical philosophy & fellowships</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
