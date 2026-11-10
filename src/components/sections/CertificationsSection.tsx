import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import { BadgeCheck } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="scroll-mt-28 py-20 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Quality"
          title="CERTIFICATIONS"
          subtitle="Our quality certifications will be listed here."
          align="center"
          className="mb-8"
        />
        <div className="rounded-2xl border border-dashed border-slate-300 bg-[#F7FAFC] p-8 flex flex-col items-center text-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-[#017AC3]/10 flex items-center justify-center">
            <BadgeCheck className="w-6 h-6 text-[#017AC3]" />
          </div>
          <p className="text-sm text-slate-600">Certificates are being compiled and will be added soon.</p>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
