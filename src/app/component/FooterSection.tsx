import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { Mail, MapPin, Phone } from 'lucide-react';
import { HOSPITAL_COUNT } from '../data/Hospital';
import { NAV_LINKS, SITE, SOCIAL } from '../data/site';
import LicenceStrip from './LicenceStrip';

const socials = [
  { label: 'Facebook', href: SOCIAL.facebook, Icon: FaFacebookF },
  { label: 'Instagram', href: SOCIAL.instagram, Icon: FaInstagram },
  { label: 'LinkedIn', href: SOCIAL.linkedin, Icon: FaLinkedinIn },
  { label: 'YouTube', href: SOCIAL.youtube, Icon: FaYoutube },
];

const Footer = () => (
  <footer className="on-dark bg-footerbackground text-brand-100" aria-label="Site footer">
    <div className="container-page grid gap-8 py-9 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:py-12">
      {/* Brand */}
      <div>
        <Image
          src="/CUREPLUS HOSPITALS WHITE.png"
          alt="CurePlus Hospitals"
          width={2889}
          height={1592}
          sizes="160px"
          className="mb-5 h-auto w-36"
        />
        <p className="max-w-sm text-[0.95rem] leading-relaxed text-brand-100">
          Delivering accessible healthcare across Karnataka with {HOSPITAL_COUNT}+ hospitals, integrated pharma services and
          specialised care.
        </p>
        <ul className="mt-6 flex gap-3" aria-label="Social media">
          {socials.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${label} (opens in a new tab)`}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white hover:text-brand-900"
              >
                <Icon className="h-[1.1rem] w-[1.1rem]" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Explore */}
      <nav aria-label="Footer">
        <h2 className="mb-4 text-base font-bold text-white">Explore</h2>
        <ul className="space-y-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="inline-flex min-h-[2.75rem] items-center text-[0.95rem] text-brand-100 transition hover:text-white hover:underline sm:min-h-[2.25rem]"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Contact */}
      <div>
        <h2 className="mb-4 text-base font-bold text-white">Contact</h2>
        <ul className="space-y-3 text-[0.95rem]">
          <li className="flex items-center gap-3">
            <Phone className="h-4 w-4 shrink-0 text-brand-200" aria-hidden="true" />
            <a href={SITE.phoneHref} className="inline-flex min-h-[2.75rem] items-center hover:text-white hover:underline sm:min-h-0">
              {SITE.phoneDisplay}
            </a>
          </li>
          <li className="flex items-center gap-3">
            <Mail className="h-4 w-4 shrink-0 text-brand-200" aria-hidden="true" />
            <a href={`mailto:${SITE.emailInfo}`} className="inline-flex min-h-[2.75rem] items-center break-all hover:text-white hover:underline sm:min-h-0">
              {SITE.emailInfo}
            </a>
          </li>
          <li className="flex items-start gap-3">
            <MapPin className="mt-1 h-4 w-4 shrink-0 text-brand-200" aria-hidden="true" />
            <span>{SITE.region}</span>
          </li>
        </ul>
      </div>

      {/* Licences */}
      <LicenceStrip variant="inline" className="sm:col-span-2 lg:col-span-1" />
    </div>

    <div className="border-t border-white/15">
      <p className="container-page py-5 text-center text-sm text-brand-200">
        © {new Date().getFullYear()} CurePlus Hospitals, a unit of {SITE.parent}. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
