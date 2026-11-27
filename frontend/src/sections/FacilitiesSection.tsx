import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { FACILITIES } from '../config/hospitalData';
import { ResponsiveImage } from '../components/ResponsiveImage';

export const FacilitiesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Critical Care', 'Surgical & Robotics', 'Diagnostic', 'Patient Comfort'];

  const filteredFacilities = activeCategory === 'All'
    ? FACILITIES
    : FACILITIES.filter(f => f.category === activeCategory);

  // Authentic facility spotlights using real hospital photography from Google Drive
  const spotlightFacilities = [
    {
      title: "Modular Operating Theatre with Laminar Air Flow",
      category: "Surgical Standard",
      description: "Class 100 sterile surgical suites engineered with continuous positive-pressure HEPA filtration, horizontal laminar air currents, spine operating microscope, and intraoperative C-Arm integration.",
      stats: "Ultra-Clean ISO Class 5 Environment",
      image: "/assets/facilities/modular-laminar-ot-1400w.webp",
      alt: "Modular Operating Theatre with Laminar Air Flow HEPA Ceiling at Mahajan Hospital Satara"
    },
    {
      title: "Ultramodern ICU & 24/7 Casualty",
      category: "Critical Care",
      description: "Equipped with motorized ICU beds, invasive haemodynamic monitoring, Dräger mechanical ventilators, and round-the-clock intensivist coverage for uninterrupted golden-hour emergencies.",
      stats: "24/7 In-House Intensivist Presence",
      image: "/assets/facilities/ultramodern-icu-1400w.webp",
      alt: "Ultramodern ICU Motorized Beds and Monitoring Rails at Mahajan Hospital Satara"
    },
    {
      title: "Surgix C-Arm Imaging & Stryker Arthroscopy",
      category: "Precision Surgical Tech",
      description: "Real-time flat-panel C-Arm fluoroscopy and high-definition optical arthroscopy towers enabling sub-millimeter bone alignment and minimally invasive joint reconstructions.",
      stats: "Real-Time Intraoperative Guidance",
      image: "/assets/facilities/c-arm-imaging-1400w.webp",
      alt: "Surgix Flat-Panel C-Arm Fluoroscopy Unit inside Modular OT at Mahajan Hospital"
    },
    {
      title: "Welcoming Reception, Waiting Areas & Deluxe Suites",
      category: "Patient Comfort",
      description: "Organized multi-floor reception desks, comfortable family waiting halls, private consulting chambers, and bright deluxe rooms designed for calm, dignified recovery.",
      stats: "Thoughtful Patient-First Hospitality",
      image: "/assets/hospital/ortho-reception-1400w.webp",
      alt: "Orthopaedic Reception Desk and Waiting Area at Mahajan Multispecialist Hospital Satara"
    }
  ];

  return (
    <section id="facilities-section" className="py-24 sm:py-32 bg-hospital-soft border-t border-hospital-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <p className="text-xs uppercase tracking-widest text-hospital-accent font-semibold mb-3">
            Infrastructure & Technology
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-hospital-navy">
            Advanced facilities built for precision recovery.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-hospital-slate leading-relaxed">
            Every clinical suite at Mahajan Multispecialist Hospital integrates modern medical engineering to deliver safe, predictable, and dignified outcomes.
          </p>
        </div>

        {/* Cinematic Spotlight: Alternating Image & Text Layout */}
        <div className="space-y-16 sm:space-y-24 mb-24">
          {spotlightFacilities.map((facility, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={`lg:col-span-7 ${isReversed ? 'lg:order-2' : ''}`}>
                  <div className="relative aspect-[3/2] rounded-2xl overflow-hidden shadow-subtle border border-hospital-border bg-white group">
                    <ResponsiveImage
                      src={facility.image}
                      alt={facility.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                      sizes="(max-width: 1024px) 100vw, 720px"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-hospital-navy/80 backdrop-blur-md text-white border border-white/20">
                        <Sparkles className="w-3 h-3 text-sky-400" />
                        {facility.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className={`lg:col-span-5 space-y-4 ${isReversed ? 'lg:order-1' : ''}`}>
                  <div className="inline-block text-xs uppercase tracking-widest text-hospital-muted font-bold">
                    Featured Capability
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-hospital-navy tracking-tight leading-snug">
                    {facility.title}
                  </h3>
                  <p className="text-sm sm:text-base text-hospital-slate leading-relaxed">
                    {facility.description}
                  </p>
                  <div className="pt-2">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-sky-50 border border-sky-100 text-xs font-semibold text-sky-900">
                      <ShieldCheck className="w-4 h-4 text-sky-600" />
                      <span>{facility.stats}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Full Verified Facilities Gallery Filter */}
        <div className="pt-12 border-t border-hospital-border">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-hospital-navy tracking-tight">
                All {FACILITIES.length} Specialized Hospital Facilities
              </h3>
              <p className="text-xs text-hospital-slate mt-1">
                Verified hospital infrastructure active at our Satara premises
              </p>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    activeCategory === cat
                      ? 'bg-hospital-navy text-white shadow-sm'
                      : 'bg-white text-hospital-slate hover:bg-slate-100 border border-hospital-border'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of all facilities */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredFacilities.map((fac, idx) => (
              <div
                key={fac.id}
                className="p-5 rounded-xl border border-hospital-border bg-white hover:border-hospital-navy/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] text-hospital-muted font-medium mb-2">
                    <span className="uppercase tracking-wider font-semibold">{fac.category}</span>
                    <span className="font-mono">#{String(idx + 1).padStart(2, '0')}</span>
                  </div>
                  <h4 className="text-base font-bold text-hospital-navy tracking-tight">
                    {fac.name}
                  </h4>
                  <p className="mt-2 text-xs text-hospital-slate leading-relaxed">
                    {fac.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-sky-800 font-semibold">
                    {fac.highlight}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
            <Link
              to="/facilities"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-hospital-navy hover:text-hospital-accent transition-colors"
            >
              <span>Explore complete facility profiles and room accommodations</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact#appointment-enquiry"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-hospital-navy text-white text-xs uppercase tracking-wider font-semibold hover:bg-hospital-charcoal transition-colors"
            >
              <span>Book an Appointment</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
