// // /app/hospital/[slug]/page.tsx

// import { hospitals } from '@/app/data/Hospital';
// import { Metadata } from 'next';
// import HospitalPageClient from './HospitalPageClient';
// import { notFound } from 'next/navigation';
// import Script from 'next/script';

// // Define a type for the component's props
// type Props = {
//   params: { slug: string };
// };

// // --- NEW: A dedicated async function to get hospital data ---
// async function getHospital(slug: string) {
//   const hospitalId = Number(slug);
//   const hospital = hospitals.find((h) => h.id === hospitalId);
//   return hospital;
// }
// // type Props = {
// //   params: { slug: string };
// // };

// // --- SEO METADATA FUNCTION ---
// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   // Use the new async function
//   const hospital = await getHospital(params.slug);

//   if (!hospital) {
//     return { title: 'Hospital Not Found' };
//   }

//   const seo = hospital.seo;
//   const title = seo?.title || `Best Hospital in ${hospital.location} | ${hospital.name}`;
//   const description = seo?.description || `${hospital.name} is a leading multispecialty hospital in ${hospital.location}.`;
//   const keywords = seo?.keywords || [hospital.name, hospital.location, 'hospital', 'healthcare'];
//   const canonical = seo?.canonical || `https://cureplushospitals.com/our-hospitals/${hospital.id}`;

//   return {
//     title,
//     description,
//     keywords,
//     alternates: {
//       canonical: canonical,
//     },
//     openGraph: {
//       title,
//       description,
//       url: canonical,
//       images: [{
//           url: `https://cureplushospitals.com${hospital.imageUrl}`,
//           alt: title,
//       }],
//       type: 'website',
//     },
//     robots: {
//       index: true,
//       follow: true,
//     },
//   };
// }

// // --- MAIN PAGE COMPONENT (SERVER COMPONENT) ---
// const Page = async ({ params }: Props) => {
//   // Use the new async function
//   const hospital = await getHospital(params.slug);

//   if (!hospital) {
//     notFound();
//   }

//   return (
//     <>
//       {/* Add JSON-LD Schema Markup here */}
//       {hospital.jsonLd && (
//         <Script
//           id="hospital-schema"
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify(hospital.jsonLd),
//           }}
//         />
//       )}
//       <HospitalPageClient hospital={hospital} />
//     </>
//   );
// };

// export default Page;

// /app/hospital/[slug]/page.tsx

import { hospitals } from '@/app/data/Hospital';
import { Metadata } from 'next';
import HospitalPageClient from './HospitalPageClient';
import { notFound } from 'next/navigation';
import Script from 'next/script';

// Define a type for the component's props
type Props = {
  params: Promise<{ slug: string }>; // ✅ must be Promise in Next.js 15
};

// --- NEW: A dedicated async function to get hospital data ---
async function getHospital(slug: string) {
  const hospitalId = Number(slug);
  const hospital = hospitals.find((h) => h.id === hospitalId);
  return hospital;
}

// --- SEO METADATA FUNCTION ---
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params; // ✅ await params
  const hospital = await getHospital(slug);

  if (!hospital) {
    return { title: 'Hospital Not Found' };
  }

  const seo = hospital.seo;
  const title =
    seo?.title || `Best Hospital in ${hospital.location} | ${hospital.name}`;
  const description =
    seo?.description ||
    `${hospital.name} is a leading multispecialty hospital in ${hospital.location}.`;
  const keywords =
    seo?.keywords ||
    [hospital.name, hospital.location, 'hospital', 'healthcare'];
  const canonical = seo?.canonical

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      images: [
        {
          url: `https://cureplushospitals.com${hospital.imageUrl}`,
          alt: title,
        },
      ],
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

// --- MAIN PAGE COMPONENT (SERVER COMPONENT) ---
const Page = async ({ params }: Props) => {
  const { slug } = await params; // ✅ await params
  const hospital = await getHospital(slug);

  if (!hospital) {
    notFound();
  }

  return (
    <>
      {/* Add JSON-LD Schema Markup here */}
      {hospital.jsonLd && (
        <Script
          id="hospital-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(hospital.jsonLd),
          }}
        />
      )}
      <HospitalPageClient hospital={hospital} />
    </>
  );
};

export default Page;
