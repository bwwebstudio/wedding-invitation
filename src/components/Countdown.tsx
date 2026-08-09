"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { weddingConfig } from "@/config/weddingConfig";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [isToday, setIsToday] = useState(false);

  useEffect(() => {
    const targetDate = new Date(weddingConfig.weddingDateISO).getTime();

    const calculate = () => {
      const now = Date.now();
      const diff = targetDate - now;

      if (diff <= 0) {
        setIsToday(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    calculate();
    const interval = setInterval(calculate, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!timeLeft) return null;

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#5BA3C9] via-[#87CEEB] to-[#B8E4F0]" />
      <div className="absolute inset-0 islamic-pattern-bg opacity-20" />
      {/* Clouds */}
      <div className="absolute top-[10%] left-[5%] w-40 h-12 bg-white/20 rounded-full blur-2xl" />
      <div className="absolute top-[20%] right-[15%] w-56 h-16 bg-white/15 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-lg mx-auto px-6 text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-3xl md:text-4xl text-white mb-2"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            Counting Down to Nikah
          </h2>
          <p className="text-sm text-white/50 tracking-wider uppercase mb-10">
            {weddingConfig.weddingDay}, {weddingConfig.weddingDate}
          </p>
        </motion.div>

        {isToday ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p
              className="text-3xl md:text-4xl text-white"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              Today is the Nikah ❤️
            </p>
          </motion.div>
        ) : (
          <motion.div
            className="grid grid-cols-4 gap-3 md:gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <CountdownUnit value={timeLeft.days} label="Days" />
            <CountdownUnit value={timeLeft.hours} label="Hours" />
            <CountdownUnit value={timeLeft.minutes} label="Minutes" />
            <CountdownUnit value={timeLeft.seconds} label="Seconds" />
          </motion.div>
        )}
      </div>
    </section>
  );
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div
      className="flex flex-col items-center p-4 md:p-5 rounded-lg"
      style={{
        background: "rgba(255,255,255,0.1)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255,255,255,0.15)",
      }}
    >
      <span
        className="text-3xl md:text-4xl font-light text-white tabular-nums"
        key={value}
      >
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-xs uppercase tracking-[2px] text-white/50 mt-1">
        {label}
      </span>
    </div>
  );
}
