import React from 'react';
import { Phone, MessageCircle, Navigation, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HOSPITAL_INFO } from '../config/hospitalData';

export const AppointmentCtaSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-hospital-white relative border-t border-hospital-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs uppercase tracking-widest text-hospital-accent font-semibold">
          Immediate Patient Assistance
        </span>

        <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-hospital-navy leading-tight">
          Your health deserves the right care.
        </h2>

        <p className="mt-4 text-base sm:text-lg text-hospital-slate max-w-2xl mx-auto leading-relaxed">
          Connect with our hospital team for appointment enquiries, specialist OPD scheduling, and emergency assistance.
        </p>

        {/* Action Buttons Grid */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {/* Phone Call */}
          <a
            href={`tel:${HOSPITAL_INFO.contact.opdPhoneClean}`}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-hospital-navy text-white font-semibold text-xs uppercase tracking-wider hover:bg-hospital-charcoal transition-all shadow-subtle"
          >
            <Phone className="w-4 h-4 text-sky-400" />
            <span>Call +91 9075023025</span>
          </a>

          {/* WhatsApp */}
          <a
            href={HOSPITAL_INFO.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-emerald-600 text-white font-semibold text-xs uppercase tracking-wider hover:bg-emerald-700 transition-all shadow-subtle"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Us</span>
          </a>

          {/* Directions */}
          <a
            href={HOSPITAL_INFO.contact.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-slate-100 text-hospital-navy border border-hospital-border font-semibold text-xs uppercase tracking-wider hover:bg-slate-200 transition-all"
          >
            <Navigation className="w-4 h-4 text-hospital-accent" />
            <span>Get Directions</span>
          </a>

          {/* Online Appointment form button */}
          <Link
            to="/contact"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-sky-50 text-hospital-accent border border-sky-200 font-semibold text-xs uppercase tracking-wider hover:bg-sky-100 transition-all"
          >
            <Calendar className="w-4 h-4" />
            <span>Enquire Online</span>
          </Link>
        </div>

        {/* Emergency Notice */}
        <div className="mt-8 text-xs text-hospital-muted">
          For acute emergencies or trauma cases, casualty is accessible 24/7 without prior appointment. Direct hotline: <strong className="text-hospital-navy">02162 232299</strong>.
        </div>
      </div>
    </section>
  );
};
