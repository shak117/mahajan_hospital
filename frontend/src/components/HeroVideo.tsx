import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowDown, Calendar, ShieldCheck, ChevronRight } from 'lucide-react';
import { HOSPITAL_INFO } from '../config/hospitalData';

export const HeroVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion && videoRef.current) {
      videoRef.current.pause();
    }
  }, []);

  const handleVideoCanPlay = () => {
    setVideoLoaded(true);
  };

  const handleVideoError = () => {
    console.warn('Video failed to autoplay or load, switching to static poster fallback.');
    setVideoError(true);
  };

  const scrollToNext = () => {
    const nextSection = document.getElementById('introduction-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-hospital-navy">
      {/* Background Video Layer */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-hospital-navy">
        {/* Full-width continuous background video prioritized to upper portion (center top) */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-poster.jpg"
          preload="auto"
          onCanPlay={handleVideoCanPlay}
          onError={handleVideoError}
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded && !videoError ? 'opacity-100' : 'opacity-0'
          } [object-position:center_top] pointer-events-none`}
          style={{ objectFit: 'cover', objectPosition: 'center top' }}
        >
          {/* Multiple source attributes with 16x9 widescreen as primary */}
          <source src="/videos/mahajan-hero-video-16x9.mp4" type="video/mp4" />
          <source src="/videos/bf-video.mp4" type="video/mp4" />
          <source src="/videos/bf%20video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Static Fallback Poster if video cannot play or reduced motion */}
        {(!videoLoaded || videoError) && (
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-top transition-opacity duration-700 pointer-events-none"
            style={{ backgroundImage: `url('/images/hero-poster.jpg')`, backgroundPosition: 'center top', backgroundSize: 'cover' }}
            aria-hidden="true"
          />
        )}

        {/* Subtle Contrast Gradient Overlay: ensures text readability on the left while keeping the upper building & signboard completely visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-hospital-navy/95 via-hospital-navy/60 to-transparent w-full md:w-3/5 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-hospital-navy/90 via-hospital-navy/20 to-black/20 pointer-events-none" />
      </div>

      {/* Hero Content Layer */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full py-28 sm:py-32 flex flex-col items-start text-left text-white">
        {/* Subtle Institutional Kicker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold tracking-wider uppercase text-white/95 mb-6 sm:mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-sky-400"></span>
          <span>{HOSPITAL_INFO.name} • SATARA</span>
        </motion.div>

        {/* Main Headline with balanced left-aligned line breaks */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold tracking-tight text-white leading-[1.14] sm:leading-[1.12] max-w-[750px]"
        >
          Advancing Healthcare.
          <br />
          Building Trust.
          <br />
          Transforming Lives.
        </motion.h1>

        {/* Subtle brand purple accent line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="w-14 sm:w-16 h-1 bg-[#58327E] rounded-full mt-4 sm:mt-5 mb-4 sm:mb-5 origin-left"
        />

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg md:text-xl text-slate-200/90 font-normal leading-relaxed max-w-[600px]"
        >
          {HOSPITAL_INFO.heroSupportingText}
        </motion.p>

        {/* Call to Actions with consistent left alignment */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3.5 sm:gap-4 w-full sm:w-auto"
        >
          {/* Primary CTA */}
          <Link
            to="/contact#appointment-enquiry"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-hospital-navy font-semibold text-sm hover:bg-slate-100 active:scale-95 transition-all duration-200 shadow-floating"
          >
            <Calendar className="w-4 h-4 text-sky-600" />
            <span>Book an Appointment</span>
          </Link>

          {/* Secondary Action */}
          <button
            onClick={scrollToNext}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-white font-medium text-sm backdrop-blur-md border border-white/20 transition-all duration-200"
          >
            <span>Explore Our Hospital</span>
            <ChevronRight className="w-4 h-4 text-white/70" />
          </button>
        </motion.div>
      </div>

      {/* Bottom "Scroll to Discover" Indicator matching visual reference */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center cursor-pointer text-white/80 hover:text-white transition-colors"
        onClick={scrollToNext}
        role="button"
        tabIndex={0}
        aria-label="Scroll to Discover"
      >
        <span className="text-[11px] sm:text-xs tracking-[0.18em] uppercase font-semibold mb-2">
          Scroll to Discover
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center bg-white/5 backdrop-blur-sm"
        >
          <ChevronRight className="w-3.5 h-3.5 rotate-90 text-white/80" />
        </motion.div>
      </motion.div>
    </section>
  );
};
