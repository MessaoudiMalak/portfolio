"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { SplashScreen } from "@/components/SplashScreen";

import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      <AnimatePresence>
        {showSplash && (
          <SplashScreen onComplete={() => setShowSplash(false)} />
        )}
      </AnimatePresence>

      {!showSplash && (
        <main className="relative z-0 bg-primary-black">
          <Header />
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>
      )}
    </>
  );
}
