'use client';

/* eslint-disable @next/next/no-img-element */
import Script from "next/script";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import Footer from '../component/FooterSection';
import { FiArrowRight } from 'react-icons/fi';

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
const FaBrain = createIcon("M528 288c0 113.3-82.3 208-184.5 220.5c-4.6 2-8.5-1.6-8.5-6.2V432c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16v72.3c0 4.6-3.9 8.2-8.5 6.2C130.3 496 48 401.3 48 288c0-93.5 56.5-174.3 136-209.1V96c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16V16.6c0 4.6 3.9-8.2 8.5-6.2C290.3-1.5 352 21.6 352 64c0 30.9-17.6 58.4-43.8 71.5c2 4.2 3.8 8.4 3.8 12.5c0 8.8-7.2 16-16 16h-16c-8.8 0-16-7.2-16-16c0-29.3-16.7-56.4-41.5-69.8A176.1 176.1 0 0 0 224 64c0-38.6 25.1-71.8 60.1-81.1c4.5-1.2 7.9 4.3 5.4 8.2L288 0l-1.3 2.1c-28.3 47.2-44.7 94.6-44.7 141.9c0 47.3 16.3 94.7 44.7 141.9l1.3 2.1L288 288l.1 2.5c2.5 3.9-1 9.4-5.4 8.2C249.1 287.8 224 254.6 224 216c0-38.6 25.1-71.8 60.1-81.1c4.5-1.2 7.9 4.3 5.4 8.2L288 144l-1.3 2.1c-28.3 47.2-44.7 94.6-44.7 141.9c0 47.3 16.3 94.7 44.7 141.9l1.3 2.1L288 432l.1 2.5c2.5 3.9-1 9.4-5.4 8.2C249.1 431.8 224 398.6 224 360c0-38.6 25.1-71.8 60.1-81.1c4.5-1.2 7.9 4.3 5.4 8.2L288 288l-1.3 2.1c-28.3 47.2-44.7 94.6-44.7 141.9c0 47.3 16.3 94.7 44.7 141.9l1.3 2.1L288 512l.1-2.5c2.5-3.9-1 9.4-5.4 8.2c-35-9.3-60.1-42.5-60.1-81.1c0-38.6 25.1-71.8 60.1-81.1c4.5-1.2 7.9 4.3 5.4 8.2L288 384l-1.3 2.1c-28.3 47.2-44.7 94.6-44.7 141.9c0 4.2 1.8 8.4 3.8 12.5c-26.2 13.1-43.8 40.6-43.8 71.5c0 42.4 33.7 77.5 76.5 81.3c4.6.4 8.5-3.2 8.5-7.8V448c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v64.5c0 4.6 3.9 8.2 8.5 7.8c42.8-3.8 76.5-38.9 76.5-81.3z", "0 0 576 512");

// remaining icons unchanged ...

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

const FaBone = createIcon(
  "M493.3 267.3l-74.7-74.7c-6.2-6.2-16.4-6.2-22.6 0l-45.3 45.3-56.6-56.6 45.3-45.3c6.2-6.2 6.2-16.4 0-22.6l-74.7-74.7c-6.2-6.2-16.4-6.2-22.6 0l-224 224c-6.2 6.2-6.2 16.4 0 22.6l74.7 74.7c6.2 6.2 16.4 6.2 22.6 0l45.3-45.3 56.6 56.6-45.3 45.3c-6.2 6.2-6.2 16.4 0 22.6l74.7 74.7c6.2 6.2 16.4 6.2 22.6 0l224-224c6.2-6.2 6.2-16.4 0-22.6z"
);

const FaBaby = createIcon(
  "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8z"
);


