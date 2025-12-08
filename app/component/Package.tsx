"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Package() {
  return (
    <section id="package" className="py-16 bg-[#e0f7fa]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-2xl md:text-5xl font-extrabold text-blue-900 leading-tight"
        >
          বেবি ডেলিভারি প্যাকেজ
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-lg text-gray-700 mt-4 mb-10"
        >
          আপনার সন্তানের নিরাপদ জন্ম এবং মা–এর যত্নের জন্য আমরা বিশেষ প্যাকেজ
          অফার করি। বিস্তারিত জানতে কল করুন।
        </motion.p>

        <div className="relative max-w-3xl mx-auto">
          <Image
            src="/pack1.webp"
            alt="Baby Delivery Package"
            width={1024}
            height={600}
            className="rounded-2xl shadow-lg object-cover"
          />
        </div>

        <a
          href="tel:+8801334913290"
          className="inline-block mt-6 bg-blue-900 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition hover:bg-blue-700"
        >
          📞 আরও জানতে কল করুন
        </a>
      </div>
    </section>
  );
}
