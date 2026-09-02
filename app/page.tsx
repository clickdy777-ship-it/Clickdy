"use client";

import { motion } from "framer-motion";

const tools = [
  { icon: "📄", name: "PDF to Word", tag: "Document" },
  { icon: "🗜️", name: "PDF Compress", tag: "Document" },
  { icon: "🖼️", name: "Background Remover", tag: "Image" },
  { icon: "📐", name: "Image Resizer", tag: "Image" },
  { icon: "🔗", name: "QR Generator", tag: "Utility" },
  { icon: "🤖", name: "AI Image Generator", tag: "AI" },
  { icon: "🎙️", name: "AI Text to Speech", tag: "AI" },
  { icon: "💰", name: "Zakat Calculator", tag: "Finance" },
];

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Animated background glow lines */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-purple-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[120px]" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.15]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2BE0C4" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.line
              key={i}
              x1={`${i * 12}%`}
              y1="0%"
              x2={`${i * 12 + 20}%`}
              y2="100%"
              stroke="url(#lineGrad)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, delay: i * 0.1, ease: "easeInOut" }}
            />
          ))}
        </svg>
      </div>

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
      <section className="relative px-6 pt-28 pb-20 text-center">
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
      </section>

      {/* Stats row */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto px-6 py-16 border-y border-white/10 text-center">
        {[
          ["18+", "Free Tools"],
          ["100%", "Client-Side"],
          ["0", "Sign-Ups Needed"],
          ["24/7", "Available"],
        ].map(([num, label]) => (
          <div key={label}>
            <div className="text-3xl md:text-4xl font-bold">{num}</div>
            <div className="text-white/40 text-sm mt-1">{label}</div>
          </div>
        ))}
      </section>

      {/* Features */}
      <section id="features" className="px-6 py-24 max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Built to feel effortless.
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "No Installs", desc: "Every tool runs directly in your browser — nothing to download, nothing to configure." },
            { title: "Private by Design", desc: "Most tools process your files locally, so they never leave your device." },
            { title: "Always Free", desc: "No premium tier, no hidden paywalls — just tools that work, whenever you need them." },
          ].map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-teal-400/30 transition"
            >
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 text-center border-t border-white/10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready when you are.</h2>
        <p className="text-white/50 mb-10 max-w-md mx-auto">
          Pick a tool and get started — no account, no waiting.
        </p>
        <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-white/90 transition">
          Browse All Tools
        </button>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-8 py-10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
        <div className="text-white font-bold">CLICKDY</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition">Privacy</a>
          <a href="#" className="hover:text-white transition">Terms</a>
          <a href="#" className="hover:text-white transition">Contact</a>
        </div>
        <div>© 2026 Clickdy. All rights reserved.</div>
      </footer>
    </main>
  );
}