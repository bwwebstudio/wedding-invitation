"use client";

import { motion } from "framer-motion";
import { weddingConfig } from "@/config/weddingConfig";

export default function VenueSection() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(weddingConfig.mapsQuery)}`;
  const embedUrl = `https://www.google.com/maps?q=${weddingConfig.latitude},${weddingConfig.longitude}&z=15&output=embed`;

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#eef7fb] via-[#f7faff] to-[#FAF4E8]" />
      <div className="absolute inset-0 islamic-pattern-bg opacity-15" />

      <div className="relative z-10 max-w-xl mx-auto px-6 text-center">
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs uppercase tracking-[5px] text-[#2076AB] font-semibold mb-2">
            Wedding Venue
          </p>
          <h2 className="font-script text-5xl text-gold-metallic">
            Location & Destination
          </h2>
        </motion.div>

        {/* Venue Card */}
        <motion.div
          className="royal-card p-8 md:p-10 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Map Pin Icon */}
          <div className="w-14 h-14 mx-auto rounded-full bg-wedding-gold/15 flex items-center justify-center mb-4 text-[#AA7C11]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>

          {/* Urdu Venue from Card */}
          <h3 className="font-urdu text-xl md:text-2xl text-[#0F4C75] mb-2 leading-relaxed" style={{ direction: "rtl" }}>
            {weddingConfig.venueUrdu}
          </h3>

          {/* English Venue */}
          <p className="text-base font-semibold text-[#AA7C11] tracking-wide mb-1">
            {weddingConfig.venueEnglish}
          </p>

          <p className="text-xs uppercase tracking-[3px] text-[#1A2B3C]/60 mb-4">
            {weddingConfig.location}, MP, India
          </p>

          <div className="w-20 h-[1px] mx-auto bg-wedding-gold/30 my-4" />

          {/* Date & Time */}
          <p className="text-sm font-medium text-[#2076AB]">
            {weddingConfig.weddingDay}, {weddingConfig.weddingDate} • {weddingConfig.weddingTime} {weddingConfig.weddingTimeNote}
          </p>
        </motion.div>

        {/* Google Maps Container */}
        <motion.div
          className="royal-card overflow-hidden rounded-2xl p-2 mb-6"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <iframe
            src={embedUrl}
            width="100%"
            height="300"
            className="rounded-xl"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Map to ${weddingConfig.venueEnglish}`}
          />
        </motion.div>

        {/* Action Button */}
        <motion.a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-royal inline-flex items-center gap-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          Get Directions
        </motion.a>
      </div>
    </section>
  );
}
