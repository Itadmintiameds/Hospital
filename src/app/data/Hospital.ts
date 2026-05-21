// /app/data/hospital.ts

export interface Hospital {
  id: number;
  name: string;
  location: string;
  icon: string;
  description: string;
  imageUrl: string;
  gallery: string[];
  services: { label: string; icon: string }[];
  facilities: { label: string; icon: string }[];
  infrastructure: string;
  contact: {
    address: string;
    phone: string;
    email?: string;
    mapIcon: string;
    phoneIcon: string;
    googleMapUrl?: string;
    embedMapUrl?: string;
  };
  specialists?: string;
  beds?: string;
  departments?: string[];
  seo?: {
    title: string;
    description: string;
    keywords: string[];
    h1: string;
    h2?: string;
    altTexts: string[];
    canonical: string;
  };
  jsonLd?: object; // Changed to object for Next.js 13+ metadata
}

export const hospitals: Hospital[] = [
  // 1. CurePlus Disha Hospital
  {
    id: 1,
    name: 'CurePlus Disha Hospital',
    location: 'Mysuru',
    icon: 'FaHospitalAlt',
    description: `Established in 2014, CurePlus Disha Hospital has marked its place as one of Mysore’s most well known healthcare institutions. As a NABH; accredited multispecialty hospital, it delivers high-quality medical care that's known for both affordability and accessibility. Combining both clinical expertise with a strong patient first approach. With 40 beds, two fully equipped operation theatres, and over 80 surgeries performed every month, CurePlus Disha Hospital has become a trusted medical choice for all the patients across Mysore. Its OPD manages more than 70 patients daily, reflecting the hospital’s growing reputation in neighborhoods. CurePlus Disha Hospital offers services like maternity care, gynecology, orthopedics, emergency care, dermatology, and bone health and many more, operating as a full service 24/7 best hospital. From daily routine checkups to advanced care, CurePlus Disha Hospital is the go to choice for patients across key areas like N R Moholla, Gandhinagar, Nazarbad, Shivaji Road, Rajendra Nagar, R S Naidu Nagar, Udaygiri, Sathyanagara, Bannimantap, and Nagunhalli Road.`,
    imageUrl: '/cureplus/cureplus.png',
    gallery: [ '/cureplus/cureplus1.png', '/cureplus/cureplus2.png', '/cureplus/cureplus3.png', '/cureplus/cureplus4.png' ],
    services: [ { label: 'General Surgery', icon: 'FaUserMd' }, { label: 'Orthopedics', icon: 'FaUserMd' }, { label: 'Gynecology', icon: 'FaUserMd' }, { label: 'Pediatrics', icon: 'FaUserMd' }, { label: 'Urology', icon: 'FaUserMd' }, { label: 'ENT', icon: 'FaUserMd' }, { label: 'General Medicine', icon: 'FaUserMd' }, { label: 'Dermatology', icon: 'FaUserMd' }, { label: 'Neurology', icon: 'FaUserMd' }, { label: 'Pathology', icon: 'FaUserMd' }, { label: 'Physiotherapy', icon: 'FaUserMd' }, { label: 'Emergency Medicine', icon: 'FaUserMd' } ],
    facilities: [ { label: '40+ Beds', icon: 'FaBed' }, { label: '2 Operation Theatres', icon: 'FaXRay' }, { label: 'Medico-Social Welfare Desk', icon: 'FaHospitalAlt' }, { label: 'UCG Scanning', icon: 'FaXRay' }, { label: 'Physiotherapy', icon: 'FaXRay' }, { label: '24/7 Ambulance Service', icon: 'FaHospitalAlt' }, { label: '24/7 Pharmacy Services', icon: 'FaHospitalAlt' }, { label: 'Expert Care by Qualified Medical Practitioners', icon: 'FaHospitalAlt' }, { label: 'OPD & IPD Services', icon: 'FaXRay' }, { label: 'X-Ray and USG Scanning', icon: 'FaXRay' }, { label: 'Pathology Lab', icon: 'FaXRay' } ],
    infrastructure: 'Equipped with cutting-edge medical equipment and a modern facility to support high-volume surgeries and patient care.',
    contact: { address: '4th Cross Rd, Gandhi Nagar, N R Mohalla, Mysuru, Karnataka 570007', phone: '0821-2454798', mapIcon: 'FaMapMarkerAlt', phoneIcon: 'FaPhoneAlt', googleMapUrl: 'https://maps.app.goo.gl/dy7C5qmGBcSH9ZFc7?g_st=iw', embedMapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.0703604877826!2d76.66271789275443!3d12.321056510411317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf70682842cf77%3A0x4782cda918bb7056!2sDISHA%20Hospital!5e0!3m2!1sen!2sin!4v1756897229616!5m2!1sen!2sin' },
    seo: {
      title: "Best 24/7 Hospital in Mysore | CurePlus Disha",
      description: "CurePlus Disha is the best multispeciality hospital in Mysore, offering expert maternity care, gynecology, orthopedics, skin treatments & 24x7 emergency services. Visit the top hospital near you in Mysore.",
      h1: "CurePlus Disha Hospital",
      h2: "Best Multispeciality Hospital in Mysore",
      keywords: [ "Best Multispeciality Hospital in Mysore", "Hospital near me in N R Moholla", "Gandhinagar", "Maternity hospital near N R Moholla and Nazarbad", "Gynecologist near me in Shivaji Road and Rajendra Nagar", "Orthopedic hospital in R S Naidu Nagar and Udaygiri", "Emergency care near Mandi Moholla and Sathyanagara", "Best skin doctor in Nazarbad and Bannimantap", "Bone specialist in Mysore near Nagunhalli Road and Rajendra Nagar", "best 24/7 hospital near Mandi Moholla and R S Naidu Nagar", "24/7 hospital in Shivaji Road and Gandhinagar", "Pregnancy care clinic near Udaygiri and Nazarbad" ],
      altTexts: [ "Cureplus Hospital modern X-ray Facilities in Mysore", "Best Multispeciality Hospital in Mysore with Reception Desk", "Cureplus Hospital Patient Consultation and Care centre in Mysore", "Best Multispeciality Hospital in Mysore with Modern Operation Theatre" ],
      canonical: "https://cureplushospitals.com/our-hospitals/cureplus-disha"
    },
    jsonLd: { "@context": "https://schema.org", "@type": "LocalBusiness", "name": "CurePlus Disha Hospital", "image": "https://cureplushospitals.com/cureplus/cureplus.png", "url": "https://cureplushospitals.com/our-hospitals/cureplus-disha", "telephone": "0821-2454798", "address": { "@type": "PostalAddress", "streetAddress": "4th Cross Rd, Gandhi Nagar, N R Mohalla, Mysuru, Karnataka", "addressLocality": "Mysore", "postalCode": "570007", "addressCountry": "IN" }, "geo": { "@type": "GeoCoordinates", "latitude": 12.3232669, "longitude": 76.6639977 }, "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ], "opens": "00:00", "closes": "23:59" }, "sameAs": [ "https://www.facebook.com/cureplushospitals", "https://www.instagram.com/cureplus_hospitals", "https://www.youtube.com/@CurePlusHospitals", "https://cureplushospitals.com/" ] }
  },
  // 2. CurePlus Dharani Hospital
  {
    id: 2,
    name: 'CurePlus Dharani Hospital',
    location: 'Santhemarahalli, Chamarajanagara',
    icon: 'FaHospitalAlt',
    description: `Established in 2017, CurePlus Dharani Hospital in Santhemarahalli, Yelandur Taluk, Chamarajanagar District, was started with a simple goal to provide quality, accessible and affordable healthcare to people in the area. Today, it has become a trusted name in the rural healthcare side, as known for its commitment to serving the community with care and compassion. The CurePlus Dharani hospital is known for their services in the fields like gynecology, maternity care, orthopedics, bone and joint care, pregnancy care, and emergency services. As a 24/7 multispecialty hospital, CurePlus Dharani Hospital is always ready for all situations. It happily serves and takes care of patients from Kollegal, Santhemarahalli, and Chamarajanagar, and continues to bring affordable healthcare for the people.`,
    imageUrl: '/dharni/dharni.png',
    gallery: [ '/dharni/dharni1.png', '/dharni/dharni2.png', '/dharni/dharni3.png', '/dharni/dharni4.png' ],
    services: [ { label: 'General Medicine', icon: 'FaUserMd' }, { label: 'Emergency Care', icon: 'FaUserMd' }, { label: 'Gynecology', icon: 'FaUserMd' }, { label: 'Pediatrics', icon: 'FaUserMd' } ],
    facilities: [ { label: '16+ Beds', icon: 'FaBed' }, { label: 'Multi-Specialty Care', icon: 'FaHospitalAlt' }, { label: 'Medico-Social Welfare Desk', icon: 'FaHospitalAlt' }, { label: '24/7 Ambulance Service', icon: 'FaHospitalAlt' }, { label: '24/7 Pharmacy Services', icon: 'FaHospitalAlt' }, { label: 'OPD & IPD Services', icon: 'FaXRay' }, { label: 'X-Ray', icon: 'FaXRay' }, { label: 'Pathology Lab', icon: 'FaXRay' } ],
    infrastructure: 'Equipped with essential diagnostic and treatment facilities to deliver efficient and modern care in a rural setting.',
    contact: { address: 'Main Road, Santhamarahalli, Chamarajnagar, Karnataka - 571115', phone: '08226-297298', mapIcon: 'FaMapMarkerAlt', phoneIcon: 'FaPhoneAlt', googleMapUrl: '', embedMapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.995274668126!2d76.97535587782845!3d12.043845757748437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf3c9c0ade12b9%3A0x1c4e0f3bde9f25f7!2sCurePlus%20Dharani%20Hospital%20%7C%20Santhemarahalli!5e0!3m2!1sen!2sin!4v1756897850538!5m2!1sen!2sin' },
    seo: {
      title: '24x7 Best Hospital in Santhemarahalli | CurePlus Dharani',
      description: 'Looking for a hospital near Santhemarahalli? CurePlus Dharani offers round-the-clock care with gynecologists, orthopedic specialists, maternity care & bone and joint treatment under one roof.',
      h1: 'CurePlus Dharani Hospital',
      h2:'24x7 Best Hospital in Santhemarahalli Near Me',
      keywords: [ "24x7 Hospital in Santhemarahalli Near Me", "Hospital near me Santhemarahalli", "Gynecologist in Santhemarahalli", "Maternity hospital near me Santhemarahalli", "Orthopedic specialist Santhemarahalli", "Bone and joint care Santhemarahalli", "Multispecialty hospital near Kollegal", "Best hospital near Chamarajanagar", "Pregnancy care Santhemarahalli", "Emergency care hospital near Santhemarahalli", "24/7 hospital near Kollegal" ],
      altTexts: [ "X ray and Diagnostic Imaging at CurePlus Dharani Hospital Santhemarahalli", "Pharmacy at CurePlus Dharani Hospital Santhemarahalli Chamarajanagara", "Best Hospital in Santhemarahalli Chamarajanagara CurePlus Dharani Consultation Cabin", "Best Multispeciality Hospital CurePlus Dharani Patient Ward Santhemarahalli Chamarajanagara" ],
      canonical: "https://cureplushospitals.com/our-hospitals/cureplus-dharani"
    },
    jsonLd: { "@context": "https://schema.org", "@type": "LocalBusiness", "name": "CurePlus Dharani Hospital", "image": "https://cureplushospitals.com/dharni/dharni.png", "url": "https://cureplushospitals.com/our-hospitals/cureplus-dharani", "telephone": "08226-297298", "address": { "@type": "PostalAddress", "streetAddress": "Main Road, Santhamarahalli, Chamarajnagar, Karnataka", "addressLocality": "Santhemaralli", "postalCode": "571115", "addressCountry": "IN" }, "geo": { "@type": "GeoCoordinates", "latitude": 12.043889082280744, "longitude": 76.98036627486671 }, "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ], "opens": "00:00", "closes": "23:59" }, "sameAs": [ "https://www.facebook.com/cureplushospitals", "https://www.instagram.com/cureplus_hospitals", "https://www.youtube.com/@CurePlusHospitals", "https://cureplushospitals.com/" ] }
  },
  // 3. CurePlus Kaveri Hospital
  {
    id: 3,
    name: 'CurePlus Kaveri Hospital',
    location: 'Kushalnagar, Kodagu District',
    icon: 'FaHospitalAlt',
    description: `Established in 2018, CurePlus Kaveri Hospital in Kushalnagar began as a 20-bed facility under the Sudhanand Group and expanded in 2022 into a 40-bedded NABH-accredited multispecialty hospital. It offers advanced ICU care, a fully equipped operation theatre, hearing assessments, and private/semi-private wards to meet all the patients needs. As they are Known for their expert care in gynecology, orthopedics, joint care, and maternity, the hospital serves patients from Kushalnagar, Somwarpet, Madikeri, and Piriyapatna. With a skilled team of doctors and nurses and providing 24/7 services for the patients, CurePlus Kaveri Hospital continues to deliver compassionate, affordable, and accessible health care across the Kodagu District.`,
    imageUrl: '/kaveri/kaveri1.png',
    gallery: [ '/kaveri/kaveri2.png', '/kaveri/kaveri3.png', '/kaveri/kaveri4.png', '/kaveri/kaveri5.png' ],
    services: [ { label: 'General Surgery', icon: 'FaUserMd' }, { label: 'ENT & Audiometry', icon: 'FaUserMd' }, { label: 'Critical Care', icon: 'FaUserMd' }, { label: 'Inpatient Care', icon: 'FaUserMd' }, { label: 'Urology', icon: 'FaUserMd' }, { label: 'ENT', icon: 'FaUserMd' }, { label: 'General Medicine', icon: 'FaUserMd' }, { label: 'Dermatology', icon: 'FaUserMd' }, { label: 'Neurology', icon: 'FaUserMd' }, { label: 'Pathology', icon: 'FaUserMd' }, { label: 'Physiotherapy', icon: 'FaUserMd' }, { label: 'Emergency Medicine', icon: 'FaUserMd' } ],
    facilities: [ { label: '40+ Beds', icon: 'FaBed' }, { label: '2 Operation Theatres', icon: 'FaXRay' }, { label: 'Medico-Social Welfare Desk', icon: 'FaHospitalAlt' }, { label: 'UCG Scanning', icon: 'FaXRay' }, { label: 'Physiotherapy', icon: 'FaXRay' }, { label: '24/7 Ambulance Service', icon: 'FaHospitalAlt' }, { label: '24/7 Pharmacy Services', icon: 'FaHospitalAlt' }, { label: 'OPD & IPD Services', icon: 'FaXRay' }, { label: 'X-Ray and USG Scanning', icon: 'FaXRay' }, { label: 'Pathology Lab', icon: 'FaXRay' } ],
    infrastructure: 'Features modern operation theaters, advanced ICU, and private rooms to meet growing healthcare needs in Kodagu District.',
    contact: { address: 'Rasul Residential Enclave, Kushalnagar, Karnataka 571234', phone: '08276-298998', mapIcon: 'FaMapMarkerAlt', phoneIcon: 'FaPhoneAlt', googleMapUrl: '', embedMapUrl: 'https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3895.991324366117!2d75.9668993!3d12.4502985!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1756958466741!5m2!1sen!2sin' },
    seo: {
      title: 'Best 24/7 Hospital in Kushalnagar Near Me | CurePlus Kaveri',
      description: 'CurePlus Kaveri in Kushalnagar delivers advanced care in gynecology, orthopedics & maternity. Visit our Best 24/7 hospital near you for joint pain, bone care & emergency treatment.',
      h1: 'CurePlus Kaveri Hospital',
      h2: 'Hospital in Kushalnagar Near Me.',
      keywords: [ "Hospital in Kushalnagar Near Me", "Hospital near me Kushalnagar", "Best 24/7 hospital in Kushalnagar", "Gynecology hospital near me Kushalnagar", "Orthopedic doctor in Kushalnagar", "Joint pain treatment Kushalnagar", "Best hospital near Madikeri", "Orthopedic specialist Somwarpet", "Maternity care clinic Piriyapatna", "Bone and joint care near Kushalnagar", "Gynecologist in Madikeri" ],
      altTexts: [ "Best Multispeciality Hospital CurePlus Kaveri Kushalnagar with X ray", "Best Hospital in Kushalnagar CurePlus Kaveri Multispeciality with Pharmacy", "Best Hospital in Kushalnagar CurePlus Kaveri Multispeciality with Operation Theatre", "CurePlus Kaveri Hospital Kushalnagar Best Multispeciality Hospital with Patient Ward" ],
      canonical: "https://cureplushospitals.com/our-hospitals/cureplus-kaveri"
    },
    jsonLd: { "@context": "https://schema.org", "@type": "LocalBusiness", "name": "CurePlus Kaveri Hospital", "image": "https://cureplushospitals.com/kaveri/kaveri1.png", "url": "https://cureplushospitals.com/our-hospitals/cureplus-kaveri", "telephone": "08276 298998", "address": { "@type": "PostalAddress", "streetAddress": "Rasul Residential Enclave, Kushalnagar, Karnataka", "addressLocality": "Kushalnagar", "postalCode": "571234", "addressCountry": "IN" }, "geo": { "@type": "GeoCoordinates", "latitude": 12.450309339134671, "longitude": 75.96957916132989 }, "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ], "opens": "00:00", "closes": "23:59" }, "sameAs": [ "https://www.facebook.com/cureplushospitals", "https://www.instagram.com/cureplus_hospitals", "https://www.youtube.com/@CurePlusHospitals", "https://cureplushospitals.com/" ] }
  },
  // 4. CurePlus Krishna Hospital
  {
    id: 4,
    name: 'CurePlus Krishna Hospital',
    location: 'Bettadapura, Mysore District',
    icon: 'FaHospitalAlt',
    description: `Established during the COVID-19 pandemic era to provide healthcare, CurePlus Krishna Hospital in Bettadapura, Piriyapatna Taluk, was launched by the Sudhanand Group as a 20-bedded multispecialty hospital to serve the rural communities of Mysore District. With modern facilities and a team of skilled medical professionals, the hospital provides quality care across a wide range of services from emergencies to everyday health needs.. As the leading healthcare provider in Bettadapura and Piriyapatna Taluk, Trusted by more than 2.5 lakh population for their healthcare needs are affordable and accessible. The hospital serves patients from across Bettadapura, Kamplapura, Gorahalli, and Ravandur, delivering expert treatment with compassion and care kept in mind. With a dedicated team and a focus on affordability and quality healthcare, CurePlus Krishna Hospital continues to provide accessible, reliable, and patient centered healthcare to the people of rural Karnataka.`,
    imageUrl: '/krishna/krishna1.png',
    gallery: [ '/krishna/krishna2.png', '/krishna/krishna3.png', '/krishna/krishna4.png', '/krishna/krishna5.png' ],
    services: [ { label: 'Multi-Specialty Care', icon: 'FaUserMd' }, { label: 'Outpatient & Inpatient Services', icon: 'FaUserMd' }, { label: 'Preventive Health Checkups', icon: 'FaUserMd' }, { label: 'Emergency Services', icon: 'FaUserMd' } ],
    facilities: [ { label: '20 Beds', icon: 'FaBed' }, { label: 'Private Multi-Specialty Facility', icon: 'FaHospitalAlt' }, { label: 'Medico-Social Welfare Desk', icon: 'FaHospitalAlt' }, { label: '24/7 Ambulance Service', icon: 'FaHospitalAlt' }, { label: '24/7 Pharmacy Services', icon: 'FaHospitalAlt' }, { label: 'OPD & IPD Services', icon: 'FaXRay' }, { label: 'X-Ray', icon: 'FaXRay' }, { label: 'Pathology Lab', icon: 'FaXRay' } ],
    infrastructure: 'Built during the pandemic with a focus on accessibility and comprehensive medical care for rural populations.',
    contact: { address: 'KR Nagara Road, Opposite to Gram Panchayat Office, Bettadapura, Piriyapatna Taluk, Mysore District – 571102', phone: '08223-275798', mapIcon: 'FaMapMarkerAlt', phoneIcon: 'FaPhoneAlt', googleMapUrl: 'https://maps.app.goo.gl/KyNytoTPsxKLicfb7?g_st=iw', embedMapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3895.6248115954145!2d76.1006768748325!3d12.474688187796914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5757b6d08a007%3A0xd94197a0c3202fe3!2sCurePlus%20Krishna%20Hospital%20%7C%20Bettadapura!5e0!3m2!1sen!2sin!4v1756958942995!5m2!1sen!2sin' },
    seo: {
      title: 'Top Hospital in Bettadapura Near Me | CurePlus Krishna',
      description: 'CurePlus Krishna Bettadapura is the best hospital near you for maternity, orthopedic, and emergency care. Trusted for expert bone specialists and women’s health services near Periyapatna.',
      h1: 'CurePlus Krishna Hospital',
      h2: 'Top Hospital in Bettadapura Near Me.',
      keywords: [ "Top Hospital in Bettadapura Near Me", "Hospital near me Bettadapura", "Best hospital in Bettadapura", "Maternity hospital near Bettadapura", "Bone specialist in Bettadapura", "Orthopedic doctor near Periyapatna", "Best hospital in Hunsur", "24/7 hospital near Kushalnagar", "Joint pain treatment Bettadapura", "Gynecology clinic near Periyapatna", "Emergency care hospital near Hunsur" ],
      altTexts: [ "CurePlus krishna hospital Bettadapura Piriyapatna best multispeciality hospital with X ray services", "CurePlus krishna hospital Bettadapura best multispeciality hospital with pharmacy services", "Best multispeciality hospital with operation theatre", "CurePlus krishna hospital the best multispeciality hospital with patient ward" ],
      canonical: "https://cureplushospitals.com/our-hospitals/cureplus-krishna"
    },
    jsonLd: { "@context": "https://schema.org", "@type": "LocalBusiness", "name": "CurePlus Krishna Hospital", "image": "https://cureplushospitals.com/krishna/krishna1.png", "url": "https://cureplushospitals.com/our-hospitals/cureplus-krishna", "telephone": "08223-275798", "address": { "@type": "PostalAddress", "streetAddress": "KR Nagara Road, Opposite to Gram Panchayat Office, Bettadapura, Piriyapatna Taluk, Mysore District", "addressLocality": "Bettadapura", "postalCode": "571102", "addressCountry": "IN" }, "geo": { "@type": "GeoCoordinates", "latitude": 12.474740742086576, "longitude": 76.10342812192654 }, "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ], "opens": "00:00", "closes": "23:59" }, "sameAs": [ "https://www.facebook.com/cureplushospitals", "https://www.instagram.com/cureplus_hospitals", "https://www.youtube.com/@CurePlusHospitals", "https://cureplushospitals.com/" ] }
  },
  // 5. CurePlus Narasegowda Memorial Hospital
  {
    id: 5,
    name: 'CurePlus Narasegowda Memorial Hospital',
    location: 'Chinakurali, Mandya District',
    icon: 'FaHospitalAlt',
    description: `Established in 2023, CurePlus Narasegowda Memorial Hospital in Chinakurali, Pandavapura Taluk, was launched by Sudhanand Health Care Solutions in memory of Mr. Narasegowda. This 20-bedded multispecialty hospital brings affordability, quality healthcare to rural Mandya District. As the only private multispecialty hospital near Pandavapura area, it offers both outpatient and inpatient services, emergency care, and provide services like separate wards for both men and women patients, and top lab, X-ray, physiotherapy, pharmacy, and 24/7 ambulance support facility Trusted by families across Chinakurali, K.R. Pet, Pandavapura, and Srirangapatna, the hospital provides expert care in gynecology, orthopedics, joint care, and maternity combining compassion with reliable, round-the-clock service.`,
    imageUrl: '/narasegowda/narasaregoda1.png',
    gallery: [ '/narasegowda/narasaregoda2.png', '/narasegowda/narasaregoda3.png', '/narasegowda/narasaregoda4.png', '/narasegowda/narasaregoda5.png' ],
    services: [ { label: 'Emergency Medicine', icon: 'FaUserMd' }, { label: 'General Medicine', icon: 'FaUserMd' }, { label: 'Orthopedics', icon: 'FaUserMd' } ],
    facilities: [ { label: '20 Beds', icon: 'FaBed' }, { label: '24/7 Ambulance Service', icon: 'FaHospitalAlt' }, { label: 'Diagnostic X-Ray Services', icon: 'FaXRay' }, { label: 'Medico-Social Welfare Desk', icon: 'FaHospitalAlt' }, { label: '24/7 Pharmacy Services', icon: 'FaHospitalAlt' }, { label: 'OPD & IPD Services', icon: 'FaXRay' }, { label: 'X-Ray', icon: 'FaXRay' }, { label: 'Pathology Lab', icon: 'FaXRay' } ],
    infrastructure: 'Equipped with emergency beds, separate male and female wards, an in-house pharmacy, and a pathology lab.',
    contact: { address: 'Chinakuruli, Pandavapura Tq, K R, Pete Road, Karnataka 571455', phone: '08236-200466', mapIcon: 'FaMapMarkerAlt', phoneIcon: 'FaPhoneAlt', googleMapUrl: '', embedMapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3894.5543495173033!2d76.59243437483383!3d12.545655187731912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf837ce1399483%3A0x9b488cc6c5831061!2sCurePlus%20Narese%20Gowda%20Memorial%20Hospital%20%7C%20Chinakuruli!5e0!3m2!1sen!2sin!4v1756959720577!5m2!1sen!2sin' },
    seo: {
      title: '24x7 Emergency Hospital in Chinakurali | CurePlus Chinakurali',
      description: 'Get expert medical care anytime at CurePlus NMH Chinakurali. From delivery services to gynecology and bone & joint care, we’re the nearest 24x7 hospital for you and your family.',
      h1: 'CurePlus Narasegowda Memorial Hospital',
      h2: '24x7 Hospital in Chinakurali Near Me.',
      keywords: [ "24x7 Hospital in Chinakurali Near Me", "Hospital near me Chinakurali", "Gynecologist near me Chinakurali", "Emergency hospital in Chinakurali", "Delivery hospital near Chinakurali", "Bone and joint clinic Chinakurali", "Best 24/7 hospital near Pandavapura", "Orthopedic doctor near K.R. Pet", "Maternity care near Srirangapatna", "24/7 hospital Chinakurali", "Best hospital near Pandavapura" ],
      altTexts: [ "Best hospital in Pandavapura CurePlus Narasegowda Memorial Hospital reception desk", "CurePlus Narasegowda Memorial Hospital Pandavapura pharmacy", "CurePlus Narasegowda Memorial Hospital Pandavapura best multispeciality hospital with operation theatre", "CurePlus Narasegowda Memorial Hospital Pandavapura patient ward" ],
      canonical: "https://cureplushospitals.com/our-hospitals/cureplus-narasegowda-memorial-hospital"
    },
    jsonLd: { "@context": "https://schema.org", "@type": "LocalBusiness", "name": "CurePlus Narasegowda Memorial Hospital", "image": "https://cureplushospitals.com/narasegowda/narasaregoda1.png", "url": "https://cureplushospitals.com/our-hospitals/cureplus-narasegowda-memorial-hospital", "telephone": "08236-200466", "address": { "@type": "PostalAddress", "streetAddress": "Chinakuruli, Pandavapura Tq, K R, Pete Road, Karnataka", "addressLocality": "Chinakurali", "postalCode": "571455", "addressCountry": "IN" }, "geo": { "@type": "GeoCoordinates", "latitude": 12.547037588189465, "longitude": 76.60033080260692 }, "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ], "opens": "00:00", "closes": "23:59" }, "sameAs": [ "https://www.facebook.com/cureplushospitals", "https://www.instagram.com/cureplus_hospitals/", "https://www.youtube.com/@CurePlusHospitals", "https://cureplushospitals.com/" ] }
  },
  // 6. CurePlus Hospital Shanivarasanthe
  {
    id: 6,
    name: 'CurePlus Hospital Shanivarasanthe',
    location: 'Shanivarasanthe, Kodagu District',
    icon: 'FaHospitalAlt',
    description: `CurePlus Shanivarasanthe Hospital is a 20-bedded multispecialty hospital serving rural Kodagu by providing affordable, quality healthcare. Located in Shanivarasanthe, As it offers both outpatient and inpatient services, emergency care and route checkups and, separate male and female wards,and world class facilities lab, X-ray, physiotherapy, pharmacy, and 24/7 ambulance support.Known for its expert care in orthopedics, gynecology, pediatrics, and general medicine, it’s a top choice for joint pain treatment in Shanivarasanthe, pregnancy care, and more. With well experienced bone doctors, gynecologists near Somwarpet, and reliable delivery services, it’s a go-to maternity hospital in Shanivarasanthe. As the best leading multispecialty hospital near Somwarpet, CurePlus hospital is also the most trusted emergency care provider to surrounding communities and continues its mission to deliver affordable and accessible healthcare across Kodagu.`,
    imageUrl: '/Shanivarasanthe/shanivarasanthe.png',
    gallery: [ 
    '/Shanivarasanthe/shanivarasanthe2.png', 
    '/Shanivarasanthe/shanivarasanthe3.png', 
    '/Shanivarasanthe/shanivarasanthe4.png', 
    '/Shanivarasanthe/shanivarasanthe1.png' 
],
    // gallery: [ '/shanivarasanthe/shanivarasanthe2.png', '/shanivarasanthe/shanivarasanthe3.png', '/shanivarasanthe/shanivarasanthe4.png', '/shanivarasanthe/shanivarasanthe1.png' ],
    services: [ { label: 'Orthopedics', icon: 'FaUserMd' }, { label: 'Gynecology', icon: 'FaUserMd' }, { label: 'Pediatrics', icon: 'FaUserMd' }, { label: 'General Medicine', icon: 'FaUserMd' } ],
    facilities: [ { label: '15+ Beds', icon: 'FaBed' }, { label: 'Advanced Diagnostic Tools', icon: 'FaXRay' }, { label: 'Private and Semi-Private Wards', icon: 'FaHospitalAlt' }, { label: 'Medico-Social Welfare Desk', icon: 'FaHospitalAlt' }, { label: '24/7 Ambulance Service', icon: 'FaHospitalAlt' }, { label: '24/7 Pharmacy Services', icon: 'FaHospitalAlt' }, { label: 'OPD & IPD Services', icon: 'FaXRay' }, { label: 'X-Ray', icon: 'FaXRay' }, { label: 'Pathology Lab', icon: 'FaXRay' } ],
    infrastructure: 'State-of-the-art medical infrastructure, ensuring personalized and specialized treatments.',
    contact: { address: 'Yashasvi Convention Hall, Kaveri Road, Shanivarasante, Kodagu District, Karnataka 571235', phone: '08276 - 280908', mapIcon: 'FaMapMarkerAlt', phoneIcon: 'FaPhoneAlt', googleMapUrl: '', embedMapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3891.757472451222!2d75.8846381855854!3d12.72923859279972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba519002212ce81%3A0x3ea5fcaaccbebb1a!2sCure%20plus%20Hospital!5e0!3m2!1sen!2sin!4v1756960267032!5m2!1sen!2sin' },
    seo: {
      title: 'Maternity & Orthopedic Hospital Shanivarasanthe | 24x7 CurePlus',
      description: 'CurePlus Shanivarasanthe is a trusted 24x7 hospital for pregnancy care, orthopedics & gynecology. Your nearby destination for expert maternity and bone care in Shanivarasanthe.',
      h1: 'CurePlus Hospital Shanivarasanthe',
      h2: '24x7 Hospital in Shanivarasanthe Near Me',
      keywords: [ "24x7 Hospital in Shanivarasanthe Near Me", "Hospital near me Shanivarasanthe", "Maternity hospital in Shanivarasanthe", "Pregnancy care near Shanivarasanthe", "Orthopedic hospital Shanivarasanthe", "Bone doctor in Shanivarasanthe", "Best 24/7 hospital near Somwarpet", "Gynecologist near Somwarpet", "Joint pain treatment Shanivarasanthe", "Delivery hospital near Shanivarasanthe", "Emergency care hospital Somwarpet" ],
      altTexts: [
        "CurePlus Hospital Shanivarasanthe advanced X-ray services",
        "The pharmacy at CurePlus Hospital Shanivarasanthe",
        "CurePlus Hospital Shanivarasanthe reception desk",
        "Patient ward at CurePlus Hospital Shanivarasanthe"
      ],
      canonical: "https://cureplushospitals.com/our-hospitals/cureplus-shanivarasanthe"
    },
    jsonLd: { "@context": "https://schema.org", "@type": "LocalBusiness", "name": "CurePlus Hospital Shanivarasanthe", "image": "https://cureplushospitals.com/shanivarasanthe/shanivarasanthe.png", "url": "https://cureplushospitals.com/our-hospitals/cureplus-shanivarasanthe", "telephone": "08276 - 280908", "address": { "@type": "PostalAddress", "streetAddress": "Yashasvi Convention Hall, Kaveri Road, Shanivarasante, Somawarpet (Tq), Kodagu District", "addressLocality": "Shanivarasanthe", "postalCode": "571235", "addressCountry": "IN" }, "geo": { "@type": "GeoCoordinates", "latitude": 12.729261417129187, "longitude": 75.88658202837034 }, "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ], "opens": "00:00", "closes": "23:59" }, "sameAs": [ "https://www.facebook.com/cureplushospitals", "https://www.instagram.com/cureplus_hospitals/", "https://www.youtube.com/@CurePlusHospitals", "https://cureplushospitals.com/" ] }
  },
  // 7. CurePlus Hospital Ramapura
  {
    id: 7,
    name: 'CurePlus Hospital Ramapura',
    location: 'Ramapura, Chamarajanagar',
    icon: 'FaHospitalAlt',
    description: `CurePlus Ramapura Hospital was established to serve the rural communities of Chamarajanagar, CurePlus Ramapura Hospital is a 20-bedded multispecialty hospital located in the heart of Ramapura. Operated by Sudhanand Healthcare Solutions, it offers advanced, affordable and accessible healthCare solutions. As a top private hospital near Kollegal, CurePlus Ramapura offers both outpatient and inpatient services, round-the-clock primary emergency care, and fully equipped facilities including advance diagnostics, X-ray, pharmacy, and separate wards for both men and women. Families across Ramapura, Hanur, Kollegal, and nearby areas trust CurePlus for dependable care in orthopedics, general medicine, and maternity. The hospital are well known for its experienced orthopedic doctors, skilled gynecologists, and commitment to maternal and child health, making it a preferred delivery hospital near Ramapura. With 24/7 support, personalized attention, and a strong reputation for providing bone and joint care, CurePlus Ramapura Hospital stands as a reliable healthcare provider for rural Chamarajanagar.`,
    imageUrl: '/rampura/rampura.png',
    gallery: [ '/rampura/rampura1.png', '/rampura/rampura2.png', '/rampura/rampura3.png', '/rampura/rampura4.png' ],
    services: [ { label: 'Orthopedics', icon: 'FaUserMd' }, { label: 'General Medicine', icon: 'FaUserMd' } ],
    facilities: [ { label: '15+ Beds', icon: 'FaBed' }, { label: 'Well-Equipped Inpatient Rooms', icon: 'FaHospitalAlt' } ],
    infrastructure: 'Equipped with modern medical tools and a dedicated team of expert medical professionals.',
    contact: { address: '#187/186, SBI Road, Ramapura, Hanur (Tq), Chamarajanagar, Karnataka - 571444', phone: '08225-272200', mapIcon: 'FaMapMarkerAlt', phoneIcon: 'FaPhoneAlt', googleMapUrl: '', embedMapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.581782663913!2d77.3959855748245!3d12.00341398823002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baec5712cfcac11%3A0xb4f34a7c8c316900!2sCurePlus%20Hospital%20%7C%20Ramapura!5e0!3m2!1sen!2sin!4v1756961208025!5m2!1sen!2sin' },
    seo: {
      title: 'Hospital in Ramapura Near Me - Ortho & Maternity | CurePlus',
      description: 'Looking for maternity or orthopedic care in Ramapura? CurePlus Hospital offers emergency services, gynecologist consultations, and specialized bone treatments near you.',
      h1: 'CurePlus Hospital Ramapura',
      h2: 'Hospital in Ramapura Near Me - Ortho & Maternity',
      keywords: [ "Hospital in Ramapura Near Me - Ortho & Maternity", "Hospital near me Ramapura", "Maternity care near Ramapura", "Orthopedic doctor in Ramapura", "Emergency care Ramapura", "Gynecologist in Ramapura", "Best 24/7 hospital near Kollegal", "Bone and joint specialist Hanur", "Delivery hospital near Ramapura", "24/7 emergency hospital Hanur", "Best hospital near Kollegal" ],
      altTexts: [],
      canonical: "https://cureplushospitals.com/our-hospitals/cureplus-ramapura"
    },
    jsonLd: { "@context": "https://schema.org", "@type": "LocalBusiness", "name": "CurePlus Hospital Ramapura", "image": "https://cureplushospitals.com/rampura/rampura.png", "url": "https://cureplushospitals.com/our-hospitals/cureplus-ramapura", "telephone": "08225-272200", "address": { "@type": "PostalAddress", "streetAddress": "#187/186, SBI Road, Ramapura, Hanur (Tq), Chamarajanagar District, Karnataka", "addressLocality": "Ramapura", "postalCode": "571444", "addressCountry": "IN" }, "geo": { "@type": "GeoCoordinates", "latitude": 12.00344257399024, "longitude": 77.39865386752446 }, "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ], "opens": "00:00", "closes": "23:59" }, "sameAs": [ "https://www.facebook.com/cureplushospitals", "https://www.instagram.com/cureplus_hospitals/", "https://www.youtube.com/@CurePlusHospitals", "https://cureplushospitals.com/" ] }
  },
  // 8. CurePlus Hospital Terakanambi
  {
    id: 8,
    name: 'CurePlus Hospital Terakanambi',
    location: 'Terakanambi, Chamarajanagar',
    icon: 'FaHospitalAlt',
    description: `CurePlus Terakanambi Hospital was established to strengthen rural healthcare access in Chamarajanagar, CurePlus Terakanambi Hospital is a 20-bedded multispecialty facility located in the town of Terakanambi. Operated by Sudhanand Health Care Solutions, the hospital provides affordable, high-quality medical services with a focus on orthopedic care, general medicine, and maternity support. As the leading private hospital in CurePlus Terakanambi, offers both outpatient and inpatient care, and primary emergency services, modern diagnostic tools, and separate wards for both men and women. Trusted by communities in Terakanambi, Gundlupet, and surrounding areas, the hospital is known for its experienced orthopedic specialists, skilled gynecologists, and reliable maternity services. Whether it’s joint care, delivery of a baby, or primary emergency treatment, CurePlus Terakanambi Hospital ensures round-the-clock attention, accessible and affordable support. It continues to serve as a most trustable medical partner for families across Chamarajanagar District..`,
    imageUrl: '/terakanamb/terakanamb.png',
    gallery: [ '/terakanamb/terakanamb1.png', '/terakanamb/terakanamb2.png', '/terakanamb/terakanamb3.png', '/terakanamb/terakanamb4.png' ],
    services: [ { label: 'Orthopedics', icon: 'FaUserMd' }, { label: 'General Medicine', icon: 'FaUserMd' } ],
    facilities: [ { label: '15+ Beds', icon: 'FaBed' }, { label: 'Modern Diagnostic and Treatment Facilities', icon: 'FaXRay' }, { label: 'Medico-Social Welfare Desk', icon: 'FaHospitalAlt' }, { label: '24/7 Ambulance Service', icon: 'FaHospitalAlt' }, { label: '24/7 Pharmacy Services', icon: 'FaHospitalAlt' }, { label: 'OPD & IPD Services', icon: 'FaXRay' }, { label: 'X-Ray', icon: 'FaXRay' }, { label: 'Pathology Lab', icon: 'FaXRay' } ],
    infrastructure: 'Equipped with modern diagnostic and treatment facilities to ensure effective patient care.',
    contact: { address: 'Sri Murugan Complex, Main Road, Opposite SBI Bank, Terakanambi, Gundlupete Taluku, Chamarajanagara District, Karnataka – 571123', phone: '08229-222044', mapIcon: 'FaMapMarkerAlt', phoneIcon: 'FaPhoneAlt', googleMapUrl: '', embedMapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3905.3013136378845!2d76.78636657482139!3d11.81415768840482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf4b003b21f541%3A0x9a5e8306a8745f1a!2sCurePlus%20Hospital%20%7C%20Terakanambi!5e0!3m2!1sen!2sin!4v1756963230241!5m2!1sen!2sin' },
    seo: {
      title: 'Emergency & Specialty Hospital Terakanambi Near Me | CurePlus',
      description: 'CurePlus Terakanambi delivers 24x7 emergency care, gynecology & orthopedic treatments. Visit your nearest best 24/7 hospital with expert bone doctors near Gundlupet.',
      h1: 'CurePlus Hospital Terakanambi',
      h2: 'Terakanambi Emergency & Specialty Hospital Near Me',
      keywords: [ "Terakanambi Emergency & Specialty Hospital Near Me", "Hospital near me Terakanambi", "Gynecologist near me Terakanambi", "Emergency hospital in Terakanambi", "Orthopedic specialist Terakanambi", "Bone specialist near Gundlupet", "Multispecialty hospital near Chamarajanagar", "Maternity hospital near Terakanambi", "24/7 hospital near Gundlupet", "Best hospital in Terakanambi", "Joint pain treatment Chamarajanagar" ],
      altTexts: [ "Best hospital in Terakanambi CurePlus Hospital with diagnosis", "CurePlus Hospital Terakanambi pharmacy with best hospitality", "Best hospital in Terakanambi CurePlus Hospital patient ward with best hospitality", "CurePlus Hospital Terakanambi reception desk with best hospitality" ],
      canonical: "https://cureplushospitals.com/our-hospitals/cureplus-terakanambi"
    },
    jsonLd: { "@context": "https://schema.org", "@type": "LocalBusiness", "name": "CurePlus Hospital Terakanambi", "image": "https://cureplushospitals.com/terakanamb/terakanamb.png", "url": "https://cureplushospitals.com/our-hospitals/cureplus-terakanambi", "telephone": "08229-222044", "address": { "@type": "PostalAddress", "streetAddress": "Sri Murugan Complex, Main Road, Opposite SBI Bank, Terakanambi, Gundlupete Taluku, Chamarajanagara District, Karnataka", "addressLocality": "Terakanambi", "postalCode": "571123", "addressCountry": "IN" }, "geo": { "@type": "GeoCoordinates", "latitude": null, "longitude": null }, "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ], "opens": "00:00", "closes": "23:59" }, "sameAs": [ "https://www.facebook.com/cureplushospitals", "https://www.instagram.com/cureplus_hospitals/", "https://www.youtube.com/@CurePlusHospitals", "https://cureplushospitals.com/" ] }
  },
  // 9. CurePlus Hospital Bherya
  {
    id: 9,
    name: 'CurePlus Hospital Bherya',
    location: 'Bherya, Saligrama Taluk, Mysore',
    icon: 'FaHospitalAlt',
    description: `CurePlus Bherya Hospital was established to bring advanced medical care to rural Mysore, CurePlus Bherya Hospital is a 20-bedded multispecialty hospital located in the heart of Bherya, Saligrama Taluk. Operated by Sudhanand Health Care Solutions, it delivers affordable and reliable healthcare services with a focus on orthopedics, general medicine, and maternity care. As the leading private hospital provider near Saligrama, CurePlus Bherya Hospital offers both outpatient and inpatient care, round the clock primary emergency services with modern diagnostics, and separate wards for both men and women all within a clean, well-maintained facility. Families in Bherya, Hunsur, K.R. Nagar, and Chunchanakatte trust CurePlus Bherya hospital for their expert orthopedic, experienced gynecologists, and maternity support doctors. Whether its pregnancy care, joint treatment, or primary emergency healthcare, CurePlus Bherya Hospital is committed to providing timely, affordable, accessible healthcare. Managed by skilled medical professionals and 24/7 service, it continues to be the most trusted healthcare providers across Mysore’s rural area.`,
    imageUrl: '/bheraya/bheraya.png',
    gallery: [ '/bheraya/bheraya1.png', '/bheraya/bheraya2.png', '/bheraya/bheraya3.png', '/bheraya/bheraya4.png' ],
    services: [ { label: 'Orthopedics', icon: 'FaUserMd' }, { label: 'General Medicine', icon: 'FaUserMd' } ],
    facilities: [ { label: '15+ Beds', icon: 'FaBed' }, { label: 'Advanced Medical Infrastructure', icon: 'FaXRay' }, { label: 'Medico-Social Welfare Desk', icon: 'FaHospitalAlt' }, { label: '24/7 Ambulance Service', icon: 'FaHospitalAlt' }, { label: '24/7 Pharmacy Services', icon: 'FaHospitalAlt' }, { label: 'OPD & IPD Services', icon: 'FaXRay' }, { label: 'X-Ray', icon: 'FaXRay' }, { label: 'Pathology Lab', icon: 'FaXRay' } ],
    infrastructure: 'Designed to provide high-quality medical care with modern infrastructure and expert medical professionals.',
    contact: { address: 'No. 397/11, Bhataganahalli, Road, Bherya Road, Bherya - 571601', phone: '08223-200604', mapIcon: 'FaMapMarkerAlt', phoneIcon: 'FaPhoneAlt', googleMapUrl: '', embedMapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46705.21324052296!2d76.32570967697197!3d12.603887038298655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba57b0a59715ccd%3A0xba4b1621291082bb!2sCurePlus%20Hospital%20%7C%20Bherya!5e0!3m2!1sen!2sin!4v1756964046353!5m2!1sen!2sin' },
    seo: {
      title: 'Best 24/7 Hospital Bherya Near Me | CurePlus Emergency Care',
      description: 'CurePlus Bherya is your trusted hospital near you for maternity, gynecology, orthopedic and emergency care. Get expert treatment from bone specialists in Bherya today',
      h1: 'CurePlus Hospital Bherya',
      h2: 'Bherya Hospital Near Me Best 24/7 & Emergency',
      keywords: [ "Bherya Hospital Near Me - Best 24/7 & Emergency", "Hospital near me Bherya", "Maternity hospital near me Bherya", "Orthopedic doctor in Bherya", "Gynecologist in Bherya", "Bone specialist in Bherya", "best 24/7 hospital near K.R. Nagar", "Best hospital near Saligrama", "24/7 hospital near Chunchanakatte", "Emergency care hospital in Bherya", "Pregnancy care near Hunsur" ],
      altTexts: [ "The best hospital in Bherya, CurePlus Bherya Hospital, provides advanced X ray services", "The pharmacy at CurePlus Bherya Hospital", "Best hospital in Bherya CurePlus Hospital reception desk", "CurePlus Kaveri Hospital Bherya Best Multispeciality Hospital with Patient Ward" ],
      canonical: "https://cureplushospitals.com/our-hospitals/cureplus-Bherya"
    },
    jsonLd: { "@context": "https://schema.org", "@type": "LocalBusiness", "name": "CurePlus Hospital Bherya", "image": "https://cureplushospitals.com/bheraya/bheraya.png", "url": "https://cureplushospitals.com/our-hospitals/cureplus-Bherya", "telephone": "08223-200604", "address": { "@type": "PostalAddress", "streetAddress": "No. 397/11, Bhataganahalli, Road, Bherya Road, Bherya", "addressLocality": "Bherya", "postalCode": "571601", "addressCountry": "IN" }, "geo": { "@type": "GeoCoordinates", "latitude": 12.587292071056236, "longitude": 76.35099502460014 }, "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ], "opens": "00:00", "closes": "23:59" }, "sameAs": [ "https://www.facebook.com/cureplushospitals", "https://www.instagram.com/cureplus_hospitals/", "https://www.youtube.com/@CurePlusHospitals", "https://cureplushospitals.com/" ] }
  },
  // 10. CurePlus Hospital T. Narasipura
  {
    id: 10,
    name: 'CurePlus Hospital T. Narasipura',
    location: 'T Narasipura, Mysore',
    icon: 'FaHospitalAlt',
    description: `CurePlus T. Narasipura Hospital bringing quality healthcare closer to rural Mysore, CurePlus T. Narasipura Hospital is a 20-bedded multispecialty facility located in the town of T. Narasipura. Run and managed by Sudhanand Health Care Solutions, the hospital provides affordable, accessible, and compassionate medical care with a focus on orthopedics, general medicine, and maternity services. As one of the top and best private hospitals near Mysuru and Bannur, CurePlus T. Narasipura Hospital offers both outpatient and inpatient care for patients, and 24/7 emergency care with modern care diagnostics, and affordable medicines. With experienced orthopedic, joint and bone specialists doctors, the hospital is a trusted healthcare provider in T. Narasipura. Also known for their women’s health offering pregnancy care with top gynecologists, and maternity support. Families from T. Narasipura, Bannur, and surrounding areas choose CurePlus Hospital for respectful, and prompt treatment. CurePlus T. Narasipura Hospital continues to be the most trusted healthcare provider for the people.`,
    imageUrl: '/Narasipura/Narasipura.png',
    gallery: [ '/Narasipura/Narasipura1.png', '/Narasipura/Narasipura2.png', '/Narasipura/Narasipura3.png', '/Narasipura/Narasipura4.png' ],
    services: [ { label: 'Orthopedics', icon: 'FaUserMd' }, { label: 'General Medicine', icon: 'FaUserMd' } ],
    facilities: [ { label: '20 Beds', icon: 'FaBed' }, { label: 'Advanced Medical Facilities', icon: 'FaXRay' }, { label: 'Medico-Social Welfare Desk', icon: 'FaHospitalAlt' }, { label: '24/7 Ambulance Service', icon: 'FaHospitalAlt' }, { label: '24/7 Pharmacy Services', icon: 'FaHospitalAlt' }, { label: 'OPD & IPD Services', icon: 'FaXRay' }, { label: 'X-Ray', icon: 'FaXRay' }, { label: 'Pathology Lab', icon: 'FaXRay' } ],
    infrastructure: 'Equipped with modern medical technology and infrastructure to deliver top-notch care.',
    contact: { address: '#1949/1866, Ground Floor, Vinayaka Colony, T. Narasipura, Karnataka - 571124', phone: '08227-200940', mapIcon: 'FaMapMarkerAlt', phoneIcon: 'FaPhoneAlt', googleMapUrl: 'https://maps.app.goo.gl/o4y7NueB3miTCM2F9?g_st=iw', embedMapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.5082689767887!2d76.9034125748281!3d12.213825988036223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf15ac36adb7ed%3A0x8353cf47b0308560!2sCurePlus%20Hospital%20%7C%20T%20Narasipura!5e0!3m2!1sen!2sin!4v1756964357361!5m2!1sen!2sin' },
    seo: {
      title: 'Best Hospital in T. Narasipura Near Me | CurePlus T. Narasipura',
      description: "CurePlus T. Narasipura provides advanced maternity care, orthopedic services & gynecology. A top-rated hospital near you for bone, joint, and women's health needs.",
      h1: 'CurePlus Hospital T Narasipura',
      h2: 'Best Hospital in T. Narasipura Near Me',
      keywords: [ "Best Hospital in T. Narasipura Near Me", "Hospital near me T. Narasipura", "Maternity care near me T. Narasipura", "Orthopedic doctor in T. Narasipura", "Gynecology hospital near me T. Narasipura", "Bone specialist in T. Narasipura", "best 24/7 hospital near Bannur", "Best hospital near Mysuru", "Pregnancy care hospital T. Narasipura", "Emergency care near T. Narasipura", "24/7 hospital near Bannur" ],
      altTexts: [ "CurePlus Bherya Hospital in T. Narasipura is the best hospital, offering X ray services", "The pharmacy at CurePlus Hospital in T. Narasipura for accessible medicines", "The best hospital in T. Narasipura with patient wards", "Cureplus Hospital T. Narasipura with Operation Theatre for Quality Surgical Care" ],
      canonical: "https://cureplushospitals.com/our-hospitals/cureplus-t-narasipura"
    },
    jsonLd: { "@context": "https://schema.org", "@type": "LocalBusiness", "name": "CurePlus Hospital T Narasipura", "image": "https://cureplushospitals.com/Narasipura/Narasipura.png", "url": "https://cureplushospitals.com/our-hospitals/cureplus-T. Narsipura", "telephone": "08227-200940", "address": { "@type": "PostalAddress", "streetAddress": "#1949/1866, Ground Floor, Vinayaka Colony, T. Narasipura, Karnataka", "addressLocality": "T Narasipura", "postalCode": "571124", "addressCountry": "IN" }, "geo": { "@type": "GeoCoordinates", "latitude": 12.21410387851679, "longitude": 76.90669560316947 }, "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ], "opens": "00:00", "closes": "23:59" }, "sameAs": [ "https://www.facebook.com/cureplushospitals", "https://www.instagram.com/cureplus_hospitals/", "https://www.youtube.com/@CurePlusHospitals", "https://cureplushospitals.com/" ] }
  },
  // 11. CurePlus Hospital Hand Post
  {
    id: 11,
    name: 'CurePlus Hospital Hand Post',
    location: 'H.D. Kote, Mysore',
    icon: 'FaHospitalAlt',
    description: `CurePlus Handpost Hospital, located in H.D. Kote, Mysore, is a trusted name in quality rural healthcare bringing expert, affordable, and compassionate medical services to the heart of the community. Recognized as the best hospital in Handpost, it offers specialized care in orthopedics, general medicine, and women’s health, making it a reliable choice for anyone searching for a hospital near me in Handpost. With a well-equipped 20-bed best 24/7 hospital near H.D. Kote. The facility provides comprehensive care from experienced bone specialists in Handpost and skilled gynecologists in Handpost. From pregnancy care near H.D. Kote to expert attention at our maternity hospital near Handpost, patients receive personalized, patient-first care every step of the way. The hospital also ensures access to cost-effective treatment with its wide range of generic medicines and is available round-the-clock, making it a trusted 24/7 hospital near Sargur and a preferred choice for emergency care near Handpost. Whether you're in need of advanced orthopedics in Handpost or general health support, CurePlus Handpost Hospital continues to lead with care, delivering healing with heart to every doorstep.`,
    imageUrl: '/handPost/handpost1.png',
    gallery: [
    '/handPost/handpost1.png',
    '/handPost/handpost3.png',
    '/handPost/handpost4.png',
    '/handPost/handpost5.png'
],
    services: [ { label: 'Orthopedics', icon: 'FaUserMd' }, { label: 'General Medicine', icon: 'FaUserMd' } ],
    facilities: [ { label: '20 Beds', icon: 'FaBed' }, { label: 'Diagnostic Services', icon: 'FaXRay' }, { label: 'Medico-Social Welfare Desk', icon: 'FaHospitalAlt' }, { label: '24/7 Ambulance Service', icon: 'FaHospitalAlt' }, { label: '24/7 Pharmacy Services', icon: 'FaHospitalAlt' }, { label: 'OPD & IPD Services', icon: 'FaXRay' }, { label: 'X-Ray', icon: 'FaXRay' }, { label: 'Pathology Lab', icon: 'FaXRay' } ],
    infrastructure: 'Comprehensive medical expertise with advanced diagnostic and rehabilitation services.',
    contact: { address: 'Yarahalli, H. D. Kote Town, Mysuru, Karnataka - 571114', phone: '8228257300', mapIcon: 'FaMapMarkerAlt', phoneIcon: 'FaPhoneAlt', googleMapUrl: '', embedMapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.6739754242367!2d76.35306477482548!3d12.065938388172345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5f3006933047d%3A0xcac9da2fc57cc4d!2sCure%20plus%20Hospital%20Hand%20post%20%F0%9F%8F%A5!5e0!3m2!1sen!2sin!4v1756964557216!5m2!1sen!2sin' },
    seo: {
      title: '24x7 Emergency Hospital in H.D. Kote | CurePlus Healthcare',
      description: "CurePlus H.D. Kote offers round-the-clock care in orthopedics, maternity & emergency services. Visit the best hospital near you with experienced gynecologists and bone specialists.",
      h1: 'CurePlus Hospital HandPost',
      h2: 'Handpost Hospital Near Me - 24x7 Emergency',
      keywords: [ "Handpost Hospital Near Me - 24x7 Emergency", "Hospital near me Handpost", "Maternity hospital near Handpost", "Gynecologist in Handpost", "Emergency care near Handpost", "Orthopedics in Handpost", "Bone specialist in Handpost", "best 24/7 hospital near H D Kote", "24/7 hospital near Sargur", "Best hospital in Handpost", "Pregnancy care near H D Kote" ],
      altTexts: [ "Best hospital in H D Kote, CurePlus Hospital offers accurate X ray services", "Best hospital in H D Kote, CurePlus Hospital provides patients with a reliable pharmacy", "Best hospital in H D Kote, CurePlus Hospitals reception desk for patients", "Best hospital in H D Kote, CurePlus Hospital patient ward" ],
      canonical: "https://cureplushospitals.com/our-hospitals/cureplus-handpost"
    },
    jsonLd: { "@context": "https://schema.org", "@type": "LocalBusiness", "name": "CurePlus Hospital Hand Post", "image": "https://cureplushospitals.com/handPost/handpost1.png", "url": "https://cureplushospitals.com/our-hospitals/cureplus-handpost", "telephone": "8228257300", "address": { "@type": "PostalAddress", "streetAddress": "Yarahalli, H. D. Kote Town, Mysuru, Karnataka", "addressLocality": "Handpost", "postalCode": "571114", "addressCountry": "IN" }, "geo": { "@type": "GeoCoordinates", "latitude": 12.065952601732715, "longitude": 76.35560568297647 }, "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ], "opens": "00:00", "closes": "23:59" }, "sameAs": [ "https://www.facebook.com/cureplushospitals", "https://www.instagram.com/cureplus_hospitals/", "https://www.youtube.com/@CurePlusHospitals", "https://cureplushospitals.com/" ] }
  },
  // 12. CurePlus Hospital Hosur
  {
    id: 12,
    name: 'CurePlus Hospital Hosur',
    location: 'Saligrama Taluk, Mysore',
    icon: 'FaHospitalAlt',
    description: `CurePlus Hosur Hospital, located in Saligrama Taluk, Mysore, is a trusted healthcare center known for providing affordable, high-quality, and supportive medical care. As a trusted multispeciality hospital near Saligrama, CurePlus Hospital specializes in orthopedics, general medicine, and maternity care, offering expert treatment from experienced orthopedic doctors in Hosuru and compassionate gynecologists in Hosuru. As the best hospital near Hunsur, our 20-bedded facility features advanced infrastructure, clean and comfortable inpatient rooms, and a dedicated orthopedic care and other services. Whether you're looking for a hospital near me in Hosuru, looking for a reliable bone and joint specialist in Hosuru, or need personalized pregnancy care near Hosuru, CurePlus is here to help. We are also known as the most trusted maternity hospital near Hosuru and 24/7 support hospital near K.R. Nagar, providing timely and effective emergency care near Saligrama. With a fully stocked in-house pharmacy offering of both generic and branded medicines, we ensure every patient receives cost-effective and efficient care. At CurePlus Hosur Hospital we believe in providing healthcare solutions.`,
    imageUrl: '/hosur/hosur.png',
    gallery: [ '/hosur/hosur1.png', '/hosur/hosur2.png', '/hosur/hosur3.png', '/hosur/hosur4.png' ],
    services: [ { label: 'Orthopedics', icon: 'FaUserMd' }, { label: 'General Medicine', icon: 'FaUserMd' } ],
    facilities: [ { label: '20 Beds', icon: 'FaBed' }, { label: 'Modern Medical Facilities', icon: 'FaXRay' }, { label: 'Medico-Social Welfare Desk', icon: 'FaHospitalAlt' }, { label: '24/7 Ambulance Service', icon: 'FaHospitalAlt' }, { label: '24/7 Pharmacy Services', icon: 'FaHospitalAlt' }, { label: 'OPD & IPD Services', icon: 'FaXRay' }, { label: 'X-Ray', icon: 'FaXRay' }, { label: 'Pathology Lab', icon: 'FaXRay' } ],
    infrastructure: 'Affordable and accessible healthcare with a focus on patient-centered care.',
    contact: { address: '# 367/385/, SBI Opposite Road, Haliyur Extension, Hosur Post, Chunchunkatte Hobli, Saligrama Talk, Mysuru, Karnataka - 571617', phone: '08223 283350', mapIcon: 'FaMapMarkerAlt', phoneIcon: 'FaPhoneAlt', googleMapUrl: 'https://maps.app.goo.gl/TANLVvqrsTxQANm26?g_st=iw', embedMapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3895.2595790576684!2d76.26343397483302!3d12.498946087774636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5775ad6ca1fdb%3A0xeda93e1bbbb02fe0!2sCurePlus%20Hospital%20%7C%20Hosur!5e0!3m2!1sen!2sin!4v1756964695331!5m2!1sen!2sin' },
    seo: {
      title: 'Ortho & Gynaecology Hospital in Hosuru Near Me | CurePlus',
      description: 'CurePlus Hosuru provides specialized maternity and orthopedic care near you. From joint pain to pregnancy care, trust our expert doctors for comprehensive treatment.',
      h1: 'CurePlus Hospital Hosuru',
      h2: 'Hospital in Hosuru Near Me Ortho & Gynaecology',
      keywords: [ "Hospital in Hosuru Near Me Ortho & Gynaecology", "Hospital near me Hosuru", "Maternity hospital near Hosuru", "Orthopedic doctor in Hosuru", "Gynecologist in Hosuru", "Bone and joint specialist Hosuru", "best 24/7 hospital near Saligrama", "24/7 hospital near K.R. Nagar", "Best hospital near Hunsur", "Pregnancy care near Hosuru", "Emergency care hospital near Saligrama" ],
      altTexts: [ "Best hospital in Hosur, CurePlus Hospital offers accurate X ray services", "Best hospital in Hosur, CurePlus Hospital provides patients with a reliable pharmacy", "Best hospital in Hosur, CurePlus Hospitals reception desk for patients", "Best hospital in Hosur, CurePlus Hospitals patient ward" ],
      canonical: "https://cureplushospitals.com/our-hospitals/cureplus-Hosuru"
    },
    jsonLd: { "@context": "https://schema.org", "@type": "LocalBusiness", "name": "CurePlus Hospital | Hosur", "image": "https://cureplushospitals.com/hosur/hosur.png", "url": "https://cureplushospitals.com/our-hospitals/cureplus-hosuru", "telephone": "08223-283350", "address": { "@type": "PostalAddress", "streetAddress": "# 367/385/, SBI Opposite Road, Haliyur Extension, Hosur Post, Chunchunkatte Hobli, Saligrama Talk, Mysuru, Karnataka", "addressLocality": "Hosuru", "postalCode": "571617", "addressCountry": "IN" }, "geo": { "@type": "GeoCoordinates", "latitude": 12.49895479030107, "longitude": 76.26604632576081 }, "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ], "opens": "00:00", "closes": "23:59" }, "sameAs": [ "https://www.facebook.com/cureplushospitals", "https://www.instagram.com/cureplus_hospitals/", "https://www.youtube.com/@CurePlusHospitals", "https://cureplushospitals.com/" ] }
  },
  // 13. CurePlus Hospital Halli Mysuru
  {
    id: 13,
    name: 'CurePlus Hospital Halli Mysuru',
    location: 'Halli Mysuru, Holenarasipura',
    icon: 'FaHospitalAlt',
    description: `CurePlus Halli Mysuru Hospital is a multispecialty 20-bedded hospital known for providing both affordable and accessible healthcare to the people of Halli Mysuru and nearby areas. Run and managed by Sudhanand Healthcare Solutions, the hospital provides specialized treatments in the field of orthopedics, general medicine, and women’s healthcare sector. As the leading healthcare provider near Arkalgud and Holenarasipur, CurePlus Halli Mysuru provides comprehensive care through experienced orthopedic and joint pain specialists doctors, supported by modern diagnostics and a clean, well equipped facility. The hospital is also a trusted for women’s healthcare and offering personalized maternity care, skilled gynecologists, and safe pregnancy support for mothers to be in and around Halli Mysuru. By providing cost effective generic medicines and 24/7 primary emergency services healthcare support. CurePlus Halli Mysuru Hospital ensures that quality treatment is always is deliverd. Whether it’s everyday care or urgent emergency support. CurePlus Halli Mysuru Hospital stands by its value to treat every patient with skill, dignity, and heart.`,
    imageUrl: '/halli/halli.png',
    gallery: [ '/halli/halli1.png', '/halli/halli2.png', '/halli/halli3.png', '/halli/halli4.png' ],
    services: [ { label: 'Orthopedics', icon: 'FaUserMd' }, { label: 'General Medicine', icon: 'FaUserMd' } ],
    facilities: [ { label: '20 Beds', icon: 'FaBed' }, { label: 'Comprehensive Medical Facilities', icon: 'FaXRay' }, { label: 'Medico-Social Welfare Desk', icon: 'FaHospitalAlt' }, { label: '24/7 Ambulance Service', icon: 'FaHospitalAlt' }, { label: '24/7 Pharmacy Services', icon: 'FaHospitalAlt' }, { label: 'OPD & IPD Services', icon: 'FaXRay' }, { label: 'X-Ray', icon: 'FaXRay' }, { label: 'Pathology Lab', icon: 'FaXRay' } ],
    infrastructure: 'Designed to provide high-quality medical care with modern infrastructure and expert medical professionals.',
    contact: { address: 'Halli Mysore, Holenarasipura Taluku, Hasan District, Karnataka – 573210', phone: '08175-273114', mapIcon: 'FaMapMarkerAlt', phoneIcon: 'FaPhoneAlt', googleMapUrl: 'https://maps.app.goo.gl/GggZd7k2pPqbc4na9?g_st=iw', embedMapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3892.839693013877!2d76.25488657483575!3d12.658513687628874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba56fe229b09ffb%3A0x99ad3f8d21fdebad!2sCurePlus%20Hospital%20%7C%20Halli%20Mysuru!5e0!3m2!1sen!2sin!4v1756964828370!5m2!1sen!2sin' },
    seo: {
      title: 'Best 24/7 Hospital in Halli Mysuru Near Me | CurePlus Halli Mysuru',
      description: 'Find expert gynecology, maternity, and orthopedic services at CurePlus Halli Mysuru. Your trusted hospital near you for joint pain, bone care & women’s health.',
      h1: 'CurePlus Hospital Halli Mysuru',
      h2: 'Hospital in Halli Mysuru Near Me - best 24/7',
      keywords: [ "Hospital in Halli Mysuru Near Me - best 24/7", "Hospital near me Halli Mysuru", "Maternity care near Halli Mysuru", "Orthopedic near me Halli Mysuru", "Gynecologist in Halli Mysuru", "Joint pain doctor Halli Mysuru", "best 24/7 hospital near Holenarasipur", "Best hospital near Arkalgud", "Bone specialist near Halli Mysuru", "Emergency care near Halli Mysuru", "Pregnancy care hospital Halli Mysuru" ],
      altTexts: [ "Best hospital in Halli-Mysuru, CurePlus Hospital offers accurate X ray services", "Best hospital in Halli-Mysuru, CurePlus Hospital with pharmacy", "Best hospital in Halli-Mysuru, CurePlus Hospital reception desk for patients", "Best hospital in Halli-Mysuru, CurePlus Hospital patient ward" ],
      canonical: "https://cureplushospitals.com/our-hospitals/cureplus-Halli-Mysore"
    },
    jsonLd: { "@context": "https://schema.org", "@type": "LocalBusiness", "name": "CurePlus Hospital Halli Mysuru", "image": "https://cureplushospitals.com/halli/halli.png", "url": "https://cureplushospitals.com/our-hospitals/cureplus-Halli-Mysore", "telephone": "08175-273114", "address": { "@type": "PostalAddress", "streetAddress": "Halli Mysore, Holenarasipura Taluku, Hasan District, Karnataka", "addressLocality": "Halli Mysuru", "postalCode": "573210", "addressCountry": "IN" }, "geo": { "@type": "GeoCoordinates", "latitude": 12.658519487820078, "longitude": 76.25750343256132 }, "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ], "opens": "00:00", "closes": "23:59" }, "sameAs": [ "https://www.facebook.com/cureplushospitals", "https://www.instagram.com/cureplus_hospitals/", "https://www.youtube.com/@CurePlusHospitals", "https://cureplushospitals.com/" ] }
  },
  // 14. CurePlus Arakere Hospital
  {
    id: 14, 
    name: 'CurePlus Arakere Hospital',
    location: 'Mysuru',
    icon: 'FaHospitalAlt',
    description: `CurePlus Hospital Arakere is a trusted multispecialty healthcare center serving the people of Arakere and nearby regions with affordable and accessible medical care. Focused on delivering quality treatment with a patient first approach, the hospital provides specialized healthcare services in general medicine, orthopedics, women’s healthcare, maternity care, pediatrics, dermatology, and emergency medical support. Supported by experienced doctors, trained medical staff, and modern healthcare facilities, CurePlus Hospital Arakere continues to be a dependable healthcare destination for families across the region.Known for its compassionate patient care and reliable healthcare services, the hospital offers comprehensive treatment solutions for both routine and emergency medical needs. From preventive health checkups and maternity support to bone and joint care and general medical treatments, the hospital ensures quality healthcare services under one roof. Serving patients from nearby locations like Srirangapatana, Mandya, Kirangur, Belagola, KRS Road, Pandavapura, Bannur Road, Hale Kesare, Mahadevapura, and surrounding villages around Arakere, CurePlus Hospital remains committed to making quality healthcare more accessible and dependable for every patient.`,
    imageUrl: '/arakere/arakere.jpeg',
    gallery: [ '/arakere/arakere.jpeg', '/cureplus/cureplus2.png', '/cureplus/cureplus3.png', '/cureplus/cureplus4.png' ],
    services: [ { label: 'General Surgery', icon: 'FaUserMd' }, { label: 'Orthopedics', icon: 'FaUserMd' }, { label: 'Gynecology', icon: 'FaUserMd' }, { label: 'Pediatrics', icon: 'FaUserMd' }, { label: 'Urology', icon: 'FaUserMd' }, { label: 'ENT', icon: 'FaUserMd' }, { label: 'General Medicine', icon: 'FaUserMd' }, { label: 'Dermatology', icon: 'FaUserMd' }, { label: 'Neurology', icon: 'FaUserMd' }, { label: 'Pathology', icon: 'FaUserMd' }, { label: 'Physiotherapy', icon: 'FaUserMd' }, { label: 'Emergency Medicine', icon: 'FaUserMd' } ],
    facilities: [ { label: '40+ Beds', icon: 'FaBed' }, { label: '2 Operation Theatres', icon: 'FaXRay' }, { label: 'Medico-Social Welfare Desk', icon: 'FaHospitalAlt' }, { label: 'UCG Scanning', icon: 'FaXRay' }, { label: 'Physiotherapy', icon: 'FaXRay' }, { label: '24/7 Ambulance Service', icon: 'FaHospitalAlt' }, { label: '24/7 Pharmacy Services', icon: 'FaHospitalAlt' }, { label: 'Expert Care by Qualified Medical Practitioners', icon: 'FaHospitalAlt' }, { label: 'OPD & IPD Services', icon: 'FaXRay' }, { label: 'X-Ray and USG Scanning', icon: 'FaXRay' }, { label: 'Pathology Lab', icon: 'FaXRay' } ],
    infrastructure: 'Equipped with cutting-edge medical equipment and a modern facility to support high-volume surgeries and patient care.',
    contact: { address: 'Garadi Mane, Main Road, Arakere, Srirangapatana Taluk, Mandya, Karnataka 571415', phone: '0821-2454798', mapIcon: 'FaMapMarkerAlt', phoneIcon: 'FaPhoneAlt', googleMapUrl: 'https://maps.app.goo.gl/dy7C5qmGBcSH9ZFc7?g_st=iw', embedMapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.0703604877826!2d76.66271789275443!3d12.321056510411317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf70682842cf77%3A0x4782cda918bb7056!2sDISHA%20Hospital!5e0!3m2!1sen!2sin!4v1756897229616!5m2!1sen!2sin' },
    seo: {
      title: "Best 24/7 Hospital in Mysore | CurePlus Arakere",
      description: "CurePlus Disha is the best multispeciality hospital in Mysore, offering expert maternity care, gynecology, orthopedics, skin treatments & 24x7 emergency services. Visit the top hospital near you in Mysore.",
      h1: "CurePlus Disha Hospital",
      h2: "Best Multispeciality Hospital in Mysore",
      keywords: [ "Best Multispeciality Hospital in Mysore", "Hospital near me in N R Moholla", "Gandhinagar", "Maternity hospital near N R Moholla and Nazarbad", "Gynecologist near me in Shivaji Road and Rajendra Nagar", "Orthopedic hospital in R S Naidu Nagar and Udaygiri", "Emergency care near Mandi Moholla and Sathyanagara", "Best skin doctor in Nazarbad and Bannimantap", "Bone specialist in Mysore near Nagunhalli Road and Rajendra Nagar", "best 24/7 hospital near Mandi Moholla and R S Naidu Nagar", "24/7 hospital in Shivaji Road and Gandhinagar", "Pregnancy care clinic near Udaygiri and Nazarbad" ],
      altTexts: [ "Cureplus Hospital modern X-ray Facilities in Mysore", "Best Multispeciality Hospital in Mysore with Reception Desk", "Cureplus Hospital Patient Consultation and Care centre in Mysore", "Best Multispeciality Hospital in Mysore with Modern Operation Theatre" ],
      canonical: "https://cureplushospitals.com/our-hospitals/cureplus-disha"
    },
    jsonLd: { "@context": "https://schema.org", "@type": "LocalBusiness", "name": "CurePlus Disha Hospital", "image": "https://cureplushospitals.com/cureplus/cureplus.png", "url": "https://cureplushospitals.com/our-hospitals/cureplus-disha", "telephone": "0821-2454798", "address": { "@type": "PostalAddress", "streetAddress": "4th Cross Rd, Gandhi Nagar, N R Mohalla, Mysuru, Karnataka", "addressLocality": "Mysore", "postalCode": "570007", "addressCountry": "IN" }, "geo": { "@type": "GeoCoordinates", "latitude": 12.3232669, "longitude": 76.6639977 }, "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ], "opens": "00:00", "closes": "23:59" }, "sameAs": [ "https://www.facebook.com/cureplushospitals", "https://www.instagram.com/cureplus_hospitals", "https://www.youtube.com/@CurePlusHospitals", "https://cureplushospitals.com/" ] }
  },
  // 15. CurePlus Huliyurudurga Hospital
  {
    id: 15,
    name: 'CurePlus Huliyurudurga Hospital',
    location: 'Mysuru',
    icon: 'FaHospitalAlt',
    description: `CurePlus Hospital Huliyurudurgais a trusted multispecialty healthcare center serving the people of Huliyurudurga and surrounding regions with affordable and accessible medical care. With a strong commitment towards patient wellbeing and quality treatment, the hospital provides specialized healthcare services in general medicine, orthopedics, women’s healthcare, pediatrics, dermatology, maternity care, and emergency medical support. Backed by experienced doctors, skilled healthcare professio	nals, and modern medical facilities, CurePlus Hospital Huliyurudurga continues to provide dependable healthcare solutions for families across the region.Known for its compassionate patient care and round the clock medical assistance, the hospital focuses on delivering comprehensive treatment for both routine and emergency healthcare needs. From preventive health checkups and maternity support to bone and joint care and general medical treatments, the hospital ensures reliable healthcare services under one roof. Serving patients from nearby areas like Kunigal, Yediyur, Amruthur, Turuvekere, Huthridurga, Bellur Cross, Nagasandra, Hebbur, Channapatna Road, and surrounding villages around Huliyurudurga, CurePlus Hospital remains dedicated to making quality healthcare accessible for every patient.`,
    imageUrl: '/hospital/huliyurudurga.jpeg',
    gallery: [ '/hospital/huliyurudurga.jpeg', '/cureplus/cureplus2.png', '/cureplus/cureplus3.png', '/cureplus/cureplus4.png' ],
    services: [ { label: 'General Surgery', icon: 'FaUserMd' }, { label: 'Orthopedics', icon: 'FaUserMd' }, { label: 'Gynecology', icon: 'FaUserMd' }, { label: 'Pediatrics', icon: 'FaUserMd' }, { label: 'Urology', icon: 'FaUserMd' }, { label: 'ENT', icon: 'FaUserMd' }, { label: 'General Medicine', icon: 'FaUserMd' }, { label: 'Dermatology', icon: 'FaUserMd' }, { label: 'Neurology', icon: 'FaUserMd' }, { label: 'Pathology', icon: 'FaUserMd' }, { label: 'Physiotherapy', icon: 'FaUserMd' }, { label: 'Emergency Medicine', icon: 'FaUserMd' } ],
    facilities: [ { label: '40+ Beds', icon: 'FaBed' }, { label: '2 Operation Theatres', icon: 'FaXRay' }, { label: 'Medico-Social Welfare Desk', icon: 'FaHospitalAlt' }, { label: 'UCG Scanning', icon: 'FaXRay' }, { label: 'Physiotherapy', icon: 'FaXRay' }, { label: '24/7 Ambulance Service', icon: 'FaHospitalAlt' }, { label: '24/7 Pharmacy Services', icon: 'FaHospitalAlt' }, { label: 'Expert Care by Qualified Medical Practitioners', icon: 'FaHospitalAlt' }, { label: 'OPD & IPD Services', icon: 'FaXRay' }, { label: 'X-Ray and USG Scanning', icon: 'FaXRay' }, { label: 'Pathology Lab', icon: 'FaXRay' } ],
    infrastructure: 'Equipped with cutting-edge medical equipment and a modern facility to support high-volume surgeries and patient care.',
    contact: { address: '238B 448, Ground floor, Huliyurdurga, Kunigal, Kunigal, Karnataka 572123', phone: '0821-2454798', mapIcon: 'FaMapMarkerAlt', phoneIcon: 'FaPhoneAlt', googleMapUrl: 'https://maps.app.goo.gl/dy7C5qmGBcSH9ZFc7?g_st=iw', embedMapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.0703604877826!2d76.66271789275443!3d12.321056510411317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf70682842cf77%3A0x4782cda918bb7056!2sDISHA%20Hospital!5e0!3m2!1sen!2sin!4v1756897229616!5m2!1sen!2sin' },
    seo: {
      title: "Best 24/7 Hospital in Mysore | CurePlus Disha",
      description: "CurePlus Disha is the best multispeciality hospital in Mysore, offering expert maternity care, gynecology, orthopedics, skin treatments & 24x7 emergency services. Visit the top hospital near you in Mysore.",
      h1: "CurePlus Disha Hospital",
      h2: "Best Multispeciality Hospital in Mysore",
      keywords: [ "Best Multispeciality Hospital in Mysore", "Hospital near me in N R Moholla", "Gandhinagar", "Maternity hospital near N R Moholla and Nazarbad", "Gynecologist near me in Shivaji Road and Rajendra Nagar", "Orthopedic hospital in R S Naidu Nagar and Udaygiri", "Emergency care near Mandi Moholla and Sathyanagara", "Best skin doctor in Nazarbad and Bannimantap", "Bone specialist in Mysore near Nagunhalli Road and Rajendra Nagar", "best 24/7 hospital near Mandi Moholla and R S Naidu Nagar", "24/7 hospital in Shivaji Road and Gandhinagar", "Pregnancy care clinic near Udaygiri and Nazarbad" ],
      altTexts: [ "Cureplus Hospital modern X-ray Facilities in Mysore", "Best Multispeciality Hospital in Mysore with Reception Desk", "Cureplus Hospital Patient Consultation and Care centre in Mysore", "Best Multispeciality Hospital in Mysore with Modern Operation Theatre" ],
      canonical: "https://cureplushospitals.com/our-hospitals/cureplus-disha"
    },
    jsonLd: { "@context": "https://schema.org", "@type": "LocalBusiness", "name": "CurePlus Disha Hospital", "image": "https://cureplushospitals.com/cureplus/cureplus.png", "url": "https://cureplushospitals.com/our-hospitals/cureplus-disha", "telephone": "0821-2454798", "address": { "@type": "PostalAddress", "streetAddress": "4th Cross Rd, Gandhi Nagar, N R Mohalla, Mysuru, Karnataka", "addressLocality": "Mysore", "postalCode": "570007", "addressCountry": "IN" }, "geo": { "@type": "GeoCoordinates", "latitude": 12.3232669, "longitude": 76.6639977 }, "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ], "opens": "00:00", "closes": "23:59" }, "sameAs": [ "https://www.facebook.com/cureplushospitals", "https://www.instagram.com/cureplus_hospitals", "https://www.youtube.com/@CurePlusHospitals", "https://cureplushospitals.com/" ] }
  },
  // 16. CurePlus Udayagiri Hospital
  {
    id: 16,
    name: 'CurePlus Udayagiri Hospital',
    location: 'Mysuru',
    icon: 'FaHospitalAlt',
    description: `CurePlus Hospital is a multispecialty healthcare center known for delivering affordable and accessible medical care to the people of Udayagiri and surrounding areas. With a strong focus on patient wellbeing and quality treatment, the hospital provides specialized healthcare services across general medicine, orthopedics, women’s healthcare, pediatrics, dermatology, and emergency care. Supported by experienced doctors, trained medical staff, and modern healthcare facilities, CurePlus Hospital Udayagiri continues to serve as a dependable healthcare destination for families across Mysuru.Recognized for its compassionate care and patient first approach, the hospital offers comprehensive treatment solutions ranging from routine health checkups to advanced medical support. The facility is equipped to handle maternity care, gynecology services, bone and joint care, preventive healthcare, and round the clock emergency medical assistance. Serving patients from areas like Sathyanagara, Rajiv Nagar, Bannimantap, N R Mohalla, Nazarbad, Gandhinagar, Kyathamaranahalli, Tilak Nagar, Shanthinagar, and nearby locations around Udayagiri, CurePlus Hospital remains committed to making quality healthcare more reliable, affordable, and accessible for every patient.`,
    imageUrl: '/hospital/udayagiri.jpeg',
    gallery: [ '/cureplus/cureplus1.png', '/cureplus/cureplus2.png', '/cureplus/cureplus3.png', '/cureplus/cureplus4.png' ],
    services: [ { label: 'General Surgery', icon: 'FaUserMd' }, { label: 'Orthopedics', icon: 'FaUserMd' }, { label: 'Gynecology', icon: 'FaUserMd' }, { label: 'Pediatrics', icon: 'FaUserMd' }, { label: 'Urology', icon: 'FaUserMd' }, { label: 'ENT', icon: 'FaUserMd' }, { label: 'General Medicine', icon: 'FaUserMd' }, { label: 'Dermatology', icon: 'FaUserMd' }, { label: 'Neurology', icon: 'FaUserMd' }, { label: 'Pathology', icon: 'FaUserMd' }, { label: 'Physiotherapy', icon: 'FaUserMd' }, { label: 'Emergency Medicine', icon: 'FaUserMd' } ],
    facilities: [ { label: '40+ Beds', icon: 'FaBed' }, { label: '2 Operation Theatres', icon: 'FaXRay' }, { label: 'Medico-Social Welfare Desk', icon: 'FaHospitalAlt' }, { label: 'UCG Scanning', icon: 'FaXRay' }, { label: 'Physiotherapy', icon: 'FaXRay' }, { label: '24/7 Ambulance Service', icon: 'FaHospitalAlt' }, { label: '24/7 Pharmacy Services', icon: 'FaHospitalAlt' }, { label: 'Expert Care by Qualified Medical Practitioners', icon: 'FaHospitalAlt' }, { label: 'OPD & IPD Services', icon: 'FaXRay' }, { label: 'X-Ray and USG Scanning', icon: 'FaXRay' }, { label: 'Pathology Lab', icon: 'FaXRay' } ],
    infrastructure: 'Equipped with cutting-edge medical equipment and a modern facility to support high-volume surgeries and patient care.',
    contact: { address: 'Sy No. 74/2, P & T Road, Sathyanagara, Udayagiri, Mysuru, Karnataka 570029', phone: '0821-2454798', mapIcon: 'FaMapMarkerAlt', phoneIcon: 'FaPhoneAlt', googleMapUrl: 'https://maps.app.goo.gl/dy7C5qmGBcSH9ZFc7?g_st=iw', embedMapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.0703604877826!2d76.66271789275443!3d12.321056510411317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf70682842cf77%3A0x4782cda918bb7056!2sDISHA%20Hospital!5e0!3m2!1sen!2sin!4v1756897229616!5m2!1sen!2sin' },
    seo: {
      title: "Best 24/7 Hospital in Mysore | CurePlus Disha",
      description: "CurePlus Disha is the best multispeciality hospital in Mysore, offering expert maternity care, gynecology, orthopedics, skin treatments & 24x7 emergency services. Visit the top hospital near you in Mysore.",
      h1: "CurePlus Disha Hospital",
      h2: "Best Multispeciality Hospital in Mysore",
      keywords: [ "Best Multispeciality Hospital in Mysore", "Hospital near me in N R Moholla", "Gandhinagar", "Maternity hospital near N R Moholla and Nazarbad", "Gynecologist near me in Shivaji Road and Rajendra Nagar", "Orthopedic hospital in R S Naidu Nagar and Udaygiri", "Emergency care near Mandi Moholla and Sathyanagara", "Best skin doctor in Nazarbad and Bannimantap", "Bone specialist in Mysore near Nagunhalli Road and Rajendra Nagar", "best 24/7 hospital near Mandi Moholla and R S Naidu Nagar", "24/7 hospital in Shivaji Road and Gandhinagar", "Pregnancy care clinic near Udaygiri and Nazarbad" ],
      altTexts: [ "Cureplus Hospital modern X-ray Facilities in Mysore", "Best Multispeciality Hospital in Mysore with Reception Desk", "Cureplus Hospital Patient Consultation and Care centre in Mysore", "Best Multispeciality Hospital in Mysore with Modern Operation Theatre" ],
      canonical: "https://cureplushospitals.com/our-hospitals/cureplus-disha"
    },
    jsonLd: { "@context": "https://schema.org", "@type": "LocalBusiness", "name": "CurePlus Disha Hospital", "image": "https://cureplushospitals.com/cureplus/cureplus.png", "url": "https://cureplushospitals.com/our-hospitals/cureplus-disha", "telephone": "0821-2454798", "address": { "@type": "PostalAddress", "streetAddress": "4th Cross Rd, Gandhi Nagar, N R Mohalla, Mysuru, Karnataka", "addressLocality": "Mysore", "postalCode": "570007", "addressCountry": "IN" }, "geo": { "@type": "GeoCoordinates", "latitude": 12.3232669, "longitude": 76.6639977 }, "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ], "opens": "00:00", "closes": "23:59" }, "sameAs": [ "https://www.facebook.com/cureplushospitals", "https://www.instagram.com/cureplus_hospitals", "https://www.youtube.com/@CurePlusHospitals", "https://cureplushospitals.com/" ] }
  },
  // 17. CurePlus Talakadu Hospital
  {
    id: 17,
    name: 'CurePlus Talakadu Hospital',
    location: 'Mysuru',
    icon: 'FaHospitalAlt',
    description: `CurePlus Hospital Talakadu has grown into a dependable healthcare destination for residents in Talakadu and surrounding communities. Recognized for its commitment to affordable and patient centered treatment, the hospital focuses on delivering reliable medical care through experienced doctors, supportive staff, and modern healthcare facilities. Over the years, CurePlus Hospital has continued to strengthen its presence by offering quality healthcare services that meet the everyday medical needs of families across the region.The hospital provides comprehensive healthcare solutions including general medicine, maternity care, gynecology, orthopedics, emergency services, pediatrics, dermatology, and preventive health support, ensuring care is available at all hours of the day. With its emphasis on compassionate treatment and accessible medical attention, CurePlus Hospital remains a preferred healthcare choice for patients from Talakadu and nearby areas like Malavalli, Bannur, T Narasipura, Sosale, Somanathapura, Mudukuthore, Tagadur, Kollegal Road, Nanjangud, and neighboring villages surrounding the region.`,
    imageUrl: '/hospital/talkakadu.jpeg',
    gallery: [ '/cureplus/cureplus1.png', '/cureplus/cureplus2.png', '/cureplus/cureplus3.png', '/cureplus/cureplus4.png' ],
    services: [ { label: 'General Surgery', icon: 'FaUserMd' }, { label: 'Orthopedics', icon: 'FaUserMd' }, { label: 'Gynecology', icon: 'FaUserMd' }, { label: 'Pediatrics', icon: 'FaUserMd' }, { label: 'Urology', icon: 'FaUserMd' }, { label: 'ENT', icon: 'FaUserMd' }, { label: 'General Medicine', icon: 'FaUserMd' }, { label: 'Dermatology', icon: 'FaUserMd' }, { label: 'Neurology', icon: 'FaUserMd' }, { label: 'Pathology', icon: 'FaUserMd' }, { label: 'Physiotherapy', icon: 'FaUserMd' }, { label: 'Emergency Medicine', icon: 'FaUserMd' } ],
    facilities: [ { label: '40+ Beds', icon: 'FaBed' }, { label: '2 Operation Theatres', icon: 'FaXRay' }, { label: 'Medico-Social Welfare Desk', icon: 'FaHospitalAlt' }, { label: 'UCG Scanning', icon: 'FaXRay' }, { label: 'Physiotherapy', icon: 'FaXRay' }, { label: '24/7 Ambulance Service', icon: 'FaHospitalAlt' }, { label: '24/7 Pharmacy Services', icon: 'FaHospitalAlt' }, { label: 'Expert Care by Qualified Medical Practitioners', icon: 'FaHospitalAlt' }, { label: 'OPD & IPD Services', icon: 'FaXRay' }, { label: 'X-Ray and USG Scanning', icon: 'FaXRay' }, { label: 'Pathology Lab', icon: 'FaXRay' } ],
    infrastructure: 'Equipped with cutting-edge medical equipment and a modern facility to support high-volume surgeries and patient care.',
    contact: { address: 'Old, Street Road, opposite Police Station, Talakad, Karnataka 571122', phone: '0821-2454798', mapIcon: 'FaMapMarkerAlt', phoneIcon: 'FaPhoneAlt', googleMapUrl: 'https://maps.app.goo.gl/dy7C5qmGBcSH9ZFc7?g_st=iw', embedMapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.0703604877826!2d76.66271789275443!3d12.321056510411317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf70682842cf77%3A0x4782cda918bb7056!2sDISHA%20Hospital!5e0!3m2!1sen!2sin!4v1756897229616!5m2!1sen!2sin' },
    seo: {
      title: "Best 24/7 Hospital in Mysore | CurePlus Disha",
      description: "CurePlus Disha is the best multispeciality hospital in Mysore, offering expert maternity care, gynecology, orthopedics, skin treatments & 24x7 emergency services. Visit the top hospital near you in Mysore.",
      h1: "CurePlus Disha Hospital",
      h2: "Best Multispeciality Hospital in Mysore",
      keywords: [ "Best Multispeciality Hospital in Mysore", "Hospital near me in N R Moholla", "Gandhinagar", "Maternity hospital near N R Moholla and Nazarbad", "Gynecologist near me in Shivaji Road and Rajendra Nagar", "Orthopedic hospital in R S Naidu Nagar and Udaygiri", "Emergency care near Mandi Moholla and Sathyanagara", "Best skin doctor in Nazarbad and Bannimantap", "Bone specialist in Mysore near Nagunhalli Road and Rajendra Nagar", "best 24/7 hospital near Mandi Moholla and R S Naidu Nagar", "24/7 hospital in Shivaji Road and Gandhinagar", "Pregnancy care clinic near Udaygiri and Nazarbad" ],
      altTexts: [ "Cureplus Hospital modern X-ray Facilities in Mysore", "Best Multispeciality Hospital in Mysore with Reception Desk", "Cureplus Hospital Patient Consultation and Care centre in Mysore", "Best Multispeciality Hospital in Mysore with Modern Operation Theatre" ],
      canonical: "https://cureplushospitals.com/our-hospitals/cureplus-disha"
    },
    jsonLd: { "@context": "https://schema.org", "@type": "LocalBusiness", "name": "CurePlus Disha Hospital", "image": "https://cureplushospitals.com/cureplus/cureplus.png", "url": "https://cureplushospitals.com/our-hospitals/cureplus-disha", "telephone": "0821-2454798", "address": { "@type": "PostalAddress", "streetAddress": "4th Cross Rd, Gandhi Nagar, N R Mohalla, Mysuru, Karnataka", "addressLocality": "Mysore", "postalCode": "570007", "addressCountry": "IN" }, "geo": { "@type": "GeoCoordinates", "latitude": 12.3232669, "longitude": 76.6639977 }, "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ], "opens": "00:00", "closes": "23:59" }, "sameAs": [ "https://www.facebook.com/cureplushospitals", "https://www.instagram.com/cureplus_hospitals", "https://www.youtube.com/@CurePlusHospitals", "https://cureplushospitals.com/" ] }
  },
  // 18. CurePlus Yelandur Hospital
  {
    id: 18,
    name: 'CurePlus Yelandur Hospital',
    location: 'Mysuru',
    icon: 'FaHospitalAlt',
    description: `CurePlus Hospital Yelandur has become a trusted healthcare center for families in Yelandur and the surrounding areas. Known for its focus on affordable treatment and patient friendly healthcare services, the hospital is committed to delivering dependable medical care through skilled professionals and modern treatment facilities. With a strong emphasis on quality care and patient wellbeing, CurePlus Hospital continues to serve as a reliable medical destination for people across the region.The hospital offers a wide range of healthcare services including general medicine, maternity care, gynecology, orthopedics, emergency care, pediatrics, dermatology, and preventive healthcare support, providing medical assistance round the clock. By combining compassionate care with accessible healthcare services, CurePlus Hospital has earned the trust of patients from Yelandur and nearby locations such as Chamarajanagar, Kollegala, Santhemarahalli, Bandipur Road, Maddur, Honganur, Kesthur, Uppinamole, Mamballi, and neighboring villages around the Yelandur region.`,
    imageUrl: '/hospital/yelandur.jpeg',
    gallery: [ '/cureplus/cureplus1.png', '/cureplus/cureplus2.png', '/cureplus/cureplus3.png', '/cureplus/cureplus4.png' ],
    services: [ { label: 'General Surgery', icon: 'FaUserMd' }, { label: 'Orthopedics', icon: 'FaUserMd' }, { label: 'Gynecology', icon: 'FaUserMd' }, { label: 'Pediatrics', icon: 'FaUserMd' }, { label: 'Urology', icon: 'FaUserMd' }, { label: 'ENT', icon: 'FaUserMd' }, { label: 'General Medicine', icon: 'FaUserMd' }, { label: 'Dermatology', icon: 'FaUserMd' }, { label: 'Neurology', icon: 'FaUserMd' }, { label: 'Pathology', icon: 'FaUserMd' }, { label: 'Physiotherapy', icon: 'FaUserMd' }, { label: 'Emergency Medicine', icon: 'FaUserMd' } ],
    facilities: [ { label: '40+ Beds', icon: 'FaBed' }, { label: '2 Operation Theatres', icon: 'FaXRay' }, { label: 'Medico-Social Welfare Desk', icon: 'FaHospitalAlt' }, { label: 'UCG Scanning', icon: 'FaXRay' }, { label: 'Physiotherapy', icon: 'FaXRay' }, { label: '24/7 Ambulance Service', icon: 'FaHospitalAlt' }, { label: '24/7 Pharmacy Services', icon: 'FaHospitalAlt' }, { label: 'Expert Care by Qualified Medical Practitioners', icon: 'FaHospitalAlt' }, { label: 'OPD & IPD Services', icon: 'FaXRay' }, { label: 'X-Ray and USG Scanning', icon: 'FaXRay' }, { label: 'Pathology Lab', icon: 'FaXRay' } ],
    infrastructure: 'Equipped with cutting-edge medical equipment and a modern facility to support high-volume surgeries and patient care.',
    contact: { address: 'No. 24/47, Chamarajanagar Main Road, Yelandur, Karnataka 571441', phone: '0821-2454798', mapIcon: 'FaMapMarkerAlt', phoneIcon: 'FaPhoneAlt', googleMapUrl: 'https://maps.app.goo.gl/dy7C5qmGBcSH9ZFc7?g_st=iw', embedMapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.0703604877826!2d76.66271789275443!3d12.321056510411317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf70682842cf77%3A0x4782cda918bb7056!2sDISHA%20Hospital!5e0!3m2!1sen!2sin!4v1756897229616!5m2!1sen!2sin' },
    seo: {
      title: "Best 24/7 Hospital in Mysore | CurePlus Disha",
      description: "CurePlus Disha is the best multispeciality hospital in Mysore, offering expert maternity care, gynecology, orthopedics, skin treatments & 24x7 emergency services. Visit the top hospital near you in Mysore.",
      h1: "CurePlus Disha Hospital",
      h2: "Best Multispeciality Hospital in Mysore",
      keywords: [ "Best Multispeciality Hospital in Mysore", "Hospital near me in N R Moholla", "Gandhinagar", "Maternity hospital near N R Moholla and Nazarbad", "Gynecologist near me in Shivaji Road and Rajendra Nagar", "Orthopedic hospital in R S Naidu Nagar and Udaygiri", "Emergency care near Mandi Moholla and Sathyanagara", "Best skin doctor in Nazarbad and Bannimantap", "Bone specialist in Mysore near Nagunhalli Road and Rajendra Nagar", "best 24/7 hospital near Mandi Moholla and R S Naidu Nagar", "24/7 hospital in Shivaji Road and Gandhinagar", "Pregnancy care clinic near Udaygiri and Nazarbad" ],
      altTexts: [ "Cureplus Hospital modern X-ray Facilities in Mysore", "Best Multispeciality Hospital in Mysore with Reception Desk", "Cureplus Hospital Patient Consultation and Care centre in Mysore", "Best Multispeciality Hospital in Mysore with Modern Operation Theatre" ],
      canonical: "https://cureplushospitals.com/our-hospitals/cureplus-disha"
    },
    jsonLd: { "@context": "https://schema.org", "@type": "LocalBusiness", "name": "CurePlus Disha Hospital", "image": "https://cureplushospitals.com/cureplus/cureplus.png", "url": "https://cureplushospitals.com/our-hospitals/cureplus-disha", "telephone": "0821-2454798", "address": { "@type": "PostalAddress", "streetAddress": "4th Cross Rd, Gandhi Nagar, N R Mohalla, Mysuru, Karnataka", "addressLocality": "Mysore", "postalCode": "570007", "addressCountry": "IN" }, "geo": { "@type": "GeoCoordinates", "latitude": 12.3232669, "longitude": 76.6639977 }, "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ], "opens": "00:00", "closes": "23:59" }, "sameAs": [ "https://www.facebook.com/cureplushospitals", "https://www.instagram.com/cureplus_hospitals", "https://www.youtube.com/@CurePlusHospitals", "https://cureplushospitals.com/" ] }
  },
  // 19. CurePlus Martalli Hospital
  {
    id: 19,
    name: 'CurePlus Martalli Hospital',
    location: 'Mysuru',
    icon: 'FaHospitalAlt',
    description: `CurePlus Hospital Martalli is a trusted multispecialty healthcare center serving the people of Martalli and nearby regions with affordable and accessible medical care. Focused on delivering quality treatment with a patient first approach, the hospital provides specialized healthcare services in general medicine, orthopedics, women’s healthcare, maternity care, pediatrics, dermatology, and emergency medical support. Supported by experienced doctors, trained medical staff, and modern healthcare facilities, CurePlus Hospital Martalli continues to be a dependable healthcare destination for families across the region.Known for its compassionate patient care and reliable healthcare services, the hospital offers comprehensive treatment solutions for both routine and emergency medical needs. From preventive health checkups and maternity support to bone and joint care and general medical treatments, the hospital ensures quality healthcare services under one roof. Serving patients from nearby locations like Kollegala, Yelandur, Santhemarahalli, Chamarajanagar, Hanur, Cowdalli, Hoogyam, Mangala, Kunagalli, and surrounding villages around Martalli, CurePlus Hospital remains committed to making quality healthcare more accessible and dependable for every patient.

**`,
    imageUrl: '/hospital/martalli.jpeg',
    gallery: [ '/cureplus/cureplus1.png', '/cureplus/cureplus2.png', '/cureplus/cureplus3.png', '/cureplus/cureplus4.png' ],
    services: [ { label: 'General Surgery', icon: 'FaUserMd' }, { label: 'Orthopedics', icon: 'FaUserMd' }, { label: 'Gynecology', icon: 'FaUserMd' }, { label: 'Pediatrics', icon: 'FaUserMd' }, { label: 'Urology', icon: 'FaUserMd' }, { label: 'ENT', icon: 'FaUserMd' }, { label: 'General Medicine', icon: 'FaUserMd' }, { label: 'Dermatology', icon: 'FaUserMd' }, { label: 'Neurology', icon: 'FaUserMd' }, { label: 'Pathology', icon: 'FaUserMd' }, { label: 'Physiotherapy', icon: 'FaUserMd' }, { label: 'Emergency Medicine', icon: 'FaUserMd' } ],
    facilities: [ { label: '40+ Beds', icon: 'FaBed' }, { label: '2 Operation Theatres', icon: 'FaXRay' }, { label: 'Medico-Social Welfare Desk', icon: 'FaHospitalAlt' }, { label: 'UCG Scanning', icon: 'FaXRay' }, { label: 'Physiotherapy', icon: 'FaXRay' }, { label: '24/7 Ambulance Service', icon: 'FaHospitalAlt' }, { label: '24/7 Pharmacy Services', icon: 'FaHospitalAlt' }, { label: 'Expert Care by Qualified Medical Practitioners', icon: 'FaHospitalAlt' }, { label: 'OPD & IPD Services', icon: 'FaXRay' }, { label: 'X-Ray and USG Scanning', icon: 'FaXRay' }, { label: 'Pathology Lab', icon: 'FaXRay' } ],
    infrastructure: 'Equipped with cutting-edge medical equipment and a modern facility to support high-volume surgeries and patient care.',
    contact: { address: 'Main road, Martalli, Hanur, Karnataka 571320', phone: '0821-2454798', mapIcon: 'FaMapMarkerAlt', phoneIcon: 'FaPhoneAlt', googleMapUrl: 'https://maps.app.goo.gl/dy7C5qmGBcSH9ZFc7?g_st=iw', embedMapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.0703604877826!2d76.66271789275443!3d12.321056510411317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf70682842cf77%3A0x4782cda918bb7056!2sDISHA%20Hospital!5e0!3m2!1sen!2sin!4v1756897229616!5m2!1sen!2sin' },
    seo: {
      title: "Best 24/7 Hospital in Mysore | CurePlus Disha",
      description: "CurePlus Disha is the best multispeciality hospital in Mysore, offering expert maternity care, gynecology, orthopedics, skin treatments & 24x7 emergency services. Visit the top hospital near you in Mysore.",
      h1: "CurePlus Disha Hospital",
      h2: "Best Multispeciality Hospital in Mysore",
      keywords: [ "Best Multispeciality Hospital in Mysore", "Hospital near me in N R Moholla", "Gandhinagar", "Maternity hospital near N R Moholla and Nazarbad", "Gynecologist near me in Shivaji Road and Rajendra Nagar", "Orthopedic hospital in R S Naidu Nagar and Udaygiri", "Emergency care near Mandi Moholla and Sathyanagara", "Best skin doctor in Nazarbad and Bannimantap", "Bone specialist in Mysore near Nagunhalli Road and Rajendra Nagar", "best 24/7 hospital near Mandi Moholla and R S Naidu Nagar", "24/7 hospital in Shivaji Road and Gandhinagar", "Pregnancy care clinic near Udaygiri and Nazarbad" ],
      altTexts: [ "Cureplus Hospital modern X-ray Facilities in Mysore", "Best Multispeciality Hospital in Mysore with Reception Desk", "Cureplus Hospital Patient Consultation and Care centre in Mysore", "Best Multispeciality Hospital in Mysore with Modern Operation Theatre" ],
      canonical: "https://cureplushospitals.com/our-hospitals/cureplus-disha"
    },
    jsonLd: { "@context": "https://schema.org", "@type": "LocalBusiness", "name": "CurePlus Disha Hospital", "image": "https://cureplushospitals.com/cureplus/cureplus.png", "url": "https://cureplushospitals.com/our-hospitals/cureplus-disha", "telephone": "0821-2454798", "address": { "@type": "PostalAddress", "streetAddress": "4th Cross Rd, Gandhi Nagar, N R Mohalla, Mysuru, Karnataka", "addressLocality": "Mysore", "postalCode": "570007", "addressCountry": "IN" }, "geo": { "@type": "GeoCoordinates", "latitude": 12.3232669, "longitude": 76.6639977 }, "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ], "opens": "00:00", "closes": "23:59" }, "sameAs": [ "https://www.facebook.com/cureplushospitals", "https://www.instagram.com/cureplus_hospitals", "https://www.youtube.com/@CurePlusHospitals", "https://cureplushospitals.com/" ] }
  },
];
