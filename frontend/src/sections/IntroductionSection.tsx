import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Shield, HeartPulse, Award } from 'lucide-react';
import { HOSPITAL_INFO } from '../config/hospitalData';

export const IntroductionSection: React.FC = () => {
  const pillars = [
    {
      title: "Patient-Centric Care",
      desc: "Every clinical decision revolves around the comfort, safety, and personal dignity of the patient.",
      icon: HeartPulse
    },
    {
      title: "Advanced Medical Technology",
      desc: "Robotic joint systems, spine operating microscopes, and ultramodern laminar airflow operation theatres.",
      icon: Award
    },
    {
      title: "Experienced Healthcare Professionals",
      desc: "Internationally trained surgical specialists and full-time in-house intensivists on site.",
      icon: CheckCircle2
    },
    {
      title: "Ethical Medical Practices",
      desc: "Honest, evidence-based recommendations with total procedural and billing transparency.",
      icon: Shield
    }
  ];

  return (
    <section id="introduction-section" className="py-24 sm:py-32 bg-hospital-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Large Editorial Headline */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <p className="text-xs uppercase tracking-widest text-hospital-accent font-semibold mb-3">
            Institutional Philosophy
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-hospital-navy leading-[1.15]">
            "{HOSPITAL_INFO.editorialHeadline}"
          </h2>
          <p className="mt-6 text-base sm:text-lg text-hospital-slate leading-relaxed">
            {HOSPITAL_INFO.editorialIntro}
          </p>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with architectural presentation */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden shadow-subtle border border-hospital-border bg-slate-100 group">
              <img
                src="/images/mahajan-building.jpg"
                alt="Mahajan Multispecialist Hospital Satara Facility"
                className="w-full h-[380px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-102"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hospital-navy/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded bg-white/20 backdrop-blur-md mb-2 inline-block">
                  Powai Naka • Satara
                </span>
                <p className="text-sm sm:text-base font-medium text-white/95 leading-snug">
                  Modern multidisciplinary medical architecture dedicated to compassionate recovery.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Key Pillars */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-6">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-xl border border-hospital-border/80 bg-hospital-soft/40 hover:bg-hospital-soft transition-all duration-200"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 rounded-lg bg-hospital-navy text-white shrink-0 mt-0.5">
                        <Icon className="w-5 h-5 text-sky-400" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-hospital-navy tracking-tight">
                          {pillar.title}
                        </h3>
                        <p className="mt-1 text-xs sm:text-sm text-hospital-slate leading-relaxed">
                          {pillar.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Comprehensive Under One Roof Highlight */}
            <div className="p-4 rounded-xl bg-sky-50 border border-sky-100 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-sky-500 animate-pulse shrink-0"></div>
              <p className="text-xs text-sky-900 font-medium">
                Comprehensive healthcare under one roof — from emergency casualty to robotic joint restoration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
