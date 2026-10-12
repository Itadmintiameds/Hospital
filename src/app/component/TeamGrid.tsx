'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, X } from 'lucide-react';

export interface TeamMember {
  name: string;
  role: string;
  /** One-line summary shown on the card */
  bio: string;
  image: string;
  /** Full profile shown in the dialog */
  description: string;
}

/**
 * Team cards. Each card is one big click target (a stretched button inside the name heading) that opens the
 * person's full profile in a native <dialog>: focus is trapped, Esc / the X button / a click outside close it,
 * and focus returns to the card that opened it.
 */
export default function TeamGrid({ members }: { members: TeamMember[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  // Safari never focuses a button on click, so the browser cannot restore focus by itself: remember the opener
  const openerRef = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState<TeamMember | null>(null);

  // Open the modal once the profile has been rendered into the dialog
  useEffect(() => {
    const dialog = dialogRef.current;
    if (active && dialog && !dialog.open) dialog.showModal();
  }, [active]);

  // Stop the page behind the dialog from scrolling
  useEffect(() => {
    document.body.style.overflow = active ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [active]);

  return (
    <>
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {members.map((member, i) => (
          <li
            key={member.name}
            {...(i >= 4 ? { 'data-reveal': '', style: { ['--reveal-delay' as string]: `${(i % 4) * 70}ms` } } : {})}
            className="card card-hover group relative flex flex-col overflow-hidden has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-brand-700 has-[:focus-visible]:ring-offset-2"
          >
            <div className="skeleton relative aspect-square bg-brand-50">
              <Image
                src={member.image}
                alt=""
                width={640}
                height={640}
                sizes="(min-width: 1280px) 22vw, (min-width: 640px) 45vw, 100vw"
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h2 className="text-xl font-bold text-brand-950">
                <button
                  type="button"
                  aria-haspopup="dialog"
                  onClick={(event) => {
                    openerRef.current = event.currentTarget;
                    setActive(member);
                  }}
                  className="text-left after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
                >
                  {member.name}
                  <span className="sr-only">, view profile</span>
                </button>
              </h2>
              <p className="mt-0.5 font-semibold text-brand-700">{member.role}</p>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">{member.bio}</p>
              <span
                aria-hidden="true"
                className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold text-brand-700 transition-colors group-hover:text-brand-900"
              >
                View profile
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        aria-labelledby="team-dialog-title"
        onClose={() => {
          setActive(null);
          openerRef.current?.focus({ preventScroll: true });
        }}
        onClick={(event) => {
          // a click on the dimmed backdrop lands on the <dialog> element itself
          if (event.target === event.currentTarget) dialogRef.current?.close();
        }}
        onKeyDown={(event) => {
          // the browser closes a modal <dialog> on Escape already; this is the keyboard twin of the backdrop click
          if (event.key === 'Escape') dialogRef.current?.close();
        }}
        className="m-auto max-h-[calc(100vh-2rem)] w-[min(44rem,calc(100vw-1.5rem))] overflow-hidden rounded-panel border-0 bg-white p-0 text-ink shadow-pop backdrop:bg-brand-950/60 backdrop:backdrop-blur-[2px] open:animate-riseIn"
      >
        {active && (
          <div className="relative flex max-h-[calc(100vh-2rem)] flex-col overflow-y-auto sm:flex-row sm:overflow-hidden">
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              aria-label="Close profile"
              className="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-brand-900 shadow-card ring-1 ring-brand-100 transition hover:bg-brand-50"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            <div className="skeleton relative h-60 shrink-0 bg-brand-50 sm:h-auto sm:w-64">
              <Image
                src={active.image}
                alt={`${active.name}, ${active.role} at CurePlus Hospitals`}
                width={640}
                height={640}
                sizes="(min-width: 640px) 256px, 100vw"
                className="h-full w-full object-cover object-top"
              />
            </div>

            <div className="p-6 sm:max-h-[calc(100vh-2rem)] sm:flex-1 sm:overflow-y-auto sm:p-8">
              <h2 id="team-dialog-title" className="pr-10 text-h3 text-brand-950 sm:pr-0">
                {active.name}
              </h2>
              <p className="mt-1 font-semibold text-brand-700">{active.role}</p>
              <p className="copy mt-4">{active.description}</p>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
