import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Noto_Sans_Bengali,
  Tiro_Bangla,
} from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
import TopAlertBar from "./component/TopAlertBar";
import ScrollToTop from "./component/ScrollToTop";
import EmergencyBadge from "./component/EmergencyBadge";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoBengali = Noto_Sans_Bengali({
  weight: ["400", "700"],
  subsets: ["bengali"],
  variable: "--font-noto-bengali",
});

const tiroBangla = Tiro_Bangla({
  weight: ["400"],
  subsets: ["bengali"],
  variable: "--font-tiro-bangla",
});

// ⭐ SEO + Google Ranking Optimization
export const metadata: Metadata = {
  metadataBase: new URL("https://apollohospitalmb.com"),
 title: "Apollo Hospital Moulvibazar – Best Healthcare & Emergency Services",
  description:
    "Apollo Hospital Moulvibazar provides top-notch healthcare, specialist doctors, diagnostics, and emergency services. Trusted hospital in Moulvibazar, Bangladesh.",
  keywords: [
    // Hospital Brand Keywords
    "Apollo Hospital",
    "Apollo Hospital Moulvibazar",
    "Apollo Medical Center",
    "NICL Hospital Moulvibazar",
    "NICL Hospital",
    "Best hospital Moulvibazar",
    "Private hospital Moulvibazar",
    "Trusted hospital Moulvibazar",
    "Healthcare Bangladesh",
    "Top hospitals Bangladesh",

    // Location & Local Search
    "Hospital Moulvibazar",
    "Emergency hospital Moulvibazar",
    "Doctors Moulvibazar",
    "Specialist doctors Moulvibazar",
    "Child specialist Moulvibazar",
    "Gynecologist Moulvibazar",
    "Cardiologist Moulvibazar",
    "Orthopedic doctor Moulvibazar",
    "Eye specialist Moulvibazar",
    "ENT specialist Moulvibazar",

    // Diagnostics & Services
    "Diagnostics Center Moulvibazar",
    "Pathology Moulvibazar",
    "Blood test Moulvibazar",
    "ECG test Moulvibazar",
    "X-ray center Moulvibazar",
    "Ultrasound Moulvibazar",
    "Full body checkup Moulvibazar",
    "Medical test Moulvibazar",
    "Health package Moulvibazar",

    // Emergency & Quick Care
    "24/7 hospital Moulvibazar",
    "Emergency services Moulvibazar",
    "Ambulance Moulvibazar",
    "ICU Moulvibazar",
    "Emergency healthcare Bangladesh",

    // Long-tail / SEO Boosters
    "Best affordable hospital Moulvibazar",
    "Top doctors in Moulvibazar",
    "Best maternity care Moulvibazar",
    "Children's hospital Moulvibazar",
    "Advanced medical services Moulvibazar",
    "Reliable healthcare Moulvibazar",
    "Hospital with specialist doctors Moulvibazar",
    "Medical packages Moulvibazar"
  ],
  openGraph: {
    title: "Apollo Hospital Moulvibazar",
    description:
      "Trusted healthcare services, emergency support, specialist doctors, diagnostics and modern medical care.",
    url: "https://apollohospitalmb.com",
    siteName: "Apollo Hospital Moulvibazar",
    locale: "bn_BD",
    type: "website",
    images: [
      {
        url: "https://apollohospitalmb.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Apollo Hospital Moulvibazar",
      },
    ],
  },
  alternates: {
    canonical: "https://apollohospitalmb.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" suppressHydrationWarning className="bg-[#f0f8ff]">
      <head>
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@400;700&family=Tiro+Bangla&display=swap"
          rel="stylesheet"
        />

        {/* ⭐ Google Structured Data (SEO Boost) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Hospital",
              name: "Apollo Hospital Moulvibazar",
              url: "https://apollohospitalmb.com",
              telephone: "+8801334913290",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Moulvibazar",
                addressCountry: "Bangladesh",
              },
              image: "https://apollohospitalmb.com/og-image.png",
              description:
                "Apollo Hospital Moulvibazar offers emergency services, diagnostics, specialist doctors and modern healthcare.",
            }),
          }}
        />
      </head>

      <body
        className={`${tiroBangla.variable} antialiased bg-[#f0f8ff]`}
      >
        {/* Fixed Top Bar + Navbar */}
        <div className="fixed top-0 left-0 w-full z-100">
          <TopAlertBar />
          <Navbar />
        </div>

        <EmergencyBadge />

        {/* Prevent content behind navbar */}
        <div className="pt-28 md:pt-[126px]">
          {children}
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}
