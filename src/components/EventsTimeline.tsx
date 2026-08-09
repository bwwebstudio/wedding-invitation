"use client";

import { motion } from "framer-motion";
import { weddingConfig } from "@/config/weddingConfig";

export default function EventsTimeline() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#B8E4F0] via-[#e8f4f8] to-[#f0f7fb]" />
      <div className="absolute inset-0 islamic-pattern-bg opacity-15" />

      <div className="relative z-10 max-w-lg mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-3xl md:text-4xl text-wedding-ocean-deep mb-2"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            Our Special Day
          </h2>
          <p
            className="text-base text-wedding-gold/70"
            style={{ fontFamily: "'Amiri', serif", direction: "rtl" }}
          >
            {weddingConfig.programHeading}
          </p>
        </motion.div>

        {/* Events */}
        <div className="relative">
          {/* Timeline line */}
          <motion.div
            className="absolute left-6 top-0 bottom-0 w-[1px] bg-gradient-to-b from-wedding-gold/30 via-wedding-gold/20 to-transparent"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ transformOrigin: "top" }}
          />

          {weddingConfig.events.map((event, index) => (
            <motion.div
              key={index}
              className="relative pl-16 mb-8 last:mb-0"
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.15 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-[18px] top-2 w-4 h-4 rounded-full border-2 border-wedding-gold/40 bg-wedding-ivory flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-wedding-gold/60" />
              </div>

              {/* Event card */}
              <div
                className="p-5 md:p-6 rounded-lg"
                style={{
                  background: "rgba(255,255,240,0.8)",
                  border: "1px solid rgba(201,168,76,0.15)",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
                }}
              >
                <h3 className="text-xl font-semibold text-wedding-ocean-deep mb-1">
                  {event.name}
                </h3>
                <p
                  className="text-base text-wedding-gold/80 mb-3"
                  style={{ fontFamily: "'Amiri', serif", direction: "rtl", textAlign: "left" }}
                >
                  {event.nameUrdu}
                </p>

                <div className="space-y-1.5 text-sm text-[#2c3e50]/60">
                  <div className="flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
