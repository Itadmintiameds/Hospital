'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Phone, X } from 'lucide-react';
import { NAV_LINKS, SITE } from '../data/site';

const isActive = (pathname: string, href: string) =>
  href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close the drawer whenever the route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Shadow once the page has scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Drawer: lock page scroll, move focus in, trap Tab, close on Esc
  useEffect(() => {
    if (!open) return;
    const drawer = drawerRef.current;
    if (!drawer) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const focusables = () => Array.from(drawer.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'));
    focusables()[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (event.key !== 'Tab') return;
      const items = focusables();
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  const closeAndRestoreFocus = () => {
    setOpen(false);
    toggleRef.current?.focus();
  };

  return (
    <>
    <header
      className={`sticky top-0 z-50 border-b border-brand-100/70 bg-white/90 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? 'shadow-header' : ''
      }`}
    >
      <div className="container-page flex h-[var(--header-h)] items-center justify-between gap-4">
        {/* Logos */}
        <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="CurePlus Hospitals – home">
          <Image
            src="/CUREPLUS HOSPITALS.png"
            alt="CurePlus Hospitals"
            width={1841}
            height={1014}
            sizes="110px"
            priority
            className="h-12 w-auto sm:h-14"
          />
          <Image
            src="/second-logo.png"
            alt="40 Years of Excellence"
            width={3375}
            height={3375}
            sizes="48px"
            className="hidden h-11 w-11 object-contain sm:block lg:h-12 lg:w-12"
          />
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-0.5 xl:gap-1">
            {NAV_LINKS.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? 'page' : undefined}
                    className={`relative inline-flex min-h-[2.75rem] items-center whitespace-nowrap rounded-full px-2.5 text-sm font-medium transition-colors xl:px-3 xl:text-[0.95rem] ${
                      active ? 'bg-brand-50 text-brand-800' : 'text-ink hover:bg-brand-50 hover:text-brand-800'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a href={SITE.phoneHref} className="btn btn-call hidden md:inline-flex" aria-label={`Call ${SITE.phoneDisplay}`}>
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span className="lg:hidden xl:inline">Call Now</span>
            <span className="hidden lg:inline xl:hidden">Call</span>
          </a>

          {/* Mobile menu button */}
          <button
            ref={toggleRef}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-200 text-brand-900 transition hover:bg-brand-50 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

    </header>

    {/* Mobile drawer (rendered outside <header> on purpose, see above) */}
      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden" role="dialog" aria-modal="true" aria-label="Site menu">
          <button
            type="button"
            tabIndex={-1}
            aria-label="Close menu"
            className="absolute inset-0 animate-fadeIn bg-brand-950/60 backdrop-blur-[2px]"
            onClick={closeAndRestoreFocus}
          />
          <div
            id="mobile-menu"
            ref={drawerRef}
            className="absolute right-0 top-0 flex h-full w-[min(22rem,88vw)] animate-drawerIn flex-col overflow-y-auto bg-white shadow-pop"
          >
            <div className="flex h-[var(--header-h)] shrink-0 items-center justify-between border-b border-brand-100 px-5">
              <span className="text-base font-bold text-brand-950">Menu</span>
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-200 text-brand-900 hover:bg-brand-50"
                onClick={closeAndRestoreFocus}
                aria-label="Close menu"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <nav aria-label="Mobile" className="flex-1 px-3 py-4">
              <ul className="space-y-1">
                {NAV_LINKS.map((link) => {
                  const active = isActive(pathname, link.href);
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        aria-current={active ? 'page' : undefined}
                        className={`flex min-h-[3rem] items-center rounded-xl px-4 text-lg font-medium transition-colors ${
                          active ? 'bg-brand-50 text-brand-800' : 'text-ink hover:bg-brand-50'
                        }`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="space-y-3 border-t border-brand-100 p-5">
              <a href={SITE.phoneHref} className="btn btn-call btn-lg w-full">
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call {SITE.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
