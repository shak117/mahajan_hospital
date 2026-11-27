import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  AlertCircle,
  CheckCircle,
  MessageCircle,
  ShieldCheck,
  Lock,
  Copy,
  Check,
  Edit3,
  RotateCcw,
} from 'lucide-react';
import { DEPARTMENTS, HOSPITAL_INFO } from '../config/hospitalData';

export const ASSISTANCE_TYPES = [
  'New Consultation / OPD Visit',
  'Follow-up Consultation',
  'Second Medical Opinion',
  'Robotic Joint Replacement Enquiry',
  'Surgery / Procedure Enquiry',
  'Emergency / Urgent Assistance',
  'Diagnostic / Pathology & X-Ray',
  'Pain Management / Nerve Block',
  'Other Medical Assistance',
] as const;

export const CONSULTATION_PREFERENCES = [
  'No Preference',
  'Morning OPD (9:00 AM – 1:00 PM)',
  'Afternoon / Evening OPD (1:00 PM – 8:00 PM)',
  'In-Person Hospital Visit',
  'Pre-Visit Phone Guidance Call',
] as const;

export interface AppointmentFormValues {
  full_name: string;
  phone: string;
  department: string;
  assistance_type: string;
  description: string;
  preferred_date: string;
  consultation_preference: string;
}

interface SubmittedEnquiryState {
  values: AppointmentFormValues;
  message: string;
  whatsappUrl: string;
  popupBlocked: boolean;
}

interface AppointmentEnquiryFormProps {
  initialDepartment?: string;
  idPrefix?: string;
}

export const buildWhatsAppAppointmentUrl = (values: AppointmentFormValues): { message: string; url: string } => {
  const lines = [
    'Hello Mahajan Hospital,',
    '',
    'I would like to enquire about an appointment.',
    '',
    `Patient Name: ${values.full_name.trim()}`,
    `Mobile Number: ${values.phone.trim()}`,
    `Department: ${values.department}`,
    `Medical Assistance Required: ${values.assistance_type}`,
  ];

  if (values.description.trim()) {
    lines.push(`Description: ${values.description.trim()}`);
  }
  if (values.preferred_date) {
    lines.push(`Preferred Date: ${values.preferred_date}`);
  }
  if (values.consultation_preference && values.consultation_preference !== 'No Preference') {
    lines.push(`Consultation Preference: ${values.consultation_preference}`);
  }

  lines.push('', 'Please contact me regarding the appointment.');

  const message = lines.join('\n');
  const url = `https://wa.me/${HOSPITAL_INFO.contact.opdPhoneClean}?text=${encodeURIComponent(message)}`;
  return { message, url };
};

export const validatePhoneDigits = (rawPhone: string): boolean => {
  const digits = rawPhone.replace(/\D/g, '');
  if (digits.length < 10 || digits.length > 15) return false;
  // Reject obvious repeated-digit placeholders such as 0000000000
  if (/^(\d)\1+$/.test(digits)) return false;
  return true;
};

