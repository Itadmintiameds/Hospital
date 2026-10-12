import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Home, Phone } from 'lucide-react';
import { SITE } from './data/site';

export const metadata: Metadata = {
  title: 'Page not found | CurePlus Hospitals',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-page flex flex-col items-center text-center">
        <p className="text-[clamp(4rem,3rem+8vw,8rem)] font-extrabold leading-none tracking-tight text-brand-700">404</p>
        <h1 className="mt-2 text-h1 text-brand-950">We couldn&apos;t find that page</h1>
        <p className="copy mt-4 max-w-xl">
          The link may be old or mistyped. You can head back to the home page, find your nearest CurePlus hospital, or call us
          and we will help.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className="btn btn-primary btn-lg">
            <Home className="h-5 w-5" aria-hidden="true" />
            Back to home
          </Link>
          <Link href="/hospitals" className="btn btn-secondary btn-lg">
            Find a hospital
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
          <a href={SITE.phoneHref} className="btn btn-call btn-lg">
            <Phone className="h-5 w-5" aria-hidden="true" />
            Call {SITE.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
