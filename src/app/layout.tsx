import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./component/Header";
import ChatBot from "./component/ChatBot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Best Hospital in Mysore | CurePlus Multispeciality Hospitals",

  description:
    "CurePlus Hospitals offers advanced multispeciality healthcare, emergency services, diagnostics, and expert doctors across Mysore & Karnataka.",

  alternates: {
    canonical: "https://www.cureplushospitals.com/",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/CUREPLUS HOSPITALS.png",
  },

  openGraph: {
    title: "Best Hospital in Mysore | CurePlus Multispeciality Hospitals",

    description:
      "CurePlus Hospitals offers advanced multispeciality healthcare, emergency services, diagnostics, and expert doctors across Mysore & Karnataka.",

    url: "https://www.cureplushospitals.com/",

    siteName: "CurePlus Hospitals",

    locale: "en_IN",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Best Hospital in Mysore | CurePlus Multispeciality Hospitals",

    description:
      "CurePlus Hospitals offers advanced multispeciality healthcare, emergency services, diagnostics, and expert doctors across Mysore & Karnataka.",
  },
};

const customNavLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Team", href: "/team" },
  { name: "Our Hospitals", href: "/hospitals" },
  { name: "Our Specialities", href: "/services" },
  { name: "Contact Us", href: "/contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header navLinks={customNavLinks} />
        {children}
        <ChatBot />
      </body>
    </html>
  );
}