import Link from 'next/link';
import { Hospital, Phone } from 'lucide-react';
import { SITE } from '../data/site';

/** Fixed "Call / Find a hospital" bar shown on phones only. The layout adds matching bottom padding so it never covers content. */
export default function StickyCallBar() {
  return (
    <div
      className="safe-bottom fixed inset-x-0 bottom-0 z-40 border-t border-brand-100 bg-white/95 px-3 pt-2 shadow-[0_-8px_24px_-12px_rgb(49_23_69_/_0.35)] backdrop-blur md:hidden"
      role="region"
      aria-label="Quick actions"
    >
      <div className="mx-auto grid max-w-md grid-cols-2 gap-2">
        <a href={SITE.phoneHref} className="btn btn-call">
          <Phone className="h-4 w-4" aria-hidden="true" />
          Call Now
        </a>
        <Link href="/hospitals" className="btn btn-primary">
          <Hospital className="h-4 w-4" aria-hidden="true" />
          Hospitals
        </Link>
      </div>
    </div>
  );
}