const servicesData: ServiceItem[] = [
  {
    icon: <FaHeartbeat className="w-8 h-8 text-red-500" />,
    title: 'Cardiology',
    description:
      'Expert care for heart conditions, from diagnosis to advanced treatment.',
    image:
      'https://placehold.co/600x400/e9d5ff/6d28d9?text=Cardiology',
    href: '/contact',
  },

  {
    icon: <FaBrain className="w-8 h-8 text-blue-500" />,
    title: 'Neurology',
    description:
      'Comprehensive neurological care for brain and nervous system disorders.',
    image:
      'https://placehold.co/600x400/dbeafe/2563eb?text=Neurology',
    href: '/contact',
  },

  {
    icon: <FaBone className="w-8 h-8 text-yellow-500" />,
    title: 'Orthopedics',
    description:
      'Advanced orthopedic treatments for bones, joints, and muscles.',
    image:
      'https://placehold.co/600x400/fef3c7/d97706?text=Orthopedics',
    href: '/contact',
  },

  {
    icon: <FaBaby className="w-8 h-8 text-pink-500" />,
    title: 'Pediatrics',
    description:
      'Dedicated healthcare services for infants, children, and adolescents.',
    image:
      'https://placehold.co/600x400/fce7f3/db2777?text=Pediatrics',
    href: '/contact',
  },

  {
    icon: <FaHeartbeat className="w-8 h-8 text-green-500" />,
    title: 'Gynecology',
    description:
      'Comprehensive women’s healthcare and maternity services.',
    image:
      'https://placehold.co/600x400/d1fae5/059669?text=Gynecology',
    href: '/contact',
  },

  {
    icon: <FaBrain className="w-8 h-8 text-indigo-500" />,
    title: 'Radiology',
    description:
      'Advanced diagnostic imaging and radiology services.',
    image:
      'https://placehold.co/600x400/e0e7ff/4338ca?text=Radiology',
    href: '/contact',
  },

  {
    icon: <FaBone className="w-8 h-8 text-orange-500" />,
    title: 'ENT',
    description:
      'Specialized treatment for ear, nose, and throat conditions.',
    image:
      'https://placehold.co/600x400/ffedd5/ea580c?text=ENT',
    href: '/contact',
  },

  {
    icon: <FaHeartbeat className="w-8 h-8 text-rose-500" />,
    title: 'Emergency Care',
    description:
      '24/7 emergency healthcare services with rapid response.',
    image:
      'https://placehold.co/600x400/ffe4e6/e11d48?text=Emergency',
    href: '/contact',
  },

  {
    icon: <FaBrain className="w-8 h-8 text-cyan-500" />,
    title: 'General Surgery',
    description:
      'Safe and advanced surgical procedures with expert surgeons.',
    image:
      'https://placehold.co/600x400/cffafe/0891b2?text=Surgery',
    href: '/contact',
  },
];


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
            alt={`${service.title} services at CurePlus Hospitals`}
            className="absolute h-full w-full left-0 top-0 right-0 bottom-0 object-cover transition-transform duration-500 group-hover:scale-105" 
          />
        </div>

        <div className="p-6 flex-grow flex flex-col">
          <div className="flex items-center gap-4 mb-3">
            <div className="bg-purple-50 p-3 rounded-full">
              {service.icon}
            </div>

            <h3 className="text-xl font-bold text-slate-800">
              {service.title}
            </h3>
          </div>

          <p className="text-gray-600 text-sm mb-4 flex-grow">
            {service.description}
          </p>

          <div className="mt-auto text-purple-600 font-semibold flex items-center gap-2 text-sm">
            Read More <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  </motion.div>
);

const SectionContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {children}
  </div>
);

const ServicesGridSection: React.FC = () => (
  <section className="py-20">
    <SectionContainer>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={service.title}
            service={service}
            index={index}
          />
        ))}
      </div>
    </SectionContainer>
  </section>
);

const CTASection: React.FC = () => (
  <section className="py-20 bg-purple-600">
    <SectionContainer>
      <div className="text-center text-white">
        <h2 className="text-4xl font-bold mb-4">
          Need Expert Medical Care?
        </h2>

        <p className="text-lg mb-8">
          Connect with our healthcare specialists today.
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-700 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Contact Us
        </Link>
      </div>
    </SectionContainer>
  </section>
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

        <h1 className="mt-2 text-4xl md:text-6xl font-extrabold text-slate-800 tracking-tight">
          Best Multispeciality Hospital Services
        </h1>
      </motion.div>
    </SectionContainer>
  </motion.section>
);

const Page: React.FC = () => {
  return (
    <>
      <Script
        id="medical-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "CurePlus Hospitals",
            "url": "https://www.cureplushospitals.com/services",
            "logo": "https://www.cureplushospitals.com/logo.png",
            "description":
              "CurePlus Hospitals offers multispeciality healthcare services including cardiology, orthopedics, gynecology, pediatrics, radiology, ENT, and emergency care across Karnataka.",
            "medicalSpecialty": [
              "Cardiology",
              "Neurology",
              "Orthopedics",
              "Gynecology",
              "General Surgery",
              "Pediatrics",
              "Radiology",
              "ENT"
            ],
            "telephone": "+91 90351 93777",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Mysore",
              "addressRegion": "Karnataka",
              "addressCountry": "India"
            },
            "areaServed": "Karnataka",
            "sameAs": [
              "https://www.instagram.com/",
              "https://www.facebook.com/"
            ]
          }),
        }}
      />

      <div className="bg-gray-50">
        <HeroSection />
        <ServicesGridSection />
        <CTASection />
        <Footer />
      </div>
    </>
  );
};

export default Page;