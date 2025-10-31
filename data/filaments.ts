export type Tier = 'S' | 'A' | 'B' | 'C' | 'F';

export interface FilamentInfo {
  id: string;
  name: string;
  tier: Tier;
  affiliateUrl?: string;
  pros: string[];
  cons: string[];
  useCases: string[];
  safetyNotes?: string[];
  disqualified?: boolean;
  aliases?: string[];
}

export const TIERS: { tier: Tier; label: string; color: string }[] = [
  { tier: 'S', label: 'S Tier', color: 'text-emerald-400' },
  { tier: 'A', label: 'A Tier', color: 'text-sky-400' },
  { tier: 'B', label: 'B Tier', color: 'text-amber-400' },
  { tier: 'C', label: 'C Tier', color: 'text-red-400' },
  { tier: 'F', label: 'F Tier', color: 'text-slate-500' },
];

export const FILAMENTS: FilamentInfo[] = [
  // S TIER
  {
    id: 'cf-pla',
    name: 'Carbon Fiber PLA',
    tier: 'S',
    affiliateUrl: 'https://bit.ly/49PfHBH',
    pros: [
      'Very crisp surface detail, matte finish',
      'Low warp / low shrink → dimensional accuracy',
      'Stiffer than vanilla PLA, looks "pro"',
    ],
    cons: [
      'More brittle than normal PLA',
      'Abrasive → needs hardened nozzle',
      'Mostly black / limited color choice',
    ],
    useCases: [
      'Structural-looking brackets, cosplay parts that must look like injection molded carbon',
      'Accurate functional prototypes where dimensional stability matters',
    ],
    safetyNotes: ['Standard PLA-level fumes (low)'],
    aliases: ['Carbon Fiber PLA'],
  },
  {
    id: 'tough-pla',
    name: 'Tough PLA (PLA+)',
    tier: 'S',
    affiliateUrl: 'https://amzn.to/48YKT05',
    pros: [
      'Higher impact resistance; won\'t shatter',
      'Better high-temp tolerance than plain PLA',
      'Prints like PLA (easy)',
    ],
    cons: [
      'Still not UV/weather proof long-term',
      'Still softens in car-summer-level heat, just slower',
    ],
    useCases: [
      'Everyday functional parts, gizmo housings, jigs that get handled',
    ],
    aliases: ['PLA+', 'PLA Pro'],
  },
  {
    id: 'high-speed-pla',
    name: 'High-Speed PLA',
    tier: 'S',
    affiliateUrl: 'https://amzn.to/3T7PQOs',
    pros: [
      'Lower melt temp / lower viscosity so you can push extreme volumetric flow',
      'Supports very high print speeds (>300 mm/s era machines)',
      'Huge throughput gains for prototyping',
    ],
    cons: [
      'Lower softening point = can deform in hot climates faster than normal PLA',
      'Still UV-sensitive',
    ],
    useCases: [
      'Rapid iteration, draft prints, large cosplay shells where time > longevity',
    ],
    aliases: ['PLA Meta', 'High Flow PLA'],
  },
  {
    id: 'cf-petg',
    name: 'Carbon Fiber PETG',
    tier: 'S',
    affiliateUrl: 'https://bit.ly/4chld1Y',
    pros: [
      'More stable, less sag/warp than normal PETG',
      'Stiffer than PETG; great dimensional stability under load',
      'Gorgeous surface finish, "pro hardware" vibe',
    ],
    cons: [
      'Abrasive → hardened nozzle',
      'More expensive / fewer suppliers',
    ],
    useCases: [
      'Functional prototypes, lightweight arms/mounts that shouldn\'t flex (like HUD arms, camera booms)',
    ],
    aliases: ['Carbon Fiber PETG'],
  },
  {
    id: 'pctg',
    name: 'PCTG',
    tier: 'S',
    affiliateUrl: 'https://amzn.to/3T98jKk',
    pros: [
      'Basically PETG with buffs everywhere: toughness, impact resistance, clarity-ish, layer adhesion',
      'Minimal warping, easy to print, strong in ALL directions',
      'Less hygroscopic than PETG',
    ],
    cons: [
      'Supports hard to remove',
      'More expensive / harder to find',
    ],
    useCases: [
      'High-durability functional parts that still need clean looks',
      'Print-it-and-bolt-it mechanical components',
    ],
    aliases: ['PCTG (modified PET)'],
  },
  {
    id: 'gf-nylon',
    name: 'Glass-Filled Nylon',
    tier: 'S',
    affiliateUrl: 'https://bit.ly/49HvrH3',
    pros: [
      'Extremely stiff and tough',
      'High heat, abrasion, and impact resistance; industrial-grade',
      'Warps far less than pure Nylon → actually printable if you have the right hardware',
    ],
    cons: [
      'Abrasive (needs hardened/sapphire nozzle, robust drive gears)',
      'Wants hotter temps (enclosure strongly recommended)',
      'Expensive',
    ],
    useCases: [
      'Near-aluminum-replacement brackets, power tool fixtures, RC/drone motor mounts',
    ],
    aliases: ['GF Nylon', 'Glass-filled PA'],
  },
  {
    id: 'tpu-99d',
    name: 'TPU 99D (Rigid TPU)',
    tier: 'S',
    affiliateUrl: 'https://amzn.to/4adGNma',
    pros: [
      'Practically indestructible: perfect layer adhesion, won\'t shatter',
      'Handles brutal impacts, combat bot energy, tactical gear abuse',
      'Still prints (relatively) easily if kept dry',
    ],
    cons: [
      'Needs drying (hygroscopic)',
      'Sticks too well to build plate (use glue stick)',
      'Because it\'s tough, removing supports can be painful',
    ],
    useCases: [
      'Armor bumpers, drone skids, impact plates, holster-like mounts',
    ],
    aliases: ['TPU 99A/99D', 'Rigid TPU'],
  },

  // A TIER
  {
    id: 'pla',
    name: 'PLA (Regular)',
    tier: 'A',
    affiliateUrl: 'https://bit.ly/3wVoJyM',
    pros: [
      'Ultra easy to print, cheap, huge color variety',
      'Fast, great bridging and overhangs, easy support removal',
      'Very stiff, good tensile strength for cost',
    ],
    cons: [
      'Warps under heat (hot car melts it)',
      'UV wrecks it outdoors',
      'Brittle on drop, creeps under constant load over time',
    ],
    useCases: [
      'Prototyping, props, fit-check jigs, decorative prints',
    ],
  },
  {
    id: 'petg',
    name: 'PETG',
    tier: 'A',
    affiliateUrl: 'https://bit.ly/3Vi1dGe',
    pros: [
      'Tougher than PLA, more heat resistant',
      'Good layer adhesion, chemically more durable',
      'Slick/low friction and decent clarity options',
    ],
    cons: [
      'Bridges sag, supports fuse and are a pain',
      'Water absorption (keep it dry)',
      'Slightly harder to tune',
    ],
    useCases: [
      'Functional parts that live in semi-warm environments',
      'Mechanical parts that slide/hinge',
    ],
  },
  {
    id: 'cf-pet',
    name: 'Carbon Fiber PET',
    tier: 'A',
    affiliateUrl: 'https://bit.ly/3TxIGoa',
    pros: [
      'Stiff, dimensionally stable',
      'High temp tolerance compared to normal PETG',
      'Easier than full-blown nylons / PC',
    ],
    cons: [
      'Requires hotter nozzle / enclosure than PLA',
      'Limited suppliers, pricey',
    ],
    useCases: [
      'Automotive clamps, drone frames, anything that must hold shape under heat/vibration',
    ],
    aliases: ['CF PET', 'Carbon Fiber PET'],
  },
  {
    id: 'asa',
    name: 'ASA',
    tier: 'A',
    affiliateUrl: 'https://amzn.to/48RYVRk',
    pros: [
      'UV-resistant, can live outdoors "indefinitely in direct sunlight"',
      'Matte surface, looks professional',
      'Less warp than ABS (still warps, but less)',
    ],
    cons: [
      'Stinks (styrene fumes → ventilation/enclosure)',
      'Still not "easy" to print',
    ],
    useCases: [
      'Outdoor enclosures, car mounts, weather-exposed brackets, cosplay armor used in summer sunlight',
    ],
  },
  {
    id: 'cf-pc',
    name: 'Carbon Fiber Polycarbonate',
    tier: 'A',
    affiliateUrl: 'https://amzn.to/49OKyP6',
    pros: [
      'Extremely stiff, barely flexes under heavy load',
      'Maintains polycarbonate-level toughness',
      'Shockingly affordable compared to many "engineering" blends',
    ],
    cons: [
      'Abrasive; needs hardened nozzle',
      'High extrusion temps; some printers will stall the drive because it\'s so stiff',
    ],
    useCases: [
      'High-load mounts, quadcopter arms, machine tool fixtures',
    ],
    aliases: ['CF PC', 'PC Carbon Fiber'],
  },
  {
    id: 'pc-pbt',
    name: 'PC-PBT',
    tier: 'A',
    affiliateUrl: 'https://amzn.to/3TA0dvN',
    pros: [
      'Polycarbonate-level toughness and shatter resistance even below freezing',
      'Low warp, nice surface, prints ~260°C (easy for a "PC-class" plastic)',
      'Cheap-ish for the performance',
    ],
    cons: [
      'Needs higher temps than PLA, just not insane',
      'Still off-gasses; ventilation is wise',
    ],
    useCases: [
      'Anything exposed to sub-zero cold + impact (e.g. outdoor drones in winter, vehicle/exterior mounts)',
    ],
    aliases: ['PC-PBT Alloy'],
  },
  {
    id: 'sebs',
    name: 'SEBS',
    tier: 'A',
    affiliateUrl: 'https://amzn.to/3TjqvBh',
    pros: [
      'Flexible AND stretchy (elastomer), yet smooth to print (vs classic TPE)',
      'Great for wearable-ish parts, bumpers, hinges',
      'Prints surprisingly clean and consistent for a soft filament',
    ],
    cons: [
      'Hygroscopic',
      'Smelly styrene fumes; low softening temp (careful drying)',
      'Needs per-printer tuning (extruder compression)',
    ],
    useCases: [
      'Grips, gaskets, protective covers, soft joints',
    ],
    aliases: ['SEBS (TPE variant)'],
  },
  {
    id: 'pekk',
    name: 'PEKK',
    tier: 'A',
    affiliateUrl: 'https://bit.ly/4a8GEAe',
    pros: [
      'Super polymer tier: extremely strong, high heat/chemical resistance (nearly "industrial aerospace" grade)',
      'Easier to print than PEEK (lower insanity requirements)',
      'First-try success is achievable with a good high-temp printer',
    ],
    cons: [
      'Still needs very hot nozzle, enclosure, and dried filament',
      'Very expensive vs hobby filaments',
    ],
    useCases: [
      'Aerospace-grade fixtures, under-hood automotive components, structural parts in hostile environments',
    ],
    aliases: ['PEKK', 'PEEK\'s little sister'],
  },
  {
    id: 'ultem',
    name: 'Ultem (PEI)',
    tier: 'A',
    affiliateUrl: 'https://bit.ly/3IBpYWd',
    pros: [
      'Very high strength, heat, chemical, electrical, and radiation resistance',
      'Holds dimensional accuracy better than most "super polymers"',
      'Once you hit the insane printer requirements, it\'s actually friendly to print',
    ],
    cons: [
      'Needs absurd temps: 425°C hotend, 150°C+ dry box, etc.',
      'Extremely expensive',
    ],
    useCases: [
      'Mission-critical mounts, aerospace-grade components, industrial electrical housings',
    ],
    safetyNotes: ['Setup is bonkers'],
    aliases: ['PEI', 'Ultem'],
  },

  // B TIER
  {
    id: 'silk-pla',
    name: 'Silk PLA',
    tier: 'B',
    affiliateUrl: 'https://amzn.to/4cs4cSP',
    pros: [
      'Ridiculously shiny "metallic" finish; looks like anodized candy',
      'Easier support removal than some PLAs (slides off)',
    ],
    cons: [
      'Weaker than normal PLA, more brittle',
      'Can puff/pop and jam, especially in multi-material setups',
      'Can wreck AMS / MMU style multi-material units if it swells',
    ],
    useCases: [
      'Display parts, cosplay shells, gifts, trophies',
    ],
  },
  {
    id: 'wood-pla',
    name: 'Wood PLA',
    tier: 'B',
    affiliateUrl: 'https://amzn.to/4cfjk5F',
    pros: [
      'Warm, woodlike tactile feel',
      'Takes sanding/varnish for convincing faux timber',
    ],
    cons: [
      'Weak/brittle, moisture-sensitive, sputters on print',
      'Surface "fuzzing" / clog risk',
    ],
    useCases: [
      'Props, décor, cosplay handles/grips where realism>strength',
    ],
  },
  {
    id: 'matte-pla',
    name: 'Matte PLA',
    tier: 'B',
    affiliateUrl: 'https://amzn.to/43kB8bt',
    pros: [
      'Soft satin surface, hides layer lines, sounds "soft"',
      'Can be sanded and painted (rare for PLA)',
      'Takes impact better than brittle shiny PLA',
    ],
    cons: [
      'More hygroscopic than standard PLA',
      'Semi-flexy, which isn\'t what you want for rigid brackets',
      'Can jam/grind in extruder more easily',
    ],
    useCases: [
      'Cosplay armor, shells, enclosures where finish matters',
    ],
  },
  {
    id: 'flex-pla',
    name: 'Flex PLA (PCL)',
    tier: 'B',
    affiliateUrl: 'https://bit.ly/48SehoW',
    pros: [
      'Ultra-low print temp (~100°C nozzle)',
      'Can be reheated with hot water / hair dryer and reshaped on-the-body → prosthetics, orthotics',
      'Biocompatible-ish / wearable fit tuning',
    ],
    cons: [
      'Prints sloppy/stringy, can be hard to get adhesion correct',
      'Low service temp (softens in warm bath)',
      'Not strong structurally',
    ],
    useCases: [
      'Custom wearable braces, cosplay pieces custom-fitted to anatomy, prosthetic sockets',
    ],
    aliases: ['PCL', 'Moldable Thermoplastic', 'Instamorph'],
  },
  {
    id: 'pet',
    name: 'PET',
    tier: 'B',
    affiliateUrl: 'https://bit.ly/4abjMQv',
    pros: [
      'Stiffer, tougher, shinier, more heat-resistant than PETG (bottle-grade)',
      'Basically "super PETG" for high-temp needs',
    ],
    cons: [
      'Needs 275°C+ nozzle, enclosure helps',
      'Warps/sags, humidity sensitive',
      'Harder than PETG to print',
    ],
    useCases: [
      'Functional parts that see high temps (engine bay, hot enclosures) but you don\'t want to jump to Nylon/PC',
    ],
    aliases: ['bPET', 'HTPET'],
  },
  {
    id: 'pvb',
    name: 'PVB',
    tier: 'B',
    affiliateUrl: 'https://bit.ly/3TiWwJP',
    pros: [
      'Decent mechanical toughness (slightly flexible)',
      'Alcohol smoothing → glossy, fused surface like injection-molded',
    ],
    cons: [
      'Alcohol fumes / contact can unintentionally fuse your entire spool',
      'Weaker than PETG on paper',
      'Moisture sensitive',
    ],
    useCases: [
      'Display models with glassy surface, cosplay faceplates, aesthetic props',
    ],
  },
  {
    id: 'hips',
    name: 'HIPS',
    tier: 'B',
    affiliateUrl: 'https://amzn.to/3Tjdvvt',
    pros: [
      'Lightweight, slightly flexible, decent toughness',
      'Soluble in d-limonene, great as support material for ABS/ASA',
    ],
    cons: [
      'Needs enclosure-ish tuning like ABS',
      'Smells',
    ],
    useCases: [
      'Wearable props, EVA-style cosplay armor internals, support structures for ABS/ASA',
    ],
  },
  {
    id: 'nylon-pa6',
    name: 'Nylon PA-6',
    tier: 'B',
    affiliateUrl: 'https://amzn.to/4a9pOkK',
    pros: [
      'Very high strength + layer adhesion = nearly immortal parts',
      'Self-lubricating/low friction → great for moving mechanisms',
      'Heat tolerant beyond ABS',
    ],
    cons: [
      'Nightmare moisture uptake → must dry constantly',
      'Warps like crazy, pulls plates off beds; heated chamber strongly recommended',
    ],
    useCases: [
      'Functional hinges, gears, RC car arms, tool fixtures',
    ],
  },
  {
    id: 'nylon-pa12',
    name: 'Nylon PA-12',
    tier: 'B',
    pros: [
      'Stiffer than PA-6, good for precision parts (RC, drones, machine tooling)',
      'High temp capable',
    ],
    cons: [
      'Even harder to print than PA-6, needs hotter chamber',
      'More brittle than PA-6',
    ],
    useCases: [
      'Car/drone parts that must hold tolerances under load',
    ],
  },
  {
    id: 'cf-nylon-pa6',
    name: 'CF Nylon PA-6',
    tier: 'B',
    affiliateUrl: 'https://bit.ly/3Vf4xlm',
    pros: [
      'Stiffer, reduced warp vs raw nylon',
    ],
    cons: [
      'You still fight warp. Needs brutal hardware (enclosure, hotend, drive)',
      'Abrasive',
    ],
    useCases: [
      'High-strength, semi-precision brackets for serious hobby machines',
    ],
  },
  {
    id: 'polycarbonate',
    name: 'Polycarbonate',
    tier: 'B',
    affiliateUrl: 'https://bit.ly/4ccrdsG',
    pros: [
      'Extremely tough, high impact resistance',
      'High heat deflection (~150°C before softening)',
      'Clear/translucent aesthetic',
    ],
    cons: [
      'Prints >300°C slow and needs dry filament',
      'Warps and absorbs moisture',
      'Overkill for casual jobs',
    ],
    useCases: [
      'Load-bearing brackets, tool mounts, jigs in hot environments',
    ],
  },
  {
    id: 'tpu-80d',
    name: 'TPU 80D (Semi-flex)',
    tier: 'B',
    affiliateUrl: 'https://bit.ly/3Pldiqx',
    pros: [
      'Good middle hardness: bumpers, hinges, protective edging',
      'Still mostly printable without exotic tuning',
    ],
    cons: [
      'Must stay dry',
      'Tall thin prints wobble/string',
      'Sweaty/unbreathable for true wearables',
    ],
    useCases: [
      'Vibration dampers, guards, Nerf melee props, impact absorption',
    ],
  },
  {
    id: 'gf-pp',
    name: 'Glass-Filled Polypropylene',
    tier: 'B',
    affiliateUrl: 'https://amzn.to/49S879w',
    pros: [
      'Wildly tough and durable, all-weather, very light density',
      'Great impact resistance',
    ],
    cons: [
      'Miserable to print: curls, peels, demands enclosure + direct drive + hardened nozzle',
    ],
    useCases: [
      'Automotive-style clips, outdoor brackets that take abuse but must stay light',
    ],
  },
  {
    id: 'psu',
    name: 'PSU',
    tier: 'B',
    affiliateUrl: 'https://bit.ly/3TvGGwx',
    pros: [
      'Heat resistance ~187°C glass transition',
      'Chemically/radiation stable, sterilizable like surgical steel',
      'Opens "citizen science / lab gear" level use',
    ],
    cons: [
      'Needs high temps (engineering printer class)',
      'Expensive relative to hobby filaments',
    ],
    useCases: [
      'High-temp fixtures, sterilizable lab components, hot fluid manifolds',
    ],
  },

  // C TIER
  {
    id: 'abs',
    name: 'ABS',
    tier: 'C',
    affiliateUrl: 'https://amzn.to/3IA1Gfm',
    pros: [
      'Cheap, strong, impact resistant',
      'Acetone vapor smoothing → glossy, seamless shells',
      'Survives automotive-ish temps, outdoor-ish temps better than PLA',
    ],
    cons: [
      'Warps and stinks (styrene fumes)',
      'Needs enclosure for dimensional reliability',
    ],
    useCases: [
      'Durable enclosures, props that will be sanded, vapor-smoothed cosplay armor',
    ],
  },
  {
    id: 'cf-nylon-pa12',
    name: 'CF Nylon PA-12',
    tier: 'C',
    affiliateUrl: 'https://bit.ly/3TjxMB5',
    pros: [
      'Very stiff, high-temp',
    ],
    cons: [
      'Basically everything about PA-12 but harder, more brittle, and still warps',
    ],
    useCases: [
      'Precision/rigidity under heat where cost and pain are acceptable',
    ],
  },
  {
    id: 'nylon-petg-alloy',
    name: 'Nylon/PETG Alloys',
    tier: 'C',
    affiliateUrl: 'https://bit.ly/3IAw3lP',
    pros: [
      'Marketed as "tough PETG" or "low-temp Nylon"',
      'Slight nylon strength boost at slightly friendlier temps',
    ],
    cons: [
      'You inherit both warp-y tendencies and plate adhesion drama',
      'Prints peel up into tacos',
    ],
    useCases: [
      'Honestly niche. Only if you literally cannot run real nylon but need a smidge more than PETG',
    ],
  },
  {
    id: 'clear-pmma',
    name: 'Clear PMMA (Acrylic)',
    tier: 'C',
    affiliateUrl: 'https://bit.ly/4cg0lbi',
    pros: [
      'Insane optical clarity ("truly incomparable")',
      'UV stable outdoors; can polish/frost',
    ],
    cons: [
      'Brittle, awful bed adhesion, high warp/expansion',
      'Moisture sensitive and dries slowly',
    ],
    useCases: [
      'Transparent light diffusers, decorative panels, "glass-like" props for outdoors',
    ],
  },
  {
    id: 'chocolate',
    name: 'Chocolate',
    tier: 'C',
    affiliateUrl: 'https://bit.ly/4cbRHdL',
    pros: [
      'Biodegradable, edible, zero VOC',
      'Prints at super low temps, huge layer heights fast',
    ],
    cons: [
      'Not actually plastic (food safety, spoilage)',
      'Literally melts in your hand',
      'Disqualified as a "real" filament',
    ],
    useCases: [
      'Novelty food printing',
    ],
    disqualified: true,
  },
  {
    id: 'tpu-80c',
    name: 'TPU 80C (Soft TPU)',
    tier: 'C',
    affiliateUrl: 'https://bit.ly/3Pj9XYO',
    pros: [
      'Very soft, wearable-grade flexibility',
    ],
    cons: [
      'Prints slow, loves to spaghetti around the extruder',
      'Sweaty/unbreathable for skin contact',
    ],
    useCases: [
      'Squishy props, sealed gaskets',
    ],
  },
  {
    id: 'obc',
    name: 'OBC',
    tier: 'C',
    affiliateUrl: 'https://bit.ly/43iKm8e',
    pros: [
      'Attempts to merge PP toughness with PETG-ish usability',
      'Semi-flexible, lower warp than PP, supports possible',
    ],
    cons: [
      'Still awful bed adhesion (polyolefin problem)',
      'Very expensive, specialty build surfaces required',
    ],
    useCases: [
      'Lightweight, chemical-resistant parts in harsh outdoor/industrial settings where PP-like durability matters',
    ],
  },
  {
    id: 'peek',
    name: 'PEEK',
    tier: 'C',
    affiliateUrl: 'https://bit.ly/3o2zQzr',
    pros: [
      'God-tier mechanical/thermal/chemical performance (near-metal)',
      'Self-extinguishing, aerospace-grade',
    ],
    cons: [
      '~400°C nozzle, ~140°C chamber, $700/kg',
      'Warps, moisture, insane setup',
    ],
    useCases: [
      'Ultra high-end aerospace, oil & gas, medical tooling, etc.',
    ],
  },
  {
    id: 'pps',
    name: 'PPS',
    tier: 'C',
    affiliateUrl: 'https://bit.ly/3PjE4zx',
    pros: [
      'Near-absolute chemical resistance ("nothing can dissolve it below 200°C")',
      'Still mechanically decent (not quite PC levels, but solid)',
      'Cheaper than PEEK/PEKK class for chem-proof parts',
    ],
    cons: [
      'Needs ~325°C nozzle, 140°C bed',
      'Harder to source, expensive vs hobby',
    ],
    useCases: [
      'Chemical lab fixtures, pump housings for nasty solvents',
    ],
    safetyNotes: ['If you\'re bathing it in boiling acid, also buy life insurance'],
  },
  {
    id: 'pes',
    name: 'PES',
    tier: 'C',
    affiliateUrl: 'https://bit.ly/3Tf8RyC',
    pros: [
      'Rugged, >200°C shape retention',
      'Fire/chem/radiation resistance',
    ],
    cons: [
      'Ultra high temp requirements',
      'Niche, extremely expensive',
    ],
    useCases: [
      'Aerospace, medical, radiation-heavy environments',
    ],
  },
  {
    id: 'ppsu',
    name: 'PPSU',
    tier: 'C',
    affiliateUrl: 'https://bit.ly/3zzZttz',
    pros: [
      'Rugged, >200°C shape retention',
      'Fire/chem/radiation resistance',
    ],
    cons: [
      'Ultra high temp requirements',
      'Niche, extremely expensive',
    ],
    useCases: [
      'Aerospace, medical, radiation-heavy environments',
    ],
  },
  {
    id: 'cf-peek',
    name: 'CF PEEK',
    tier: 'C',
    affiliateUrl: 'https://bit.ly/2XOZaxx',
    pros: [
      'Takes PEEK and adds CF for warp control and dimensional rigidity',
    ],
    cons: [
      'Astronomical cost; extremely abrasive; needs exotic hardware (abrasion-proof, ultra-high-temp)',
    ],
    useCases: [
      'Absolute bleeding-edge aerospace / defense parts',
    ],
  },

  // F TIER
  {
    id: 'metal-filled-pla',
    name: 'Metal-Filled PLA',
    tier: 'F',
    affiliateUrl: 'https://bit.ly/4aqHEka',
    pros: [
      'Heavy, "real metal" look/feel; can polish, patina, even magnetism (iron)',
    ],
    cons: [
      'Extremely brittle even on spool',
      'Expensive per gram AND higher density means you get fewer parts per kilo',
      'Functionally weaker than plain PLA',
    ],
    useCases: [
      'Pure display parts, trophies, cosplay emblems',
    ],
  },
  {
    id: 'non-clear-pmma',
    name: 'Non-Clear PMMA',
    tier: 'F',
    pros: [],
    cons: [
      'All PMMA pain (brittle, adhesion nightmare) but without the sexy clarity',
    ],
    useCases: [
      'Basically none',
    ],
  },
  {
    id: 'tpe',
    name: 'TPE',
    tier: 'F',
    affiliateUrl: 'https://bit.ly/3IDazF8',
    pros: [
      'Stretchy, elastic (rubber-like)',
    ],
    cons: [
      'Prints like runny syrup, blobs everywhere',
      'Extruder squishes filament flat; tuning extrusion multiplier is painful',
      'Surface finish is trash',
    ],
    useCases: [
      'Honestly superseded by SEBS',
    ],
  },
  {
    id: 'polypropylene',
    name: 'Polypropylene (PP)',
    tier: 'F',
    affiliateUrl: 'https://amzn.to/4a6JgP0',
    pros: [
      'Near-invincible layer adhesion; feather-light; can flex without permanent bend',
      'Super rugged',
    ],
    cons: [
      'Truly atrocious bed adhesion',
      'Warps worse as it cools',
      'Supports basically fuse/weld',
      'Soft durometer variants rob you of structural use',
    ],
    useCases: [
      'Industrial-grade living hinges, chemical-resistant containers… IF you can actually get it to stick',
    ],
  },
  {
    id: 'hdpe',
    name: 'HDPE',
    tier: 'F',
    affiliateUrl: 'https://amzn.to/3TgDzr9',
    pros: [
      'Extremely common/recyclable plastic in the real world',
      'Low density',
    ],
    cons: [
      'The worst warp on the list',
      'Layer splitting, zero bed adhesion',
      'Basically unprintable for hobbyists',
    ],
    useCases: [
      'None except purging between high/low temp filaments',
    ],
  },
  {
    id: 'pom',
    name: 'POM (Delrin / Acetal)',
    tier: 'F',
    affiliateUrl: 'https://amzn.to/4acCqHE',
    pros: [
      'Very low friction, machinable industrial plastic',
    ],
    cons: [
      'Zero bed adhesion unless you mechanically anchor it into rough material',
      'Layers split if you sneeze',
      'Overheats into formaldehyde-class toxins',
    ],
    useCases: [
      'Honestly? Just machine Delrin stock instead. Printing\'s not worth the cancer cloud',
    ],
    safetyNotes: ['Toxic off-gassing concern'],
  },
  {
    id: 'pvdf',
    name: 'PVDF',
    tier: 'F',
    affiliateUrl: 'https://bit.ly/4a8dTUj',
    pros: [
      'Extreme chemical, abrasion, and heat resistance',
      'Hydrophobic (basically never needs drying)',
      'Mechanical toughness beyond PETG',
    ],
    cons: [
      'If overheated even "a few dozen °C," it decomposes into a cocktail of lethal gases (HCN, HCl, CO)',
      'Specialty use only; requires careful thermal control and fume handling',
    ],
    useCases: [
      'Industrial chemical-handling components',
    ],
    safetyNotes: ['Toxic death cloud risk if you screw up temps'],
  },
  {
    id: 'tpi',
    name: 'TPI (Thermoplastic Polyimide)',
    tier: 'F',
    affiliateUrl: 'https://bit.ly/3TzhXaA',
    pros: [
      'Most heat-proof filament here (~250°C Tg, still strong at 170°C)',
      'Aerospace-grade (Kapton tape on satellites)',
    ],
    cons: [
      'Basically unprintable: 450°C nozzle, 220°C bed, 240°C chamber',
      'Costs are extreme; hardware cost eclipses just machining metal',
    ],
    useCases: [
      'Space/aerospace thermal shielding brackets where nothing else survives',
    ],
  },
];
