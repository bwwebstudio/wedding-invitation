"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { weddingConfig } from "@/config/weddingConfig";
import { SoundEffects } from "@/utils/audio";

interface Props {
  onOpen: () => void;
}

export default function OpeningScreen({ onOpen }: Props) {
  const [guestName, setGuestName] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const name = params.get("guest") || params.get("name") || params.get("to");
      if (name) {
        setGuestName(name.trim());
      }
    }
  }, []);

  const handleOpenClick = () => {
    SoundEffects.playCardOpenChime();
    onOpen();
  };

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#bde2f2] via-[#87CEEB] to-[#2076AB]">
      {/* Background Ambient Cloud & Shimmer Layers */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 left-[15%] w-[500px] h-[500px] bg-white/40 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[40%] -right-20 w-[600px] h-[600px] bg-sky-200/50 rounded-full blur-3xl"
        />
        <div className="absolute bottom-0 left-0 right-0 h-[35%] bg-gradient-to-t from-[#0F4C75]/50 via-[#2076AB]/20 to-transparent" />
      </div>

      <div className="absolute inset-0 islamic-pattern-bg opacity-25" />

      {/* Main Container */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 max-w-sm sm:max-w-md w-full my-auto">
        
        {/* Guest Personalized Banner */}
        {guestName && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-3 px-5 py-2 rounded-full bg-white/90 backdrop-blur-md border border-wedding-gold/60 shadow-lg text-center"
          >
            <p className="text-xs font-semibold text-[#0F4C75] tracking-wide">
              ✨ Respected <span className="text-[#AA7C11] font-bold">{guestName}</span>, You are Warmly Invited! ✨
            </p>
          </motion.div>
        )}

        {/* Real Physical Card Representation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-[1/1.45] max-h-[66vh] rounded-2xl overflow-hidden shadow-2xl p-2.5 royal-border-gold bg-[#FAF4E8]"
          style={{
            boxShadow: "0 25px 60px -15px rgba(15,76,117,0.4), 0 0 35px rgba(212,175,55,0.3)",
          }}
        >
          {/* Card Frame Inner Shadow & Border */}
          <div className="relative w-full h-full rounded-xl overflow-hidden border border-wedding-gold/40">
            <Image
              src={weddingConfig.cardImage}
              alt="Ali Akbar & Fatema Wedding Invitation Card"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 90vw, 420px"
              priority
            />

            {/* Subtle Shimmer Sweep Overlay over card */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.4) 50%, transparent 70%)",
              }}
              animate={{
                x: ["-100%", "200%"],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>

        {/* TAP TO UNVEIL BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-5 text-center"
        >
          <button
            onClick={handleOpenClick}
            className="btn-royal shadow-xl flex items-center justify-center gap-2 mx-auto animate-pulse"
            aria-label="Tap to open the wedding invitation"
          >
            <span>✨ Tap to Open Invitation ✨</span>
          </button>
          <p className="text-[11px] text-white/90 tracking-wider uppercase mt-2 font-medium drop-shadow">
            Tap to start music & open invitation
          </p>
        </motion.div>
      </div>

      {/* Floating Sparkles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-yellow-200"
          style={{
            top: `${10 + (i * 9)}%`,
            left: `${8 + (i * 9)}%`,
            boxShadow: "0 0 8px rgba(255,235,150,0.9)",
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.7, 1.5, 0.7],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 2.5 + (i % 3),
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  );
}
