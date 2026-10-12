import Image from 'next/image';
import Link from 'next/link';
import { FaAddressCard } from 'react-icons/fa';

/** CurePlus Arogya card promo. */
const Banner = () => (
  <section className="section" aria-labelledby="arogya-heading">
    <div className="container-page">
      <div className="relative isolate overflow-hidden rounded-panel border border-brand-200 bg-white shadow-card">
        {/* Image: banner on phones, right-hand panel on large screens */}
        <div className="relative aspect-[16/8] w-full lg:absolute lg:inset-y-0 lg:right-0 lg:aspect-auto lg:w-[62%]">
          <Image
            src="/card.jpeg"
            alt="A CurePlus Arogya card holder with the Kutumba family card"
            width={2560}
            height={1280}
            sizes="(min-width: 1024px) 62vw, 100vw"
            className="h-full w-full object-cover object-right"
          />
        </div>

        <div className="relative z-10 px-6 py-8 sm:px-10 lg:w-[48%] lg:py-14 lg:pl-14" data-reveal="left">
          <p className="eyebrow">New · CurePlus Arogya</p>
          <h2 id="arogya-heading" className="mt-3 text-h2 text-brand-950">
            Introducing CurePlus Arogya Card
          </h2>
          <p className="copy mt-4 max-w-md">
            Exclusive healthcare plans offering comprehensive coverage with a special 25% discount on all services.
          </p>
          <Link href="/cure-arogya" className="btn btn-primary btn-lg mt-7" aria-label="Get your CurePlus Arogya card">
            <FaAddressCard aria-hidden="true" />
            Get Your Card
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default Banner;
