// Single source of truth for every CurePlus hospital: listing cards, hospital pages, contact-form
// dropdown, sitemap and JSON-LD are all generated from this array.
//
// To add / edit a hospital: change its entry here (and add its URL to `rewrites` in next.config.ts).
// - `is24x7` controls the 24x7 badge. Set it to true ONLY for hospitals that are truly open 24x7.
// - `photo.src` is the base path (no extension) of the optimised 16:10 image in /public/images/hospitals/
//   (run `python scripts/optimize-images.py` to regenerate `<name>.webp|.jpg` and `<name>-600.webp|.jpg`).
// - `contact.googleMapUrl` is optional; when it is missing the "Get Directions" button falls back to
//   `contact.geo` (coordinates) and finally to a Google Maps search for the address.

import { SITE, SITE_URL, SOCIAL } from './site';

export interface Hospital {
  id: number;
  /** URL slug; the public URL is `/${slug}` (see `rewrites` in next.config.ts). */
  slug: string;
  path: string;
  name: string;
  /** Short place label shown on cards, e.g. "Pandavapura Taluk, Mandya". */
  location: string;
  town: string;
  district: string;
  /** True only for hospitals that are open 24x7. Drives the 24x7 badge and the opening-hours block. */
  is24x7: boolean;
  /** Specialty chips on the listing cards (kept separate from the 24x7 badge). */
  specialtyTags: string[];
  photo: { src: string; alt: string };
  description: string;
  gallery: string[];
  services: string[];
  facilities: string[];
  infrastructure: string;
  contact: {
    address: string;
    pincode?: string;
    phone: string;
    googleMapUrl?: string;
    embedMapUrl?: string;
    geo?: { lat: number; lng: number };
  };
  seo: {
    title: string;
    description: string;
    h1: string;
    h2?: string;
    keywords: string[];
    altTexts: string[];
  };
}

