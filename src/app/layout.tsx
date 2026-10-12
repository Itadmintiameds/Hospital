import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "./component/Header";
import Footer from "./component/FooterSection";
import StickyCallBar from "./component/StickyCallBar";
import ScrollEffects from "./component/ScrollEffects";
import JsonLd from "./component/JsonLd";
import ChatBot from "./component/ChatBot";
import { HOSPITAL_COUNT, districts } from "./data/Hospital";
import { SITE, SITE_URL, SOCIAL } from "./data/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const DEFAULT_TITLE = "CurePlus Hospitals | Quality, Affordable Healthcare Closer to Home";
const DEFAULT_DESCRIPTION = `A network of ${HOSPITAL_COUNT}+ hospitals bringing quality, affordable healthcare to rural and semi-urban Karnataka: specialists, diagnostics, pharmacy and emergency care.`;
const OG_IMAGE = "/images/hospitals/halli-mysuru-hospital.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE.name,
    locale: "en_IN",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 750, alt: "CurePlus Hospital with ambulance, Halli Mysuru" }],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#311745",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  name: SITE.name,
  url: SITE_URL,
  logo: `${SITE_URL}/CUREPLUS%20HOSPITALS.png`,
  description: DEFAULT_DESCRIPTION,
  telephone: "+91-9035193777",
  email: SITE.emailContact,
  parentOrganization: { "@type": "Organization", name: SITE.parent },
  areaServed: districts.map((district) => ({ "@type": "AdministrativeArea", name: `${district}, Karnataka` })),
  sameAs: [SOCIAL.facebook, SOCIAL.instagram, SOCIAL.linkedin, SOCIAL.youtube],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Enables the scroll-reveal styles only when JavaScript is running */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className={`${geistSans.variable} pb-[4.75rem] antialiased md:pb-0`}>
        <a
          href="#main"
          className="sr-only z-[100] rounded-full bg-brand-900 px-5 py-3 font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer />
        <StickyCallBar />
        <ChatBot />
        <ScrollEffects />
        <JsonLd data={organizationJsonLd} />

        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-1L05LV3S1T" strategy="lazyOnload" />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1L05LV3S1T');
          `}
        </Script>
      </body>
    </html>
  );
}
