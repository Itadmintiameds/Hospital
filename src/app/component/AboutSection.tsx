import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import StatsGrid from './StatsGrid';

/** Home page "About" intro + animated stats. */
const AboutSection = () => (
  <section className="section section-tint" aria-labelledby="about-heading">
    <div className="container-page grid gap-8 lg:grid-cols-[1fr_1.35fr] lg:items-center lg:gap-12">
      <div data-reveal="left">
        <p className="eyebrow">About CurePlus Hospitals</p>
        <h2 id="about-heading" className="mt-3 text-h2 text-brand-950">
          Healthcare that stays close to the community
        </h2>
        <p className="copy mt-5">
          CurePlus Hospitals, a part of Sudhanand Health Care Solutions, is transforming rural healthcare with a growing
          network across Karnataka.
        </p>
        <p className="copy mt-4">
          Our 24/7 medical care, advanced diagnostics and CurePlus Pharma make quality treatment accessible and affordable to
          everyone.
        </p>
        <Link href="/about" className="btn btn-secondary mt-7">
          More about us
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>

      <StatsGrid className="grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3" />
    </div>
  </section>
);

export default AboutSection;
