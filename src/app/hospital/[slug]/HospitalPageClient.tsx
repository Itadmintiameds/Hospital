'use client';

import { useState } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Footer from '@/app/component/FooterSection';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaParking, FaProcedures, FaUserMd, FaWifi, FaBed, FaXRay } from 'react-icons/fa';
import { HiOutlineClock, HiOutlineLocationMarker, HiOutlinePhone, HiOutlineStar } from 'react-icons/hi';
import { MdLocalHospital, MdOutlineEmergency, MdOutlineLocalHotel } from 'react-icons/md';
import type { IconType } from 'react-icons';
import { Hospital } from '@/app/data/Hospital';

/* -------------------------------------------------------------------------- */
/*                               CONSTANTS                                    */
/* -------------------------------------------------------------------------- */

const HOSPITAL_SLUG_MAP: Record<number, string> = {
  1: 'cureplus-disha-hospital', 2: 'cureplus-dharani-hospital', 3: 'cureplus-kaveri-hospital',
  4: 'cureplus-krishna-hospital', 5: 'cureplus-narasegowda-memorial-hospital',
  6: 'cureplus-hospital-shanivarasanthe', 7: 'cureplus-hospital-ramapura',
  8: 'cureplus-hospital-terakanambi', 9: 'cureplus-hospital-bherya',
  10: 'cureplus-hospital-t-narasipura', 11: 'cureplus-hospital-handpost',
  12: 'cureplus-hospital-hosuru', 13: 'cureplus-hospital-halli-mysuru',
};

const HOSPITALS_LIST = [
  { id: 1, name: 'CurePlus Disha Hospital', image: '/cureplus/cureplus.png' },
  { id: 2, name: 'CurePlus Dharani Hospital', image: '/dharni/dharni.png' },
  { id: 3, name: 'CurePlus Kaveri Hospital', image: '/kaveri/kaveri1.png' },
  { id: 4, name: 'CurePlus Krishna Hospital', image: '/krishna/krishna1.png' },
  { id: 5, name: 'CurePlus Narasegowda Memorial Hospital', image: '/narasegowda/narasaregoda1.png' },
  { id: 6, name: 'CurePlus Hospital Shanivarasanthe', image: '/Shanivarasanthe/shanivarasanthe.png' },
  { id: 7, name: 'CurePlus Hospital Ramapura', image: '/rampura/rampura.png' },
  { id: 8, name: 'CurePlus Hospital Terakanambi', image: '/terakanamb/terakanamb.png' },
  { id: 9, name: 'CurePlus Hospital Bherya', image: '/bheraya/bheraya.png' },
  { id: 10, name: 'CurePlus Hospital T. Narasipura', image: '/Narasipura/Narasipura.png' },
  { id: 11, name: 'CurePlus Hospital Handpost', image: '/handPost/handpost1.png' },
  { id: 12, name: 'CurePlus Hospital Hosur', image: '/hosur/hosur.png' },
  { id: 13, name: 'CurePlus Hospital Halli Mysore', image: '/halli/halli.png' },
];

const FACILITY_ICON_MAP: Record<string, IconType> = { FaWifi, FaParking, FaBed, FaXRay };

const ANIMATION = {
  variants: {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1 } }),
  },
  config: (i: number) => ({
    initial: 'hidden' as const,
    whileInView: 'visible' as const,
    viewport: { once: true },
    custom: i,
  }),
};

const STYLES = {
  card: 'rounded-xl shadow',
  cardPadded: 'rounded-xl shadow p-6',
  cardBg: 'bg-white p-6 rounded-xl shadow',
  cardGray: 'bg-gray-50 p-6 rounded-xl shadow',
  iconText: 'flex items-center gap-2',
  link: 'underline hover:opacity-80 transition-opacity',
};

const HIGHLIGHT_CONFIG = {
  specialists: { icon: FaUserMd, bg: 'bg-blue-50', text: 'text-blue-600' },
  beds: { icon: FaProcedures, bg: 'bg-purple-50', text: 'text-purple-600' },
  emergency: { icon: MdOutlineEmergency, bg: 'bg-green-50', text: 'text-green-600' },
  rating: { icon: HiOutlineStar, bg: 'bg-orange-50', text: 'text-orange-600' },
} as const;

/* -------------------------------------------------------------------------- */
/*                               COMPONENTS                                   */
/* -------------------------------------------------------------------------- */

const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`${STYLES.card} ${className}`}>{children}</div>
);

const Header = ({ Icon, text, className = '' }: { Icon: IconType; text: string; className?: string }) => (
  <h2 className={`text-2xl font-semibold ${STYLES.iconText} mb-4 ${className}`}>
    <Icon /> {text}
  </h2>
);

const IconLink = ({ Icon, href, children, className = '' }: { 
  Icon: IconType; href?: string; children: React.ReactNode; className?: string 
}) => {
  const content = <><Icon className="flex-shrink-0" />{children}</>;
  const classes = `${STYLES.iconText} ${className}`;
  return href ? <a href={href} className={`${classes} ${STYLES.link}`}>{content}</a> : <div className={classes}>{content}</div>;
};