export const hospitals: Hospital[] = [
  {
    id: 1,
    slug: "cureplus-disha-hospital",
    path: "/cureplus-disha-hospital",
    name: "CurePlus Disha Hospital",
    location: "N R Mohalla, Mysuru",
    town: "Mysuru",
    district: "Mysuru",
    is24x7: true,
    specialtyTags: [
      "General Surgery",
      "Orthopedics",
      "Gynecology",
      "Pediatrics"
    ],
    photo: {
      src: "/images/hospitals/disha-hospital",
      alt: "CurePlus Disha Hospital, Mysuru: front view"
    },
    description: "Established in 2014, CurePlus Disha Hospital has marked its place as one of Mysuru’s most well known healthcare institutions. As a NABH; accredited multispecialty hospital, it delivers high-quality medical care that's known for both affordability and accessibility. Combining both clinical expertise with a strong patient first approach. With 40 beds, two fully equipped operation theatres, and over 80 surgeries performed every month, CurePlus Disha Hospital has become a trusted medical choice for all the patients across Mysuru. Its OPD manages more than 70 patients daily, reflecting the hospital’s growing reputation in neighborhoods. CurePlus Disha Hospital offers services like maternity care, gynecology, orthopedics, emergency care, dermatology, and bone health and many more, operating as a full service 24/7 best hospital. From daily routine checkups to advanced care, CurePlus Disha Hospital is the go to choice for patients across key areas like N R Moholla, Gandhinagar, Nazarbad, Shivaji Road, Rajendra Nagar, R S Naidu Nagar, Udaygiri, Sathyanagara, Bannimantap, and Nagunhalli Road.",
    gallery: [
      "/cureplus/cureplus1.png",
      "/cureplus/cureplus2.png",
      "/cureplus/cureplus3.png",
      "/cureplus/cureplus4.png"
    ],
    services: [
      "General Surgery",
      "Orthopedics",
      "Gynecology",
      "Pediatrics",
      "Urology",
      "ENT",
      "General Medicine",
      "Dermatology",
      "Neurology",
      "Pathology",
      "Physiotherapy",
      "Emergency Medicine"
    ],
    facilities: [
      "40+ Beds",
      "2 Operation Theatres",
      "Medico-Social Welfare Desk",
      "UCG Scanning",
      "Physiotherapy",
      "24/7 Ambulance Service",
      "24/7 Pharmacy Services",
      "Expert Care by Qualified Medical Practitioners",
      "OPD & IPD Services",
      "X-Ray and USG Scanning",
      "Pathology Lab"
    ],
    infrastructure: "Equipped with cutting-edge medical equipment and a modern facility to support high-volume surgeries and patient care.",
    contact: {
      address: "4th Cross Rd, Gandhi Nagar, N R Mohalla, Mysuru, Karnataka 570007",
      pincode: "570007",
      phone: "0821-2454798",
      googleMapUrl: "https://maps.app.goo.gl/dy7C5qmGBcSH9ZFc7?g_st=iw",
      embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.0703604877826!2d76.66271789275443!3d12.321056510411317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf70682842cf77%3A0x4782cda918bb7056!2sDISHA%20Hospital!5e0!3m2!1sen!2sin!4v1756897229616!5m2!1sen!2sin",
      geo: {
        lat: 12.323267,
        lng: 76.663998
      }
    },
    seo: {
      title: "Best 24/7 Hospital in Mysuru | CurePlus Disha",
      description: "CurePlus Disha is the best multispeciality hospital in Mysuru, offering expert maternity care, gynecology, orthopedics, skin treatments & 24x7 emergency services. Visit the top hospital near you in Mysuru.",
      h1: "CurePlus Disha Hospital",
      h2: "Best Multispeciality Hospital in Mysuru",
      keywords: [
        "Best Multispeciality Hospital in Mysuru",
        "Hospital near me in N R Moholla",
        "Gandhinagar",
        "Maternity hospital near N R Moholla and Nazarbad",
        "Gynecologist near me in Shivaji Road and Rajendra Nagar",
        "Orthopedic hospital in R S Naidu Nagar and Udaygiri",
        "Emergency care near Mandi Moholla and Sathyanagara",
        "Best skin doctor in Nazarbad and Bannimantap",
        "Bone specialist in Mysuru near Nagunhalli Road and Rajendra Nagar",
        "best 24/7 hospital near Mandi Moholla and R S Naidu Nagar",
        "24/7 hospital in Shivaji Road and Gandhinagar",
        "Pregnancy care clinic near Udaygiri and Nazarbad"
      ],
      altTexts: [
        "Cureplus Hospital modern X-ray Facilities in Mysuru",
        "Best Multispeciality Hospital in Mysuru with Reception Desk",
        "Cureplus Hospital Patient Consultation and Care centre in Mysuru",
        "Best Multispeciality Hospital in Mysuru with Modern Operation Theatre"
      ]
    }
  },
  {
    id: 2,
    slug: "cureplus-dharani-hospital",
    path: "/cureplus-dharani-hospital",
    name: "CurePlus Dharani Hospital",
    location: "Santhemarahalli, Yelandur Taluk, Chamarajanagar",
    town: "Santhemarahalli",
    district: "Chamarajanagar",
    is24x7: true,
    specialtyTags: [
      "General Surgery",
      "Orthopedics",
      "Gynecology",
      "Pediatrics"
    ],
    photo: {
      src: "/images/hospitals/dharani-hospital",
      alt: "CurePlus Dharani Hospital, Santhemarahalli: front view"
    },
    description: "Established in 2017, CurePlus Dharani Hospital in Santhemarahalli, Yelandur Taluk, Chamarajanagar District, was started with a simple goal to provide quality, accessible and affordable healthcare to people in the area. Today, it has become a trusted name in the rural healthcare side, as known for its commitment to serving the community with care and compassion. The CurePlus Dharani hospital is known for their services in the fields like gynecology, maternity care, orthopedics, bone and joint care, pregnancy care, and emergency services. As a 24/7 multispecialty hospital, CurePlus Dharani Hospital is always ready for all situations. It happily serves and takes care of patients from Kollegal, Santhemarahalli, and Chamarajanagar, and continues to bring affordable healthcare for the people.",
    gallery: [
      "/dharni/dharni1.png",
      "/dharni/dharni2.png",
      "/dharni/dharni3.png",
      "/dharni/dharni4.png"
    ],
    services: [
      "General Medicine",
      "Emergency Care",
      "Gynecology",
      "Pediatrics"
    ],
    facilities: [
      "16+ Beds",
      "Multi-Specialty Care",
      "Medico-Social Welfare Desk",
      "24/7 Ambulance Service",
      "24/7 Pharmacy Services",
      "OPD & IPD Services",
      "X-Ray",
      "Pathology Lab"
    ],
    infrastructure: "Equipped with essential diagnostic and treatment facilities to deliver efficient and modern care in a rural setting.",
    contact: {
      address: "Santhamarahalli, Karnataka, 571115",
      pincode: "571115",
      phone: "08226-297298",
      googleMapUrl: "https://www.google.com/maps/dir/?api=1&destination=12.043889,76.980366",
      embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.995274668126!2d76.97535587782845!3d12.043845757748437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf3c9c0ade12b9%3A0x1c4e0f3bde9f25f7!2sCurePlus%20Dharani%20Hospital%20%7C%20Santhemarahalli!5e0!3m2!1sen!2sin!4v1756897850538!5m2!1sen!2sin",
      geo: {
        lat: 12.043889,
        lng: 76.980366
      }
    },
    seo: {
      title: "24x7 Best Hospital in Santhemarahalli | CurePlus Dharani",
      description: "Looking for a hospital near Santhemarahalli? CurePlus Dharani offers round-the-clock care with gynecologists, orthopedic specialists, maternity care & bone and joint treatment under one roof.",
      h1: "CurePlus Dharani Hospital",
      h2: "24x7 Best Hospital in Santhemarahalli Near Me",
      keywords: [
        "24x7 Hospital in Santhemarahalli Near Me",
        "Hospital near me Santhemarahalli",
        "Gynecologist in Santhemarahalli",
        "Maternity hospital near me Santhemarahalli",
        "Orthopedic specialist Santhemarahalli",
        "Bone and joint care Santhemarahalli",
        "Multispecialty hospital near Kollegal",
        "Best hospital near Chamarajanagar",
        "Pregnancy care Santhemarahalli",
        "Emergency care hospital near Santhemarahalli",
        "24/7 hospital near Kollegal"
      ],
      altTexts: [
        "X ray and Diagnostic Imaging at CurePlus Dharani Hospital Santhemarahalli",
        "Pharmacy at CurePlus Dharani Hospital Santhemarahalli Chamarajanagar",
        "Best Hospital in Santhemarahalli Chamarajanagar CurePlus Dharani Consultation Cabin",
        "Best Multispeciality Hospital CurePlus Dharani Patient Ward Santhemarahalli Chamarajanagar"
      ]
    }
  },
  {
    id: 3,
    slug: "cureplus-kaveri-hospital",
    path: "/cureplus-kaveri-hospital",
    name: "CurePlus Kaveri Hospital",
    location: "Kushalnagar, Somwarpet Taluk, Kodagu",
    town: "Kushalnagar",
    district: "Kodagu",
    is24x7: false,
    specialtyTags: [
      "General Surgery",
      "ENT & Audiometry",
      "Critical Care",
      "Inpatient Care"
    ],
    photo: {
      src: "/images/hospitals/kaveri-hospital",
      alt: "CurePlus Kaveri Hospital, Kushalnagar: front view"
    },
    description: "Established in 2018, CurePlus Kaveri Hospital in Kushalnagar began as a 20-bed facility under the Sudhanand Group and expanded in 2022 into a 40-bedded NABH-accredited multispecialty hospital. It offers advanced ICU care, a fully equipped operation theatre, hearing assessments, and private/semi-private wards to meet all the patients needs. As they are Known for their expert care in gynecology, orthopedics, joint care, and maternity, the hospital serves patients from Kushalnagar, Somwarpet, Madikeri, and Piriyapatna. With a skilled team of doctors and nurses and providing 24/7 services for the patients, CurePlus Kaveri Hospital continues to deliver compassionate, affordable, and accessible health care across the Kodagu District.",
    gallery: [
      "/kaveri/kaveri2.png",
      "/kaveri/kaveri3.png",
      "/kaveri/kaveri4.png",
      "/kaveri/kaveri5.png"
    ],
    services: [
      "General Surgery",
      "ENT & Audiometry",
      "Critical Care",
      "Inpatient Care",
      "Urology",
      "ENT",
      "General Medicine",
      "Dermatology",
      "Neurology",
      "Pathology",
      "Physiotherapy",
      "Emergency Medicine"
    ],
    facilities: [
      "40+ Beds",
      "2 Operation Theatres",
      "Medico-Social Welfare Desk",
      "UCG Scanning",
      "Physiotherapy",
      "24/7 Ambulance Service",
      "24/7 Pharmacy Services",
      "OPD & IPD Services",
      "X-Ray and USG Scanning",
      "Pathology Lab"
    ],
    infrastructure: "Features modern operation theaters, advanced ICU, and private rooms to meet growing healthcare needs in Kodagu District.",
    contact: {
      address: "BM Rd, Kushalnagara, Karnataka, 571234",
      pincode: "571234",
      phone: "08276-298998",
      googleMapUrl: "https://maps.app.goo.gl/XqHSuw4QWmneAcw86",
      embedMapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29625.767362367347!2d75.9344553!3d12.4502985!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba50967cc44775d%3A0xbce751bfc15abd61!2sCurePlus%20Kaveri%20Hospital%20%7C%20Kushalnagar!5e1!3m2!1sen!2sin!4v1781869895339!5m2!1sen!2sin",
      geo: {
        lat: 12.450309,
        lng: 75.969579
      }
    },
    seo: {
      title: "Best 24/7 Hospital in Kushalnagar Near Me | CurePlus Kaveri",
      description: "CurePlus Kaveri in Kushalnagar delivers advanced care in gynecology, orthopedics & maternity. Visit our Best 24/7 hospital near you for joint pain, bone care & emergency treatment.",
      h1: "CurePlus Kaveri Hospital",
      h2: "Hospital in Kushalnagar Near Me.",
      keywords: [
        "Hospital in Kushalnagar Near Me",
        "Hospital near me Kushalnagar",
        "Best 24/7 hospital in Kushalnagar",
        "Gynecology hospital near me Kushalnagar",
        "Orthopedic doctor in Kushalnagar",
        "Joint pain treatment Kushalnagar",
        "Best hospital near Madikeri",
        "Orthopedic specialist Somwarpet",
        "Maternity care clinic Piriyapatna",
        "Bone and joint care near Kushalnagar",
        "Gynecologist in Madikeri"
      ],
      altTexts: [
        "Best Multispeciality Hospital CurePlus Kaveri Kushalnagar with X ray",
        "Best Hospital in Kushalnagar CurePlus Kaveri Multispeciality with Pharmacy",
        "Best Hospital in Kushalnagar CurePlus Kaveri Multispeciality with Operation Theatre",
        "CurePlus Kaveri Hospital Kushalnagar Best Multispeciality Hospital with Patient Ward"
      ]
    }
  },
  {
    id: 4,
    slug: "cureplus-krishna-hospital",
    path: "/cureplus-krishna-hospital",
    name: "CurePlus Krishna Hospital",
    location: "Bettadapura, Piriyapatna Taluk, Mysuru",
    town: "Bettadapura",
    district: "Mysuru",
    is24x7: false,
    specialtyTags: [
      "Multi-Specialty Care",
      "Outpatient & Inpatient Services",
      "Preventive Health Checkups",
      "Emergency Care"
    ],
    photo: {
      src: "/images/hospitals/krishna-hospital",
      alt: "CurePlus Krishna Hospital, Bettadapura: front view"
    },
    description: "Established during the COVID-19 pandemic era to provide healthcare, CurePlus Krishna Hospital in Bettadapura, Piriyapatna Taluk, was launched by the Sudhanand Group as a 20-bedded multispecialty hospital to serve the rural communities of Mysuru District. With modern facilities and a team of skilled medical professionals, the hospital provides quality care across a wide range of services from emergencies to everyday health needs.. As the leading healthcare provider in Bettadapura and Piriyapatna Taluk, Trusted by more than 2.5 lakh population for their healthcare needs are affordable and accessible. The hospital serves patients from across Bettadapura, Kamplapura, Gorahalli, and Ravandur, delivering expert treatment with compassion and care kept in mind. With a dedicated team and a focus on affordability and quality healthcare, CurePlus Krishna Hospital continues to provide accessible, reliable, and patient centered healthcare to the people of rural Karnataka.",
    gallery: [
      "/krishna/krishna2.png",
      "/krishna/krishna3.png",
      "/krishna/krishna4.png",
      "/krishna/krishna5.png"
    ],
    services: [
      "Multi-Specialty Care",
      "Outpatient & Inpatient Services",
      "Preventive Health Checkups",
      "Emergency Services"
    ],
    facilities: [
      "20 Beds",
      "Private Multi-Specialty Facility",
      "Medico-Social Welfare Desk",
      "24/7 Ambulance Service",
      "24/7 Pharmacy Services",
      "OPD & IPD Services",
      "X-Ray",
      "Pathology Lab"
    ],
    infrastructure: "Built during the pandemic with a focus on accessibility and comprehensive medical care for rural populations.",
    contact: {
      address: "KR Nagara Road, Opposite to Gram Panchayat Office, Bettadapura, Piriyapatna Taluk, Mysuru District – 571102",
      pincode: "571102",
      phone: "08223-275798",
      googleMapUrl: "https://maps.app.goo.gl/KyNytoTPsxKLicfb7?g_st=iw",
      embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3895.6248115954145!2d76.1006768748325!3d12.474688187796914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5757b6d08a007%3A0xd94197a0c3202fe3!2sCurePlus%20Krishna%20Hospital%20%7C%20Bettadapura!5e0!3m2!1sen!2sin!4v1756958942995!5m2!1sen!2sin",
      geo: {
        lat: 12.474741,
        lng: 76.103428
      }
    },
    seo: {
      title: "Top Hospital in Bettadapura Near Me | CurePlus Krishna",
      description: "CurePlus Krishna Bettadapura is the best hospital near you for maternity, orthopedic, and emergency care. Trusted for expert bone specialists and women’s health services near Periyapatna.",
      h1: "CurePlus Krishna Hospital",
      h2: "Top Hospital in Bettadapura Near Me.",
      keywords: [
        "Top Hospital in Bettadapura Near Me",
        "Hospital near me Bettadapura",
        "Best hospital in Bettadapura",
        "Maternity hospital near Bettadapura",
        "Bone specialist in Bettadapura",
        "Orthopedic doctor near Periyapatna",
        "Best hospital in Hunsur",
        "24/7 hospital near Kushalnagar",
        "Joint pain treatment Bettadapura",
        "Gynecology clinic near Periyapatna",
        "Emergency care hospital near Hunsur"
      ],
      altTexts: [
        "CurePlus krishna hospital Bettadapura Piriyapatna best multispeciality hospital with X ray services",
        "CurePlus krishna hospital Bettadapura best multispeciality hospital with pharmacy services",
        "Best multispeciality hospital with operation theatre",
        "CurePlus krishna hospital the best multispeciality hospital with patient ward"
      ]
    }
  },
  {
    id: 5,
    slug: "cureplus-narasegowda-memorial-hospital",
    path: "/cureplus-narasegowda-memorial-hospital",
    name: "CurePlus Narasegowda Memorial Hospital",
    location: "Chinakurali, Pandavapura Taluk, Mandya",
    town: "Chinakurali",
    district: "Mandya",
    is24x7: false,
    specialtyTags: [
      "Emergency Care",
      "General Medicine",
      "Orthopedics"
    ],
    photo: {
      src: "/images/hospitals/narasegowda-memorial-hospital",
      alt: "CurePlus Narasegowda Memorial Hospital, Chinakurali: front view"
    },
    description: "Established in 2023, CurePlus Narasegowda Memorial Hospital in Chinakurali, Pandavapura Taluk, was launched by Sudhanand Health Care Solutions in memory of Mr. Narasegowda. This 20-bedded multispecialty hospital brings affordability, quality healthcare to rural Mandya District. As the only private multispecialty hospital near Pandavapura area, it offers both outpatient and inpatient services, emergency care, and provide services like separate wards for both men and women patients, and top lab, X-ray, physiotherapy, pharmacy, and 24/7 ambulance support facility Trusted by families across Chinakurali, K.R. Pet, Pandavapura, and Srirangapatna, the hospital provides expert care in gynecology, orthopedics, joint care, and maternity combining compassion with reliable, round-the-clock service.",
    gallery: [
      "/narasegowda/narasaregoda2.png",
      "/narasegowda/narasaregoda3.png",
      "/narasegowda/narasaregoda4.png",
      "/narasegowda/narasaregoda5.png"
    ],
    services: [
      "Emergency Medicine",
      "General Medicine",
      "Orthopedics"
    ],
    facilities: [
      "20 Beds",
      "24/7 Ambulance Service",
      "Diagnostic X-Ray Services",
      "Medico-Social Welfare Desk",
      "24/7 Pharmacy Services",
      "OPD & IPD Services",
      "X-Ray",
      "Pathology Lab"
    ],
    infrastructure: "Equipped with emergency beds, separate male and female wards, an in-house pharmacy, and a pathology lab.",
    contact: {
      address: "Chinakuruli, Pandavapura Taluk, K.R. Pete Road, Mandya District, Karnataka – 571455",
      pincode: "571455",
      phone: "08236-200466",
      googleMapUrl: "https://www.google.com/maps/dir/?api=1&destination=12.547038,76.600331",
      embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3894.5543495173033!2d76.59243437483383!3d12.545655187731912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf837ce1399483%3A0x9b488cc6c5831061!2sCurePlus%20Narese%20Gowda%20Memorial%20Hospital%20%7C%20Chinakuruli!5e0!3m2!1sen!2sin!4v1756959720577!5m2!1sen!2sin",
      geo: {
        lat: 12.547038,
        lng: 76.600331
      }
    },
    seo: {
      title: "24x7 Emergency Hospital in Chinakurali | CurePlus Chinakurali",
      description: "Get expert medical care anytime at CurePlus NMH Chinakurali. From delivery services to gynecology and bone & joint care, we’re the nearest 24x7 hospital for you and your family.",
      h1: "CurePlus Narasegowda Memorial Hospital",
      h2: "24x7 Hospital in Chinakurali Near Me.",
      keywords: [
        "24x7 Hospital in Chinakurali Near Me",
        "Hospital near me Chinakurali",
        "Gynecologist near me Chinakurali",
        "Emergency hospital in Chinakurali",
        "Delivery hospital near Chinakurali",
        "Bone and joint clinic Chinakurali",
        "Best 24/7 hospital near Pandavapura",
        "Orthopedic doctor near K.R. Pet",
        "Maternity care near Srirangapatna",
        "24/7 hospital Chinakurali",
        "Best hospital near Pandavapura"
      ],
      altTexts: [
        "Best hospital in Pandavapura CurePlus Narasegowda Memorial Hospital reception desk",
        "CurePlus Narasegowda Memorial Hospital Pandavapura pharmacy",
        "CurePlus Narasegowda Memorial Hospital Pandavapura best multispeciality hospital with operation theatre",
        "CurePlus Narasegowda Memorial Hospital Pandavapura patient ward"
      ]
    }
  },
  {
    id: 6,
    slug: "cureplus-hospital-shanivarasanthe",
    path: "/cureplus-hospital-shanivarasanthe",
    name: "CurePlus Hospital Shanivarasanthe",
    location: "Somwarpet Taluk, Kodagu",
    town: "Shanivarasanthe",
    district: "Kodagu",
    is24x7: false,
    specialtyTags: [
      "Pediatrics",
      "Orthopedics",
      "Gynecology",
      "General Medicine"
    ],
    photo: {
      src: "/images/hospitals/shanivarasanthe-hospital",
      alt: "CurePlus Hospital, Shanivarasanthe: front view"
    },
    description: "CurePlus Shanivarasanthe Hospital is a 20-bedded multispecialty hospital serving rural Kodagu by providing affordable, quality healthcare. Located in Shanivarasanthe, As it offers both outpatient and inpatient services, emergency care and route checkups and, separate male and female wards,and world class facilities lab, X-ray, physiotherapy, pharmacy, and 24/7 ambulance support.Known for its expert care in orthopedics, gynecology, pediatrics, and general medicine, it’s a top choice for joint pain treatment in Shanivarasanthe, pregnancy care, and more. With well experienced bone doctors, gynecologists near Somwarpet, and reliable delivery services, it’s a go-to maternity hospital in Shanivarasanthe. As the best leading multispecialty hospital near Somwarpet, CurePlus hospital is also the most trusted emergency care provider to surrounding communities and continues its mission to deliver affordable and accessible healthcare across Kodagu.",
    gallery: [
      "/Shanivarasanthe/shanivarasanthe2.png",
      "/Shanivarasanthe/shanivarasanthe3.png",
      "/Shanivarasanthe/shanivarasanthe4.png",
      "/Shanivarasanthe/shanivarasanthe1.png"
    ],
    services: [
      "Orthopedics",
      "Gynecology",
      "Pediatrics",
      "General Medicine"
    ],
    facilities: [
      "15+ Beds",
      "Advanced Diagnostic Tools",
      "Private and Semi-Private Wards",
      "Medico-Social Welfare Desk",
      "24/7 Ambulance Service",
      "24/7 Pharmacy Services",
      "OPD & IPD Services",
      "X-Ray",
      "Pathology Lab"
    ],
    infrastructure: "State-of-the-art medical infrastructure, ensuring personalized and specialized treatments.",
    contact: {
      address: "Yashasvi Convention Hall, Kaveri Road, Shanivarasante, Kodagu District, Karnataka 571235",
      pincode: "571235",
      phone: "08226-297298",
      googleMapUrl: "https://maps.app.goo.gl/YxJtsHK2bTQPizSH8",
      embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3521.8378169393604!2d75.88402257507235!3d12.72923858756429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba519002212ce81%3A0x3ea5fcaaccbebb1a!2sCure%20plus%20Hospital!5e1!3m2!1sen!2sin!4v1781870096567!5m2!1sen!2sin",
      geo: {
        lat: 12.729261,
        lng: 75.886582
      }
    },
    seo: {
      title: "Maternity & Orthopedic Hospital Shanivarasanthe | 24x7 CurePlus",
      description: "CurePlus Shanivarasanthe is a trusted 24x7 hospital for pregnancy care, orthopedics & gynecology. Your nearby destination for expert maternity and bone care in Shanivarasanthe.",
      h1: "CurePlus Hospital Shanivarasanthe",
      h2: "24x7 Hospital in Shanivarasanthe Near Me",
      keywords: [
        "24x7 Hospital in Shanivarasanthe Near Me",
        "Hospital near me Shanivarasanthe",
        "Maternity hospital in Shanivarasanthe",
        "Pregnancy care near Shanivarasanthe",
        "Orthopedic hospital Shanivarasanthe",
        "Bone doctor in Shanivarasanthe",
        "Best 24/7 hospital near Somwarpet",
        "Gynecologist near Somwarpet",
        "Joint pain treatment Shanivarasanthe",
        "Delivery hospital near Shanivarasanthe",
        "Emergency care hospital Somwarpet"
      ],
      altTexts: [
        "CurePlus Hospital Shanivarasanthe advanced X-ray services",
        "The pharmacy at CurePlus Hospital Shanivarasanthe",
        "CurePlus Hospital Shanivarasanthe reception desk",
        "Patient ward at CurePlus Hospital Shanivarasanthe"
      ]
    }
  },
  {
    id: 7,
    slug: "cureplus-hospital-ramapura",
    path: "/cureplus-hospital-ramapura",
    name: "CurePlus Hospital Ramapura",
    location: "Hanur Taluk, Chamarajanagar",
    town: "Ramapura",
    district: "Chamarajanagar",
    is24x7: false,
    specialtyTags: [
      "Orthopedics",
      "General Medicine"
    ],
    photo: {
      src: "/images/hospitals/ramapura-hospital",
      alt: "CurePlus Hospital, Ramapura: front view"
    },
    description: "CurePlus Ramapura Hospital was established to serve the rural communities of Chamarajanagar, CurePlus Ramapura Hospital is a 20-bedded multispecialty hospital located in the heart of Ramapura. Operated by Sudhanand Healthcare Solutions, it offers advanced, affordable and accessible healthCare solutions. As a top private hospital near Kollegal, CurePlus Ramapura offers both outpatient and inpatient services, round-the-clock primary emergency care, and fully equipped facilities including advance diagnostics, X-ray, pharmacy, and separate wards for both men and women. Families across Ramapura, Hanur, Kollegal, and nearby areas trust CurePlus for dependable care in orthopedics, general medicine, and maternity. The hospital are well known for its experienced orthopedic doctors, skilled gynecologists, and commitment to maternal and child health, making it a preferred delivery hospital near Ramapura. With 24/7 support, personalized attention, and a strong reputation for providing bone and joint care, CurePlus Ramapura Hospital stands as a reliable healthcare provider for rural Chamarajanagar.",
    gallery: [
      "/rampura/rampura1.png",
      "/rampura/rampura2.png",
      "/rampura/rampura3.png",
      "/rampura/rampura4.png"
    ],
    services: [
      "Orthopedics",
      "General Medicine"
    ],
    facilities: [
      "15+ Beds",
      "Well-Equipped Inpatient Rooms"
    ],
    infrastructure: "Equipped with modern medical tools and a dedicated team of expert medical professionals.",
    contact: {
      address: "#187/186, SBI Road, Ramapura, Hanur (Tq), Chamarajanagar, Karnataka - 571444",
      pincode: "571444",
      phone: "08225-272200",
      googleMapUrl: "https://www.google.com/maps/dir/?api=1&destination=12.003443,77.398654",
      embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.581782663913!2d77.3959855748245!3d12.00341398823002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baec5712cfcac11%3A0xb4f34a7c8c316900!2sCurePlus%20Hospital%20%7C%20Ramapura!5e0!3m2!1sen!2sin!4v1756961208025!5m2!1sen!2sin",
      geo: {
        lat: 12.003443,
        lng: 77.398654
      }
    },
    seo: {
      title: "Hospital in Ramapura Near Me - Ortho & Maternity | CurePlus",
      description: "Looking for maternity or orthopedic care in Ramapura? CurePlus Hospital offers emergency services, gynecologist consultations, and specialized bone treatments near you.",
      h1: "CurePlus Hospital Ramapura",
      h2: "Hospital in Ramapura Near Me - Ortho & Maternity",
      keywords: [
        "Hospital in Ramapura Near Me - Ortho & Maternity",
        "Hospital near me Ramapura",
        "Maternity care near Ramapura",
        "Orthopedic doctor in Ramapura",
        "Emergency care Ramapura",
        "Gynecologist in Ramapura",
        "Best 24/7 hospital near Kollegal",
        "Bone and joint specialist Hanur",
        "Delivery hospital near Ramapura",
        "24/7 emergency hospital Hanur",
        "Best hospital near Kollegal"
      ],
      altTexts: []
    }
  },
  {
    id: 8,
    slug: "cureplus-hospital-terakanambi",
    path: "/cureplus-hospital-terakanambi",
    name: "CurePlus Hospital Terakanambi",
    location: "Gundlupete Taluk, Chamarajanagar",
    town: "Terakanambi",
    district: "Chamarajanagar",
    is24x7: false,
    specialtyTags: [
      "Orthopedics",
      "General Medicine"
    ],
    photo: {
      src: "/images/hospitals/terakanambi-hospital",
      alt: "CurePlus Hospital, Terakanambi: front view"
    },
    description: "CurePlus Terakanambi Hospital was established to strengthen rural healthcare access in Chamarajanagar, CurePlus Terakanambi Hospital is a 20-bedded multispecialty facility located in the town of Terakanambi. Operated by Sudhanand Health Care Solutions, the hospital provides affordable, high-quality medical services with a focus on orthopedic care, general medicine, and maternity support. As the leading private hospital in CurePlus Terakanambi, offers both outpatient and inpatient care, and primary emergency services, modern diagnostic tools, and separate wards for both men and women. Trusted by communities in Terakanambi, Gundlupet, and surrounding areas, the hospital is known for its experienced orthopedic specialists, skilled gynecologists, and reliable maternity services. Whether it’s joint care, delivery of a baby, or primary emergency treatment, CurePlus Terakanambi Hospital ensures round-the-clock attention, accessible and affordable support. It continues to serve as a most trustable medical partner for families across Chamarajanagar District..",
    gallery: [
      "/terakanamb/terakanamb1.png",
      "/terakanamb/terakanamb2.png",
      "/terakanamb/terakanamb3.png",
      "/terakanamb/terakanamb4.png"
    ],
    services: [
      "Orthopedics",
      "General Medicine"
    ],
    facilities: [
      "15+ Beds",
      "Modern Diagnostic and Treatment Facilities",
      "Medico-Social Welfare Desk",
      "24/7 Ambulance Service",
      "24/7 Pharmacy Services",
      "OPD & IPD Services",
      "X-Ray",
      "Pathology Lab"
    ],
    infrastructure: "Equipped with modern diagnostic and treatment facilities to ensure effective patient care.",
    contact: {
      address: "Sri Murugan Complex, Main Road, Opposite SBI Bank, Terakanambi, Gundlupete Taluku, Chamarajanagar District, Karnataka – 571123",
      pincode: "571123",
      phone: "08229-222044",
      googleMapUrl: "https://maps.app.goo.gl/o71fBuvHLRkTSuQP9",
      embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3712.07025889971!2d76.78894149999999!3d11.814157699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf4b003b21f541%3A0x9a5e8306a8745f1a!2sCurePlus%20Hospital%20%7C%20Terakanambi!5e1!3m2!1sen!2sin!4v1781871208398!5m2!1sen!2sin",
      geo: {
        lat: 11.814158,
        lng: 76.788941
      }
    },
    seo: {
      title: "Emergency & Specialty Hospital Terakanambi Near Me | CurePlus",
      description: "CurePlus Terakanambi delivers 24x7 emergency care, gynecology & orthopedic treatments. Visit your nearest best 24/7 hospital with expert bone doctors near Gundlupet.",
      h1: "CurePlus Hospital Terakanambi",
      h2: "Terakanambi Emergency & Specialty Hospital Near Me",
      keywords: [
        "Terakanambi Emergency & Specialty Hospital Near Me",
        "Hospital near me Terakanambi",
        "Gynecologist near me Terakanambi",
        "Emergency hospital in Terakanambi",
        "Orthopedic specialist Terakanambi",
        "Bone specialist near Gundlupet",
        "Multispecialty hospital near Chamarajanagar",
        "Maternity hospital near Terakanambi",
        "24/7 hospital near Gundlupet",
        "Best hospital in Terakanambi",
        "Joint pain treatment Chamarajanagar"
      ],
      altTexts: [
        "Best hospital in Terakanambi CurePlus Hospital with diagnosis",
        "CurePlus Hospital Terakanambi pharmacy with best hospitality",
        "Best hospital in Terakanambi CurePlus Hospital patient ward with best hospitality",
        "CurePlus Hospital Terakanambi reception desk with best hospitality"
      ]
    }
  },
  {
    id: 9,
    slug: "cureplus-hospital-bherya",
    path: "/cureplus-hospital-bherya",
    name: "CurePlus Hospital Bherya",
    location: "Saligrama Taluk, Mysuru",
    town: "Bherya",
    district: "Mysuru",
    is24x7: false,
    specialtyTags: [
      "Orthopedics",
      "General Medicine"
    ],
    photo: {
      src: "/images/hospitals/bherya-hospital",
      alt: "CurePlus Hospital, Bherya: front view"
    },
    description: "CurePlus Bherya Hospital was established to bring advanced medical care to rural Mysuru, CurePlus Bherya Hospital is a 20-bedded multispecialty hospital located in the heart of Bherya, Saligrama Taluk. Operated by Sudhanand Health Care Solutions, it delivers affordable and reliable healthcare services with a focus on orthopedics, general medicine, and maternity care. As the leading private hospital provider near Saligrama, CurePlus Bherya Hospital offers both outpatient and inpatient care, round the clock primary emergency services with modern diagnostics, and separate wards for both men and women all within a clean, well-maintained facility. Families in Bherya, Hunsur, K.R. Nagar, and Chunchanakatte trust CurePlus Bherya hospital for their expert orthopedic, experienced gynecologists, and maternity support doctors. Whether its pregnancy care, joint treatment, or primary emergency healthcare, CurePlus Bherya Hospital is committed to providing timely, affordable, accessible healthcare. Managed by skilled medical professionals and 24/7 service, it continues to be the most trusted healthcare providers across Mysuru’s rural area.",
    gallery: [
      "/bheraya/bheraya1.png",
      "/bheraya/bheraya2.png",
      "/bheraya/bheraya3.png",
      "/bheraya/bheraya4.png"
    ],
    services: [
      "Orthopedics",
      "General Medicine"
    ],
    facilities: [
      "15+ Beds",
      "Advanced Medical Infrastructure",
      "Medico-Social Welfare Desk",
      "24/7 Ambulance Service",
      "24/7 Pharmacy Services",
      "OPD & IPD Services",
      "X-Ray",
      "Pathology Lab"
    ],
    infrastructure: "Designed to provide high-quality medical care with modern infrastructure and expert medical professionals.",
    contact: {
      address: "No. 397/11, Bhataganahalli Road, Bherya Road, Bherya, Saligrama Taluk, Mysuru District – 571601",
      pincode: "571601",
      phone: "08223-200604",
      googleMapUrl: "https://www.google.com/maps/dir/?api=1&destination=12.587292,76.350995",
      embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46705.21324052296!2d76.32570967697197!3d12.603887038298655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba57b0a59715ccd%3A0xba4b1621291082bb!2sCurePlus%20Hospital%20%7C%20Bherya!5e0!3m2!1sen!2sin!4v1756964046353!5m2!1sen!2sin",
      geo: {
        lat: 12.587292,
        lng: 76.350995
      }
    },
    seo: {
      title: "Best 24/7 Hospital Bherya Near Me | CurePlus Emergency Care",
      description: "CurePlus Bherya is your trusted hospital near you for maternity, gynecology, orthopedic and emergency care. Get expert treatment from bone specialists in Bherya today",
      h1: "CurePlus Hospital Bherya",
      h2: "Bherya Hospital Near Me Best 24/7 & Emergency",
      keywords: [
        "Bherya Hospital Near Me - Best 24/7 & Emergency",
        "Hospital near me Bherya",
        "Maternity hospital near me Bherya",
        "Orthopedic doctor in Bherya",
        "Gynecologist in Bherya",
        "Bone specialist in Bherya",
        "best 24/7 hospital near K.R. Nagar",
        "Best hospital near Saligrama",
        "24/7 hospital near Chunchanakatte",
        "Emergency care hospital in Bherya",
        "Pregnancy care near Hunsur"
      ],
      altTexts: [
        "The best hospital in Bherya, CurePlus Bherya Hospital, provides advanced X ray services",
        "The pharmacy at CurePlus Bherya Hospital",
        "Best hospital in Bherya CurePlus Hospital reception desk",
        "CurePlus Kaveri Hospital Bherya Best Multispeciality Hospital with Patient Ward"
      ]
    }
  },
  {
    id: 10,
    slug: "cureplus-hospital-t-narasipura",
    path: "/cureplus-hospital-t-narasipura",
    name: "CurePlus Hospital T. Narasipura",
    location: "Mysuru District",
    town: "T. Narasipura",
    district: "Mysuru",
    is24x7: false,
    specialtyTags: [
      "Orthopedics",
      "General Medicine"
    ],
    photo: {
      src: "/images/hospitals/t-narasipura-hospital",
      alt: "CurePlus Hospital, T. Narasipura: front view"
    },
    description: "CurePlus T. Narasipura Hospital bringing quality healthcare closer to rural Mysuru, CurePlus T. Narasipura Hospital is a 20-bedded multispecialty facility located in the town of T. Narasipura. Run and managed by Sudhanand Health Care Solutions, the hospital provides affordable, accessible, and compassionate medical care with a focus on orthopedics, general medicine, and maternity services. As one of the top and best private hospitals near Mysuru and Bannur, CurePlus T. Narasipura Hospital offers both outpatient and inpatient care for patients, and 24/7 emergency care with modern care diagnostics, and affordable medicines. With experienced orthopedic, joint and bone specialists doctors, the hospital is a trusted healthcare provider in T. Narasipura. Also known for their women’s health offering pregnancy care with top gynecologists, and maternity support. Families from T. Narasipura, Bannur, and surrounding areas choose CurePlus Hospital for respectful, and prompt treatment. CurePlus T. Narasipura Hospital continues to be the most trusted healthcare provider for the people.",
    gallery: [
      "/Narasipura/Narasipura1.png",
      "/Narasipura/Narasipura2.png",
      "/Narasipura/Narasipura3.png",
      "/Narasipura/Narasipura4.png"
    ],
    services: [
      "Orthopedics",
      "General Medicine"
    ],
    facilities: [
      "20 Beds",
      "Advanced Medical Facilities",
      "Medico-Social Welfare Desk",
      "24/7 Ambulance Service",
      "24/7 Pharmacy Services",
      "OPD & IPD Services",
      "X-Ray",
      "Pathology Lab"
    ],
    infrastructure: "Equipped with modern medical technology and infrastructure to deliver top-notch care.",
    contact: {
      address: "#1949/1866, Ground Floor, Vinayaka Colony, T. Narasipura, Karnataka - 571124",
      pincode: "571124",
      phone: "08227-200940",
      googleMapUrl: "https://maps.app.goo.gl/o4y7NueB3miTCM2F9?g_st=iw",
      embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.5082689767887!2d76.9034125748281!3d12.213825988036223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf15ac36adb7ed%3A0x8353cf47b0308560!2sCurePlus%20Hospital%20%7C%20T%20Narasipura!5e0!3m2!1sen!2sin!4v1756964357361!5m2!1sen!2sin",
      geo: {
        lat: 12.214104,
        lng: 76.906696
      }
    },
    seo: {
      title: "Best Hospital in T. Narasipura Near Me | CurePlus T. Narasipura",
      description: "CurePlus T. Narasipura provides advanced maternity care, orthopedic services & gynecology. A top-rated hospital near you for bone, joint, and women's health needs.",
      h1: "CurePlus Hospital T. Narasipura",
      h2: "Best Hospital in T. Narasipura Near Me",
      keywords: [
        "Best Hospital in T. Narasipura Near Me",
        "Hospital near me T. Narasipura",
        "Maternity care near me T. Narasipura",
        "Orthopedic doctor in T. Narasipura",
        "Gynecology hospital near me T. Narasipura",
        "Bone specialist in T. Narasipura",
        "best 24/7 hospital near Bannur",
        "Best hospital near Mysuru",
        "Pregnancy care hospital T. Narasipura",
        "Emergency care near T. Narasipura",
        "24/7 hospital near Bannur"
      ],
      altTexts: [
        "CurePlus Bherya Hospital in T. Narasipura is the best hospital, offering X ray services",
        "The pharmacy at CurePlus Hospital in T. Narasipura for accessible medicines",
        "The best hospital in T. Narasipura with patient wards",
        "Cureplus Hospital T. Narasipura with Operation Theatre for Quality Surgical Care"
      ]
    }
  },
  {
    id: 11,
    slug: "cureplus-hospital-handpost",
    path: "/cureplus-hospital-handpost",
    name: "CurePlus Hospital Handpost",
    location: "H.D. Kote, Mysuru",
    town: "H.D. Kote",
    district: "Mysuru",
    is24x7: true,
    specialtyTags: [
      "Orthopedics",
      "General Medicine"
    ],
    photo: {
      src: "/images/hospitals/handpost-hospital",
      alt: "CurePlus Hospital, Handpost (H.D. Kote): front view"
    },
    description: "CurePlus Handpost Hospital, located in H.D. Kote, Mysuru, is a trusted name in quality rural healthcare bringing expert, affordable, and compassionate medical services to the heart of the community. Recognized as the best hospital in Handpost, it offers specialized care in orthopedics, general medicine, and women’s health, making it a reliable choice for anyone searching for a hospital near me in Handpost. With a well-equipped 20-bed best 24/7 hospital near H.D. Kote. The facility provides comprehensive care from experienced bone specialists in Handpost and skilled gynecologists in Handpost. From pregnancy care near H.D. Kote to expert attention at our maternity hospital near Handpost, patients receive personalized, patient-first care every step of the way. The hospital also ensures access to cost-effective treatment with its wide range of generic medicines and is available round-the-clock, making it a trusted 24/7 hospital near Sargur and a preferred choice for emergency care near Handpost. Whether you're in need of advanced orthopedics in Handpost or general health support, CurePlus Handpost Hospital continues to lead with care, delivering healing with heart to every doorstep.",
    gallery: [
      "/HandPost/Handpost1.png",
      "/HandPost/Handpost3.png",
      "/HandPost/Handpost4.png",
      "/HandPost/Handpost5.png"
    ],
    services: [
      "Orthopedics",
      "General Medicine"
    ],
    facilities: [
      "20 Beds",
      "Diagnostic Services",
      "Medico-Social Welfare Desk",
      "24/7 Ambulance Service",
      "24/7 Pharmacy Services",
      "OPD & IPD Services",
      "X-Ray",
      "Pathology Lab"
    ],
    infrastructure: "Comprehensive medical expertise with advanced diagnostic and rehabilitation services.",
    contact: {
      address: "Yarahalli, H.D. Kote Town, Mysuru District, Karnataka – 571114",
      pincode: "571114",
      phone: "8228257300",
      googleMapUrl: "https://www.google.com/maps/dir/?api=1&destination=12.065953,76.355606",
      embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.6739754242367!2d76.35306477482548!3d12.065938388172345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5f3006933047d%3A0xcac9da2fc57cc4d!2sCure%20plus%20Hospital%20Hand%20post%20%F0%9F%8F%A5!5e0!3m2!1sen!2sin!4v1756964557216!5m2!1sen!2sin",
      geo: {
        lat: 12.065953,
        lng: 76.355606
      }
    },
    seo: {
      title: "24x7 Emergency Hospital in H.D. Kote | CurePlus Healthcare",
      description: "CurePlus H.D. Kote offers round-the-clock care in orthopedics, maternity & emergency services. Visit the best hospital near you with experienced gynecologists and bone specialists.",
      h1: "CurePlus Hospital Handpost",
      h2: "Handpost Hospital Near Me - 24x7 Emergency",
      keywords: [
        "Handpost Hospital Near Me - 24x7 Emergency",
        "Hospital near me Handpost",
        "Maternity hospital near Handpost",
        "Gynecologist in Handpost",
        "Emergency care near Handpost",
        "Orthopedics in Handpost",
        "Bone specialist in Handpost",
        "best 24/7 hospital near H D Kote",
        "24/7 hospital near Sargur",
        "Best hospital in Handpost",
        "Pregnancy care near H D Kote"
      ],
      altTexts: [
        "Best hospital in H D Kote, CurePlus Hospital offers accurate X ray services",
        "Best hospital in H D Kote, CurePlus Hospital provides patients with a reliable pharmacy",
        "Best hospital in H D Kote, CurePlus Hospitals reception desk for patients",
        "Best hospital in H D Kote, CurePlus Hospital patient ward"
      ]
    }
  },
  {
    id: 13,
    slug: "cureplus-hospital-halli-mysuru",
    path: "/cureplus-hospital-halli-mysuru",
    name: "CurePlus Hospital Halli Mysuru",
    location: "Holenarasipura Taluk, Hassan",
    town: "Halli Mysuru",
    district: "Hassan",
    is24x7: false,
    specialtyTags: [
      "Orthopedics",
      "General Medicine"
    ],
    photo: {
      src: "/images/hospitals/halli-mysuru-hospital",
      alt: "CurePlus Hospital, Halli Mysuru: front view with ambulance"
    },
    description: "CurePlus Halli Mysuru Hospital is a multispecialty 20-bedded hospital known for providing both affordable and accessible healthcare to the people of Halli Mysuru and nearby areas. Run and managed by Sudhanand Healthcare Solutions, the hospital provides specialized treatments in the field of orthopedics, general medicine, and women’s healthcare sector. As the leading healthcare provider near Arkalgud and Holenarasipur, CurePlus Halli Mysuru provides comprehensive care through experienced orthopedic and joint pain specialists doctors, supported by modern diagnostics and a clean, well equipped facility. The hospital is also a trusted for women’s healthcare and offering personalized maternity care, skilled gynecologists, and safe pregnancy support for mothers to be in and around Halli Mysuru. By providing cost effective generic medicines and 24/7 primary emergency services healthcare support. CurePlus Halli Mysuru Hospital ensures that quality treatment is always is deliverd. Whether it’s everyday care or urgent emergency support. CurePlus Halli Mysuru Hospital stands by its value to treat every patient with skill, dignity, and heart.",
    gallery: [
      "/halli/halli1.png",
      "/halli/halli2.png",
      "/halli/halli3.png",
      "/halli/halli4.png"
    ],
    services: [
      "Orthopedics",
      "General Medicine"
    ],
    facilities: [
      "20 Beds",
      "Comprehensive Medical Facilities",
      "Medico-Social Welfare Desk",
      "24/7 Ambulance Service",
      "24/7 Pharmacy Services",
      "OPD & IPD Services",
      "X-Ray",
      "Pathology Lab"
    ],
    infrastructure: "Designed to provide high-quality medical care with modern infrastructure and expert medical professionals.",
    contact: {
      address: "Halli Mysuru, Holenarasipura Taluku, Hasan District, Karnataka – 573210",
      pincode: "573210",
      phone: "08175-273114",
      googleMapUrl: "https://maps.app.goo.gl/GggZd7k2pPqbc4na9?g_st=iw",
      embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3892.839693013877!2d76.25488657483575!3d12.658513687628874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba56fe229b09ffb%3A0x99ad3f8d21fdebad!2sCurePlus%20Hospital%20%7C%20Halli%20Mysuru!5e0!3m2!1sen!2sin!4v1756964828370!5m2!1sen!2sin",
      geo: {
        lat: 12.658519,
        lng: 76.257503
      }
    },
    seo: {
      title: "Best 24/7 Hospital in Halli Mysuru Near Me | CurePlus Halli Mysuru",
      description: "Find expert gynecology, maternity, and orthopedic services at CurePlus Halli Mysuru. Your trusted hospital near you for joint pain, bone care & women’s health.",
      h1: "CurePlus Hospital Halli Mysuru",
      h2: "Hospital in Halli Mysuru Near Me - best 24/7",
      keywords: [
        "Hospital in Halli Mysuru Near Me - best 24/7",
        "Hospital near me Halli Mysuru",
        "Maternity care near Halli Mysuru",
        "Orthopedic near me Halli Mysuru",
        "Gynecologist in Halli Mysuru",
        "Joint pain doctor Halli Mysuru",
        "best 24/7 hospital near Holenarasipur",
        "Best hospital near Arkalgud",
        "Bone specialist near Halli Mysuru",
        "Emergency care near Halli Mysuru",
        "Pregnancy care hospital Halli Mysuru"
      ],
      altTexts: [
        "Best hospital in Halli-Mysuru, CurePlus Hospital offers accurate X ray services",
        "Best hospital in Halli-Mysuru, CurePlus Hospital with pharmacy",
        "Best hospital in Halli-Mysuru, CurePlus Hospital reception desk for patients",
        "Best hospital in Halli-Mysuru, CurePlus Hospital patient ward"
      ]
    }
  },
  {
    id: 14,
    slug: "cureplus-hospital-arakere",
    path: "/cureplus-hospital-arakere",
    name: "CurePlus Arakere Hospital",
    location: "Srirangapatna Taluk, Mandya",
    town: "Arakere",
    district: "Mandya",
    is24x7: false,
    specialtyTags: [
      "Orthopedics",
      "General Medicine"
    ],
    // TODO: the client PDF has no new photo for Arakere - this is the existing photo, re-cropped to 16:10.
    // Replace it when a new one arrives (see scripts/optimize-images.py, RETAINED list).
    photo: {
      src: "/images/hospitals/arakere-hospital",
      alt: "CurePlus Hospital, Arakere: front view"
    },
    description: "CurePlus Hospital Arakere is a trusted multispecialty healthcare center serving the people of Arakere and nearby regions with affordable and accessible medical care. Focused on delivering quality treatment with a patient first approach, the hospital provides specialized healthcare services in general medicine, orthopedics, women’s healthcare, maternity care, pediatrics, dermatology, and emergency medical support. Supported by experienced doctors, trained medical staff, and modern healthcare facilities, CurePlus Hospital Arakere continues to be a dependable healthcare destination for families across the region.Known for its compassionate patient care and reliable healthcare services, the hospital offers comprehensive treatment solutions for both routine and emergency medical needs. From preventive health checkups and maternity support to bone and joint care and general medical treatments, the hospital ensures quality healthcare services under one roof. Serving patients from nearby locations like Srirangapatana, Mandya, Kirangur, Belagola, KRS Road, Pandavapura, Bannur Road, Hale Kesare, Mahadevapura, and surrounding villages around Arakere, CurePlus Hospital remains committed to making quality healthcare more accessible and dependable for every patient.",
    gallery: [
      "/arakere/arakere1.jpeg",
      "/arakere/arakere2.jpeg",
      "/arakere/arakere3.jpeg",
      "/arakere/arakere4.jpeg"
    ],
    services: [
      "General Surgery",
      "Orthopedics",
      "Gynecology",
      "Pediatrics",
      "Urology",
      "ENT",
      "General Medicine",
      "Dermatology",
      "Neurology",
      "Pathology",
      "Physiotherapy",
      "Emergency Medicine"
    ],
    facilities: [
      "40+ Beds",
      "2 Operation Theatres",
      "Medico-Social Welfare Desk",
      "UCG Scanning",
      "Physiotherapy",
      "24/7 Ambulance Service",
      "24/7 Pharmacy Services",
      "Expert Care by Qualified Medical Practitioners",
      "OPD & IPD Services",
      "X-Ray and USG Scanning",
      "Pathology Lab"
    ],
    infrastructure: "Equipped with cutting-edge medical equipment and a modern facility to support high-volume surgeries and patient care.",
    contact: {
      address: "Garadi Mane, Main Road, Arakere, Srirangapatana Taluk, Mandya, Karnataka 571415",
      pincode: "571415",
      phone: "+918236253703",
      googleMapUrl: "https://maps.app.goo.gl/b9uUYyfSyuk1GzBD7",
      embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.514566420764!2d76.8136369!3d12.4164988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7596a3d628e7%3A0x27cc236eae9ab3dd!2sCurePlus%20Hospital%20%7C%20Arakere!5e0!3m2!1sen!2sin!4v1779400000000!5m2!1sen!2sin",
      geo: {
        lat: 12.416499,
        lng: 76.813637
      }
    },
    seo: {
      title: "Hospital in Arakere | CurePlus Arakere Hospital",
      description: "CurePlus Arakere Hospital provides affordable, accessible multispecialty healthcare in Arakere, Mandya. Call us or get directions to your nearest CurePlus hospital.",
      h1: "CurePlus Arakere Hospital",
      h2: "Hospital in Arakere",
      keywords: [
        "Hospital in Arakere",
        "Hospital near me Arakere",
        "CurePlus Arakere Hospital",
        "CurePlus Arakere"
      ],
      altTexts: []
    }
  },
  {
    id: 15,
    slug: "cureplus-hospital-huliyurudurga",
    path: "/cureplus-hospital-huliyurudurga",
    name: "CurePlus Huliyurudurga Hospital",
    location: "Kunigal Taluk, Tumkuru",
    town: "Huliyurudurga",
    district: "Tumkuru",
    is24x7: false,
    specialtyTags: [
      "Orthopedics",
      "General Medicine"
    ],
    // TODO: the client PDF has no new photo for Huliyurudurga - this is the existing photo, re-cropped to 16:10.
    // Replace it when a new one arrives (see scripts/optimize-images.py, RETAINED list).
    photo: {
      src: "/images/hospitals/huliyurudurga-hospital",
      alt: "CurePlus Hospital, Huliyurudurga: front view"
    },
    description: "CurePlus Hospital Huliyurudurgais a trusted multispecialty healthcare center serving the people of Huliyurudurga and surrounding regions with affordable and accessible medical care. With a strong commitment towards patient wellbeing and quality treatment, the hospital provides specialized healthcare services in general medicine, orthopedics, women’s healthcare, pediatrics, dermatology, maternity care, and emergency medical support. Backed by experienced doctors, skilled healthcare professio\tnals, and modern medical facilities, CurePlus Hospital Huliyurudurga continues to provide dependable healthcare solutions for families across the region.Known for its compassionate patient care and round the clock medical assistance, the hospital focuses on delivering comprehensive treatment for both routine and emergency healthcare needs. From preventive health checkups and maternity support to bone and joint care and general medical treatments, the hospital ensures reliable healthcare services under one roof. Serving patients from nearby areas like Kunigal, Yediyur, Amruthur, Turuvekere, Huthridurga, Bellur Cross, Nagasandra, Hebbur, Channapatna Road, and surrounding villages around Huliyurudurga, CurePlus Hospital remains dedicated to making quality healthcare accessible for every patient.",
    gallery: [
      "/huliyurudurga/huliyurudurga1.jpeg",
      "/huliyurudurga/huliyurudurga2.jpeg",
      "/huliyurudurga/huliyurudurga3.jpeg",
      "/huliyurudurga/huliyurudurga4.jpeg"
    ],
    services: [
      "General Surgery",
      "Orthopedics",
      "Gynecology",
      "Pediatrics",
      "Urology",
      "ENT",
      "General Medicine",
      "Dermatology",
      "Neurology",
      "Pathology",
      "Physiotherapy",
      "Emergency Medicine"
    ],
    facilities: [
      "40+ Beds",
      "2 Operation Theatres",
      "Medico-Social Welfare Desk",
      "UCG Scanning",
      "Physiotherapy",
      "24/7 Ambulance Service",
      "24/7 Pharmacy Services",
      "Expert Care by Qualified Medical Practitioners",
      "OPD & IPD Services",
      "X-Ray and USG Scanning",
      "Pathology Lab"
    ],
    infrastructure: "Equipped with cutting-edge medical equipment and a modern facility to support high-volume surgeries and patient care.",
    contact: {
      address: "#238B/448, Ground Floor, Huliyurdurga, Kunigal Taluk, Tumkuru District, Karnataka – 572123",
      pincode: "572123",
      phone: "08132200876",
      googleMapUrl: "https://google.com/maps/place/CurePlus+Hospital+%7C+Huliyurudurga/data=!4m2!3m1!1s0x0:0x789eec57686e4860",
      embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3895.556248708238!2d76.90400000000001!3d12.416000000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x789eec57686e4860!2sCurePlus%20Hospital%20%7C%20Huliyurudurga!5e0!3m2!1sen!2sin!4v1779400000000!5m2!1sen!2sin"
    },
    seo: {
      title: "Hospital in Huliyurudurga | CurePlus Huliyurudurga Hospital",
      description: "CurePlus Huliyurudurga Hospital provides affordable, accessible multispecialty healthcare in Huliyurudurga, Tumkuru. Call us or get directions to your nearest CurePlus hospital.",
      h1: "CurePlus Huliyurudurga Hospital",
      h2: "Hospital in Huliyurudurga",
      keywords: [
        "Hospital in Huliyurudurga",
        "Hospital near me Huliyurudurga",
        "CurePlus Huliyurudurga Hospital",
        "CurePlus Huliyurudurga"
      ],
      altTexts: []
    }
  },
  {
    id: 16,
    slug: "cureplus-hospital-udayagiri",
    path: "/cureplus-hospital-udayagiri",
    name: "CurePlus Udayagiri Hospital",
    location: "Mysuru city",
    town: "Udayagiri",
    district: "Mysuru",
    is24x7: false,
    specialtyTags: [
      "Pediatrics",
      "Gynecology",
      "General Medicine"
    ],
    photo: {
      src: "/images/hospitals/udayagiri-hospital",
      alt: "CurePlus Hospital, Udayagiri, Mysuru: front view"
    },
    description: "CurePlus Hospital is a multispecialty healthcare center known for delivering affordable and accessible medical care to the people of Udayagiri and surrounding areas. With a strong focus on patient wellbeing and quality treatment, the hospital provides specialized healthcare services across general medicine, orthopedics, women’s healthcare, pediatrics, dermatology, and emergency care. Supported by experienced doctors, trained medical staff, and modern healthcare facilities, CurePlus Hospital Udayagiri continues to serve as a dependable healthcare destination for families across Mysuru.Recognized for its compassionate care and patient first approach, the hospital offers comprehensive treatment solutions ranging from routine health checkups to advanced medical support. The facility is equipped to handle maternity care, gynecology services, bone and joint care, preventive healthcare, and round the clock emergency medical assistance. Serving patients from areas like Sathyanagara, Rajiv Nagar, Bannimantap, N R Mohalla, Nazarbad, Gandhinagar, Kyathamaranahalli, Tilak Nagar, Shanthinagar, and nearby locations around Udayagiri, CurePlus Hospital remains committed to making quality healthcare more reliable, affordable, and accessible for every patient.",
    gallery: [
      "/udayagiri/udayagiri1.jpeg",
      "/udayagiri/udayagiri2.jpeg",
      "/udayagiri/udayagiri3.jpeg",
      "/udayagiri/udayagiri4.jpeg"
    ],
    services: [
      "General Surgery",
      "Orthopedics",
      "Gynecology",
      "Pediatrics",
      "Urology",
      "ENT",
      "General Medicine",
      "Dermatology",
      "Neurology",
      "Pathology",
      "Physiotherapy",
      "Emergency Medicine"
    ],
    facilities: [
      "40+ Beds",
      "2 Operation Theatres",
      "Medico-Social Welfare Desk",
      "UCG Scanning",
      "Physiotherapy",
      "24/7 Ambulance Service",
      "24/7 Pharmacy Services",
      "Expert Care by Qualified Medical Practitioners",
      "OPD & IPD Services",
      "X-Ray and USG Scanning",
      "Pathology Lab"
    ],
    infrastructure: "Equipped with cutting-edge medical equipment and a modern facility to support high-volume surgeries and patient care.",
    contact: {
      address: "Sy No. 74/2, P & T Road, Sathyanagara, Udayagiri, Mysuru, Karnataka 570029",
      pincode: "570029",
      phone: "0821-2454979",
      googleMapUrl: "https://maps.app.goo.gl/6v7M4u8sYj9rF6rR8",
      embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.003640480675!2d76.66746127503483!3d12.3268204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf713757d93459%3A0xdf0894b7aa97af81!2sCurePlus%20Hospital%20%7C%20Udayagiri!5e0!3m2!1sen!2sin!4v1779400000000!5m2!1sen!2sin",
      geo: {
        lat: 12.32682,
        lng: 76.667461
      }
    },
    seo: {
      title: "Hospital in Udayagiri | CurePlus Udayagiri Hospital",
      description: "CurePlus Udayagiri Hospital provides affordable, accessible multispecialty healthcare in Udayagiri, Mysuru. Call us or get directions to your nearest CurePlus hospital.",
      h1: "CurePlus Udayagiri Hospital",
      h2: "Hospital in Udayagiri",
      keywords: [
        "Hospital in Udayagiri",
        "Hospital near me Udayagiri",
        "CurePlus Udayagiri Hospital",
        "CurePlus Udayagiri"
      ],
      altTexts: []
    }
  },
  {
    id: 17,
    slug: "cureplus-hospital-talakadu",
    path: "/cureplus-hospital-talakadu",
    name: "CurePlus Talakadu Hospital",
    location: "Mysuru District",
    town: "Talakadu",
    district: "Mysuru",
    is24x7: false,
    specialtyTags: [
      "Pediatrics",
      "Orthopedics",
      "Gynecology",
      "General Medicine"
    ],
    photo: {
      src: "/images/hospitals/talakadu-hospital",
      alt: "CurePlus Hospital, Talakadu: front view"
    },
    description: "CurePlus Hospital Talakadu has grown into a dependable healthcare destination for residents in Talakadu and surrounding communities. Recognized for its commitment to affordable and patient centered treatment, the hospital focuses on delivering reliable medical care through experienced doctors, supportive staff, and modern healthcare facilities. Over the years, CurePlus Hospital has continued to strengthen its presence by offering quality healthcare services that meet the everyday medical needs of families across the region.The hospital provides comprehensive healthcare solutions including general medicine, maternity care, gynecology, orthopedics, emergency services, pediatrics, dermatology, and preventive health support, ensuring care is available at all hours of the day. With its emphasis on compassionate treatment and accessible medical attention, CurePlus Hospital remains a preferred healthcare choice for patients from Talakadu and nearby areas like Malavalli, Bannur, T Narasipura, Sosale, Somanathapura, Mudukuthore, Tagadur, Kollegal Road, Nanjangud, and neighboring villages surrounding the region.",
    gallery: [
      "/talkakadu/talkakadu2.jpeg",
      "/talkakadu/talkakadu3.jpeg",
      "/talkakadu/talkakadu4.jpeg"
    ],
    services: [
      "General Surgery",
      "Orthopedics",
      "Gynecology",
      "Pediatrics",
      "Urology",
      "ENT",
      "General Medicine",
      "Dermatology",
      "Neurology",
      "Pathology",
      "Physiotherapy",
      "Emergency Medicine"
    ],
    facilities: [
      "40+ Beds",
      "2 Operation Theatres",
      "Medico-Social Welfare Desk",
      "UCG Scanning",
      "Physiotherapy",
      "24/7 Ambulance Service",
      "24/7 Pharmacy Services",
      "Expert Care by Qualified Medical Practitioners",
      "OPD & IPD Services",
      "X-Ray and USG Scanning",
      "Pathology Lab"
    ],
    infrastructure: "Equipped with cutting-edge medical equipment and a modern facility to support high-volume surgeries and patient care.",
    contact: {
      address: "Old, Street Road, opposite Police Station, Talakad, Karnataka 571122",
      pincode: "571122",
      phone: "08227275761",
      googleMapUrl: "https://google.com/maps?output=search&q=CurePlus+Talakadu+Hospital",
      embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3896.902594609511!2d77.0270039!3d12.1895163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf19006efef1a7%3A0x77ec7408c6013ab9!2sCurePlus%20Hospital%20%7C%20Talakadu!5e0!3m2!1sen!2sin!4v1779400000000!5m2!1sen!2sin",
      geo: {
        lat: 12.189516,
        lng: 77.027004
      }
    },
    seo: {
      title: "Hospital in Talakadu | CurePlus Talakadu Hospital",
      description: "CurePlus Talakadu Hospital provides affordable, accessible multispecialty healthcare in Talakadu, Mysuru. Call us or get directions to your nearest CurePlus hospital.",
      h1: "CurePlus Talakadu Hospital",
      h2: "Hospital in Talakadu",
      keywords: [
        "Hospital in Talakadu",
        "Hospital near me Talakadu",
        "CurePlus Talakadu Hospital",
        "CurePlus Talakadu"
      ],
      altTexts: []
    }
  },
  {
    id: 18,
    slug: "cureplus-hospital-yelandur",
    path: "/cureplus-hospital-yelandur",
    name: "CurePlus Hospital Yelandur",
    location: "Chamarajanagar District",
    town: "Yelandur",
    district: "Chamarajanagar",
    is24x7: false,
    specialtyTags: [
      "Orthopedics",
      "General Medicine"
    ],
    photo: {
      src: "/images/hospitals/yelandur-hospital",
      alt: "CurePlus Hospital, Yelandur: front view"
    },
    description: "CurePlus Hospital Yelandur has become a trusted healthcare center for families in Yelandur and the surrounding areas. Known for its focus on affordable treatment and patient friendly healthcare services, the hospital is committed to delivering dependable medical care through skilled professionals and modern treatment facilities. With a strong emphasis on quality care and patient wellbeing, CurePlus Hospital continues to serve as a reliable medical destination for people across the region.The hospital offers a wide range of healthcare services including general medicine, maternity care, gynecology, orthopedics, emergency care, pediatrics, dermatology, and preventive healthcare support, providing medical assistance round the clock. By combining compassionate care with accessible healthcare services, CurePlus Hospital has earned the trust of patients from Yelandur and nearby locations such as Chamarajanagar, Kollegala, Santhemarahalli, Bandipur Road, Maddur, Honganur, Kesthur, Uppinamole, Mamballi, and neighboring villages around the Yelandur region.",
    gallery: [],
    services: [
      "General Surgery",
      "Orthopedics",
      "Gynecology",
      "Pediatrics",
      "Urology",
      "ENT",
      "General Medicine",
      "Dermatology",
      "Neurology",
      "Pathology",
      "Physiotherapy",
      "Emergency Medicine"
    ],
    facilities: [
      "40+ Beds",
      "2 Operation Theatres",
      "Medico-Social Welfare Desk",
      "UCG Scanning",
      "Physiotherapy",
      "24/7 Ambulance Service",
      "24/7 Pharmacy Services",
      "Expert Care by Qualified Medical Practitioners",
      "OPD & IPD Services",
      "X-Ray and USG Scanning",
      "Pathology Lab"
    ],
    infrastructure: "Equipped with cutting-edge medical equipment and a modern facility to support high-volume surgeries and patient care.",
    contact: {
      address: "No. 24/47, Chamarajanagar Main Road, Yelandur, Karnataka 571441",
      pincode: "571441",
      phone: "+91 82262 00522",
      googleMapUrl: "https://www.google.com/maps/dir/?api=1&destination=12.045972,77.023318",
      embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.476570684628!2d77.023318!3d12.0459722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf23e8143d081b%3A0x907c02b423305e4b!2sCurePlus%20Hospital%20%7C%20Yelandur!5e0!3m2!1sen!2sin!4v1779400000000!5m2!1sen!2sin",
      geo: {
        lat: 12.045972,
        lng: 77.023318
      }
    },
    seo: {
      title: "Hospital in Yelandur | CurePlus Hospital Yelandur",
      description: "CurePlus Hospital Yelandur provides affordable, accessible multispecialty healthcare in Yelandur, Chamarajanagar. Call us or get directions to your nearest CurePlus hospital.",
      h1: "CurePlus Hospital Yelandur",
      h2: "Hospital in Yelandur",
      keywords: [
        "Hospital in Yelandur",
        "Hospital near me Yelandur",
        "CurePlus Hospital Yelandur",
        "CurePlus Yelandur"
      ],
      altTexts: []
    }
  },
  {
    id: 19,
    slug: "cureplus-hospital-martalli",
    path: "/cureplus-hospital-martalli",
    name: "CurePlus Hospital Martalli",
    location: "Hanur Taluk, Chamarajanagar",
    town: "Martalli",
    district: "Chamarajanagar",
    is24x7: false,
    specialtyTags: [
      "Pediatrics",
      "Orthopedics",
      "Gynecology",
      "General Medicine"
    ],
    // TODO: the client PDF has no new photo for Martalli - this is the existing photo, re-cropped to 16:10.
    // Replace it when a new one arrives (see scripts/optimize-images.py, RETAINED list).
    photo: {
      src: "/images/hospitals/martalli-hospital",
      alt: "CurePlus Hospital, Martalli: reception area"
    },
    description: "CurePlus Hospital Martalli is a trusted multispecialty healthcare center serving the people of Martalli and nearby regions with affordable and accessible medical care. Focused on delivering quality treatment with a patient first approach, the hospital provides specialized healthcare services in general medicine, orthopedics, women’s healthcare, maternity care, pediatrics, dermatology, and emergency medical support. Supported by experienced doctors, trained medical staff, and modern healthcare facilities, CurePlus Hospital Martalli continues to be a dependable healthcare destination for families across the region.Known for its compassionate patient care and reliable healthcare services, the hospital offers comprehensive treatment solutions for both routine and emergency medical needs. From preventive health checkups and maternity support to bone and joint care and general medical treatments, the hospital ensures quality healthcare services under one roof. Serving patients from nearby locations like Kollegala, Yelandur, Santhemarahalli, Chamarajanagar, Hanur, Cowdalli, Hoogyam, Mangala, Kunagalli, and surrounding villages around Martalli, CurePlus Hospital remains committed to making quality healthcare more accessible and dependable for every patient.**",
    gallery: [],
    services: [
      "General Surgery",
      "Orthopedics",
      "Gynecology",
      "Pediatrics",
      "Urology",
      "ENT",
      "General Medicine",
      "Dermatology",
      "Neurology",
      "Pathology",
      "Physiotherapy",
      "Emergency Medicine"
    ],
    facilities: [
      "40+ Beds",
      "2 Operation Theatres",
      "Medico-Social Welfare Desk",
      "UCG Scanning",
      "Physiotherapy",
      "24/7 Ambulance Service",
      "24/7 Pharmacy Services",
      "Expert Care by Qualified Medical Practitioners",
      "OPD & IPD Services",
      "X-Ray and USG Scanning",
      "Pathology Lab"
    ],
    infrastructure: "Equipped with cutting-edge medical equipment and a modern facility to support high-volume surgeries and patient care.",
    contact: {
      address: "Main road, Martalli, Hanur, Karnataka 571320",
      pincode: "571320",
      phone: "08225 200682",
      googleMapUrl: "https://maps.app.goo.gl/R3oH6ctD8AyPqqMv7",
      embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1628.745028050423!2d77.48638485717906!3d11.986265918938436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baec7c6587f5b3d%3A0xd2513681f9a66006!2sCurePlus%20Hospital%20%7C%20Martalli!5e1!3m2!1sen!2sin!4v1781870658052!5m2!1sen!2sin",
      geo: {
        lat: 11.986266,
        lng: 77.486385
      }
    },
    seo: {
      title: "Hospital in Martalli | CurePlus Hospital Martalli",
      description: "CurePlus Hospital Martalli provides affordable, accessible multispecialty healthcare in Martalli, Chamarajanagar. Call us or get directions to your nearest CurePlus hospital.",
      h1: "CurePlus Hospital Martalli",
      h2: "Hospital in Martalli",
      keywords: [
        "Hospital in Martalli",
        "Hospital near me Martalli",
        "CurePlus Hospital Martalli",
        "CurePlus Martalli"
      ],
      altTexts: []
    }
  }
];

