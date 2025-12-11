"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, UserPlus } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-[#f8fbff]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-2xl md:text-5xl font-extrabold text-blue-900 leading-tight mb-10"
        >
          আমাদের সাথে যোগাযোগ করুন
        </motion.h2>

        {/* Single Horizontal Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="bg-white shadow-lg rounded-xs p-6 md:p-10 flex flex-col md:flex-row justify-between items-center border border-blue-100 mb-10"
        >
          {/* Phone */}
          <div className="flex flex-col items-center md:items-start border-b md:border-b-0 md:border-r border-blue-100 w-full md:w-auto pb-4 md:pb-0 md:pr-6">
            <Phone className="w-6 h-6 text-blue-900 mb-2" />
            <p className="text-lg font-semibold text-blue-900">ফোন</p>

            <a
              href="tel:+8801334913290"
              className="text-gray-700 mt-1 hover:underline"
            >
              +880 1334-913290
            </a>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center md:items-start border-b md:border-b-0 md:border-r border-blue-100 w-full md:w-auto pb-4 md:pb-0 md:pr-6">
            <Mail className="w-6 h-6 text-blue-900 mb-2" />
            <p className="text-lg font-semibold text-blue-900">ইমেইল</p>

            <a
              href="mailto:apollohospitalmb@gmail.com"
              className="text-gray-700 mt-1 hover:underline"
            >
              apollohospitalmb@gmail.com
            </a>
          </div>

          {/* Address */}
          <div className="flex flex-col items-center md:items-start w-full md:w-auto">
            <MapPin className="w-6 h-6 text-blue-900 mb-2" />
            <p className="text-lg font-semibold text-blue-900">ঠিকানা</p>
            <p className="text-gray-700 mt-1 text-center md:text-left">
              AR Heritage, KB Alauddin Road, Muslim Quarter, Maulvi Bazar,
              Bangladesh, 3200
            </p>
          </div>
        </motion.div>

        {/* Careers / Join Our Team */}
        {/* Careers / Join Our Team */}
        <motion.div
          id="job"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="bg-white shadow-lg rounded-xs p-6 md:p-10 mb-10 border border-blue-100 text-left"
        >
          <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
            <UserPlus className="w-6 h-6 text-blue-900" />
            <h3 className="text-xl md:text-2xl font-bold text-blue-900">
              আমাদের স্বাস্থ্যসেবা দলের অংশ হন
            </h3>
          </div>
          <p className="text-gray-700 text-md md:text-lg">
            আপনি কি স্বাস্থ্যসেবার জন্য নিবেদিত? অ্যাপোলো স্পেশালাইজড হাসপাতাল
            আমাদের রোগীদের সুস্থতা নিশ্চিত করার জন্য প্রতিভাবান ও যত্নশীল কর্মী
            খুঁজছে।
          </p>
          <p className="text-gray-700 mt-2">
            আপনার সিভি সরাসরি জমা দিতে পারেন আমাদের হাসপাতালে অথবা ইমেইল করুন:
            <a
              href="mailto:apollohospitalmb@gmail.com"
              className="text-blue-900 font-semibold ml-1"
            >
              apollohospitalmb@gmail.com
            </a>
            .
          </p>
          <p className="text-gray-700 mt-2">
            আমরা আপনাকে আমাদের পরিবারের অংশ হিসেবে স্বাগত জানাব এবং আপনার দক্ষতা
            ও সহানুভূতিশীলতা আমাদের রোগীদের যত্নে কাজে লাগাতে চাই।
          </p>
        </motion.div>

        {/* Google Map */}
        <div className="w-full h-80 md:h-96 rounded-xs overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.364539448935!2d91.77766911541688!3d24.48502438411171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3750f31f1d5c7f0b%3A0x9c8efb6e6f8395aa!2sAR%20Heritage%2C%20KB%20Alauddin%20Rd%2C%20Muslim%20Quarter%2C%20Moulvibazar%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1702425738000!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
