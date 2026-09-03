"use client";

import { motion } from "framer-motion";

const LEFT_TOOLS = ["PDF to Word", "PDF Merge", "PDF Split"];
const RIGHT_TOOLS = ["PDF Compress", "JPG to PDF", "PDF to JPG"];
const SIDE_Y = [20, 50, 80];
const LEFT_X = 14;
const RIGHT_X = 86;
const CENTER_X = 50;
const CENTER_Y = 50;

function FlowParticles({
  fromX, fromY, toX, toY, count = 3, delayBase = 0,
}: { fromX: number; fromY: number; toX: number; toY: number; count?: number; delayBase?: number }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <motion.circle
          key={i}
          r="0.7"
          fill="#7DEBD8"
          filter="url(#fiberGlow)"
          initial={{ opacity: 0 }}
          animate={{
            cx: [fromX, toX],
            cy: [fromY, toY],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.8,
            delay: delayBase + i * 0.6,
            repeat: Infinity,
            repeatDelay: (count - 1) * 0.6 * 0.5,
            ease: "linear",
          }}
        />
      ))}
    </>
  );
}

function GlassToolBox({ name, x, y, fromX }: { name: string; x: number; y: number; fromX: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: fromX, scale: 0.85 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ type: "spring", stiffness: 110, damping: 14, delay: 0.4 }}
      className="absolute -translate-x-1/2 -translate-y-1/2 w-36 md:w-40 px-4 py-3 rounded-xl
                 bg-white/[0.06] backdrop-blur-xl border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.4)]
                 text-white text-sm font-medium text-center"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      {name}
    </motion.div>
  );
}

export default function PdfToolsSection() {
  return (
    <section className="relative bg-black py-32 px-6 overflow-hidden">
      {/* Liquid glass background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/3 w-[460px] h-[460px] rounded-full bg-teal-500/10 blur-[110px]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-[420px] h-[420px] rounded-full bg-purple-500/10 blur-[110px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center mb-16"
      >
        <span className="inline-block text-xs uppercase tracking-widest text-teal-300/70 mb-3">
          Document Tools
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
          PDF, handled.
        </h2>
      </motion.div>

      <div className="relative max-w-5xl mx-auto h-[440px] z-10">
        {/* Fiber-optic connector lines + flowing particles */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2BE0C4" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.8" />
            </linearGradient>
            <filter id="fiberGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="0.6" result="b" />
              <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {SIDE_Y.map((y, i) => (
            <motion.line
              key={`l-${i}`}
              x1={CENTER_X} y1={CENTER_Y} x2={LEFT_X} y2={y}
              stroke="url(#flowGrad)" strokeWidth="0.25" filter="url(#fiberGlow)"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.6 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.15, ease: "easeOut" }}
            />
          ))}
          {SIDE_Y.map((y, i) => (
            <motion.line
              key={`r-${i}`}
              x1={CENTER_X} y1={CENTER_Y} x2={RIGHT_X} y2={y}
              stroke="url(#flowGrad)" strokeWidth="0.25" filter="url(#fiberGlow)"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.6 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.15, ease: "easeOut" }}
            />
          ))}

          {SIDE_Y.map((y, i) => (
            <FlowParticles key={`fl-${i}`} fromX={CENTER_X} fromY={CENTER_Y} toX={LEFT_X} toY={y} delayBase={1 + i * 0.3} />
          ))}
          {SIDE_Y.map((y, i) => (
            <FlowParticles key={`fr-${i}`} fromX={CENTER_X} fromY={CENTER_Y} toX={RIGHT_X} toY={y} delayBase={1 + i * 0.3} />
          ))}
        </svg>

        {/* Left tool boxes */}
        {LEFT_TOOLS.map((name, i) => (
          <GlassToolBox key={name} name={name} x={LEFT_X} y={SIDE_Y[i]} fromX={-160} />
        ))}

        {/* Right tool boxes */}
        {RIGHT_TOOLS.map((name, i) => (
          <GlassToolBox key={name} name={name} x={RIGHT_X} y={SIDE_Y[i]} fromX={160} />
        ))}

        {/* Central glowing glass node */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 130, damping: 14 }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                     w-32 h-32 md:w-36 md:h-36 rounded-2xl flex items-center justify-center text-center
                     bg-white/[0.08] backdrop-blur-2xl border border-teal-300/30
                     shadow-[0_0_40px_rgba(43,224,196,0.25)]"
        >
          <span className="text-white font-bold text-sm md:text-base tracking-wide">
            PDF<br />TOOLS
          </span>
        </motion.div>
      </div>
    </section>
  );
}