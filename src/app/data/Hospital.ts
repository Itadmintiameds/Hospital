// Single source of truth for every CurePlus hospital: listing cards, hospital pages, contact-form
// dropdown, sitemap and JSON-LD are all generated from the records in `hospitals.json` (plain data, kept
// out of this file on purpose: it is typed against `Hospital` below, so a wrong or missing field fails the build).
//
// To add / edit a hospital: change its entry in `hospitals.json` (and add its URL to `rewrites` in next.config.ts).
// - `is24x7` controls the 24x7 badge. Set it to true ONLY for hospitals that are truly open 24x7.
// - `photo.src` is the base path (no extension) of the optimised 16:10 image in /public/images/hospitals/
//   (run `python scripts/optimize-images.py` to regenerate `<name>.webp|.jpg` and `<name>-600.webp|.jpg`).
// - `contact.googleMapUrl` is optional; when it is missing the "Get Directions" button falls back to
//   `contact.geo` (coordinates) and finally to a Google Maps search for the address.

import { SITE, SITE_URL, SOCIAL } from './site';
import hospitalData from './hospitals.json';

export interface Hospital {
  id: number;
  /** URL slug; the public URL is `/${slug}` (see `rewrites` in next.config.ts). */
  slug: string;
  path: string;
  name: string;
  /** Short place label shown on cards, e.g. "Pandavapura Taluk, Mandya". */
  location: string;
  town: string;
  district: string;
  /** True only for hospitals that are open 24x7. Drives the 24x7 badge and the opening-hours block. */
  is24x7: boolean;
  /** Specialty chips on the listing cards (kept separate from the 24x7 badge). */
  specialtyTags: string[];
  photo: { src: string; alt: string };
  description: string;
  gallery: string[];
  services: string[];
  facilities: string[];
  infrastructure: string;
  contact: {
    address: string;
    pincode?: string;
    phone: string;
    googleMapUrl?: string;
    embedMapUrl?: string;
    geo?: { lat: number; lng: number };
  };
  seo: {
    title: string;
    description: string;
    h1: string;
    h2?: string;
    keywords: string[];
    altTexts: string[];
  };
}

export const hospitals: Hospital[] = hospitalData;

export const HOSPITAL_COUNT = hospitals.length;

export const getHospitalById = (id: number) => hospitals.find((h) => h.id === id);
export const getHospitalBySlug = (slug: string) => hospitals.find((h) => h.slug === slug);

export const hospitalUrl = (h: Hospital) => `${SITE_URL}${h.path}`;

export const districts = Array.from(new Set(hospitals.map((h) => h.district))).sort((a, b) => a.localeCompare(b));

/** "0821-2454798" / "8228257300" / "+91 82262 00522"  ->  "tel:+918212454798" etc. */
export const telHref = (phone: string) => {
  let digits = phone.replace(/\D/g, '');
  if (digits.length === 12 && digits.startsWith('91')) digits = digits.slice(2);
  if (digits.length === 11 && digits.startsWith('0')) digits = digits.slice(1);
  return `tel:+91${digits}`;
};

/** Best available "Get Directions" link for a hospital. */
export const directionsUrl = (h: Hospital) => {
  const { googleMapUrl, geo, address } = h.contact;
  if (googleMapUrl) return googleMapUrl;
  if (geo) return `https://www.google.com/maps/dir/?api=1&destination=${geo.lat},${geo.lng}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${h.name}, ${address}`)}`;
};

/** schema.org Hospital/LocalBusiness, generated so it can never drift from the page content. */
export const buildHospitalJsonLd = (h: Hospital) => {
  const { geo, pincode, address, phone } = h.contact;
  return {
    '@context': 'https://schema.org',
    '@type': ['Hospital', 'LocalBusiness'],
    name: h.name,
    url: hospitalUrl(h),
    image: `${SITE_URL}${h.photo.src}.jpg`,
    description: h.seo.description,
    telephone: phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: address,
      addressLocality: h.town,
      addressRegion: 'Karnataka',
      ...(pincode ? { postalCode: pincode } : {}),
      addressCountry: 'IN',
    },
    ...(geo ? { geo: { '@type': 'GeoCoordinates', latitude: geo.lat, longitude: geo.lng } } : {}),
    // Opening hours are only declared for hospitals that are flagged as 24x7.
    ...(h.is24x7
      ? {
          openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            opens: '00:00',
            closes: '23:59',
          },
        }
      : {}),
    parentOrganization: { '@type': 'Organization', name: SITE.parent },
    sameAs: [SOCIAL.facebook, SOCIAL.instagram, SOCIAL.youtube, SITE_URL],
  };
};
