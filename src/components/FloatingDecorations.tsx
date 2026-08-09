"use client";

import { useEffect, useState } from "react";

export default function FloatingDecorations() {
  const [particles, setParticles] = useState<
    { id: number; x: number; size: number; delay: number; duration: number; type: string }[]
  >([]);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    // Generate particles
    const items = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 15,
      duration: 15 + Math.random() * 10,
      type: ["petal", "sparkle", "pearl"][Math.floor(Math.random() * 3)],
    }));
    setParticles(items);
  }, []);

  if (particles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden floating-decoration">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute"
          style={{
            left: `${p.x}%`,
            bottom: "-20px",
            width: `${p.size}px`,
            height: `${p.size}px`,
            animation: `drift ${p.duration}s linear ${p.delay}s infinite`,
            opacity: 0,
          }}
        >
          {p.type === "petal" && (
            <div
              className="w-full h-full rounded-full"
              style={{
                background: "linear-gradient(135deg, rgba(201,168,76,0.3), rgba(201,168,76,0.1))",
                borderRadius: "50% 0 50% 0",
                transform: "rotate(45deg)",
              }}
            />
          )}
          {p.type === "sparkle" && (
            <div
              className="w-full h-full rounded-full"
              style={{
                background: "rgba(255,255,255,0.5)",
                boxShadow: "0 0 4px rgba(255,255,255,0.3)",
              }}
            />
          )}
          {p.type === "pearl" && (
            <div
              className="w-full h-full rounded-full"
              style={{
                background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.6), rgba(240,234,214,0.3))",
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
