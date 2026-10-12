import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Activity,
  ArrowRight,
  Baby,
  BedDouble,
  Bot,
  Brain,
  Building2,
  CalendarCheck,
  Droplets,
  Flower2,
  Hourglass,
  Network,
  HeartPulse,
  Scissors,
  Stethoscope,
  Hospital as HospitalIcon,
  type LucideIcon,
} from 'lucide-react';
import { HOSPITAL_COUNT } from '../data/Hospital';
import { SITE, SITE_URL, SUPER_HUB, type VideoItem, OG_IMAGES } from '../data/site';
import JsonLd from '../component/JsonLd';
import PageHero from '../component/PageHero';
import TimelineProgress from '../component/TimelineProgress';
import VideoSection from '../component/VideoSection';

const TITLE = `CurePlus Super Hub, ${SUPER_HUB.city} | ${SUPER_HUB.beds}-Bed Referral Hospital`;
const DESCRIPTION = `The CurePlus Super Hub: a ${SUPER_HUB.beds}-bed referral hospital in ${SUPER_HUB.city}, planned for completion by the ${SUPER_HUB.completion.toLowerCase()}. Advanced specialities for the whole CurePlus network.`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/super-hub' },
  robots: { index: true, follow: true },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/super-hub`,
    siteName: SITE.name,
    locale: 'en_IN',
    type: 'website',
    images: OG_IMAGES,
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: OG_IMAGES.map((i) => i.url) },
};

const SERVICE_ICONS: Record<string, LucideIcon> = {
  'General Medicine': Stethoscope,
  'General Surgery': Scissors,
  Gynecology: Flower2,
  Pediatrics: Baby,
  Geriatrics: Hourglass,
  Cardiology: HeartPulse,
  'Cath Lab': Activity,
  'Robotic Orthopedic Surgery': Bot,
  Nephrology: Droplets,
  'Neurology & Neurosurgery': Brain,
};

const ROLE_STEPS = [
  {
    icon: HospitalIcon,
    title: 'Care close to home',
    text: 'Patients first visit their local CurePlus hospital for consultation, diagnostics and everyday treatment.',
  },
  {
    icon: Network,
    title: 'Referral to the Super Hub',
    text: 'When a patient needs advanced specialist care, the local team refers them to the Super Hub in Mysuru.',
  },
  {
    icon: Building2,
    title: 'Advanced specialist care',
    text: `${SUPER_HUB.beds} beds and specialist departments bring complex treatment within the CurePlus family.`,
  },
  {
    icon: HeartPulse,
    title: 'Continuity back home',
    text: 'Follow-up and ongoing care continue at the patient’s own CurePlus hospital.',
  },
];

// The construction announcement video already used on the site (04-09-2025).
const CONSTRUCTION_VIDEO: VideoItem = {
  id: 'TkLjQyNti78',
  title: 'A New Chapter for CurePlus Hospitals',
  date: '04-09-2025',
  description:
    'Construction of our new CurePlus Hospital has begun, reinforcing our commitment to advanced, compassionate healthcare for generations to come.',
};

const pageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: TITLE,
  url: `${SITE_URL}/super-hub`,
  description: DESCRIPTION,
  about: {
    '@type': 'Hospital',
    name: SUPER_HUB.name,
    address: { '@type': 'PostalAddress', addressLocality: SUPER_HUB.city, addressRegion: 'Karnataka', addressCountry: 'IN' },
    numberOfBeds: SUPER_HUB.beds,
    parentOrganization: { '@type': 'Organization', name: SITE.parent },
  },
};

export default function SuperHubPage() {
  return (
    <>
      <JsonLd data={pageJsonLd} />

      <PageHero
        eyebrow={`Coming soon · ${SUPER_HUB.city}`}
        title={`The CurePlus Super Hub: ${SUPER_HUB.beds} beds in ${SUPER_HUB.city}`}
        lead={`Our flagship referral hospital, planned for completion by the ${SUPER_HUB.completion.toLowerCase()}, will bring advanced specialist care to every community in the CurePlus network.`}
        crumbs={[{ name: 'Super Hub' }]}
      >
        <Link href="/contact" className="btn btn-light btn-lg">
          Enquire about the Super Hub
          <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </Link>
        <Link href="/hospitals" className="btn btn-outline-light btn-lg">
          Find a hospital
        </Link>
      </PageHero>

      {/* Key facts */}
      <section className="relative z-10 -mt-8 pb-4" aria-label="Super Hub at a glance">
        <div className="container-page">
          <ul className="grid gap-3 rounded-panel bg-white p-4 shadow-pop sm:grid-cols-3 sm:gap-4 sm:p-6">
            {[
              { icon: BedDouble, dt: 'Capacity', dd: `${SUPER_HUB.beds} beds` },
              { icon: HospitalIcon, dt: 'Location', dd: SUPER_HUB.city },
              { icon: CalendarCheck, dt: 'Completion', dd: SUPER_HUB.completion },
            ].map(({ icon: Icon, dt, dd }) => (
              <li key={dt} className="flex items-center gap-4 rounded-card bg-brand-50 p-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-700 text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink-muted">{dt}</p>
                  <p className="text-xl font-extrabold text-brand-950">{dd}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Role in the network */}
      <section className="section" aria-labelledby="role-heading">
        <div className="container-page">
          <div className="section-heading">
            <p className="eyebrow justify-center">Referral hub</p>
            <h2 id="role-heading">The hub of the CurePlus network</h2>
            <p>
              The Super Hub is designed to be the referral centre for all {HOSPITAL_COUNT}+ CurePlus hospitals, so advanced care
              is never out of reach.
            </p>
          </div>
          <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ROLE_STEPS.map(({ icon: Icon, title, text }, i) => (
              <li key={title} data-reveal style={{ ['--reveal-delay' as string]: `${i * 90}ms` }} className="card relative p-6">
                <span className="deco-number" data-n={String(i + 1)} aria-hidden="true" />
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-700 to-brand-900 text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-brand-950">{title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Timeline */}
      <section className="section section-tint" aria-labelledby="timeline-heading">
        <div className="container-page max-w-5xl">
          <div className="section-heading" data-reveal>
            <p className="eyebrow justify-center">Progress</p>
            <h2 id="timeline-heading">Road to {SUPER_HUB.completion.toLowerCase()}</h2>
          </div>
          <div className="card p-6 sm:p-10" data-reveal>
            <TimelineProgress
              milestones={SUPER_HUB.milestones}
              startDate={SUPER_HUB.constructionStart}
              endDate={SUPER_HUB.completionDate}
            />
          </div>
        </div>
      </section>

      {/* Coming soon services: visually separated band */}
      <section
        className="on-dark relative isolate overflow-hidden bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 py-10 text-white md:py-14"
        aria-labelledby="services-soon-heading"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07]"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, #fff 0 2px, transparent 2px 18px)' }}
        />
        <div className="container-page">
          <div className="mx-auto mb-7 max-w-3xl text-center md:mb-9" data-reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-300 px-4 py-1.5 text-sm font-extrabold uppercase tracking-wider text-brand-950">
              <Hourglass className="h-4 w-4" aria-hidden="true" />
              Coming soon
            </span>
            <h2 id="services-soon-heading" className="mt-4 text-h2 text-white">
              Services planned at the Super Hub
            </h2>
            <p className="mt-4 text-lead text-brand-100">
              These specialities are not available yet. They will open with the Super Hub, with more to follow.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
            {SUPER_HUB.services.map((service, i) => {
              const Icon = SERVICE_ICONS[service] ?? Stethoscope;
              return (
                <li
                  key={service}
                  data-reveal
                  style={{ ['--reveal-delay' as string]: `${(i % 3) * 70}ms` }}
                  className="flex items-center gap-4 rounded-card border border-white/15 bg-white/10 p-4 backdrop-blur"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="font-semibold leading-snug">{service}</span>
                </li>
              );
            })}
            <li className="flex items-center justify-center rounded-card border border-dashed border-white/40 p-4 text-center font-semibold text-brand-100 sm:col-span-2 lg:col-span-3">
              …and more specialities to be announced
            </li>
          </ul>
        </div>
      </section>

      <VideoSection
        videos={[CONSTRUCTION_VIDEO]}
        eyebrow="From the site"
        heading="A new chapter for CurePlus Hospitals"
        intro="Watch the announcement as construction of our new hospital begins."
      />

      <section className="pb-10 md:pb-14">
        <div className="container-page">
          <div className="on-dark rounded-panel bg-gradient-to-r from-brand-800 to-brand-950 px-6 py-9 text-center text-white sm:px-10">
            <h2 className="text-h2 text-white">Need care today? Our network is already here for you</h2>
            <p className="mx-auto mt-3 max-w-2xl text-brand-100">Visit your nearest CurePlus hospital while the Super Hub is being built.</p>
            <Link href="/hospitals" className="btn btn-light btn-lg mt-6">
              Find a hospital
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
