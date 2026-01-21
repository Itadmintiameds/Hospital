/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import { motion, Variants } from 'framer-motion';
import Footer from '../component/FooterSection';

// --- Helper Components & Inlined SVGs ---
const Link = ({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) => (
  <a href={href} className={className}>{children}</a>
);

// Icon component factory
const createIcon = (path: string, viewBox = "0 0 512 512") => {
  const IconComponent = ({ className }: { className?: string }) => (
    <svg 
      className={className} 
      stroke="currentColor" 
      fill="currentColor" 
      strokeWidth="0" 
      viewBox={viewBox} 
      height="1em" 
      width="1em" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={path} />
    </svg>
  );
  IconComponent.displayName = 'Icon';
  return IconComponent;
};

// Icon components
const FaHeartbeat = createIcon("M320.2 243.8l-49.7 99.4c-6 12.1-23.4 11.7-28.9-.6l-41-93.1-41.2 123.6c-4.5 13.6-24.1 13.6-28.6 0l-43.6-130.9-24.3 36.4c-6.9 10.4-22.6 5.9-24-6.2s11.5-21.2 18.3-10.7l46.4 69.6 42.4-127.2c4.5-13.6 24.1-13.6 28.6 0l43.6 130.9 40.3-121c5.1-15.2 27.2-7.8 22.1 7.5zM480 208H308.6L256 320l-33.6-71.5-70-13.3C144.2 233.7 136 225.2 136 216V48c0-8.8 7.2-16 16-16h256c8.8 0 16 7.2 16 16v160c0 4.4-1.8 8.4-4.7 11.3s-6.7 4.7-11.3 4.7zM96 208H48c-8.8 0-16 7.2-16 16v192c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16V224c0-8.8-7.2-16-16-16z");
const FaBrain = createIcon("M528 288c0 113.3-82.3 208-184.5 220.5c-4.6 2-8.5-1.6-8.5-6.2V432c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16v72.3c0 4.6-3.9 8.2-8.5 6.2C130.3 496 48 401.3 48 288c0-93.5 56.5-174.3 136-209.1V96c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16V16.6c0 4.6 3.9-8.2 8.5-6.2C290.3-1.5 352 21.6 352 64c0 30.9-17.6 58.4-43.8 71.5c2 4.2 3.8 8.4 3.8 12.5c0 8.8-7.2 16-16 16h-16c-8.8 0-16-7.2-16-16c0-29.3-16.7-56.4-41.5-69.8A176.1 176.1 0 0 0 224 64c0-38.6 25.1-71.8 60.1-81.1c4.5-1.2 7.9 4.3 5.4 8.2L288 0l-1.3 2.1c-28.3 47.2-44.7 94.6-44.7 141.9c0 47.3 16.3 94.7 44.7 141.9l1.3 2.1L288 288l.1 2.5c2.5 3.9-1 9.4-5.4 8.2C249.1 287.8 224 254.6 224 216c0-38.6 25.1-71.8 60.1-81.1c4.5-1.2 7.9 4.3 5.4 8.2L288 144l-1.3 2.1c-28.3 47.2-44.7 94.6-44.7 141.9c0 47.3 16.3 94.7 44.7 141.9l1.3 2.1L288 432l.1 2.5c2.5 3.9-1 9.4-5.4 8.2C249.1 431.8 224 398.6 224 360c0-38.6 25.1-71.8 60.1-81.1c4.5-1.2 7.9 4.3 5.4 8.2L288 288l-1.3 2.1c-28.3 47.2-44.7 94.6-44.7 141.9c0 47.3 16.3 94.7 44.7 141.9l1.3 2.1L288 512l.1-2.5c2.5-3.9-1-9.4-5.4-8.2c-35-9.3-60.1-42.5-60.1-81.1c0-38.6 25.1-71.8 60.1-81.1c4.5-1.2 7.9 4.3 5.4 8.2L288 384l-1.3 2.1c-28.3 47.2-44.7 94.6-44.7 141.9c0 4.2 1.8 8.4 3.8 12.5c-26.2 13.1-43.8 40.6-43.8 71.5c0 42.4 33.7 77.5 76.5 81.3c4.6.4 8.5-3.2 8.5-7.8V448c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v64.5c0 4.6 3.9 8.2 8.5 7.8c42.8-3.8 76.5-38.9 76.5-81.3z", "0 0 576 512");
const FaBone = createIcon("M488.3 115.9c-22.3-15.5-52.2-12.3-70.3 7.5L352 186.7l-26.3-33.1c-19.3-24.4-52.6-29.4-78.1-11.7l-94.2 65.3c-25.5 17.7-34.9 51.1-20.4 78.4l15.9 30-10.3 12.4c-20.4 24.6-16.4 60.1 8.2 79.5l86.6 67.5c24.6 19.4 60.1 15.4 79.5-9.2l12.4-15.9 30 15.9c27.3 14.5 60.7 5.1 78.4-20.4l65.3-94.2c17.7-25.5 12.7-58.8-11.7-78.1L459.6 218l63.2-66.2c19.8-20.2 22.8-50-7.5-70.3zM250.7 398.3l-86.6-67.5c-8.2-6.4-9.3-18-2.8-26.2l10.3-12.4 81.3 103.4-2.2-2.8zM416 288.5c-4.4 0-8.5-1.9-11.3-5.1l-63.2-66.2 75.8-60 66.2 63.2c6.4 8.2 5.3 20-2.8 26.2l-60 75.8c-3.2 3.2-7.3 5.1-11.7 5.1z");
const FaBaby = createIcon("M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm96.7-193.3c-23.9 14.3-55.9 18.2-83.6 10.6-27.7-7.6-51.4-25.3-64.8-49.3-13.4-24-15.6-51.5-6.1-76.4 9.5-24.9 29.8-45.2 54.7-54.7 24.9-9.5 52.4-7.3 76.4 6.1s42.8 37.1 49.3 64.8c6.5 27.7 2.6 59.7-10.6 83.6zM256 243.2c-5.3 0-9.6-4.3-9.6-9.6c0-5.3 4.3-9.6 9.6-9.6s9.6 4.3 9.6 9.6c0 5.3-4.3 9.6-9.6 9.6zM201.6 288c-10.6 0-19.2-8.6-19.2-19.2s8.6-19.2 19.2-19.2s19.2 8.6 19.2 19.2s-8.6 19.2-19.2 19.2zm108.8 0c-10.6 0-19.2-8.6-19.2-19.2s8.6-19.2 19.2-19.2s19.2 8.6 19.2 19.2s-8.6 19.2-19.2 19.2z");
const FaStethoscope = createIcon("M128 320c0 53 43 96 96 96s96-43 96-96c0-15.1-3.7-29.4-10.2-42.5l-2.6-5.2c-1.7-3.4-2.2-7.3-1.4-11s3.7-6.8 7.2-8.3l15.1-6.5C337.8 239.2 344 229.4 344 219.2V96c0-53-43-96-96-96S152 43 152 96v123.2c0 10.2 6.2 19.9 16.5 24.5l15.1 6.5c3.5 1.5 6.1 4.8 7.2 8.3s.3 7.6-1.4 11l-2.6 5.2C131.7 290.6 128 304.9 128 320zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32zM32 304c-11.2 0-21.7 3.5-30.2 9.5s-14.2 14.6-15.6 24.4C-5.1 346-1.8 355.2 7 362.4l12.6 9.9c5.1 4 11.2 6.6 17.5 7.7l14.7 2.4c17.6 2.9 33.7 12.8 44.5 27.2l12.6 16.8c9.9 13.2 26.6 21.2 44 21.2s34.2-8.1 44-21.2l12.6-16.8c10.7-14.4 26.9-24.3 44.5-27.2l14.7-2.4c6.3-1 12.4-3.7 17.5-7.7l12.6-9.9c8.8-7.2 12.1-16.4 10.8-24.4s-7.1-18.4-15.6-24.4S395.2 304 384 304H32z");
const FaUserMd = createIcon("M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z", "0 0 448 512");
const FaXRay = createIcon("M384 0H192c-35.3 0-64 28.7-64 64V256H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V320c0-35.3-28.7-64-64-64H448V64c0-35.3-28.7-64-64-64zM256 256V64h64V256h64V64h64V256h64v64H64V256h64v64h64V256h64zM128 384h32v96H128V384zm96-32a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm64 64H256v64h32V416zm32-64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm64 64h-32v96h32V416zm64-64a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm-32 32v64h32V416H416z", "0 0 576 512");
const FaEarListen = createIcon("M320 64c0-29.6-21.5-54.8-50-61.2C262.9-1.2 256 2.3 256 9.4V216c0 13.3-10.7 24-24 24s-24-10.7-24-24V9.4c0-7.1-6.9-10.6-14-6.2C189.5 9.2 168 34.4 168 64c0 35.3 28.7 64 64 64s64-28.7 64-64zM192 128c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32zm72 48H224c-22.1 0-40-17.9-40-40c0-13.6 6.8-26.2 17.6-33.4c6-4 13.8-6.6 22.4-6.6s16.4 2.6 22.4 6.6C256.4 61.8 262.8 74.4 262.8 88c0 22.1-17.9 40-40 40zm-40 32c-35.3 0-64-28.7-64-64c0-21.4 10.5-40.4 26.8-52c10-7.1 22.1-11.2 35.2-11.2s25.2 4.1 35.2 11.2c16.3 11.6 26.8 30.6 26.8 52c0 35.3-28.7 64-64 64zM448 240c-35.3 0-64 28.7-64 64v80c-35.3 0-64 28.7-64 64s28.7 64 64 64h48c35.3 0 64-28.7 64-64V304c0-35.3-28.7-64-64-64zm-16 192c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z");
const FiArrowRight = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    stroke="currentColor" 
    fill="none" 
    strokeWidth="2" 
    viewBox="0 0 24 24" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    height="1em" 
    width="1em" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

// Animation variants
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeInOut" },
  }),
};

