"use client";

import { motion } from "framer-motion";
import { weddingConfig } from "@/config/weddingConfig";
import IslamicOrnament from "./IslamicOrnament";

export default function WeddingDate() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f0ebe0] via-[#f5f0e8] to-[#e8f0f5]" />
      <div className="absolute inset-0 islamic-pattern-bg opacity-15" />

      <div className="relative z-10 max-w-md mx-auto px-6">
        {/* Nikah Mubarak heading */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-4xl md:text-5xl text-wedding-gold"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            Nikah Mubarak
          </h2>
        </motion.div>

        {/* Date Card */}
        <motion.div
          className="relative rounded-xl overflow-hidden"
          style={{
            background: "linear-gradient(180deg, rgba(255,255,240,0.9) 0%, rgba(255,248,231,0.95) 100%)",
            border: "1px solid rgba(201,168,76,0.25)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.06)",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Inner border */}
          <div className="absolute inset-2 border border-wedding-gold/10 rounded-lg pointer-events-none" />

          <div className="relative p-8 md:p-10 text-center">
            {/* Islamic ornament */}
            <div className="flex justify-center mb-6">
              <IslamicOrnament size="sm" />
            </div>

            {/* Day number */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="text-7xl md:text-8xl font-light text-wedding-ocean-deep tracking-tight">
                13
              </span>
            </motion.div>

            {/* Month */}
            <motion.p
              className="text-xl md:text-2xl uppercase tracking-[6px] text-wedding-gold mt-2 mb-1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              December
            </motion.p>

            {/* Year */}
            <motion.p
              className="text-3xl md:text-4xl font-light text-wedding-ocean/80 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              2026
            </motion.p>

            {/* Decorative line */}
            <div className="w-16 h-[1px] mx-auto bg-gradient-to-r from-transparent via-wedding-gold/40 to-transparent my-4" />

            {/* Day */}
            <motion.p
              className="text-sm uppercase tracking-[4px] text-[#2c3e50]/60 mb-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {weddingConfig.weddingDay}
            </motion.p>

            {/* Time */}
            <motion.p
              className="text-base text-wedding-gold font-medium tracking-wider"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              {weddingConfig.weddingTime} <span className="text-sm text-wedding-gold/70">{weddingConfig.weddingTimeNote}</span>
            </motion.p>

            {/* Location */}
            <motion.div
              className="mt-4 flex items-center justify-center gap-2 text-[#2c3e50]/50"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span className="text-sm tracking-wider uppercase">{weddingConfig.location}</span>
            </motion.div>

            {/* Islamic date */}
            <motion.p
              className="text-sm text-wedding-gold/60 mt-3"
              style={{ fontFamily: "'Amiri', serif", direction: "rtl" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.65 }}
            >
              {weddingConfig.islamicDate}
            </motion.p>

            {/* Corner decorations */}
            <DateCorner className="absolute top-3 left-3" />
            <DateCorner className="absolute top-3 right-3 scale-x-[-1]" />
            <DateCorner className="absolute bottom-3 left-3 scale-y-[-1]" />
            <DateCorner className="absolute bottom-3 right-3 scale-[-1]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function DateCorner({ className = "" }: { className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 30 30" className={className}>
      <g stroke="rgba(201,168,76,0.3)" strokeWidth="0.8" fill="none">
        <path d="M3 3 L3 15" />
        <path d="M3 3 L15 3" />
        <circle cx="3" cy="3" r="1.5" fill="rgba(201,168,76,0.2)" />
        <path d="M3 3 Q8 8 6 12" opacity="0.4" />
      </g>
    </svg>
  );
}
