
'use client';
import React from 'react';
import { motion, Variants } from "framer-motion";
import { FaHospital, FaHeartbeat, FaAmbulance, FaEye, FaBullseye } from 'react-icons/fa';
import { MdOutlineLocalPharmacy } from 'react-icons/md';
import { FiArrowRight, FiTarget } from 'react-icons/fi';
import Footer from '../component/FooterSection';
import Link from 'next/link';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  }),
};

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
  { id: 1, name: 'CurePlus  Disha Hospital', image: '/hospital/cure+.png' },
  { id: 2, name: 'CurePlus  Dharani Hospital', image: '/hospital/dharni.png' },
  { id: 3, name: 'CurePlus  Kaveri Hospital', image: '/hospital/kaveri.png' },
  { id: 4, name: 'CurePlus  Krishna Hospital', image: '/hospital/krishna.png' },
  { id: 5, name: 'CurePlus  Narasegowda Memorial Hospital', image: '/hospital/Narasegowda.png' },
  { id: 6, name: 'CurePlus  Shanivarasanthe Hospital', image: '/hospital/shanivarasanthe.png' },
  { id: 7, name: 'CurePlus  Ramapura Hospital', image: '/hospital/Ramapura.png' },
  { id: 8, name: 'CurePlus  Terakanambi Hospital', image: '/hospital/Terakanambi.png' },
  { id: 9, name: 'CurePlus  Bherya Hospital', image: '/hospital/Bherya.png' },
  { id: 10, name: 'CurePlus  T. Narasipura Hospital', image: '/hospital/T. Narasipura.png' },
  { id: 11, name: 'CurePlus  Handpost Hospital', image: '/hospital/Handpost.png' },
  { id: 12, name: 'CurePlus  Hosur Hospital', image: '/hospital/Hosur.png' },
  { id: 13, name: 'CurePlus  Halli Mysore Hospital', image: '/hospital/Halli Mysore.png' },
];

const AboutPage = () => {
  return (
    <>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 text-gray-800">
        {/* Header */}
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={fadeUp} 
          custom={0} 
          className="text-center mb-12 md:mb-20"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-purple-700 leading-tight">
            Building Healthier Communities
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            CurePlus Hospitals is committed to transforming rural healthcare across India.
          </p>
        </motion.div>

        {/* Overview */}
        <motion.div
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mb-16 md:mb-20 max-w-5xl mx-auto"
        >
          <p className="text-lg leading-relaxed text-gray-700">
            Founded in August 2013 by Dr. Arjun Sachidanand and Dr. Sini Arjun, Sudhanand Healthcare Solutions Pvt. Ltd. is dedicated to delivering high-quality healthcare services at subsidized rates in India and globally. Central to its mission are the esteemed CurePlus  Hospitals, exemplifying the company&apos;s commitment to healthcare excellence.
            <br /><br />
            The organization aims to establish, manage, and promote healthcare facilities that offer comprehensive services including preventive care, diagnostics, telemedicine, and educational initiatives. This holistic approach underscores its dedication to enhancing healthcare accessibility and quality.
            <br /><br />
            Sudhanand Healthcare Solutions Pvt. Ltd. focuses on setting up healthcare centers that cater to both rural and urban underserved populations, contributing significantly to improving health outcomes across India. This effort is supported by Dr. M. D. Sachidananda Murthy Memorial Hospitals and an expanding network of CurePlus  Hospitals across various districts in Karnataka, India.
          </p>
        </motion.div>

        {/* Vision / Mission / Goal */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          {[
            {
              title: 'Vision',
              desc: 'To provide affordable, accessible, inclusive & quality healthcare services to five million rural and urban poor by 2030.',
              color: 'bg-blue-50',
              icon: <FaEye className="text-purple-600 w-8 h-8" />,
            },
            {
              title: 'Mission',
              desc: 'To serve the underserved in restoration and maintenance of their health through implementation of suitable healthcare schemes & development of integrated healthcare infrastructure always keeping the focus on the beneficiary.',
              color: 'bg-green-50',
              icon: <FiTarget className="text-purple-600 w-8 h-8" />,
            },
            {
              title: 'Goal',
              desc: '200+ hospitals across India by 2028 with a focus on rural and underserved areas to ensure equitable healthcare access.',
              color: 'bg-yellow-50',
              icon: <FaBullseye className="text-purple-600 w-8 h-8" />,
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              className={`${item.color} p-6 rounded-xl shadow-md hover:shadow-lg transition-all`}
              variants={fadeUp}
              custom={i + 2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-4 mb-3">
                {item.icon}
                <h2 className="text-2xl font-bold text-purple-700">{item.title}</h2>
              </div>
              <p className="text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Value Proposition */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 md:mb-20">
          {[
            {
              icon: <FaAmbulance className="text-purple-600 w-8 h-8" />,
              title: '24/7 Medical Services',
              desc: 'Round-the-clock emergency and primary healthcare access.',
            },
            {
              icon: <FaHeartbeat className="text-purple-600 w-8 h-8" />,
              title: 'Advanced Diagnostics',
              desc: 'High-tech tools and accurate diagnostic support.',
            },
            {
              icon: <MdOutlineLocalPharmacy className="text-purple-600 w-8 h-8" />,
              title: 'In-house CurePlus Pharma',
              desc: 'Affordable, quality medicines for every patient.',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-xl border shadow hover:shadow-lg transition-all"
              variants={fadeUp}
              custom={i + 5}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-purple-700">{item.title}</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Hub & Spoke Model */}
        <motion.div
          className="mb-16 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={8}
        >
          <h2 className="text-3xl font-bold mb-4 text-purple-700">Our Hub-and-Spoke Model</h2>
          <p className="text-lg text-gray-700 mb-2">
            Hubs: <strong className="text-purple-800">Mysuru</strong>, <strong className="text-purple-800">Kushalnagar</strong> <br />
            Spokes: <strong className="text-purple-800">Chamarajanagar, Mandya, Hassan</strong> and more — empowering healthcare delivery in remote regions.
          </p>
        </motion.div>

        {/* Enhanced Hospitals Under SHPL Section */}
        <motion.div
          className="mb-16 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={9}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-purple-700 mb-2">Hospitals Under SHPL</h2>
            <p className="text-gray-600">Our growing network of healthcare facilities</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hospitalsList.map((hospital, index) => (
              <Link href={`/${hospitalSlugMap[hospital.id]}`} key={index}>
                <motion.div
                  className="group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-lg transition-all border border-gray-100"
                  variants={fadeUp}
                  custom={index + 10}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={hospital.image}
                      alt={hospital.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <div className="p-4 flex items-center gap-3">
                    <div className="flex-shrink-0 p-2 bg-purple-100 rounded-lg text-purple-600">
                      <FaHospital className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-purple-800 group-hover:underline">
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
          className="text-center py-12 bg-gradient-to-r from-purple-700 to-purple-600 rounded-xl shadow-lg mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={23}
        >
          <h3 className="text-2xl font-semibold text-white mb-4">Join Us In Building A Healthier Future</h3>
          <Link href="/careers">
            <motion.button 
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-purple-800 font-medium rounded-full hover:bg-gray-100 transition-all shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
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