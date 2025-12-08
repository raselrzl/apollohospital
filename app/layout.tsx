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

export const metadata: Metadata = {
  title: "Apollo Hospital",
  description:
    "Apollo Hospital, your trusted healthcare partner in Moulvibazar.",
};

const tiroBangla = Tiro_Bangla({
  weight: ["400"],
  subsets: ["bengali"],
  variable: "--font-tiro-bangla",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" suppressHydrationWarning className="bg-[#f0f8ff]">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@400;700&family=Tiro+Bangla&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${tiroBangla.variable} antialiased`}>
        {/* Fixed Top Bar and Navbar */}
        <div className="fixed top-0 left-0 w-full z-100">
          <TopAlertBar />
          <Navbar />
        </div>

        {/* Spacer to prevent overlap */}
        <div className="pt-28 md:pt-[126px]">
          {children}
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}
