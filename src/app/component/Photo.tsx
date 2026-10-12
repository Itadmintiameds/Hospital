interface PhotoProps {
  /** Base path without extension, e.g. "/images/hospitals/dharani-hospital" */
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  width?: number;
  height?: number;
}

/**
 * Pre-optimised 16:10 photo: WebP with JPEG fallback, 600w / 800w / 1200w variants, explicit width/height
 * (no layout shift), lazy-loaded unless `priority` (use priority only for the hero / LCP image).
 * Produced by scripts/optimize-images.py.
 */
export default function Photo({
  src,
  alt,
  sizes = '(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 100vw',
  priority = false,
  className = '',
  width = 1200,
  height = 750,
}: PhotoProps) {
  return (
    <picture>
      <source type="image/webp" srcSet={`${src}-600.webp 600w, ${src}-800.webp 800w, ${src}.webp 1200w`} sizes={sizes} />
      <img
        src={`${src}.jpg`}
        srcSet={`${src}-600.jpg 600w, ${src}-800.jpg 800w, ${src}.jpg 1200w`}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        {...(priority ? { fetchPriority: 'high' as const } : {})}
        className={`h-full w-full object-cover ${className}`}
      />
    </picture>
  );
}
