import { SITE_URL } from '../data/site';
import JsonLd from '../component/JsonLd';
import PageHero from '../component/PageHero';
import TeamGrid, { type TeamMember } from '../component/TeamGrid';

const teamMembers: TeamMember[] = [
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
    role: 'Senior Manager – Purchase & Procurement',
    bio: 'Oversees purchase and procurement across the organisation and supports the Pharma business.',
    image: '/managment/Manjunath P-Photoroom.png',
    description:
      "Manjunath P is responsible for overseeing purchase and procurement activities across the organisation, coordinating the sourcing and timely availability of varied requirements. Working closely with Sr. Operations Manager – Srinivas, he supports efficient procurement processes, vendor coordination, cost management, and timely fulfilment of organisational needs. In addition to his procurement responsibilities, Manjunath is also involved in managing and supporting the company's Pharma business, contributing to its day-to-day operations, coordination, and business requirements.",
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

const teamJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalOrganization',
  name: 'CurePlus Hospitals',
  url: `${SITE_URL}/team`,
  description:
    'Meet the leadership and healthcare professionals of CurePlus Hospitals delivering quality healthcare services across Karnataka.',
  employee: teamMembers.map((m) => ({ '@type': 'Person', name: m.name, jobTitle: m.role })),
};

const TeamPage = () => (
  <>
    <JsonLd data={teamJsonLd} />
    <PageHero
      eyebrow="Our people"
      title="Meet Our Team"
      lead="Meet the expert leadership and healthcare professionals driving quality patient care at CurePlus Hospitals across Karnataka."
      crumbs={[{ name: 'Team' }]}
    />

    <section className="section" aria-label="Leadership team">
      <div className="container-page">
        <TeamGrid members={teamMembers} />
      </div>
    </section>
  </>
);

export default TeamPage;
