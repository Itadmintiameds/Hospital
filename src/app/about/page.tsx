'use client';

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import {
  FaHospital,
  FaHeartbeat,
  FaAmbulance,
  FaEye,
  FaBullseye,
} from 'react-icons/fa';
import { MdOutlineLocalPharmacy } from 'react-icons/md';
import { FiArrowRight, FiTarget } from 'react-icons/fi';
import Footer from '../component/FooterSection';
import Link from 'next/link';

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
  { id: 1, name: 'CurePlus Disha Hospital', image: '/hospital/cure+.png' },
  { id: 2, name: 'CurePlus Dharani Hospital', image: '/hospital/dharni.png' },
  { id: 3, name: 'CurePlus Kaveri Hospital', image: '/hospital/kaveri.png' },
  { id: 4, name: 'CurePlus Krishna Hospital', image: '/hospital/krishna.png' },
  { id: 5, name: 'CurePlus Narasegowda Memorial Hospital', image: '/hospital/Narasegowda.png' },
  { id: 6, name: 'CurePlus Shanivarasanthe Hospital', image: '/hospital/Shanivarasanth.png' },
  { id: 7, name: 'CurePlus Ramapura Hospital', image: '/hospital/Ramapura.png' },
  { id: 8, name: 'CurePlus Terakanambi Hospital', image: '/hospital/Terakanambi.png' },
  { id: 9, name: 'CurePlus Bherya Hospital', image: '/hospital/Bherya.png' },
  { id: 10, name: 'CurePlus T. Narasipura Hospital', image: '/hospital/T. Narasipura.png' },
  { id: 11, name: 'CurePlus Handpost Hospital', image: '/hospital/Handpost.png' },
  { id: 12, name: 'CurePlus Hosur Hospital', image: '/hospital/Hosur.png' },
  { id: 13, name: 'CurePlus Halli Mysore Hospital', image: '/hospital/Halli Mysore.png' },
];

const VISION_MISSION_GOAL = [
  {
    title: 'Vision',
    desc: 'To provide affordable, accessible, inclusive & quality healthcare services to five million rural and urban poor by 2030.',
    bg: 'bg-blue-50',
    icon: FaEye,
  },
  {
    title: 'Mission',
    desc: 'To serve the underserved in restoration and maintenance of their health through suitable healthcare schemes and integrated infrastructure.',
    bg: 'bg-green-50',
    icon: FiTarget,
  },
  {
    title: 'Goal',
    desc: '200+ hospitals across India by 2028 with focus on rural and underserved areas.',
    bg: 'bg-yellow-50',
    icon: FaBullseye,
  },
];

const VALUE_PROPS = [
  {
    title: '24/7 Medical Services',
    desc: 'Round-the-clock emergency and primary healthcare access.',
    icon: FaAmbulance,
  },
  {
    title: 'Advanced Diagnostics',
    desc: 'High-tech tools and accurate diagnostic support.',
    icon: FaHeartbeat,
  },
  {
    title: 'In-house CurePlus Pharma',
    desc: 'Affordable, quality medicines for every patient.',
    icon: MdOutlineLocalPharmacy,
  },
];

/* -------------------------------------------------------------------------- */
/*                               ANIMATIONS                                   */
/* -------------------------------------------------------------------------- */

const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      type: 'spring',
      stiffness: 100,
      damping: 20,
    },
  }),
};

const fadeProps = (i: number) => ({
  variants: FADE_UP,
  custom: i,
  initial: 'hidden' as const,
  whileInView: 'visible' as const,
  viewport: { once: true, margin: "-50px" },
});

/* -------------------------------------------------------------------------- */
/*                               COMPONENTS                                   */
/* -------------------------------------------------------------------------- */

interface ContentCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  index: number;
  bgColor?: string;
  showIconBackground?: boolean;
  isVisionCard?: boolean;
}