const HighlightCard = ({ label, value, type }: { label: string; value: string; type: keyof typeof HIGHLIGHT_CONFIG }) => {
  const { icon: Icon, bg, text } = HIGHLIGHT_CONFIG[type];
  return (
    <div className={`${bg} p-4 rounded-xl flex gap-3`}>
      <Icon className={`${text} w-6 h-6`} />
      <div>
        <p className={`text-sm ${text}`}>{label}</p>
        <p className={`font-bold ${text}`}>{value}</p>
      </div>
    </div>
  );
};

const ListItem = ({ Icon, label, bg, iconBg, color }: { 
  Icon: IconType | null; label: string; bg: string; iconBg?: string; color?: string 
}) => (
  <li className={`${STYLES.iconText} gap-3 ${bg} p-4 rounded-xl shadow`}>
    {Icon && (iconBg ? 
      <div className={`${iconBg} p-2 rounded flex-shrink-0`}><Icon className={`w-4 h-4 ${color}`} /></div> :
      <Icon className={`${color} flex-shrink-0`} />
    )}
    <span>{label}</span>
  </li>
);

const NetworkItem = ({ hospital, isActive }: { hospital: typeof HOSPITALS_LIST[0]; isActive: boolean }) => (
  <li className={`${STYLES.iconText} gap-3 p-3 rounded-lg transition-colors ${isActive ? 'bg-gray-200' : 'hover:bg-gray-100'}`}>
    <div className="relative w-12 h-12 rounded-md overflow-hidden">
      <Image src={hospital.image} alt={hospital.name} fill sizes="48px" className="object-cover" />
    </div>
    <div>
      <p className={`text-sm font-medium ${isActive ? 'text-blue-800' : 'text-gray-800'}`}>{hospital.name}</p>
      <IconLink Icon={HiOutlineStar} className="text-xs text-gray-500">
        <span className="text-xs text-gray-500">4.8</span>
      </IconLink>
    </div>
  </li>
);

const Section = ({ children, index, className = '' }: { children: React.ReactNode; index: number; className?: string }) => (
  <motion.section {...ANIMATION.config(index)} variants={ANIMATION.variants} className={className}>
    {children}
  </motion.section>
);

const GalleryImage = ({ src, alt, onClick }: { src: string; alt: string; onClick: () => void }) => (
  <div onClick={onClick} className="cursor-pointer overflow-hidden rounded-lg shadow relative aspect-square">
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 200px"
      className="object-cover hover:scale-110 transition-transform duration-300"
    />
  </div>
);

/* -------------------------------------------------------------------------- */
/*                               MAIN COMPONENT                               */
/* -------------------------------------------------------------------------- */

