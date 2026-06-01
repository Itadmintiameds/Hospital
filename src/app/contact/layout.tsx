import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact CurePlus Hospitals | 24/7 Healthcare Support",

  description:
    "Contact CurePlus Hospitals for appointments, emergency care, and healthcare support across Karnataka. Call us anytime for assistance.",

  alternates: {
    canonical: "https://www.cureplushospitals.com/contact",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Contact CurePlus Hospitals | 24/7 Healthcare Support",

    description:
      "Contact CurePlus Hospitals for appointments, emergency care, and healthcare support across Karnataka. Call us anytime for assistance.",

    url: "https://www.cureplushospitals.com/contact",

    siteName: "CurePlus Hospitals",

    locale: "en_IN",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Contact CurePlus Hospitals | 24/7 Healthcare Support",

    description:
      "Contact CurePlus Hospitals for appointments, emergency care, and healthcare support across Karnataka. Call us anytime for assistance.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}