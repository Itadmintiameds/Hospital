import { Activity, Clock, Hospital, Stethoscope, Target, Users } from 'lucide-react';
import { HOSPITAL_COUNT } from '../data/Hospital';
import { buildStats } from '../data/site';
import CountUp from './CountUp';

const ICONS = [Hospital, Stethoscope, Users, Clock, Activity, Target];

/** Animated stats (18+ hospitals, 50+ doctors, 10 lakh patients, 24/7, 7000+ surgeries, 200+ by 2030). */
export default function StatsGrid({ className = 'grid-cols-2 sm:grid-cols-3' }: { className?: string }) {
  const stats = buildStats(HOSPITAL_COUNT);

  return (
    <dl className={`grid gap-3 sm:gap-4 ${className}`}>
      {stats.map((stat, i) => {
        const Icon = ICONS[i];
        const goal = i === stats.length - 1;
        return (
          <div
            key={stat.label}
            data-reveal="scale"
            style={{ ['--reveal-delay' as string]: `${i * 70}ms` }}
            className={`flex min-w-0 flex-col-reverse justify-end rounded-card p-4 shadow-card sm:p-5 ${
              goal ? 'bg-gradient-to-br from-brand-800 to-brand-950 text-white' : 'border border-brand-100 bg-white'
            }`}
          >
            <dt className={`mt-1 text-sm font-medium leading-snug ${goal ? 'text-brand-100' : 'text-ink-soft'}`}>{stat.label}</dt>
            <dd className="flex flex-col gap-3">
              <span
                aria-hidden="true"
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                  goal ? 'bg-white/15 text-white' : 'bg-brand-100 text-brand-700'
                }`}
              >
                <Icon className="h-5 w-5" />
              </span>
              <CountUp
                to={stat.value}
                suffix={stat.suffix}
                className={`whitespace-nowrap text-[clamp(1.6rem,1.1rem+1.7vw,2.4rem)] font-extrabold leading-none tracking-tight ${
                  goal ? 'text-white' : 'text-brand-800'
                }`}
              />
            </dd>
          </div>
        );
      })}
    </dl>
  );
}
