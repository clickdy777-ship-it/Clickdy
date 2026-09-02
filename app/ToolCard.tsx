"use client";

import { motion, useTransform, useMotionTemplate, MotionValue } from "framer-motion";

type Tool = {
  name: string;
  desc: string;
  icon: React.ReactNode;
};

export default function ToolCard({
  tool,
  index,
  total,
  scrollYProgress,
}: {
  tool: Tool;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  const start = (index / total) * 0.7;
  const end = start + 0.3;

  const direction = index % 4;
  const travelX =
    direction === 0 ? -700 : direction === 1 ? 700 : direction === 2 ? -400 : 400;
  const travelY = direction < 2 ? -500 : 500;
  const rotateFrom = direction % 2 === 0 ? -180 : 180;

  const x = useTransform(scrollYProgress, [start, end], [travelX, 0]);
  const y = useTransform(scrollYProgress, [start, end], [travelY, 0]);
  const rotate = useTransform(scrollYProgress, [start, end], [rotateFrom, 0]);
  const scale = useTransform(scrollYProgress, [start, end], [0.15, 1]);
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
  const blurAmount = useTransform(scrollYProgress, [start, end], [22, 0]);
  const filter = useMotionTemplate`blur(${blurAmount}px)`;

  return (
    <motion.div
      style={{ x, y, rotate, scale, opacity, filter }}
      className="relative bg-white/[0.04] border border-white/10 rounded-xl p-4 text-left hover:border-teal-400/40 hover:bg-white/[0.07] transition-colors"
    >
      <div className="w-9 h-9 rounded-lg bg-teal-400/10 border border-teal-400/20 flex items-center justify-center mb-3 text-teal-300">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
          {tool.icon}
        </svg>
      </div>
      <h3 className="text-sm font-semibold mb-1">{tool.name}</h3>
      <p className="text-white/45 text-xs leading-relaxed">{tool.desc}</p>
    </motion.div>
  );
}