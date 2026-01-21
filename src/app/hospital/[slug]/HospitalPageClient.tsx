'use client';

import { useState } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

import Footer from '@/app/component/FooterSection';
import { motion } from 'framer-motion';
import Link from 'next/link';

import {
  FaParking,
  FaProcedures,
  FaUserMd,
  FaWifi,
  FaBed,
  FaXRay,
} from 'react-icons/fa';
import {
  HiOutlineClock,
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineStar,
} from 'react-icons/hi';
import {
  MdLocalHospital,
  MdOutlineEmergency,
  MdOutlineLocalHotel,
} from 'react-icons/md';

import type { IconType } from 'react-icons';
import { Hospital } from '@/app/data/Hospital';

/* -------------------------------------------------------------------------- */
/*                               CONSTANTS                                    */
/* -------------------------------------------------------------------------- */

const HOSPITAL_SLUG_MAP: Record<number, string> = {
  1: 'cureplus-disha-hospital',
  2: 'cureplus-dharani-hospital',
  3: 'cureplus-kaveri-hospital',
  4: 'cureplus-krishna-hospital',
  5: 'cureplus-narasegowda-memorial-hospital',
  6: 'cureplus-hospital-shanivarasanthe',
  7: 'cureplus-hospital-ramapura',
  8: 'cureplus-hospital-terakanambi',
  9: 'cureplus-hospital-bherya',
  10: 'cureplus-hospital-t-narasipura',
  11: 'cureplus-hospital-handpost',
  12: 'cureplus-hospital-hosuru',
  13: 'cureplus-hospital-halli-mysuru',
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

const FACILITY_ICON_MAP: Record<string, IconType> = {
  FaWifi,
  FaParking,
  FaBed,
  FaXRay,
};

const FADE_IN = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 },
  }),
};

const HIGHLIGHT_COLORS = {
  specialists: { icon: FaUserMd, bgColor: 'bg-blue-50' },
  beds: { icon: FaProcedures, bgColor: 'bg-purple-50' },
  emergency: { icon: MdOutlineEmergency, bgColor: 'bg-green-50' },
  rating: { icon: HiOutlineStar, bgColor: 'bg-orange-50' },
} as const;

/* -------------------------------------------------------------------------- */
/*                               HELPER FUNCTIONS                             */
/* -------------------------------------------------------------------------- */

const fadeProps = (i: number) => ({
  initial: 'hidden' as const,
  whileInView: 'visible' as const,
  viewport: { once: true },
  variants: FADE_IN,
  custom: i,
});

const renderCard = (children: React.ReactNode, className = '') => (
  <div className={`rounded-xl shadow ${className}`}>
    {children}
  </div>
);

const renderIconHeader = (Icon: IconType, text: string) => (
  <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
    <Icon /> {text}
  </h2>
);

/* -------------------------------------------------------------------------- */
/*                               COMPONENTS                                   */
/* -------------------------------------------------------------------------- */

interface NetworkHospitalItemProps {
  hospital: { id: number; name: string; image: string };
  isActive: boolean;
}

