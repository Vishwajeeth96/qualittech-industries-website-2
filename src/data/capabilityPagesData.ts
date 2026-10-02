// Detailed data structure for the 6 dedicated Capability Pages
// Each page has:
// 1. A big Hero Machine with specifications & realistic imagery
// 2. 4 Featured Machines in a 2-column x 2-row container with high details
// 3. Complete list of all machines (without images) from official registry

export interface SpecItem {
  label: string;
  value: string;
}

export interface FeaturedMachine {
  id: string;
  name: string;
  code: string;
  make: string;
  model: string;
  capacity: string;
  tag: string;
  image: string;
  description: string;
  specs: SpecItem[];
  highlights: string[];
}

export interface CapabilityPageData {
  slug: string;
  number: string;
  title: string;
  headline: string;
  tagline: string;
  description: string;
  categoryFilterId: string;
  metaBadge: string;
  heroMachine: {
    name: string;
    code: string;
    make: string;
    model: string;
    capacity: string;
    badge: string;
    image: string;
    description: string;
    specs: SpecItem[];
    stats: { label: string; value: string }[];
  };
  featuredMachines: FeaturedMachine[];
}

export const CAPABILITY_PAGES: Record<string, CapabilityPageData> = {
  'laser-cutting': {
    slug: 'laser-cutting',
    number: '01',
    title: 'Laser Cutting',
    headline: 'High-Power CNC Fiber Laser Cutting & Precision Profiling',
    tagline: 'Precision Profiling for Sheet Metal & Complex Structural Blanks',
    description:
      'Operating state-of-the-art 6kW high-power fiber laser cutting centers in Hosur. Qualitech delivers clean edge squareness, intricate geometry cutouts, and rapid prototype turnarounds with zero mechanical tool wear across MS, SS, Aluminum, and Copper.',
    categoryFilterId: 'laser',
    metaBadge: '6KW High-Speed Fiber Resonator • Hosur Center',
    heroMachine: {
      name: 'BODOR & PENTA 6KW High-Speed CNC Fiber Laser Center',
      code: 'QTI/LC-MC/01 & 02',
      make: 'BODOR / PENTA LASER',
      model: 'FL-6000 Precision Series',
      capacity: '6000W (6kW) Fiber Resonator',
      badge: 'Flagship Laser Profiling Center',
      image: '/images/machinery/hero-laser-6kw.jpg',
      description:
        'Our crown jewel CNC fiber laser cutting system delivers high-velocity cutting with razor-clean edge finish, micron-level positional accuracy, and dual exchange shuttle tables for continuous uninterrupted sheet processing.',
      specs: [
        { label: 'Laser Power Rating', value: '6000 Watts (6kW)' },
        { label: 'Work Table Area', value: '3000 mm × 1500 mm' },
        { label: 'Positioning Accuracy', value: '±0.03 mm' },
        { label: 'Repeatability', value: '±0.02 mm' },
        { label: 'Max Mild Steel', value: 'Up to 25 mm thickness' },
        { label: 'Max Stainless Steel', value: 'Up to 16 mm thickness' },
        { label: 'Assist Gases', value: 'High-Purity Oxygen & Nitrogen' },
        { label: 'Pallet Exchange Time', value: '15 seconds automatic' },
      ],
      stats: [
        { label: 'Max Power', value: '6,000 W' },
        { label: 'Bed Size', value: '3 × 1.5 m' },
        { label: 'Tolerance', value: '±0.03 mm' },
        { label: 'Assist Pressure', value: 'Up to 30 Bar' },
      ],
    },
    featuredMachines: [
      {
        id: 'lc-01',
        name: 'BODOR 6KW Industrial Fiber Laser Cutting System',
        code: 'QTI/LC-MC/01',
        make: 'BODOR LASER',
        model: 'Bodor C-Series 6000W',
        capacity: '6KW High-Output Resonator',
        tag: 'High-Power Sheet Profiling',
        image: '/images/machinery/hero-laser-6kw.jpg',
        description:
          'Equipped with advanced autofocus cutting head and smart anti-collision algorithms. Ideal for intricate automotive brackets, chassis gussets, and precision enclosures.',
        specs: [
          { label: 'Cutting Stroke X/Y/Z', value: '3000 / 1500 / 120 mm' },
          { label: 'Max Traverse Speed', value: '100 m/min synchronized' },
          { label: 'Cutting Head', value: 'Precitec Auto-Focus Sensor' },
          { label: 'CNC Control', value: 'BodorThinker Intelligent OS' },
        ],
        highlights: [
          'High cutting speed on thin & medium sheet metal',
          'Intricate internal cutouts without piercing spatter',
          'Nitrogen assist for oxidation-free clean edges',
        ],
      },
      {
        id: 'lc-02',
        name: 'PENTA 6KW High-Precision CNC Laser Center',
        code: 'QTI/LC-MC/02',
        make: 'PENTA LASER',
        model: 'Swing III 3015 Center',
        capacity: '6KW Fiber Laser Source',
        tag: 'Heavy Plate Cutting',
        image: '/images/laser-cutting-hero.jpg',
        description:
          'Heavy cast-iron gantry design engineered for extreme mechanical rigidity and continuous heavy gauge plate contour profiling with minimal thermal distortion.',
        specs: [
          { label: 'Bed Dimensions', value: '3000 mm × 1500 mm' },
          { label: 'Acceleration', value: '1.5 G Dual Drive' },
          { label: 'Edge Squareness', value: 'DIN EN ISO 9013-1 Class 1' },
          { label: 'Material Range', value: 'MS, SS, Brass, Aluminium' },
        ],
        highlights: [
          'Dual exchange pallet system for zero idle loading time',
          'Optimized nesting software for maximum material yield',
          'Clean taper-free cuts ready for immediate robotic welding',
        ],
      },
      {
        id: 'lc-03',
        name: 'WS-3000i Precision Fiber Laser Welding & Edge Blending Cell',
        code: 'QTI/LW-MC/01',
        make: 'GI.EN-LASER',
        model: 'WS-3000i CNC System',
        capacity: '1000W Fiber Beam Source',
        tag: 'Micro-Joint Laser Profiling',
        image: '/images/machinery/laser-welder-mc.jpg',
        description:
          'Precision laser joining and fine edge finishing station complementing our laser cutting fleet for sealed enclosures, medical trays, and thin gauge sheet assemblies.',
        specs: [
          { label: 'Beam Delivery', value: 'QBH Optical Fiber Cable' },
          { label: 'Wobble Head Width', value: '0.2 mm – 5.0 mm adjustable' },
          { label: 'Wire Feed System', value: 'Dual-drive 0.8 / 1.0 / 1.2 mm' },
          { label: 'Thermal Distortion', value: 'Near-zero heat affected zone' },
        ],
        highlights: [
          'Aesthetic zero-grind laser weld seams',
          'High penetration on stainless steel and aluminum',
          'Integrated helium/argon shielding gas delivery',
        ],
      },
      {
        id: 'lc-04',
        name: 'SURYA 30KW Industrial Rotary Screw Compressor Station',
        code: 'QTI/AC-MC/03',
        make: 'SURYA COMPRESSORS',
        model: 'SC-30 Screw Series',
        capacity: '30 KW Continuous Duty / 16 Bar',
        tag: 'High-Pressure Assist Gas',
        image: '/images/machinery/press-160ton.jpg',
        description:
          'Dedicated industrial high-pressure refrigerated air compressor and filtration line supplying ultra-dry, oil-free 16-bar assist air directly to the laser cutting heads.',
        specs: [
          { label: 'Operating Pressure', value: '16 Bar High-Pressure Output' },
          { label: 'Flow Rate', value: '3.8 m³/min' },
          { label: 'Filtration Class', value: 'ISO 8573-1 Class 1.2.1' },
          { label: 'Dew Point', value: '+3°C Refrigerated Dryer' },
        ],
        highlights: [
          'Oil-free, dry air stream prevents lens contamination',
          'Cost-effective high-pressure clean edge air cutting',
          'Automated pressure regulation for thick plate piercing',
        ],
      },
    ],
  },

  'tool-making': {
    slug: 'tool-making',
    number: '02',
    title: 'Tool Making & Tooling',
    headline: 'In-House Tool Design, Progressive Dies, Jigs & Fixtures',
    tagline: 'Engineering In-House Tooling for Reliable, Repeatable Manufacturing',
    description:
      'Full in-house toolroom equipped with Makino CNC VMCs, Okuma & Howa precision jig borers, and Rathode surface grinders. We design and build custom progressive dies, forming tools, welding fixtures, and inspection checking gauges to support OEM production runs.',
    categoryFilterId: 'tool-room',
    metaBadge: 'Makino VMC & Jig Boring • In-House Toolroom',
    heroMachine: {
      name: 'MAKINO Precision High-Speed CNC VMC Toolroom Center',
      code: 'QTI/VMC-MC/01',
      make: 'MAKINO PRECISION',
      model: 'DMU 50 High-Speed 3rd Gen',
      capacity: '12,000 RPM / BT40 Spindle',
      badge: 'Flagship Die & Mold Machining',
      image: '/images/machinery/vmc-machining-center.jpg',
      description:
        'Advanced vertical machining center dedicated to tool & die fabrication. Features ultra-rigid cast base, thermal compensation, and sub-micron positioning for crafting hardened stamping dies and complex fixture blocks.',
      specs: [
        { label: 'Spindle Speed', value: '12,000 RPM High-Torque' },
        { label: 'Spindle Taper', value: 'BT40 Big-Plus Dual Contact' },
        { label: 'Travel X/Y/Z', value: '650 / 520 / 475 mm' },
        { label: 'Positioning Accuracy', value: '±0.002 mm (2 microns)' },
        { label: 'Tool Changer', value: '30-Tool Automatic Carousel' },
        { label: 'Max Workpiece Weight', value: '500 kg' },
        { label: 'Controller', value: 'Makino Professional 6 CNC' },
        { label: 'Coolant', value: 'High-Pressure Through-Spindle' },
      ],
      stats: [
        { label: 'Spindle', value: '12,000 RPM' },
        { label: 'Accuracy', value: '±0.002 mm' },
        { label: 'Tool Capacity', value: '30 Pots' },
        { label: 'Die Hardness', value: 'Up to 62 HRC' },
      ],
    },
    featuredMachines: [
      {
        id: 'tm-01',
        name: 'MAKINO High-Precision CNC Vertical Machining Center',
        code: 'QTI/VMC-MC/01',
        make: 'MAKINO PRECISION',
        model: 'VMC-500 High-Speed',
        capacity: '12,000 RPM / BT40',
        tag: 'Die & Mold Cutting',
        image: '/images/machinery/vmc-machining-center.jpg',
        description:
          'High-speed machining of hardened die steels (D2, HCHCr, P20) for progressive stamping punches, blanking dies, and tight-tolerance fixture locators.',
        specs: [
          { label: 'X/Y/Z Stroke', value: '650 / 520 / 475 mm' },
          { label: 'Feed Rate', value: '36 m/min rapid traverse' },
          { label: 'Surface Finish', value: 'Ra 0.4 µm achievable' },
          { label: 'Glass Scales', value: 'Heidenhain linear encoders' },
        ],
        highlights: [
          'Sub-micron positioning repeatability',
          'Hard milling up to 62 HRC without EDM',
          'Dedicated toolroom CAD/CAM integration',
        ],
      },
      {
        id: 'tm-02',
        name: 'OKUMA & HOWA Precision Jig Boring Machine',
        code: 'QTI/JB-MC/01',
        make: 'OKUMA & HOWA',
        model: 'J-4500 High Precision',
        capacity: 'Micro-Boring & Coordinate Alignment',
        tag: 'Sub-Micron Hole Placement',
        image: '/images/machinery/jig-boring-mc.jpg',
        description:
          'Heavyweight precision jig boring machine utilized for dowel pin holes, guide pillar alignment, and die shoe reference positioning where micron accuracy is non-negotiable.',
        specs: [
          { label: 'Boring Diameter', value: 'Ø 2 mm to Ø 250 mm' },
          { label: 'Table Size', value: '1000 mm × 600 mm' },
          { label: 'Pitch Accuracy', value: '±0.0015 mm per 300 mm' },
          { label: 'Spindle Travel', value: '250 mm fine feed quill' },
        ],
        highlights: [
          'Guarantees perfect die punch-to-die plate alignment',
          'Temperature-stabilized spindle headstock',
          'Essential for high-speed multi-stage progressive dies',
        ],
      },
      {
        id: 'tm-03',
        name: 'RATHODE ENGINEERING Precision Hydraulic Surface Grinder',
        code: 'QTI/SG-MC/01',
        make: 'RATHODE ENGINEERING',
        model: 'HPSG-600 Micro-Feed',
        capacity: '600 mm × 300 mm Grinding Area',
        tag: 'Mirror Die Finishing',
        image: '/images/machinery/surface-grinder-mc.jpg',
        description:
          'Precision surface grinder with micro-step downfeed and high-grip electro-permanent magnetic chuck for grinding die plates, stripper pads, and forming blocks flat and parallel.',
        specs: [
          { label: 'Grinding Table Area', value: '600 mm × 300 mm' },
          { label: 'Downfeed Resolution', value: '0.001 mm (1 micron)' },
          { label: 'Parallelism', value: '0.003 mm across full table' },
          { label: 'Spindle Runout', value: '< 0.001 mm' },
        ],
        highlights: [
          'High surface parallelism for press tool alignment',
          'Coolant paper band filter for scratch-free mirror finish',
          'Equipped with digital readout (DRO) on all axes',
        ],
      },
      {
        id: 'tm-04',
        name: 'OKUMA & HOWA Precision Vertical Milling Machine',
        code: 'QTI/ML-MC/01',
        make: 'OKUMA & HOWA',
        model: 'FM-2V Heavy Duty',
        capacity: '1800 RPM Universal Spindle',
        tag: 'Heavy Toolroom Milling',
        image: '/images/tooling-hero.jpg',
        description:
          'Rigid vertical milling machine for heavy roughing of bolster plates, clamp blocks, jig bases, and custom fabricated assembly frames.',
        specs: [
          { label: 'Table Dimensions', value: '1370 mm × 300 mm' },
          { label: 'Spindle Speeds', value: '16 steps (65 – 1800 RPM)' },
          { label: 'Spindle Taper', value: 'NT50 Heavy Taper' },
          { label: 'Drive Motor', value: '5.5 kW High-Torque' },
        ],
        highlights: [
          'Handles large steel block roughing before CNC finishing',
          'Equipped with high-precision 3-axis digital readout',
          'Rigid dovetail and box ways for vibration-free cutting',
        ],
      },
    ],
  },

  'hydraulic-machines': {
    slug: 'hydraulic-machines',
    number: '03',
    title: 'Hydraulic Machines & Press Shop',
    headline: 'High-Tonnage Stamping, Progressive Presses & Hydraulic Forming',
    tagline: 'Controlled Force Engineering from 35-Ton to 160-Ton Capacity',
    description:
      '44 heavy pneumatic and hydraulic presses, hydraulic stretching machines, and automated straightener-feeders operational in our Hosur press shop. We handle high-volume progressive stamping, deep drawing, and structural blanking for automotive and industrial OEMs.',
    categoryFilterId: 'press-shop',
    metaBadge: '44 Production Presses • Up to 160-Ton Capacity',
    heroMachine: {
      name: 'SEYI & KOMATSU 160-TON Heavy Pneumatic Power Press',
      code: 'QTI/P-MC/14',
      make: 'SEYI / KOMATSU / AIDA',
      model: 'SN1-160 High Precision',
      capacity: '160-TON Stamping Force',
      badge: 'Flagship Press Stamping Center',
      image: '/images/machinery/press-160ton.jpg',
      description:
        'Heavy-duty straight-side pneumatic power press built for high-tonnage precision blanking, progressive stamping, and heavy gauge automotive brackets. Fitted with optical safety light curtains and hydraulic overload protection.',
      specs: [
        { label: 'Rated Capacity', value: '1600 kN (160 Metric Tons)' },
        { label: 'Stroke Length', value: '200 mm' },
        { label: 'Continuous Speed', value: '35 – 65 Strokes/Minute' },
        { label: 'Die Height (Shut Height)', value: '380 mm' },
        { label: 'Slide Adjustment', value: '100 mm motorized' },
        { label: 'Bolster Plate Area', value: '1250 mm × 760 mm' },
        { label: 'Safety System', value: 'Dual Optical Light Curtains & Two-Hand Interlock' },
        { label: 'Overload Protection', value: 'Instant Hydraulic Relieving System' },
      ],
      stats: [
        { label: 'Tonnage', value: '160 Tons' },
        { label: 'Stroke', value: '200 mm' },
        { label: 'Speed', value: '65 SPM' },
        { label: 'Bolster', value: '1.25 × 0.76 m' },
      ],
    },
    featuredMachines: [
      {
        id: 'hm-01',
        name: 'SEYI 160-TON Heavy Pneumatic Power Press',
        code: 'QTI/P-MC/14',
        make: 'SEYI MACHINERY',
        model: 'SN1-160 Heavy Duty',
        capacity: '160-TON Tonnage',
        tag: 'Progressive Blanking',
        image: '/images/machinery/press-160ton.jpg',
        description:
          'High-rigidity frame press with precision 6-point gibbing designed for progressive dies without eccentric deflection. Handles thick gauge automotive chassis components.',
        specs: [
          { label: 'Tonnage Rating', value: '160 Tons' },
          { label: 'Bolster Size', value: '1250 × 760 mm' },
          { label: 'Slide Stroke', value: '200 mm' },
          { label: 'Clutch Type', value: 'Wet Clutch & Brake System' },
        ],
        highlights: [
          'High repeatability on deep progressive stampings',
          'Low sound and vibration under maximum load',
          'Fitted with electronic die protection sensors',
        ],
      },
      {
        id: 'hm-02',
        name: 'AIDA 150-TON Precision Stamping Power Press',
        code: 'QTI/P-MC/12',
        make: 'AIDA ENGINEERING',
        model: 'NC1-150 Precision Series',
        capacity: '150-TON Tonnage',
        tag: 'High-Speed Forming',
        image: '/images/machinery/hydraulic-press-110t.jpg',
        description:
          'Japanese Aida precision press offering exceptional thermal stability and pinpoint bottom-dead-center accuracy for critical automotive and electrical stampings.',
        specs: [
          { label: 'Nominal Tonnage', value: '150 Metric Tons' },
          { label: 'Speed Range', value: '40 – 75 SPM variable' },
          { label: 'Slide Area', value: '700 × 550 mm' },
          { label: 'Shut Height', value: '350 mm' },
        ],
        highlights: [
          'Aida high-torque wet clutch mechanism',
          'Consistent part dimensions over million-cycle production',
          'Hydraulic overload relief protects expensive multi-stage dies',
        ],
      },
      {
        id: 'hm-03',
        name: 'SUZHOU YUEHAI 630KN Hydraulic Stretching Machine',
        code: 'QTI/HS-MC/02',
        make: 'SUZHOU YUEHAI MACHINERY',
        model: 'YHA-630KN Series',
        capacity: '630 KN Force (63 Tons)',
        tag: 'Hydraulic Stretching & Deep Draw',
        image: '/images/hydraulic-hero.jpg',
        description:
          'Specialized deep-draw hydraulic stretching press with programmable blank holder cushion pressure for deep cupping and wrinkle-free sheet stretch forming.',
        specs: [
          { label: 'Main Ram Force', value: '630 kN' },
          { label: 'Cushion Force', value: '250 kN controllable' },
          { label: 'Max Ram Stroke', value: '500 mm' },
          { label: 'Working Table', value: '800 × 800 mm' },
        ],
        highlights: [
          'Proportional valve control for smooth pressure ramp-up',
          'Prevents thinning and tearing on complex drawn geometries',
          'Ideal for oil pans, motor covers, and cylindrical canisters',
        ],
      },
      {
        id: 'hm-04',
        name: 'ORII High-Speed Coil Straightener & Servo Feeder',
        code: 'QTI/SF-MC/01',
        make: 'ORII & MEC',
        model: 'LCC-03 Series',
        capacity: '3.0 mm Max Strip Thickness',
        tag: 'Automated Coil Feeding',
        image: '/images/machinery/press-160ton.jpg',
        description:
          'Automated coil unwinding, leveling, and CNC servo roll feeding system integrated directly with our 110T-160T presses for continuous lights-out stamping.',
        specs: [
          { label: 'Max Strip Width', value: '300 mm' },
          { label: 'Strip Thickness Range', value: '0.5 mm to 3.2 mm' },
          { label: 'Feed Pitch Accuracy', value: '±0.05 mm' },
          { label: 'Straightening Rolls', value: '7 precision ground rolls' },
        ],
        highlights: [
          'Eliminates coil curl and residual stress before stamping',
          'High-speed digital servo pitch synchronization',
          'Minimizes operator manual loading hazards',
        ],
      },
    ],
  },

  'welding': {
    slug: 'welding',
    number: '04',
    title: 'Welding & Robotic Assembly',
    headline: '6-Axis Robotic Welding Automation, Projection & Spot Welding',
    tagline: 'High-Integrity Welds Built for Structural Rigidity and Zero Defects',
    description:
      '23 welding stations comprising Yaskawa 6-axis robotic welding cells, 400A digital pulse MIG stations, Acrtech projection welders, Nash spot welders, and precision laser welders in our Hosur plant. Serving critical automotive subassemblies and heavy structural frames.',
    categoryFilterId: 'welding',
    metaBadge: 'Yaskawa 6-Axis Robotics • 23 Welding Stations',
    heroMachine: {
      name: 'YASKAWA 6-Axis Robotic Welding Automation Cell',
      code: 'QTI/RW-MC/01 & 02',
      make: 'YASKAWA MOTOMAN',
      model: 'AR1440 Heavy Robot Arm',
      capacity: '350 - 400 AMP Pulse MIG/MAG',
      badge: 'Flagship Robotic Welding Automation',
      image: '/images/machinery/robotic-welding-cell.jpg',
      description:
        'Industrial 6-axis articulated robot cell fitted with integrated dual-axis welding positioner, collision-sensing torch, and Megmeet digital inverter power source for continuous spatter-free structural seams.',
      specs: [
        { label: 'Degrees of Freedom', value: '6-Axis Articulated Robot Arm' },
        { label: 'Reach Radius', value: '1440 mm horizontal reach' },
        { label: 'Payload Capacity', value: '12 kg at wrist' },
        { label: 'Repeatability', value: '±0.02 mm' },
        { label: 'Welding Power Source', value: 'Megmeet Artsen Plus 400A' },
        { label: 'Positioner Table', value: 'Dual Station 500kg Turntable' },
        { label: 'Welding Process', value: 'Pulsed MIG/MAG & Low Spatter' },
        { label: 'Safety Enclosure', value: 'Interlocked Light Curtains & Arc Shields' },
      ],
      stats: [
        { label: 'Axes', value: '6-Axis' },
        { label: 'Welding Current', value: '400 A' },
        { label: 'Repeatability', value: '±0.02 mm' },
        { label: 'Duty Cycle', value: '100% at 350A' },
      ],
    },
    featuredMachines: [
      {
        id: 'wd-01',
        name: 'YASKAWA Motoman AR1440 Robotic Welding Cell',
        code: 'QTI/RW-MC/01',
        make: 'YASKAWA',
        model: 'Motoman AR1440 / YRC1000',
        capacity: '350A Digital Pulse MIG',
        tag: 'Automated Arc Welding',
        image: '/images/machinery/robotic-welding-cell.jpg',
        description:
          'High-speed arc welding robot delivering perfectly uniform weld beads on automotive suspension arms, brackets, and tubular chassis frames with zero human fatigue.',
        specs: [
          { label: 'Arm Reach', value: '1440 mm' },
          { label: 'Robot Controller', value: 'Yaskawa YRC1000' },
          { label: 'Torch Cleaner', value: 'Automatic Reamer & Anti-Spatter Sprayer' },
          { label: 'Joint Types', value: 'Lap, Butt, Fillet, Pipe-to-Plate' },
        ],
        highlights: [
          'Guaranteed penetration and consistent throat thickness',
          'Eliminates weld spatter for direct powder coating finish',
          'Dual station layout allows loading while welding continues',
        ],
      },
      {
        id: 'wd-02',
        name: 'GI.EN-LASER Precision Laser Welding Station',
        code: 'QTI/LW-MC/01',
        make: 'GI.EN-LASER',
        model: 'GW-1000 Laser Center',
        capacity: '1000W Fiber Laser Beam',
        tag: 'Precision Laser Welding',
        image: '/images/machinery/laser-welder-mc.jpg',
        description:
          'Ultra-fine heat control laser welding station for joining thin-walled sheet metal, stainless battery boxes, and aesthetic cosmetic enclosures without burn-through.',
        specs: [
          { label: 'Laser Power', value: '1 kW Continuous / Pulsed' },
          { label: 'Weld Seam Width', value: '0.5 mm to 2.5 mm' },
          { label: 'Heat Distortion', value: 'Negligible (No rework needed)' },
          { label: 'Materials', value: 'SS304, Mild Steel, Aluminium, Copper' },
        ],
        highlights: [
          'Up to 4x faster than conventional TIG welding',
          'Clean, polished weld seam eliminates post-weld grinding',
          'Hermetic seal capability for pressure-tight vessels',
        ],
      },
      {
        id: 'wd-03',
        name: 'ACRTECH 10KV Industrial Projection Welder',
        code: 'QTI/PW-MC/01',
        make: 'ACRTECH',
        model: 'PW-10KV Pneumatic',
        capacity: '10 KVA / Heavy Projection Force',
        tag: 'Fastener & Nut Projection',
        image: '/images/welding-hero.jpg',
        description:
          'High-force pneumatic projection welder specifically designed for welding weld nuts, weld studs, and multi-point embossed sheet reinforcements.',
        specs: [
          { label: 'Throat Depth', value: '450 mm' },
          { label: 'Electrode Force', value: 'Up to 800 daN pneumatic' },
          { label: 'Microprocessor Control', value: 'Constant Current Secondary Feedback' },
          { label: 'Nut Sizes', value: 'M4 to M12 standard weld nuts' },
        ],
        highlights: [
          'High torque-out resistance on welded automotive nuts',
          'Zero thread damage with specialized copper locators',
          'Pneumatic rapid follow-up ram for consistent forging',
        ],
      },
      {
        id: 'wd-04',
        name: 'NASH 75 KVA Heavy Industrial Spot Welder',
        code: 'QTI/SW-MC/01',
        make: 'NASH',
        model: 'SW-75 Rocker Arm',
        capacity: '75 KVA High Output',
        tag: 'Sheet Metal Spot Welding',
        image: '/images/welding-hero.jpeg',
        description:
          'Heavy duty resistance spot welding machine for joining sheet metal panels, cabinet enclosures, and multi-layer automotive reinforcement flanges.',
        specs: [
          { label: 'Nominal Power', value: '75 kVA at 50% duty cycle' },
          { label: 'Throat Clearance', value: '600 mm reach' },
          { label: 'Max Sheet Gauge', value: '3.0 mm + 3.0 mm mild steel' },
          { label: 'Water Cooling', value: 'Closed-loop chilled electrode cooling' },
        ],
        highlights: [
          'High shear strength nugget formation tested to AWS standards',
          'Adjustable squeeze, weld, hold, and off cycle timers',
          'Water-cooled chromium copper alloy electrode arms',
        ],
      },
    ],
  },

  'powder-coating': {
    slug: 'powder-coating',
    number: '05',
    title: 'Powder Coating & Curing',
    headline: 'Automated Conveyorized Electrostatic Powder Coating Line',
    tagline: 'Durable Protective & Aesthetic Surface Finishing Built to Last',
    description:
      'Complete powder coating division featuring 3 dedicated color booths (Silver, Green, Black), automated overhead transport conveyor, Twin City 15kW high-flow oven blowers, and Danfoss temperature-regulated curing ovens in our Hosur facility.',
    categoryFilterId: 'powder-coating',
    metaBadge: '3 Dedicated Booths • Automated Overhead Conveyor',
    heroMachine: {
      name: 'PARI Multi-Booth Electrostatic Conveyorized Powder Coating Line',
      code: 'QTI/PC-MC/01, 02, 03',
      make: 'PARI INDUSTRIES / DANFOSS',
      model: 'PC-Line Conveyorized Series',
      capacity: '15 KW Blower / 3 Dedicated Booths',
      badge: 'Flagship Surface Coating Line',
      image: '/images/machinery/powder-coating-line.jpg',
      description:
        'Continuous automated overhead conveyor powder coating system equipped with electrostatic spray guns, high-efficiency powder cyclone recovery, and multi-zone hot air circulation curing ovens.',
      specs: [
        { label: 'Number of Booths', value: '3 Dedicated Color Booths (Silver, Green, Black)' },
        { label: 'Conveyor Speed', value: '0.8 – 2.5 m/min adjustable' },
        { label: 'Oven Blower Motor', value: '15 kW Twin City Fan System' },
        { label: 'Curing Temperature', value: '180°C – 220°C precisely regulated' },
        { label: 'Burner System', value: 'Danfoss 0.4 kW Automatic Gas Burner' },
        { label: 'Dry Film Thickness (DFT)', value: '60 – 90 microns uniform' },
        { label: 'Corrosion Resistance', value: '500+ Hours Salt Spray Test (ASTM B117)' },
        { label: 'Powder Recovery', value: 'Multi-Cyclone with 98% powder reuse' },
      ],
      stats: [
        { label: 'Booths', value: '3 Units' },
        { label: 'Curing Temp', value: '220°C' },
        { label: 'DFT Range', value: '60–90 µm' },
        { label: 'Salt Spray', value: '500+ Hours' },
      ],
    },
    featuredMachines: [
      {
        id: 'pc-01',
        name: 'PARI Silver, Green & Black Powder Coating Spray Booths',
        code: 'QTI/PC-MC/01-03',
        make: 'PARI INDUSTRIES',
        model: 'Tri-Color Dedicated System',
        capacity: 'Multi-Gun Electrostatic Spray',
        tag: 'Multi-Color Application',
        image: '/images/machinery/powder-coating-line.jpg',
        description:
          'Dedicated booths eliminating color cross-contamination. Fitted with electrostatic charging corona guns delivering uniform wraparound coverage on complex fabricated parts.',
        specs: [
          { label: 'Working Opening', value: '1500 mm H × 800 mm W' },
          { label: 'Spray Guns', value: 'High-voltage cascade electrostatic guns' },
          { label: 'Recovery System', value: 'Cartridge filter pulse jet cleaning' },
          { label: 'Air Extraction', value: 'Negative draft downdraft ventilation' },
        ],
        highlights: [
          'No color cross-contamination between batch runs',
          'Excellent corner and recessed crevice penetration',
          'Complies with environmental emission standards',
        ],
      },
      {
        id: 'pc-02',
        name: 'TWIN CITY FAN 15KW Industrial Oven Blower Units',
        code: 'QTI/PC0-MC/01 & 02',
        make: 'TWIN CITY FAN INDIA',
        model: 'TCF-15KW High Temp',
        capacity: '15 KW High-Flow Air Circulation',
        tag: 'Thermal Air Circulation',
        image: '/images/powder-coating-hero.jpg',
        description:
          'High-volume forced hot air circulation blowers ensuring uniform temperature gradient across all points of the baking oven chamber for complete polymer crosslinking.',
        specs: [
          { label: 'Motor Power', value: '15 kW × 2 Units' },
          { label: 'Air Volume Flow', value: '12,000 CFM' },
          { label: 'Operating Temp', value: 'Up to 250°C continuous' },
          { label: 'Impeller Design', value: 'Heat-dissipating backward inclined alloy' },
        ],
        highlights: [
          'Zero cold spots across the entire curing tunnel',
          'Ensures uniform gloss and impact-resistant adhesion',
          'Thermally insulated casing minimizes heat loss',
        ],
      },
      {
        id: 'pc-03',
        name: 'DANFOSS Automatic High-Efficiency Oven Burners',
        code: 'QTI/PCB-MC/01',
        make: 'DANFUSS',
        model: 'DF-04 Precision Burner',
        capacity: '0.4 KW Modulating Flame Control',
        tag: 'Precision Thermal Control',
        image: '/images/powder-coating-hero.jpeg',
        description:
          'Fully modulated gas burners paired with digital PID controllers to maintain curing oven air temperature within ±2°C of setpoint.',
        specs: [
          { label: 'Thermal Output', value: '250,000 kcal/hr' },
          { label: 'Fuel Source', value: 'LPG / Natural Gas with SafeCon Vaporizer' },
          { label: 'Temperature Tolerance', value: '±2°C across baking cycle' },
          { label: 'Safety Interlocks', value: 'Flame ionization sensor & purge cycle' },
        ],
        highlights: [
          'Fast heat-up time from cold start',
          'Clean combustion eliminates soot on finished surfaces',
          'Automatic flame modulation reduces energy consumption',
        ],
      },
      {
        id: 'pc-04',
        name: 'PARI Automated Overhead Monorail Conveyor Transport',
        code: 'QTI/PCC-MC/01',
        make: 'PARI INDUSTRIES',
        model: 'Heavy Duty 5 HP Monorail',
        capacity: '5 HP Motor / 50 kg per hanger',
        tag: 'Automated Transport Track',
        image: '/images/machinery/powder-coating-line.jpg',
        description:
          'Continuous enclosed-track overhead conveyor transporting components seamlessly from booth spraying through the baking tunnel to the cooling inspection zone.',
        specs: [
          { label: 'Drive Power', value: '5 HP Variable Frequency Drive (VFD)' },
          { label: 'Track Length', value: '120 meters closed loop' },
          { label: 'Hanger Pitch', value: '600 mm spacing' },
          { label: 'Max Load per Hanger', value: '50 kg' },
        ],
        highlights: [
          'Variable speed adjustment matching component thickness',
          'Bi-planar track negotiates tight horizontal & vertical turns',
          'Lubrication-free sealed bearings inside heated zones',
        ],
      },
    ],
  },

  'phosphating': {
    slug: 'phosphating',
    number: '06',
    title: 'Phosphating & Surface Pre-Treatment',
    headline: 'Multi-Stage Chemical Immersion Phosphating & Conversion Line',
    tagline: 'Foundational Corrosion Protection, Pre-Treatment & Coating Bonding',
    description:
      'Complete chemical pre-treatment division featuring multi-stage immersion tanks, Danfoss heated degreasing and phosphating burners, Riello dry-off ovens, and a 25 HP heavy-duty shot blasting unit in Hosur. Creating the foundational crystal conversion layer for maximum paint adhesion.',
    categoryFilterId: 'powder-coating',
    metaBadge: '7-Tank Immersion Process • 25 HP Shot Blasting',
    heroMachine: {
      name: 'Multi-Stage Chemical Immersion Phosphating & Pre-Treatment Line',
      code: 'QTI/PSB & DGB Line',
      make: 'DANFUSS / RIELLO / QTI',
      model: '7-Stage Zinc Phosphating Line',
      capacity: 'Multi-Stage Immersion with Hoist System',
      badge: 'Flagship Pre-Treatment Facility',
      image: '/images/machinery/phosphating-line-hero.jpg',
      description:
        'Complete automated surface preparation system comprising chemical degreasing, acid pickling, surface activation, fine-grain zinc phosphating conversion, and hot de-mineralized passivation sealing.',
      specs: [
        { label: 'Process Sequence', value: '7-Stage Immersion: Degrease → Rinse → Derust → Rinse → Activate → Phosphate → Passivate' },
        { label: 'Tank Volume', value: '3,000 Liters per process tank' },
        { label: 'Heating Method', value: 'Danfoss 0.4kW Immersion Burners' },
        { label: 'Coating Type', value: 'Fine-Grain Zinc / Iron Phosphate Conversion' },
        { label: 'Coating Weight', value: '2.5 – 4.5 g/m² (ISO 9717 compliant)' },
        { label: 'Dry-Off Oven', value: 'Riello 3.7kW Hot Air Dry-Off Station' },
        { label: 'Material Handling', value: 'Motorized Overhead Hoist Crane System' },
        { label: 'Corrosion Standard', value: 'ASTM B117 / IS 3618 Class A' },
      ],
      stats: [
        { label: 'Process', value: '7 Stages' },
        { label: 'Coating Weight', value: '2.5–4.5 g/m²' },
        { label: 'Tank Volume', value: '3,000 L' },
        { label: 'Standard', value: 'ISO 9717' },
      ],
    },
    featuredMachines: [
      {
        id: 'ph-01',
        name: 'Multi-Stage Stainless Steel Immersion Phosphating Tank Line',
        code: 'QTI/PSB-MC/01',
        make: 'QTI / DANFUSS',
        model: 'PT-3000 Immersion Fleet',
        capacity: '3,000 Liter Chemical Immersion Tanks',
        tag: 'Surface Conversion Tanks',
        image: '/images/machinery/phosphating-line-hero.jpg',
        description:
          'Heavy gauge acid-resistant tanks designed for uniform chemical conversion coating, stripping scale, and creating micro-crystalline keying teeth for long term powder adhesion.',
        specs: [
          { label: 'Tank Construction', value: 'SS316L Chemical Grade Stainless Steel' },
          { label: 'Heating Coils', value: 'Indirect titanium heating tubes' },
          { label: 'Fume Extraction', value: 'Side-lip scrubbed exhaust ventilation' },
          { label: 'Control', value: 'Digital temperature & concentration logging' },
        ],
        highlights: [
          'Ensures 100% internal and external surface coverage',
          'Fine-grain crystalline structure stops under-film corrosion',
          'Essential prerequisite for automotive chassis coatings',
        ],
      },
      {
        id: 'ph-02',
        name: 'DANFOSS Chemical Degreasing & Heated Phosphating Burners',
        code: 'QTI/DGB-MC/01',
        make: 'DANFUSS',
        model: 'KOD / DGB Precision Series',
        capacity: '0.4 KW Immersion Heat Source',
        tag: 'Heated Chemical Treatment',
        image: '/images/phosphating-hero.jpg',
        description:
          'Heated burner units maintaining alkaline degreasing tanks at 65°C – 75°C to saponify and eliminate all machining oils, stamping lubricants, and greases before acid conversion.',
        specs: [
          { label: 'Heating Output', value: '180,000 kcal/hr per burner' },
          { label: 'Operating Temp', value: '65°C – 75°C tightly regulated' },
          { label: 'Thermocouple', value: 'PT100 chemical-sheathed sensors' },
          { label: 'Ignition', value: 'Electronic spark with flame monitoring' },
        ],
        highlights: [
          'Complete oil and lubricant removal verified by water break test',
          'Ensures spotless chemical contact for phosphating reagents',
          'Low-maintenance stainless combustion chambers',
        ],
      },
      {
        id: 'ph-03',
        name: 'RIELLO Hot Air Dry-Off Baking Oven & Blower Station',
        code: 'QTI/DO-MC/01',
        make: 'RIELLO',
        model: 'DO-3.7KW Oven Station',
        capacity: '3.7 KW Blower / 120°C Rapid Dry',
        tag: 'Moisture Evaporation',
        image: '/images/phosphating-hero.jpeg',
        description:
          'Dedicated dry-off oven immediately evaporating all residual moisture and water droplets from parts exiting the passivation tank before powder application.',
        specs: [
          { label: 'Blower Power', value: '3.7 kW centrifugal fan' },
          { label: 'Operating Temp', value: '110°C – 130°C hot dry air' },
          { label: 'Air Circulation', value: 'Downward laminar heated airflow' },
          { label: 'Cycle Time', value: '8 – 12 minutes rapid drying' },
        ],
        highlights: [
          'Prevents flash rust on freshly phosphated steel',
          'Eliminates pinholes and bubbling in subsequent powder coating',
          'Energy-efficient recirculation plenum chamber',
        ],
      },
      {
        id: 'ph-04',
        name: 'Industrial Heavy Duty 25 HP Shot Blasting Chamber',
        code: 'QTI/SB-MC/01',
        make: 'QTI INDUSTRIAL',
        model: 'SB-25HP Wheel Blast',
        capacity: '25 HP Blast Turbine / Sa 2.5 Profile',
        tag: 'Mechanical Scale Removal',
        image: '/images/machinery/phosphating-line-hero.jpg',
        description:
          'High-power centrifugal wheel shot blasting unit for descaling heavy hot-rolled steel plates, weldments, and forgings to Sa 2.5 white-metal purity before chemical treatment.',
        specs: [
          { label: 'Drive Motor', value: '25 HP High-Velocity Blast Wheel' },
          { label: 'Abrasive Media', value: 'Steel Shot S280 / S330 & Grit G40' },
          { label: 'Surface Profile', value: 'Sa 2.5 / 40 – 70 µm anchor pattern' },
          { label: 'Dust Collector', value: 'Pulse-jet cartridge filtration unit' },
        ],
        highlights: [
          'Removes stubborn mill scale, heavy rust, and weld slag',
          'Produces mechanical anchor profile for maximum adhesion',
          'Handles fabricated assemblies and heavy plate blanks',
        ],
      },
    ],
  },
};
