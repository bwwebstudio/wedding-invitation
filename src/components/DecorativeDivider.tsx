"use client";

import { motion } from "framer-motion";

interface Props {
  variant?: "gold" | "ocean" | "light";
  className?: string;
}

export default function DecorativeDivider({ variant = "gold", className = "" }: Props) {
  const colors = {
    gold: "rgba(201, 168, 76, 0.5)",
    ocean: "rgba(91, 163, 201, 0.4)",
    light: "rgba(201, 168, 76, 0.25)",
  };

  const color = colors[variant];

  return (
    <motion.div
      className={`flex items-center justify-center gap-3 py-8 ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8 }}
    >
      {/* Left line */}
      <motion.div
        className="h-[1px] w-16 md:w-24"
        style={{ background: `linear-gradient(90deg, transparent, ${color})` }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      />

      {/* Center ornament */}
      <svg width="24" height="24" viewBox="0 0 40 40" style={{ color }}>
        <g fill="currentColor" opacity="0.8">
          <polygon points="20,2 24,16 38,16 26,24 30,38 20,30 10,38 14,24 2,16 16,16" />
        </g>
      </svg>

      {/* Right line */}
      <motion.div
        className="h-[1px] w-16 md:w-24"
        style={{ background: `linear-gradient(270deg, transparent, ${color})` }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      />
    </motion.div>
  );
}