const NetworkHospitalItem = ({ hospital, isActive }: NetworkHospitalItemProps) => (
  <li
    className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
      isActive ? 'bg-gray-200' : 'hover:bg-gray-100'
    }`}
  >
    <div className="relative w-12 h-12 rounded-md overflow-hidden">
      <Image
        src={hospital.image}
        alt={hospital.name}
        fill
        sizes="48px"
        className="object-cover"
      />
    </div>
    <div>
      <p className={`text-sm font-medium ${isActive ? 'text-blue-800' : 'text-gray-800'}`}>
        {hospital.name}
      </p>
      <div className="flex items-center gap-1">
        <HiOutlineStar className="w-3 h-3 text-yellow-500" />
        <span className="text-xs text-gray-500">4.8</span>
      </div>
    </div>
  </li>
);

interface HighlightCardProps {
  label: string;
  value: string;
  type: keyof typeof HIGHLIGHT_COLORS;
}

const HighlightCard = ({ label, value, type }: HighlightCardProps) => {
  const { icon: Icon, bgColor } = HIGHLIGHT_COLORS[type];
  const textColor = type === 'emergency' ? 'text-green-600' : 
                    type === 'rating' ? 'text-orange-600' : 
                    type === 'beds' ? 'text-purple-600' : 'text-blue-600';
  
  return (
    <div className={`${bgColor} p-4 rounded-xl flex gap-3`}>
      <Icon className={`${textColor} w-6 h-6`} />
      <div>
        <p className={`text-sm ${textColor}`}>{label}</p>
        <p className={`font-bold ${textColor}`}>{value}</p>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*                               MAIN COMPONENT                               */
/* -------------------------------------------------------------------------- */

const HospitalPageClient = ({ hospital }: { hospital: Hospital }) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!hospital) {
    return (
      <div className="flex items-center justify-center h-screen text-red-600 text-xl font-semibold">
        Hospital data is not available.
      </div>
    );
  }

  const hospitalId = hospital.id;
  const slides = hospital.gallery?.map((img) => ({ src: img })) || [];
  const altTexts = hospital.seo?.altTexts || [];

  const openGallery = (index: number) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  };

  const highlights = [
    { label: 'Specialists', value: hospital.specialists || '10+', type: 'specialists' as const },
    { label: 'Beds', value: hospital.beds || '20+', type: 'beds' as const },
    { label: 'Emergency', value: '24/7', type: 'emergency' as const },
    { label: 'Rating', value: '4.8/5', type: 'rating' as const },
  ];

  const services = hospital.services || [];
  const facilities = hospital.facilities || [];
  const departments = hospital.departments || [];
  const gallery = hospital.gallery || [];

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col lg:flex-row gap-8">
        {/* MAIN CONTENT */}
        <div className="w-full lg:w-3/4">
          {/* HEADER */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="mb-12"
          >
            <div className="relative w-full h-96 rounded-xl shadow overflow-hidden">
              {hospital.imageUrl && (
                <Image
                  src={hospital.imageUrl}
                  alt={hospital.seo?.h1 || hospital.name || 'Hospital Image'}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 1000px"
                  className="object-cover"
                  priority
                />
              )}
            </div>

            <div className="mt-6 flex flex-col sm:flex-row justify-between items-start gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold">
                  {hospital.seo?.h1 || hospital.name}
                </h1>
                <div className="flex items-center gap-2 text-gray-600 mt-2">
                  <HiOutlineLocationMarker className="text-blue-600" />
                  <span>{hospital.location}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-lg">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-green-800 font-medium">Open Now</span>
              </div>
            </div>
          </motion.div>

          {/* HIGHLIGHTS */}
          <motion.section {...fadeProps(1)} className="mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {highlights.map((highlight, index) => (
                <HighlightCard key={index} {...highlight} />
              ))}
            </div>
          </motion.section>

          {/* ABOUT */}
          <section className="mb-12">
            {renderCard(
              <>
                {renderIconHeader(MdLocalHospital, 'About the Hospital')}
                <p className="leading-relaxed whitespace-pre-line">
                  {hospital.description}
                </p>
              </>,
              'bg-white p-6'
            )}
          </section>

          {/* SERVICES & FACILITIES */}
          <motion.section {...fadeProps(2)} className="mb-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                {renderIconHeader(FaProcedures, 'Services')}
                {services.length > 0 ? (
                  <ul className="space-y-3">
                    {services.map((service, index) => (
                      <li 
                        key={index} 
                        className="flex items-center gap-3 bg-blue-50 p-4 rounded-xl shadow"
                      >
                        <MdLocalHospital className="text-blue-600 flex-shrink-0" />
                        <span>{service.label}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500 italic">No services information available.</p>
                )}
              </div>

              <div>
                {renderIconHeader(MdOutlineLocalHotel, 'Facilities')}
                {facilities.length > 0 ? (
                  <ul className="grid grid-cols-2 gap-3">
                    {facilities.map((facility, index) => {
                      const Icon = facility.icon ? FACILITY_ICON_MAP[facility.icon] : null;
                      return (
                        <li 
                          key={index} 
                          className="flex items-center gap-3 bg-green-50 p-3 rounded-xl shadow"
                        >
                          <div className="bg-green-100 p-2 rounded flex-shrink-0">
                            {Icon ? (
                              <Icon className="w-4 h-4 text-green-600" />
                            ) : (
                              <MdOutlineLocalHotel className="w-4 h-4 text-green-600" />
                            )}
                          </div>
                          <span>{facility.label}</span>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <p className="text-gray-500 italic">No facilities information available.</p>
                )}
              </div>
            </div>
          </motion.section>

          {/* INFRASTRUCTURE */}
          <motion.section {...fadeProps(3)} className="mb-12">
            {renderCard(
              <>
                <h2 className="text-2xl font-semibold mb-4">Infrastructure</h2>
                <p>{hospital.infrastructure || 'Infrastructure information not available.'}</p>

                {departments.length > 0 && (
                  <>
                    <h3 className="text-xl font-semibold mt-6 mb-3">Departments</h3>
                    <div className="flex flex-wrap gap-2">
                      {departments.map((department, index) => (
                        <span 
                          key={index} 
                          className="bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-sm"
                        >
                          {department}
                        </span>
                      ))}
                    </div>
                  </>
                )}
              </>,
              'bg-white p-6'
            )}
          </motion.section>

          {/* GALLERY */}
          {gallery.length > 0 && (
            <motion.section {...fadeProps(4)} className="mb-12">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {gallery.map((image, index) => (
                    <div
                      key={index}
                      onClick={() => openGallery(index)}
                      className="cursor-pointer overflow-hidden rounded-lg shadow relative aspect-square"
                    >
                      <Image
                        src={image}
                        alt={altTexts[index] || `${hospital.name || 'Hospital'} image ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 200px"
                        className="object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>
          )}

          {/* CONTACT & HOURS */}
          <motion.section {...fadeProps(gallery.length > 0 ? 5 : 4)} className="mb-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl shadow">
                <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                {hospital.contact?.googleMapUrl && (
                  <a
                    href={hospital.contact.googleMapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-purple-600 underline hover:text-purple-800 transition-colors"
                  >
                    <HiOutlineLocationMarker className="flex-shrink-0" />
                    <span>{hospital.contact.address || 'Address not available'}</span>
                  </a>
                )}
                <div className="flex items-center gap-2 mt-4">
                  <HiOutlinePhone className="text-purple-600 flex-shrink-0" />
                  <a
                    href={`tel:${hospital.contact?.phone || ''}`}
                    className="text-purple-600 underline hover:text-purple-800 transition-colors"
                  >
                    {hospital.contact?.phone || 'Phone number not available'}
                  </a>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl shadow">
                {renderIconHeader(HiOutlineClock, 'Opening Hours')}
                <div className="flex justify-between mb-3">
                  <span>Monday - Sunday</span>
                  <span className="font-medium">24 Hours</span>
                </div>
                <div className="border-t pt-3 flex justify-between items-center">
                  <span>Emergency Services</span>
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">
                    24/7 Available
                  </span>
                </div>
              </div>
            </div>
          </motion.section>
        </div>

        {/* SIDEBAR */}
        <aside className="w-full lg:w-1/4 space-y-6">
          {renderCard(
            <>
              <h3 className="font-bold flex items-center gap-2 text-red-800 mb-2">
                <MdOutlineEmergency /> Emergency Contact
              </h3>
              <a 
                href="tel:+919035193777" 
                className="text-2xl sm:text-3xl font-bold text-red-700 hover:text-red-800 transition-colors block"
              >
                +91 90351 93777
              </a>
            </>,
            'bg-red-50 p-4'
          )}

          {renderCard(
            <>
              <h3 className="font-bold mb-3">Our Network</h3>
              <ul className="space-y-2 max-h-[500px] overflow-y-auto">
                {HOSPITALS_LIST.map((hosp) => (
                  <Link 
                    key={hosp.id} 
                    href={`/${HOSPITAL_SLUG_MAP[hosp.id] || '#'}`}
                  >
                    <NetworkHospitalItem 
                      hospital={hosp} 
                      isActive={hospitalId === hosp.id} 
                    />
                  </Link>
                ))}
              </ul>
            </>,
            'bg-white p-4'
          )}
        </aside>
      </div>

      {/* MAP */}
      {hospital.contact?.embedMapUrl && (
        <motion.section 
          {...fadeProps(gallery.length > 0 ? 6 : 5)} 
          className="max-w-7xl mx-auto px-4 pb-10"
        >
          <h2 className="text-3xl font-bold text-center mb-6">Our Location</h2>
          <div className="rounded-lg overflow-hidden shadow">
            <iframe
              src={hospital.contact.embedMapUrl}
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              title={`Location of ${hospital.name || 'Hospital'}`}
            />
          </div>
        </motion.section>
      )}

      <Footer />

      <Lightbox
        open={isLightboxOpen}
        close={() => setIsLightboxOpen(false)}
        slides={slides}
        index={currentImageIndex}
      />
    </>
  );
};

export default HospitalPageClient;