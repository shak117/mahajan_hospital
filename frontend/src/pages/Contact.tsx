import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle, 
  AlertCircle, 
  MessageSquare,
  ShieldCheck,
  Calendar,
  Navigation,
  MessageCircle
} from 'lucide-react';
import { HOSPITAL_INFO, DEPARTMENTS } from '../config/hospitalData';

export const Contact: React.FC = () => {
  const [activeFormTab, setActiveFormTab] = useState<'appointment' | 'general'>('appointment');

  // Appointment Form state
  const [appointmentData, setAppointmentData] = useState({
    full_name: '',
    phone: '',
    email: '',
    department: 'Orthopaedics',
    preferred_date: '',
    message: ''
  });

  const [appointmentLoading, setAppointmentLoading] = useState(false);
  const [appointmentSubmitted, setAppointmentSubmitted] = useState(false);
  const [appointmentError, setAppointmentError] = useState<string | null>(null);
  const [appointmentConfirmation, setAppointmentConfirmation] = useState<any>(null);

  // General Contact Form state
  const [contactData, setContactData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const [contactLoading, setContactLoading] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactError, setContactError] = useState<string | null>(null);
  const [contactConfirmation, setContactConfirmation] = useState<any>(null);

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDateStr = tomorrow.toISOString().split('T')[0];

  const handleAppointmentChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setAppointmentData({
      ...appointmentData,
      [e.target.name]: e.target.value
    });
    if (appointmentError) setAppointmentError(null);
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactData({
      ...contactData,
      [e.target.name]: e.target.value
    });
    if (contactError) setContactError(null);
  };

  const handleAppointmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAppointmentError(null);

    if (!appointmentData.full_name.trim()) {
      setAppointmentError('Please enter your full name.');
      return;
    }

    const cleanedPhone = appointmentData.phone.replace(/[\s\-\(\)\+]/g, '');
    if (!cleanedPhone || cleanedPhone.length < 10) {
      setAppointmentError('Please enter a valid 10-digit phone number.');
      return;
    }

    if (!appointmentData.preferred_date) {
      setAppointmentError('Please select your preferred appointment date.');
      return;
    }

    // Build formatted message for WhatsApp Business
    const lines = [
      'Hello Mahajan Hospital, I would like to submit an appointment enquiry:',
      '',
      `*Full Name:* ${appointmentData.full_name.trim()}`,
      `*Phone Number:* ${appointmentData.phone.trim()}`,
    ];
    if (appointmentData.email && appointmentData.email.trim()) {
      lines.push(`*Email:* ${appointmentData.email.trim()}`);
    }
    lines.push(`*Department:* ${appointmentData.department}`);
    lines.push(`*Preferred Date:* ${appointmentData.preferred_date}`);
    if (appointmentData.message && appointmentData.message.trim()) {
      lines.push(`*Message:* ${appointmentData.message.trim()}`);
    }

    const text = lines.join('\n');
    const whatsappUrl = `https://wa.me/919075023025?text=${encodeURIComponent(text)}`;

    window.open(whatsappUrl, '_blank');

    setAppointmentConfirmation({
      fullName: appointmentData.full_name.trim(),
      department: appointmentData.department,
      preferredDate: appointmentData.preferred_date,
      enquiryId: `MH-${Date.now().toString().slice(-5)}`
    });
    setAppointmentSubmitted(true);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactError(null);

    if (!contactData.name.trim()) {
      setContactError('Please enter your name.');
      return;
    }

    const cleanedPhone = contactData.phone.replace(/[\s\-\(\)\+]/g, '');
    if (!cleanedPhone || cleanedPhone.length < 10) {
      setContactError('Please enter a valid phone number.');
      return;
    }

    if (!contactData.message.trim()) {
      setContactError('Please write your message.');
      return;
    }

    // Build formatted message for WhatsApp Business
    const lines = [
      'Hello Mahajan Hospital, I would like to submit a general enquiry:',
      '',
      `*Name:* ${contactData.name.trim()}`,
      `*Phone Number:* ${contactData.phone.trim()}`,
    ];
    if (contactData.email && contactData.email.trim()) {
      lines.push(`*Email:* ${contactData.email.trim()}`);
    }
    if (contactData.subject && contactData.subject.trim()) {
      lines.push(`*Subject:* ${contactData.subject.trim()}`);
    }
    lines.push(`*Message:* ${contactData.message.trim()}`);

    const text = lines.join('\n');
    const whatsappUrl = `https://wa.me/919075023025?text=${encodeURIComponent(text)}`;

    window.open(whatsappUrl, '_blank');

    setContactConfirmation({
      name: contactData.name.trim(),
      subject: contactData.subject.trim() || 'General Enquiry',
      referenceNumber: `MSG-${Date.now().toString().slice(-5)}`
    });
    setContactSubmitted(true);
  };

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-hospital-white min-h-screen">
      {/* Header Banner */}
      <section className="py-16 sm:py-20 bg-hospital-navy text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-sky-300 border border-white/15 mb-4">
              Patient Care & Coordination
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              Contact & Appointments.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl">
              Connect with our medical coordinators for specialist consultations, OPD timings, second opinions, or emergency casualty admissions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Coordinates & Actions (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
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
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-hospital-muted">Appointment / OPD</h4>
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
                  <span>WhatsApp</span>
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
          <div className="lg:col-span-7">
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
                  Book Appointment Enquiry
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

              {/* Form 1: Appointment Form */}
              {activeFormTab === 'appointment' && (
                <div>
                  {appointmentSubmitted && appointmentConfirmation ? (
                    <div className="p-8 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-center space-y-4">
                      <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                        <CheckCircle className="w-8 h-8" />
                      </div>
                      <h4 className="text-xl font-bold text-emerald-950">
                        Appointment Enquiry Logged
                      </h4>
                      <p className="text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
                        Thank you, <strong>{appointmentConfirmation.fullName}</strong>. Your enquiry for{' '}
                        <strong>{appointmentConfirmation.department}</strong> on{' '}
                        <strong>{appointmentConfirmation.preferredDate}</strong> has been received with reference number{' '}
                        <span className="font-mono font-bold bg-white px-2 py-0.5 rounded border border-emerald-300">
                          {appointmentConfirmation.enquiryId}
                        </span>.
                      </p>
                      <div className="p-4 rounded-xl bg-white border border-emerald-200 text-xs text-slate-700 text-left max-w-md mx-auto space-y-1.5">
                        <div className="flex items-center gap-1.5 font-semibold text-emerald-900">
                          <ShieldCheck className="w-4 h-4 text-emerald-600" />
                          <span>Appointment Confirmation Notice:</span>
                        </div>
                        <p>
                          This is an enquiry submission system, not an instant booking. Our hospital desk will verify doctor availability and contact you via phone at <strong>{appointmentData.phone}</strong> to confirm your exact appointment slot.
                        </p>
                      </div>
                      <button
                        onClick={() => {
                          setAppointmentSubmitted(false);
                          setAppointmentData({
                            full_name: '',
                            phone: '',
                            email: '',
                            department: 'Orthopaedics',
                            preferred_date: '',
                            message: ''
                          });
                        }}
                        className="px-5 py-2.5 rounded-xl border border-emerald-300 text-emerald-900 font-semibold text-xs uppercase tracking-wider hover:bg-emerald-100 transition-colors"
                      >
                        Submit Another Enquiry
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleAppointmentSubmit} className="space-y-5">
                      {appointmentError && (
                        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs flex items-start gap-2">
                          <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                          <span>{appointmentError}</span>
                        </div>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs uppercase tracking-wider font-semibold text-hospital-navy mb-1.5">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="full_name"
                            required
                            value={appointmentData.full_name}
                            onChange={handleAppointmentChange}
                            placeholder="e.g. Ramesh Kulkarni"
                            className="w-full px-4 py-3 rounded-xl border border-hospital-border bg-hospital-soft/40 text-hospital-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-hospital-accent focus:bg-white"
                          />
                        </div>
                        <div>
                          <label className="block text-xs uppercase tracking-wider font-semibold text-hospital-navy mb-1.5">
                            Phone Number <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            required
                            value={appointmentData.phone}
                            onChange={handleAppointmentChange}
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
                            value={appointmentData.email}
                            onChange={handleAppointmentChange}
                            placeholder="e.g. patient@gmail.com"
                            className="w-full px-4 py-3 rounded-xl border border-hospital-border bg-hospital-soft/40 text-hospital-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-hospital-accent focus:bg-white"
                          />
                        </div>
                        <div>
                          <label className="block text-xs uppercase tracking-wider font-semibold text-hospital-navy mb-1.5">
                            Speciality Department <span className="text-red-500">*</span>
                          </label>
                          <select
                            name="department"
                            required
                            value={appointmentData.department}
                            onChange={handleAppointmentChange}
                            className="w-full px-4 py-3 rounded-xl border border-hospital-border bg-hospital-soft/40 text-hospital-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-hospital-accent focus:bg-white"
                          >
                            {DEPARTMENTS.map((dept) => (
                              <option key={dept.id} value={dept.name}>
                                {dept.name}
                              </option>
                            ))}
                            <option value="General OPD / Consultation">General OPD / Consultation</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider font-semibold text-hospital-navy mb-1.5">
                          Preferred Appointment Date <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="date"
                          name="preferred_date"
                          required
                          min={minDateStr}
                          value={appointmentData.preferred_date}
                          onChange={handleAppointmentChange}
                          className="w-full px-4 py-3 rounded-xl border border-hospital-border bg-hospital-soft/40 text-hospital-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-hospital-accent focus:bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider font-semibold text-hospital-navy mb-1.5">
                          Medical Requirement / Symptoms <span className="text-slate-400 font-normal lowercase">(optional)</span>
                        </label>
                        <textarea
                          name="message"
                          rows={3}
                          value={appointmentData.message}
                          onChange={handleAppointmentChange}
                          placeholder="Briefly describe your symptoms or past surgical history..."
                          className="w-full px-4 py-3 rounded-xl border border-hospital-border bg-hospital-soft/40 text-hospital-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-hospital-accent focus:bg-white"
                        />
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-600">
                        <strong>Notice:</strong> This form logs an appointment enquiry. The hospital coordination team must confirm doctor schedule before your slot is finalized.
                      </div>

                      <button
                        type="submit"
                        disabled={appointmentLoading}
                        className="w-full py-4 px-6 rounded-xl bg-hospital-navy hover:bg-hospital-charcoal text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-subtle disabled:opacity-60"
                      >
                        {appointmentLoading ? (
                          <span className="flex items-center gap-2">
                            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                            Connecting to Database...
                          </span>
                        ) : (
                          <>
                            <Calendar className="w-4 h-4 text-sky-400" />
                            <span>Submit Appointment Enquiry</span>
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              )}

              {/* Form 2: General Contact Form */}
              {activeFormTab === 'general' && (
                <div>
                  {contactSubmitted && contactConfirmation ? (
                    <div className="p-8 rounded-2xl bg-sky-50/70 border border-sky-200 text-center space-y-4">
                      <div className="w-14 h-14 rounded-full bg-sky-100 text-hospital-accent flex items-center justify-center mx-auto">
                        <CheckCircle className="w-8 h-8" />
                      </div>
                      <h4 className="text-xl font-bold text-hospital-navy">
                        Message Sent Successfully
                      </h4>
                      <p className="text-sm text-hospital-slate max-w-md mx-auto leading-relaxed">
                        Thank you, <strong>{contactConfirmation.name}</strong>. Your enquiry has been received under reference{' '}
                        <span className="font-mono font-bold bg-white px-2 py-0.5 rounded border border-sky-300">
                          {contactConfirmation.referenceNumber}
                        </span>. Our administration desk will reply shortly.
                      </p>
                      <button
                        onClick={() => {
                          setContactSubmitted(false);
                          setContactData({ name: '', phone: '', email: '', subject: '', message: '' });
                        }}
                        className="px-5 py-2.5 rounded-xl border border-sky-300 text-hospital-navy font-semibold text-xs uppercase tracking-wider hover:bg-sky-100 transition-colors"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleContactSubmit} className="space-y-5">
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
                            Phone Number <span className="text-red-500">*</span>
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
                            Subject
                          </label>
                          <input
                            type="text"
                            name="subject"
                            value={contactData.subject}
                            onChange={handleContactChange}
                            placeholder="e.g. Second opinion / Room inquiry"
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
                        disabled={contactLoading}
                        className="w-full py-4 px-6 rounded-xl bg-hospital-navy hover:bg-hospital-charcoal text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-subtle disabled:opacity-60"
                      >
                        {contactLoading ? (
                          <span className="flex items-center gap-2">
                            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                            Sending Message...
                          </span>
                        ) : (
                          <>
                            <Send className="w-4 h-4 text-sky-400" />
                            <span>Send Message</span>
                          </>
                        )}
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
