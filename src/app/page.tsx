"use client";

import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import OpeningScreen from "@/components/OpeningScreen";
import OpeningAnimation from "@/components/OpeningAnimation";
import HeroSection from "@/components/HeroSection";
import IslamicGreeting from "@/components/IslamicGreeting";
import DecorativeDivider from "@/components/DecorativeDivider";
import ScratchReveal from "@/components/ScratchReveal";
import WeddingDate from "@/components/WeddingDate";
import Countdown from "@/components/Countdown";
import EventsTimeline from "@/components/EventsTimeline";
import FamilySection from "@/components/FamilySection";
import VenueSection from "@/components/VenueSection";
import MusicButton from "@/components/MusicButton";
import FloatingDecorations from "@/components/FloatingDecorations";
import ShareButton from "@/components/ShareButton";
import GuestInviteModal from "@/components/GuestInviteModal";
import Footer from "@/components/Footer";

type AppState = "loading" | "opening" | "animating" | "main";

export default function Home() {
  const [appState, setAppState] = useState<AppState>("loading");
  const [showDoors, setShowDoors] = useState(false);

  const handleLoadingComplete = useCallback(() => {
    setAppState("opening");
  }, []);

  const handleOpen = useCallback(() => {
    setAppState("animating");
    setShowDoors(true);
  }, []);

  const handleAnimationComplete = useCallback(() => {
    setAppState("main");
    setShowDoors(false);
  }, []);

  return (
    <main className="relative">
      {/* Phase 1: Loading */}
      <AnimatePresence>
        {appState === "loading" && (
          <LoadingScreen onComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      {/* Phase 2: Opening Screen */}
      <AnimatePresence>
        {appState === "opening" && (
          <motion.div
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <OpeningScreen onOpen={handleOpen} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Phase 3: Door Opening Animation */}
      <OpeningAnimation isOpen={showDoors} onComplete={handleAnimationComplete} />

      {/* Phase 4: Main Content */}
      {(appState === "main" || appState === "animating") && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: appState === "main" ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Hero Section */}
          <HeroSection />

          {/* Islamic Greeting / Invitation Message */}
          <IslamicGreeting />

          {/* Decorative Transition */}
          <DecorativeDivider variant="ocean" />

          {/* Scratch to Reveal */}
          <ScratchReveal />

          {/* Decorative Transition */}
          <DecorativeDivider variant="gold" />

          {/* Wedding Date */}
          <WeddingDate />

          {/* Countdown */}
          <Countdown />

          {/* Events Timeline */}
          <EventsTimeline />

          {/* Decorative Transition */}
          <DecorativeDivider variant="gold" />

          {/* Family Section */}
          <FamilySection />

          {/* Decorative Transition */}
          <DecorativeDivider variant="ocean" />

          {/* Venue Section */}
          <VenueSection />

          {/* Decorative Transition */}
          <DecorativeDivider variant="light" />

          {/* Footer / Final Blessing */}
          <Footer />

          {/* Floating UI */}
          <MusicButton />
          <ShareButton />
          <FloatingDecorations />
        </motion.div>
      )}
    </main>
  );
}
