"use client";

import { motion } from "framer-motion";

const TOOLS = [
  {
    name: "PDF to Word",
    desc: "Turn a locked PDF into an editable document.",
    icon: <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6" />,
    from: { x: -220, y: -140, rotate: -20, scale: 0.2 },
  },
  {
    name: "PDF Compress",
    desc: "Shrink file size while keeping quality sharp.",
    icon: <path d="M8 3v4a1 1 0 0 1-1 1H3M21 8h-4a1 1 0 0 1-1-1V3M3 16h4a1 1 0 0 1 1 1v4M16 21v-4a1 1 0 0 1 1-1h4" />,
    from: { x: 0, y: -260, rotate: 15, scale: 0.15 },
  },
  {
    name: "Background Remover",
    desc: "Strip the background from any photo instantly.",
    icon: <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />,
    from: { x: 220, y: -140, rotate: 20, scale: 0.2 },
  },
  {
    name: "Image Resizer",
    desc: "Resize images precisely, without losing quality.",
    icon: <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />,
    from: { x: -220, y: 140, rotate: 18, scale: 0.2 },
  },
  {
    name: "AI Image Generator",
    desc: "Turn a text prompt into a generated image.",
    icon: <path d="M12 2l2.4 7.2H22l-6 4.4 2.4 7.2L12 16.4l-6.4 4.4 2.4-7.2-6-4.4h7.6z" />,
    from: { x: 0, y: 260, rotate: -15, scale: 0.15 },
  },
  {
    name: "AI Text to Speech",
    desc: "Convert written text into natural speech.",
    icon: <path d="M11 5L6 9H2v6h4l5 4V5z M15.5 8.5a5 5 0 0 1 0 7 M18.5 5.5a9 9 0 0 1 0 13" />,
    from: { x: 220, y: 140, rotate: -18, scale: 0.2 },
  },
];

export default function ToolsSection() {
  return (
    <section className="relative bg-black text-white px-6 py-32 overflow-hidden">
      {/* Central glowing node — the "source" cards emerge from */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          width: "380px",
          height: "380px",
          background: "radial-gradient(circle, rgba(43,224,196,0.2) 0%, rgba(168,85,247,0.1) 45%, transparent 75%)",
          filter: "blur(24px)",
        }}
        initial={{ scale: 0.4, opacity: 0 }}
        whileInView={{ scale: [0.4, 1.3, 1], opacity: [0, 1, 0.6] }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: "easeOut" }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          width: "380px",
          height: "380px",
          background: "radial-gradient(circle, rgba(43,224,196,0.12) 0%, transparent 70%)",
          filter: "blur(24px)",
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto text-center mb-20">
        <motion.span
          initial={{ opacity: 0, y: -20, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 14 }}
          className="inline-block text-xs uppercase tracking-widest text-teal-300/70 mb-4"
        >
          The Toolbox
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 120, damping: 14, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold tracking-tight"
        >
          Every tool. One platform.
        </motion.h2>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {TOOLS.map((tool, i) => (
          <motion.div
            key={tool.name}
            initial={{
              opacity: 0,
              x: tool.from.x,
              y: tool.from.y,
              rotate: tool.from.rotate,
              scale: tool.from.scale,
            }}
            whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              type: "spring",
              stiffness: 90,
              damping: 11,
              mass: 0.9,
              delay: i * 0.1,
            }}
            className="relative bg-white/[0.04] border border-white/10 rounded-2xl p-7 text-left hover:border-teal-400/40 hover:bg-white/[0.07] transition-colors"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1 + i * 0.15,
              }}
            >
              <motion.div
                className="w-11 h-11 rounded-xl bg-teal-400/10 border border-teal-400/20 flex items-center justify-center mb-5 text-teal-300"
                animate={{
                  boxShadow: [
                    "0 0 0px rgba(43,224,196,0)",
                    "0 0 14px rgba(43,224,196,0.35)",
                    "0 0 0px rgba(43,224,196,0)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                  {tool.icon}
                </svg>
              </motion.div>
              <h3 className="text-lg font-semibold mb-2">{tool.name}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{tool.desc}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}