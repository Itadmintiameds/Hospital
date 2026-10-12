import Link from 'next/link';
import { ArrowRight, Baby, Bone, Brain, Ear, Flower2, HeartPulse, ScanLine, Scissors, Siren, type LucideIcon } from 'lucide-react';
import { SITE_URL } from '../data/site';
import JsonLd from '../component/JsonLd';
import PageHero from '../component/PageHero';

interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const servicesData: ServiceItem[] = [
  { icon: HeartPulse, title: 'Cardiology', description: 'Expert care for heart conditions, from diagnosis to advanced treatment.' },
  { icon: Brain, title: 'Neurology', description: 'Comprehensive neurological care for brain and nervous system disorders.' },
  { icon: Bone, title: 'Orthopedics', description: 'Advanced orthopedic treatments for bones, joints, and muscles.' },
  { icon: Baby, title: 'Pediatrics', description: 'Dedicated healthcare services for infants, children, and adolescents.' },
  { icon: Flower2, title: 'Gynecology', description: 'Comprehensive women’s healthcare and maternity services.' },
  { icon: ScanLine, title: 'Radiology', description: 'Advanced diagnostic imaging and radiology services.' },
  { icon: Ear, title: 'ENT', description: 'Specialized treatment for ear, nose, and throat conditions.' },
  { icon: Siren, title: 'Emergency Care', description: '24/7 emergency healthcare services with rapid response.' },
  { icon: Scissors, title: 'General Surgery', description: 'Safe and advanced surgical procedures with expert surgeons.' },
];

const servicesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'CurePlus Hospitals',
  url: `${SITE_URL}/services`,
  logo: `${SITE_URL}/CUREPLUS%20HOSPITALS.png`,
  description:
    'CurePlus Hospitals offers multispeciality healthcare services including cardiology, orthopedics, gynecology, pediatrics, radiology, ENT, and emergency care across Karnataka.',
  medicalSpecialty: ['Cardiology', 'Neurology', 'Orthopedics', 'Gynecology', 'General Surgery', 'Pediatrics', 'Radiology', 'ENT'],
  telephone: '+91 90351 93777',
  address: { '@type': 'PostalAddress', addressLocality: 'Mysuru', addressRegion: 'Karnataka', addressCountry: 'IN' },
  areaServed: 'Karnataka',
};

const ServicesPage = () => (
  <>
    <JsonLd data={servicesJsonLd} />
    <PageHero
      eyebrow="Our specialities"
      title="Best Multispeciality Hospital Services"
      lead="Expert care across specialities, delivered close to home at CurePlus hospitals across Karnataka."
      crumbs={[{ name: 'Specialities' }]}
    />

    <section className="section" aria-label="Specialities">
      <div className="container-page">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.map(({ icon: Icon, title, description }, i) => (
            <li key={title} {...(i >= 3 ? { 'data-reveal': '', style: { ['--reveal-delay' as string]: `${(i % 3) * 80}ms` } } : {})}>
              <Link href="/contact" className="card card-hover group flex h-full flex-col p-6">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-700 to-brand-900 text-white shadow-card">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <h2 className="mt-5 text-xl font-bold text-brand-950">{title}</h2>
                <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-ink-soft">{description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-700">
                  Enquire now
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section className="pb-10 md:pb-14">
      <div className="container-page">
        <div className="on-dark rounded-panel bg-gradient-to-r from-brand-800 to-brand-950 px-6 py-9 text-center text-white sm:px-10">
          <h2 className="text-h2 text-white">Need expert medical care?</h2>
          <p className="mx-auto mt-3 max-w-xl text-lg text-brand-100">Connect with our healthcare specialists today.</p>
          <Link href="/contact" className="btn btn-light btn-lg mt-6">
            Contact us
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default ServicesPage;
