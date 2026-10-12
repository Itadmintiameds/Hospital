import Link from 'next/link';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { SITE } from '../data/site';
import WrapEmail from './WrapEmail';

const info = [
  { icon: Phone, title: 'Phone', value: SITE.phoneDisplay, href: SITE.phoneHref },
  { icon: Mail, title: 'Email', value: SITE.emailContact, href: `mailto:${SITE.emailContact}` },
  { icon: MapPin, title: 'Address', value: SITE.region, href: 'https://maps.google.com/?q=Mysuru,Karnataka,India' },
];

/** Home page contact band: phone, email and address (there is no contact form). */
const ContactSection = () => (
  <section id="contact" className="section section-tint" aria-labelledby="contact-heading">
    <div className="container-page">
      <div className="on-dark grid grid-cols-1 gap-6 rounded-panel bg-gradient-to-br from-brand-950 to-brand-800 p-6 text-white shadow-pop sm:p-8 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-10 lg:p-10">
        <div>
          <p className="eyebrow-light">Get in touch</p>
          <h2 id="contact-heading" className="mt-3 text-h2 text-white">
            How can we help you?
          </h2>
          <p className="mt-3 text-brand-100">
            Call us any time, or visit your nearest CurePlus hospital. For emergencies, please call us directly.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href={SITE.phoneHref} className="btn btn-light btn-lg">
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call Now
            </a>
            <Link href="/hospitals" className="btn btn-outline-light btn-lg">
              Find a Hospital
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <ul className="grid grid-cols-1 gap-3">
          {info.map(({ icon: Icon, title, value, href }) => (
            <li key={title} className="flex min-w-0 items-center gap-4 rounded-card border border-white/15 bg-white/10 p-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-brand-200">{title}</p>
                <a href={href} className="block min-h-[2.25rem] break-words py-1 font-medium text-white hover:underline">
                  <WrapEmail value={value} />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default ContactSection;
