"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AmbulanceService() {
  return (
    <section className="relative overflow-hidden py-16 px-6 md:px-12 bg-gray-50 border-b">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
        
        {/* Left - Red accent with text */}
        <motion.div
          className="md:w-1/2 bg-red-600 rounded-2xl p-8 md:p-12 text-white flex flex-col justify-center items-start space-y-6 shadow-lg"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-extrabold">অ্যাম্বুলেন্স সার্ভিস</h2>
          <p className="md:text-lg">
            জরুরি মুহূর্তে আমরা সর্বদা পাশে আছি। কল করুন আমাদের ২৪/৭ অ্যাম্বুলেন্স সার্ভিসের জন্য।
          </p>
          <a
            href="tel:+8801334913290"
            className="relative inline-block bg-white text-red-600 font-bold py-3 px-6 rounded-lg shadow-lg hover:scale-105 transition transform"
          >
            ☎️ +880 1334-913290
          </a>
        </motion.div>

        {/* Right - Ambulance image and 24/7 badge */}
        <motion.div
          className="md:w-1/2 mt-8 md:mt-0 relative flex justify-center items-center"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/services/ambulance.png"
            alt="Ambulance"
            width={400}
            height={300}
            className="object-contain"
          />
          {/* 24/7 3D Animated Badge */}
          <motion.div
            className="absolute top-0 right-0 md:top-8 md:right-8 w-32 h-32 flex justify-center items-center rounded-full bg-red-600 shadow-2xl text-white font-extrabold text-4xl md:text-6xl perspective-1000"
            animate={{ rotateY: [0, 180, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          >
            ২৪/৭
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-red-400 animate-ping"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
