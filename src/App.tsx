import React from 'react';
import LoadingScreen from './components/sections/LoadingScreen';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import PartnerBanner from './components/sections/PartnerBanner';
import AboutSection from './components/sections/AboutSection';
import WhyQTISection from './components/sections/WhyQTISection';
import CapabilitiesSection from './components/sections/CapabilitiesSection';
import LaserCuttingSection from './components/sections/LaserCuttingSection';
import ToolingSection from './components/sections/ToolingSection';
import HydraulicSection from './components/sections/HydraulicSection';
import WeldingSection from './components/sections/WeldingSection';
import SurfaceFinishingSection from './components/sections/SurfaceFinishingSection';
import OurAchievementsSection from './components/sections/OurAchievementsSection';
import OurCustomersSection from './components/sections/OurCustomersSection';
import IndustriesSection from './components/sections/IndustriesSection';
import ProcessSection from './components/sections/ProcessSection';
import FeaturedCTA from './components/sections/FeaturedCTA';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/layout/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F7FAFC] text-[#061522] flex flex-col selection:bg-[#017AC3] selection:text-white relative">
      {/* 01. Exact Newton's Cradle Loading Screen (QTI Blue #017AC3) */}
      <LoadingScreen />

      {/* 02. Floating Frosted Glass Navbar */}
      <Navbar />

      {/* Main Content Sections Following Exact Storyline */}
      <main className="flex-grow">
        {/* HERO */}
        <Hero />

        {/* BRAND INTRODUCTION */}
        <PartnerBanner />

        {/* ABOUT QUALITECH */}
        <AboutSection />

        {/* WHY QTI */}
        <WhyQTISection />

        {/* CAPABILITIES (Main Central Service Hub) */}
        <CapabilitiesSection />

        {/* LASER CUTTING (#laser-cutting) */}
        <LaserCuttingSection />

        {/* TOOL MAKING (#tool-making) */}
        <ToolingSection />

        {/* HYDRAULIC MACHINES (#hydraulic-machines) */}
        <HydraulicSection />

        {/* WELDING (#welding) */}
        <WeldingSection />

        {/* SURFACE FINISHING: POWDER COATING (#powder-coating) & PHOSPHATING (#phosphating) */}
        <SurfaceFinishingSection />

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
      </main>

      {/* Architectural White & QTI Blue Footer */}
      <Footer />
    </div>
  );
};

export default App;
