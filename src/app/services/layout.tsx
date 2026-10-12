import type { Metadata } from "next";
import { OG_IMAGES } from "../data/site";

export const metadata: Metadata = {
  title: "Best Multispeciality Hospital Services | CurePlus",

  description:
    "Explore expert healthcare services at CurePlus Hospitals including orthopedics, gynecology, pediatrics, diagnostics & emergency care.",

  alternates: {
    canonical: "https://www.cureplushospitals.com/services",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      "max-image-preview": "large",
    },
  },

  openGraph: {
    title: "Best Multispeciality Hospital Services | CurePlus",

    description:
      "Explore expert healthcare services at CurePlus Hospitals including orthopedics, gynecology, pediatrics, diagnostics & emergency care.",

    url: "https://www.cureplushospitals.com/services",

    siteName: "CurePlus Hospitals",

    locale: "en_IN",

    type: "website",
    images: OG_IMAGES,
  },

  twitter: {
    card: "summary_large_image",

    title: "Best Multispeciality Hospital Services | CurePlus",

    description:
      "Explore expert healthcare services at CurePlus Hospitals including orthopedics, gynecology, pediatrics, diagnostics & emergency care.",
    images: OG_IMAGES.map((i) => i.url),
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}