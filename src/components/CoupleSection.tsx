"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { weddingConfig } from "@/config/weddingConfig";

export default function CoupleSection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#e8f0f5] via-[#f5f0e8] to-[#f0ebe0]" />
      <div className="absolute inset-0 islamic-pattern-bg opacity-10" />

      <div className="relative z-10 max-w-xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm uppercase tracking-[4px] text-wedding-gold/70 mb-2">
            Together Forever
          </p>
          <h2
            className="text-4xl md:text-5xl text-wedding-ocean-deep"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            {weddingConfig.groomName} & {weddingConfig.brideName}
          </h2>
        </motion.div>

        {/* Premium Photo Frame */}
        <motion.div
          className="relative max-w-[380px] mx-auto"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Outer frame */}
          <div
            className="relative p-3 md:p-4 rounded-2xl"
            style={{
              background: "linear-gradient(135deg, rgba(201,168,76,0.15) 0%, rgba(240,234,214,0.5) 50%, rgba(201,168,76,0.15) 100%)",
              border: "2px solid rgba(201,168,76,0.25)",
            }}
          >
            {/* Inner frame */}
            <div
              className="relative rounded-xl overflow-hidden shadow-lg"
              style={{
                border: "1px solid rgba(201,168,76,0.2)",
              }}
            >
              {/* Arch shape top */}
              <div className="relative aspect-[3/4]">
                <Image
                  src={weddingConfig.coupleImage}
                  alt={`${weddingConfig.groomName} and ${weddingConfig.brideName}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, 380px"
                />
                {/* Subtle vignette */}
                <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.1)]" />
              </div>
            </div>

            {/* Floral corners on frame */}
            <FrameCorner className="absolute top-1 left-1" />
            <FrameCorner className="absolute top-1 right-1 scale-x-[-1]" />
            <FrameCorner className="absolute bottom-1 left-1 scale-y-[-1]" />
            <FrameCorner className="absolute bottom-1 right-1 scale-[-1]" />
          </div>
        </motion.div>

        {/* Couple names below frame */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <span
              className="text-lg text-[#2c3e50]/60"
              style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}
            >
              {weddingConfig.groomNameUrdu}
            </span>
            <span className="text-red-400 text-xl">♥</span>
            <span
              className="text-lg text-[#2c3e50]/60"
              style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}
            >
              {weddingConfig.brideNameUrdu}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FrameCorner({ className = "" }: { className?: string }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 40 40"
      className={className}
      fill="none"
      stroke="rgba(201,168,76,0.35)"
      strokeWidth="1"
    >
      <path d="M5 5 Q5 20 20 20" />
      <path d="M5 5 C10 10 8 16 14 14 C16 12 14 8 5 5" fill="rgba(201,168,76,0.08)" />
      <circle cx="5" cy="5" r="2" fill="rgba(201,168,76,0.15)" />
    </svg>
  );
}