const HospitalPageClient = ({ hospital }: { hospital: Hospital }) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!hospital) {
    return <div className="flex items-center justify-center h-screen text-red-600 text-xl font-semibold">Hospital data is not available.</div>;
  }

  const { id, gallery = [], services = [], facilities = [], departments = [], contact, seo, name } = hospital;
  const highlights = [
    { label: 'Specialists', value: hospital.specialists || '10+', type: 'specialists' as const },
    { label: 'Beds', value: hospital.beds || '20+', type: 'beds' as const },
    { label: 'Emergency', value: '24/7', type: 'emergency' as const },
    { label: 'Rating', value: '4.8/5', type: 'rating' as const },
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-3/4">
          {/* HEADER */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-12">
            <Card className="relative w-full h-96 overflow-hidden">
              {hospital.imageUrl && (
                <Image src={hospital.imageUrl} alt={seo?.h1 || name || 'Hospital Image'} fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 1000px" className="object-cover" priority />
              )}
            </Card>
            <div className="mt-6 flex flex-col sm:flex-row justify-between items-start gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold">{seo?.h1 || name}</h1>
                <IconLink Icon={HiOutlineLocationMarker} className="text-gray-600 mt-2">
                  <span>{hospital.location}</span>
                </IconLink>
              </div>
              <div className={`${STYLES.iconText} bg-green-50 px-4 py-2 rounded-lg`}>
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-green-800 font-medium">Open Now</span>
              </div>
            </div>
          </motion.div>

          {/* HIGHLIGHTS */}
          <Section index={1} className="mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {highlights.map((h, i) => <HighlightCard key={i} {...h} />)}
            </div>
          </Section>

          {/* ABOUT */}
          <section className="mb-12">
            <Card className={STYLES.cardBg}>
              <Header Icon={MdLocalHospital} text="About the Hospital" />
              <p className="leading-relaxed whitespace-pre-line">{hospital.description}</p>
            </Card>
          </section>

          {/* SERVICES & FACILITIES */}
          <Section index={2} className="mb-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <Header Icon={FaProcedures} text="Services" />
                {services.length > 0 ? (
                  <ul className="space-y-3">
                    {services.map((s, i) => <ListItem key={i} Icon={MdLocalHospital} label={s.label} bg="bg-blue-50" color="text-blue-600" />)}
                  </ul>
                ) : <p className="text-gray-500 italic">No services information available.</p>}
              </div>
              <div>
                <Header Icon={MdOutlineLocalHotel} text="Facilities" />
                {facilities.length > 0 ? (
                  <ul className="grid grid-cols-2 gap-3">
                    {facilities.map((f, i) => (
                      <ListItem key={i} Icon={f.icon ? FACILITY_ICON_MAP[f.icon] : MdOutlineLocalHotel} 
                        label={f.label} bg="bg-green-50" iconBg="bg-green-100" color="text-green-600" />
                    ))}
                  </ul>
                ) : <p className="text-gray-500 italic">No facilities information available.</p>}
              </div>
            </div>
          </Section>

          {/* INFRASTRUCTURE */}
          <Section index={3} className="mb-12">
            <Card className={STYLES.cardBg}>
              <h2 className="text-2xl font-semibold mb-4">Infrastructure</h2>
              <p>{hospital.infrastructure || 'Infrastructure information not available.'}</p>
              {departments.length > 0 && (
                <>
                  <h3 className="text-xl font-semibold mt-6 mb-3">Departments</h3>
                  <div className="flex flex-wrap gap-2">
                    {departments.map((d, i) => <span key={i} className="bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-sm">{d}</span>)}
                  </div>
                </>
              )}
            </Card>
          </Section>

          {/* GALLERY */}
          {gallery.length > 0 && (
            <Section index={4} className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {gallery.map((img, i) => (
                  <GalleryImage key={i} src={img} alt={seo?.altTexts?.[i] || `${name || 'Hospital'} image ${i + 1}`}
                    onClick={() => { setCurrentImageIndex(i); setIsLightboxOpen(true); }} />
                ))}
              </div>
            </Section>
          )}

          {/* CONTACT & HOURS */}
          <Section index={gallery.length > 0 ? 5 : 4} className="mb-12">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className={STYLES.cardGray}>
                <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                {contact?.googleMapUrl && (
                  <IconLink Icon={HiOutlineLocationMarker} href={contact.googleMapUrl} className="text-purple-600">
                    <span>{contact.address || 'Address not available'}</span>
                  </IconLink>
                )}
                <IconLink Icon={HiOutlinePhone} href={`tel:${contact?.phone || ''}`} className="text-purple-600 mt-4">
                  <span>{contact?.phone || 'Phone number not available'}</span>
                </IconLink>
              </Card>
              <Card className={STYLES.cardGray}>
                <Header Icon={HiOutlineClock} text="Opening Hours" />
                <div className="flex justify-between mb-3"><span>Monday - Sunday</span><span className="font-medium">24 Hours</span></div>
                <div className="border-t pt-3 flex justify-between items-center">
                  <span>Emergency Services</span>
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">24/7 Available</span>
                </div>
              </Card>
            </div>
          </Section>
        </div>

        {/* SIDEBAR */}
        <aside className="w-full lg:w-1/4 space-y-6">
          <Card className="bg-red-50 p-4">
            <h3 className={`font-bold ${STYLES.iconText} text-red-800 mb-2`}>
              <MdOutlineEmergency /> Emergency Contact
            </h3>
            <a href="tel:+919035193777" className="text-2xl sm:text-3xl font-bold text-red-700 hover:text-red-800 transition-colors block">
              +91 90351 93777
            </a>
          </Card>
          <Card className="bg-white p-4">
            <h3 className="font-bold mb-3">Our Network</h3>
            <ul className="space-y-2 max-h-[500px] overflow-y-auto">
              {HOSPITALS_LIST.map((h) => (
                <Link key={h.id} href={`/${HOSPITAL_SLUG_MAP[h.id] || '#'}`}>
                  <NetworkItem hospital={h} isActive={id === h.id} />
                </Link>
              ))}
            </ul>
          </Card>
        </aside>
      </div>

      {/* MAP */}
      {contact?.embedMapUrl && (
        <Section index={gallery.length > 0 ? 6 : 5} className="max-w-7xl mx-auto px-4 pb-10">
          <h2 className="text-3xl font-bold text-center mb-6">Our Location</h2>
          <div className="rounded-lg overflow-hidden shadow">
            <iframe src={contact.embedMapUrl} width="100%" height="450" style={{ border: 0 }} loading="lazy" 
              allowFullScreen title={`Location of ${name || 'Hospital'}`} />
          </div>
        </Section>
      )}

      <Footer />
      <Lightbox open={isLightboxOpen} close={() => setIsLightboxOpen(false)} 
        slides={gallery.map(img => ({ src: img }))} index={currentImageIndex} />
    </>
  );
};

export default HospitalPageClient;