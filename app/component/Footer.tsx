
"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-2 text-blue-900">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row md:gap-6">
        {/* HOSPITAL LOGO */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Apollo Hospital"
            width={50}
            height={50}
            className="object-contain"
          />
          <span className="text-lg font-bold">
            Apollo Specialized Hospital
          </span>
        </div>

        {/* FACEBOOK LINK */}
        <div className="flex items-center gap-2">
          <Link
            href="https://web.facebook.com/ApolloHospitalMB"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 transition hover:text-[#0dcaf0]"
          >
            <Image
              src="/fb.webp"
              alt="Facebook"
              width={40}
              height={40}
              className="object-contain"
            />
            <span>Facebook</span>
          </Link>
        </div>

        {/* COPYRIGHT */}
        <div className="text-center text-sm text-gray-800 md:text-right">
          © 2025 Apollo Hospital. All rights reserved.
        </div>
      </div>

      {/* WEBSITE DEVELOPER CREDIT */}
      <div className="mt-2 flex justify-center border-t border-gray-200 pt-2">
        <a
          href="https://www.souveral.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Website developed by Souveral"
          className="inline-flex items-center transition-opacity hover:opacity-75"
        >
          <Image
            src="/sov.png"
            alt="Souveral"
            width={85}
            height={24}
            className="h-7 w-auto object-contain"
          />
        </a>
      </div>
    </footer>
  );
}
