"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-blue-900 py-2">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png" // replace with your logo path
            alt="Apollo Hospital"
            width={50}
            height={50}
            className="object-contain"
          />
          <span className="font-bold text-lg">Apollo Hospital</span>
        </div>

        {/* Facebook Link */}
        <div className="flex items-center gap-2">
          <Link
            href="https://web.facebook.com/ApolloHospitalMB"
            target="_blank"
            className="flex items-center gap-1 hover:text-[#0dcaf0] transition"
          >
            <Image
              src="/fb.webp" // make sure this is in public folder
              alt="Facebook"
              width={24}
              height={24}
              className="object-contain"
            />
            <span>Facebook</span>
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-800 text-center md:text-right">
          © 2025 Apollo Hospital. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
