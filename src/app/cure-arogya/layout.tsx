import type { Metadata } from "next";
import { OG_IMAGES } from "../data/site";

const TITLE = "CurePlus Arogya Card | Family & Senior Healthcare Plans";
const DESCRIPTION =
  "CurePlus Arogya healthcare card: Kutumba family plan and Hiriya Nagarika senior plan with 25% savings. Join the early-access list.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/cure-arogya" },
  robots: { index: true, follow: true },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.cureplushospitals.com/cure-arogya",
    siteName: "CurePlus Hospitals",
    locale: "en_IN",
    type: "website",
    images: OG_IMAGES,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: OG_IMAGES.map((i) => i.url),
  },
};

export default function CureArogyaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
