"use client";

import { motion } from "framer-motion";
import { weddingConfig } from "@/config/weddingConfig";
import DecorativeDivider from "./DecorativeDivider";

export default function IslamicGreeting() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#eef7fb] via-[#f7faff] to-[#eef7fb]" />
      <div className="absolute inset-0 islamic-pattern-bg opacity-15" />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        {/* Royal Card Container */}
        <motion.div
          className="royal-card p-8 md:p-12 text-center relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.9 }}
        >
          {/* Bismillah Header */}
          <p
            className="font-arabic text-2xl md:text-3xl text-wedding-gold-deep mb-3 leading-relaxed"
            style={{ direction: "rtl" }}
          >
            {weddingConfig.bismillah}
          </p>

          {/* Alhamdulillah */}
          <p
            className="font-arabic text-xl md:text-2xl text-[#2076AB] mb-4"
            style={{ direction: "rtl" }}
          >
            {weddingConfig.alhamdulillah}
          </p>

          <DecorativeDivider variant="gold" className="my-4" />

          {/* Moula Line */}
          <div className="inline-block px-6 py-2 rounded-full bg-wedding-gold/10 border border-wedding-gold/30 mb-6">
            <p className="font-urdu text-sm md:text-base text-[#AA7C11] font-medium">
              {weddingConfig.moulaHeader}
            </p>
          </div>

          {/* Main Urdu Invitation Paragraph from Card */}
          <div className="my-6 px-2 md:px-6">
            <p
              className="font-urdu text-sm md:text-base text-[#1A2B3C]/85 leading-[2.6] text-justify md:text-center whitespace-pre-line"
              style={{ direction: "rtl" }}
            >
              {weddingConfig.invitationTextUrdu}
            </p>
          </div>

          {/* Special Nikah Banner from Original Card */}
          <motion.div
            className="my-8 py-4 px-6 rounded-xl bg-gradient-to-r from-[#D4AF37]/15 via-[#87CEEB]/20 to-[#D4AF37]/15 border border-[#D4AF37]/40 shadow-inner"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p
              className="font-urdu text-base md:text-lg font-bold text-[#AA7C11] leading-relaxed"
              style={{ direction: "rtl" }}
            >
              {weddingConfig.nikahLine}
            </p>
          </motion.div>

          {/* Invitation Request Wording */}
          <div className="mt-6">
            <p
              className="font-urdu text-sm md:text-base text-[#1A2B3C]/75 leading-[2.5] whitespace-pre-line"
              style={{ direction: "rtl" }}
            >
              {weddingConfig.invitationRequestUrdu}
            </p>
          </div>

          <DecorativeDivider variant="gold" className="mt-8" />
        </motion.div>
      </div>
    </section>
  );
}
