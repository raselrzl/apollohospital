"use client";

import { motion } from "framer-motion";
import { Heart, UserCheck, Activity, Clock, MapPin, Phone } from "lucide-react";

export default function AboutHospitalSection() {
  return (
    <section id="about" className="py-16 bg-[#f0f8ff]">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-extrabold text-blue-900 leading-tight mb-10"
        >
          অ্যাপোলো স্পেশালাইজ্ড হাসপাতাল, মৌলভীবাজার
        </motion.h2>

        <motion.div
          className="flex flex-col gap-6 text-left md:text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gray-700 text-lg text-center">
            আপনার সুস্থ জীবন আমাদের অঙ্গীকার 💙
          </p>

          <p className="flex items-center gap-2 justify-center text-gray-700 text-lg">
            <Activity className="w-6 h-6 text-blue-900" /> আধুনিক চিকিৎসা সেবা
          </p>

          <p className="flex items-center gap-2 justify-center text-gray-700 text-lg">
            <UserCheck className="w-6 h-6 text-blue-900" /> দক্ষ ও অভিজ্ঞ
            চিকিৎসক দল
          </p>

          <p className="flex items-center gap-2 justify-center text-gray-700 text-lg">
            <Activity className="w-6 h-6 text-blue-900" /> আইসিইউ, সিসিইউ,
            এনআইসিইউ ও ডায়ালাইসিস সুবিধা
          </p>

          <p className="flex items-center gap-2 justify-center text-gray-700 text-lg">
            <Clock className="w-6 h-6 text-blue-900" /> ২৪/৭ জরুরি চিকিৎসা সেবা
          </p>

          <p className="text-gray-700 text-lg text-center">
            আমরা সবসময় পাশে আছি আপনার ও আপনার পরিবারের সুস্থতার যাত্রায় 🌿
          </p>

          <p className="flex items-center gap-2 justify-center text-gray-700 text-lg">
            <MapPin className="w-6 h-6 text-blue-900" /> ঠিকানা: এ.আর. হেরিটেজ,
            মুসলিম কোয়ার্টার, কে.বি. আলাউদ্দিন রোড, মৌলভীবাজার
          </p>

          <p className="flex items-center gap-2 justify-center text-gray-700 text-lg">
            <Phone className="w-6 h-6 text-blue-900" />
            যোগাযোগ:
            <a href="tel:01334913290" className="text-blue-900 hover:underline">
              ০১৩৩৪৯১৩২৯০
            </a>
            ,
            <a href="tel:01334913291" className="text-blue-900 hover:underline">
              ০১৩৩৪৯১৩২৯১
            </a>
          </p>

          <p className="text-gray-700 text-lg text-center font-semibold">
            ✨ অ্যাপোলো স্পেশালাইজ্ড হাসপাতাল — সুস্থতার নতুন ঠিকানা।
          </p>
        </motion.div>
      </div>
    </section>
  );
}
