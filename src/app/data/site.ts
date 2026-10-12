// Site-wide constants: contact details, navigation, stats, licences, Super Hub facts.
// Edit here and every page / the footer / JSON-LD picks the change up.

export const SITE_URL = 'https://www.cureplushospitals.com';

export const SITE = {
  name: 'CurePlus Hospitals',
  parent: 'Sudhanand Health Care Solutions',
  // The one phone number already used across the site (footer, contact page, hospital sidebar).
  phoneDisplay: '+91 90351 93777',
  phoneHref: 'tel:+919035193777',
  emailContact: 'contact@cureplushospitals.com',
  emailInfo: 'info@cureplushospitals.com',
  region: 'Mysuru, Karnataka, India',
} as const;

/** Default social-share image (1200x750). Pages that define their own `openGraph` must repeat it, Next.js does not merge nested metadata. */
export const OG_IMAGES = [
  {
    url: '/images/hospitals/halli-mysuru-hospital.jpg',
    width: 1200,
    height: 750,
    alt: 'CurePlus Hospital with ambulance, Halli Mysuru',
  },
];

export const SOCIAL = {
  facebook: 'https://www.facebook.com/cureplushospitals',
  instagram: 'https://www.instagram.com/cureplus_hospitals/',
  linkedin: 'https://www.linkedin.com/company/sudhanand-health-care-solutions-private-limited/',
  // TODO: confirm the YouTube channel URL with the client (taken from the existing JSON-LD `sameAs`).
  youtube: 'https://www.youtube.com/@CurePlusHospitals',
} as const;

export interface NavLink {
  name: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Our Hospitals', href: '/hospitals' },
  { name: 'Super Hub', href: '/super-hub' },
  { name: 'Specialities', href: '/services' },
  { name: 'Team', href: '/team' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact Us', href: '/contact' },
];

export const TARGET_YEAR = 2030;

export interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

/** `hospitalCount` is passed in so the first stat always matches the hospital data. */
export const buildStats = (hospitalCount: number): Stat[] => [
  { value: hospitalCount, suffix: '+', label: 'Hospitals across Karnataka' },
  { value: 50, suffix: '+', label: 'Doctors & specialists' },
  { value: 10, suffix: ' lakh', label: 'Patients served' },
  { value: 24, suffix: '/7', label: 'Round-the-clock services' },
  { value: 7000, suffix: '+', label: 'Surgeries performed' },
  { value: 200, suffix: '+', label: `Hospitals by ${TARGET_YEAR}` },
];

export const MISSION =
  'To transform healthcare accessibility by delivering compassionate, comprehensive and affordable care through a locally connected hospital network, supported by technology, specialist expertise and a strong focus on preventive and continuous care.';

export const VISION =
  'To reach underserved communities through a network of 200+ hospitals by 2030, ensuring quality, affordable and inclusive healthcare of the highest standard is within reach of every community.';

// TODO: confirm with client — the licence/approval labels below were supplied in the content document
// (highlighted red). Do not add licence numbers or expiry dates until the client confirms them.
export const LICENCES: string[] = [
  'KPME',
  'KSPCB',
  'Drug License',
  'Fire NOC',
  'AERB',
  'MTP',
  'Tubectomy',
  'PC&PNDT',
];

export const SUPER_HUB = {
  name: 'CurePlus Super Hub',
  city: 'Mysuru',
  beds: 125,
  completion: 'End of 2027',
  completionDate: '2027-12-31',
  // The construction announcement video on the site is dated 04-09-2025.
  constructionStart: '2025-09-04',
  // Services planned for the Super Hub (shown as "Coming Soon").
  services: [
    'General Medicine',
    'General Surgery',
    'Gynecology',
    'Pediatrics',
    'Geriatrics',
    'Cardiology',
    'Cath Lab',
    'Robotic Orthopedic Surgery',
    'Nephrology',
    'Neurology & Neurosurgery',
  ],
  // TODO: confirm with client — intermediate milestones are not in the content document.
  milestones: [
    { label: 'Construction begins', when: 'September 2025', status: 'done' as const },
    { label: 'Construction in progress', when: '2026 – 2027', status: 'current' as const },
    { label: 'Equipment, staffing & fit-out', when: '2027', status: 'upcoming' as const },
    { label: 'Super Hub opens', when: 'End of 2027', status: 'upcoming' as const },
  ],
} as const;

export interface VideoItem {
  id: string;
  title: string;
  description: string;
  date?: string;
}

/** Videos shown on the home page (first one is featured). To add the hospital video later, add it to this list. */
export const STORY_VIDEOS: VideoItem[] = [
  {
    id: 'TNoydh6wszw',
    title: 'CurePlus Hospitals – Stories of Healing & Hope',
    description:
      'CurePlus Hospitals is transforming rural healthcare in Karnataka with accessible, quality care that changes lives.',
  },
  {
    id: 'TkLjQyNti78',
    title: 'A New Chapter for CurePlus Hospitals',
    date: '04-09-2025',
    description:
      'Construction of our new CurePlus Hospital has begun, reinforcing our commitment to advanced, compassionate healthcare for generations to come.',
  },
  {
    id: 'fE77gCpSnPM',
    title: 'CurePlus Blood Centre | Our First Blood Donation Camp',
    date: '17-09-2025',
    description:
      'CurePlus Blood Centre and ARC Sportzone Hebbal, with Terapanth Yuvak Parishad Mysuru, hosted our first Blood Donation Camp under Raktadan Amrit Mahotsav 2.0.',
  },
  {
    id: 'b-bzT9WbjL0',
    title: 'POSH (Prevention of Sexual Harassment) Training at CurePlus Hospitals',
    date: '18-09-2025',
    description:
      'CurePlus Hospitals hosted POSH training with Rtn. Col. Ravi Shirahatti (Retd.), reinforcing our commitment to a safe, respectful and inclusive workplace.',
  },
];
