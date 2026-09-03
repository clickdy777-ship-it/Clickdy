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