import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LoadingScreen from './components/sections/LoadingScreen';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import PartnerBanner from './components/sections/PartnerBanner';
import AboutSection from './components/sections/AboutSection';
import WhyQTISection from './components/sections/WhyQTISection';
import CapabilitiesSection from './components/sections/CapabilitiesSection';
import OurAchievementsSection from './components/sections/OurAchievementsSection';
import OurCustomersSection from './components/sections/OurCustomersSection';
import IndustriesSection from './components/sections/IndustriesSection';
import ProcessSection from './components/sections/ProcessSection';
import FeaturedCTA from './components/sections/FeaturedCTA';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/layout/Footer';
import CapabilityPage from './components/pages/CapabilityPage';

const VALID_CAPABILITY_SLUGS = [
  'laser-cutting',
  'tool-making',
  'hydraulic-machines',
  'welding',
  'powder-coating',
  'phosphating',
];

const getRouteFromHash = (): string => {
  if (typeof window === 'undefined') return 'home';
  const rawHash = window.location.hash.replace('#', '').trim();
  if (VALID_CAPABILITY_SLUGS.includes(rawHash)) {
    return rawHash;
  }
  return 'home';
};

export const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<string>(getRouteFromHash);

  // Sync state with browser back/forward and URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const nextRoute = getRouteFromHash();
      setCurrentRoute(nextRoute);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = useCallback((route: string) => {
    const cleaned = route.replace('#', '').trim();

    if (VALID_CAPABILITY_SLUGS.includes(cleaned)) {
      window.location.hash = cleaned;
      setCurrentRoute(cleaned);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (cleaned === 'home' || cleaned === '') {
      if (window.location.hash) {
        history.pushState(null, '', window.location.pathname);
      }
      setCurrentRoute('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Anchors like 'about', 'contact', 'capabilities', etc.
      if (currentRoute !== 'home') {
        history.pushState(null, '', window.location.pathname);
        setCurrentRoute('home');
      }
      setTimeout(() => {
        const el = document.getElementById(cleaned);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [currentRoute]);

  const isCapabilityPage = VALID_CAPABILITY_SLUGS.includes(currentRoute);

  return (
    <div className="min-h-screen bg-[#F7FAFC] text-[#061522] flex flex-col selection:bg-[#017AC3] selection:text-white relative">
      {/* 01. Newton's Cradle Loading Screen (QTI Blue #017AC3) */}
      <LoadingScreen />

      {/* 02. Floating Frosted Glass Navbar */}
      <Navbar onNavigate={navigateTo} currentRoute={currentRoute} />

      {/* Main Content with Smooth Page Transitions */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {!isCapabilityPage ? (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              {/* HERO */}
              <Hero onNavigate={navigateTo} />

              {/* BRAND INTRODUCTION */}
              <PartnerBanner />

              {/* ABOUT QUALITECH */}
              <AboutSection />

              {/* WHY QTI */}
              <WhyQTISection />

              {/* CAPABILITIES (Main 6 Pillars with direct links to dedicated pages) */}
              <CapabilitiesSection onNavigate={navigateTo} />

              {/* OUR ACHIEVEMENTS (#achievements) */}
              <OurAchievementsSection />

              {/* OUR CUSTOMERS (#customers) */}
              <OurCustomersSection />

              {/* INDUSTRIES SERVED (#industries) */}
              <IndustriesSection />

              {/* ENGINEERING PROCESS (#process) */}
              <ProcessSection />

              {/* FINAL CTA */}
              <FeaturedCTA />

              {/* CONTACT / ENQUIRY (#contact) & LOCATION (#location) */}
              <ContactSection />
            </motion.div>
          ) : (
            <motion.div
              key={currentRoute}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              {/* DEDICATED SEPARATE CAPABILITY PAGE */}
              <CapabilityPage slug={currentRoute} onNavigate={navigateTo} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Architectural White & QTI Blue Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;

