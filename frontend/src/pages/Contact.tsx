import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle,
  AlertCircle,
  Navigation,
  MessageCircle,
  Edit3,
  RotateCcw,
} from 'lucide-react';
import { HOSPITAL_INFO } from '../config/hospitalData';
import { AppointmentEnquiryForm, validatePhoneDigits } from '../components/AppointmentEnquiryForm';
import { ResponsiveImage } from '../components/ResponsiveImage';

export const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialDepartment = searchParams.get('department') || undefined;
  const [activeFormTab, setActiveFormTab] = useState<'appointment' | 'general'>('appointment');

  // General Contact Form state
  const [contactData, setContactData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const [contactError, setContactError] = useState<string | null>(null);
  const [contactPrepared, setContactPrepared] = useState<{
    whatsappUrl: string;
    popupBlocked: boolean;
  } | null>(null);

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactData({
      ...contactData,
      [e.target.name]: e.target.value,
    });
    if (contactError) setContactError(null);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactError(null);

    if (!contactData.name.trim()) {
      setContactError('Please enter your name.');
      return;
    }

    if (!validatePhoneDigits(contactData.phone)) {
      setContactError('Please enter a valid 10-digit mobile number.');
      return;
    }

    if (!contactData.message.trim()) {
      setContactError('Please write your message.');
      return;
    }

    const lines = [
      'Hello Mahajan Hospital,',
      '',
      'I would like to submit a general enquiry.',
      '',
      `Name: ${contactData.name.trim()}`,
      `Mobile Number: ${contactData.phone.trim()}`,
    ];
    if (contactData.email.trim()) {
      lines.push(`Email: ${contactData.email.trim()}`);
    }
    if (contactData.subject.trim()) {
      lines.push(`Subject: ${contactData.subject.trim()}`);
    }
    lines.push(`Message: ${contactData.message.trim()}`);

    const text = lines.join('\n');
    const whatsappUrl = `https://wa.me/${HOSPITAL_INFO.contact.opdPhoneClean}?text=${encodeURIComponent(text)}`;
    const opened = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    // Keep contactData intact so values are preserved if WhatsApp cannot open
    setContactPrepared({
      whatsappUrl,
      popupBlocked: !opened,
    });
  };

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-hospital-white min-h-screen">
      {/* Header Banner */}
      <section className="py-16 sm:py-20 bg-hospital-navy text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-sky-300 border border-white/15 mb-4">
              Patient Care &amp; Coordination
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              Contact &amp; Appointment Enquiry.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl">
              Connect directly with our hospital desk via WhatsApp Business for specialist consultations, OPD timings, or emergency casualty support in Satara.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Authentic Reception Photo, Direct Coordinates & Map (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Authentic Reception & Waiting Confidence Photo */}
            <div className="relative aspect-[3/2] rounded-2xl overflow-hidden border border-hospital-border shadow-subtle bg-white group">
              <ResponsiveImage
                src="/assets/hospital/ortho-reception-1400w.webp"
                alt="Main Orthopaedic Reception and Hospital Desk at Mahajan Hospital Satara"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 480px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hospital-navy/85 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <span className="text-[10px] uppercase tracking-widest text-sky-300 font-semibold block">
                  Powai Naka • Satara
                </span>
                <p className="text-xs sm:text-sm font-semibold text-white">
                  Main Patient Reception &amp; Enquiry Desk
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-hospital-border shadow-subtle space-y-6">
              <h3 className="text-xl font-bold text-hospital-navy pb-3 border-b border-hospital-border">
                Hospital Information
              </h3>

              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-sky-50 text-hospital-accent shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-hospital-muted">Address</h4>
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
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-red-50 border border-red-200">
                <div className="p-2 rounded-lg bg-red-600 text-white shrink-0 mt-0.5">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                    <h4 className="text-xs uppercase tracking-wider font-bold text-red-800">24/7 Emergency Casualty</h4>
                  </div>
                  <a
                    href={`tel:${HOSPITAL_INFO.contact.emergencyPhoneClean}`}
                    className="text-lg font-bold text-red-950 hover:text-red-700 transition-colors block mt-0.5"
                  >
                    {HOSPITAL_INFO.contact.emergencyPhone}
                  </a>
                  <span className="text-xs text-red-700">Immediate trauma admission and critical care</span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-sky-50 text-hospital-accent shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-hospital-muted">Email</h4>
                  <a
                    href={`mailto:${HOSPITAL_INFO.contact.email}`}
                    className="text-sm font-semibold text-hospital-navy hover:text-hospital-accent transition-colors block mt-0.5 break-all"
                  >
                    {HOSPITAL_INFO.contact.email}
                  </a>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="pt-2 flex flex-wrap gap-2.5">
                <a
                  href={HOSPITAL_INFO.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[130px] inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Direct WhatsApp</span>
                </a>
                <a
                  href={HOSPITAL_INFO.contact.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[130px] inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-100 text-hospital-navy border border-hospital-border text-xs font-semibold hover:bg-slate-200 transition-colors"
                >
                  <Navigation className="w-4 h-4 text-hospital-accent" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* Google Map */}
            <div className="rounded-2xl overflow-hidden border border-hospital-border shadow-subtle bg-white h-64">
              <iframe
                title="Mahajan Hospital Map Location"
                src="https://maps.google.com/maps?q=Mahajan+Multispecialist+Hospital+Powai+Naka+Satara+Maharashtra&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column: Forms with Tab Toggle (7 Cols) */}
          <div id="appointment-enquiry" className="lg:col-span-7 scroll-mt-28">
            <div className="p-6 sm:p-10 rounded-2xl bg-white border border-hospital-border shadow-subtle">
              {/* Form Switcher */}
              <div className="flex border-b border-hospital-border mb-6">
                <button
                  type="button"
                  onClick={() => setActiveFormTab('appointment')}
                  className={`pb-3 px-4 text-sm font-bold border-b-2 transition-all ${
                    activeFormTab === 'appointment'
                      ? 'border-hospital-navy text-hospital-navy'
                      : 'border-transparent text-hospital-muted hover:text-hospital-navy'
                  }`}
                >
                  Book an Appointment
                </button>
                <button
                  type="button"
                  onClick={() => setActiveFormTab('general')}
                  className={`pb-3 px-4 text-sm font-bold border-b-2 transition-all ${
                    activeFormTab === 'general'
                      ? 'border-hospital-navy text-hospital-navy'
                      : 'border-transparent text-hospital-muted hover:text-hospital-navy'
                  }`}
                >
                  General Enquiry
                </button>
              </div>

              {/* Form 1: Customized WhatsApp Appointment Enquiry Form */}
              {activeFormTab === 'appointment' && (
                <AppointmentEnquiryForm
                  idPrefix="page_appt"
                  initialDepartment={initialDepartment}
                />
              )}

              {/* Form 2: General Contact Form */}
              {activeFormTab === 'general' && (
                <div>
                  {contactPrepared ? (
                    <div className="p-8 rounded-2xl bg-sky-50/70 border border-sky-200 text-center space-y-4">
                      <div className="w-14 h-14 rounded-full bg-sky-100 text-hospital-accent flex items-center justify-center mx-auto">
                        <CheckCircle className="w-8 h-8" />
                      </div>
                      <h4 className="text-xl font-bold text-hospital-navy">
                        WhatsApp Message Ready
                      </h4>
                      <p className="text-sm text-hospital-slate max-w-md mx-auto leading-relaxed">
                        Thank you, <strong>{contactData.name}</strong>. Please tap <strong>Send</strong> inside WhatsApp to deliver your message to our hospital desk.
                      </p>
                      {contactPrepared.popupBlocked && (
                        <p className="text-xs text-amber-900 bg-amber-50 border border-amber-200 rounded-xl p-3 max-w-md mx-auto">
                          Your browser blocked opening WhatsApp automatically. Your entered message is preserved — tap below to open WhatsApp directly.
                        </p>
                      )}
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                        <a
                          href={contactPrepared.whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-600 text-white font-semibold text-xs uppercase tracking-wider hover:bg-emerald-700 transition-colors inline-flex items-center justify-center gap-2"
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span>Open WhatsApp &amp; Send</span>
                        </a>
                        <button
                          type="button"
                          onClick={() => setContactPrepared(null)}
                          className="w-full sm:w-auto px-5 py-3 rounded-xl border border-sky-300 text-hospital-navy font-semibold text-xs uppercase tracking-wider hover:bg-sky-100 transition-colors inline-flex items-center justify-center gap-1.5"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                          <span>Edit Details</span>
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setContactPrepared(null);
                          setContactData({ name: '', phone: '', email: '', subject: '', message: '' });
                        }}
                        className="inline-flex items-center gap-1 text-xs text-slate-600 hover:text-hospital-navy"
                      >
                        <RotateCcw className="w-3 h-3" />
                        <span>Clear &amp; Start New Enquiry</span>
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleContactSubmit} className="space-y-5" noValidate>
                      {contactError && (
                        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs flex items-start gap-2">
                          <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                          <span>{contactError}</span>
                        </div>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs uppercase tracking-wider font-semibold text-hospital-navy mb-1.5">
                            Your Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={contactData.name}
                            onChange={handleContactChange}
                            placeholder="e.g. Sunita Patil"
                            className="w-full px-4 py-3 rounded-xl border border-hospital-border bg-hospital-soft/40 text-hospital-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-hospital-accent focus:bg-white"
                          />
                        </div>
                        <div>
                          <label className="block text-xs uppercase tracking-wider font-semibold text-hospital-navy mb-1.5">
                            Mobile Number <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            required
                            value={contactData.phone}
                            onChange={handleContactChange}
                            placeholder="e.g. 9876543210"
                            className="w-full px-4 py-3 rounded-xl border border-hospital-border bg-hospital-soft/40 text-hospital-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-hospital-accent focus:bg-white"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs uppercase tracking-wider font-semibold text-hospital-navy mb-1.5">
                            Email <span className="text-slate-400 font-normal lowercase">(optional)</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={contactData.email}
                            onChange={handleContactChange}
                            placeholder="e.g. name@domain.com"
                            className="w-full px-4 py-3 rounded-xl border border-hospital-border bg-hospital-soft/40 text-hospital-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-hospital-accent focus:bg-white"
                          />
                        </div>
                        <div>
                          <label className="block text-xs uppercase tracking-wider font-semibold text-hospital-navy mb-1.5">
                            Subject <span className="text-slate-400 font-normal lowercase">(optional)</span>
                          </label>
                          <input
                            type="text"
                            name="subject"
                            value={contactData.subject}
                            onChange={handleContactChange}
                            placeholder="e.g. OPD timing / Room enquiry"
                            className="w-full px-4 py-3 rounded-xl border border-hospital-border bg-hospital-soft/40 text-hospital-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-hospital-accent focus:bg-white"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider font-semibold text-hospital-navy mb-1.5">
                          Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          name="message"
                          required
                          rows={4}
                          value={contactData.message}
                          onChange={handleContactChange}
                          placeholder="How can our hospital team assist you?"
                          className="w-full px-4 py-3 rounded-xl border border-hospital-border bg-hospital-soft/40 text-hospital-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-hospital-accent focus:bg-white"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 px-6 rounded-xl bg-hospital-navy hover:bg-hospital-charcoal text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-subtle"
                      >
                        <Send className="w-4 h-4 text-sky-400" />
                        <span>Send Enquiry via WhatsApp</span>
                      </button>
                    </form>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
