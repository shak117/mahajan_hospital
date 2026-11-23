import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { HOSPITAL_INFO, DEPARTMENTS } from '../config/hospitalData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-hospital-navy text-white pt-20 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800/80">
          {/* Col 1: Brand & Philosophy (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-white p-0.5 flex items-center justify-center">
                <img
                  src="/images/mahajan-logo.jpg"
                  alt="Mahajan Hospital Logo"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = '<div class="w-full h-full bg-hospital-navy flex items-center justify-center text-white font-bold text-xs">MH</div>';
                  }}
                />
              </div>
              <div>
                <h3 className="font-bold text-lg tracking-tight text-white">MAHAJAN</h3>
                <p className="text-xs tracking-wider uppercase text-slate-400 font-medium">Multispecialist Hospital • Satara</p>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              Advancing healthcare through surgical precision, robotic innovations, and compassionate patient-first medical treatment in Satara, Maharashtra.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                <span>Ethical & Multidisciplinary Healthcare</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-slate-400 font-semibold">Hospital</h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/directors" className="hover:text-white transition-colors">Our Directors</Link>
              </li>
              <li>
                <Link to="/departments" className="hover:text-white transition-colors">Departments</Link>
              </li>
              <li>
                <Link to="/facilities" className="hover:text-white transition-colors">Facilities & Services</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact & Appointment</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Specialities (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-slate-400 font-semibold">Specialities</h4>
            <ul className="space-y-2 text-xs text-slate-300 grid grid-cols-1 gap-1">
              {DEPARTMENTS.slice(0, 8).map((dept) => (
                <li key={dept.id}>
                  <Link to="/departments" className="hover:text-sky-300 transition-colors flex items-center justify-between">
                    <span>{dept.name}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/departments" className="text-sky-400 hover:text-sky-300 font-medium inline-flex items-center gap-1 mt-1">
                  View all 14 departments <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Emergency (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-slate-400 font-semibold">Contact & Location</h4>
            
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  529/A/13/15, Parasnis Colony, Powai Naka, Satara – 415001, Maharashtra, India.
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <div>
                  <span className="text-slate-400 block text-[10px]">APPOINTMENT / OPD:</span>
                  <a href={`tel:${HOSPITAL_INFO.contact.opdPhoneClean}`} className="text-white hover:text-sky-300 font-medium">
                    +91 9075023025
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2 rounded-lg bg-red-950/40 border border-red-800/40">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shrink-0"></span>
                <div>
                  <span className="text-red-300 block text-[10px] font-semibold uppercase">24/7 Emergency Casualty:</span>
                  <a href={`tel:${HOSPITAL_INFO.contact.emergencyPhoneClean}`} className="text-white hover:text-red-200 font-bold">
                    02162 232299
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`mailto:${HOSPITAL_INFO.contact.email}`} className="text-slate-300 hover:text-white break-all">
                  {HOSPITAL_INFO.contact.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">OPD: Mon–Sat, 9 AM–8 PM</p>
                  <p className="text-slate-400 text-[11px]">Emergency: Available 24 Hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            © {new Date().getFullYear()} Mahajan Multispecialist Hospital, Satara. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="italic text-slate-400 font-medium">
              "Advanced Healthcare. Compassionate Care."
            </span>
            <Link to="/contact" className="hover:text-white transition-colors">
              Patient Enquiries
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
