import React, { useState, useMemo, useEffect } from 'react';
import {
  Search,
  Download,
  Layers,
  Cpu,
  Flame,
  Zap,
  Cog,
  Sparkles,
  Wrench,
  Target,
  CheckCircle2,
  FileSpreadsheet,
  ArrowUpRight,
  SlidersHorizontal,
  ChevronRight,
  ChevronLeft,
  ShieldCheck,
  Table as TableIcon,
  LayoutGrid,
} from 'lucide-react';
import {
  ALL_MACHINES,
  MACHINE_CATEGORIES,
} from '../../data/machineryData';
import SkewButton from '../ui/SkewButton';

export const MachinerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768;
    }
    return false;
  });

  // Track screen size changes for responsive items per page
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Show 3 machines per page on mobile, 12 on tablet/desktop
  const itemsPerPage = isMobile ? 3 : 12;

  // Filtered machines based on category and search query
  const filteredMachines = useMemo(() => {
    return ALL_MACHINES.filter((machine) => {
      const matchesCategory =
        selectedCategory === 'all' || machine.categoryId === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        machine.name.toLowerCase().includes(q) ||
        machine.code.toLowerCase().includes(q) ||
        machine.make.toLowerCase().includes(q) ||
        machine.capacity.toLowerCase().includes(q) ||
        machine.model.toLowerCase().includes(q) ||
        machine.category.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Reset pagination when filter/search or mobile breakpoint changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery, isMobile]);

  const totalPages = Math.max(1, Math.ceil(filteredMachines.length / itemsPerPage));
  const paginatedMachines = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredMachines.slice(start, start + itemsPerPage);
  }, [filteredMachines, currentPage, itemsPerPage]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    // Smooth scroll to top of catalog so user immediately sees the top of next page
    const catalogEl = document.getElementById('machinery-catalog-start');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-4 h-4" />;
      case 'Flame':
        return <Flame className="w-4 h-4" />;
      case 'Zap':
        return <Zap className="w-4 h-4" />;
      case 'Cog':
        return <Cog className="w-4 h-4" />;
      case 'Sparkles':
        return <Sparkles className="w-4 h-4" />;
      case 'Wrench':
        return <Wrench className="w-4 h-4" />;
      case 'Target':
        return <Target className="w-4 h-4" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-4 h-4" />;
      default:
        return <Layers className="w-4 h-4" />;
    }
  };

  const startItemIdx = filteredMachines.length > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0;
  const endItemIdx = Math.min(currentPage * itemsPerPage, filteredMachines.length);

  return (
    <section
      id="machinery"
      className="py-16 sm:py-24 lg:py-32 bg-[#F7FAFC] text-[#061522] relative overflow-hidden scroll-mt-20"
    >
      {/* Blueprint grid background */}
      <div className="absolute inset-0 blueprint-grid opacity-60 pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[600px] h-[600px] bg-[#017AC3]/6 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header & Meta Badges */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-6 pb-6 sm:pb-10 border-b border-slate-200/90">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 rounded-full bg-white border border-slate-200 shadow-xs text-[11px] sm:text-xs font-mono font-bold tracking-wider text-slate-700 mb-3 sm:mb-4 flex-wrap">
              <span className="w-2 h-2 rounded-full bg-[#017AC3] animate-pulse" />
              <span className="text-[#017AC3]">FACILITY ASSET REGISTRY</span>
              <span className="text-slate-300">|</span>
              <span>DOC REF: QTI/MTN/D01 REV 02</span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-500">128 UNITS</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#061522] tracking-tight">
              Machinery & Production Infrastructure
            </h2>

            <p className="mt-2.5 sm:mt-4 text-xs sm:text-base lg:text-lg text-slate-600 leading-relaxed">
              Explore the complete directory of our 128 production, tooling, forming, welding, and surface finishing machines operational across 8 dedicated production divisions at our Hosur facility.
            </p>
          </div>

          {/* Quick Registry Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
            <a
              href="/data/List_of_Machines_2026-27.csv"
              download="Qualitech_Industries_Machinery_List_2026-27.csv"
              className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-[#017AC3] border border-slate-200 shadow-xs text-xs font-mono font-bold group transition-all"
              title="Download entire machinery list as CSV file"
            >
              <FileSpreadsheet className="w-4 h-4 text-emerald-600 group-hover:scale-110 transition-transform shrink-0" />
              <span>Download CSV Registry</span>
            </a>

            <SkewButton
              href="#contact"
              variant="white"
              className="!text-xs !py-2.5 sm:!py-3 !px-5 sm:!px-6 shadow-xs w-full sm:w-auto justify-center"
              icon={<ArrowUpRight className="w-4 h-4 text-[#017AC3]" />}
            >
              Request Plant Audit
            </SkewButton>
          </div>
        </div>

        {/* Operational Infrastructure Summary Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 mt-6 sm:mt-8">
          <div className="p-3.5 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col justify-between">
            <span className="text-[10px] sm:text-xs font-mono text-slate-500 uppercase tracking-wider font-semibold truncate">
              Total Production Assets
            </span>
            <div className="mt-2 sm:mt-3 flex items-baseline gap-1.5 sm:gap-2">
              <span className="text-2xl sm:text-4xl font-extrabold text-[#061522]">128</span>
              <span className="text-[10px] sm:text-xs font-mono font-bold text-[#017AC3]">Active Units</span>
            </div>
            <span className="text-[10px] sm:text-[11px] text-slate-500 mt-1 truncate">8 Hosur divisions</span>
          </div>

          <div className="p-3.5 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col justify-between">
            <span className="text-[10px] sm:text-xs font-mono text-slate-500 uppercase tracking-wider font-semibold truncate">
              Press Tonnage Fleet
            </span>
            <div className="mt-2 sm:mt-3 flex items-baseline gap-1.5 sm:gap-2">
              <span className="text-2xl sm:text-4xl font-extrabold text-[#017AC3]">160T</span>
              <span className="text-[10px] sm:text-xs font-mono font-bold text-slate-600">Peak Force</span>
            </div>
            <span className="text-[10px] sm:text-[11px] text-slate-500 mt-1 truncate">35T to 160T Komatsu/Aida</span>
          </div>

          <div className="p-3.5 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col justify-between">
            <span className="text-[10px] sm:text-xs font-mono text-slate-500 uppercase tracking-wider font-semibold truncate">
              Laser Profiling Power
            </span>
            <div className="mt-2 sm:mt-3 flex items-baseline gap-1.5 sm:gap-2">
              <span className="text-2xl sm:text-4xl font-extrabold text-[#061522]">12kW</span>
              <span className="text-[10px] sm:text-xs font-mono font-bold text-[#017AC3]">Combined</span>
            </div>
            <span className="text-[10px] sm:text-[11px] text-slate-500 mt-1 truncate">Bodor & Penta Fiber</span>
          </div>

          <div className="p-3.5 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col justify-between">
            <span className="text-[10px] sm:text-xs font-mono text-slate-500 uppercase tracking-wider font-semibold truncate">
              Robotics & Toolroom
            </span>
            <div className="mt-2 sm:mt-3 flex items-baseline gap-1.5 sm:gap-2">
              <span className="text-2xl sm:text-4xl font-extrabold text-[#017AC3]">Makino</span>
              <span className="text-[10px] sm:text-xs font-mono font-bold text-slate-600">& Yaskawa</span>
            </div>
            <span className="text-[10px] sm:text-[11px] text-slate-500 mt-1 truncate">6-Axis Robot & VMC</span>
          </div>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="mt-6 sm:mt-10 p-3.5 sm:p-5 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-3 sm:space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4">
            {/* Search Input */}
            <div className="relative flex-grow">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              <input
                type="text"
                placeholder="Search machine name, code (e.g. QTI/P-MC), make (e.g. Komatsu, Bodor), capacity..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-14 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-[#061522] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#017AC3] focus:bg-white transition-all font-medium"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400 hover:text-slate-700 px-2 py-0.5"
                >
                  Clear
                </button>
              )}
            </div>

            {/* View Mode Toggle & Result Count */}
            <div className="flex items-center justify-between md:justify-end gap-3">
              <span className="text-xs font-mono text-slate-500">
                <strong>{filteredMachines.length}</strong> machines found
              </span>

              <div className="flex items-center p-1 rounded-xl bg-slate-100 border border-slate-200 shrink-0">
                <button
                  type="button"
                  onClick={() => setViewMode('grid')}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                    viewMode === 'grid'
                      ? 'bg-white text-[#017AC3] shadow-xs'
                      : 'text-slate-600 hover:text-[#061522]'
                  }`}
                  title="Grid View"
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span>Cards</span>
                </button>

                <button
                  type="button"
                  onClick={() => setViewMode('table')}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                    viewMode === 'table'
                      ? 'bg-white text-[#017AC3] shadow-xs'
                      : 'text-slate-600 hover:text-[#061522]'
                  }`}
                  title="Audit Table View"
                >
                  <TableIcon className="w-3.5 h-3.5" />
                  <span>Audit Table</span>
                </button>
              </div>
            </div>
          </div>

          {/* Department Filter Pills with Touch Scroll */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 scrollbar-thin">
            {MACHINE_CATEGORIES.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:py-2 rounded-xl text-[11px] sm:text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    active
                      ? 'bg-[#017AC3] text-white shadow-xs'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/80'
                  }`}
                >
                  {getCategoryIcon(cat.iconName)}
                  <span>{cat.title}</span>
                  <span
                    className={`px-1.5 py-0.2 rounded text-[10px] font-mono font-bold ${
                      active ? 'bg-white/20 text-white' : 'bg-slate-200/80 text-slate-600'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Category Description Banner */}
        {selectedCategory !== 'all' && (
          <div className="mt-3 sm:mt-4 px-4 py-2.5 rounded-xl bg-white border border-slate-200/80 flex items-center justify-between text-xs text-slate-600">
            <div className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-[#017AC3] shrink-0" />
              <strong className="text-[#061522] shrink-0">
                {MACHINE_CATEGORIES.find((c) => c.id === selectedCategory)?.title}:
              </strong>
              <span className="truncate">{MACHINE_CATEGORIES.find((c) => c.id === selectedCategory)?.description}</span>
            </div>
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className="text-[#017AC3] hover:underline font-mono font-bold shrink-0 ml-3 text-[11px]"
            >
              Reset
            </button>
          </div>
        )}

        {/* Anchor for smooth scroll on page change */}
        <div id="machinery-catalog-start" className="pt-2" />

        {/* Content Display: Grid Cards vs Audit Table */}
        {filteredMachines.length === 0 ? (
          <div className="mt-8 text-center py-12 px-4 bg-white rounded-2xl border border-slate-200">
            <SlidersHorizontal className="w-8 h-8 text-slate-300 mx-auto mb-2" />
            <h3 className="text-base font-bold text-[#061522]">No machinery matched your search</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              Try adjusting your search query or selecting a different department category.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-3 px-4 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-mono font-bold text-slate-700 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          /* Cards View: On mobile shows 3 machines stacked one by one below each other */
          <div className="mt-6">
            {/* Mobile layout indicator */}
            <div className="sm:hidden mb-3 flex items-center justify-between text-[11px] font-mono text-slate-500 px-1">
              <span>Showing <strong>3 machines</strong> per page</span>
              <span className="text-[#017AC3] font-bold">Page {currentPage} of {totalPages}</span>
            </div>

            {/* Responsive Grid: 1 column on mobile (one by one below), 2 on tablet, 4 on desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
              {paginatedMachines.map((machine) => (
                <div
                  key={machine.id}
                  className="rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-200 p-4 sm:p-5 flex flex-col justify-between group hover:border-[#017AC3]/40"
                >
                  <div>
                    {/* Top Bar: Code & Department */}
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 mb-2">
                      <span className="font-bold text-[#017AC3] px-2 py-0.5 rounded bg-[#017AC3]/8 border border-[#017AC3]/15">
                        {machine.code}
                      </span>
                      <span className="text-[10px] text-slate-400 font-semibold truncate max-w-[130px]">
                        {machine.category}
                      </span>
                    </div>

                    {/* Machine Name */}
                    <h3 className="text-base sm:text-lg font-extrabold text-[#061522] group-hover:text-[#017AC3] transition-colors leading-snug">
                      {machine.name}
                    </h3>

                    {/* Capacity Badge */}
                    <div className="mt-2 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200 text-xs font-mono font-bold text-slate-800">
                      <span className="text-slate-400 font-normal">Cap:</span>
                      <span className="text-[#017AC3]">{machine.capacity}</span>
                    </div>

                    {/* Make and Model Specifications */}
                    <div className="mt-2.5 pt-2.5 border-t border-slate-100 space-y-1 text-xs">
                      <div className="flex items-center justify-between text-slate-600">
                        <span className="text-slate-400 font-mono text-[11px]">Make:</span>
                        <strong className="text-slate-800 font-semibold truncate ml-2 text-right">{machine.make}</strong>
                      </div>
                      {machine.model && machine.model !== 'Industrial Class' && (
                        <div className="flex items-center justify-between text-slate-600">
                          <span className="text-slate-400 font-mono text-[11px]">Model:</span>
                          <span className="text-slate-700 font-mono truncate ml-2 text-right">{machine.model}</span>
                        </div>
                      )}
                      <div className="flex items-center justify-between text-slate-600">
                        <span className="text-slate-400 font-mono text-[11px]">Status:</span>
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-emerald-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          In Production
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Action Link */}
                  <div className="mt-3.5 pt-2.5 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-slate-400">Hosur Plant</span>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#017AC3] hover:text-[#061522] transition-colors"
                    >
                      <span>Enquire RFQ</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* High-Density Audit Table View */
          <div className="mt-6 bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm min-w-[700px]">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-mono uppercase tracking-wider text-slate-600">
                    <th className="py-3 px-4 font-bold">SL #</th>
                    <th className="py-3 px-4 font-bold">Machine Code</th>
                    <th className="py-3 px-4 font-bold">Machine Description</th>
                    <th className="py-3 px-4 font-bold">Department / Cell</th>
                    <th className="py-3 px-4 font-bold">Capacity</th>
                    <th className="py-3 px-4 font-bold">Manufacturer / Make</th>
                    <th className="py-3 px-4 font-bold">Model</th>
                    <th className="py-3 px-4 font-bold text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {paginatedMachines.map((machine, index) => (
                    <tr
                      key={machine.id}
                      className="hover:bg-slate-50/80 transition-colors text-slate-700"
                    >
                      <td className="py-2.5 px-4 font-mono text-xs text-slate-400">
                        {(currentPage - 1) * itemsPerPage + index + 1}
                      </td>
                      <td className="py-2.5 px-4 font-mono font-bold text-xs text-[#017AC3] whitespace-nowrap">
                        {machine.code}
                      </td>
                      <td className="py-2.5 px-4 font-bold text-[#061522]">
                        {machine.name}
                      </td>
                      <td className="py-2.5 px-4 text-xs font-mono text-slate-600 whitespace-nowrap">
                        {machine.category}
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
          </div>
        )}

        {/* Mobile Dedicated Pagination (Prominent Next / Prev for 3 machines) */}
        {totalPages > 1 && (
          <div className="mt-6 flex flex-col gap-2.5 sm:hidden">
            <div className="flex items-center justify-between text-xs font-mono text-slate-600 bg-white p-2.5 rounded-xl border border-slate-200 shadow-xs">
              <span>
                Machines <strong>{startItemIdx}–{endItemIdx}</strong> of <strong>{filteredMachines.length}</strong>
              </span>
              <span className="font-bold text-[#017AC3]">
                Page {currentPage} / {totalPages}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="flex-1 py-3 px-4 rounded-xl bg-white border border-slate-200 text-xs font-mono font-bold text-slate-700 disabled:opacity-40 disabled:pointer-events-none shadow-xs flex items-center justify-center gap-1.5 active:bg-slate-100"
              >
                <ChevronLeft className="w-4 h-4 text-[#017AC3]" />
                <span>Previous</span>
              </button>

              <button
                type="button"
                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="flex-1 py-3 px-4 rounded-xl bg-[#017AC3] text-white text-xs font-mono font-bold disabled:opacity-40 disabled:pointer-events-none shadow-md shadow-[#017AC3]/20 flex items-center justify-center gap-1.5 active:bg-[#075985]"
              >
                <span>Next Page</span>
                <ChevronRight className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        )}

        {/* Desktop / Tablet Pagination Controls */}
        {totalPages > 1 && (
          <div className="hidden sm:flex mt-8 flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200">
            <span className="text-xs font-mono text-slate-500">
              Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong> ({filteredMachines.length} total results)
            </span>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-3.5 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-mono font-bold text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:pointer-events-none transition-all flex items-center gap-1"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Previous</span>
              </button>

              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                  if (
                    pageNum === 1 ||
                    pageNum === totalPages ||
                    (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
                  ) {
                    return (
                      <button
                        key={pageNum}
                        type="button"
                        onClick={() => handlePageChange(pageNum)}
                        className={`w-8 h-8 rounded-lg text-xs font-mono font-bold transition-all ${
                          currentPage === pageNum
                            ? 'bg-[#017AC3] text-white shadow-xs'
                            : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  }
                  if (
                    (pageNum === 2 && currentPage > 3) ||
                    (pageNum === totalPages - 1 && currentPage < totalPages - 2)
                  ) {
                    return (
                      <span key={pageNum} className="text-slate-400 px-1 font-mono text-xs">
                        &hellip;
                      </span>
                    );
                  }
                  return null;
                })}
              </div>

              <button
                type="button"
                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="px-3.5 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-mono font-bold text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:pointer-events-none transition-all flex items-center gap-1"
              >
                <span>Next</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Quality Audit & RFQ Banner at Bottom */}
        <div className="mt-12 sm:mt-16 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#061522] to-[#0A2640] text-white p-5 sm:p-8 lg:p-10 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#017AC3]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[11px] sm:text-xs font-mono text-slate-300 mb-2.5 sm:mb-3 border border-white/10">
                <ShieldCheck className="w-3.5 h-3.5 text-[#017AC3] shrink-0" />
                <span>Audited for Automotive & Industrial OEM Production</span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white">
                Looking to Outsource Machining, Stamping, or Fabrication?
              </h3>
              <p className="mt-2 text-slate-300 text-xs sm:text-sm lg:text-base leading-relaxed max-w-2xl">
                Our plant at Bagalur Road, Eluvapalli, Hosur houses these 128 machines under one unified quality system. Send us your drawings, CAD models, or component specs for review.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-2.5 sm:gap-3 lg:items-end w-full">
              <SkewButton
                href="#contact"
                variant="white"
                className="!text-xs !py-3 !px-6 shadow-lg w-full sm:w-auto justify-center"
                icon={<ArrowUpRight className="w-4 h-4 text-[#017AC3]" />}
              >
                Submit Component RFQ
              </SkewButton>

              <a
                href="/data/List_of_Machines_2026-27.csv"
                download="Qualitech_Industries_Machinery_List_2026-27.csv"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-mono font-bold transition-all border border-white/20 w-full sm:w-auto"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export Full CSV (128 Items)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MachinerySection;
