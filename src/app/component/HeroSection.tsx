import Link from 'next/link';
import { ArrowRight, MapPin, Phone } from 'lucide-react';
import { HOSPITAL_COUNT, districts } from '../data/Hospital';
import { SITE } from '../data/site';
import Photo from './Photo';

const HeroSection = () => (
  <section className="on-dark relative isolate overflow-hidden bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 text-white">
    {/* decorative glows */}
    <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 -z-10 h-96 w-96 rounded-full bg-brand-500/30 blur-3xl" />
    <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 left-1/4 -z-10 h-80 w-80 rounded-full bg-brand-400/20 blur-3xl" />

    <div className="container-page grid items-center gap-8 py-8 sm:py-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:py-16">
      <div>
        <p className="eyebrow-light">
          <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
          CurePlus Hospitals · Karnataka
        </p>
        <h1 className="mt-4 text-display text-white">Quality, Affordable Healthcare Closer to Home</h1>
        <p className="mt-5 max-w-xl text-lead text-brand-100">
          A trusted network of {HOSPITAL_COUNT}+ hospitals bringing specialist doctors, diagnostics, pharmacy and emergency support
          to rural and semi-urban Karnataka.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href={SITE.phoneHref} className="btn btn-light btn-lg">
            <Phone className="h-5 w-5" aria-hidden="true" />
            Call Now
          </a>
          <Link href="/hospitals" className="btn btn-outline-light btn-lg">
            Find a Hospital
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>

        <p className="mt-7 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-brand-100">
          <MapPin className="h-4 w-4 shrink-0 text-brand-200" aria-hidden="true" />
          <span className="font-semibold text-white">Serving:</span>
          {districts.join(' · ')}
        </p>
      </div>

      {/* Photo composition */}
      <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
        <div className="skeleton photo-16x10 overflow-hidden rounded-panel border-4 border-white/15 shadow-pop">
          <Photo
            src="/images/hospitals/halli-mysuru-hospital"
            alt="CurePlus Hospital, Halli Mysuru: front view with ambulance"
            priority
            sizes="(min-width: 1024px) 45vw, 100vw"
          />
        </div>
        <div className="absolute -bottom-6 -left-2 hidden w-[42%] overflow-hidden rounded-card border-4 border-white shadow-pop sm:block lg:-left-8">
          <div className="skeleton photo-16x10">
            <Photo
              src="/images/facilities/facility-reception"
              alt="Reception desk at a CurePlus hospital"
              sizes="(min-width: 1024px) 20vw, 40vw"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
