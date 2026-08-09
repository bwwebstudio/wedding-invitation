"use client";

import { useCallback } from "react";
import { motion } from "framer-motion";
import { weddingConfig } from "@/config/weddingConfig";

export default function ShareButton() {
  const handleShare = useCallback(async () => {
    const shareData = {
      title: weddingConfig.siteTitle,
      text: `You're invited to celebrate the Nikah of ${weddingConfig.groomName} & ${weddingConfig.brideName} ❤️`,
      url: typeof window !== "undefined" ? window.location.href : weddingConfig.siteUrl,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // User cancelled
      }
    } else {
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(`${shareData.text}\n${shareData.url}`);
        alert("Invitation link copied to clipboard!");
      } catch {
        // Clipboard failed
      }
    }
  }, []);

  return (
    <motion.button
      onClick={handleShare}
      className="fixed bottom-6 left-6 z-[80] w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300"
      style={{
        background: "rgba(255,255,240,0.8)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(201,168,76,0.3)",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.5 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Share this invitation"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-wedding-ocean"
      >
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    </motion.button>
  );
}
