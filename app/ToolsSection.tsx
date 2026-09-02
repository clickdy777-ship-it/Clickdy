"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import ToolCard from "./ToolCard";

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

export default function ToolsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={sectionRef} className="relative bg-black h-[420vh]">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col items-center justify-center px-6 py-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-block text-xs uppercase tracking-widest text-teal-300/70 mb-3">
            The Toolbox
          </span>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white">
            Every tool. One platform.
          </h2>
        </motion.div>

        <div className="relative z-10 grid grid-cols-3 md:grid-cols-5 gap-3 md:gap-4 max-w-6xl mx-auto text-white">
          {TOOLS.map((tool, i) => (
            <ToolCard
              key={tool.name}
              tool={tool}
              index={i}
              total={TOOLS.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}