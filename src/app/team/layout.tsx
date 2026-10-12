import type { Metadata } from "next";
import { OG_IMAGES } from "../data/site";

export const metadata: Metadata = {
  title: "Meet Our Team | CurePlus Hospitals Mysuru",

  description:
    "Meet the expert leadership and healthcare professionals driving quality patient care at CurePlus Hospitals across Karnataka",

  alternates: {
    canonical: "https://www.cureplushospitals.com/team",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Meet Our Team | CurePlus Hospitals Mysuru",

    description:
      "Meet the expert leadership and healthcare professionals driving quality patient care at CurePlus Hospitals across Karnataka",

    url: "https://www.cureplushospitals.com/team",

    siteName: "CurePlus Hospitals",

    locale: "en_IN",

    type: "website",
    images: OG_IMAGES,
  },

  twitter: {
    card: "summary_large_image",

    title: "Meet Our Team | CurePlus Hospitals Mysuru",

    description:
      "Meet the expert leadership and healthcare professionals driving quality patient care at CurePlus Hospitals across Karnataka",
    images: OG_IMAGES.map((i) => i.url),
  },
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}