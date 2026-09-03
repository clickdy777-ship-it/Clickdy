"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const TOOLS = [
  { name: "PDF to Word", desc: "Editable document from a locked PDF.", icon: <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6" /> },
  { name: "PDF Merge", desc: "Combine multiple PDFs into one.", icon: <path d="M3 3h8v8H3z M13 13h8v8h-8z" /> },
  { name: "PDF Split", desc: "Break a PDF into separate pages.", icon: <path d="M3 4h7v16H3z M14 4h7v16h-7z" /> },
  { name: "PDF Compress", desc: "Shrink file size, keep quality.", icon: <path d="M8 3v4a1 1 0 0 1-1 1H3M21 8h-4a1 1 0 0 1-1-1V3M3 16h4a1 1 0 0 1 1 1v4M16 21v-4a1 1 0 0 1 1-1h4" /> },
  { name: "JPG to PDF", desc: "Turn images into a clean PDF.", icon: <path d="M3 3h18v18H3z M8.5 8.5a1.5 1.5 0 1 1 0 .01 M21 15l-5-5L5 21" /> },
  { name: "PDF to JPG", desc: "Every PDF page as an image.", icon: <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6" /> },
];

export default function ToolsCarousel() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollDistance, setScrollDistance] = useState(0);

  useEffect(() => {
    function measure() {
      if (trackRef.current) {
        const trackWidth = trackRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        setScrollDistance(Math.max(trackWidth - viewportWidth + 64, 0));
      }
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black"
      style={{ height: `${TOOLS.length * 55}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
        <div className="px-6 md:px-16 mb-10">
          <span className="text-xs uppercase tracking-widest text-teal-300/70">
            The Toolbox
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-2">
            PDF Tools
          </h2>
        </div>

        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex gap-6 px-6 md:px-16 will-change-transform"
        >
          {TOOLS.map((tool) => (
            <div
              key={tool.name}
              className="shrink-0 w-[260px] md:w-[300px] rounded-2xl bg-white/[0.05] backdrop-blur-xl border border-white/10 p-7 text-white hover:border-teal-400/30 transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-teal-400/10 border border-teal-400/20 flex items-center justify-center mb-5 text-teal-300">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                  {tool.icon}
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">{tool.name}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{tool.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}