import React, { useState } from 'react';
import { MapPin, Clock, Send, CheckCircle2, ArrowUpRight, ShieldCheck } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import SkewButton from '../ui/SkewButton';
import { AnimatedInput, AnimatedTextarea, AnimatedSelect } from '../ui/AnimatedInput';
import { COMPANY_INFO } from '../../data/content';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    requirement: 'CNC Machining',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="scroll-mt-28 py-24 sm:py-32 bg-[#F7FAFC] relative overflow-hidden">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 blueprint-grid opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Direct Engineering Channel"
          title="Start a Conversation"
          subtitle="Submit your manufacturing requirements, technical RFQs, or batch specifications for a prompt review by our engineering team."
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column (7 cols): Enquiry Form with EXACT Input Animation */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white/90 backdrop-blur-xl border border-slate-200/90 shadow-xl p-8 sm:p-10">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5 mb-8">
                <div>
                  <h3 className="text-2xl font-extrabold text-[#071827]">
                    Technical Enquiry Form
                  </h3>
                  <p className="text-xs font-mono text-slate-500 mt-1">
                    Precision RFQ &bull; Hosur Works Engineering Review
                  </p>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-[#D71920]" />
              </div>

              {submitted ? (
                <div className="py-12 flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-bold text-[#071827]">Enquiry Dispatched</h4>
                  <p className="text-slate-600 text-sm max-w-md">
                    Thank you for reaching out to Qualitech Industries. Our engineering team will examine your specifications and connect shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-xs font-mono font-bold text-[#017AC3] hover:underline"
                  >
                    Submit Another Requirement &rarr;
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <AnimatedInput
                      label="Full Name"
                      id="qti-name"
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />

                    {/* Company */}
                    <AnimatedInput
                      label="Company / Organization"
                      id="qti-company"
                      type="text"
                      required
                      placeholder="e.g. Automotive Component Corp"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email */}
                    <AnimatedInput
                      label="Corporate Email"
                      id="qti-email"
                      type="email"
                      required
                      placeholder="e.g. engineering@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />

                    {/* Phone */}
                    <AnimatedInput
                      label="Contact Number"
                      id="qti-phone"
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  {/* Requirement Selection */}
                  <AnimatedSelect
                    label="Primary Solution Category"
                    id="qti-requirement"
                    required
                    value={formData.requirement}
                    onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                    options={[
                      { value: 'Laser Cutting', label: '01 — Laser Cutting & Profiling' },
                      { value: 'Tool Making', label: '02 — Tool Making & Tooling' },
                      { value: 'Hydraulic Machines', label: '03 — Hydraulic Machines' },
                      { value: 'Welding', label: '04 — Welding & Structural Fabrication' },
                      { value: 'Powder Coating', label: '05 — Powder Coating' },
                      { value: 'Phosphating', label: '06 — Phosphating Surface Pre-Treatment' },
                      { value: 'New Product Development', label: 'Customer Product Development Collaboration' },
                      { value: 'General Enquiry', label: 'General Engineering Discussion' },
                    ]}
                  />

                  {/* Message */}
                  <AnimatedTextarea
                    label="Component Specifications / Drawing Details"
                    id="qti-message"
                    required
                    placeholder="Provide details regarding material grade, tolerances, batch quantities, or engineering drawing notes..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />

                  {/* Submit Button using EXACT Skewed button with QTI Blue hover fill */}
                  <div className="pt-2 flex items-center justify-between">
                    <SkewButton
                      type="submit"
                      variant="white"
                      className="!py-3.5 !px-8 shadow-md"
                      icon={<Send className="w-4 h-4 text-[#017AC3]" />}
                    >
                      Send Enquiry
                    </SkewButton>

                    <span className="text-[11px] font-mono text-slate-400 hidden sm:inline-block">
                      Data secured under NDA protocols
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column (5 cols): Verified Location Card & Facility Info */}
          <div id="location" className="lg:col-span-5 space-y-6">
            {/* Primary Verified Location Card */}
            <div className="rounded-3xl bg-white/90 backdrop-blur-xl text-[#061522] p-8 sm:p-9 shadow-xl border border-slate-200/90 relative overflow-hidden">
              <div className="absolute inset-0 blueprint-grid opacity-35 pointer-events-none" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#017AC3]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                  <span className="text-xs font-mono font-bold tracking-widest text-[#017AC3] uppercase flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D71920]" />
                    Verified Facility
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    Plus Code: QRFV+W2
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-[#061522]">
                  QUALITECH INDUSTRIES
                </h3>

                {/* EXACT Provided Address */}
                <div className="mt-4 flex items-start gap-3 text-slate-600 text-sm leading-relaxed">
                  <MapPin className="w-5 h-5 text-[#017AC3] shrink-0 mt-1" />
                  <div>
                    <strong className="text-[#061522] block font-bold text-base">
                      {COMPANY_INFO.location.addressLine1}
                    </strong>
                    <span className="block">{COMPANY_INFO.location.addressLine2}</span>
                    <span className="block">{COMPANY_INFO.location.country}</span>
                    <span className="text-xs font-mono text-[#017AC3] font-bold block mt-1">
                      {COMPANY_INFO.location.region}
                    </span>
                  </div>
                </div>

                {/* Direct Google Maps Action Button */}
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <SkewButton
                    href={COMPANY_INFO.location.mapsUrl}
                    variant="white"
                    className="w-full justify-center !py-3 !text-xs font-mono shadow-sm"
                    icon={<ArrowUpRight className="w-4 h-4 text-[#017AC3]" />}
                    ariaLabel="Open Qualitech Industries in Google Maps"
                  >
                    Open in Google Maps
                  </SkewButton>
                </div>
              </div>
            </div>

            {/* Operating Hours & Direct Channels Card */}
            <div className="rounded-3xl bg-white/90 backdrop-blur-md border border-slate-200/90 p-6 sm:p-7 shadow-sm">
              <h4 className="text-sm font-mono font-bold text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#017AC3]" />
                Operating Schedule
              </h4>

              <div className="space-y-3 text-sm text-slate-700">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="font-semibold">Plant Operations:</span>
                  <span className="font-mono text-xs">{COMPANY_INFO.contact.hours}</span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="font-semibold">Technical Inquiries:</span>
                  <span className="font-mono text-xs text-[#017AC3]">{COMPANY_INFO.contact.email}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-semibold">Region:</span>
                  <span className="font-mono text-xs">Tamil Nadu Industrial Corridor</span>
                </div>
              </div>

              <div className="mt-5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-2.5 text-xs text-slate-600">
                <ShieldCheck className="w-4 h-4 text-[#017AC3] shrink-0" />
                <span>NDA &amp; proprietary CAD drawing protections guaranteed.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
