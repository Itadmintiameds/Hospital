import Link from 'next/link';
import { ArrowRight, BedDouble, Network, Route } from 'lucide-react';
import { SUPER_HUB } from '../data/site';

/** Home page teaser linking to /super-hub. */
const SuperHubTeaser = () => (
  <section className="on-dark relative isolate overflow-hidden bg-gradient-to-br from-brand-950 via-brand-900 to-brand-700 py-10 text-white md:py-14" aria-labelledby="superhub-teaser-heading">
    <div aria-hidden="true" className="pointer-events-none absolute -left-20 top-0 -z-10 h-80 w-80 rounded-full bg-brand-500/25 blur-3xl" />
    <div className="container-page grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      <div data-reveal="left">
        <p className="eyebrow-light">Coming soon · {SUPER_HUB.city}</p>
        <h2 id="superhub-teaser-heading" className="mt-3 text-h1 text-white">
          The CurePlus Super Hub: {SUPER_HUB.beds} beds for advanced care
        </h2>
        <p className="mt-5 max-w-2xl text-lead text-brand-100">
          Our flagship referral hospital in {SUPER_HUB.city} will anchor the whole network, bringing cardiology, neurology,
          robotic orthopedic surgery and more within reach of every CurePlus community. Completion by the {SUPER_HUB.completion.toLowerCase()}.
        </p>
        <Link href="/super-hub" className="btn btn-light btn-lg mt-8">
          Explore the Super Hub
          <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </Link>
      </div>

      <ul className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1" data-reveal="right">
        {[
          { icon: BedDouble, big: `${SUPER_HUB.beds}`, small: `beds in ${SUPER_HUB.city}` },
          { icon: Network, big: 'Hub', small: 'referral centre for every CurePlus hospital' },
          { icon: Route, big: '2027', small: 'planned completion: end of the year' },
        ].map(({ icon: Icon, big, small }) => (
          <li key={small} className="flex items-center gap-4 rounded-card border border-white/15 bg-white/10 p-4 backdrop-blur">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15">
              <Icon className="h-6 w-6" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-2xl font-extrabold leading-none">{big}</span>
              <span className="mt-1 block text-sm text-brand-100">{small}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default SuperHubTeaser;
