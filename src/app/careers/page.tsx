import FooterSection from "../component/FooterSection";
import { Metadata } from "next";
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
  },

  twitter: {
    card: "summary_large_image",
    title: "Careers at CurePlus Hospitals | Healthcare Jobs Karnataka",
    description:
      "Join CurePlus Hospitals and explore healthcare jobs in Karnataka. Apply for doctor, nurse, technician, and hospital career opportunities today.",
  },
};

export default function CareersPage() {
  return (
    <>
      <CareersClient />
      <FooterSection />
    </>
  );
}