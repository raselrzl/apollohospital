"use client";

export default function TopAlertBar() {
  return (
    <div className="w-full bg-red-600 text-white text-sm md:text-base flex items-center justify-center px-4 py-2 font-semibold">
      <span className="flex items-center space-x-2">
        <span>
          <a
            href="tel:+8801334913290"
            className="flex items-center gap-2 w-full"
          >
            অ্যাপোলো ২৪/৭ অ্যাম্বুলেন্স সার্ভিস: ☎️ +880 1334-913290
          </a>
        </span>
      </span>
    </div>
  );
}
