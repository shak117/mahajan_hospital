import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, CheckCircle2, Calendar, Phone, ShieldCheck, ArrowRight, Stethoscope } from 'lucide-react';
import { DIRECTORS, HOSPITAL_INFO } from '../config/hospitalData';

export const Directors: React.FC = () => {
  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-hospital-white min-h-screen">
      {/* Header Banner */}
      <section className="py-16 sm:py-20 bg-hospital-navy text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-sky-300 border border-white/15 mb-4">
              Executive Leadership
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              Clinical Leadership & Governance.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl">
              Mahajan Multispecialist Hospital is directed by internationally credentialed surgical and critical care specialists committed to bringing world-class healthcare to Satara.
            </p>
          </div>
        </div>
      </section>

      {/* Directors Deep Dive */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Director 1: Dr. Abhishek Suresh Mahajan */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="sticky top-28 rounded-3xl overflow-hidden shadow-premium border border-hospital-border bg-slate-100">
              <img
                src="/images/dept1.jpg"
                alt="Dr. Abhishek Suresh Mahajan"
                className="w-full aspect-[4/5] object-cover object-top"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.src = '/images/mahajan-building.jpg';
                }}
              />
              <div className="p-6 bg-white border-t border-hospital-border">
                <span className="text-xs uppercase tracking-widest text-hospital-accent font-bold block mb-1">
                  Managing Director & Consultant
                </span>
                <h3 className="text-xl font-bold text-hospital-navy">
                  Dr. Abhishek Suresh Mahajan
                </h3>
                <p className="text-xs text-hospital-slate mt-1 font-medium">
                  Consultant Orthopaedic & Robotic Joint Surgeon
                </p>
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href={`tel:${HOSPITAL_INFO.contact.opdPhoneClean}`}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-hospital-navy hover:text-hospital-accent"
                  >
                    <Phone className="w-3.5 h-3.5 text-sky-600" />
                    <span>Call OPD Desk</span>
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-hospital-accent hover:underline"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Enquire Slot</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-hospital-accent font-semibold">
                Orthopaedic Surgery & Joint Replacement
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-hospital-navy tracking-tight mt-1">
                Dr. Abhishek Suresh Mahajan
              </h2>
              <p className="text-sm font-semibold text-hospital-muted mt-1 uppercase tracking-wide">
                Consultant Orthopaedic Surgeon
              </p>
            </div>

            {/* Qualifications Card */}
            <div className="p-5 rounded-2xl bg-hospital-soft/80 border border-hospital-border">
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-4 h-4 text-sky-600" />
                <h4 className="text-xs uppercase tracking-widest font-bold text-hospital-navy">
                  Academic Degrees & International Fellowships
                </h4>
              </div>
              <p className="text-sm font-medium text-hospital-charcoal leading-relaxed">
                MBBS, MS (Orth), DNB, FCPS, MCh (Orth), MNAMS, FICS (USA), FACS (USA), FRSPH (UK), MRCS (UK), MBA.
              </p>
            </div>

            {/* Detailed Clinical Biography */}
            <div className="space-y-4 text-sm sm:text-base text-hospital-slate leading-relaxed">
              <p>
                Dr. Abhishek Suresh Mahajan is a distinguished orthopaedic surgeon renowned for advancing robotic joint replacement and minimally invasive arthroscopy in western Maharashtra. Holding premier surgical fellowships from the United States (FACS, FICS) and the Royal College of Surgeons of the United Kingdom (MRCS, FRSPH), Dr. Mahajan combines deep anatomical expertise with cutting-edge surgical engineering.
              </p>
              <p>
                His clinical vision focuses on achieving natural joint kinematics, sub-millimeter surgical precision, and accelerated post-surgical rehabilitation. Through computerized navigation and robotic assistance, Dr. Mahajan delivers predictable outcomes that restore full, pain-free mobility for complex trauma, osteoarthritis, and sports ligament injuries.
              </p>
            </div>

            {/* Areas of Expertise */}
            <div>
              <h4 className="text-xs uppercase tracking-widest font-bold text-hospital-navy mb-3">
                Core Clinical Specializations:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Trauma Care & Polytrauma Reconstruction",
                  "Arthroscopy (Knee & Shoulder Keyhole Surgery)",
                  "Joint Replacement (Primary & Revision Hip/Knee)",
                  "Robotic Joint Replacement Surgery",
                  "Complex Orthopaedic & Deformity Correction Procedures"
                ].map((exp, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white border border-hospital-border flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-hospital-charcoal">{exp}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-hospital-border">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-hospital-navy text-white text-xs uppercase tracking-wider font-semibold hover:bg-hospital-charcoal transition-colors"
              >
                <Stethoscope className="w-4 h-4 text-sky-400" />
                <span>Book Orthopaedic Consultation</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-hospital-border" />

        {/* Director 2: Dr. Mugdha Abhishek Mahajan */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="sticky top-28 rounded-3xl overflow-hidden shadow-premium border border-hospital-border bg-slate-100">
              <img
                src="/images/about-us5.avif"
                alt="Dr. Mugdha Abhishek Mahajan"
                className="w-full aspect-[4/5] object-cover object-top"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.src = '/images/mahajan-building.jpg';
                }}
              />
              <div className="p-6 bg-white border-t border-hospital-border">
                <span className="text-xs uppercase tracking-widest text-hospital-accent font-bold block mb-1">
                  Director of Critical Care & Pain Management
                </span>
                <h3 className="text-xl font-bold text-hospital-navy">
                  Dr. Mugdha Abhishek Mahajan
                </h3>
                <p className="text-xs text-hospital-slate mt-1 font-medium">
                  Consultant Anaesthetist & Intensivist
                </p>
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href={`tel:${HOSPITAL_INFO.contact.emergencyPhoneClean}`}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-red-700 hover:text-red-900"
                  >
                    <Phone className="w-3.5 h-3.5 text-red-600" />
                    <span>24/7 ICU Desk</span>
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-hospital-accent hover:underline"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Pain Clinic</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-hospital-accent font-semibold">
                Anaesthesiology & Critical Care
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-hospital-navy tracking-tight mt-1">
                Dr. Mugdha Abhishek Mahajan
              </h2>
              <p className="text-sm font-semibold text-hospital-muted mt-1 uppercase tracking-wide">
                Consultant Anaesthetist, Intensivist & Pain Management Specialist
              </p>
            </div>

            {/* Qualifications Card */}
            <div className="p-5 rounded-2xl bg-hospital-soft/80 border border-hospital-border">
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-4 h-4 text-sky-600" />
                <h4 className="text-xs uppercase tracking-widest font-bold text-hospital-navy">
                  Academic Credentials
                </h4>
              </div>
              <p className="text-sm font-medium text-hospital-charcoal leading-relaxed">
                MBBS, MD (Anaesthesiology), DNB.
              </p>
            </div>

            {/* Detailed Clinical Biography */}
            <div className="space-y-4 text-sm sm:text-base text-hospital-slate leading-relaxed">
              <p>
                Dr. Mugdha Abhishek Mahajan is a board-certified anaesthesiologist and intensive care specialist heading the critical care monitoring and perioperative pain services at Mahajan Multispecialist Hospital. With extensive training in high-risk anaesthesia and mechanical ventilation, she ensures patient safety during the most intricate surgical procedures.
              </p>
              <p>
                As an expert in ultrasound-guided regional nerve blocks, Dr. Mahajan is dedicated to multimodal pain relief, drastically reducing the dependency on systemic narcotics while promoting early mobilization. Her leadership in golden-hour triage and round-the-clock ICU vigilance provides a life-saving safety net for polytrauma and critically ill patients.
              </p>
            </div>

            {/* Areas of Expertise */}
            <div>
              <h4 className="text-xs uppercase tracking-widest font-bold text-hospital-navy mb-3">
                Core Clinical Specializations:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Intensive Care Medicine & Polytrauma ICU",
                  "Trauma Care & Golden Hour Resuscitation",
                  "Advanced Interventional Pain Management",
                  "USG Guided Peripheral Nerve Blocks",
                  "First Aid & Emergency Golden Hour Response Protocols"
                ].map((exp, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white border border-hospital-border flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-hospital-charcoal">{exp}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-hospital-border">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-hospital-navy text-white text-xs uppercase tracking-wider font-semibold hover:bg-hospital-charcoal transition-colors"
              >
                <Stethoscope className="w-4 h-4 text-sky-400" />
                <span>Consult Pain Management Clinic</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
