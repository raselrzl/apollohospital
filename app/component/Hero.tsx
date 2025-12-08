"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="max-w-7xl mx-auto bg-[#f0f8ff] h-[700px] border-b flex flex-col md:flex-row items-center px-6 md:px-12 pt-10"
      >
        {/* Left side - Text */}
        <motion.div
          className="md:w-1/2 flex flex-col justify-center space-y-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-2xl md:text-5xl font-extrabold text-blue-900 leading-tight">
            অ্যাপোলো <br />
            স্পেশালাইজড <br />
            হাসপাতাল মৌলভীবাজার
          </h1>
          <p className="text-md md:text-2xl text-gray-800">
            আপনার সুস্থতা, আমাদের অঙ্গীকার! অ্যাপোলো হাসপাতাল – মৌলভীবাজারের
            বিশ্বস্ত স্বাস্থ্যসেবা। দক্ষ চিকিৎসক এবং যত্নশীল সেবা, সবসময় আপনার
            সুস্থতা ও সুস্বাস্থ্যের জন্য নিবেদিত।
          </p>
          <div className="flex justify-start space-x-4 mt-4 items-end">
            <a
              href="#services"
              className="bg-blue-900 text-white font-semibold py-3 px-6 rounded-xs shadow-lg transition hover:bg-blue-700"
            >
              আমাদের সেবা সমূহ →
            </a>
          </div>
        </motion.div>

        {/* Right side - Image with NICU overlay */}
        <motion.div
          className="md:w-1/2 w-full mt-8 md:mt-0 relative h-64 md:h-80 rounded-xl flex justify-center items-center"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src="/nicu.webp"
            alt="অ্যাপোলো স্পেশালাইজড হাসপাতাল"
            fill
            className="rounded-xs object-cover md:object-contain"
          />

          {/* NICU text box */}
          <div className="absolute bottom-[-18] md:bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-80 text-blue-900 font-bold px-4 py-2 rounded shadow-lg text-xl md:text-2xl">
            NICU
          </div>
        </motion.div>

        <motion.p
          className="mt-4 text-center text-gray-800 text-lg block md:hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          মৌলভীবাজারে প্রথম ও একমাত্র NICU সার্ভিস!
        </motion.p>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-7xl mx-auto py-16 px-6 md:px-12 border-b">
        <motion.h2
          className="text-2xl md:text-5xl font-extrabold text-blue-900 leading-tight text-center mb-2"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          কেন আমাদের বেছে নেবেন?
        </motion.h2>

        <motion.p
          className="text-center text-sm text-gray-700 mt-2 font-semibold mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          আমরা উচ্চমানের স্বাস্থ্যসেবা প্রদানে প্রতিশ্রুতিবদ্ধ।
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {[
            { title: "৪৫+", desc: "যোগ্যতাসম্পন্ন ডাক্তার" },
            { title: "১৪৫k+", desc: "পজিটিভ রিভিউ" },
            { title: "১০০%", desc: "স্বাস্থ্য সেবায় অগ্রাধিকার" },
            { title: "✓", desc: "আপনার পছন্দের ডাক্তার" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white shadow-lg rounded-2xl p-8 border border-blue-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
            >
              <h3 className="text-4xl font-extrabold text-blue-900">{item.title}</h3>
              <p className="text-lg text-gray-700 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
