import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  lead?: string;
  crumbs?: { name: string; href?: string }[];
  children?: React.ReactNode;
}

/** Shared page header band (breadcrumb + h1 + lead). Use exactly one per page: it renders the page <h1>. */
export default function PageHero({ eyebrow, title, lead, crumbs = [], children }: PageHeroProps) {
  return (
    <section className="on-dark relative isolate overflow-hidden bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 text-white">
      <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-24 -z-10 h-80 w-80 rounded-full bg-brand-500/30 blur-3xl" />
      <div className="container-page py-8 sm:py-10 lg:py-14">
        {crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex flex-wrap items-center gap-1 text-sm text-brand-200">
              <li>
                <Link href="/" className="hover:text-white hover:underline">
                  Home
                </Link>
              </li>
              {crumbs.map((crumb, i) => (
                <li key={crumb.name} className="flex items-center gap-1">
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  {crumb.href && i < crumbs.length - 1 ? (
                    <Link href={crumb.href} className="hover:text-white hover:underline">
                      {crumb.name}
                    </Link>
                  ) : (
                    <span aria-current="page" className="font-semibold text-white">
                      {crumb.name}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <div className="max-w-3xl">
          {eyebrow && <p className="eyebrow-light">{eyebrow}</p>}
          <h1 className="mt-3 text-h1 text-white">{title}</h1>
          {lead && <p className="mt-4 text-lead text-brand-100">{lead}</p>}
          {children && <div className="mt-7 flex flex-col gap-3 sm:flex-row">{children}</div>}
        </div>
      </div>
    </section>
  );
}
