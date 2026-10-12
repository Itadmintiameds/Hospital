import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Ramesh',
    location: 'Terakanambi',
    message:
      'CurePlus Hospital gives very good care. The doctors and nurses treat with respect and patience. For any basic health issue, we always go there. Very neat and well-maintained hospital.',
  },
  {
    name: 'Lakshmi Bhat',
    location: 'Mysuru',
    message:
      'I had visited CurePlus for fever and general checkup. The treatment was quick and the staff was very polite. Affordable charges and clean facilities. Thank you to the whole team!',
  },
  {
    name: 'Mahesh Gowda',
    location: 'Chinakuruli',
    message:
      'Good experience at CurePlus. I took my mother for sugar and BP checkup. Doctor explained everything clearly. Very helpful and caring service. Definitely recommend for regular health care.',
  },
];

const Testimonial = () => (
  <section className="section section-tint" aria-labelledby="testimonials-heading">
    <div className="container-page">
      <div className="section-heading" data-reveal>
        <p className="eyebrow justify-center">Patient voices</p>
        <h2 id="testimonials-heading">What our patients say</h2>
      </div>

      <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <li
            key={t.name}
            data-reveal
            style={{ ['--reveal-delay' as string]: `${i * 90}ms` }}
            className="card flex flex-col p-6"
          >
            <Quote className="h-8 w-8 text-brand-300" aria-hidden="true" />
            <blockquote className="mt-3 flex-1 text-[0.98rem] leading-relaxed text-ink-soft">“{t.message}”</blockquote>
            <div className="mt-5 flex items-center gap-3 border-t border-brand-100 pt-4">
              <span
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-700 font-bold text-white"
                aria-hidden="true"
              >
                {t.name.charAt(0)}
              </span>
              <div>
                <p className="font-semibold text-brand-950">{t.name}</p>
                <p className="text-sm text-ink-muted">{t.location}</p>
              </div>
              <div className="ml-auto flex gap-0.5" role="img" aria-label="5 out of 5 stars">
                {[0, 1, 2, 3, 4].map((s) => (
                  <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Testimonial;
