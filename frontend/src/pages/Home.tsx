import React from 'react';
import { HeroVideo } from '../components/HeroVideo';
import { IntroductionSection } from '../sections/IntroductionSection';
import { HighlightsSection } from '../sections/HighlightsSection';
import { DepartmentsSection } from '../sections/DepartmentsSection';
import { FacilitiesSection } from '../sections/FacilitiesSection';
import { DirectorsSection } from '../sections/DirectorsSection';
import { WhyMahajanSection } from '../sections/WhyMahajanSection';
import { AppointmentCtaSection } from '../sections/AppointmentCtaSection';
import { ContactSection } from '../sections/ContactSection';

export const Home: React.FC = () => {
  return (
    <main className="w-full min-h-screen overflow-x-hidden">
      {/* SECTION 2: CINEMATIC VIDEO HERO */}
      <HeroVideo />

      {/* SECTION 3: INTRODUCTION */}
      <IntroductionSection />

      {/* SECTION 4: HOSPITAL HIGHLIGHTS */}
      <HighlightsSection />

      {/* SECTION 5: DEPARTMENTS */}
      <DepartmentsSection />

      {/* SECTION 6: ADVANCED FACILITIES */}
      <FacilitiesSection />

      {/* SECTION 7: OUR DIRECTORS */}
      <DirectorsSection />

      {/* SECTION 8: WHY MAHAJAN */}
      <WhyMahajanSection />

      {/* SECTION 9: APPOINTMENT CTA */}
      <AppointmentCtaSection />

      {/* SECTION 10: CONTACT & APPOINTMENT ENQUIRY */}
      <ContactSection />
    </main>
  );
};