// Services data
interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  href: string;
}

const servicesData: ServiceItem[] = [
  { 
    icon: <FaHeartbeat className="w-8 h-8 text-red-500" />, 
    title: 'Cardiology', 
    description: 'Expert care for heart conditions, from diagnosis to advanced treatment.', 
    image: 'https://placehold.co/600x400/e9d5ff/6d28d9?text=Cardiology', 
    href: '/contact' 
  },
  { 
    icon: <FaBrain className="w-8 h-8 text-sky-500" />, 
    title: 'Neurology', 
    description: 'Specialized treatment for disorders of the nervous system.', 
    image: 'https://placehold.co/600x400/dbeafe/1e40af?text=Neurology', 
    href: '/contact' 
  },
  { 
    icon: <FaBone className="w-8 h-8 text-slate-500" />, 
    title: 'Orthopedics', 
    description: 'Comprehensive care for bone, joint, and musculoskeletal issues.', 
    image: 'https://placehold.co/600x400/e2e8f0/334155?text=Orthopedics', 
    href: '/contact' 
  },
  { 
    icon: <FaBaby className="w-8 h-8 text-pink-500" />, 
    title: 'Gynecology', 
    description: 'Dedicated to women\'s health, maternity, and reproductive wellness.', 
    image: 'https://placehold.co/600x400/fce7f3/831843?text=Gynecology', 
    href: '/contact' 
  },
  { 
    icon: <FaStethoscope className="w-8 h-8 text-green-500" />, 
    title: 'General Surgery', 
    description: 'Advanced surgical procedures performed by our experienced team.', 
    image: 'https://placehold.co/600x400/dcfce7/15803d?text=Surgery', 
    href: '/contact' 
  },
  { 
    icon: <FaUserMd className="w-8 h-8 text-indigo-500" />, 
    title: 'Pediatrics', 
    description: 'Compassionate medical care for infants, children, and adolescents.', 
    image: 'https://placehold.co/600x400/e0e7ff/3730a3?text=Pediatrics', 
    href: '/contact' 
  },
  { 
    icon: <FaXRay className="w-8 h-8 text-teal-500" />, 
    title: 'Radiology', 
    description: 'High-quality imaging services for accurate and timely diagnosis.', 
    image: 'https://placehold.co/600x400/ccfbf1/0d9488?text=Radiology', 
    href: '/contact' 
  },
  { 
    icon: <FaEarListen className="w-8 h-8 text-amber-500" />, 
    title: 'ENT Services', 
    description: 'Specialized care for ear, nose, and throat conditions.', 
    image: 'https://placehold.co/600x400/fef3c7/b45309?text=ENT', 
    href: '/contact' 
  },
];

