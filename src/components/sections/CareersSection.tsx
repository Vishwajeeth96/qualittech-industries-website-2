import React, { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';
import { Briefcase, Mail, Send } from 'lucide-react';

const HR_EMAIL = 'mantosh@qualitechindustries.com';

const AREAS = [
  'Laser Cutting & Turret Punching',
  'Press & Stamping',
  'Tool Making & Tooling',
  'Welding',
  'Powder Coating',
  'Phosphating & Pre-Treatment',
  'Quality / Inspection',
  'Maintenance',
  'Other',
];

export const CareersSection: React.FC = () => {
  const [form, setForm] = useState({ name: '', phone: '', email: '', area: AREAS[0], experience: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Job Enquiry - ${form.area} - ${form.name}`;
    const body = [
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Area of interest: ${form.area}`,
      `Experience: ${form.experience}`,
      '',
      form.message,
      '',
      '(Please attach your resume to this email.)',
    ].join('\n');
    window.location.href = `mailto:${HR_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const inputClass =
    'w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-[#061522] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#017AC3]';
  const labelClass = 'block text-xs font-mono font-bold text-slate-600 uppercase tracking-wider mb-1.5';

  return (
    <section id="careers" className="scroll-mt-28 py-24 sm:py-32 bg-[#F7FAFC] relative overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-60 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Careers"
          title="JOIN QUALITECH"
          subtitle="Interested in working with us? Send a job enquiry and our HR team will get back to you."
          align="center"
          className="mb-12"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          <div className="lg:col-span-4 rounded-2xl bg-white border border-slate-200/90 shadow-md p-6 flex flex-col gap-4">
            <div className="w-11 h-11 rounded-xl bg-[#017AC3]/10 flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-[#017AC3]" />
            </div>
            <h3 className="text-lg font-extrabold text-[#061522]">Job enquiry</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Fill in the form and your email app will open with the details ready to send. Please attach your resume before sending.
            </p>
            <a
              href={`mailto:${HR_EMAIL}`}
              className="inline-flex items-center gap-2 text-sm font-mono font-bold text-[#017AC3] hover:text-[#061522] break-all"
            >
              <Mail className="w-4 h-4 shrink-0" />
              <span>{HR_EMAIL}</span>
            </a>
          </div>

          <form
            onSubmit={handleSubmit}
            className="lg:col-span-8 rounded-2xl bg-white border border-slate-200/90 shadow-md p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            <div>
              <label htmlFor="career-name" className={labelClass}>Full name</label>
              <input id="career-name" required className={inputClass} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            </div>
            <div>
              <label htmlFor="career-phone" className={labelClass}>Phone</label>
              <input id="career-phone" type="tel" required className={inputClass} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            </div>
            <div>
              <label htmlFor="career-email" className={labelClass}>Email</label>
              <input id="career-email" type="email" required className={inputClass} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
            <div>
              <label htmlFor="career-area" className={labelClass}>Area of interest</label>
              <select id="career-area" className={inputClass} value={form.area} onChange={(e) => setForm({ ...form, area: e.target.value })}>
                {AREAS.map((a) => (
                  <option key={a} value={a}>{a}</option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="career-exp" className={labelClass}>Experience</label>
              <input id="career-exp" placeholder="e.g. 3 years in press shop" className={inputClass} value={form.experience} onChange={(e) => setForm({ ...form, experience: e.target.value })} />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="career-msg" className={labelClass}>Message</label>
              <textarea id="career-msg" rows={4} className={inputClass} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#017AC3] hover:bg-[#015f98] text-white text-sm font-bold transition-colors cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Send Job Enquiry</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
