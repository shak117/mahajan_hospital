import React from 'react';
import { MapPin, Phone, Mail, AlertCircle } from 'lucide-react';
import { HOSPITAL_INFO } from '../config/hospitalData';
import { AppointmentEnquiryForm } from '../components/AppointmentEnquiryForm';
import { ResponsiveImage } from '../components/ResponsiveImage';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact-section" className="py-24 sm:py-32 bg-hospital-soft relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <p className="text-xs uppercase tracking-widest text-hospital-accent font-semibold mb-3">
            Contact &amp; Appointment Enquiry
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-hospital-navy">
            We are here to assist your recovery.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-hospital-slate leading-relaxed">
            Conveniently located at Powai Naka in the heart of Satara. Complete the appointment enquiry below to message our hospital coordination desk on WhatsApp, or call our 24/7 desk.
          </p>
        </div>

        {/* Two-Column Grid: Trust Photo + Direct Coordinates + WhatsApp Enquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Authentic Reception Photography, Coordinates & Map (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Authentic Reception Confidence Card */}
            <div className="relative aspect-[3/2] rounded-2xl overflow-hidden border border-hospital-border shadow-subtle bg-white group">
              <ResponsiveImage
                src="/assets/hospital/ortho-reception-1400w.webp"
                alt="Mahajan Multispecialist Hospital Main Reception Desk at Powai Naka Satara"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 480px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hospital-navy/85 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <span className="text-[10px] uppercase tracking-widest text-sky-300 font-semibold block">
                  Hospital Coordination Desk
                </span>
                <p className="text-xs sm:text-sm font-semibold text-white">
                  Main Reception • Powai Naka, Satara
                </p>
              </div>
            </div>

            {/* Info Box */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-hospital-border shadow-subtle space-y-6">
              <h3 className="text-xl font-bold text-hospital-navy tracking-tight pb-3 border-b border-hospital-border">
                {HOSPITAL_INFO.name}
              </h3>

              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-sky-50 text-hospital-accent shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-hospital-muted">Location</h4>
                  <p className="text-sm font-medium text-hospital-charcoal mt-0.5 leading-relaxed">
                    {HOSPITAL_INFO.address.full}
                  </p>
                </div>
              </div>

              {/* OPD Phone */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-sky-50 text-hospital-accent shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-hospital-muted">Appointment / OPD &amp; WhatsApp</h4>
                  <a
                    href={`tel:${HOSPITAL_INFO.contact.opdPhoneClean}`}
                    className="text-base font-bold text-hospital-navy hover:text-hospital-accent transition-colors block mt-0.5"
                  >
                    {HOSPITAL_INFO.contact.opdPhone}
                  </a>
                  <span className="text-xs text-hospital-slate">Monday–Saturday, 9:00 AM – 8:00 PM</span>
                </div>
              </div>

              {/* 24/7 Emergency */}
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-red-50/80 border border-red-200">
                <div className="p-2 rounded-lg bg-red-600 text-white shrink-0 mt-0.5">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                    <h4 className="text-xs uppercase tracking-wider font-bold text-red-800">24/7 Emergency &amp; Casualty</h4>
                  </div>
                  <a
                    href={`tel:${HOSPITAL_INFO.contact.emergencyPhoneClean}`}
                    className="text-lg font-bold text-red-950 hover:text-red-700 transition-colors block mt-0.5"
                  >
                    {HOSPITAL_INFO.contact.emergencyPhone}
                  </a>
                  <span className="text-xs text-red-700">Immediate trauma admission and critical response</span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-sky-50 text-hospital-accent shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-hospital-muted">Official Email</h4>
                  <a
                    href={`mailto:${HOSPITAL_INFO.contact.email}`}
                    className="text-sm font-semibold text-hospital-navy hover:text-hospital-accent transition-colors block mt-0.5 break-all"
                  >
                    {HOSPITAL_INFO.contact.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-2xl overflow-hidden border border-hospital-border shadow-subtle bg-white h-64 relative">
              <iframe
                title="Mahajan Multispecialist Hospital Satara Map"
                src="https://maps.google.com/maps?q=Mahajan+Multispecialist+Hospital+Powai+Naka+Satara+Maharashtra&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column: Customized WhatsApp Appointment Enquiry Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-2xl bg-white border border-hospital-border shadow-subtle">
              <div className="mb-6">
                <span className="text-xs uppercase tracking-widest text-hospital-accent font-semibold">
                  WhatsApp Appointment Enquiry
                </span>
                <h3 className="text-2xl font-bold text-hospital-navy tracking-tight mt-1">
                  Book an Appointment
                </h3>
                <p className="text-xs text-hospital-muted mt-1">
                  Share your consultation details to send a pre-filled enquiry to our hospital desk (+91 9075023025).
                </p>
              </div>

              <AppointmentEnquiryForm idPrefix="home_appt" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
