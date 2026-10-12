'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { ZoomIn } from 'lucide-react';
import 'yet-another-react-lightbox/styles.css';

// The lightbox is only downloaded the first time someone opens an image.
const Lightbox = dynamic(() => import('yet-another-react-lightbox'), { ssr: false });

export interface GalleryItem {
  id: string;
  /** Full-size image used inside the lightbox */
  slideSrc: string;
  alt: string;
  /** Server-rendered thumbnail (e.g. <Photo/> or <Image/>) */
  thumb: React.ReactNode;
}

interface GalleryProps {
  items: GalleryItem[];
  /** Grid column classes for the thumbnails */
  className?: string;
  /** Tailwind aspect class for each thumbnail frame */
  aspect?: string;
  /** Optional extra tile rendered after the images (e.g. a call-to-action card) */
  trailing?: React.ReactNode;
  trailingClassName?: string;
}

/** Responsive thumbnail grid with an accessible lightbox (Esc to close, arrow keys to navigate). */
export default function Gallery({
  items,
  className = 'grid-cols-2 md:grid-cols-4',
  aspect = 'aspect-[16/10]',
  trailing,
  trailingClassName = '',
}: GalleryProps) {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <ul className={`grid gap-3 sm:gap-4 ${className}`}>
        {items.map((item, i) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => setIndex(i)}
              aria-haspopup="dialog"
              aria-label={`Open image: ${item.alt}`}
              className={`skeleton group relative block w-full overflow-hidden rounded-card shadow-card ${aspect}`}
            >
              <span className="block h-full w-full transition-transform duration-500 group-hover:scale-105 [&_img]:h-full [&_img]:w-full [&_img]:object-cover">
                {item.thumb}
              </span>
              <span className="pointer-events-none absolute inset-0 flex items-end justify-end bg-gradient-to-t from-brand-950/50 via-transparent to-transparent p-3 opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
                <ZoomIn className="h-5 w-5 text-white" aria-hidden="true" />
              </span>
            </button>
          </li>
        ))}
        {trailing && <li className={trailingClassName}>{trailing}</li>}
      </ul>

      {index >= 0 && (
        <Lightbox
          open
          index={index}
          close={() => setIndex(-1)}
          slides={items.map((item) => ({ src: item.slideSrc, alt: item.alt }))}
          controller={{ closeOnBackdropClick: true }}
        />
      )}
    </>
  );
}
