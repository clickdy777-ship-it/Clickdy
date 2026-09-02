"use client";

import { motion } from "framer-motion";
import Scene3D from "./Scene3D";

const tools = [
  { icon: "📄", name: "PDF to Word", tag: "Document" },
  { icon: "🗜️", name: "PDF Compress", tag: "Document" },
  { icon: "🖼️", name: "Background Remover", tag: "Image" },
  { icon: "📝", name: "AI Text to Speech", tag: "AI" },
  { icon: "💰", name: "Zakat Calculator", tag: "Finance" },
];

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-5 backdrop-blur-md bg-black/60 border-b border-white/10">
        <div className="text-xl font-bold tracking-tight">CLICKDY</div>
        <div className="hidden md:flex gap-8 text-sm text-white/70">
          <a href="#tools" className="hover:text-white transition">Tools</a>
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#faq" className="hover:text-white transition">FAQ</a>
        </div>
        <button className="bg-white text-black text-sm font-medium px-5 py-2 rounded-full hover:bg-white/90 transition">
          Get Started
        </button>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-28 pb-20 text-center">
        <Scene3D />
        <div className="relative z-10">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block text-xs uppercase tracking-widest text-white/50 border border-white/15 rounded-full px-4 py-1.5 mb-8"
          >
            Free · No Sign-Up · Runs In Your Browser
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] max-w-4xl mx-auto"
          >
            The platform that makes
            <br />
            <span className="bg-gradient-to-r from-teal-300 via-purple-400 to-pink-300 bg-clip-text text-transparent">
              everyday tools work for you.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white/50 text-lg max-w-xl mx-auto mt-6"
          >
            PDF tools, image tools, AI generators, and everyday utilities — all in one place, completely free.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center gap-4 mt-10"
          >
            <button className="bg-white text-black px-7 py-3 rounded-full font-medium hover:bg-white/90 transition">
              Browse Tools
            </button>
            <button className="border border-white/20 px-7 py-3 rounded-full font-medium hover:bg-white/10 transition">
              How it works
            </button>
          </motion.div>

          {/* Product mockup panel */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: "easeOut" }}
            className="relative max-w-4xl mx-auto mt-20 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-2xl overflow-hidden"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <span className="w-2 h-2 rounded-full bg-teal-400" /> CLICKDY
              </div>
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
              {tools.map((tool, i) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 + i * 0.06 }}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 text-left hover:bg-white/10 transition"
                >
                  <div className="text-2xl mb-3">{tool.icon}</div>
                  <div className="text-sm font-medium">{tool.name}</div>
                  <div className="text-xs text-white/40 mt-1">{tool.tag}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}