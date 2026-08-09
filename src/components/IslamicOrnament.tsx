"use client";

import { motion } from "framer-motion";

interface Props {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function IslamicOrnament({ className = "", size = "md" }: Props) {
  const sizes = { sm: 40, md: 60, lg: 80 };
  const s = sizes[size];

  return (
    <motion.svg
      width={s}
      height={s}
      viewBox="0 0 100 100"
      className={`text-wedding-gold ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Central eight-pointed star */}
      <g fill="none" stroke="currentColor" strokeWidth="1" opacity="0.6">
        <polygon points="50,10 58,38 90,38 64,56 72,85 50,68 28,85 36,56 10,38 42,38" />
        <polygon points="50,20 56,40 75,40 60,52 66,72 50,60 34,72 40,52 25,40 44,40" />
        <circle cx="50" cy="50" r="6" />
        <circle cx="50" cy="50" r="3" fill="currentColor" />
      </g>
      {/* Cardinal lines */}
      <g stroke="currentColor" strokeWidth="0.5" opacity="0.4">
        <line x1="50" y1="0" x2="50" y2="8" />
        <line x1="50" y1="92" x2="50" y2="100" />
        <line x1="0" y1="50" x2="8" y2="50" />
        <line x1="92" y1="50" x2="100" y2="50" />
      </g>
    </motion.svg>
  );
}
