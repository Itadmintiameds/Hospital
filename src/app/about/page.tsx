import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Eye, HeartPulse, Pill, Target, Flag, Ambulance } from 'lucide-react';
import { HOSPITAL_COUNT, districts, hospitals } from '../data/Hospital';
import { MISSION, SITE, SITE_URL, TARGET_YEAR, VISION, OG_IMAGES } from '../data/site';
import Gallery, { type GalleryItem } from '../component/Gallery';
import JsonLd from '../component/JsonLd';
import LicenceStrip from '../component/LicenceStrip';
import PageHero from '../component/PageHero';
import Photo from '../component/Photo';
import StatsGrid from '../component/StatsGrid';

const TITLE = 'About CurePlus Hospitals | Mission, Vision & Leadership';
const DESCRIPTION = `Learn about CurePlus Hospitals: our mission and vision, leadership team and a network of ${HOSPITAL_COUNT}+ hospitals bringing affordable multispeciality care across Karnataka.`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/about' },
  robots: { index: true, follow: true },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `${SITE_URL}/about`, siteName: SITE.name, locale: 'en_IN', type: 'website', images: OG_IMAGES },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: OG_IMAGES.map((i) => i.url) },
};

const STORY = [
  'Founded in August 2013 by Dr. Arjun Sachidanand and Dr. Sini Arjun, Sudhanand Healthcare Solutions Pvt. Ltd. is dedicated to delivering high-quality healthcare services at subsidized rates.',
  'The organization focuses on preventive care, diagnostics, telemedicine, and education to enhance healthcare accessibility.',
  'With a growing CurePlus Hospital network across Karnataka, SHPL continues to improve rural and underserved healthcare outcomes.',
];

const VALUE_PROPS = [
  { title: '24/7 Medical Services', desc: 'Round-the-clock emergency and primary healthcare access.', icon: Ambulance },
  { title: 'Advanced Diagnostics', desc: 'High-tech tools and accurate diagnostic support.', icon: HeartPulse },
  { title: 'In-house CurePlus Pharma', desc: 'Affordable, quality medicines for every patient.', icon: Pill },
];

const LEADERS = [
  {
    name: 'Ram Hebbale Hiriyanna',
    role: 'Senior Vice President',
    photo: '/images/team/ram-hebbale-hiriyanna',
    bio: 'With over 15 years of experience in business development, marketing strategy, and operations, he brings strong expertise in B2B growth, process excellence, and quality management. As Senior Vice President at Sudhanand Group, he drives operational efficiency, strategic decision-making, and sustainable organizational growth, with a strong focus on collaboration and continuous improvement.',
  },
  {
    name: 'Manjunath P',
    role: 'Senior Manager – Purchase & Procurement',
    photo: '/images/team/manjunath-p',
    bio: "Manjunath P is responsible for overseeing purchase and procurement activities across the organisation, coordinating the sourcing and timely availability of varied requirements. Working closely with Sr. Operations Manager – Srinivas, he supports efficient procurement processes, vendor coordination, cost management, and timely fulfilment of organisational needs. In addition to his procurement responsibilities, Manjunath is also involved in managing and supporting the company's Pharma business, contributing to its day-to-day operations, coordination, and business requirements. His role combines procurement expertise, cross-functional coordination, and practical execution to support the organisation's operational and business objectives.",
  },
];

const FACILITIES = [
  { file: 'facility-reception', label: 'Reception', alt: 'Reception desk with a receptionist at a CurePlus hospital' },
  { file: 'facility-pharmacy', label: 'Pharmacy', alt: 'Fully stocked CurePlus pharmacy counter' },
  { file: 'facility-consultation-room', label: 'Consultation room', alt: 'Doctor consultation room with examination couch' },
  { file: 'facility-inpatient-ward', label: 'Inpatient ward', alt: 'Inpatient ward with hospital beds and curtains' },
  { file: 'facility-examination-room', label: 'Examination room', alt: 'Examination room with the CurePlus logo wall' },
  { file: 'facility-scan-room', label: 'Scan room', alt: 'Scan and ultrasound room with examination bed' },
  { file: 'facility-lab-nurse-station', label: 'Lab & nursing station', alt: 'Nurses at the lab and nursing station' },
];

