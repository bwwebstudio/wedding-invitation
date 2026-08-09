"use client";

import { motion } from "framer-motion";
import { weddingConfig } from "@/config/weddingConfig";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-b from-[#f0f7fb] to-[#e8f4f8]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2.5, duration: 0.8, ease: "easeInOut" }}
      onAnimationComplete={onComplete}
    >
      {/* Islamic Ornament */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-8"
      >
        <svg width="60" height="60" viewBox="0 0 100 100" className="text-wedding-gold">
          <g fill="currentColor" opacity="0.7">
            <path d="M50 5 L60 25 L80 25 L65 40 L70 60 L50 48 L30 60 L35 40 L20 25 L40 25 Z" />
            <circle cx="50" cy="50" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M50 0 L50 10 M50 90 L50 100 M0 50 L10 50 M90 50 L100 50" stroke="currentColor" strokeWidth="0.5" />
          </g>
        </svg>
      </motion.div>

      {/* Couple Names */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        className="text-center"
      >
        <p className="font-[var(--font-script)] text-2xl md:text-3xl text-wedding-gold tracking-wide"
           style={{ fontFamily: "'Great Vibes', cursive" }}>
          {weddingConfig.groomName} & {weddingConfig.brideName}
        </p>
      </motion.div>

      {/* Loading Dots */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="mt-8 flex gap-1.5"
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-wedding-gold/50"
            animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.1, 0.8] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
