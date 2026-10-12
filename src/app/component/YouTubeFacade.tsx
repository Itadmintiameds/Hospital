'use client';

/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import { Play } from 'lucide-react';

interface YouTubeFacadeProps {
  videoId: string;
  title: string;
  className?: string;
}

/**
 * Click-to-load YouTube player. Nothing from YouTube is loaded until the visitor presses play,
 * and the player itself uses the privacy-friendly youtube-nocookie.com domain.
 */
export default function YouTubeFacade({ videoId, title, className = '' }: YouTubeFacadeProps) {
  const [active, setActive] = useState(false);

  return (
    <div className={`relative aspect-video w-full overflow-hidden rounded-card bg-brand-950 shadow-pop ${className}`}>
      {active ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          className="group on-dark absolute inset-0 block h-full w-full"
          aria-label={`Play video: ${title}`}
        >
          <img
            src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
            alt=""
            width={480}
            height={360}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/20" />
          <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-brand-800 shadow-pop transition group-hover:scale-110 sm:h-20 sm:w-20">
            <Play className="ml-1 h-7 w-7 fill-current sm:h-9 sm:w-9" aria-hidden="true" />
          </span>
        </button>
      )}
    </div>
  );
}
