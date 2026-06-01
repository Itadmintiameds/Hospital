import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hospitals | CurePlus Healthcare Network",

  description:
    "Explore CurePlus Hospitals’ healthcare network across Karnataka offering multispeciality care, diagnostics, emergency, and pharmacy services.",

  alternates: {
    canonical: "https://www.cureplushospitals.com/hospitals",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Hospitals | CurePlus Healthcare Network",

    description:
      "Explore CurePlus Hospitals’ healthcare network across Karnataka offering multispeciality care, diagnostics, emergency, and pharmacy services.",

    url: "https://www.cureplushospitals.com/hospitals",

    siteName: "CurePlus Hospitals",

    locale: "en_IN",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Hospitals | CurePlus Healthcare Network",

    description:
      "Explore CurePlus Hospitals’ healthcare network across Karnataka offering multispeciality care, diagnostics, emergency, and pharmacy services.",
  },
};

export default function HospitalsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}