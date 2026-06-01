'use client';

import Script from "next/script";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Footer from '../component/FooterSection';

const teamMembers = [
  {
    name: 'Dr. Arjun',
    role: 'Founder & Chairman',
    bio: 'Visionary leader with a passion for healthcare and community service.',
    image: '/managment/DR ARJUN-Photoroom.png',
    description:
      'Dr. Arjun is a visionary leader with a passion for healthcare and community service. He has dedicated his career to improving healthcare access and quality for underserved populations. With a background in medicine and public health, Dr. Arjun brings a unique perspective to the management team, ensuring that patient care remains at the forefront of all initiatives.',
  },
  {
    name: 'Dr. Sini',
    role: 'Managing Director',
    bio: 'Expert in healthcare management and patient care, ensuring quality services.',
    image: '/managment/sinimam.jpg',
    description:
      'Dr. Sini is an expert in healthcare management and patient care, ensuring quality services across all facilities. With years of experience in clinical practice and administration, she is committed to maintaining high standards of care and implementing best practices in healthcare delivery. Dr. Sini is also a strong advocate for patient rights and community health initiatives.',
  },
  {
    name: 'Capt. Raghu Das',
    role: 'Chief Operating Officer',
    bio: 'Strategic planner with a focus on operational excellence and efficiency.',
    image: '/managment/captain.png',
    description:
      'Capt. Raghu is a strategic planner with a focus on operational excellence and efficiency. His military background has instilled in him a strong sense of discipline and leadership, which he applies to managing the day-to-day operations of the organization. Capt. Raghu is dedicated to optimizing processes and ensuring that all teams work cohesively towards common goals.',
  },
  {
    name: 'Abhinandan S Rao',
    role: 'VP - New Initiatives & Investments',
    bio: 'Innovative thinker driving new projects and investments for growth.',
    image: '/managment/Abhinandan S-Photoroom.png',
    description:
      'Abhinandan is an innovative thinker driving new projects and investments for growth. With a keen eye for market trends and opportunities, he is responsible for identifying and developing new initiatives that align with the organization’s mission. Abhinandan’s strategic approach to investments ensures that resources are allocated effectively to maximize impact.',
  },
  {
    name: 'Keshav Murthy C.',
    role: 'VP - Internal Audit & Finance',
    bio: 'Financial strategist ensuring fiscal responsibility and transparency.',
    image: '/managment/Keshav murthy.png',
    description:
      'Keshavmurthy is a financial strategist ensuring fiscal responsibility and transparency. He oversees the organization’s financial operations, including budgeting, auditing, and compliance. With a strong background in finance and accounting, Keshavmurthy is committed to maintaining the highest standards of financial integrity and accountability.',
  },
  {
    name: 'Diwakar M. N.',
    role: 'Senior Operations Manager',
    bio: 'Experienced manager overseeing daily operations and team performance.',
    image: '/managment/Divakar SIR-Photoroom.png',
    description:
      'Diwakar is an experienced manager overseeing daily operations and team performance. He is responsible for ensuring that all departments work efficiently and effectively to meet organizational goals. Diwakar’s leadership style emphasizes collaboration and communication, fostering a positive work environment for all staff members.',
  },
  {
    name: 'Srinivas C.',
    role: 'Senior Operations Manager',
    bio: 'Dedicated manager focused on operational efficiency and patient satisfaction.',
    image: '/managment/SRINIVAC C-Photoroom.png',
    description:
      'Srinivas is a dedicated manager focused on operational efficiency and patient satisfaction. He works closely with clinical and administrative teams to streamline processes and enhance the patient experience. Srinivas is passionate about continuous improvement and regularly seeks feedback from staff and patients to identify areas for enhancement.',
  },
  {
    name: 'Manjunath P.',
    role: 'Senior Operations Manager',
    bio: 'Expert in healthcare operations with a commitment to quality service.',
    image: '/managment/Manjunath P-Photoroom.png',
    description:
      'Manjunath is an expert in healthcare operations with a commitment to quality service. He has extensive experience in managing healthcare facilities and ensuring compliance with regulatory standards. Manjunath is dedicated to fostering a culture of excellence within the organization and is always looking for ways to enhance service delivery.',
  },
  {
    name: 'Sandeep',
    role: 'Administrative Manager',
    bio: 'Efficient administrator ensuring smooth operations and support services.',
    image: '/managment/Sandeep.jpeg',
    description:
      'Sandeep is an efficient administrator ensuring smooth operations and support services. He plays a crucial role in coordinating various administrative functions, including human resources, facilities management, and procurement. Sandeep’s attention to detail and organizational skills contribute significantly to the overall efficiency of the organization.',
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },

  visible: { opacity: 1, y: 0 },
};

const TeamPage = () => {
  return (
    <>
      {/* Schema */}
      <Script
        id="medical-organization-team-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'MedicalOrganization',
            name: 'CurePlus Hospitals',
            url: 'https://www.cureplushospitals.com/team',
            description:
              'Meet the leadership and healthcare professionals of CurePlus Hospitals delivering quality healthcare services across Karnataka.',
            employee: [
              {
                '@type': 'Person',
                name: 'Dr. Arjun',
                jobTitle: 'Founder & Chairman',
              },
              {
                '@type': 'Person',
                name: 'Dr. Sini',
                jobTitle: 'Managing Director',
              },
              {
                '@type': 'Person',
                name: 'Capt. Raghu Das',
                jobTitle: 'Chief Operating Officer',
              },
            ],
          }),
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-20 text-gray-800">
        {/* Hero Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
            Meet <span className="text-purple-600">Our Team</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet the expert leadership and healthcare professionals driving
            quality patient care at CurePlus Hospitals across Karnataka.
          </p>
        </motion.div>

        {/* Team Members */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              className="relative bg-white rounded-xl shadow-md overflow-hidden group transition duration-300 ease-in-out hover:shadow-xl h-[380px] border border-gray-200"
            >
              {/* Default View */}
              <motion.div
                initial={{ opacity: 1 }}
                whileHover={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex flex-col items-center justify-center p-6 z-10"
              >
                <div className="relative h-32 w-32 mb-4">
                  <Image
                    src={member.image}
                    alt={`${member.name} - CurePlus Hospitals Leadership Team`}
                    fill
                    sizes="128px"
                    className="rounded-full border-4 border-white shadow-md object-fill"
                  />
                </div>

                <h2 className="text-xl font-bold text-purple-600 mb-1">
                  {member.name}
                </h2>

                <p className="text-purple-600 font-bold mb-2">
                  {member.role}
                </p>

                <p className="text-sm text-gray-700 text-center">
                  {member.bio}
                </p>
              </motion.div>

              {/* Hover View */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="absolute inset-0 flex flex-col items-center justify-center bg-white p-6 text-center z-20"
              >
                <div className="relative h-20 w-20 mb-4">
                  <Image
                    src={member.image}
                    alt={`${member.name} - CurePlus Hospitals Leadership Team`}
                    fill
                    sizes="80px"
                    className="rounded-full border-4 border-white shadow-md object-fill"
                  />
                </div>

                <p className="text-sm text-gray-700 leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Footer />
    </>
  );
};

export default TeamPage;