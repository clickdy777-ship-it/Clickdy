"use client";

import { motion } from "framer-motion";

const PARTICLES = Array.from({ length: 24 }).map((_, i) => ({
  id: i,
  left: 8 + Math.random() * 84,
  top: 8 + Math.random() * 84,
  size: 2 + Math.random() * 4,
  duration: 6 + Math.random() * 6,
  delay: Math.random() * 5,
}));

export default function Scene3D() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Central pulsing glow orb */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: "480px",
          height: "480px",
          background:
            "radial-gradient(circle, rgba(43,224,196,0.28) 0%, rgba(168,85,247,0.14) 45%, transparent 75%)",
          filter: "blur(30px)",
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Secondary smaller orb, offset, drifting slowly */}
      <motion.div
        className="absolute left-1/2 top-1/2 rounded-full"
        style={{
          width: "260px",
          height: "260px",
          background:
            "radial-gradient(circle, rgba(168,85,247,0.25) 0%, transparent 70%)",
          filter: "blur(24px)",
        }}
        animate={{
          x: [-60, 40, -60],
          y: [-30, 30, -30],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating particles */}
      {PARTICLES.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-teal-300"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            boxShadow: "0 0 8px 2px rgba(43,224,196,0.6)",
          }}
          animate={{
            y: [0, -18, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}