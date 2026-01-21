'use client';

import React from 'react';
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
/*                                   ANIMATION                                */
/* -------------------------------------------------------------------------- */

const fadeUp: Variants = {
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
  variants: fadeUp,
  custom: i,
  initial: 'hidden' as const,
  whileInView: 'visible' as const,
  viewport: { once: true },
});

/* -------------------------------------------------------------------------- */
/*                                   DATA                                     */
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
  { id: 1, name: 'CurePlus Disha Hospital', image: '/hospital/cure+.png' },
  { id: 2, name: 'CurePlus Dharani Hospital', image: '/hospital/dharni.png' },
  { id: 3, name: 'CurePlus Kaveri Hospital', image: '/hospital/kaveri.png' },
  { id: 4, name: 'CurePlus Krishna Hospital', image: '/hospital/krishna.png' },
  { id: 5, name: 'CurePlus Narasegowda Memorial Hospital', image: '/hospital/Narasegowda.png' },
  { id: 6, name: 'CurePlus Shanivarasanthe Hospital', image: '/hospital/shanivarasanthe.png' },
  { id: 7, name: 'CurePlus Ramapura Hospital', image: '/hospital/Ramapura.png' },
  { id: 8, name: 'CurePlus Terakanambi Hospital', image: '/hospital/Terakanambi.png' },
  { id: 9, name: 'CurePlus Bherya Hospital', image: '/hospital/Bherya.png' },
  { id: 10, name: 'CurePlus T. Narasipura Hospital', image: '/hospital/T. Narasipura.png' },
  { id: 11, name: 'CurePlus Handpost Hospital', image: '/hospital/Handpost.png' },
  { id: 12, name: 'CurePlus Hosur Hospital', image: '/hospital/Hosur.png' },
  { id: 13, name: 'CurePlus Halli Mysore Hospital', image: '/hospital/Halli Mysore.png' },
];

const visionMissionGoal = [
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

const valueProps = [
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
/*                                  COMPONENT                                  */
/* -------------------------------------------------------------------------- */

const AboutPage = () => {
  return (
    <>
      <div className="relative max-w-7xl mx-auto px-4 py-12 md:py-20 text-gray-800">
        {/* HEADER */}
        <motion.div {...fadeProps(0)} className="text-center mb-20">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-purple-700">
            Building Healthier Communities
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            CurePlus Hospitals is committed to transforming rural healthcare across India.
          </p>
        </motion.div>

        {/* OVERVIEW */}
        <motion.div {...fadeProps(1)} className="mb-20 max-w-5xl mx-auto">
          <p className="text-lg leading-relaxed text-gray-700">
            Founded in August 2013 by Dr. Arjun Sachidanand and Dr. Sini Arjun, Sudhanand Healthcare Solutions Pvt. Ltd. is dedicated to delivering high-quality healthcare services at subsidized rates.
            <br /><br />
            The organization focuses on preventive care, diagnostics, telemedicine, and education to enhance healthcare accessibility.
            <br /><br />
            With a growing CurePlus Hospital network across Karnataka, SHPL continues to improve rural and underserved healthcare outcomes.
          </p>
        </motion.div>

        {/* VISION / MISSION / GOAL */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {visionMissionGoal.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                {...fadeProps(i + 2)}
                whileHover={{ y: -5 }}
                className={`${item.bg} p-6 rounded-xl shadow-md hover:shadow-lg transition-all`}
              >
                <div className="flex items-center gap-4 mb-3">
                  <Icon className="w-8 h-8 text-purple-600" />
                  <h2 className="text-2xl font-bold text-purple-700">{item.title}</h2>
                </div>
                <p className="text-gray-700">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* VALUE PROPOSITION */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {valueProps.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                {...fadeProps(i + 5)}
                className="bg-white p-6 rounded-xl border shadow hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-purple-700">{item.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* HOSPITAL NETWORK */}
        <motion.div {...fadeProps(9)} className="mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-purple-700">Hospitals Under SHPL</h2>
            <p className="text-gray-600">Our growing network of healthcare facilities</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hospitalsList.map((hospital, i) => (
              <Link key={hospital.id} href={`/${hospitalSlugMap[hospital.id]}`}>
                <motion.div
                  {...fadeProps(i + 10)}
                  whileHover={{ y: -5 }}
                  className="group rounded-xl bg-white shadow-md hover:shadow-lg border overflow-hidden"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={hospital.image}
                      alt={hospital.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition"
                    />
                  </div>
                  <div className="p-4 flex items-center gap-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <FaHospital className="w-5 h-5 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-purple-800">
                      {hospital.name}
                    </h3>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          {...fadeProps(23)}
          className="text-center py-12 bg-gradient-to-r from-purple-700 to-purple-600 rounded-xl shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-white mb-4">
            Join Us In Building A Healthier Future
          </h3>
          <Link href="/careers">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-purple-800 font-medium rounded-full shadow"
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
