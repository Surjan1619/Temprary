export const productsData = [
  {
    id: 'sectional',
    icon: 'sectional',
    brand: 'alutech',
    title: 'Sectional Doors',
    subtitle: 'Prestige · Trend',
    img: '/images/section-door.avif',
    gallery: [],
    deepDescription: <>
      <div className="mt-10 first:mt-0">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">TWO SERIES TO CHOOSE FROM</h3>
        <p className="mt-2 leading-relaxed text-white/50">Compare the budget-friendly <strong className="text-white/80">Trend</strong> series and premium <strong className="text-white/80">Prestige</strong> series sectional doors. Prestige delivers enhanced energy efficiency, unique structural solutions, and unlimited design options. Trend offers an optimal price-to-quality ratio with energy efficiency and safety features in the standard package.</p>
      </div>
      <div className="mt-10">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">ENERGY EFFICIENCY AND INSULATION</h3>
        <p className="mt-2 leading-relaxed text-white/50">All models feature a polyurethane (PUR) foam core providing excellent thermal insulation with a U-value of 1.35–0.99 W/(m²·K). Trend's 40 mm panels and Prestige's 45 mm panels significantly reduce heat loss and ensure a comfortable indoor climate.</p>
      </div>
      <div className="mt-10">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">CORROSION RESISTANCE</h3>
        <p className="mt-2 leading-relaxed text-white/50">The multi-layer PUR–PA coating (20–25 µm polyurethane + 16 µm zinc) withstands 750 hours of salt spray testing, equivalent to 15 years of operation in coastal areas. The 10-year anti-corrosion warranty confirms the product's durability.</p>
      </div>
      <div className="mt-10">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">SMART AUTOMATION</h3>
        <p className="mt-2 leading-relaxed text-white/50">The doors are compatible with smart home systems, remote control, and IoT platforms. Dual roller hinges (Prestige) and EPDM seals ensure quiet and smooth operation. The electric motor is equipped with an emergency manual release mechanism.</p>
      </div>
    </>,
    series: [
      {
        name: 'Prestige',
        desc: 'Enhanced energy efficiency, unique structural solutions, unlimited design options. 45 mm sandwich panels, double EPDM seals, stainless steel hardware.',
      },
      {
        name: 'Trend',
        desc: 'Optimal price-to-quality ratio, energy efficiency, safety features in standard package. 40 mm PUR foam panels, galvanized steel hardware.',
      },
    ],
    specs: [
      { label: 'Panel thickness', value: '40 mm (Trend) / 45 mm (Prestige)' },
      { label: 'Steel sheet thickness', value: '0.4–0.5 mm (galvanized)' },
      { label: 'Thermal insulation (U-value)', value: '1.35 W/(m²·K) — 0.99 W/(m²·K)' },
      { label: 'Sound insulation', value: 'Up to 30 dB' },
      { label: 'Wind load class (EN 12424)', value: 'Class 3–4 (up to 120 km/h)' },
      { label: 'Spring cycles', value: '25,000 (standard) / up to 100,000' },
      { label: 'Seals', value: 'EPDM (single-leaf Trend / double-leaf Prestige)' },
      { label: 'Coating', value: 'PUR–PA 20–25 µm + zinc 16 µm' },
      { label: 'Salt spray resistance', value: '750 hours (15 years in coastal area)' },
      { label: 'Rails', value: '2" galvanized steel, sealed ball bearings' },
      { label: 'Safety', value: 'Anti-finger trap, photocell, safety edge' },
      { label: 'Max size', value: '8000 × 6000 mm' },
      { label: 'Warranty', value: '10 years anti-corrosion / 2 years mechanism' },
    ],
    benefits: [
      { title: 'Energy Efficiency', desc: 'PUR foam core provides excellent thermal insulation, reducing heating costs by up to 30%.' },
      { title: 'Corrosion Resistance', desc: 'Multi-layer PUR–PA coating withstands 750 hours of salt spray testing.' },
      { title: 'Quiet Operation', desc: 'Dual roller hinges and EPDM seals ensure quiet and smooth operation.' },
      { title: 'Smart Automation', desc: 'Compatible with smart home systems, remote control, and IoT platforms.' },
    ],
    features: [
      '45 mm sandwich panels Prestige',
      '40 mm PUR foam Trend',
      'Double EPDM seals',
      '10 years anti-corrosion warranty',
      'Installation: 7–15 days',
    ],
  },
  {
    id: 'side-door',
    icon: 'sideDoor',
    brand: 'alutech',
    title: 'Side Doors',
    subtitle: 'Alutech · Side Door',
    img: '/images/side-door.avif',
    gallery: [],
    deepDescription: <>
      <div className="mt-10 first:mt-0">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">SEPARATE ENTRANCE</h3>
        <p className="mt-2 leading-relaxed text-white/50"><strong className="text-white/80">Alutech</strong> side doors provide a convenient separate entrance and exit from the garage without opening the main door. They close hermetically, preventing cold air, moisture, and dust from entering the space. Suitable for both detached and attached garages.</p>
      </div>
      <div className="mt-10">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">UNIFIED DESIGN</h3>
        <p className="mt-2 leading-relaxed text-white/50">The door is made from the same sandwich panels as the main door and is finished in a unified style with the same RAL color and relief. 3D adjustable stainless steel hinges allow precise alignment in three planes.</p>
      </div>
      <div className="mt-10">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">7 REASONS TO CHOOSE</h3>
        <p className="mt-2 leading-relaxed text-white/50"><strong className="text-white/80">High quality</strong>, <strong className="text-white/80">reliability</strong>, <strong className="text-white/80">custom manufacturing</strong>, <strong className="text-white/80">unified style</strong>, <strong className="text-white/80">airtightness</strong>, <strong className="text-white/80">security</strong>, and <strong className="text-white/80">long service life</strong>. The multi-point locking system provides 3+ locking points, and EPDM perimeter seals eliminate drafts.</p>
      </div>
    </>,
    series: [
      {
        name: 'Alutech Side Door',
        desc: 'Separate entrance for the garage, made in a unified style with the main door. The side door is equipped with 3D adjustable hinges, multi-point lock, and EPDM perimeter seals.',
      },
    ],
    specs: [
      { label: 'Construction', value: 'Sandwich panel (same as sectional doors)' },
      { label: 'Panel thickness', value: '40 mm / 45 mm' },
      { label: 'Frame', value: 'Galvanized steel goalpost frame' },
      { label: 'Hinges', value: '3D adjustable, stainless steel' },
      { label: 'Lock', value: 'Multi-point locking system' },
      { label: 'Seals', value: 'EPDM perimeter seal' },
      { label: 'Opening side', value: 'Left/right, inward/outward opening' },
      { label: 'Color', value: 'Any RAL color (matching the door)' },
      { label: 'Glazing', value: 'PC polycarbonate (optional)' },
      { label: 'Warranty', value: '2 years' },
    ],
    benefits: [
      { title: 'Unified Style', desc: 'The door matches the main door in design and color.' },
      { title: 'Airtightness', desc: 'EPDM perimeter seals eliminate drafts and dust.' },
      { title: '3D Adjustment', desc: 'Hinges allow precise position adjustment.' },
      { title: 'Multi-Point Security', desc: 'Locking system provides 3+ locking points.' },
    ],
    features: [
      'Alutech, custom sizes',
      'Unified design with the main door',
      'EPDM perimeter seal',
      '3D adjustable hinges',
      'Installation: 7–15 days',
    ],
  },
  {
    id: 'roller',
    icon: 'roller',
    brand: 'alutech',
    title: 'Roller Doors',
    subtitle: 'Prestige · Trend',
    img: '/images/rolling-door.webp',
    gallery: ['/images/roller_1.jpg', '/images/roller_2.jpg', '/images/roller_3.jpeg'],
    deepDescription: <>
      <div className="mt-10 first:mt-0">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">TWO SERIES TO CHOOSE FROM</h3>
        <p className="mt-2 leading-relaxed text-white/50">The <strong className="text-white/80">Prestige</strong> series features extruded aluminum profiles with high-density PU foam filling and reinforced anti-vandal protection. The <strong className="text-white/80">Trend</strong> series is an economical option with roll-formed steel profiles, popular RAL colors, and basic safety features.</p>
      </div>
      <div className="mt-10">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">COMPACT AND MODERN</h3>
        <p className="mt-2 leading-relaxed text-white/50">Roller doors are installed above the opening with an integrated shutter box, occupying no interior or exterior space. Suitable for any architectural style. Fast custom production and a <strong className="text-white/80">2-year official warranty</strong>.</p>
      </div>
      <div className="mt-10">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">MULTI-LAYER PROTECTION</h3>
        <p className="mt-2 leading-relaxed text-white/50">Proven break-in resistance with anti-lift brackets, anti-drill locks, and reinforced guides. Fire-resistant EI60 certification is also available. The tubular electric motor (230V) is equipped with an emergency manual release mechanism.</p>
      </div>
    </>,
    series: [
      {
        name: 'Prestige',
        desc: 'Extruded aluminum profiles with high-density PU foam filling, reinforced anti-vandal protection.',
      },
      {
        name: 'Trend',
        desc: 'Roll-formed profiles with standard filling, popular RAL colors, basic anti-vandal protection.',
      },
    ],
    specs: [
      { label: 'Profiles', value: 'Extruded aluminum (Prestige) / steel (Trend)' },
      { label: 'Filling', value: 'High-density PU foam / standard' },
      { label: 'Shutter box', value: 'Integrated, powder-coated, aluminum' },
      { label: 'Guides', value: 'Aluminum extrusion with brush seals' },
      { label: 'Motor', value: 'Tubular, 230V, emergency manual release' },
      { label: 'Safety', value: 'Anti-lift, anti-drill, photocell' },
      { label: 'Max width', value: '6000 mm' },
      { label: 'Max area', value: '16 m²' },
      { label: 'Wind load', value: 'Class 2–3' },
      { label: 'RAL shades', value: '13+ standard colors' },
      { label: 'Warranty', value: '2 years' },
    ],
    benefits: [
      { title: 'Compactness', desc: 'Installed above the opening, occupying no space.' },
      { title: 'Anti-Vandal Protection', desc: 'Anti-lift brackets and reinforced guides.' },
      { title: 'Fire Resistance', desc: 'Optional up to EI60 certification.' },
      { title: 'Fast Ordering', desc: 'Quick production cycle — standard sizes in stock.' },
    ],
    features: [
      'Extruded aluminum profiles',
      'PU foam thermal insulation',
      'Integrated shutter box',
      'Fast production',
      'Installation: 7–15 days',
    ],
  },
  {
    id: 'sliding',
    icon: 'sliding',
    brand: 'alutech',
    title: 'Automatic Sliding Gates',
    subtitle: 'Cantilever · Trackless',
    img: '/images/industial-door.avif',
    gallery: [],
    deepDescription: <>
      <div className="mt-10 first:mt-0">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">12 INSTALLATION TYPES</h3>
        <p className="mt-2 leading-relaxed text-white/50"><strong className="text-white/80">12 installation types</strong> allow you to account for any site's specific features and make the most efficient use of the working area. The cantilever trackless system eliminates the need for ground rails, enabling installation on slopes and uneven surfaces.</p>
      </div>
      <div className="mt-10">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">TWO SERIES TO CHOOSE FROM</h3>
        <p className="mt-2 leading-relaxed text-white/50"><strong className="text-white/80">ProPlus</strong> (45 mm panels) is designed for spaces with high energy efficiency requirements. <strong className="text-white/80">ProTrend</strong> (40 mm panels) is ideal for facilities with less stringent thermal insulation requirements. Both series operate with openings up to 15,000 mm.</p>
      </div>
      <div className="mt-10">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">AI ACCESS CONTROL</h3>
        <p className="mt-2 leading-relaxed text-white/50">ProPlus is equipped with an integrated camera featuring AI license plate recognition, providing keyless entry. The motor (0.5–1.5 HP) operates on 230/400V 3-phase power. The backup battery ensures operation during power outages.</p>
      </div>
    </>,
    series: [
      {
        name: 'ProPlus',
        desc: '45 mm sandwich panels, high energy efficiency, integrated camera with AI license plate recognition.',
      },
      {
        name: 'ProTrend',
        desc: '40 mm panels, motor for openings up to 27\', photocell as standard.',
      },
    ],
    specs: [
      { label: 'Panels', value: '45 mm (ProPlus) / 40 mm (ProTrend)' },
      { label: 'System', value: 'Cantilever (trackless)' },
      { label: 'Counterbalance', value: '50% of gate length' },
      { label: 'Max opening', value: 'Up to 15,000 mm' },
      { label: 'Motor', value: '0.5–1.5 HP, 230/400V 3-phase' },
      { label: 'Speed', value: '0.2–0.4 m/s' },
      { label: 'Control', value: 'AI license plate recognition, smartphone, remote' },
      { label: 'Safety', value: 'Photocell, edge sensors, warning light' },
      { label: 'Springs', value: '50,000 – 100,000 cycles' },
      { label: 'Battery', value: 'Backup power supply during outages' },
      { label: 'Warranty', value: '2 years' },
    ],
    benefits: [
      { title: 'Trackless Technology', desc: 'Cantilever system eliminates the need for ground rails.' },
      { title: 'AI Access Control', desc: 'Automatic license plate recognition, keyless entry.' },
      { title: '12 Installation Options', desc: 'Suitable for any terrain and space.' },
      { title: 'Energy Efficiency', desc: '45 mm PUR panels meeting international standards.' },
    ],
    features: [
      'Cantilever trackless system',
      'AI license plate recognition',
      'Max opening: up to 15 m',
      '50–100K cycle springs',
      'Installation: 7–15 days',
    ],
  },
  {
    id: 'high-speed',
    icon: 'highSpeed',
    brand: 'alutech',
    title: 'High-Speed Doors',
    subtitle: 'TurboFlex · TurboRoll',
    img: '/images/High-speed-gates.webp',
    gallery: [],
    deepDescription: <>
      <div className="mt-10 first:mt-0">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">TWO TECHNOLOGIES</h3>
        <p className="mt-2 leading-relaxed text-white/50"><strong className="text-white/80">TurboFlex</strong> roll-up doors with a flexible PVC curtain are ideal for production and logistics cycles. <strong className="text-white/80">TurboRoll</strong> spiral doors with rigid aluminum slats provide high wind load resistance. Both models are equipped with a frequency inverter and PLC control.</p>
      </div>
      <div className="mt-10">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">ULTRA-HIGH SPEED</h3>
        <p className="mt-2 leading-relaxed text-white/50">Opening speed up to <strong className="text-white/80">2 m/s</strong>, closing at 1 m/s. Operating life of up to <strong className="text-white/80">1,500,000</strong> cycles. This reduces the duty cycle by 70% and ensures up to 10 years of intensive operation. Fast closing reduces heat loss by 40%.</p>
      </div>
      <div className="mt-10">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">DURABILITY AND SAFETY</h3>
        <p className="mt-2 leading-relaxed text-white/50">Wind load class: Class 3–4 (up to 120 km/h). Operating temperature range: −30°C to +60°C. The bottom sensitive safety edge and photocells prevent accidents. 2-year official Alutech warranty.</p>
      </div>
    </>,
    series: [
      {
        name: 'TurboFlex',
        desc: 'Roll-type high-speed door with flexible curtain. Opening speed up to 2 m/s.',
      },
      {
        name: 'TurboRoll',
        desc: 'Spiral-type door with rigid aluminum slats. 1,500,000 cycle service life.',
      },
    ],
    specs: [
      { label: 'Opening speed', value: 'Up to 2.0 m/s (TurboRoll)' },
      { label: 'Closing speed', value: 'Up to 1.0 m/s' },
      { label: 'Cycle life', value: '1,500,000 cycles' },
      { label: 'TurboFlex', value: 'Roll-up, flexible PVC curtain' },
      { label: 'TurboRoll', value: 'Spiral, rigid aluminum slats' },
      { label: 'Wind load', value: 'Class 3–4' },
      { label: 'Motor', value: 'Inverter + PLC' },
      { label: 'Safety edge', value: 'Bottom sensitive edge' },
      { label: 'Max size', value: '5000 × 5000 mm' },
      { label: 'Temperature range', value: '−30°C … +60°C' },
      { label: 'Warranty', value: '2 years (Alutech)' },
    ],
    benefits: [
      { title: 'Ultra-High Speed', desc: '2 m/s speed reduces the duty cycle by 70%.' },
      { title: '1.5M Cycles', desc: 'High service life — up to 10 years of intensive operation.' },
      { title: 'Energy Saving', desc: 'Fast closing reduces heat loss by 40%.' },
      { title: 'PLC Integration', desc: 'Compatible with ART/AC control systems and IoT.' },
    ],
    features: [
      'Opening up to 2 m/s',
      '1,500,000 cycle service life',
      'Inverter + PLC control',
      'Safety edge + photocell',
      'Installation: 7–15 days',
    ],
  },
  {
    id: 'fire-rated',
    icon: 'fire',
    brand: 'mba',
    title: 'Fire-Rated Sectional Doors',
    subtitle: 'ProFire · EI60',
    img: '/images/fire-rated-sectional-doors.webp',
    gallery: [],
    deepDescription: <>
      <div className="mt-10 first:mt-0">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">FIRE CONTAINMENT</h3>
        <p className="mt-2 leading-relaxed text-white/50"><strong className="text-white/80">ProFire</strong> doors are designed for fire containment. They prevent the spread of fire and smoke to areas adjacent to the fire source. Fire resistance rating: <strong className="text-white/80">EI60</strong> (60 minutes of integrity and thermal insulation retention).</p>
      </div>
      <div className="mt-10">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">CERTIFICATION</h3>
        <p className="mt-2 leading-relaxed text-white/50">Certified according to <strong className="text-white/80">EAC</strong> (EAEU) standards and compliant with EN 13241. Independent tests confirm that the doors maintain integrity and contain fire for 60 minutes. Intumescent seals expand 10x at high temperatures, sealing all gaps.</p>
      </div>
      <div className="mt-10">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">AUTOMATIC ACTIVATION</h3>
        <p className="mt-2 leading-relaxed text-white/50">The doors can close automatically via a fusible link or smoke detector. Compatible with the building's fire alarm system. The panel core is mineral wool or fire-resistant foam with 0.5–0.7 mm galvanized steel cladding.</p>
      </div>
    </>,
    series: [
      {
        name: 'ProFire EI60',
        desc: 'Fire-rated sectional doors with EI60 certification. Maintain integrity for 60 minutes.',
      },
    ],
    specs: [
      { label: 'Fire resistance rating', value: 'EI 60 (60 minutes)' },
      { label: 'Certification', value: 'EAC (EAEU), EN 13241' },
      { label: 'Panel core', value: 'Mineral wool / fire-resistant foam' },
      { label: 'Steel sheet', value: '0.5–0.7 mm galvanized steel' },
      { label: 'Seals', value: 'Intumescent (expandable) seals' },
      { label: 'Closing mechanism', value: 'Automatic (fusible link / smoke detector)' },
      { label: 'Rails', value: 'Heavy-duty galvanized' },
      { label: 'Max size', value: '6000 × 5000 mm' },
      { label: 'Application', value: 'Fire compartments, warehouses, industrial facilities' },
      { label: 'Warranty', value: '2 years' },
    ],
    benefits: [
      { title: '60 Minutes Protection', desc: 'Full EI60 rating — international fire safety standard.' },
      { title: 'Intumescent Seals', desc: 'Expand 10x at high temperatures, sealing all gaps.' },
      { title: 'Fire Alarm Integration', desc: 'Compatible with the building&apos;s fire safety system.' },
      { title: 'EAC Certificate', desc: 'Official certification for the EAEU territory.' },
    ],
    features: [
      'EI60 fire resistance',
      'Intumescent seals',
      'Automatic closing system',
      'EAC certification',
      'Installation: 7–15 days',
    ],
  },
  {
    id: 'panoramic',
    icon: 'panoramic',
    brand: 'alutech',
    title: 'Panoramic Doors',
    subtitle: 'Alutech · Full-View',
    img: '/images/panorama-gate.jpg',
    gallery: [],
    deepDescription: <>
      <div className="mt-10 first:mt-0">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">TRANSPARENCY AND LIGHT</h3>
        <p className="mt-2 leading-relaxed text-white/50"><strong className="text-white/80">Alutech</strong> panoramic doors provide maximum daylight penetration through tempered glass or PMMA Choc polycarbonate. PMMA Choc is 200x stronger than ordinary glass. Glazing options: clear, tinted, frosted, reflective.</p>
      </div>
      <div className="mt-10">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">DESIGN AND AESTHETICS</h3>
        <p className="mt-2 leading-relaxed text-white/50">Anodized aluminum profiles (45–60 mm) provide a sleek, modern appearance. A wide range of colors (RAL + anodized shades) allows harmonious matching with any building facade. Ideal for showrooms, car dealerships, and shopping centers.</p>
      </div>
      <div className="mt-10">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">DURABILITY</h3>
        <p className="mt-2 leading-relaxed text-white/50">Wind load class: Class 2–3. Thermal insulation: U-value 1.8–2.2 W/(m²·K). Anodized coating protects against UV radiation and mechanical wear. Available in both automatic and manual operation.</p>
      </div>
    </>,
    series: [
      {
        name: 'Alutech Panoramic',
        desc: 'Anodized aluminum profiles with tempered glass or PMMA Choc polycarbonate filling.',
      },
    ],
    specs: [
      { label: 'Frame', value: 'Anodized aluminum (45–60 mm)' },
      { label: 'Filling', value: 'Tempered glass / PMMA Choc polycarbonate' },
      { label: 'Thermal insulation (U-value)', value: '1.8–2.2 W/(m²·K)' },
      { label: 'Wind load', value: 'Class 2–3' },
      { label: 'Color', value: 'RAL / anodized shades' },
      { label: 'Glazing options', value: 'Clear, tinted, frosted, reflective' },
      { label: 'Application', value: 'Showrooms, car dealerships, shopping centers' },
      { label: 'Warranty', value: '2 years' },
    ],
    benefits: [
      { title: 'Maximum Transparency', desc: 'Tempered glass provides free natural light entry.' },
      { title: 'Impact Resistance', desc: 'PMMA Choc polycarbonate is 200x stronger than ordinary glass.' },
      { title: 'Modern Aesthetics', desc: 'Sleek aluminum profiles for any architectural style.' },
      { title: 'Color Selection', desc: 'Any RAL color + dozens of anodized shades.' },
    ],
    features: [
      'Anodized aluminum 45–60 mm',
      'Tempered glass / PC polycarbonate',
      'Maximum natural light penetration',
      'RAL + anodized shades',
      'Installation: 7–15 days',
    ],
  },
  {
    id: 'curtain',
    icon: 'curtain',
    brand: 'mba',
    title: 'Fire Protection Curtains',
    subtitle: 'EI 60 · EI 180 · E60',
    img: '/images/pre-fire-curtain.avif',
    gallery: [],
    deepDescription: <>
      <div className="mt-10 first:mt-0">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">ACCORDION-TYPE PROTECTION</h3>
        <p className="mt-2 leading-relaxed text-white/50">Automatic fire protection curtains of the "<strong className="text-white/80">accordion</strong>" type form an enclosed space in the event of a fire, preventing the spread of fire and smoke throughout the building. Fire protection versions (EI 60, EI 180) descend to the floor; smoke protection versions (E60) descend to a preset level.</p>
      </div>
      <div className="mt-10">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">GUARANTEED QUALITY</h3>
        <p className="mt-2 leading-relaxed text-white/50">Certified <strong className="text-white/80">EI 60</strong> (60 minutes), <strong className="text-white/80">EI 180</strong> (180 minutes), and <strong className="text-white/80">E60</strong> smoke protection. EAC certificate. The fire-resistant fabric with intumescent layers provides complete fire and smoke blocking. Activated by smoke detector or fire alarm system.</p>
      </div>
      <div className="mt-10">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">NO GUIDES REQUIRED</h3>
        <p className="mt-2 leading-relaxed text-white/50">Mounted to the <strong className="text-white/80">ceiling without guides</strong>, allowing closure of complex-shaped structures (L-shaped, U-shaped). Ideal for atriums, shopping centers, and open-plan buildings. Minimal maintenance — annual inspection.</p>
      </div>
    </>,
    series: [
      {
        name: 'EI 60 / EI 180 / E60',
        desc: 'Accordion-type automatic fire and smoke protection curtains.',
      },
    ],
    specs: [
      { label: 'Type', value: 'Accordion fire protection curtain' },
      { label: 'Fire resistance', value: 'EI 60 / EI 180 / E60' },
      { label: 'Certification', value: 'EAC' },
      { label: 'Mounting', value: 'Ceiling-mounted, no guides required' },
      { label: 'Material', value: 'Fire-resistant fabric + intumescent layer' },
      { label: 'Activation', value: 'Smoke detector / fire alarm system' },
      { label: 'EI 180', value: '180 minutes integrity and thermal insulation retention' },
      { label: 'E60', value: '60 minutes integrity (smoke blocking)' },
      { label: 'Complex configurations', value: 'L-shaped, U-shaped, and other complex forms available' },
      { label: 'Application', value: 'Atriums, shopping centers, open-plan buildings' },
      { label: 'Warranty', value: '2 years' },
    ],
    benefits: [
      { title: 'No Guides Required', desc: 'Ceiling mounting — allows closure of any shape opening.' },
      { title: 'Up to 180 Minutes', desc: 'EI 180 — maximum fire resistance on the market.' },
      { title: 'Compatibility', desc: 'Integrates with the building&apos;s fire alarm system.' },
      { title: 'Minimal Maintenance', desc: 'Self-activating, inspected annually.' },
    ],
    features: [
      'EI 60 / EI 180 / E60',
      'Ceiling mounting (no guides)',
      'Intumescent fire-resistant layers',
      'Fire alarm integration',
      'Installation: 7–15 days',
    ],
  },
];
