import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Ambulance,
  ArrowRight,
  BedDouble,
  CheckCircle2,
  Clock,
  MapPin,
  Microscope,
  Navigation,
  Phone,
  Pill,
  Scan,
  Stethoscope,
  Users,
  type LucideIcon,
} from 'lucide-react';
import {
  buildHospitalJsonLd,
  directionsUrl,
  getHospitalById,
  getHospitalBySlug,
  hospitalUrl,
  hospitals,
  telHref,
  type Hospital,
} from '../../data/Hospital';
import { SITE, SITE_URL } from '../../data/site';
import Badge247 from '../../component/Badge247';
import Gallery from '../../component/Gallery';
import JsonLd from '../../component/JsonLd';
import Photo from '../../component/Photo';

type Props = { params: Promise<{ slug: string }> };

/** The route param is the hospital id (see `rewrites` in next.config.ts) but a real slug works too. */
const findHospital = (param: string): Hospital | undefined =>
  /^\d+$/.test(param) ? getHospitalById(Number(param)) : getHospitalBySlug(param);

export function generateStaticParams() {
  return hospitals.map((h) => ({ slug: String(h.id) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const hospital = findHospital(slug);
  if (!hospital) return { title: 'Hospital not found | CurePlus Hospitals' };

  const { seo } = hospital;
  const url = hospitalUrl(hospital);
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url,
      siteName: SITE.name,
      locale: 'en_IN',
      type: 'website',
      images: [{ url: `${hospital.photo.src}.jpg`, width: 1200, height: 750, alt: hospital.photo.alt }],
    },
    twitter: { card: 'summary_large_image', title: seo.title, description: seo.description, images: [`${hospital.photo.src}.jpg`] },
  };
}

const iconFor = (label: string): LucideIcon => {
  const l = label.toLowerCase();
  if (/bed|ward|room/.test(l)) return BedDouble;
  if (/ambulance/.test(l)) return Ambulance;
  if (/pharmacy/.test(l)) return Pill;
  if (/x-?ray|usg|ucg|scan|imaging/.test(l)) return Scan;
  if (/lab|pathology|diagnos/.test(l)) return Microscope;
  if (/desk|welfare|team|practitioner/.test(l)) return Users;
  if (/opd|ipd|care|specialty|multi/.test(l)) return Stethoscope;
  return CheckCircle2;
};

const bedsLabel = (h: Hospital) => h.facilities.find((f) => /\bbeds?\b/i.test(f));

export default async function HospitalPage({ params }: Props) {
  const { slug } = await params;
  const hospital = findHospital(slug);
  if (!hospital) notFound();

  const { contact } = hospital;
  const beds = bedsLabel(hospital);
  const directions = directionsUrl(hospital);

  // Other hospitals: same district first, then the rest
  const others = hospitals
    .filter((h) => h.id !== hospital.id)
    .sort((a, b) => Number(b.district === hospital.district) - Number(a.district === hospital.district))
    .slice(0, 5);

  const galleryItems = hospital.gallery.map((src, i) => {
    const alt = hospital.seo.altTexts[i] || `${hospital.name}: photo ${i + 1}`;
    return {
      id: src,
      slideSrc: src,
      alt,
      thumb: <Image src={src} alt={alt} width={640} height={400} sizes="(min-width: 1024px) 20vw, 45vw" className="h-full w-full object-cover" />,
    };
  });

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Our Hospitals', item: `${SITE_URL}/hospitals` },
      { '@type': 'ListItem', position: 3, name: hospital.name, item: hospitalUrl(hospital) },
    ],
  };

  return (
    <>
      <JsonLd data={buildHospitalJsonLd(hospital)} />
      <JsonLd data={breadcrumbJsonLd} />

      <div className="section-tint border-b border-brand-100">
        <div className="container-page py-6 sm:py-8">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-ink-muted">
              <li>
                <Link href="/" className="hover:text-brand-800 hover:underline">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/hospitals" className="hover:text-brand-800 hover:underline">
                  Our Hospitals
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-semibold text-brand-900">
                {hospital.name}
              </li>
            </ol>
          </nav>

          <div className="mt-4 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-h1 text-brand-950">{hospital.seo.h1}</h1>
                {hospital.is24x7 && <Badge247 className="self-center" />}
              </div>
              <p className="mt-2 flex items-start gap-2 text-lead text-ink-soft">
                <MapPin className="mt-1.5 h-5 w-5 shrink-0 text-brand-700" aria-hidden="true" />
                {hospital.location}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {beds && (
                  <li className="badge-soft">
                    <BedDouble className="h-3.5 w-3.5" aria-hidden="true" />
                    {beds}
                  </li>
                )}
                {contact.pincode && <li className="badge-soft">PIN {contact.pincode}</li>}
                {hospital.specialtyTags.slice(0, 3).map((tag) => (
                  <li key={tag} className="chip">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href={directions} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <Navigation className="h-4 w-4" aria-hidden="true" />
                Get Directions
                <span className="sr-only"> (opens Google Maps in a new tab)</span>
              </a>
              <a href={telHref(contact.phone)} className="btn btn-call">
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call {contact.phone}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container-page py-6 sm:py-8">
        <div className="skeleton photo-16x10 relative mx-auto max-w-5xl overflow-hidden rounded-panel shadow-pop">
          <Photo
            src={hospital.photo.src}
            alt={hospital.photo.alt}
            priority
            sizes="(min-width: 1024px) 1024px, 100vw"
          />
          {hospital.is24x7 && <Badge247 className="absolute left-4 top-4" />}
        </div>

        <div className="mt-7 grid gap-7 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-10">
          {/* Sidebar: first on phones (address & directions are what people need) */}
          <aside className="space-y-5 lg:col-start-2 lg:row-start-1" aria-label="Contact and directions">
            <div className="card p-6 lg:sticky lg:top-[calc(var(--header-h)+1rem)]">
              <h2 className="text-h3 text-brand-950">Address &amp; directions</h2>
              <address className="mt-4 flex items-start gap-3 not-italic text-ink-soft">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-brand-700" aria-hidden="true" />
                <span>
                  {contact.address}
                  {contact.pincode && !contact.address.includes(contact.pincode) && <> – {contact.pincode}</>}
                </span>
              </address>
              {contact.pincode && (
                <p className="mt-3 text-sm text-ink-soft">
                  <span className="font-semibold text-brand-950">Pincode:</span> {contact.pincode}
                </p>
              )}
              <p className="mt-3 flex items-center gap-3 text-ink-soft">
                <Phone className="h-5 w-5 shrink-0 text-brand-700" aria-hidden="true" />
                <a href={telHref(contact.phone)} className="inline-flex min-h-[2.75rem] items-center font-semibold text-brand-800 hover:underline">
                  {contact.phone}
                </a>
              </p>

              <div className="mt-5">
                <a href={directions} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <Navigation className="h-4 w-4" aria-hidden="true" />
                  Get Directions
                  <span className="sr-only"> (opens Google Maps in a new tab)</span>
                </a>
              </div>

              <div className="mt-6 border-t border-brand-100 pt-5">
                <h3 className="flex items-center gap-2 text-base font-semibold text-brand-950">
                  <Clock className="h-5 w-5 text-brand-700" aria-hidden="true" />
                  Timings
                </h3>
                {hospital.is24x7 ? (
                  <p className="mt-2 flex flex-wrap items-center gap-2 text-ink-soft">
                    <Badge247 /> Open 24 hours, all days of the week.
                  </p>
                ) : (
                  <p className="mt-2 text-ink-soft">Please call the hospital to confirm OPD timings before you visit.</p>
                )}
              </div>
            </div>

            <div className="rounded-card bg-red-50 p-5 ring-1 ring-red-200">
              <h3 className="flex items-center gap-2 font-bold text-red-900">
                <Ambulance className="h-5 w-5" aria-hidden="true" />
                Network helpline
              </h3>
              <a href={SITE.phoneHref} className="mt-1 inline-flex min-h-[2.75rem] items-center text-2xl font-extrabold text-red-800 hover:underline">
                {SITE.phoneDisplay}
              </a>
            </div>
          </aside>

          {/* Main content */}
          <div className="space-y-8 lg:col-start-1 lg:row-start-1">
            <section aria-labelledby="about-heading">
              <h2 id="about-heading" className="text-h2 text-brand-950">
                About the hospital
              </h2>
              <p className="copy mt-4 whitespace-pre-line">{hospital.description}</p>
            </section>

            <section aria-labelledby="services-heading">
              <h2 id="services-heading" className="text-h2 text-brand-950">
                Services
              </h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {hospital.services.map((service) => (
                  <li key={service} className="flex items-center gap-3 rounded-xl border border-brand-100 bg-brand-50/60 px-4 py-3">
                    <Stethoscope className="h-5 w-5 shrink-0 text-brand-700" aria-hidden="true" />
                    <span className="font-medium text-brand-950">{service}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="facilities-heading">
              <h2 id="facilities-heading" className="text-h2 text-brand-950">
                Facilities
              </h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {hospital.facilities.map((facility) => {
                  const Icon = iconFor(facility);
                  return (
                    <li key={facility} className="flex items-center gap-3 rounded-xl border border-emerald-100 bg-emerald-50/60 px-4 py-3">
                      <Icon className="h-5 w-5 shrink-0 text-emerald-700" aria-hidden="true" />
                      <span className="font-medium text-ink">{facility}</span>
                    </li>
                  );
                })}
              </ul>
            </section>

            <section aria-labelledby="infra-heading" className="card p-6 sm:p-8">
              <h2 id="infra-heading" className="text-h3 text-brand-950">
                Infrastructure
              </h2>
              <p className="copy mt-3">{hospital.infrastructure}</p>
            </section>

            {galleryItems.length > 0 && (
              <section aria-labelledby="gallery-heading">
                <h2 id="gallery-heading" className="text-h2 text-brand-950">
                  Gallery
                </h2>
                <div className="mt-5">
                  <Gallery items={galleryItems} className="grid-cols-2 md:grid-cols-3" aspect="aspect-[16/10]" />
                </div>
              </section>
            )}
          </div>
        </div>
      </div>

      {contact.embedMapUrl && (
        <section className="container-page pb-8" aria-labelledby="map-heading">
          <h2 id="map-heading" className="mb-5 text-h2 text-brand-950">
            Find us on the map
          </h2>
          <div className="aspect-[4/3] overflow-hidden rounded-panel border border-brand-100 shadow-card sm:aspect-[16/8]">
            <iframe
              src={contact.embedMapUrl}
              title={`Map showing ${hospital.name}`}
              className="h-full w-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="mt-3 text-sm text-ink-soft">
            <a href={directions} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[2.75rem] items-center gap-1.5 font-semibold text-brand-800 hover:underline">
              Open in Google Maps <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </p>
        </section>
      )}

      <section className="section-tint border-t border-brand-100 py-8 md:py-10" aria-labelledby="others-heading">
        <div className="container-page">
          <h2 id="others-heading" className="mb-5 text-h2 text-brand-950">
            More CurePlus hospitals
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {others.map((h) => (
              <li key={h.id}>
                <Link href={h.path} className="card card-hover flex h-full flex-col overflow-hidden">
                  <div className="skeleton photo-16x10">
                    <Photo src={h.photo.src} alt={h.photo.alt} sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw" />
                  </div>
                  <span className="p-4 text-sm font-semibold leading-snug text-brand-950">{h.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
