export interface CorePillar {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  visualType: 'laser' | 'tooling' | 'hydraulic' | 'welding' | 'powder' | 'phosphating';
  highlights: string[];
  targetAnchor: string;
}

export const CORE_PILLARS: CorePillar[] = [
  {
    id: 'laser-cutting',
    number: '01',
    title: 'Laser Cutting',
    tagline: 'Precision Cutting for Sheet Metal & Components',
    description: 'High-accuracy laser profiling for sheet metal, prototype blanks, and intricate component contours without mechanical tool wear.',
    visualType: 'laser',
    highlights: ['Clean edge squareness', 'Intricate contour capability', 'Rapid prototyping turnaround'],
    targetAnchor: '#laser-cutting',
  },
  {
    id: 'tool-making',
    number: '02',
    title: 'Tool Making & Tooling',
    tagline: 'Tooling Solutions for Manufacturing',
    description: 'In-house tooling design, dies, jigs, and fixtures developed to translate new product designs into reliable, repeatable manufacturing runs.',
    visualType: 'tooling',
    highlights: ['Custom press tooling', 'Dedicated machining fixtures', 'Inspection & checking gauges'],
    targetAnchor: '#tool-making',
  },
  {
    id: 'hydraulic-machines',
    number: '03',
    title: 'Hydraulic Machines',
    tagline: 'Hydraulic Machine Development & Engineering',
    description: 'Design and assembly of specialized hydraulic machinery, pressure cylinders, and power packs engineered for controlled industrial force.',
    visualType: 'hydraulic',
    highlights: ['Controlled pressure delivery', 'Rigid machine frames', 'Custom stroke & power integration'],
    targetAnchor: '#hydraulic-machines',
  },
  {
    id: 'welding',
    number: '04',
    title: 'Welding',
    tagline: 'Built to Hold & Structural Assembly',
    description: 'Precision welding solutions for strong, reliable fabricated assemblies and industrial components engineered for structural integrity.',
    visualType: 'welding',
    highlights: ['Clean structural welds', 'Distortion-controlled fitup', 'Reliable fabricated joints'],
    targetAnchor: '#welding',
  },
  {
    id: 'powder-coating',
    number: '05',
    title: 'Powder Coating',
    tagline: 'Durable Protective & Aesthetic Finishing',
    description: 'Electrostatic powder coating application delivering resilient surface adhesion, uniform finish, and long-lasting corrosion protection.',
    visualType: 'powder',
    highlights: ['Even film thickness', 'Impact & scratch resistance', 'High aesthetic finish'],
    targetAnchor: '#powder-coating',
  },
  {
    id: 'phosphating',
    number: '06',
    title: 'Phosphating',
    tagline: 'Pre-Treatment & Surface Conversion',
    description: 'Chemical surface treatment providing foundational corrosion protection, improved surface lubrication, and optimal coating adhesion.',
    visualType: 'phosphating',
    highlights: ['Surface conversion layer', 'Pre-treatment bonding base', 'Anti-galling properties'],
    targetAnchor: '#phosphating',
  },
];

export const COMPANY_OVERVIEW = {
  founded: 'August 2003',
  establishedYear: '2003',
  tagline: 'PRECISION ENGINEERED. BUILT TO PERFORM.',
  authoritativeText:
    'QUALITECH INDUSTRIES was started in August 2003 with a focus on developing the manufacture of precision machined and sheet metal fabricated components. Today, our capabilities extend across laser cutting, tooling, hydraulic machines, and surface finishing — working closely with our customers to develop and manufacture new products with precision, practicality, and engineering focus.',
  onePartnerStatement:
    'ONE ENGINEERING PARTNER. MULTIPLE MANUFACTURING CAPABILITIES.',
  onePartnerSubtitle:
    'From precision cutting and tooling to fabrication, hydraulic machinery, and surface finishing — Qualitech Industries brings multiple manufacturing capabilities together under one engineering-focused operation.',
  location: {
    name: 'QUALITECH INDUSTRIES',
    addressLine1: 'QRFV+W2, Eluvapalli',
    addressLine2: 'Tamil Nadu 635103',
    country: 'India',
    region: 'Hosur / Eluvapalli Industrial Area',
    mapsUrl: 'https://maps.app.goo.gl/4qJD9zD1KcnKb5caA?g_st=ic',
  },
  contact: {
    hours: 'Monday – Saturday: 8:30 AM – 6:00 PM IST',
    channel: 'Hosur Works Engineering Office',
    email: 'enquiry@qualitechindustries.com',
  },
};

export const COMPANY_INFO = COMPANY_OVERVIEW;

