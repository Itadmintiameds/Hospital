import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet Our Team | CurePlus Hospitals Mysore",

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
    title: "Meet Our Team | CurePlus Hospitals Mysore",

    description:
      "Meet the expert leadership and healthcare professionals driving quality patient care at CurePlus Hospitals across Karnataka",

    url: "https://www.cureplushospitals.com/team",

    siteName: "CurePlus Hospitals",

    locale: "en_IN",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Meet Our Team | CurePlus Hospitals Mysore",

    description:
      "Meet the expert leadership and healthcare professionals driving quality patient care at CurePlus Hospitals across Karnataka",
  },
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}