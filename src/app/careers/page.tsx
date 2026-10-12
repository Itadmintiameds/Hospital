import { Metadata } from "next";
import { OG_IMAGES } from "../data/site";
import CareersClient from "./CareersClient";

export const metadata: Metadata = {
  title: "Careers at CurePlus Hospitals | Healthcare Jobs Karnataka",
  description:
    "Join CurePlus Hospitals and explore healthcare jobs in Karnataka. Apply for doctor, nurse, technician, and hospital career opportunities today.",

  alternates: {
    canonical: "https://www.cureplushospitals.com/careers",
  },

  openGraph: {
    title: "Careers at CurePlus Hospitals | Healthcare Jobs Karnataka",
    description:
      "Join CurePlus Hospitals and explore healthcare jobs in Karnataka. Apply for doctor, nurse, technician, and hospital career opportunities today.",
    url: "https://www.cureplushospitals.com/careers",
    siteName: "CurePlus Hospitals",
    type: "website",
    images: OG_IMAGES,
  },

  twitter: {
    card: "summary_large_image",
    title: "Careers at CurePlus Hospitals | Healthcare Jobs Karnataka",
    description:
      "Join CurePlus Hospitals and explore healthcare jobs in Karnataka. Apply for doctor, nurse, technician, and hospital career opportunities today.",
    images: OG_IMAGES.map((i) => i.url),
  },
};

export default function CareersPage() {
  return (
    <>
      <CareersClient />
    </>
  );
}