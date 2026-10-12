import type { Metadata } from 'next';
import { BadgeCheck, FlaskConical, Pill, Stethoscope, Users } from 'lucide-react';
import { HOSPITAL_COUNT, districts, hospitalUrl, hospitals } from '../data/Hospital';
import { SITE, SITE_URL, OG_IMAGES } from '../data/site';
import HospitalCard from '../component/HospitalCard';
import HospitalsExplorer, { type ExplorerItem } from '../component/HospitalsExplorer';
import JsonLd from '../component/JsonLd';
import PageHero from '../component/PageHero';

const TITLE = `Our Hospitals | ${HOSPITAL_COUNT}+ CurePlus Hospitals across Karnataka`;
const DESCRIPTION = `Find your nearest CurePlus hospital: ${HOSPITAL_COUNT}+ hospitals across ${districts.join(', ')}, offering multispeciality care, diagnostics, emergency and pharmacy services.`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/hospitals' },
  robots: { index: true, follow: true },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `${SITE_URL}/hospitals`, siteName: SITE.name, locale: 'en_IN', type: 'website', images: OG_IMAGES },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: OG_IMAGES.map((i) => i.url) },
};

const items: ExplorerItem[] = hospitals.map(({ id, name, location, town, district, is24x7, specialtyTags }) => ({
  id,
  name,
  location,
  town,
  district,
  is24x7,
  specialtyTags,
}));

// Cards are rendered on the server (no card code is shipped to the browser); the explorer only shows/hides them.
const cards: Record<number, React.ReactNode> = Object.fromEntries(
  hospitals.map((h, i) => [h.id, <HospitalCard key={h.id} hospital={h} priority={i < 2} />]),
);

const features = [
  { icon: BadgeCheck, text: `${HOSPITAL_COUNT}+ hospitals across ${districts.length} districts` },
  { icon: Stethoscope, text: 'NABH accredited flagship hospital' },
  { icon: Pill, text: 'Affordable generic medicines' },
  { icon: FlaskConical, text: 'Modern diagnostic services' },
  { icon: Users, text: 'Experienced medical professionals' },
];

const collectionJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: TITLE,
  url: `${SITE_URL}/hospitals`,
  description: DESCRIPTION,
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: HOSPITAL_COUNT,
    itemListElement: hospitals.map((h, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: hospitalUrl(h),
      name: h.name,
    })),
  },
};

export default function HospitalsPage() {
  return (
    <>
      <JsonLd data={collectionJsonLd} />
      <PageHero
        eyebrow="Our healthcare network"
        title="Our Healthcare Network Across Karnataka"
        lead={`CurePlus Hospitals provides accessible, affordable care at ${HOSPITAL_COUNT}+ facilities across ${districts.join(', ')}, from urban centres to underserved regions.`}
        crumbs={[{ name: 'Our Hospitals' }]}
      />

      <section className="section" aria-labelledby="hospital-list-heading">
        <div className="container-page">
          <h2 id="hospital-list-heading" className="sr-only">
            Find a hospital
          </h2>
          <HospitalsExplorer items={items} cards={cards} />
        </div>
      </section>

      <section className="section-tint border-t border-brand-100 py-9 md:py-12" aria-labelledby="network-features-heading">
        <div className="container-page">
          <h2 id="network-features-heading" className="mb-6 text-center text-h3 text-brand-950">
            What every CurePlus hospital offers
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {features.map(({ icon: Icon, text }) => (
              <li key={text} className="card flex items-center gap-3 p-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-800">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold leading-snug text-brand-950">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
