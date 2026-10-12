'use client';

import { useEffect, useRef, useState } from 'react';
import { CheckCircle2, CircleDot, Circle } from 'lucide-react';

export interface Milestone {
  label: string;
  when: string;
  status: 'done' | 'current' | 'upcoming';
}

interface TimelineProgressProps {
  milestones: readonly Milestone[];
  /** ISO dates used for the time-elapsed bar */
  startDate: string;
  endDate: string;
}

/**
 * Milestone timeline + a bar showing how much of the planned build period has elapsed
 * (calculated in the browser from today's date; it is a schedule indicator, not a construction-percentage claim).
 */
export default function TimelineProgress({ milestones, startDate, endDate }: TimelineProgressProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [percent, setPercent] = useState(0);
  const [target, setTarget] = useState(0);

  useEffect(() => {
    const start = new Date(startDate).getTime();
    const end = new Date(endDate).getTime();
    const pct = Math.max(0, Math.min(100, Math.round(((Date.now() - start) / (end - start)) * 100)));
    setTarget(pct);

    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) {
      setPercent(pct);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPercent(pct);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [startDate, endDate]);

  return (
    <div ref={ref}>
      <div className="mb-3 flex items-end justify-between gap-4">
        <p className="text-sm font-semibold text-brand-950">Time elapsed towards planned completion</p>
        <p className="text-2xl font-extrabold text-brand-800" aria-hidden="true">
          {target}%
        </p>
      </div>
      <div
        role="progressbar"
        aria-label="Time elapsed towards planned completion"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={target}
        className="h-3 w-full overflow-hidden rounded-full bg-brand-100"
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-brand-600 to-brand-900 transition-[width] duration-[1400ms] ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>

      <ol className="mt-8 grid gap-6 md:grid-cols-4 md:gap-4">
        {milestones.map((m, i) => {
          const Icon = m.status === 'done' ? CheckCircle2 : m.status === 'current' ? CircleDot : Circle;
          return (
            <li
              key={m.label}
              aria-current={m.status === 'current' ? 'step' : undefined}
              className="relative flex gap-4 md:flex-col md:gap-3"
            >
              {/* connector line */}
              {i < milestones.length - 1 && (
                <span
                  aria-hidden="true"
                  className={`absolute left-[0.8rem] top-9 h-[calc(100%+0.5rem)] w-0.5 md:left-9 md:top-[0.8rem] md:h-0.5 md:w-[calc(100%-1.5rem)] ${
                    m.status === 'done' ? 'bg-brand-700' : 'bg-brand-200'
                  }`}
                />
              )}
              <span
                className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white ${
                  m.status === 'upcoming' ? 'text-brand-300' : 'text-brand-700'
                }`}
              >
                <Icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">{m.when}</p>
                <p className="mt-0.5 font-semibold text-brand-950">{m.label}</p>
                <p className="text-sm text-ink-muted">
                  {m.status === 'done' ? 'Completed' : m.status === 'current' ? 'In progress' : 'Upcoming'}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
