"use client";

import { motion } from "framer-motion";

const LINE_COUNT = 14;

export default function Scene3D() {
  const lines = Array.from({ length: LINE_COUNT }).map((_, i) => {
    const startX = 5 + (i * 90) / LINE_COUNT;
    return { id: i, startX, delay: i * 0.15 };
  });

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <svg
        viewBox="0 0 100 60"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="beamGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2BE0C4" stopOpacity="0" />
            <stop offset="70%" stopColor="#2BE0C4" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.9" />
          </linearGradient>
        </defs>

        {lines.map((line) => (
          <motion.line
            key={line.id}
            x1={line.startX}
            y1="0"
            x2="50"
            y2="42"
            stroke="url(#beamGrad)"
            strokeWidth="0.15"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.6, delay: line.delay, ease: "easeOut" }}
          />
        ))}

        {lines.map((line) => (
          <motion.circle
            key={`dot-${line.id}`}
            r="0.35"
            fill="#2BE0C4"
            initial={{ opacity: 0 }}
            animate={{
              cx: [line.startX, 50],
              cy: [0, 42],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2.2,
              delay: line.delay + 1,
              repeat: Infinity,
              repeatDelay: 1.5,
              ease: "easeIn",
            }}
          />
        ))}

        <motion.circle
          cx="50"
          cy="42"
          r="0.6"
          fill="#2BE0C4"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0.4, 1, 0.4], scale: [0.8, 1.3, 0.8] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ filter: "blur(1px)" }}
        />
      </svg>
    </div>
  );
}