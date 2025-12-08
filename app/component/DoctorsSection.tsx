"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Sample doctor data
const doctors = [
  {
    name: "ডঃ রবিন হাসান",
    designation: "হৃদরোগ বিশেষজ্ঞ",
    qualification: "MBBS, MD (Cardiology)",
    img: "man.png",
  },
  {
    name: "ডঃ সুমাইয়া আক্তার",
    designation: "নিউরোলজি বিশেষজ্ঞ",
    qualification: "MBBS, FCPS (Neurology)",
    img: "wom.avif",
  },
  {
    name: "ডঃ তানভীর রহমান",
    designation: "জেনারেল সার্জন",
    qualification: "MBBS, MS (Surgery)",
    img: "wom.avif",
  },
  {
    name: "ডঃ লাবোনা খাতুন",
    designation: "গাইনোকোলজি ও প্রসূতি বিশেষজ্ঞ",
    qualification: "MBBS, FCPS (Gynecology)",
    img: "wom.avif",
  },
  {
    name: "ডঃ মোহাম্মদ আহমেদ",
    designation: "অর্থোপেডিক্স",
    qualification: "MBBS, MS (Orthopedics)",
    img: "man.png",
  },
  {
    name: "ডঃ লাইলী রহমান",
    designation: "ডায়াবেটিক বিশেষজ্ঞ",
    qualification: "MBBS, MD (Endocrinology)",
    img: "wom.avif",
  },
];

export default function DoctorsSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -250, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 250, behavior: "smooth" });
    }
  };

  // Update active dot on scroll
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      const scrollLeft = carousel.scrollLeft;
      const cardWidth = carousel.children[0]?.clientWidth + 24 || 250; // card width + gap
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(index);
    };

    carousel.addEventListener("scroll", handleScroll);
    return () => carousel.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="specialists" className="py-16 bg-[#f8fbff] border-b">
      <div className="max-w-7xl mx-auto px-6 text-center relative">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-2xl md:text-5xl font-extrabold text-blue-900 leading-tight"
        >
          আমাদের বিশেষজ্ঞ ডাক্তার
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-lg text-gray-700 mt-2 mb-10"
        >
          Meet our highly qualified specialists
        </motion.p>

        {/* Carousel */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md p-2 z-20 hover:bg-blue-50 transition"
          >
            <ChevronLeft className="w-6 h-6 text-blue-900" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md p-2 z-20 hover:bg-blue-50 transition"
          >
            <ChevronRight className="w-6 h-6 text-blue-900" />
          </button>

          <motion.div
            ref={carouselRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide px-2 md:px-0"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            {doctors.map((doctor, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-lg rounded-xs p-4 min-w-[200px] flex flex-col items-center shrink-0 border border-blue-100"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 150 }}
              >
                <div className="w-32 h-32 relative rounded-full overflow-hidden">
                  <Image
                    src={`/doctors/${doctor.img}`}
                    alt={doctor.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mt-4">
                  {doctor.name}
                </h3>
                <p className="text-gray-600 mt-1 text-center">
                  {doctor.designation}
                </p>
                <p className="text-gray-500 text-sm mt-1 text-center">
                  {doctor.qualification}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {doctors.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (carouselRef.current) {
                    const cardWidth =
                      carouselRef.current.children[0]?.clientWidth + 24 || 250;
                    carouselRef.current.scrollTo({
                      left: index * cardWidth,
                      behavior: "smooth",
                    });
                  }
                }}
                className={`w-3 h-3 rounded-full ${
                  activeIndex === index ? "bg-blue-900" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

     </div>
    </section>
  );
}
