"use client";

import { motion } from "framer-motion";
import { weddingConfig } from "@/config/weddingConfig";

export default function HeroSection() {
  return (
    <section className="relative h-screen-safe min-h-screen-safe flex items-center justify-center overflow-hidden">
      {/* Dynamic Background with Ken Burns & Sky/Ocean Gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-[#C5E9F6] via-[#87CEEB] via-50% to-[#2076AB]"
        animate={{
          scale: [1, 1.06, 1],
          x: [0, -8, 0],
          y: [0, -5, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Soft floating clouds */}
        <div className="absolute top-[8%] left-[5%] w-72 h-24 bg-white/40 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-[18%] right-[8%] w-96 h-32 bg-white/35 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: "3s" }} />
        <div className="absolute bottom-[20%] left-[20%] w-[500px] h-40 bg-sky-200/30 rounded-full blur-3xl" />
        
        {/* Ocean Shimmer Wave Layer */}
        <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-[#0F4C75]/40 via-[#2076AB]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[8%] bg-gradient-to-t from-[#F4EBE1]/30 to-transparent" />
      </motion.div>

      {/* Islamic Pattern Overlay */}
      <div className="absolute inset-0 islamic-pattern-bg opacity-25" />

      {/* Main Hero Card Container */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-xl pb-16">
        {/* Bismillah */}
        <motion.p
          className="font-arabic text-lg md:text-xl text-wedding-gold-deep mb-2 tracking-wide"
          style={{ direction: "rtl" }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {weddingConfig.bismillah}
        </motion.p>

        {/* Moula Line from card */}
        <motion.p
          className="font-urdu text-xs text-wedding-gold-deep/80 mb-3 max-w-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {weddingConfig.moulaHeader}
        </motion.p>

        {/* Decorative Star Arch Ornament */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-2"
        >
          <svg width="32" height="32" viewBox="0 0 100 100" className="text-wedding-gold mx-auto">
            <polygon points="50,5 64,35 95,35 70,55 80,85 50,65 20,85 30,55 5,35 36,35" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.8" />
            <circle cx="50" cy="45" r="8" fill="currentColor" opacity="0.6" />
          </svg>
        </motion.div>

        {/* Groom Name */}
        <motion.h1
          className="font-script text-5xl md:text-6xl lg:text-7xl text-gold-metallic drop-shadow-md leading-none"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.9 }}
        >
          {weddingConfig.groomName}
        </motion.h1>

        {/* Connector */}
        <motion.p
          className="font-script text-2xl md:text-3xl text-white drop-shadow my-1"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          &
        </motion.p>

        {/* Bride Name */}
        <motion.h1
          className="font-script text-5xl md:text-6xl lg:text-7xl text-gold-metallic drop-shadow-md leading-none mb-3"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.9 }}
        >
          {weddingConfig.brideName}
        </motion.h1>

        {/* Urdu Names */}
        <motion.div
          className="flex items-center gap-3 font-urdu text-sm md:text-base text-white/90 drop-shadow mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <span>{weddingConfig.groomNameUrdu}</span>
          <span className="text-wedding-gold text-xs">✦</span>
          <span>{weddingConfig.brideNameUrdu}</span>
        </motion.div>

        {/* Gold Filigree Line */}
        <motion.div
          className="w-28 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-4"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.4, duration: 0.7 }}
        />

        {/* Tagline */}
        <motion.p
          className="text-xs uppercase tracking-[5px] text-white/90 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          Nikah Mubarak
        </motion.p>
      </div>

      {/* Elegant Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-20 pointer-events-none"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[10px] uppercase tracking-[3px] text-white/80 font-medium">Scroll Down</span>
        <div className="w-4 h-7 border border-white/50 rounded-full flex justify-center p-0.5">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-1.5 bg-wedding-gold rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
