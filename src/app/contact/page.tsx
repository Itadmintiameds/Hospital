import type { Metadata } from 'next';
import Link from 'next/link';
import { Ambulance, ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { districts, hospitals, telHref } from '../data/Hospital';
import { SITE, SITE_URL, OG_IMAGES } from '../data/site';
import JsonLd from '../component/JsonLd';
import PageHero from '../component/PageHero';
import WrapEmail from '../component/WrapEmail';

const TITLE = 'Contact CurePlus Hospitals | Phone, Email & Hospital Directory';
const DESCRIPTION =
  'Contact CurePlus Hospitals for appointments, emergency care, and healthcare support across Karnataka. Call us anytime for assistance.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/contact' },
  robots: { index: true, follow: true },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `${SITE_URL}/contact`, siteName: SITE.name, locale: 'en_IN', type: 'website', images: OG_IMAGES },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: OG_IMAGES.map((i) => i.url) },
};

const contactJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: TITLE,
  url: `${SITE_URL}/contact`,
  mainEntity: {
    '@type': 'MedicalOrganization',
    name: SITE.name,
    url: SITE_URL,
    logo: `${SITE_URL}/CUREPLUS%20HOSPITALS.png`,
    image: `${SITE_URL}/images/hospitals/halli-mysuru-hospital.jpg`,
    telephone: '+91-9035193777',
    email: SITE.emailContact,
    address: { '@type': 'PostalAddress', addressLocality: 'Mysuru', addressRegion: 'Karnataka', addressCountry: 'IN' },
    areaServed: 'Karnataka',
    availableLanguage: ['English', 'Kannada'],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-9035193777',
      contactType: 'customer support',
      areaServed: 'IN',
      availableLanguage: ['English', 'Kannada'],
    },
  },
};

const channels = [
  { icon: Phone, title: 'Call us', value: SITE.phoneDisplay, href: SITE.phoneHref },
  { icon: Mail, title: 'Email', value: SITE.emailContact, href: `mailto:${SITE.emailContact}` },
  { icon: MapPin, title: 'Head office', value: SITE.region, href: 'https://maps.google.com/?q=Mysuru,Karnataka,India' },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactJsonLd} />
      <PageHero
        eyebrow="Contact us"
        title="Contact CurePlus Hospitals"
        lead="For appointments, emergency care and healthcare support across Karnataka, call us anytime."
        crumbs={[{ name: 'Contact Us' }]}
      />

      <section className="section" aria-label="Contact details">
        <div className="container-page">
          <ul className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {channels.map(({ icon: Icon, title, value, href }) => (
              <li key={title} className="card flex min-w-0 items-center gap-4 p-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-800">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-ink-muted">{title}</p>
                  <a href={href} className="block min-h-[2.25rem] break-words py-1 text-lg font-semibold text-brand-900 hover:underline">
                    <WrapEmail value={value} />
                  </a>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-card bg-red-50 p-5 ring-1 ring-red-200">
              <h2 className="flex items-center gap-2 text-lg font-bold text-red-900">
                <Ambulance className="h-5 w-5" aria-hidden="true" />
                In an emergency?
              </h2>
              <p className="mt-1 text-red-900/90">Please call us directly.</p>
              <a href={SITE.phoneHref} className="btn btn-call mt-4">
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call {SITE.phoneDisplay}
              </a>
            </div>

            <Link href="/hospitals" className="card card-hover flex items-center justify-between gap-4 p-5">
              <span>
                <span className="block text-lg font-bold text-brand-950">Find your nearest hospital</span>
                <span className="text-sm text-ink-soft">Addresses, directions and phone numbers for all {hospitals.length} hospitals.</span>
              </span>
              <ArrowRight className="h-5 w-5 shrink-0 text-brand-700" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-tint border-t border-brand-100 py-9 md:py-12" aria-labelledby="directory-heading">
        <div className="container-page">
          <h2 id="directory-heading" className="mb-6 text-center text-h3 text-brand-950">
            Call a hospital directly
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {districts.map((district) => (
              <div key={district} className="card p-5">
                <h3 className="text-lg font-bold text-brand-950">{district}</h3>
                <ul className="mt-2 divide-y divide-brand-100">
                  {hospitals
                    .filter((h) => h.district === district)
                    .map((h) => (
                      <li key={h.id} className="flex flex-wrap items-center justify-between gap-x-4 gap-y-0.5 py-2">
                        <Link href={h.path} className="inline-flex min-h-[2.25rem] items-center text-[0.95rem] font-medium text-brand-800 hover:underline">
                          {h.name}
                        </Link>
                        <a href={telHref(h.contact.phone)} className="inline-flex min-h-[2.25rem] items-center text-[0.95rem] font-semibold text-ink hover:underline">
                          {h.contact.phone}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
