/** Availability badge. Render it ONLY for hospitals with `is24x7: true` (it is deliberately not styled like a specialty chip). */
export default function Badge247({ className = '' }: { className?: string }) {
  return (
    <span className={`badge-247 ${className}`}>
      <span className="h-2 w-2 rounded-full bg-white" aria-hidden="true" />
      <span className="sr-only">Open </span>24x7
    </span>
  );
}
