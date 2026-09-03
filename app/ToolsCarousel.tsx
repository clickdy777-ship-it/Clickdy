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
  { name: "Image Compressor", desc: "Smaller photos, same quality.", icon: <path d="M3 3h18v18H3z M8.5 8.5a1.5 1.5 0 1 1 0 .01 M21 15l-5-5L5 21" /> },
  { name: "Background Remover", desc: "Isolate any photo instantly.", icon: <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" /> },
  { name: "Image Resizer", desc: "Change dimensions precisely.", icon: <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" /> },
  { name: "Image Converter", desc: "Switch between JPG, PNG, WEBP.", icon: <path d="M17 3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z M9 9h6M9 13h6M9 17h3" /> },
  { name: "Passport Photo Maker", desc: "Print-ready ID and visa photos.", icon: <path d="M4 3h16v18H4z M12 10a3 3 0 1 0 0-.01 M7 18c1-2.5 3-3.5 5-3.5s4 1 5 3.5" /> },
  { name: "QR Generator", desc: "Any link, turned scannable.", icon: <path d="M3 3h7v7H3z M14 3h7v7h-7z M3 14h7v7H3z M14 14h3v3h-3z M19 14h2v2h-2z M14 19h2v2h-2z M19 19h2v2h-2z" /> },
  { name: "Word Counter", desc: "Live word and character counts.", icon: <path d="M4 7V4h16v3M9 20h6M12 4v16" /> },
  { name: "Case Converter", desc: "UPPER, lower, Title, camelCase.", icon: <path d="M4 7V4h16v3M9 20h6M12 4v16 M4 15l4 6M8 15l-4 6" /> },
  { name: "Signature Generator", desc: "Draw or type, download as PNG.", icon: <path d="M3 17c2-4 4-6 6-3s3 3 5-1 4-6 7-3" /> },
  { name: "Resume Builder", desc: "Live preview, download as PDF.", icon: <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M9 13h6M9 17h4" /> },
  { name: "AI Image Generator", desc: "Text prompt into a picture.", icon: <path d="M12 2l2.4 7.2H22l-6 4.4 2.4 7.2L12 16.4l-6.4 4.4 2.4-7.2-6-4.4h7.6z" /> },
  { name: "AI Text to Speech", desc: "Written text, natural voice.", icon: <path d="M11 5L6 9H2v6h4l5 4V5z M15.5 8.5a5 5 0 0 1 0 7 M18.5 5.5a9 9 0 0 1 0 13" /> },
  { name: "Zakat Calculator", desc: "Clear 2.5% breakdown, instantly.", icon: <path d="M12 2a10 10 0 1 0 .01 0 M12 7v10M8 10h4a2 2 0 1 1 0 4H8" /> },
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
            Every tool, one at a time.
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