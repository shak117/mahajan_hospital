import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  HeartHandshake, 
  Microscope, 
  Clock, 
  Award, 
  ArrowRight,
  CheckCircle2,
  Users
} from 'lucide-react';
import { HOSPITAL_INFO, HOSPITAL_HIGHLIGHTS } from '../config/hospitalData';

export const About: React.FC = () => {
  const values = [
    {
      title: "Trust & Transparency",
      desc: "Ethical medical counseling where patients and families are fully informed about diagnostic rationale and treatment trajectories.",
      icon: ShieldCheck
    },
    {
      title: "Surgical Precision",
      desc: "Harnessing cutting-edge robotic joint systems and optical microsurgery to ensure consistent, anatomically perfect outcomes.",
      icon: Microscope
    },
    {
      title: "Compassionate Healing",
      desc: "Providing dignified, empathetic bedside nursing and physician care that honors the human element in every patient interaction.",
      icon: HeartHandshake
    },
    {
      title: "Continuous Emergency Readiness",
      desc: "24/7 casualty presence, on-site ICU intensivists, and immediate golden-hour polytrauma resuscitation infrastructure.",
      icon: Clock
    }
  ];

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-hospital-white min-h-screen">
      {/* Header Banner */}
      <section className="relative py-16 sm:py-24 bg-hospital-navy text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src="/images/mahajan-building.jpg"
            alt="Mahajan Hospital Building"
            className="w-full h-full object-cover [object-position:center_30%]"
          />
          <div className="absolute inset-0 bg-hospital-navy/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-sky-300 border border-white/15 mb-4">
              Institutional Profile
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              A commitment to clinical excellence in Satara.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl">
              Mahajan Multispecialist Hospital was established to provide the citizens of Satara and surrounding regions with international-calibre tertiary medical care, multidisciplinary surgical prowess, and compassionate bedside vigilance.
            </p>
          </div>
        </div>
      </section>

      {/* Verified Highlights Strip */}
      <section className="bg-hospital-soft py-12 border-b border-hospital-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {HOSPITAL_HIGHLIGHTS.map((item, idx) => (
              <div key={idx} className="border-l-2 border-hospital-navy/20 pl-4">
                <span className="text-3xl sm:text-5xl font-bold text-hospital-navy tracking-tight">
                  {item.value}
                </span>
                <span className="block text-xs sm:text-sm font-bold text-hospital-charcoal mt-1">
                  {item.label}
                </span>
                <span className="block text-[11px] text-hospital-muted mt-0.5">
                  {item.sublabel}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative Section: Heritage & Philosophy */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest text-hospital-accent font-semibold">
              Our Medical Journey
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-hospital-navy tracking-tight leading-snug">
              Elevating local healthcare with global surgical standards.
            </h2>
            <p className="text-sm sm:text-base text-hospital-slate leading-relaxed">
              Founded at Powai Naka, Mahajan Multispecialist Hospital has emerged as a cornerstone of advanced orthopaedics, emergency trauma management, and critical care in Maharashtra. Recognizing that patients previously had to travel to larger metros for complex joint reconstructions or neuro-trauma stabilization, the hospital brought cutting-edge medical technologies directly to Satara.
            </p>
            <p className="text-sm sm:text-base text-hospital-slate leading-relaxed">
              Today, with robotic joint replacement platforms, laminar airflow modular operating suites, a 24/7 trauma casualty, and a dedicated team of over 15 medical specialists across 14 departments, we deliver seamless treatment from emergency triage to rehabilitation.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <Link
                to="/directors"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-hospital-navy text-white text-xs uppercase tracking-wider font-semibold hover:bg-hospital-charcoal transition-colors"
              >
                <span>Meet Medical Directors</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/facilities"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-slate-100 text-hospital-navy border border-hospital-border text-xs uppercase tracking-wider font-semibold hover:bg-slate-200 transition-colors"
              >
                <span>View Facilities</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-subtle border border-hospital-border">
                <img
                  src="/images/about-us1.avif"
                  alt="Medical Team at Mahajan Hospital"
                  className="w-full h-48 sm:h-64 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-subtle border border-hospital-border mt-8">
                <img
                  src="/images/about-us2.avif"
                  alt="Surgical Care at Mahajan Hospital"
                  className="w-full h-48 sm:h-64 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-subtle border border-hospital-border">
                <img
                  src="/images/about-us3.avif"
                  alt="Diagnostic Technology"
                  className="w-full h-48 sm:h-64 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-subtle border border-hospital-border mt-8">
                <img
                  src="/images/facilities-emergency-care.avif"
                  alt="Emergency Care Facility"
                  className="w-full h-48 sm:h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="py-20 bg-hospital-soft border-t border-hospital-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="text-xs uppercase tracking-widest text-hospital-accent font-semibold">
              Guiding Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-hospital-navy tracking-tight mt-1">
              Our Core Institutional Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-hospital-border shadow-subtle flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-sky-50 text-hospital-accent flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold text-hospital-navy tracking-tight mb-2">
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-hospital-slate leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to action strip */}
      <section className="py-16 bg-hospital-navy text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Consult our medical specialists in Satara.
          </h2>
          <p className="mt-3 text-sm text-slate-300 max-w-xl mx-auto">
            Our outpatient departments are open Monday to Saturday from 9 AM to 8 PM, with continuous 24/7 emergency casualty readiness.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-hospital-navy font-semibold text-xs uppercase tracking-wider hover:bg-slate-100 transition-colors shadow-floating"
            >
              <span>Schedule a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
