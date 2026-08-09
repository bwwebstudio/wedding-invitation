"use client";

import { motion } from "framer-motion";
import { weddingConfig } from "@/config/weddingConfig";
import IslamicOrnament from "./IslamicOrnament";

export default function Footer() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-[#FAF4E8] via-[#87CEEB] to-[#2076AB]">
      {/* Background clouds & shimmer */}
      <div className="absolute top-[10%] left-[15%] w-64 h-20 bg-white/30 rounded-full blur-3xl opacity-60" />
      <div className="absolute top-[25%] right-[10%] w-72 h-24 bg-white/25 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-gradient-to-t from-[#0F4C75]/40 to-transparent" />
      <div className="absolute inset-0 islamic-pattern-bg opacity-20" />

      <div className="relative z-10 max-w-lg mx-auto px-6 text-center">
        {/* Islamic Ornament */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <IslamicOrnament size="lg" />
        </motion.div>

        {/* Bismillah */}
        <motion.p
          className="font-arabic text-xl md:text-2xl text-wedding-gold-light mb-4"
          style={{ direction: "rtl" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {weddingConfig.bismillah}
        </motion.p>

        {/* With Love & Blessings */}
        <motion.p
          className="text-xs uppercase tracking-[5px] text-white/80 font-medium mb-3"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          With Love & Blessings
        </motion.p>

        {/* Couple Names */}
        <motion.h2
          className="font-script text-5xl md:text-6xl text-gold-metallic drop-shadow-md mb-2"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {weddingConfig.groomName} & {weddingConfig.brideName}
        </motion.h2>

        {/* Nikah Mubarak */}
        <motion.p
          className="font-urdu text-lg text-white/90 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          نکاح مبارک
        </motion.p>

        {/* Gold Filigree Divider */}
        <motion.div
          className="w-28 h-[1px] mx-auto bg-gradient-to-r from-transparent via-[#FCF6BA] to-transparent mb-6"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        />

        {/* Thank You Note */}
        <motion.p
          className="text-sm text-white/80 leading-relaxed max-w-sm mx-auto font-light"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Thank you for being a part of our special day and surrounding us with your prayers and love.
        </motion.p>

        {/* Bottom Islamic Star Motif */}
        <motion.div
          className="mt-8 flex justify-center gap-1.5 opacity-60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-wedding-gold-light text-xs">✦</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
