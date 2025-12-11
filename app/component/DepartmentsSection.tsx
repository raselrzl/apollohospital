"use client";

import { motion } from "framer-motion";

const departments = [
  "কার্ডিওলজি (Cardiology)",
  "নিউরোলজি (Neurology)",
  "সার্জারি (General Surgery)",
  "গাইনোকোলজি ও প্রসূতি (Gynecology & Obstetrics)",
  "অর্থোপেডিক্স (Orthopedics)",
  "ডায়াবেটিক সেবা (Endocrinology/Diabetes)",
  "ইনটেনসিভ কেয়ার ইউনিট (ICU/NICU/CCU)",
  "ডায়ালাইসিস (Dialysis)",
  "প্যাথলজি (Pathology/Lab)",
  "ইমেজিং/রেডিওলজি (Radiology/Imaging)",
  "ফিজিওথেরাপি (Physiotherapy & Rehabilitation)",
  "ইনফেকশন কন্ট্রোল (Infection Control)",
  "ডেন্টাল (Dental Care)",
  "ফার্মাসি (Pharmacy)",
  "ইমার্জেন্সি সেবা (Emergency)",
];

export default function DepartmentsSection() {
  return (
    <section id="departments" className="py-16 bg-[#f0f8ff] border-b">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-2xl md:text-5xl font-extrabold text-blue-900 leading-tight"
        >
          আমাদের বিভাগসমূহ
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-lg text-gray-700 mt-2 mb-10"
        >
          আমাদের হাসপাতালের প্রধান ও বিশেষায়িত বিভাগসমূহ
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {departments.map((dept, idx) => (
            <motion.div
              key={idx}
              className="bg-blue-900 border border-blue-950 rounded-xl shadow-md p-4 hover:shadow-lg transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <p className="text-white font-semibold">{dept}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
