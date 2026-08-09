"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MusicButton() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element only on client
    const a = new Audio("/music/wedding.mp3");
    a.loop = true;
    a.volume = 0.3;
    setAudio(a);

    return () => {
      a.pause();
      a.src = "";
    };
  }, []);

  const toggleMusic = () => {
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(() => {
        // Autoplay blocked — user hasn't interacted yet
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.button
      onClick={toggleMusic}
      className="fixed bottom-6 right-6 z-[80] w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300"
      style={{
        background: "rgba(255,255,240,0.8)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(201,168,76,0.3)",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      whileTap={{ scale: 0.9 }}
      aria-label={isPlaying ? "Pause music" : "Play music"}
    >
      <AnimatePresence mode="wait">
        {isPlaying ? (
          <motion.svg
            key="playing"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-wedding-ocean"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
          >
            {/* Sound waves animation */}
            <motion.path
              d="M11 5L6 9H2v6h4l5 4V5z"
              fill="rgba(91,163,201,0.15)"
            />
            <motion.path
              d="M15.54 8.46a5 5 0 0 1 0 7.07"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
            <motion.path
              d="M19.07 4.93a10 10 0 0 1 0 14.14"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.3 }}
            />
          </motion.svg>
        ) : (
          <motion.svg
            key="muted"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-wedding-gold/70"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
          >
            <path d="M11 5L6 9H2v6h4l5 4V5z" fill="rgba(201,168,76,0.1)" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </motion.svg>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
