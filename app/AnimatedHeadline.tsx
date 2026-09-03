"use client";

import { motion } from "framer-motion";

export function FlipText({ text }: { text: string }) {
  return (
    <span className="inline-block" style={{ perspective: "600px" }}>
      {text.split("").map((ch, i) => (
        <motion.span
          key={i}
          className="inline-block"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateX: [0, 360] }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            repeatDelay: 3.5,
            delay: i * 0.05,
            ease: "easeInOut",
          }}
        >
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
    </span>
  );
}

export function LiquidText({ text }: { text: string }) {
  return (
    <svg
      viewBox="0 0 520 80"
      className="inline-block align-middle"
      style={{ width: "clamp(220px, 34vw, 400px)", height: "auto", overflow: "visible" }}
    >
      <defs>
        <linearGradient id="liquidGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2BE0C4" />
          <stop offset="50%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#f472b6" />
        </linearGradient>
        <filter id="liquidFilter" x="-20%" y="-60%" width="140%" height="220%">
          <feTurbulence type="fractalNoise" baseFrequency="0.01 0.035" numOctaves="2" seed="3" result="turb">
            <animate
              attributeName="baseFrequency"
              dur="9s"
              values="0.008 0.03;0.022 0.055;0.008 0.03"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="turb" scale="14" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
      <text
        x="0"
        y="55"
        filter="url(#liquidFilter)"
        fill="url(#liquidGrad)"
        fontSize="52"
        fontWeight="700"
        fontFamily="inherit"
      >
        {text}
      </text>
    </svg>
  );
}

export function MorphText({ text }: { text: string }) {
  return (
    <motion.span
      className="inline-block bg-gradient-to-r from-pink-400 via-orange-300 to-yellow-300 bg-clip-text text-transparent"
      animate={{
        scaleX: [1, 1.08, 0.94, 1.03, 1],
        scaleY: [1, 0.93, 1.06, 0.98, 1],
        skewX: [0, 2, -2, 1, 0],
      }}
      transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      style={{ transformOrigin: "center" }}
    >
      {text}
    </motion.span>
  );
}