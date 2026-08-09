"use client";

import { motion, AnimatePresence } from "framer-motion";

interface Props {
  isOpen: boolean;
  onComplete: () => void;
}

export default function OpeningAnimation({ isOpen, onComplete }: Props) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[95] pointer-events-none flex items-center justify-center overflow-hidden">
        {/* Soft Golden Radiant Flash behind opening doors */}
        <motion.div
          className="absolute inset-0 z-0 bg-radial"
          style={{
            background: "radial-gradient(circle at center, rgba(255,248,220,0.95) 0%, rgba(212,175,55,0.4) 45%, rgba(135,206,235,0.2) 75%, transparent 100%)",
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: [0, 1, 1, 0], scale: [0.5, 1.5, 2, 2.5] }}
          transition={{ duration: 2.2, times: [0, 0.3, 0.7, 1], ease: "easeInOut" }}
        />

        {/* Left Luxury Door/Gate */}
        <motion.div
          className="absolute top-0 left-0 w-1/2 h-full z-10 bg-gradient-to-br from-[#d4eef7] via-[#87CEEB] to-[#2076AB] shadow-2xl border-r border-[#D4AF37]/50"
          initial={{ x: 0, rotateY: 0 }}
          animate={{ x: "-100%", rotateY: -15 }}
          transition={{ duration: 2, ease: [0.77, 0, 0.175, 1] }}
          onAnimationComplete={onComplete}
        >
          <div className="absolute inset-0 islamic-pattern-bg opacity-30" />
          {/* Vertical Golden filigree edge */}
          <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-[#D4AF37]/30 via-[#FCF6BA] to-[#D4AF37]/30 shadow-md" />
        </motion.div>

        {/* Right Luxury Door/Gate */}
        <motion.div
          className="absolute top-0 right-0 w-1/2 h-full z-10 bg-gradient-to-bl from-[#d4eef7] via-[#87CEEB] to-[#2076AB] shadow-2xl border-l border-[#D4AF37]/50"
          initial={{ x: 0, rotateY: 0 }}
          animate={{ x: "100%", rotateY: 15 }}
          transition={{ duration: 2, ease: [0.77, 0, 0.175, 1] }}
        >
          <div className="absolute inset-0 islamic-pattern-bg opacity-30" />
          {/* Vertical Golden filigree edge */}
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#D4AF37]/30 via-[#FCF6BA] to-[#D4AF37]/30 shadow-md" />
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
