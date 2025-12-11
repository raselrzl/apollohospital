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
  title: {
    default: "Apollo Hospital Moulvibazar — Leading Healthcare",
    template: "%s | Apollo Hospital Moulvibazar",
  },
  description:
    "Apollo Hospital Moulvibazar provides emergency services, diagnostics, specialist doctors, and trusted healthcare in Moulvibazar.",
  keywords: [
    "Apollo Hospital",
    "Apollo Hospital Moulvibazar",
    "Hospital Moulvibazar",
    "Best hospital Moulvibazar",
    "Emergency hospital",
    "Doctors Moulvibazar",
    "Diagnostics Center Moulvibazar",
    "Healthcare Bangladesh",
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