const ContentCard = ({
  title,
  description,
  icon: Icon,
  index,
  bgColor = 'bg-white',
  showIconBackground = false,
  isVisionCard = false,
}: ContentCardProps) => (
  <motion.div
    {...fadeProps(index)}
    whileHover={{ y: -5 }}
    className={`${bgColor} p-6 rounded-xl shadow-md hover:shadow-lg transition-all ${isVisionCard ? '' : 'border'}`}
  >
    <div className="flex items-center gap-4 mb-3">
      {showIconBackground ? (
        <div className="p-2 bg-purple-100 rounded-lg">
          <Icon className="w-8 h-8 text-purple-600" />
        </div>
      ) : (
        <Icon className="w-8 h-8 text-purple-600" />
      )}
      <h2 className={`font-bold ${isVisionCard ? 'text-2xl text-purple-700' : 'text-xl text-purple-700'}`}>
        {title}
      </h2>
    </div>
    <p className={`${isVisionCard ? 'text-gray-700' : 'text-gray-600 text-sm'}`}>
      {description}
    </p>
  </motion.div>
);

interface HospitalCardProps {
  hospital: {
    id: number;
    name: string;
    image: string;
  };
  index: number;
}

const HospitalCard = ({ hospital, index }: HospitalCardProps) => (
  <Link href={`/${HOSPITAL_SLUG_MAP[hospital.id]}`}>
    <motion.div
      {...fadeProps(index)}
      whileHover={{ y: -5 }}
      className="group rounded-xl bg-white shadow-md hover:shadow-lg border overflow-hidden"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={hospital.image}
          alt={hospital.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
      </div>
      <div className="p-4 flex items-center gap-3">
        <div className="flex-shrink-0 p-2 bg-purple-100 rounded-lg">
          <FaHospital className="w-5 h-5 text-purple-600" />
        </div>
        <h3 className="text-lg font-semibold text-purple-800 group-hover:underline">
          {hospital.name}
        </h3>
      </div>
    </motion.div>
  </Link>
);

/* -------------------------------------------------------------------------- */
/*                               MAIN COMPONENT                               */
/* -------------------------------------------------------------------------- */

const AboutPage = () => {
  return (
    <>
      <div className="relative max-w-7xl mx-auto px-4 py-12 md:py-20 text-gray-800">
        {/* HEADER */}
        <motion.div {...fadeProps(0)} className="text-center mb-12 md:mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-purple-700 leading-tight">
            Building Healthier Communities
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            CurePlus Hospitals is committed to transforming rural healthcare across India.
          </p>
        </motion.div>

        {/* OVERVIEW */}
        <motion.div {...fadeProps(1)} className="mb-16 md:mb-20 max-w-5xl mx-auto">
          <p className="text-lg leading-relaxed text-gray-700">
            Founded in August 2013 by Dr. Arjun Sachidanand and Dr. Sini Arjun, Sudhanand Healthcare Solutions Pvt. Ltd. is dedicated to delivering high-quality healthcare services at subsidized rates.
            <br /><br />
            The organization focuses on preventive care, diagnostics, telemedicine, and education to enhance healthcare accessibility.
            <br /><br />
            With a growing CurePlus Hospital network across Karnataka, SHPL continues to improve rural and underserved healthcare outcomes.
          </p>
        </motion.div>

        {/* VISION / MISSION / GOAL */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          {VISION_MISSION_GOAL.map((item, i) => (
            <ContentCard
              key={item.title}
              title={item.title}
              description={item.desc}
              icon={item.icon}
              index={i + 2}
              bgColor={item.bg}
              isVisionCard={true}
            />
          ))}
        </div>

        {/* VALUE PROPOSITION */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 md:mb-20">
          {VALUE_PROPS.map((item, i) => (
            <ContentCard
              key={item.title}
              title={item.title}
              description={item.desc}
              icon={item.icon}
              index={i + 5}
              showIconBackground={true}
            />
          ))}
        </div>

        {/* HOSPITAL NETWORK */}
        <motion.div {...fadeProps(9)} className="mb-16 md:mb-20">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-purple-700 mb-2">
              Hospitals Under SHPL
            </h2>
            <p className="text-gray-600">Our growing network of healthcare facilities</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {HOSPITALS_LIST.map((hospital, i) => (
              <HospitalCard
                key={hospital.id}
                hospital={hospital}
                index={i + 10}
              />
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          {...fadeProps(23)}
          className="text-center py-12 bg-gradient-to-r from-purple-700 to-purple-600 rounded-xl shadow-lg"
        >
          <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
            Join Us In Building A Healthier Future
          </h3>
          <Link href="/careers">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 md:px-8 py-3 bg-white text-purple-800 font-medium rounded-full shadow hover:bg-gray-50 transition-colors"
            >
              Explore Careers <FiArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>

      <Footer />
    </>
  );
};

export default AboutPage;