import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, PhoneCall, ChevronRight, MessageCircle } from 'lucide-react';
import { HOSPITAL_INFO } from '../config/hospitalData';

interface NavbarProps {
  forceDarkText?: boolean;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on page navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Departments', path: '/departments' },
    { label: 'Facilities', path: '/facilities' },
    { label: 'Our Directors', path: '/directors' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-sm border-b border-sky-100/80">
        {/* Subtle Medical-Themed Texture & Background Layer */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {/* Base gradient: Soft white and light-blue gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#EFF6FF] via-[#FFFFFF] via-45% to-[#EAF3FD]" />

          {/* SVG Canvas containing curved purple accent, medical crosses, hexagons, and ECG line */}
          <svg
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 1440 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Subtle curved purple accent inspired by the Mahajan Hospital logo */}
              <linearGradient id="purpleCurveGrad" x1="0%" y1="0%" x2="100%" y2="80%">
                <stop offset="0%" stopColor="#58327E" stopOpacity="0.22" />
                <stop offset="45%" stopColor="#6B3BA7" stopOpacity="0.10" />
                <stop offset="85%" stopColor="#A855F7" stopOpacity="0.03" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              </linearGradient>

              {/* Hexagon pattern stroke gradient */}
              <linearGradient id="hexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.40" />
                <stop offset="100%" stopColor="#818CF8" stopOpacity="0.20" />
              </linearGradient>

              {/* Delicate ECG Line gradient */}
              <linearGradient id="ecgGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#38BDF8" stopOpacity="0" />
                <stop offset="25%" stopColor="#38BDF8" stopOpacity="0.30" />
                <stop offset="55%" stopColor="#60A5FA" stopOpacity="0.75" />
                <stop offset="85%" stopColor="#818CF8" stopOpacity="0.40" />
                <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Subtle curved purple accent swooping gracefully under the logo */}
            <path
              d="M 0,0 L 0,84 Q 140,110 290,70 Q 400,38 480,0 Z"
              fill="url(#purpleCurveGrad)"
            />
            <path
              d="M 0,84 Q 140,110 290,70 Q 400,38 480,0"
              stroke="rgba(88, 50, 126, 0.28)"
              strokeWidth="1.5"
              fill="none"
            />

            {/* Faint Medical Cross Patterns */}
            {/* Cross 1 (top-left near logo) */}
            <g transform="translate(24, 12)" fill="#38BDF8" opacity="0.25">
              <rect x="7" y="0" width="6" height="20" rx="2" />
              <rect x="0" y="7" width="20" height="6" rx="2" />
            </g>
            {/* Cross 2 (lower-left under curve) */}
            <g transform="translate(42, 60)" fill="#60A5FA" opacity="0.20">
              <rect x="9" y="0" width="8" height="26" rx="3" />
              <rect x="0" y="9" width="26" height="8" rx="3" />
            </g>
            {/* Cross 3 (center subtle background) */}
            <g transform="translate(640, 22)" fill="#BAE6FD" opacity="0.32">
              <rect x="6" y="0" width="5" height="17" rx="1.5" />
              <rect x="0" y="6" width="17" height="5" rx="1.5" />
            </g>
            {/* Cross 4 (right side background) */}
            <g transform="translate(1310, 36)" fill="#38BDF8" opacity="0.22">
              <rect x="8" y="0" width="7" height="22" rx="2" />
              <rect x="0" y="8" width="22" height="7" rx="2" />
            </g>

            {/* Subtle Geometric Hexagonal Outlines (Medical molecular clusters in upper-right) */}
            <g stroke="url(#hexGrad)" strokeWidth="1.2" fill="none" opacity="0.55">
              {/* Hexagon Cluster */}
              <polygon points="1200,18 1222,6 1244,18 1244,42 1222,54 1200,42" />
              <polygon points="1244,18 1266,6 1288,18 1288,42 1266,54 1244,42" />
              <polygon points="1222,54 1244,42 1266,54 1266,78 1244,90 1222,78" />
              <polygon points="1340,16 1360,5 1380,16 1380,38 1360,49 1340,38" />
              <polygon points="1360,49 1380,38 1400,49 1400,71 1380,82 1360,71" />
              <polygon points="1120,40 1136,31 1152,40 1152,58 1136,67 1120,58" opacity="0.6" />
            </g>

