import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HOSPITAL_INFO } from '../config/hospitalData';
import { ResponsiveImage } from '../components/ResponsiveImage';

export const AppointmentCtaSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-hospital-white relative border-t border-hospital-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center rounded-3xl border border-hospital-border bg-hospital-soft/60 p-6 sm:p-10 lg:p-12 shadow-subtle">
          <div className="lg:col-span-7 text-left">
            <span className="text-xs uppercase tracking-widest text-hospital-accent font-semibold">
              Immediate Patient Assistance
            </span>

            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-hospital-navy leading-tight">
              Your health deserves the right care.
            </h2>

            <p className="mt-4 text-base sm:text-lg text-hospital-slate max-w-2xl leading-relaxed">
              Connect with our hospital desk for specialist OPD enquiries, department guidance, or round-the-clock emergency assistance in Satara.
            </p>

            {/* Consistent Funnel CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <Link
                to="/contact#appointment-enquiry"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-hospital-navy text-white font-semibold text-xs uppercase tracking-wider hover:bg-hospital-charcoal transition-all shadow-subtle"
              >
                <Calendar className="w-4 h-4 text-sky-400" />
                <span>Book an Appointment</span>
              </Link>

              <a
                href={`tel:${HOSPITAL_INFO.contact.opdPhoneClean}`}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white text-hospital-navy border border-hospital-border font-semibold text-xs uppercase tracking-wider hover:bg-slate-50 transition-all"
              >
                <Phone className="w-4 h-4 text-sky-600" />
                <span>Call +91 9075023025</span>
              </a>

              <a
                href={HOSPITAL_INFO.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-emerald-600 text-white font-semibold text-xs uppercase tracking-wider hover:bg-emerald-700 transition-all shadow-subtle"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Desk</span>
              </a>
            </div>

            <div className="mt-6 text-xs text-hospital-muted">
              For acute emergencies or trauma cases, casualty is accessible 24/7 without prior appointment. Direct hotline:{' '}
              <strong className="text-hospital-navy">02162 232299</strong>.
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[3/2] rounded-2xl overflow-hidden shadow-subtle border border-hospital-border bg-white">
              <ResponsiveImage
                src="/assets/hospital/waiting-lounge-1400w.webp"
                alt="Patient Reception Counter and Waiting Lounge at Mahajan Multispecialist Hospital Satara"
                className="w-full h-full object-cover"
                sizes="(max-width: 1024px) 100vw, 480px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hospital-navy/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <span className="text-[10px] uppercase tracking-widest text-sky-300 font-semibold block">
                  Warm, Organized Care
                </span>
                <p className="text-xs sm:text-sm font-semibold text-white">
                  Dedicated Patient Reception &amp; Coordination Lounge
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
