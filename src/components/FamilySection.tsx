"use client";

import { motion } from "framer-motion";
import { weddingConfig } from "@/config/weddingConfig";

export default function FamilySection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f4ebe1] via-[#FAF4E8] to-[#eef7fb]" />
      <div className="absolute inset-0 islamic-pattern-bg opacity-15" />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        {/* Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs uppercase tracking-[5px] text-[#2076AB] font-semibold mb-2">
            Family Invitation
          </p>
          <h2 className="font-script text-5xl text-gold-metallic">
            With Blessings of Family
          </h2>
        </motion.div>

        {/* Groom & Bride Family Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {/* Groom's Family Column */}
          <motion.div
            className="royal-card p-8 text-center relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-wedding-gold/15 text-[#AA7C11] font-arabic text-sm mb-3">
              {weddingConfig.groomTitle}
            </span>

            <h3 className="font-script text-4xl text-gold-metallic mb-1">
              {weddingConfig.groomName}
            </h3>
            <p className="font-urdu text-xl text-[#0F4C75] mb-4">
              {weddingConfig.groomNameUrdu}
            </p>

            <div className="w-16 h-[1px] mx-auto bg-wedding-gold/30 my-3" />

            <p className="font-urdu text-sm md:text-base text-[#1A2B3C]/80 leading-loose" style={{ direction: "rtl" }}>
              {weddingConfig.groomFatherInfo}
            </p>

            <p className="font-urdu text-xs text-wedding-gold-deep mt-2" style={{ direction: "rtl" }}>
              مقام: {weddingConfig.groomLocation}
            </p>
          </motion.div>

          {/* Bride's Family Column */}
          <motion.div
            className="royal-card p-8 text-center relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-wedding-gold/15 text-[#AA7C11] font-arabic text-sm mb-3">
              {weddingConfig.brideTitle}
            </span>

            <h3 className="font-script text-4xl text-gold-metallic mb-1">
              {weddingConfig.brideName}
            </h3>
            <p className="font-urdu text-xl text-[#0F4C75] mb-4">
              {weddingConfig.brideNameUrdu}
            </p>

            <div className="w-16 h-[1px] mx-auto bg-wedding-gold/30 my-3" />

            <p className="font-urdu text-sm md:text-base text-[#1A2B3C]/80 leading-loose" style={{ direction: "rtl" }}>
              {weddingConfig.brideFatherInfo}
            </p>

            <p className="font-urdu text-xs text-wedding-gold-deep mt-2" style={{ direction: "rtl" }}>
              مقام: {weddingConfig.brideLocation}
            </p>
          </motion.div>
        </div>

        {/* Blessings & Regards Box from Card */}
        <motion.div
          className="royal-card mt-10 p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="font-arabic text-lg text-[#AA7C11] mb-4" style={{ direction: "rtl" }}>
            {weddingConfig.blessingHeader}
          </p>

          <div className="space-y-3 font-urdu text-sm md:text-base text-[#1A2B3C]/85" style={{ direction: "rtl" }}>
            {weddingConfig.blessingNames.map((name, idx) => (
              <p key={idx} className="leading-relaxed">
                {name}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