// Reusable components
interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    custom={index}
    whileHover={{ y: -8, scale: 1.03, boxShadow: "0 10px 20px rgba(0,0,0,0.08)" }}
    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
  >
    <Link href={service.href} className="block group h-full">
      <div className="bg-white rounded-2xl shadow-sm h-full flex flex-col overflow-hidden border border-gray-100">
        <div className="relative h-48 w-full overflow-hidden">
          <img 
            src={service.image} 
            alt={`${service.title} service`} 
            className="absolute h-full w-full left-0 top-0 right-0 bottom-0 object-cover transition-transform duration-500 group-hover:scale-105" 
          />
        </div>
        <div className="p-6 flex-grow flex flex-col">
          <div className="flex items-center gap-4 mb-3">
            <div className="bg-purple-50 p-3 rounded-full">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-800">{service.title}</h3>
          </div>
          <p className="text-gray-600 text-sm mb-4 flex-grow">{service.description}</p>
          <div className="mt-auto text-purple-600 font-semibold flex items-center gap-2 text-sm">
            Read More <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  </motion.div>
);

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
}

const SectionContainer: React.FC<SectionContainerProps> = ({ children, className = "" }) => (
  <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

const HeroSection: React.FC = () => (
  <motion.section 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="relative bg-gradient-to-r from-purple-50 via-fuchsia-50 to-blue-50 pt-28 pb-16 text-center"
  >
    <SectionContainer>
      <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
        <p className="text-sm font-medium text-purple-600">
          <Link href="/" className="hover:underline">Home</Link> / Services
        </p>
        <h1 className="mt-2 text-4xl md:text-6xl font-extrabold text-slate-800 tracking-tight">Our Services</h1>
      </motion.div>
    </SectionContainer>
  </motion.section>
);

const ServicesGridSection: React.FC = () => (
  <section className="py-16 md:py-24">
    <SectionContainer>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {servicesData.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </div>
    </SectionContainer>
  </section>
);

const CTASection: React.FC = () => (
  <section className="py-16 md:py-24">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative bg-gradient-to-tr from-purple-600 to-indigo-700 rounded-3xl p-8 md:p-12 overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Start Your Journey to Better Health Now</h2>
            <p className="mt-4 text-purple-200 max-w-lg">Contact us today to schedule your appointment and embark on your journey to better health.</p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <a href="tel:+919035193777" className="font-semibold text-white px-6 py-3 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300">
                Call: +91 90351 93777
              </a>
            </div>
          </div>
          <div className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
            <img 
              src="https://placehold.co/300x300/ffffff/6d28d9?text=Doctor" 
              alt="Friendly Doctor" 
              className="absolute h-full w-full left-0 top-0 right-0 bottom-0 object-contain" 
            />
          </div>
        </div>
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-1/4 -translate-y-1/4 opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/10 rounded-full translate-x-1/4 translate-y-1/4 opacity-50"></div>
      </div>
    </div>
  </section>
);

const Page: React.FC = () => {
  return (
    <div className="bg-gray-50">
      <HeroSection />
      <ServicesGridSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Page;