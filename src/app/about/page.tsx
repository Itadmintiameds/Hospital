'use client';

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { FaHospital, FaHeartbeat, FaAmbulance, FaEye, FaBullseye } from 'react-icons/fa';
import { MdOutlineLocalPharmacy } from 'react-icons/md';
import { FiArrowRight, FiTarget } from 'react-icons/fi';
import Footer from '../component/FooterSection';
import Link from 'next/link';

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

// UNIQUE DATA - No duplication
const VISION_MISSION_GOAL = [
  { title: 'Vision', desc: 'To provide affordable, accessible, inclusive & quality healthcare services to five million rural and urban poor by 2030.', bg: 'bg-blue-50', icon: FaEye },
  { title: 'Mission', desc: 'To serve the underserved in restoration and maintenance of their health through suitable healthcare schemes and integrated infrastructure.', bg: 'bg-green-50', icon: FiTarget },
  { title: 'Goal', desc: '200+ hospitals across India by 2028 with focus on rural and underserved areas.', bg: 'bg-yellow-50', icon: FaBullseye },
];

const VALUE_PROPS = [
  { title: '24/7 Medical Services', desc: 'Round-the-clock emergency and primary healthcare access.', icon: FaAmbulance },
  { title: 'Advanced Diagnostics', desc: 'High-tech tools and accurate diagnostic support.', icon: FaHeartbeat },
  { title: 'In-house CurePlus Pharma', desc: 'Affordable, quality medicines for every patient.', icon: MdOutlineLocalPharmacy },
];

// Animation - UNIQUE config (different from HospitalPage)
const PAGE_ANIMATION: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ 
    opacity: 1, 
    y: 0, 
    transition: { 
      delay: i * 0.1, 
      type: 'spring', 
      stiffness: 100, 
      damping: 20 
    } 
  }),
};

const getMotionProps = (i: number) => ({
  variants: PAGE_ANIMATION,
  custom: i,
  initial: 'hidden' as const,
  whileInView: 'visible' as const,
  viewport: { once: true, margin: "-50px" },
});

// Consolidated Styles - UNIQUE naming
const PAGE_STYLES = {
  card: 'rounded-xl shadow-md hover:shadow-lg transition-all duration-300',
  iconBox: 'p-2 bg-purple-100 rounded-lg flex-shrink-0',
  iconLarge: 'w-8 h-8 text-purple-600',
  iconMedium: 'w-5 h-5 text-purple-600',
  titleMain: 'font-bold text-purple-700',
  titleLarge: 'text-2xl',
  titleMedium: 'text-xl',
  titleLg: 'text-lg',
  descMain: 'text-gray-600 text-sm',
  descLarge: 'text-gray-700',
  paragraph: 'text-lg leading-relaxed text-gray-700',
  flex4: 'flex items-center gap-4',
  flex3: 'flex items-center gap-3',
  gridBase: 'grid gap-6',
  grid2: 'sm:grid-cols-2',
  grid3: 'md:grid-cols-3 lg:grid-cols-3',
  spacing: 'mb-16 md:mb-20',
} as const;

interface ContentCardProps {
  index: number;
  children: React.ReactNode;
  className?: string;
  link?: string;
  hover?: boolean;
}

const ContentCard = ({ index, children, className = '', link, hover = true }: ContentCardProps) => {
  const content = (
    <motion.div 
      {...getMotionProps(index)} 
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      className={`${PAGE_STYLES.card} ${className}`}
    >
      {children}
    </motion.div>
  );
  return link ? <Link href={link}>{content}</Link> : content;
};

const InfoCard = ({ 
  title, 
  desc, 
  icon: Icon, 
  index, 
  bg = 'bg-white', 
  showIconBg = false, 
  large = false 
}: { 
  title: string; 
  desc: string; 
  icon: React.ElementType; 
  index: number; 
  bg?: string; 
  showIconBg?: boolean; 
  large?: boolean;
}) => (
  <ContentCard index={index} className={`${bg} p-6 ${large ? 'border-none' : 'border'}`}>
    <div className={`${PAGE_STYLES.flex4} mb-3`}>
      {showIconBg ? (
        <div className={PAGE_STYLES.iconBox}>
          <Icon className={PAGE_STYLES.iconLarge} />
        </div>
      ) : (
        <Icon className={PAGE_STYLES.iconLarge} />
      )}
      <h2 className={`${PAGE_STYLES.titleMain} ${large ? PAGE_STYLES.titleLarge : PAGE_STYLES.titleMedium}`}>
        {title}
      </h2>
    </div>
    <p className={large ? PAGE_STYLES.descLarge : PAGE_STYLES.descMain}>{desc}</p>
  </ContentCard>
);

