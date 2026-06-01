import type { Metadata } from "next";

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
  },

  twitter: {
    card: "summary_large_image",

    title: "Best Multispeciality Hospital Services | CurePlus",

    description:
      "Explore expert healthcare services at CurePlus Hospitals including orthopedics, gynecology, pediatrics, diagnostics & emergency care.",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}