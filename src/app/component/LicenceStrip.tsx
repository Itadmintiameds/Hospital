import { ShieldCheck } from 'lucide-react';
import { LICENCES } from '../data/site';

interface LicenceStripProps {
  /** "section" = standalone band with heading (home, About). "inline" = compact, for the dark footer. */
  variant?: 'section' | 'inline';
  className?: string;
}

/** Reusable licences / approvals strip. Edit the labels in `LICENCES` (src/app/data/site.ts). */
export default function LicenceStrip({ variant = 'section', className = '' }: LicenceStripProps) {
  if (variant === 'inline') {
    return (
      <div className={className}>
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-brand-200">Licences &amp; approvals</p>
        <ul className="flex flex-wrap gap-2">
          {LICENCES.map((label) => (
            <li key={label}>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold text-white">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-300" aria-hidden="true" />
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <section className={`section-tint border-y border-brand-100 py-8 md:py-10 ${className}`} aria-labelledby="licences-heading">
      <div className="container-page text-center">
        <p className="eyebrow justify-center">Trust &amp; compliance</p>
        <h2 id="licences-heading" className="mt-2 text-h3 text-brand-950">
          Our licences &amp; approvals
        </h2>
        <ul className="mx-auto mt-7 flex max-w-4xl flex-wrap justify-center gap-3" data-reveal>
          {LICENCES.map((label) => (
            <li key={label}>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-2 text-sm font-semibold text-brand-900 shadow-sm">
                <ShieldCheck className="h-4 w-4 text-emerald-700" aria-hidden="true" />
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
