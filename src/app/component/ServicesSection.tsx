import { Building2, FlaskConical, HeartHandshake, Siren, Stethoscope } from 'lucide-react';

// The five gaps CurePlus closes. Keep exactly five cards.
const GAPS = [
  {
    icon: Building2,
    title: 'Infrastructure',
    benefit: 'Well-equipped hospitals built close to where communities live.',
  },
  {
    icon: Stethoscope,
    title: 'Specialist',
    benefit: 'Access to specialist expertise without the long trip to the city.',
  },
  {
    icon: FlaskConical,
    title: 'Diagnostic',
    benefit: 'Lab, X-ray and scanning under one roof for faster, accurate answers.',
  },
  {
    icon: Siren,
    title: 'Emergency & Referral',
    benefit: 'Emergency care, ambulance support and smooth referral to higher centres.',
  },
  {
    icon: HeartHandshake,
    title: 'Continuity of Care',
    benefit: 'Follow-ups, pharmacy and preventive care that continue after the first visit.',
  },
];

/** "Why Choose CurePlus": the five gaps we solve (infrastructure, specialist, diagnostic, emergency & referral, continuity of care). */
const ServicesSection = () => (
  <section className="section" aria-labelledby="why-heading">
    <div className="container-page">
      <div className="section-heading" data-reveal>
        <p className="eyebrow justify-center">Why choose CurePlus</p>
        <h2 id="why-heading">Closing the five gaps that keep good healthcare out of reach</h2>
        <p>
          In rural and semi-urban Karnataka, families often travel far for basic care. We built our network to remove the
          barriers that matter most.
        </p>
      </div>

      <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
        {GAPS.map((gap, i) => (
          <li
            key={gap.title}
            data-reveal
            style={{ ['--reveal-delay' as string]: `${i * 80}ms` }}
            className={`card card-hover relative flex flex-col p-6 sm:p-7 ${i < 3 ? 'lg:col-span-2' : 'lg:col-span-3'} ${
              i === 4 ? 'sm:col-span-2 lg:col-span-3' : ''
            }`}
          >
            <span className="deco-number" data-n={String(i + 1).padStart(2, '0')} aria-hidden="true" />
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-700 to-brand-900 text-white shadow-card">
              <gap.icon className="h-7 w-7" aria-hidden="true" />
            </span>
            <h3 className="mt-5 text-h3 text-brand-950">{gap.title}</h3>
            <p className="mt-2 text-[0.98rem] leading-relaxed text-ink-soft">{gap.benefit}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default ServicesSection;