const HospitalCard = ({ hospital, index }: { hospital: typeof HOSPITALS_LIST[0]; index: number }) => (
  <ContentCard 
    index={index} 
    className="bg-white border overflow-hidden" 
    link={`/${`hospital-${hospital.id}`}`} // UNIQUE slug pattern
    hover={true}
  >
    <div className="group">
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
      <div className={`${PAGE_STYLES.flex3} p-4`}>
        <div className={PAGE_STYLES.iconBox}>
          <FaHospital className={PAGE_STYLES.iconMedium} />
        </div>
        <h3 className={`group-hover:underline ${PAGE_STYLES.titleLg} ${PAGE_STYLES.titleMain.replace('text-purple-700', 'text-purple-800')}`}>
          {hospital.name}
        </h3>
      </div>
    </div>
  </ContentCard>
);

const PageSection = ({ title, desc, children }: { 
  title?: string; 
  desc?: string; 
  children: React.ReactNode 
}) => (
  <div className={PAGE_STYLES.spacing}>
    {title && (
      <div className="text-center mb-8">
        <h2 className={`text-2xl md:text-3xl ${PAGE_STYLES.titleMain} mb-2`}>{title}</h2>
        {desc && <p className={PAGE_STYLES.descMain}>{desc}</p>}
      </div>
    )}
    {children}
  </div>
);

const AboutPage = () => (
  <>
    <div className="relative max-w-7xl mx-auto px-4 py-12 md:py-20 text-gray-800">
      {/* Hero */}
      <motion.div {...getMotionProps(0)} className="text-center mb-12 md:mb-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-purple-700 leading-tight">
          Building Healthier Communities
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          CurePlus Hospitals is committed to transforming rural healthcare across India.
        </p>
      </motion.div>

      {/* About Text */}
      <motion.div {...getMotionProps(1)} className={`${PAGE_STYLES.spacing} max-w-5xl mx-auto`}>
        <div className="space-y-4">
          {[
            'Founded in August 2013 by Dr. Arjun Sachidanand and Dr. Sini Arjun, Sudhanand Healthcare Solutions Pvt. Ltd. is dedicated to delivering high-quality healthcare services at subsidized rates.',
            'The organization focuses on preventive care, diagnostics, telemedicine, and education to enhance healthcare accessibility.',
            'With a growing CurePlus Hospital network across Karnataka, SHPL continues to improve rural and underserved healthcare outcomes.'
          ].map((text, i) => (
            <p key={i} className={PAGE_STYLES.paragraph}>{text}</p>
          ))}
        </div>
      </motion.div>

      {/* Vision Mission Goal */}
      <div className={`${PAGE_STYLES.gridBase} ${PAGE_STYLES.grid3} md:gap-8 ${PAGE_STYLES.spacing}`}>
        {VISION_MISSION_GOAL.map((item, i) => (
          <InfoCard key={item.title} {...item} icon={item.icon} index={i + 2} large />
        ))}
      </div>

      {/* Value Props */}
      <div className={`${PAGE_STYLES.gridBase} ${PAGE_STYLES.grid3} ${PAGE_STYLES.spacing}`}>
        {VALUE_PROPS.map((item, i) => (
          <InfoCard key={item.title} {...item} index={i + 5} showIconBg />
        ))}
      </div>

      {/* Hospitals */}
      <PageSection title="Hospitals Under SHPL" desc="Our growing network of healthcare facilities">
        <div className={`${PAGE_STYLES.gridBase} ${PAGE_STYLES.grid2} ${PAGE_STYLES.grid3}`}>
          {HOSPITALS_LIST.map((hospital, i) => (
            <HospitalCard key={hospital.id} hospital={hospital} index={i + 10} />
          ))}
        </div>
      </PageSection>

      {/* CTA */}
      <motion.div {...getMotionProps(23)} className="text-center py-12 bg-gradient-to-r from-purple-700 to-purple-600 rounded-xl shadow-lg">
        <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
          Join Us In Building A Healthier Future
        </h3>
        <Link href="/careers">
          <motion.button 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 md:px-8 py-3 bg-white text-purple-800 font-medium rounded-full shadow hover:bg-gray-50 transition-colors"
          >
            Explore Careers 
            <FiArrowRight className="w-5 h-5" />
          </motion.button>
        </Link>
      </motion.div>
    </div>

    <Footer />
  </>
);

export default AboutPage;
