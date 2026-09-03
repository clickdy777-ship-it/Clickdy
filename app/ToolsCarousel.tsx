"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const TOOLS = [
  { name: "PDF to Word", desc: "Editable document from a locked PDF.", gradient: "from-blue-500 via-blue-600 to-indigo-700", icon: <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6" /> },
  { name: "PDF Merge", desc: "Combine multiple PDFs into one.", gradient: "from-blue-400 via-cyan-500 to-blue-700", icon: <path d="M3 3h8v8H3z M13 13h8v8h-8z" /> },
  { name: "PDF Split", desc: "Break a PDF into separate pages.", gradient: "from-sky-400 via-blue-500 to-indigo-600", icon: <path d="M3 4h7v16H3z M14 4h7v16h-7z" /> },
  { name: "PDF Compress", desc: "Shrink file size, keep quality.", gradient: "from-indigo-400 via-blue-600 to-slate-800", icon: <path d="M8 3v4a1 1 0 0 1-1 1H3M21 8h-4a1 1 0 0 1-1-1V3M3 16h4a1 1 0 0 1 1 1v4M16 21v-4a1 1 0 0 1 1-1h4" /> },
  { name: "JPG to PDF", desc: "Turn images into a clean PDF.", gradient: "from-orange-400 via-pink-500 to-rose-600", icon: <path d="M3 3h18v18H3z M8.5 8.5a1.5 1.5 0 1 1 0 .01 M21 15l-5-5L5 21" /> },
  { name: "PDF to JPG", desc: "Every PDF page as an image.", gradient: "from-pink-400 via-rose-500 to-orange-500", icon: <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6" /> },
];

const N = TOOLS.length;

function ArcCard({
  tool,
  index,
  scrollYProgress,
}: {
  tool: (typeof TOOLS)[number];
  index: number;
  scrollYProgress: import("framer-motion").MotionValue<number>;
}) {
  // activeIndex moves continuously from 0 to N-1 as the user scrolls.
  // offset(t) = index - activeIndex(t) — linear in scroll progress, so
  // every visual property below can be a pure function of scrollYProgress.
  const offsetOf = (t: number) => index - t * (N - 1);

  const x = useTransform(scrollYProgress, (t) => offsetOf(t) * 190);
  const rotateY = useTransform(scrollYProgress, (t) => {
    const o = offsetOf(t);
    return Math.max(-60, Math.min(60, o * -28));
  });
  const scale = useTransform(scrollYProgress, (t) => {
    const o = Math.abs(offsetOf(t));
    return Math.max(0.55, 1 - o * 0.16);
  });
  const z = useTransform(scrollYProgress, (t) => -Math.abs(offsetOf(t)) * 90);
  const opacity = useTransform(scrollYProgress, (t) => {
    const o = Math.abs(offsetOf(t));
    return Math.max(0, 1 - o * 0.28);
  });
  const zIndex = useTransform(scrollYProgress, (t) =>
    Math.round(100 - Math.abs(offsetOf(t)) * 10)
  );

  return (
    <motion.div
      style={{ x, rotateY, scale, z, opacity, zIndex }}
      className="absolute left-1/2 top-1/2 w-[220px] h-[300px] md:w-[250px] md:h-[330px] -ml-[110px] md:-ml-[125px] -mt-[150px] md:-mt-[165px]"
    >
      <div
        className={`w-full h-full rounded-3xl bg-gradient-to-br ${tool.gradient} p-6 flex flex-col justify-between shadow-[0_25px_60px_rgba(0,0,0,0.5)] border border-white/20`}
      >
        <div className="w-11 h-11 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
            {tool.icon}
          </svg>
        </div>
        <div>
          <h3 className="text-white font-bold text-lg leading-tight mb-1">{tool.name}</h3>
          <p className="text-white/80 text-xs leading-relaxed">{tool.desc}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function ToolsCarousel() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={sectionRef}
      className="relative bg-black"
      style={{ height: `${N * 60}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
        <div className="px-6 md:px-16 mb-6 relative z-10">
          <span className="text-xs uppercase tracking-widest text-teal-300/70">
            The Toolbox
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-2">
            Every tool, one at a time.
          </h2>
        </div>

        <div
          className="relative flex-1 w-full"
          style={{ perspective: "1400px" }}
        >
          <div
            className="relative w-full h-full"
            style={{ transformStyle: "preserve-3d" }}
          >
            {TOOLS.map((tool, i) => (
              <ArcCard key={tool.name} tool={tool} index={i} scrollYProgress={scrollYProgress} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}