const facilityItems: GalleryItem[] = FACILITIES.map(({ file, alt }) => ({
  id: file,
  slideSrc: `/images/facilities/${file}.webp`,
  alt,
  thumb: <Photo src={`/images/facilities/${file}`} alt={alt} sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw" />,
}));

const aboutJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: TITLE,
  url: `${SITE_URL}/about`,
  description: DESCRIPTION,
  mainEntity: {
    '@type': 'MedicalOrganization',
    name: SITE.name,
    url: SITE_URL,
    telephone: '+91-9035193777',
    description: MISSION,
    employee: LEADERS.map((l) => ({ '@type': 'Person', name: l.name, jobTitle: l.role })),
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutJsonLd} />
      <PageHero
        eyebrow="About us"
        title="Building Healthier Communities"
        lead="CurePlus Hospitals is committed to transforming rural healthcare across India."
        crumbs={[{ name: 'About Us' }]}
      >
        <Link href="/hospitals" className="btn btn-light btn-lg">
          Our hospitals
          <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </Link>
        <Link href="/contact" className="btn btn-outline-light btn-lg">
          Contact us
        </Link>
      </PageHero>

      {/* Story */}
      <section className="section" aria-labelledby="story-heading">
        <div className="container-page grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="eyebrow">Who we are</p>
            <h2 id="story-heading" className="mt-3 text-h2 text-brand-950">
              Quality healthcare for every community
            </h2>
            <div className="mt-5 space-y-4">
              {STORY.map((text) => (
                <p key={text} className="copy">
                  {text}
                </p>
              ))}
            </div>
            <ul className="mt-7 flex flex-wrap gap-3">
              {[
                { href: '/team', label: 'Our team' },
                { href: '/services', label: 'Specialities' },
                { href: '/hospitals', label: 'Hospital locations' },
                { href: '/contact', label: 'Contact us' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="btn btn-secondary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <ul className="grid gap-4">
            {VALUE_PROPS.map(({ title, desc, icon: Icon }) => (
              <li key={title} className="card flex items-start gap-4 p-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-800">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-brand-950">{title}</h3>
                  <p className="mt-1 text-ink-soft">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Mission & Vision (wording supplied by the client – do not paraphrase) */}
      <section className="section section-tint" aria-labelledby="mission-vision-heading">
        <div className="container-page">
          <div className="section-heading" data-reveal>
            <p className="eyebrow justify-center">What drives us</p>
            <h2 id="mission-vision-heading">Our mission &amp; vision</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <article data-reveal className="card relative overflow-hidden p-7 sm:p-9">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-700 to-brand-900 text-white shadow-card">
                <Target className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-h3 text-brand-950">Mission</h3>
              <p className="mt-3 text-[1.05rem] leading-relaxed text-ink-soft">{MISSION}</p>
            </article>
            <article data-reveal style={{ ['--reveal-delay' as string]: '100ms' }} className="card relative overflow-hidden p-7 sm:p-9">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-700 to-brand-900 text-white shadow-card">
                <Eye className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-h3 text-brand-950">Vision</h3>
              <p className="mt-3 text-[1.05rem] leading-relaxed text-ink-soft">{VISION}</p>
            </article>
          </div>
          <div data-reveal className="mt-6 flex items-center gap-4 rounded-card bg-brand-950 p-5 text-white sm:p-6">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15">
              <Flag className="h-6 w-6" aria-hidden="true" />
            </span>
            <p className="text-[1.02rem] leading-snug">
              <strong className="font-bold">Our goal:</strong> 200+ hospitals across India by {TARGET_YEAR}, with a focus on rural
              and underserved areas.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section" aria-labelledby="impact-heading">
        <div className="container-page">
          <div className="section-heading" data-reveal>
            <p className="eyebrow justify-center">Our impact</p>
            <h2 id="impact-heading">CurePlus at a glance</h2>
          </div>
          <StatsGrid className="grid-cols-2 lg:grid-cols-3" />
        </div>
      </section>

      <LicenceStrip />

      {/* Leadership */}
      <section className="section" aria-labelledby="leadership-heading">
        <div className="container-page">
          <div className="section-heading" data-reveal>
            <p className="eyebrow justify-center">Leadership</p>
            <h2 id="leadership-heading">The people steering CurePlus</h2>
            <p>
              Experienced leaders keeping our hospitals efficient, well supplied and focused on patients. Meet the rest of our
              team on the{' '}
              <Link href="/team" className="font-semibold text-brand-800 underline underline-offset-4">
                team page
              </Link>
              .
            </p>
          </div>
          <ul className="grid gap-6 lg:grid-cols-2">
            {LEADERS.map((leader, i) => (
              <li
                key={leader.name}
                data-reveal
                style={{ ['--reveal-delay' as string]: `${i * 100}ms` }}
                className="card flex flex-col items-center gap-5 p-6 text-center sm:flex-row sm:items-start sm:p-8 sm:text-left"
              >
                <picture className="shrink-0">
                  <source type="image/webp" srcSet={`${leader.photo}-240.webp 240w, ${leader.photo}.webp 480w`} sizes="144px" />
                  <img
                    src={`${leader.photo}.jpg`}
                    srcSet={`${leader.photo}-240.jpg 240w, ${leader.photo}.jpg 480w`}
                    sizes="144px"
                    alt={`${leader.name}, ${leader.role}`}
                    width={480}
                    height={480}
                    loading="lazy"
                    decoding="async"
                    className="h-32 w-32 rounded-full border-4 border-brand-100 object-cover shadow-card sm:h-36 sm:w-36"
                  />
                </picture>
                <div>
                  <h3 className="text-h3 text-brand-950">{leader.name}</h3>
                  <p className="mt-1 font-semibold text-brand-700">{leader.role}</p>
                  <p className="copy mt-3">{leader.bio}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Facilities gallery */}
      <section className="section section-tint" aria-labelledby="facilities-heading">
        <div className="container-page">
          <div className="section-heading" data-reveal>
            <p className="eyebrow justify-center">Inside our hospitals</p>
            <h2 id="facilities-heading">Our facilities</h2>
            <p>Clean, modern spaces designed around patient comfort. Tap any photo to view it larger.</p>
          </div>
          <Gallery
            items={facilityItems}
            className="grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            trailingClassName="md:col-span-2 lg:col-span-1"
            trailing={
              <div className="on-dark flex h-full min-h-[10rem] flex-col justify-center rounded-card bg-gradient-to-br from-brand-800 to-brand-950 p-5 text-white shadow-card">
                <p className="text-lg font-bold leading-snug">Visit your nearest CurePlus hospital</p>
                <Link href="/hospitals" className="btn btn-light mt-4 self-start">
                  Find a hospital
                </Link>
              </div>
            }
          />
        </div>
      </section>

      {/* Hospital list */}
      <section className="section" aria-labelledby="under-shpl-heading">
        <div className="container-page">
          <div className="section-heading" data-reveal>
            <p className="eyebrow justify-center">Hospitals under SHPL</p>
            <h2 id="under-shpl-heading">Our growing network of {HOSPITAL_COUNT} hospitals</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {districts.map((district) => (
              <div key={district} className="card p-5">
                <h3 className="text-lg font-bold text-brand-950">{district}</h3>
                <ul className="mt-3 space-y-1">
                  {hospitals
                    .filter((h) => h.district === district)
                    .map((h) => (
                      <li key={h.id}>
                        <Link href={h.path} className="inline-flex min-h-[2.75rem] items-center text-[0.95rem] font-medium text-brand-800 hover:underline sm:min-h-[2.25rem]">
                          {h.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-10 md:pb-14">
        <div className="container-page">
          <div className="on-dark rounded-panel bg-gradient-to-r from-brand-800 to-brand-950 px-6 py-9 text-center text-white sm:px-10">
            <h2 className="text-h2 text-white">Join us in building a healthier future</h2>
            <Link href="/careers" className="btn btn-light btn-lg mt-6">
              Explore careers
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