export const AppointmentEnquiryForm: React.FC<AppointmentEnquiryFormProps> = ({
  initialDepartment,
  idPrefix = 'appt',
}) => {
  const resolveDefaultDepartment = (dept?: string) => {
    if (!dept) return 'Orthopaedics';
    const match = DEPARTMENTS.find((d) => d.name.toLowerCase() === dept.toLowerCase() || d.id === dept);
    return match ? match.name : dept;
  };

  const [formData, setFormData] = useState<AppointmentFormValues>({
    full_name: '',
    phone: '',
    department: resolveDefaultDepartment(initialDepartment),
    assistance_type: ASSISTANCE_TYPES[0],
    description: '',
    preferred_date: '',
    consultation_preference: 'No Preference',
  });

  useEffect(() => {
    if (initialDepartment) {
      setFormData((prev) => ({
        ...prev,
        department: resolveDefaultDepartment(initialDepartment),
      }));
    }
  }, [initialDepartment]);

  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [submittedState, setSubmittedState] = useState<SubmittedEnquiryState | null>(null);
  const [copied, setCopied] = useState(false);

  const todayStr = new Date().toISOString().split('T')[0];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (formData.full_name.trim().length < 2) {
      setErrorMsg('Please enter the patient’s full name (at least 2 characters).');
      return;
    }

    if (!validatePhoneDigits(formData.phone)) {
      setErrorMsg('Please enter a valid 10-digit mobile number so our desk can reach you.');
      return;
    }

    if (!formData.department) {
      setErrorMsg('Please select a medical department or speciality.');
      return;
    }

    if (!formData.assistance_type) {
      setErrorMsg('Please select the type of medical assistance required.');
      return;
    }

    const { message, url } = buildWhatsAppAppointmentUrl(formData);
    const openedWindow = window.open(url, '_blank', 'noopener,noreferrer');

    // Keep entered formData values intact even if WhatsApp popup is blocked or closed
    setSubmittedState({
      values: { ...formData },
      message,
      whatsappUrl: url,
      popupBlocked: !openedWindow,
    });
  };

  const handleEditDetails = () => {
    setSubmittedState(null);
  };

  const handleStartNew = () => {
    setSubmittedState(null);
    setErrorMsg(null);
    setFormData({
      full_name: '',
      phone: '',
      department: resolveDefaultDepartment(initialDepartment),
      assistance_type: ASSISTANCE_TYPES[0],
      description: '',
      preferred_date: '',
      consultation_preference: 'No Preference',
    });
  };

  const handleCopyMessage = async () => {
    if (!submittedState) return;
    try {
      await navigator.clipboard.writeText(submittedState.message);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Clipboard API unavailable
    }
  };

  if (submittedState) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-6 sm:p-8 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-5"
      >
        <div className="flex flex-col items-center text-center">
          <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
            <CheckCircle className="w-8 h-8" />
          </div>
          <h4 className="text-xl font-bold text-emerald-950">
            WhatsApp Appointment Enquiry Prepared
          </h4>
          <p className="mt-2 text-sm text-emerald-900 max-w-lg leading-relaxed">
            Thank you, <strong>{submittedState.values.full_name}</strong>. Please tap{' '}
            <strong>Send</strong> inside WhatsApp to deliver your enquiry to our hospital desk (
            <strong>{HOSPITAL_INFO.contact.opdPhone}</strong>).
          </p>
        </div>

        {submittedState.popupBlocked && (
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 leading-relaxed">
            <strong>Action Required:</strong> Your browser prevented opening WhatsApp in a new tab automatically. Your form values have been preserved below — click <strong>Open WhatsApp &amp; Send Message</strong> to continue.
          </div>
        )}

        {/* Submitted Details Review */}
        <div className="p-4 rounded-xl bg-white border border-emerald-200 text-xs text-slate-700 space-y-2">
          <div className="font-bold text-hospital-navy uppercase tracking-wider text-[11px] pb-1 border-b border-slate-100">
            Completed Enquiry Summary
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
            <div><span className="text-slate-500">Patient:</span> <strong>{submittedState.values.full_name}</strong></div>
            <div><span className="text-slate-500">Mobile:</span> <strong>{submittedState.values.phone}</strong></div>
            <div><span className="text-slate-500">Department:</span> <strong>{submittedState.values.department}</strong></div>
            <div><span className="text-slate-500">Assistance:</span> <strong>{submittedState.values.assistance_type}</strong></div>
            {submittedState.values.preferred_date && (
              <div><span className="text-slate-500">Preferred Date:</span> <strong>{submittedState.values.preferred_date}</strong></div>
            )}
            {submittedState.values.consultation_preference && submittedState.values.consultation_preference !== 'No Preference' && (
              <div><span className="text-slate-500">Preference:</span> <strong>{submittedState.values.consultation_preference}</strong></div>
            )}
          </div>
          {submittedState.values.description.trim() && (
            <div className="pt-1 border-t border-slate-100">
              <span className="text-slate-500">Requirement:</span> {submittedState.values.description}
            </div>
          )}
        </div>

        {/* Non-confirmation clarity */}
        <div className="p-4 rounded-xl bg-white border border-emerald-200 text-xs text-slate-700 space-y-1.5">
          <div className="flex items-center gap-1.5 font-semibold text-emerald-900">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Appointment Confirmation Notice:</span>
          </div>
          <p className="leading-relaxed">
            Sending a WhatsApp message submits an appointment <strong>enquiry request</strong> — it does not immediately confirm a slot. Our coordination desk will verify doctor availability and contact you back on WhatsApp or phone.
          </p>
        </div>

        {/* Primary WhatsApp Action & Fallback Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
          <a
            href={submittedState.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs uppercase tracking-wider transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Open WhatsApp &amp; Send Message</span>
          </a>

          <button
            type="button"
            onClick={handleCopyMessage}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl bg-white border border-emerald-300 text-emerald-900 font-semibold text-xs uppercase tracking-wider hover:bg-emerald-50 transition-colors"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Copied' : 'Copy Text'}</span>
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-emerald-200/70">
          <button
            type="button"
            onClick={handleEditDetails}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-hospital-navy hover:text-hospital-accent transition-colors"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>Edit Entered Details</span>
          </button>
          <button
            type="button"
            onClick={handleStartNew}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-hospital-navy transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Form for Another Enquiry</span>
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {errorMsg && (
        <div
          role="alert"
          className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs flex items-start gap-2"
        >
          <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Row 1: Full Name & Mobile Number (Required) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor={`${idPrefix}_full_name`}
            className="block text-xs uppercase tracking-wider font-semibold text-hospital-navy mb-1.5"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id={`${idPrefix}_full_name`}
            name="full_name"
            required
            autoComplete="name"
            value={formData.full_name}
            onChange={handleChange}
            placeholder="e.g. Ramesh Kulkarni"
            className="w-full px-4 py-3 rounded-xl border border-hospital-border bg-hospital-soft/40 text-hospital-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-hospital-accent focus:bg-white transition-all"
          />
        </div>

        <div>
          <label
            htmlFor={`${idPrefix}_phone`}
            className="block text-xs uppercase tracking-wider font-semibold text-hospital-navy mb-1.5"
          >
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id={`${idPrefix}_phone`}
            name="phone"
            required
            autoComplete="tel"
            inputMode="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. 9876543210"
            className="w-full px-4 py-3 rounded-xl border border-hospital-border bg-hospital-soft/40 text-hospital-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-hospital-accent focus:bg-white transition-all"
          />
        </div>
      </div>

      {/* Row 2: Department & Type of Medical Assistance (Required) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor={`${idPrefix}_department`}
            className="block text-xs uppercase tracking-wider font-semibold text-hospital-navy mb-1.5"
          >
            Department / Speciality <span className="text-red-500">*</span>
          </label>
          <select
            id={`${idPrefix}_department`}
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
            <option value="Not Sure — Need Doctor Guidance">Not Sure — Need Doctor Guidance</option>
          </select>
        </div>

        <div>
          <label
            htmlFor={`${idPrefix}_assistance_type`}
            className="block text-xs uppercase tracking-wider font-semibold text-hospital-navy mb-1.5"
          >
            Type of Medical Assistance <span className="text-red-500">*</span>
          </label>
          <select
            id={`${idPrefix}_assistance_type`}
            name="assistance_type"
            required
            value={formData.assistance_type}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-hospital-border bg-hospital-soft/40 text-hospital-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-hospital-accent focus:bg-white transition-all"
          >
            {ASSISTANCE_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Row 3: Preferred Date & Consultation Preference (Optional) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor={`${idPrefix}_preferred_date`}
            className="block text-xs uppercase tracking-wider font-semibold text-hospital-navy mb-1.5"
          >
            Preferred Date <span className="text-slate-400 font-normal lowercase">(optional)</span>
          </label>
          <input
            type="date"
            id={`${idPrefix}_preferred_date`}
            name="preferred_date"
            min={todayStr}
            value={formData.preferred_date}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-hospital-border bg-hospital-soft/40 text-hospital-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-hospital-accent focus:bg-white transition-all"
          />
        </div>

        <div>
          <label
            htmlFor={`${idPrefix}_consultation_preference`}
            className="block text-xs uppercase tracking-wider font-semibold text-hospital-navy mb-1.5"
          >
            Consultation Preference <span className="text-slate-400 font-normal lowercase">(optional)</span>
          </label>
          <select
            id={`${idPrefix}_consultation_preference`}
            name="consultation_preference"
            value={formData.consultation_preference}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-hospital-border bg-hospital-soft/40 text-hospital-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-hospital-accent focus:bg-white transition-all"
          >
            {CONSULTATION_PREFERENCES.map((pref) => (
              <option key={pref} value={pref}>
                {pref}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Row 4: Brief Description (Optional) */}
      <div>
        <label
          htmlFor={`${idPrefix}_description`}
          className="block text-xs uppercase tracking-wider font-semibold text-hospital-navy mb-1.5"
        >
          Brief Description of Patient Requirement{' '}
          <span className="text-slate-400 font-normal lowercase">(optional)</span>
        </label>
        <textarea
          id={`${idPrefix}_description`}
          name="description"
          rows={3}
          value={formData.description}
          onChange={handleChange}
          placeholder="Briefly describe the treatment, knee/joint concern, consultation request, or support you are looking for..."
          className="w-full px-4 py-3 rounded-xl border border-hospital-border bg-hospital-soft/40 text-hospital-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-hospital-accent focus:bg-white transition-all"
        />
      </div>

      {/* Privacy & WhatsApp Enquiry Notice */}
      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-[11px] text-slate-600 leading-relaxed">
        <div className="flex items-start gap-2">
          <Lock className="w-3.5 h-3.5 text-hospital-accent shrink-0 mt-0.5" />
          <span>
            <strong>Privacy Guidance:</strong> Share only basic enquiry details to help us guide your visit. Please do not enter unnecessary sensitive personal records or identity numbers here.
          </span>
        </div>
        <div className="flex items-start gap-2">
          <Calendar className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
          <span>
            <strong>WhatsApp Enquiry Workflow:</strong> Clicking submit prepares your prefilled message for our WhatsApp Business desk (<strong>{HOSPITAL_INFO.contact.opdPhone}</strong>). This is an appointment enquiry only — exact timing will be confirmed by our coordination team.
          </span>
        </div>
      </div>

      {/* Primary Conversion Button */}
      <button
        type="submit"
        className="w-full py-4 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all shadow-subtle active:scale-[0.99]"
      >
        <MessageCircle className="w-4 h-4" />
        <span>Book an Appointment via WhatsApp</span>
      </button>
    </form>
  );
};
