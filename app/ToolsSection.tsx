"use client";

import { motion } from "framer-motion";

const TOOLS = [
  {
    name: "PDF to Word",
    desc: "Turn a locked PDF into an editable document.",
    icon: (
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6" />
    ),
  },
  {
    name: "PDF Compress",
    desc: "Shrink file size while keeping quality sharp.",
    icon: (
      <path d="M8 3v4a1 1 0 0 1-1 1H3M21 8h-4a1 1 0 0 1-1-1V3M3 16h4a1 1 0 0 1 1 1v4M16 21v-4a1 1 0 0 1 1-1h4" />
    ),
  },
  {
    name: "Background Remover",
    desc: "Strip the background from any photo instantly.",
    icon: <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />,
  },
  {
    name: "Image Resizer",
    desc: "Resize images precisely, without losing quality.",
    icon: <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />,
  },
  {
    name: "AI Image Generator",
    desc: "Turn a text prompt into a generated image.",
    icon: (
      <path d="M12 2l2.4 7.2H22l-6 4.4 2.4 7.2L12 16.4l-6.4 4.4 2.4-7.2-6-4.4h7.6z" />
    ),
  },
  {
    name: "AI Text to Speech",
    desc: "Convert written text into natural speech.",
    icon: (
      <path d="M11 5L6 9H2v6h4l5 4V5z M15.5 8.5a5 5 0 0 1 0 7 M18.5 5.5a9 9 0 0 1 0 13" />
    ),
  },
];

export default function ToolsSection() {
  return (
    <section className="relative bg-black text-white px-6 py-28 overflow-hidden">
      {/* Decorative connecting lines behind the grid */}
      <svg
        className="absolute inset-0 w-full h-full opacity-40 pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="toolLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2BE0C4" stopOpacity="0" />
            <stop offset="50%" stopColor="#2BE0C4" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.line
          x1="0" y1="18" x2="100" y2="18"
          stroke="url(#toolLine)" strokeWidth="0.15"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />
        <motion.line
          x1="0" y1="55" x2="100" y2="55"
          stroke="url(#toolLine)" strokeWidth="0.15"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.2, ease: "easeOut" }}
        />
      </svg>

      {/* Central glowing node */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          width: "340px",
          height: "340px",
          background: "radial-gradient(circle, rgba(43,224,196,0.14) 0%, transparent 70%)",
          filter: "blur(20px)",
        }}
        animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto text-center mb-16">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-block text-xs uppercase tracking-widest text-teal-300/70 mb-4"
        >
          The Toolbox
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold tracking-tight"
        >
          Every tool. One platform.
        </motion.h2>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {TOOLS.map((tool, i) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.12 }}
            className="relative bg-white/[0.04] border border-white/10 rounded-2xl p-7 text-left hover:border-teal-400/40 hover:bg-white/[0.07] transition-colors"
          >
            <motion.div
              className="w-11 h-11 rounded-xl bg-teal-400/10 border border-teal-400/20 flex items-center justify-center mb-5 text-teal-300"
              animate={{ boxShadow: [
                "0 0 0px rgba(43,224,196,0)",
                "0 0 14px rgba(43,224,196,0.35)",
                "0 0 0px rgba(43,224,196,0)",
              ] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                {tool.icon}
              </svg>
            </motion.div>
            <h3 className="text-lg font-semibold mb-2">{tool.name}</h3>
            <p className="text-white/50 text-sm leading-relaxed">{tool.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}