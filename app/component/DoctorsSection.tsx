"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const hospitalCards = [
  {
    title: "২৪/৭ জরুরি সেবা",
    description:
      "দিন-রাত ২৪ ঘণ্টা অভিজ্ঞ চিকিৎসক ও জরুরি চিকিৎসা সেবা প্রদান করা হয়।",
  },
  {
    title: "বিশেষজ্ঞ চিকিৎসক",
    description:
      "বিভিন্ন বিভাগের অভিজ্ঞ ও দক্ষ বিশেষজ্ঞ চিকিৎসকদের মাধ্যমে মানসম্মত চিকিৎসা সেবা।",
  },
  {
    title: "আধুনিক ডায়াগনস্টিক",
    description:
      "রক্ত পরীক্ষা, এক্স-রে, আল্ট্রাসাউন্ড ও অন্যান্য আধুনিক পরীক্ষা সুবিধা।",
  },
  {
    title: "অপারেশন থিয়েটার",
    description:
      "আধুনিক যন্ত্রপাতি সমৃদ্ধ নিরাপদ অপারেশন থিয়েটার ও বিভিন্ন ধরনের সার্জারি সেবা।",
  },
  {
    title: "মাতৃ ও শিশু সেবা",
    description:
      "গর্ভকালীন, প্রসূতি ও নবজাতক শিশুদের জন্য বিশেষায়িত চিকিৎসা ও পরিচর্যা।",
  },
  {
    title: "আইসিইউ ও ইনডোর সেবা",
    description:
      "আইসিইউ, কেবিন, ওয়ার্ড এবং রোগীদের জন্য নিরাপদ ও মানসম্মত ইনডোর সেবা।",
  },
];

export default function DoctorsSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -286,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 286,
        behavior: "smooth",
      });
    }
  };

  // Update active dot on scroll
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      const scrollLeft = carousel.scrollLeft;
      const cardWidth =
        (carousel.children[0] as HTMLElement)?.clientWidth + 24 || 286;

      const index = Math.round(scrollLeft / cardWidth);

      setActiveIndex(
        Math.min(Math.max(index, 0), hospitalCards.length - 1)
      );
    };

    carousel.addEventListener("scroll", handleScroll);

    return () => {
      carousel.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="specialists"
      className="py-16 bg-[#f8fbff] border-b"
    >
      <div className="max-w-7xl mx-auto px-6 text-center relative">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-2xl md:text-5xl font-extrabold text-blue-900 leading-tight"
        >
          আমাদের হাসপাতাল সেবা
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-lg text-gray-700 mt-2 mb-10"
        >
          আধুনিক চিকিৎসা ও মানসম্মত স্বাস্থ্যসেবা আপনার পাশে
        </motion.p>

        {/* Carousel */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            aria-label="Previous"
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md p-2 z-20 hover:bg-blue-50 transition"
          >
            <ChevronLeft className="w-6 h-6 text-blue-900" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            aria-label="Next"
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md p-2 z-20 hover:bg-blue-50 transition"
          >
            <ChevronRight className="w-6 h-6 text-blue-900" />
          </button>

          {/* Cards */}
          <motion.div
            ref={carouselRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide px-8 md:px-12"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            {hospitalCards.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-lg rounded-xs p-6 min-w-[260px] h-[180px] flex flex-col justify-center shrink-0 border border-blue-100"
                whileHover={{ scale: 1.03 }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                }}
              >
                <h3 className="text-xl font-bold text-blue-900 mb-3 text-center">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-6 text-center">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {hospitalCards.map((_, index) => (
              <button
                key={index}
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => {
                  if (carouselRef.current) {
                    const cardWidth =
                      (carouselRef.current.children[0] as HTMLElement)
                        ?.clientWidth + 24 || 286;

                    carouselRef.current.scrollTo({
                      left: index * cardWidth,
                      behavior: "smooth",
                    });
                  }
                }}
                className={`w-3 h-3 rounded-full transition ${
                  activeIndex === index
                    ? "bg-blue-900"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}