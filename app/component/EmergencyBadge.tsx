"use client";

import { motion } from "framer-motion";

export default function EmergencyBadge() {
  const phoneNumber = "+8801334913290";

  return (
    <motion.a
      href={`tel:${phoneNumber}`}
      className="
        fixed bottom-40 right-10 -translate-x-1/2
        w-12 h-12 rounded-full 
        text-white font-extrabold text-xl
        flex items-center justify-center
        z-99999
      "
      animate={{ scale: [1, 1.15, 1], rotate: [0, 1, -1, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
      style={{
        background: "linear-gradient(145deg, #ff4d4d, #b30000)", // 3D shading
        boxShadow: `
          0 10px 25px rgba(0,0,0,0.35),      /* deep shadow */
          inset 0 6px 12px rgba(255,255,255,0.45), /* inner shine */
          inset 0 -6px 12px rgba(0,0,0,0.4)  /* inner shadow bottom */
        `,
      }}
    >
      ২৪/৭
    </motion.a>
  );
}