export const HOSPITAL_COUNT = hospitals.length;

export const getHospitalById = (id: number) => hospitals.find((h) => h.id === id);
export const getHospitalBySlug = (slug: string) => hospitals.find((h) => h.slug === slug);

export const hospitalUrl = (h: Hospital) => `${SITE_URL}${h.path}`;

export const districts = Array.from(new Set(hospitals.map((h) => h.district))).sort();

/** "0821-2454798" / "8228257300" / "+91 82262 00522"  ->  "tel:+918212454798" etc. */
export const telHref = (phone: string) => {
  let digits = phone.replace(/\D/g, '');
  if (digits.length === 12 && digits.startsWith('91')) digits = digits.slice(2);
  if (digits.length === 11 && digits.startsWith('0')) digits = digits.slice(1);
  return `tel:+91${digits}`;
};

/** Best available "Get Directions" link for a hospital. */
export const directionsUrl = (h: Hospital) => {
  const { googleMapUrl, geo, address } = h.contact;
  if (googleMapUrl) return googleMapUrl;
  if (geo) return `https://www.google.com/maps/dir/?api=1&destination=${geo.lat},${geo.lng}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${h.name}, ${address}`)}`;
};

/** schema.org Hospital/LocalBusiness, generated so it can never drift from the page content. */
export const buildHospitalJsonLd = (h: Hospital) => {
  const { geo, pincode, address, phone } = h.contact;
  return {
    '@context': 'https://schema.org',
    '@type': ['Hospital', 'LocalBusiness'],
    name: h.name,
    url: hospitalUrl(h),
    image: `${SITE_URL}${h.photo.src}.jpg`,
    description: h.seo.description,
    telephone: phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: address,
      addressLocality: h.town,
      addressRegion: 'Karnataka',
      ...(pincode ? { postalCode: pincode } : {}),
      addressCountry: 'IN',
    },
    ...(geo ? { geo: { '@type': 'GeoCoordinates', latitude: geo.lat, longitude: geo.lng } } : {}),
    // Opening hours are only declared for hospitals that are flagged as 24x7.
    ...(h.is24x7
      ? {
          openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            opens: '00:00',
            closes: '23:59',
          },
        }
      : {}),
    parentOrganization: { '@type': 'Organization', name: SITE.parent },
    sameAs: [SOCIAL.facebook, SOCIAL.instagram, SOCIAL.youtube, SITE_URL],
  };
};
