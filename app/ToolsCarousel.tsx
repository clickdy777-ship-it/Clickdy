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
  { name: "Image Compressor", desc: "Smaller photos, same quality.", gradient: "from-fuchsia-400 via-pink-500 to-orange-400", icon: <path d="M3 3h18v18H3z M8.5 8.5a1.5 1.5 0 1 1 0 .01 M21 15l-5-5L5 21" /> },
  { name: "Background Remover", desc: "Isolate any photo instantly.", gradient: "from-purple-400 via-fuchsia-500 to-pink-600", icon: <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" /> },
  { name: "Image Resizer", desc: "Change dimensions precisely.", gradient: "from-rose-400 via-orange-400 to-amber-500", icon: <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" /> },
  { name: "Image Converter", desc: "Switch between JPG, PNG, WEBP.", gradient: "from-amber-400 via-orange-500 to-red-500", icon: <path d="M17 3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z M9 9h6M9 13h6M9 17h3" /> },
  { name: "Passport Photo Maker", desc: "Print-ready ID and visa photos.", gradient: "from-yellow-400 via-amber-500 to-orange-600", icon: <path d="M4 3h16v18H4z M12 10a3 3 0 1 0 0-.01 M7 18c1-2.5 3-3.5 5-3.5s4 1 5 3.5" /> },
  { name: "QR Generator", desc: "Any link, turned scannable.", gradient: "from-emerald-400 via-teal-500 to-green-600", icon: <path d="M3 3h7v7H3z M14 3h7v7h-7z M3 14h7v7H3z M14 14h3v3h-3z M19 14h2v2h-2z M14 19h2v2h-2z M19 19h2v2h-2z" /> },
  { name: "Word Counter", desc: "Live word and character counts.", gradient: "from-green-400 via-emerald-500 to-teal-600", icon: <path d="M4 7V4h16v3M9 20h6M12 4v16" /> },
  { name: "Case Converter", desc: "UPPER, lower, Title, camelCase.", gradient: "from-teal-400 via-cyan-500 to-emerald-600", icon: <path d="M4 7V4h16v3M9 20h6M12 4v16 M4 15l4 6M8 15l-4 6" /> },
  { name: "Signature Generator", desc: "Draw or type, download as PNG.", gradient: "from-cyan-400 via-sky-500 to-blue-600", icon: <path d="M3 17c2-4 4-6 6-3s3 3 5-1 4-6 7-3" /> },
  { name: "Resume Builder", desc: "Live preview, download as PDF.", gradient: "from-slate-500 via-blue-600 to-indigo-700", icon: <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M9 13h6M9 17h4" /> },
  { name: "AI Image Generator", desc: "Text prompt into a picture.", gradient: "from-purple-500 via-violet-600 to-fuchsia-700", icon: <path d="M12 2l2.4 7.2H22l-6 4.4 2.4 7.2L12 16.4l-6.4 4.4 2.4-7.2-6-4.4h7.6z" /> },
  { name: "AI Text to Speech", desc: "Written text, natural voice.", gradient: "from-violet-500 via-purple-600 to-indigo-700", icon: <path d="M11 5L6 9H2v6h4l5 4V5z M15.5 8.5a5 5 0 0 1 0 7 M18.5 5.5a9 9 0 0 1 0 13" /> },
  { name: "Zakat Calculator", desc: "Clear 2.5% breakdown, instantly.", gradient: "from-amber-500 via-yellow-600 to-orange-700", icon: <path d="M12 2a10 10 0 1 0 .01 0 M12 7v10M8 10h4a2 2 0 1 1 0 4H8" /> },
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