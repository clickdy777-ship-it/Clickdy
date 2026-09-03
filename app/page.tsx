"use client";

import { motion } from "framer-motion";
import Scene3D from "./Scene3D";
import ToolsCarousel from "./ToolsCarousel";
import ToolsCylinderSection from "./ToolsCylinderSection";
import { FlipText } from "./AnimatedHeadline";

export default function Home() {
  return (
    <main className="relative bg-black text-white">
      {/* Floating glass navbar */}
      <div className="fixed top-4 left-4 right-4 z-50 flex justify-center">
        <nav className="flex items-center justify-between w-full max-w-5xl px-6 py-3.5 rounded-2xl bg-white/[0.06] backdrop-blur-2xl border border-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="text-lg font-bold tracking-tight">CLICKDY</div>
          <div className="hidden md:flex gap-8 text-sm text-white/70">
            <a href="#tools" className="hover:text-white transition">Tools</a>
          </div>
          <a href="#tools" className="bg-white text-black text-sm font-medium px-5 py-2 rounded-full hover:bg-white/90 transition">Get Started</a>
        </nav>
      </div>

      {/* Hero */}
      <section className="relative h-screen overflow-hidden px-6 pt-20 flex flex-col items-center justify-center text-center">
        <Scene3D />
        <div className="relative z-10">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block text-xs uppercase tracking-widest text-white/50 border border-white/15 rounded-full px-4 py-1.5 mb-6"
          >
            Free · No Sign-Up · Runs In Your Browser
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] max-w-3xl mx-auto"
          >
            <FlipText text="The platform that makes" />
            <br />
            <FlipText text="everyday tools work for you" />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white/50 text-base md:text-lg max-w-xl mx-auto mt-5"
          >
            PDF tools, image tools, AI generators, and everyday utilities — all in one place, completely free.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center gap-4 mt-8"
          >
            <a href="#tools" className="bg-white text-black px-7 py-3 rounded-full font-medium hover:bg-white/90 transition">Browse Tools</a>
            <button className="border border-white/20 px-7 py-3 rounded-full font-medium hover:bg-white/10 transition">How it works</button>
          </motion.div>
        </div>
      </section>

      <div id="tools">
        <ToolsCarousel />
        <ToolsCylinderSection />
      </div>
    </main>
  );
}