            {/* Delicate ECG Heartbeat Line */}
            <path
              d="M 680,48 L 820,48 Q 828,48 832,45 Q 836,48 842,48 L 852,48 L 856,53 L 864,16 L 872,74 L 878,43 L 884,48 L 896,48 Q 904,42 912,48 L 1100,48"
              stroke="url(#ecgGrad)"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>

          {/* Bottom border separator with subtle tint */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-purple-200/50 via-sky-200/60 to-slate-200/70" />
        </div>

        {/* Navbar Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 sm:h-22 md:h-24">
            {/* Logo: Original Mahajan Hospital Logo with increased size and clear visibility */}
            <Link
              to="/"
              className="flex items-center shrink-0 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#58327E] rounded-xl"
            >
              <img
                src="/images/mahajan-logo-header.png"
                alt="Mahajan Multispecialist Hospital Logo"
                className="h-14 sm:h-16 md:h-20 w-auto object-contain transition-transform duration-300 hover:scale-[1.01]"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-3">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative px-3.5 py-2 text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? 'text-[#58327E] font-bold'
                        : 'text-[#17212B] hover:text-[#58327E]'
                    }`}
                  >
                    <span>{link.label}</span>
                    {/* Active purple indicator underline matching reference image */}
                    {isActive && (
                      <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-7 h-0.5 bg-[#58327E] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              {/* 24/7 Emergency Indicator */}
              <a
                href={`tel:${HOSPITAL_INFO.contact.emergencyPhoneClean}`}
                className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-red-700 bg-red-50 hover:bg-red-100 border border-red-200 transition-colors"
                title="24/7 Emergency Casualty"
              >
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                <span className="tracking-wide">24/7: 02162 232299</span>
              </a>

              {/* Book Appointment Button routing into customized WhatsApp Enquiry flow */}
              <Link
                to="/contact#appointment-enquiry"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#4C2A75] hover:bg-[#3D1F5F] text-white text-xs sm:text-sm font-semibold shadow-sm hover:shadow transition-all duration-200 active:scale-95"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Book an Appointment</span>
              </Link>
            </div>

            {/* Mobile Hamburger & Call Button */}
            <div className="flex lg:hidden items-center gap-2">
              <Link
                to="/contact#appointment-enquiry"
                className="p-2 rounded-full text-white bg-[#4C2A75] hover:bg-[#3D1F5F] shadow-sm"
                aria-label="Book an Appointment"
              >
                <MessageCircle className="w-4 h-4" />
              </Link>

              <a
                href={`tel:${HOSPITAL_INFO.contact.emergencyPhoneClean}`}
                className="p-2 rounded-full text-red-600 bg-red-50 border border-red-200"
                aria-label="Call Emergency"
              >
                <PhoneCall className="w-4 h-4" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="p-2 rounded-lg text-hospital-navy hover:bg-slate-100/80 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-hospital-navy/60 backdrop-blur-md transition-opacity">
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <img
                  src="/images/mahajan-logo-header.png"
                  alt="Mahajan Hospital"
                  className="h-12 w-auto object-contain"
                />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-gray-500 hover:text-gray-900 rounded-lg"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-6 flex flex-col space-y-1">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                        isActive
                          ? 'bg-[#4C2A75] text-white'
                          : 'text-hospital-charcoal hover:bg-slate-50'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronRight className={`w-4 h-4 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100 space-y-3">
              <Link
                to="/contact#appointment-enquiry"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 px-4 rounded-xl text-center bg-[#4C2A75] text-white font-semibold text-sm hover:bg-[#3D1F5F] shadow-sm flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Book an Appointment</span>
              </Link>

              <a
                href={`tel:${HOSPITAL_INFO.contact.emergencyPhoneClean}`}
                className="block w-full py-2.5 px-4 rounded-xl text-center bg-red-50 text-red-700 border border-red-200 font-semibold text-xs flex items-center justify-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                Emergency Hotline: 02162 232299
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
