"use client";

import { motion } from "framer-motion";
import { weddingConfig } from "@/config/weddingConfig";

interface Props {
  onOpen: () => void;
}

export default function OpeningScreen({ onOpen }: Props) {
  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#d0ebf7] via-[#87CEEB] to-[#2E8BC0]">
      {/* Background Cloud & Shimmer Layers */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-10 left-[10%] w-96 h-96 bg-white/40 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.05, 1, 1.05], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[40%] -right-20 w-[500px] h-[500px] bg-sky-200/50 rounded-full blur-3xl"
        />
        {/* Ocean Horizon at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[35%] bg-gradient-to-t from-[#1B6B99]/50 via-[#2E8BC0]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[10%] bg-gradient-to-t from-[#F4EBE1]/40 to-transparent" />
      </div>

      {/* Islamic geometric background texture */}
      <div className="absolute inset-0 islamic-pattern-bg opacity-30" />

      {/* Luxury Royal Card Envelope Frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-[90%] max-w-[440px] p-8 md:p-12 text-center royal-card"
      >
        {/* Inner Gold Filigree Corner Borders */}
        <div className="absolute inset-3 border border-wedding-gold/40 rounded-xl pointer-events-none" />
        <div className="absolute inset-4 border border-wedding-gold/20 rounded-lg pointer-events-none" />
        
        {/* Decorative Arch Top Header */}
        <div className="flex justify-center mb-6">
          <svg width="64" height="48" viewBox="0 0 100 70" className="text-wedding-gold">
            <path
              d="M50 0 C25 20 0 35 0 70 L100 70 C100 35 75 20 50 0 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              opacity="0.7"
            />
            <circle cx="50" cy="35" r="5" fill="currentColor" opacity="0.6" />
            <path d="M50 15 L50 25 M35 35 L65 35" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>

        {/* Bismillah */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-arabic text-xl md:text-2xl text-[#AA7C11] mb-2 leading-relaxed"
          style={{ direction: "rtl" }}
        >
          {weddingConfig.bismillah}
        </motion.p>

        {/* Moula Line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-urdu text-xs md:text-sm text-wedding-gold-deep/80 mb-4"
        >
          {weddingConfig.moulaHeader}
        </motion.p>

        {/* Gold Divider Line */}
        <div className="w-24 h-[1px] mx-auto bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent my-4" />

        {/* Subtitle */}
        <p className="text-xs uppercase tracking-[5px] text-[#2E8BC0] font-medium mb-3">
          Royal Nikah Invitation
        </p>

        {/* Couple Names in Script */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="my-3"
        >
          <h1 className="font-script text-5xl md:text-6xl text-gold-metallic leading-tight drop-shadow-sm">
            {weddingConfig.groomName}
          </h1>
          <span className="font-script text-2xl text-wedding-ocean my-1 inline-block">&</span>
          <h1 className="font-script text-5xl md:text-6xl text-gold-metallic leading-tight drop-shadow-sm">
            {weddingConfig.brideName}
          </h1>
        </motion.div>

        {/* Urdu Names */}
        <div className="flex items-center justify-center gap-3 font-urdu text-sm text-[#0F4C75]/70 mb-6">
          <span>{weddingConfig.groomNameUrdu}</span>
          <span className="text-wedding-gold text-xs">✦</span>
          <span>{weddingConfig.brideNameUrdu}</span>
        </div>

        {/* TAP TO OPEN Button */}
        <motion.button
          onClick={onOpen}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          whileTap={{ scale: 0.95 }}
          className="btn-royal mt-2"
          aria-label="Tap to open invitation"
        >
          Tap to Open
        </motion.button>
      </motion.div>

      {/* Floating Gold Sparkle Dust */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-yellow-200"
          style={{
            top: `${15 + (i * 10)}%`,
            left: `${10 + (i * 11)}%`,
            boxShadow: "0 0 6px rgba(255,235,150,0.8)",
          }}
          animate={{
            opacity: [0.2, 0.9, 0.2],
            scale: [0.8, 1.4, 0.8],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 3 + (i % 3),
            repeat: Infinity,
            delay: i * 0.4,
          }}
        />
      ))}
    </div>
  );
}
