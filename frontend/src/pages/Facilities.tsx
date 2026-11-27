import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight, Building2 } from 'lucide-react';
import { FACILITIES } from '../config/hospitalData';
import { ResponsiveImage } from '../components/ResponsiveImage';

export const Facilities: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');

  const categories = ['All', 'Critical Care', 'Surgical & Robotics', 'Diagnostic', 'Patient Comfort'];

  const filtered = activeTab === 'All'
    ? FACILITIES
    : FACILITIES.filter(f => f.category === activeTab);

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-hospital-white min-h-screen">
      {/* Header Banner */}
      <section className="py-16 sm:py-20 bg-hospital-navy text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-sky-300 border border-white/15 mb-4">
              Infrastructure & Technology
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              Hospital Facilities & Services.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl">
              Engineered for patient safety, clinical precision, and comfortable recovery. All {FACILITIES.length} verified hospital facilities operating at our Powai Naka campus.
            </p>
          </div>
        </div>
      </section>

      {/* Category Navigation Pills */}
      <section className="py-6 bg-hospital-soft border-b border-hospital-border sticky top-16 z-20 backdrop-blur-md bg-hospital-soft/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                    activeTab === cat
                      ? 'bg-hospital-navy text-white shadow-sm'
                      : 'bg-white text-hospital-slate hover:bg-slate-100 border border-hospital-border'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <span className="text-xs text-hospital-muted font-medium">
              Showing {filtered.length} of {FACILITIES.length} facilities
            </span>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (idx % 3) * 0.1 }}
              className="rounded-2xl border border-hospital-border bg-white overflow-hidden shadow-subtle hover:border-hospital-navy/30 transition-all flex flex-col justify-between"
            >
              {item.image ? (
                <div className="relative aspect-[3/2] w-full bg-slate-100 overflow-hidden">
                  <ResponsiveImage
                    src={item.image}
                    alt={item.imageAlt || `${item.name} at Mahajan Hospital Satara`}
                    className="w-full h-full object-cover"
                    sizes="(max-width: 768px) 100vw, 420px"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded bg-hospital-navy/85 backdrop-blur-md text-white text-[10px] font-semibold uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="relative aspect-[3/2] w-full bg-gradient-to-br from-hospital-navy via-[#173654] to-[#214a6f] p-6 flex flex-col justify-between text-white">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded bg-white/10 border border-white/15 text-sky-200 text-[10px] font-semibold uppercase tracking-wider">
                      {item.category}
                    </span>
                    <Building2 className="w-5 h-5 text-sky-300/80" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-sky-300 font-semibold block mb-1">
                      Verified Hospital Infrastructure
                    </span>
                    <p className="text-lg font-bold tracking-tight text-white leading-snug">
                      {item.name}
                    </p>
                  </div>
                </div>
              )}

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-hospital-navy tracking-tight">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-hospital-slate leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-hospital-border flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs text-sky-800 font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
                    <span>{item.highlight}</span>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* In-patient Accommodation Guide with Authentic Room Photography */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-hospital-soft border border-hospital-border">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <span className="text-xs uppercase tracking-widest text-hospital-accent font-semibold">
                In-Patient Care &amp; Amenities
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-hospital-navy tracking-tight mt-1">
                Accommodation &amp; Patient Rooms
              </h2>
              <p className="mt-3 text-sm text-hospital-slate leading-relaxed">
                Mahajan Multispecialist Hospital provides spacious, clean room choices tailored to patient comfort and clinical care needs:
              </p>
            </div>
            <Link
              to="/contact#appointment-enquiry"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-hospital-navy text-white text-xs uppercase tracking-wider font-semibold hover:bg-hospital-charcoal transition-colors"
            >
              <span>Book an Appointment</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="rounded-2xl bg-white border border-hospital-border overflow-hidden shadow-subtle">
              <div className="aspect-[3/2] bg-slate-100 overflow-hidden">
                <ResponsiveImage
                  src="/assets/facilities/deluxe-room-1400w.webp"
                  alt="Deluxe Private Patient Suite at Mahajan Hospital Satara"
                  className="w-full h-full object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
              <div className="p-5">
                <h4 className="text-base font-bold text-hospital-navy">Deluxe &amp; Private Suites</h4>
                <p className="text-xs text-hospital-slate mt-2 leading-relaxed">
                  Climate-controlled private suites with motorized beds, central oxygen panel, wardrobe cabinetry, television, and sunlit natural ventilation.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-hospital-border overflow-hidden shadow-subtle">
              <div className="aspect-[3/2] bg-slate-100 overflow-hidden">
                <ResponsiveImage
                  src="/assets/facilities/semi-private-room-1400w.webp"
                  alt="Semi-Private Twin-Sharing Patient Room at Mahajan Hospital Satara"
                  className="w-full h-full object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
              <div className="p-5">
                <h4 className="text-base font-bold text-hospital-navy">Semi-Private Rooms</h4>
                <p className="text-xs text-hospital-slate mt-2 leading-relaxed">
                  Twin-sharing patient rooms with privacy curtains, personal bedside lockers, IV stands, and central oxygen and vacuum outlets.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-hospital-border overflow-hidden shadow-subtle">
              <div className="aspect-[3/2] bg-slate-100 overflow-hidden">
                <ResponsiveImage
                  src="/assets/facilities/icu-ventilator-1400w.webp"
                  alt="Specialized ICU Beds with Ventilator and Monitors at Mahajan Hospital Satara"
                  className="w-full h-full object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
              <div className="p-5">
                <h4 className="text-base font-bold text-hospital-navy">Specialized ICU Beds</h4>
                <p className="text-xs text-hospital-slate mt-2 leading-relaxed">
                  Motorized multi-position ICU beds with invasive monitoring, syringe pumps, Dräger ventilator support, and 24/7 nursing vigilance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
