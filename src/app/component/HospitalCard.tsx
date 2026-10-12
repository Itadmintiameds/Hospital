import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import type { Hospital } from '../data/Hospital';
import Photo from './Photo';
import Badge247 from './Badge247';

export type HospitalCardData = Pick<Hospital, 'path' | 'name' | 'location' | 'photo' | 'is24x7' | 'specialtyTags'>;

/** The ONE hospital card used on the home page, the listing page and anywhere else a hospital is shown. */
export default function HospitalCard({ hospital, priority = false }: { hospital: HospitalCardData; priority?: boolean }) {
  return (
    <article className="card card-hover group relative flex h-full flex-col overflow-hidden">
      <Link href={hospital.path} className="flex h-full flex-col rounded-card focus-visible:outline-offset-[-3px]">
        <div className="skeleton photo-16x10 relative overflow-hidden">
          <Photo
            src={hospital.photo.src}
            alt={hospital.photo.alt}
            priority={priority}
            className="transition-transform duration-500 group-hover:scale-105"
          />
          {hospital.is24x7 && <Badge247 className="absolute left-3 top-3" />}
        </div>

        <div className="flex flex-1 flex-col gap-3 p-5">
          <h3 className="text-lg font-semibold leading-snug text-brand-950 transition-colors group-hover:text-brand-700">
            {hospital.name}
          </h3>
          <p className="flex items-start gap-2 text-sm text-ink-soft">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-700" aria-hidden="true" />
            <span>{hospital.location}</span>
          </p>
          <ul className="flex flex-wrap gap-1.5" aria-label="Specialities">
            {hospital.specialtyTags.slice(0, 4).map((tag) => (
              <li key={tag}>
                <span className="chip">{tag}</span>
              </li>
            ))}
          </ul>
          <span className="mt-auto inline-flex items-center gap-1.5 pt-1 text-sm font-semibold text-brand-700">
            View hospital
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </span>
        </div>
      </Link>
    </article>
  );
}
