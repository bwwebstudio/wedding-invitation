"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { weddingConfig } from "@/config/weddingConfig";
import Image from "next/image";

export default function ScratchReveal() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isScratching, setIsScratching] = useState(false);
  const [scratchProgress, setScratchProgress] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);
  const isDrawingRef = useRef(false);
  const lastPosRef = useRef<{ x: number; y: number } | null>(null);
  const animFrameRef = useRef<number>(0);

  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.scale(dpr, dpr);

    // Render Luxury Sky/Gold Metallic Foil Surface
    const gradient = ctx.createLinearGradient(0, 0, rect.width, rect.height);
    gradient.addColorStop(0, "#7ec8e3");
    gradient.addColorStop(0.35, "#5BA3C9");
    gradient.addColorStop(0.7, "#D4AF37");
    gradient.addColorStop(1, "#3A8EC1");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, rect.width, rect.height);

    // Geometric Star Pattern Foil Overlay
    ctx.globalAlpha = 0.12;
    ctx.strokeStyle = "#FFFFFF";
    ctx.lineWidth = 1;
    const size = 35;
    for (let x = 0; x < rect.width; x += size) {
      for (let y = 0; y < rect.height; y += size) {
        ctx.beginPath();
        ctx.arc(x + size / 2, y + size / 2, size / 3, 0, Math.PI * 2);
        ctx.stroke();
      }
    }
    ctx.globalAlpha = 1;

    // Double Gold Foil Border Frame
    ctx.strokeStyle = "rgba(255, 245, 200, 0.7)";
    ctx.lineWidth = 3;
    ctx.strokeRect(6, 6, rect.width - 12, rect.height - 12);
    ctx.strokeStyle = "rgba(212, 175, 55, 0.5)";
    ctx.lineWidth = 1;
    ctx.strokeRect(10, 10, rect.width - 20, rect.height - 20);

    // Calligraphy / Scratch Prompt Text
    ctx.shadowColor = "rgba(0,0,0,0.3)";
    ctx.shadowBlur = 4;
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 20px 'Playfair Display', Georgia, serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("✨ Scratch Here ✨", rect.width / 2, rect.height / 2 - 12);

    ctx.font = "italic 13px 'Playfair Display', Georgia, serif";
    ctx.fillStyle = "#FFF8DC";
    ctx.fillText("To Reveal Ali Akbar & Fatema", rect.width / 2, rect.height / 2 + 16);
    ctx.shadowBlur = 0;
  }, []);

  useEffect(() => {
    initCanvas();
    const handleResize = () => {
      if (!isRevealed) initCanvas();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [initCanvas, isRevealed]);

  const calculateProgress = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return 0;
    const ctx = canvas.getContext("2d");
    if (!ctx) return 0;

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;
    let cleared = 0;
    const total = pixels.length / 4;

    for (let i = 3; i < pixels.length; i += 4) {
      if (pixels[i] === 0) cleared++;
    }
    return cleared / total;
  }, []);

  const scratch = useCallback(
    (x: number, y: number) => {
      const canvas = canvasRef.current;
      if (!canvas || isRevealed) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      const canvasX = (x - rect.left) * dpr;
      const canvasY = (y - rect.top) * dpr;

      ctx.save();
      ctx.globalCompositeOperation = "destination-out";

      const brushSize = 36 * dpr;

      if (lastPosRef.current) {
        const lastX = lastPosRef.current.x * dpr;
        const lastY = lastPosRef.current.y * dpr;
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(canvasX, canvasY);
        ctx.strokeStyle = "rgba(0,0,0,1)";
        ctx.lineWidth = brushSize;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.stroke();
      }

      ctx.beginPath();
      ctx.arc(canvasX, canvasY, brushSize / 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      lastPosRef.current = { x: x - rect.left, y: y - rect.top };
    },
    [isRevealed]
  );

  const checkProgress = useCallback(() => {
    const progress = calculateProgress();
    setScratchProgress(progress);

    if (progress >= 0.55 && !isRevealed) {
      setIsRevealed(true);
      setShowCelebration(true);
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.style.transition = "opacity 0.8s ease";
        canvas.style.opacity = "0";
      }
      setTimeout(() => setShowCelebration(false), 3500);
    }
  }, [calculateProgress, isRevealed]);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (isRevealed) return;
      e.preventDefault();
      isDrawingRef.current = true;
      setIsScratching(true);
      lastPosRef.current = null;
      scratch(e.clientX, e.clientY);
    },
    [scratch, isRevealed]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDrawingRef.current || isRevealed) return;
      e.preventDefault();
      cancelAnimationFrame(animFrameRef.current);
      animFrameRef.current = requestAnimationFrame(() => {
        scratch(e.clientX, e.clientY);
      });
    },
    [scratch, isRevealed]
  );

  const handlePointerEnd = useCallback(() => {
    if (isDrawingRef.current) {
      isDrawingRef.current = false;
      setIsScratching(false);
      lastPosRef.current = null;
      checkProgress();
    }
  }, [checkProgress]);

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#eef7fb] via-[#FAF4E8] to-[#f4ebe1]" />
      <div className="absolute inset-0 islamic-pattern-bg opacity-15" />

      <div className="relative z-10 max-w-lg mx-auto px-6 text-center">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs uppercase tracking-[5px] text-[#2076AB] font-semibold mb-2">
            Interactive Experience
          </p>
          <h2 className="font-script text-5xl md:text-6xl text-gold-metallic">
            Scratch to Reveal
          </h2>
        </motion.div>

        {/* Scratch Card Frame */}
        <motion.div
          ref={containerRef}
          className="relative w-full aspect-[3/4] max-w-[360px] mx-auto rounded-2xl overflow-hidden shadow-2xl royal-border-gold"
          style={{
            border: "3px solid rgba(212,175,55,0.4)",
            boxShadow: "0 15px 45px -10px rgba(15,76,117,0.25), 0 0 25px rgba(212,175,55,0.2)",
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Couple Image (Reference Image 2) underneath */}
          <div className="absolute inset-0">
            <Image
              src={weddingConfig.coupleImage}
              alt={`${weddingConfig.groomName} and ${weddingConfig.brideName}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 90vw, 360px"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          {/* HTML5 Canvas Scratch Surface */}
          {!isRevealed && (
            <canvas
              ref={canvasRef}
              className="absolute inset-0 w-full h-full scratch-canvas z-10"
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerEnd}
              onPointerCancel={handlePointerEnd}
              onPointerLeave={handlePointerEnd}
              style={{ touchAction: "none" }}
            />
          )}

          {/* Percentage badge */}
          {!isRevealed && scratchProgress > 0.05 && (
            <div className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-md rounded-full px-3 py-1 border border-wedding-gold/40">
              <span className="text-xs text-wedding-gold-light font-bold">
                {Math.round(scratchProgress * 100)}% Revealed
              </span>
            </div>
          )}
        </motion.div>

        {!isRevealed && !isScratching && (
          <motion.p
            className="text-sm font-medium text-[#2076AB] mt-5 flex items-center justify-center gap-2"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          >
            <span>✨ Use your finger or cursor to scratch ✨</span>
          </motion.p>
        )}

        {/* Celebration Dust */}
        <AnimatePresence>
          {showCelebration && (
            <div className="fixed inset-0 pointer-events-none z-50">
              {[...Array(30)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    width: Math.random() * 8 + 3,
                    height: Math.random() * 8 + 3,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    background: i % 2 === 0 ? "#D4AF37" : "#87CEEB",
                    boxShadow: "0 0 10px rgba(212,175,55,0.8)",
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1.8, 0],
                    y: [0, -(Math.random() * 120 + 60)],
                    x: [(Math.random() - 0.5) * 80],
                  }}
                  transition={{
                    duration: 2.5 + Math.random(),
                    delay: Math.random() * 0.4,
                    ease: "easeOut",
                  }}
                />
              ))}
            </div>
          )}
        </AnimatePresence>

        {/* Reveal Title */}
        <AnimatePresence>
          {isRevealed && (
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="font-script text-5xl text-gold-metallic mb-1">
                {weddingConfig.groomName} ❤️ {weddingConfig.brideName}
              </h3>
              <p className="font-urdu text-lg text-[#0F4C75] mt-1">
                نکاح مبارک
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
