import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About CurePlus Hospitals | Best Hospital in Mysore",

  description:
    "Learn about CurePlus Hospitals, offering advanced multispeciality healthcare, diagnostics, and emergency services across Karnataka.",

  alternates: {
    canonical: "https://www.cureplushospitals.com/about",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}