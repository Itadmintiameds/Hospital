'use client';

import { useEffect, useRef } from 'react';

interface CountUpProps {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

const format = (n: number) => new Intl.NumberFormat('en-IN').format(Math.round(n));

/**
 * Counts from 0 to `to` the first time it scrolls into view.
 * The server renders the final number (good for SEO / no-JS / reduced motion).
 */
export default function CountUp({ to, suffix = '', prefix = '', duration = 1600, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;

    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / duration);
          el.textContent = format(to * (1 - Math.pow(1 - p, 3)));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        el.textContent = format(0);
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, duration]);

  return (
    <span className={className}>
      <span className="sr-only">
        {prefix}
        {format(to)}
        {suffix}
      </span>
      <span aria-hidden="true">
        {prefix}
        <span ref={ref}>{format(to)}</span>
        {suffix}
      </span>
    </span>
  );
}
