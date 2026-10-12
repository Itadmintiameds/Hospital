import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { HOSPITAL_COUNT, districts, getHospitalById } from '../data/Hospital';
import HospitalCard from './HospitalCard';
import LazyLoopVideo from './LazyLoopVideo';

// Hospitals featured on the home page (the six with the newest photos).
const FEATURED_IDS = [13, 2, 4, 8, 7, 6];

const NetworkSection = () => {
  const featured = FEATURED_IDS.map(getHospitalById).filter((h): h is NonNullable<typeof h> => Boolean(h));

  return (
    <section className="section section-tint" aria-labelledby="network-heading">
      <div className="container-page">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div data-reveal="left">
            <p className="eyebrow">Our network</p>
            <h2 id="network-heading" className="mt-3 text-h2 text-brand-950">
              {HOSPITAL_COUNT} hospitals, one trusted network
            </h2>
            <p className="copy mt-5">
              From Mysuru to Chamarajanagar, Kodagu, Mandya, Hassan and Tumkuru, CurePlus hospitals bring consistent,
              affordable care to the towns and villages that need it most.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Districts we serve">
              {districts.map((district) => (
                <li key={district}>
                  <Link
                    href={`/hospitals?district=${encodeURIComponent(district)}`}
                    className="inline-flex min-h-[2.5rem] items-center rounded-full border border-brand-200 bg-white px-4 text-sm font-semibold text-brand-800 transition hover:bg-brand-50"
                  >
                    {district}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div data-reveal="right">
            {/* final.mp4 is a 1:1 (2880x2880) map animation: keep a square frame + object-contain so nothing is cropped */}
            <LazyLoopVideo
              src="/final.mp4"
              label="Animated map of the CurePlus Hospitals network"
              className="mx-auto aspect-square w-full max-w-[28rem] rounded-panel shadow-pop"
            />
          </div>
        </div>

        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((hospital, i) => (
            <li
              key={hospital.id}
              data-reveal
              style={{ ['--reveal-delay' as string]: `${(i % 3) * 90}ms` }}
            >
              <HospitalCard hospital={hospital} />
            </li>
          ))}
        </ul>

        <div className="mt-7 text-center">
          <Link href="/hospitals" className="btn btn-primary btn-lg">
            View all {HOSPITAL_COUNT} hospitals
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NetworkSection;
