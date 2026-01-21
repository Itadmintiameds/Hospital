'use client';

import { useState } from 'react';
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
/*                               STATIC DATA                                  */
/* -------------------------------------------------------------------------- */

const hospitalSlugMap: Record<number, string> = {
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

const hospitalsList = [
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

/* -------------------------------------------------------------------------- */
/*                              ICON REGISTRY                                 */
/* -------------------------------------------------------------------------- */

const facilityIconMap: Record<string, IconType> = {
  FaWifi,
  FaParking,
  FaBed,
  FaXRay,
};

/* -------------------------------------------------------------------------- */
/*                                ANIMATION                                   */
/* -------------------------------------------------------------------------- */

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 },
  }),
};

const fadeProps = (i: number) => ({
  initial: 'hidden' as const,
  whileInView: 'visible' as const,
  viewport: { once: true },
  variants: fadeIn,
  custom: i,
});

/* -------------------------------------------------------------------------- */
/*                            HELPER COMPONENTS                                */
/* -------------------------------------------------------------------------- */

type NetworkHospitalItemProps = {
  hosp: { id: number; name: string; image: string };
  active: boolean;
};

const NetworkHospitalItem = ({ hosp, active }: NetworkHospitalItemProps) => (
  <li
    className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
      active ? 'bg-gray-200' : 'hover:bg-gray-100'
    }`}
  >
    <img
      src={hosp.image}
      alt={hosp.name}
      className="w-12 h-12 rounded-md object-cover shadow"
    />
    <div>
      <p className={`text-sm font-medium ${active ? 'text-blue-800' : 'text-gray-800'}`}>
        {hosp.name}
      </p>
      <div className="flex items-center gap-1">
        <HiOutlineStar className="w-3 h-3 text-yellow-500" />
        <span className="text-xs text-gray-500">4.8</span>
      </div>
    </div>
  </li>
);

/* -------------------------------------------------------------------------- */
/*                              MAIN COMPONENT                                 */
/* -------------------------------------------------------------------------- */

const HospitalPageClient = ({ hospital }: { hospital: Hospital }) => {
  const [isLightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!hospital) {
    return (
      <div className="flex items-center justify-center h-screen text-red-600 text-xl font-semibold">
        Hospital data is not available.
      </div>
    );
  }

  const hospitalId = hospital.id;
  const slides = hospital.gallery.map((img) => ({ src: img }));
  const altTexts = hospital.seo?.altTexts ?? [];

  const openGallery = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const highlights = [
    { label: 'Specialists', value: hospital.specialists || '10+', icon: FaUserMd, bg: 'bg-blue-50' },
    { label: 'Beds', value: hospital.beds || '20+', icon: FaProcedures, bg: 'bg-purple-50' },
    { label: 'Emergency', value: '24/7', icon: MdOutlineEmergency, bg: 'bg-green-50' },
    { label: 'Rating', value: '4.8/5', icon: HiOutlineStar, bg: 'bg-orange-50' },
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col lg:flex-row gap-8">
        {/* MAIN CONTENT */}
        <div className="w-full lg:w-3/4">
          {/* HEADER */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-12">
            <img
              src={hospital.imageUrl}
              alt={hospital.seo?.h1 || hospital.name}
              className="w-full h-96 object-cover rounded-xl shadow"
            />

            <div className="mt-6 flex justify-between items-start gap-4">
              <div>
                <h1 className="text-4xl font-bold">
                  {hospital.seo?.h1 || hospital.name}
                </h1>
                <div className="flex items-center gap-2 text-gray-600 mt-2">
                  <HiOutlineLocationMarker className="text-blue-600" />
                  {hospital.location}
                </div>
              </div>

              <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-lg">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-green-800 font-medium">Open Now</span>
              </div>
            </div>
          </motion.div>

          {/* HIGHLIGHTS */}
          <motion.section {...fadeProps(1)} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <div key={i} className={`${h.bg} p-4 rounded-xl flex gap-3`}>
                  <Icon className="text-purple-600 w-6 h-6" />
                  <div>
                    <p className="text-sm text-purple-600">{h.label}</p>
                    <p className="font-bold text-purple-600">{h.value}</p>
                  </div>
                </div>
              );
            })}
          </motion.section>

          {/* ABOUT */}
          <section className="mb-12 bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-semibold flex gap-2 mb-2">
              <MdLocalHospital /> About the Hospital
            </h2>
            <p className="leading-relaxed whitespace-pre-line">
              {hospital.description}
            </p>
          </section>

          {/* SERVICES & FACILITIES */}
          <motion.section {...fadeProps(2)} className="grid md:grid-cols-2 gap-10 mb-12">
            <div>
              <h2 className="text-2xl font-semibold flex gap-2 mb-4">
                <FaProcedures /> Services
              </h2>
              <ul className="space-y-3">
                {hospital.services.map((s, i) => (
                  <li key={i} className="flex gap-3 bg-blue-50 p-4 rounded-xl shadow">
                    <MdLocalHospital className="text-blue-600" />
                    {s.label}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold flex gap-2 mb-4">
                <MdOutlineLocalHotel /> Facilities
              </h2>
              <ul className="grid grid-cols-2 gap-3">
                {hospital.facilities.map((f, i) => {
                  const Icon = facilityIconMap[f.icon];
                  return (
                    <li key={i} className="flex gap-3 bg-green-50 p-3 rounded-xl shadow">
                      <div className="bg-green-100 p-2 rounded">
                        {Icon && <Icon className="w-4 h-4 text-green-600" />}
                      </div>
                      {f.label}
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.section>

          {/* INFRASTRUCTURE */}
          <motion.section {...fadeProps(3)} className="mb-12 bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-semibold mb-2">Infrastructure</h2>
            <p>{hospital.infrastructure}</p>

            {hospital.departments && (
              <>
                <h3 className="text-xl font-semibold mt-4 mb-2">Departments</h3>
                <div className="flex flex-wrap gap-2">
                  {hospital.departments.map((d, i) => (
                    <span key={i} className="bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {d}
                    </span>
                  ))}
                </div>
              </>
            )}
          </motion.section>

          {/* GALLERY */}
          <motion.section {...fadeProps(4)} className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {hospital.gallery.map((img, i) => (
                <div
                  key={i}
                  onClick={() => openGallery(i)}
                  className="cursor-pointer overflow-hidden rounded-lg shadow"
                >
                  <img
                    src={img}
                    alt={altTexts[i] || `${hospital.name} image ${i + 1}`}
                    className="object-cover aspect-square hover:scale-110 transition"
                  />
                </div>
              ))}
            </div>
          </motion.section>

          {/* CONTACT & HOURS */}
          <motion.section {...fadeProps(5)} className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>

              <a
                href={hospital.contact.googleMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 text-purple-600 underline"
              >
                <HiOutlineLocationMarker />
                {hospital.contact.address}
              </a>

              <div className="flex gap-2 mt-3">
                <HiOutlinePhone className="text-purple-600" />
                <a
                  href={`tel:${hospital.contact.phone}`}
                  className="text-purple-600 underline"
                >
                  {hospital.contact.phone}
                </a>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <h2 className="text-2xl font-semibold flex gap-2 mb-4">
                <HiOutlineClock /> Opening Hours
              </h2>

              <div className="flex justify-between">
                <span>Monday - Sunday</span>
                <span className="font-medium">24 Hours</span>
              </div>

              <div className="mt-4 border-t pt-3 flex justify-between">
                <span>Emergency Services</span>
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">
                  24/7 Available
                </span>
              </div>
            </div>
          </motion.section>
        </div>

        {/* SIDEBAR */}
        <aside className="w-full lg:w-1/4 sticky top-6 space-y-4">
          <div className="bg-red-50 p-4 rounded-xl shadow">
            <h3 className="font-bold flex gap-2 text-red-800">
              <MdOutlineEmergency /> Emergency Contact
            </h3>
            <a href="tel:+919035193777" className="text-3xl font-bold text-red-700">
              +91 90351 93777
            </a>
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="font-bold mb-3">Our Network</h3>
            <ul className="space-y-2 max-h-[500px] overflow-y-auto">
              {hospitalsList.map((h) => (
                <Link key={h.id} href={`/${hospitalSlugMap[h.id]}`}>
                  <NetworkHospitalItem hosp={h} active={hospitalId === h.id} />
                </Link>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      {/* MAP */}
      {hospital.contact.embedMapUrl && (
        <motion.section {...fadeProps(6)} className="max-w-7xl mx-auto px-4 pb-10">
          <h2 className="text-3xl font-bold text-center mb-4">Our Location</h2>
          <div className="rounded-lg overflow-hidden shadow">
            <iframe
              src={hospital.contact.embedMapUrl}
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            />
          </div>
        </motion.section>
      )}

      <Footer />

      <Lightbox
        open={isLightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={slides}
        index={currentImageIndex}
      />
    </>
  );
};

export default HospitalPageClient;
