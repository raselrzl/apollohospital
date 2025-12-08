"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  { nameBn: "NICU", nameEn: "Neonatal Intensive Care Unit", img: "nicu.png" },
  { nameBn: "ICU", nameEn: "Intensive Care Unit", img: "icu.png" },
  { nameBn: "CCU", nameEn: "Coronary Care Unit", img: "ccu.png" },
  { nameBn: "ডায়ালাইসিস", nameEn: "Dialysis", img: "dialysis.png" },
  { nameBn: "প্যাথলজি", nameEn: "Pathology", img: "pathology.png" },
  { nameBn: "স্ত্রী ও প্রসূতি বিভাগ", nameEn: "Gynecology & Obstetrics", img: "gynecology.png" },
  { nameBn: "সার্জারি", nameEn: "Surgery", img: "surgery.png" },
  { nameBn: "স্বাভাবিক প্রসব", nameEn: "Normal Delivery", img: "normal-delivery.png" },
  { nameBn: "অর্থোপেডিক্স", nameEn: "Orthopedics", img: "orthopedics.png" },
  { nameBn: "নাক, কান, গলা", nameEn: "ENT", img: "ent.png" },
  { nameBn: "ফটোথেরাপি", nameEn: "Phototherapy", img: "phototherapy.png" },
  { nameBn: "ইকোকার্ডিওগ্রাফি", nameEn: "Echocardiography", img: "echo.png" },
  { nameBn: "আল্ট্রাসোনোগ্রাফি", nameEn: "Ultrasonography", img: "ultrasound.png" },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 bg-[#f8fbff] border-b">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* HEADER */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-2xl md:text-5xl font-extrabold text-blue-900 leading-tight"
        >
          আমাদের সেবা সমূহ
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-lg text-gray-700 mt-2"
        >
          Our Services
        </motion.p>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 150, duration: 0.5 }}
              className="bg-white rounded-xl shadow-md border border-blue-100 p-4"
            >
              <div className="w-full h-50 relative rounded-md overflow-hidden">
                <Image
                  src={`/services/${service.img}`}
                  alt={service.nameBn}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-xl font-bold text-blue-900 mt-4">
                {service.nameBn}
              </h3>
              <p className="text-sm text-gray-600">{service.nameEn}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
