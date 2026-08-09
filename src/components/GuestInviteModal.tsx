"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { weddingConfig } from "@/config/weddingConfig";

export default function GuestInviteModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [guestName, setGuestName] = useState("");
  const [copied, setCopied] = useState(false);

  const getPersonalizedLink = () => {
    const baseUrl = typeof window !== "undefined" ? window.location.origin : weddingConfig.siteUrl;
    if (!guestName.trim()) return baseUrl;
    return `${baseUrl}?guest=${encodeURIComponent(guestName.trim())}`;
  };

  const getWhatsAppMessage = () => {
    const link = getPersonalizedLink();
    const nameStr = guestName.trim() ? ` *${guestName.trim()}*` : "";
    return `*Bismillah hir Rahman nir Raheem*\n\nAssalamu Alaikum${nameStr}! 🌹\n\nYou are cordially invited to celebrate the auspicious Nikah of *${weddingConfig.groomName} & ${weddingConfig.brideName}*.\n\n📅 *Date:* ${weddingConfig.weddingDay}, ${weddingConfig.weddingDate}\n⏰ *Time:* ${weddingConfig.weddingTime} ${weddingConfig.weddingTimeNote}\n📍 *Venue:* ${weddingConfig.venueEnglish}\n\n✨ *Open Your Royal Interactive Invitation Here:* 👇\n${link}\n\nWe eagerly look forward to your gracious presence & prayers! ❤️`;
  };

  const handleShareWhatsApp = () => {
    const text = getWhatsAppMessage();
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(getPersonalizedLink());
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-20 z-[80] px-4 py-2.5 rounded-full flex items-center gap-2 text-xs font-semibold tracking-wider uppercase shadow-xl transition-all"
        style={{
          background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
          color: "#FFFFFF",
          border: "1px solid rgba(255,255,255,0.4)",
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 001.333 4.993L2 22l5.233-1.237a9.96 9.96 0 004.779 1.221h.004c5.505 0 9.988-4.478 9.989-9.985 0-2.669-1.038-5.178-2.925-7.064A9.923 9.923 0 0012.012 2z" />
        </svg>
        <span>Invite Guest</span>
      </motion.button>

      {/* Modal Popup */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md p-6 rounded-2xl royal-card text-center"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-wedding-gold hover:text-black text-lg"
              >
                ✕
              </button>

              <h3 className="font-script text-3xl text-gold-metallic mb-1">
                Personalized Invitation
              </h3>
              <p className="text-xs text-[#2076AB] uppercase tracking-wider mb-5">
                Generate guest invite link for WhatsApp
              </p>

              {/* Guest Name Input */}
              <div className="mb-5 text-left">
                <label className="block text-xs font-semibold text-[#1A2B3C] mb-1.5 uppercase tracking-wide">
                  Guest Name / Family Name:
                </label>
                <input
                  type="text"
                  placeholder="e.g. Burhanuddin Bhai & Family"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-wedding-gold/40 bg-white/90 text-sm font-medium text-[#1A2B3C] focus:outline-none focus:border-wedding-gold shadow-inner"
                />
              </div>

              {/* Preview Box */}
              <div className="p-3 rounded-xl bg-wedding-gold/10 border border-wedding-gold/20 text-left mb-6 text-xs text-[#1A2B3C]/80 leading-relaxed font-mono overflow-x-auto max-h-32">
                {getWhatsAppMessage()}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleShareWhatsApp}
                  className="flex-1 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white shadow-md flex items-center justify-center gap-2"
                  style={{ background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 001.333 4.993L2 22l5.233-1.237a9.96 9.96 0 004.779 1.221h.004c5.505 0 9.988-4.478 9.989-9.985 0-2.669-1.038-5.178-2.925-7.064A9.923 9.923 0 0012.012 2z" />
                  </svg>
                  Send via WhatsApp
                </button>

                <button
                  onClick={handleCopyLink}
                  className="py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-[#0F4C75] bg-wedding-sky-light/40 border border-wedding-sky-dark/30 shadow-sm"
                >
                  {copied ? "Copied! ✓" : "Copy Link"}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
