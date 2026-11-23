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
  Calendar
} from 'lucide-react';
import { HOSPITAL_INFO, DEPARTMENTS } from '../config/hospitalData';

export const ContactSection: React.FC = () => {
  // Appointment Form state
  const [formData, setFormData] = useState({
    full_name: '',
    phone: '',
    email: '',
    department: 'Orthopaedics',
    preferred_date: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [confirmationData, setConfirmationData] = useState<any>(null);

  // Get tomorrow's date string as minimum date for appointment
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDateStr = tomorrow.toISOString().split('T')[0];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (errorMsg) setErrorMsg(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    // Client-side validation
    if (!formData.full_name.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }

    const cleanedPhone = formData.phone.replace(/[\s\-\(\)\+]/g, '');
    if (!cleanedPhone || cleanedPhone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit contact phone number.');
      return;
    }

    if (!formData.preferred_date) {
      setErrorMsg('Please select your preferred appointment date.');
      return;
    }

    // Build formatted message for WhatsApp Business
    const lines = [
      'Hello Mahajan Hospital, I would like to submit an appointment enquiry:',
      '',
      `*Full Name:* ${formData.full_name.trim()}`,
      `*Phone Number:* ${formData.phone.trim()}`,
    ];
    if (formData.email && formData.email.trim()) {
      lines.push(`*Email:* ${formData.email.trim()}`);
    }
    lines.push(`*Department:* ${formData.department}`);
    lines.push(`*Preferred Date:* ${formData.preferred_date}`);
    if (formData.message && formData.message.trim()) {
      lines.push(`*Message:* ${formData.message.trim()}`);
    }

    const text = lines.join('\n');
    const whatsappUrl = `https://wa.me/919075023025?text=${encodeURIComponent(text)}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    setConfirmationData({
      fullName: formData.full_name.trim(),
      department: formData.department,
      preferredDate: formData.preferred_date,
      enquiryId: `MH-${Date.now().toString().slice(-5)}`
    });
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setConfirmationData(null);
    setFormData({
      full_name: '',
      phone: '',
      email: '',
      department: 'Orthopaedics',
      preferred_date: '',
      message: ''
    });
  };

  return (
    <section id="contact-section" className="py-24 sm:py-32 bg-hospital-soft relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <p className="text-xs uppercase tracking-widest text-hospital-accent font-semibold mb-3">
            Contact & Location
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-hospital-navy">
            We are here to assist your recovery.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-hospital-slate leading-relaxed">
            Conveniently located at Powai Naka in the heart of Satara. Submit an appointment enquiry below or reach our 24/7 hospital desk.
          </p>
        </div>

        {/* Two-Column Grid: Contact Details & Appointment Enquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Coordinates & Map (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
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
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-red-50/80 border border-red-200">
                <div className="p-2 rounded-lg bg-red-600 text-white shrink-0 mt-0.5">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                    <h4 className="text-xs uppercase tracking-wider font-bold text-red-800">24/7 Emergency & Casualty</h4>
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

          {/* Right Column: Appointment Enquiry Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-2xl bg-white border border-hospital-border shadow-subtle">
              <div className="mb-6">
                <span className="text-xs uppercase tracking-widest text-hospital-accent font-semibold">
                  Online Scheduling Request
                </span>
                <h3 className="text-2xl font-bold text-hospital-navy tracking-tight mt-1">
                  Book an Appointment Enquiry
                </h3>
                <p className="text-xs text-hospital-muted mt-1">
                  Submit your details and our hospital coordination desk will contact you to confirm timing and doctor availability.
                </p>
              </div>

              {/* Success Confirmation Card */}
              {submitted && confirmationData ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-center space-y-4"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>

                  <h4 className="text-xl font-bold text-emerald-950">
                    Enquiry Submitted Successfully
                  </h4>

                  <p className="text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{confirmationData.fullName}</strong>. Your enquiry for{' '}
                    <strong>{confirmationData.department}</strong> on{' '}
                    <strong>{confirmationData.preferredDate}</strong> has been logged with reference{' '}
                    <span className="font-mono font-bold bg-white px-2 py-0.5 rounded border border-emerald-300">
                      {confirmationData.enquiryId}
                    </span>.
                  </p>

                  <div className="p-4 rounded-xl bg-white border border-emerald-200 text-xs text-slate-700 text-left max-w-md mx-auto space-y-1.5">
                    <div className="flex items-center gap-1.5 font-semibold text-emerald-900">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>Important Confirmation Note:</span>
                    </div>
                    <p>
                      This is an appointment enquiry request. Our hospital coordination desk will contact you via phone at{' '}
                      <strong>{formData.phone}</strong> to confirm the exact slot and doctor availability.
                    </p>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`tel:${HOSPITAL_INFO.contact.opdPhoneClean}`}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-700 text-white font-semibold text-xs uppercase tracking-wider hover:bg-emerald-800 transition-colors"
                    >
                      Call Hospital Desk
                    </a>
                    <button
                      onClick={handleReset}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-emerald-300 text-emerald-900 font-semibold text-xs uppercase tracking-wider hover:bg-emerald-100 transition-colors"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </motion.div>
              ) : (
                /* The Enquiry Form */
                <form onSubmit={handleSubmit} className="space-y-5">
                  {errorMsg && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* Row 1: Full Name & Phone Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="full_name" className="block text-xs uppercase tracking-wider font-semibold text-hospital-navy mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="full_name"
                        name="full_name"
                        required
                        value={formData.full_name}
                        onChange={handleChange}
                        placeholder="e.g. Ramesh Kulkarni"
                        className="w-full px-4 py-3 rounded-xl border border-hospital-border bg-hospital-soft/40 text-hospital-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-hospital-accent focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs uppercase tracking-wider font-semibold text-hospital-navy mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 9876543210"
                        className="w-full px-4 py-3 rounded-xl border border-hospital-border bg-hospital-soft/40 text-hospital-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-hospital-accent focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email & Department */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-xs uppercase tracking-wider font-semibold text-hospital-navy mb-1.5">
                        Email Address <span className="text-slate-400 font-normal lowercase">(optional)</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. patient@gmail.com"
                        className="w-full px-4 py-3 rounded-xl border border-hospital-border bg-hospital-soft/40 text-hospital-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-hospital-accent focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="department" className="block text-xs uppercase tracking-wider font-semibold text-hospital-navy mb-1.5">
                        Department <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="department"
                        name="department"
                        required
                        value={formData.department}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-hospital-border bg-hospital-soft/40 text-hospital-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-hospital-accent focus:bg-white transition-all"
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

                  {/* Row 3: Preferred Date */}
                  <div>
                    <label htmlFor="preferred_date" className="block text-xs uppercase tracking-wider font-semibold text-hospital-navy mb-1.5">
                      Preferred Appointment Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      id="preferred_date"
                      name="preferred_date"
                      required
                      min={minDateStr}
                      value={formData.preferred_date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-hospital-border bg-hospital-soft/40 text-hospital-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-hospital-accent focus:bg-white transition-all"
                    />
                  </div>

                  {/* Row 4: Message / Symptoms */}
                  <div>
                    <label htmlFor="message" className="block text-xs uppercase tracking-wider font-semibold text-hospital-navy mb-1.5">
                      Symptoms / Medical Requirement <span className="text-slate-400 font-normal lowercase">(optional)</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Briefly describe your symptoms or past surgical history..."
                      className="w-full px-4 py-3 rounded-xl border border-hospital-border bg-hospital-soft/40 text-hospital-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-hospital-accent focus:bg-white transition-all"
                    />
                  </div>

                  {/* Disclaimer banner */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-600 leading-relaxed">
                    <strong>Please Note:</strong> This form records an appointment enquiry. It is not an automated instant booking. Our clinical scheduling team will verify doctor availability and contact you shortly to confirm your time slot.
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 px-6 rounded-xl bg-hospital-navy hover:bg-hospital-charcoal text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-subtle disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                        Processing Secure Submission...
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
          </div>
        </div>
      </div>
    </section>
  );
};
