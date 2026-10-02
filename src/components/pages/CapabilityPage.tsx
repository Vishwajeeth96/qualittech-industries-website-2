import React, { useState, useMemo, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Search,
  Download,
  ShieldCheck,
  FileSpreadsheet,
  Cpu,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { CAPABILITY_PAGES, type CapabilityPageData } from '../../data/capabilityPagesData';
import { ALL_MACHINES } from '../../data/machineryData';
import SkewButton from '../ui/SkewButton';

interface CapabilityPageProps {
  slug: string;
  onNavigate: (route: string) => void;
}

export const CapabilityPage: React.FC<CapabilityPageProps> = ({ slug, onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const capabilityData: CapabilityPageData = CAPABILITY_PAGES[slug] || CAPABILITY_PAGES['laser-cutting'];

  // Auto-scroll the active tab into center view when slug changes
  useEffect(() => {
    const activeTab = document.getElementById(`cap-tab-${slug}`);
    if (activeTab && scrollContainerRef.current) {
      activeTab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [slug]);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const amount = direction === 'left' ? -260 : 260;
      scrollContainerRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  // Filter all machines belonging to this capability from the official 128-machine registry
  const relatedMachines = useMemo(() => {
    return ALL_MACHINES.filter((machine) => {
      // Map capability slug to category or name keywords
      if (slug === 'laser-cutting') {
        return machine.categoryId === 'laser' || machine.category.includes('Laser');
      }
      if (slug === 'tool-making') {
        return machine.categoryId === 'tool-room' || machine.category.includes('Tool');
      }
      if (slug === 'hydraulic-machines') {
        return machine.categoryId === 'press-shop' || machine.category.includes('Press');
      }
      if (slug === 'welding') {
        return machine.categoryId === 'welding' || machine.category.includes('Welding');
      }
      if (slug === 'powder-coating') {
        return (
          machine.categoryId === 'powder-coating' &&
          (machine.name.includes('POWDER') || machine.name.includes('BOOTH') || machine.name.includes('OVEN') || machine.name.includes('CONVEYOR'))
        );
      }
      if (slug === 'phosphating') {
        return (
          machine.categoryId === 'powder-coating' &&
          (machine.name.includes('PHOSPATING') ||
            machine.name.includes('DEGREASING') ||
            machine.name.includes('KOD') ||
            machine.name.includes('DRY OFF') ||
            machine.name.includes('SHOT') ||
            machine.name.includes('GAS'))
        );
      }
      return true;
    });
  }, [slug]);

  // Filtered by search within this capability
  const filteredMachines = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return relatedMachines;
    return relatedMachines.filter(
      (m) =>
        m.name.toLowerCase().includes(q) ||
        m.code.toLowerCase().includes(q) ||
        m.make.toLowerCase().includes(q) ||
        m.capacity.toLowerCase().includes(q) ||
        m.model.toLowerCase().includes(q)
    );
  }, [relatedMachines, searchQuery]);

  const capabilityKeys = Object.keys(CAPABILITY_PAGES);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="min-h-screen pt-24 sm:pt-28 pb-16 bg-[#F7FAFC] text-[#061522]"
    >
      {/* Background blueprint grid */}
      <div className="absolute inset-0 blueprint-grid opacity-50 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Breadcrumb & Status */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3">
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-slate-200/90 text-xs font-mono font-bold text-slate-700 hover:text-[#017AC3] hover:border-[#017AC3]/50 transition-all shadow-2xs group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-[#017AC3] transition-transform group-hover:-translate-x-1" />
            <span>&larr; Back to Home / All Capabilities</span>
          </button>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Division {capabilityData.number} of 06 &bull; {capabilityData.title}</span>
          </div>
        </div>

        {/* Dedicated Sideways Scrollable Pillar Switcher Bar with Arrow Controls */}
        <div className="relative rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 p-2 shadow-sm">
          <div className="flex items-center gap-2">
            {/* Left Scroll Arrow */}
            <button
              type="button"
              onClick={() => handleScroll('left')}
              className="shrink-0 w-8 h-8 rounded-xl bg-slate-50 hover:bg-[#017AC3] hover:text-white text-slate-600 border border-slate-200/80 flex items-center justify-center transition-colors cursor-pointer shadow-2xs"
              aria-label="Scroll capabilities left"
              title="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Horizontal Scrollable Tabs Track */}
            <div
              ref={scrollContainerRef}
              className="flex-1 flex items-center gap-2 overflow-x-auto scroll-smooth py-1 px-1 scrollbar-thin scrollbar-thumb-slate-300"
            >
              {capabilityKeys.map((key) => {
                const cap = CAPABILITY_PAGES[key];
                const isActive = key === slug;
                return (
                  <button
                    id={`cap-tab-${key}`}
                    key={key}
                    type="button"
                    onClick={() => onNavigate(key)}
                    className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-bold whitespace-nowrap transition-all duration-200 cursor-pointer shrink-0 ${
                      isActive
                        ? 'bg-[#017AC3] text-white shadow-md shadow-[#017AC3]/25 scale-[1.02] border border-[#017AC3]'
                        : 'bg-white text-slate-700 hover:text-[#017AC3] hover:bg-slate-100/80 border border-slate-200/90 shadow-2xs'
                    }`}
                  >
                    <span
                      className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                        isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {cap.number}
                    </span>
                    <span>{cap.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Right Scroll Arrow */}
            <button
              type="button"
              onClick={() => handleScroll('right')}
              className="shrink-0 w-8 h-8 rounded-xl bg-slate-50 hover:bg-[#017AC3] hover:text-white text-slate-600 border border-slate-200/80 flex items-center justify-center transition-colors cursor-pointer shadow-2xs"
              aria-label="Scroll capabilities right"
              title="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 01. BIG HERO SECTION OF A MACHINE */}
        <div className="mt-6 sm:mt-8 relative rounded-2xl sm:rounded-3xl bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-xl overflow-hidden p-4 sm:p-8 lg:p-12">
          {/* Engineering corner marks */}
          <div className="absolute top-0 left-0 w-3 sm:w-4 h-3 sm:h-4 border-t-2 border-l-2 border-[#017AC3] pointer-events-none" />
          <div className="absolute top-0 right-0 w-3 sm:w-4 h-3 sm:h-4 border-t-2 border-r-2 border-[#017AC3] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-3 sm:w-4 h-3 sm:h-4 border-b-2 border-l-2 border-[#017AC3] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-3 sm:w-4 h-3 sm:h-4 border-b-2 border-r-2 border-[#D71920] pointer-events-none" />

          {/* Top Hero Badges */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
            <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#017AC3]/10 border border-[#017AC3]/20 text-[10px] sm:text-xs font-mono font-bold text-[#017AC3] uppercase">
              CAPABILITY {capabilityData.number} &bull; {capabilityData.title.toUpperCase()}
            </span>
            <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[10px] sm:text-xs font-mono font-bold text-emerald-700 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Active Production Line &bull; Hosur Works
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#061522] tracking-tight max-w-4xl leading-tight">
            {capabilityData.headline}
          </h1>

          <p className="mt-2.5 sm:mt-3 text-xs sm:text-base lg:text-lg text-slate-600 max-w-3xl leading-relaxed">
            {capabilityData.description}
          </p>

          {/* Machine Showcase Box */}
          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-slate-200/90 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Big Machine Image Container - Clean white background, ultra realistic */}
            <div className="lg:col-span-7 relative rounded-2xl bg-white border border-slate-200/80 p-3 sm:p-8 flex items-center justify-center overflow-hidden group shadow-sm">
              <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />
              <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 z-10">
                <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-white/95 border border-slate-200 text-[10px] sm:text-[11px] font-mono font-bold text-[#017AC3] shadow-xs">
                  {capabilityData.heroMachine.badge}
                </span>
              </div>

              <div className="relative w-full h-52 sm:h-72 lg:h-[380px] flex items-center justify-center">
                <img
                  src={capabilityData.heroMachine.image}
                  alt={capabilityData.heroMachine.name}
                  className="w-full h-full object-contain filter drop-shadow-md transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* Machine Specs & Stats */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4 sm:space-y-6">
              <div>
                <div className="flex items-center justify-between text-[11px] sm:text-xs font-mono text-slate-500 mb-1">
                  <span className="font-bold text-[#017AC3]">{capabilityData.heroMachine.make}</span>
                  <span className="bg-slate-100 px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-semibold text-slate-700">
                    {capabilityData.heroMachine.code}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#061522] leading-snug">
                  {capabilityData.heroMachine.name}
                </h2>

                <div className="mt-1.5 sm:mt-2 inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-lg bg-slate-50 border border-slate-200 text-[11px] sm:text-xs font-mono font-bold text-[#017AC3]">
                  {capabilityData.heroMachine.capacity} &bull; {capabilityData.heroMachine.model}
                </div>

                <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {capabilityData.heroMachine.description}
                </p>
              </div>

              {/* 4 Stats Pills */}
              <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                {capabilityData.heroMachine.stats.map((st) => (
                  <div key={st.label} className="p-2.5 sm:p-3 rounded-xl bg-slate-50 border border-slate-200/90 shadow-2xs">
                    <span className="text-[9px] sm:text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold block truncate">
                      {st.label}
                    </span>
                    <span className="text-xs sm:text-base font-extrabold text-[#061522] mt-0.5 block truncate">
                      {st.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                <SkewButton
                  href="#contact"
                  variant="white"
                  className="!text-xs !py-3 !px-6 shadow-sm justify-center text-center"
                  icon={<ArrowUpRight className="w-4 h-4 text-[#017AC3]" />}
                >
                  Request RFQ for this Machine
                </SkewButton>

                <a
                  href="#complete-fleet"
                  className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-mono font-bold text-slate-700 transition-colors text-center justify-center"
                >
                  View All {relatedMachines.length} Units Below &darr;
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 02. BELOW HERO: 4 IMAGES OF MACHINES AND DETAILS IN 2 COL 2 ROW CONTAINER WITH FLEX/GRID */}
        <div className="mt-12 sm:mt-20 lg:mt-24">
          <div className="mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#017AC3]/10 text-[11px] sm:text-xs font-mono font-bold text-[#017AC3] uppercase mb-2">
              <Cpu className="w-3.5 h-3.5" />
              <span>4 Specialized Workstations &bull; 2&times;2 Precision Fleet</span>
            </div>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#061522] tracking-tight">
              Featured Machinery & High-Detail Specifications
            </h2>
            <p className="mt-1 text-slate-600 text-xs sm:text-base max-w-2xl leading-relaxed">
              Inspect our 4 primary production units driving high-precision output, tight tolerances, and consistent quality for this capability.
            </p>
          </div>

          {/* 2 COL 2 ROW CONTAINER (4 Featured Machines) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
            {capabilityData.featuredMachines.map((machine) => (
              <div
                key={machine.id}
                className="rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 p-4 sm:p-6 lg:p-7 flex flex-col justify-between group overflow-hidden"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-2.5 sm:mb-3">
                    <span className="font-bold text-[#017AC3] px-2 sm:px-2.5 py-0.5 rounded-md bg-[#017AC3]/10 border border-[#017AC3]/20 text-[11px]">
                      {machine.code}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-[10px] sm:text-[11px] font-semibold text-slate-600">
                      {machine.tag}
                    </span>
                  </div>

                  {/* Clean White Background Image Container */}
                  <div className="relative h-48 sm:h-56 lg:h-64 w-full rounded-xl sm:rounded-2xl bg-white border border-slate-100 flex items-center justify-center p-3 sm:p-4 overflow-hidden mb-3 sm:mb-4 shadow-2xs">
                    <img
                      src={machine.image}
                      alt={machine.name}
                      className="w-full h-full object-contain filter drop-shadow-sm transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Title & Make */}
                  <h3 className="text-base sm:text-xl font-extrabold text-[#061522] group-hover:text-[#017AC3] transition-colors leading-snug">
                    {machine.name}
                  </h3>

                  <div className="mt-1.5 flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-mono">
                    <span className="text-slate-500">Make:</span>
                    <strong className="text-slate-800">{machine.make}</strong>
                    <span className="text-slate-300">|</span>
                    <span className="text-[#017AC3] font-bold">{machine.capacity}</span>
                  </div>

                  <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {machine.description}
                  </p>

                  {/* High Details Specifications Table */}
                  <div className="mt-3.5 sm:mt-4 pt-3 sm:pt-4 border-t border-slate-100 grid grid-cols-2 gap-1.5 sm:gap-2">
                    {machine.specs.map((sp) => (
                      <div key={sp.label} className="p-1.5 sm:p-2 rounded-lg bg-slate-50 border border-slate-200/70 text-[11px] sm:text-xs">
                        <span className="text-[9px] sm:text-[10px] font-mono text-slate-400 uppercase tracking-wider block font-semibold truncate">
                          {sp.label}
                        </span>
                        <span className="font-bold text-[#061522] mt-0.5 block truncate">
                          {sp.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Highlights Checklist */}
                  <div className="mt-3.5 sm:mt-4 pt-3 border-t border-slate-100 space-y-1 sm:space-y-1.5">
                    {machine.highlights.map((hl) => (
                      <div key={hl} className="flex items-center gap-2 text-[11px] sm:text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="mt-5 sm:mt-6 pt-3 sm:pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] sm:text-[11px] font-mono text-slate-400">Hosur Plant &bull; Verified</span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[#017AC3] hover:text-[#061522] transition-colors"
                  >
                    <span>RFQ Enquire</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 03. BELOW: ALL THE MACHINES DETAILS WITHOUT ANY IMAGES */}
        <div id="complete-fleet" className="mt-12 sm:mt-20 lg:mt-24 pt-8 sm:pt-12 border-t border-slate-200/90 scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4 sm:mb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-[10px] sm:text-xs font-mono font-bold uppercase mb-2">
                <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" />
                <span>Complete Plant Machinery Registry &bull; Format QTI/MTN/D01 Rev 02</span>
              </div>
              <h2 className="text-xl sm:text-3xl font-extrabold text-[#061522] tracking-tight">
                All Installed Machinery in {capabilityData.title} Division ({relatedMachines.length} Units)
              </h2>
              <p className="mt-1 text-slate-600 text-xs sm:text-sm max-w-2xl leading-relaxed">
                Comprehensive machine inventory operational at our Hosur plant. High-density technical specifications without images for fast OEM audit reference.
              </p>
            </div>

            <a
              href="/data/List_of_Machines_2026-27.csv"
              download={`Qualitech_${capabilityData.slug}_Machinery_List_2026-27.csv`}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-[#017AC3] border border-slate-200 text-xs font-mono font-bold shadow-xs shrink-0 w-full sm:w-auto"
            >
              <Download className="w-3.5 h-3.5 text-emerald-600" />
              <span>Download Registry (CSV)</span>
            </a>
          </div>

          {/* Search within this division */}
          <div className="mb-3 sm:mb-4 relative max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder={`Search ${capabilityData.title} machines (by make, code, capacity)...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-[#061522] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#017AC3]"
            />
          </div>

          {/* Mobile swipe helper */}
          <div className="flex items-center justify-between pb-1.5 md:hidden">
            <span className="text-[11px] font-mono text-slate-500">
              &larr; Scroll horizontally to view all specs &rarr;
            </span>
            <span className="text-[11px] font-mono font-bold text-[#017AC3]">
              {filteredMachines.length} Units
            </span>
          </div>

          {/* Clean High-Density Table (NO IMAGES) */}
          <div className="bg-white rounded-xl sm:rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
            <div className="overflow-x-auto scrollbar-thin">
              <table className="w-full text-left text-xs sm:text-sm min-w-[700px]">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-mono uppercase tracking-wider text-slate-600">
                    <th className="py-3 px-4 font-bold">SL #</th>
                    <th className="py-3 px-4 font-bold">Machine Code</th>
                    <th className="py-3 px-4 font-bold">Machine Name / Description</th>
                    <th className="py-3 px-4 font-bold">Capacity</th>
                    <th className="py-3 px-4 font-bold">Manufacturer / Make</th>
                    <th className="py-3 px-4 font-bold">Model</th>
                    <th className="py-3 px-4 font-bold">Status</th>
                    <th className="py-3 px-4 font-bold text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredMachines.map((machine, index) => (
                    <tr key={machine.id} className="hover:bg-slate-50/80 transition-colors text-slate-700">
                      <td className="py-2.5 px-4 font-mono text-xs text-slate-400">
                        {index + 1}
                      </td>
                      <td className="py-2.5 px-4 font-mono font-bold text-xs text-[#017AC3] whitespace-nowrap">
                        {machine.code}
                      </td>
                      <td className="py-2.5 px-4 font-bold text-[#061522]">
                        {machine.name}
                      </td>
                      <td className="py-2.5 px-4 font-mono text-xs font-bold text-slate-800 whitespace-nowrap">
                        {machine.capacity}
                      </td>
                      <td className="py-2.5 px-4 text-xs font-semibold text-slate-700">
                        {machine.make}
                      </td>
                      <td className="py-2.5 px-4 font-mono text-xs text-slate-500">
                        {machine.model || 'Standard'}
                      </td>
                      <td className="py-2.5 px-4 text-xs">
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-emerald-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          Operational
                        </span>
                      </td>
                      <td className="py-2.5 px-4 text-right whitespace-nowrap">
                        <a
                          href="#contact"
                          className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[#017AC3] hover:text-[#061522]"
                        >
                          <span>RFQ</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredMachines.length === 0 && (
              <div className="py-10 text-center text-slate-500 text-xs">
                No machines matched your search term in this capability division.
              </div>
            )}
          </div>
        </div>

        {/* Bottom RFQ Card for this Capability */}
        <div className="mt-12 sm:mt-16 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#061522] to-[#0A2640] text-white p-5 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-slate-300 mb-2 border border-white/10">
                <ShieldCheck className="w-3.5 h-3.5 text-[#017AC3]" />
                <span>Audited for Automotive OEM Supply</span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white">
                Ready to manufacture parts using our {capabilityData.title} division?
              </h3>
              <p className="mt-2 text-slate-300 text-xs sm:text-sm leading-relaxed">
                Connect with our engineering team at Bagalur Road, Eluvapalli, Hosur. Send your 2D drawings, 3D STEP files, or batch requirements for an immediate technical quote.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
              <SkewButton
                href="#contact"
                variant="white"
                className="!text-xs !py-3 !px-6 shadow-md justify-center text-center w-full sm:w-auto"
                icon={<ArrowUpRight className="w-4 h-4 text-[#017AC3]" />}
              >
                Submit RFQ Now
              </SkewButton>
              <button
                type="button"
                onClick={() => onNavigate('home')}
                className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-mono font-bold transition-all border border-white/20 cursor-pointer text-center w-full sm:w-auto"
              >
                &larr; Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CapabilityPage;
