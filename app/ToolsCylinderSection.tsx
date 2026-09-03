"use client";

import { CylinderCarousel } from "./CylinderCarousel";

const TOOLS = [
  { name: "PDF to Word", category: "PDF", colors: ["#3B82F6", "#4338CA"] },
  { name: "PDF Merge", category: "PDF", colors: ["#38BDF8", "#3B82F6"] },
  { name: "PDF Split", category: "PDF", colors: ["#60A5FA", "#4F46E5"] },
  { name: "PDF Compress", category: "PDF", colors: ["#6366F1", "#1E293B"] },
  { name: "JPG to PDF", category: "Image", colors: ["#FB923C", "#EC4899"] },
  { name: "PDF to JPG", category: "PDF", colors: ["#F472B6", "#FB7185"] },
  { name: "Image Compressor", category: "Image", colors: ["#E879F9", "#FB923C"] },
  { name: "Background Remover", category: "Image", colors: ["#C084FC", "#EC4899"] },
  { name: "Image Resizer", category: "Image", colors: ["#FB7185", "#F59E0B"] },
  { name: "Image Converter", category: "Image", colors: ["#FBBF24", "#EF4444"] },
  { name: "Passport Photo", category: "Image", colors: ["#FACC15", "#F97316"] },
  { name: "QR Generator", category: "Utility", colors: ["#34D399", "#0D9488"] },
  { name: "Word Counter", category: "Utility", colors: ["#4ADE80", "#059669"] },
  { name: "Case Converter", category: "Utility", colors: ["#2DD4BF", "#0891B2"] },
  { name: "Signature Maker", category: "Utility", colors: ["#22D3EE", "#2563EB"] },
  { name: "Resume Builder", category: "Utility", colors: ["#64748B", "#312E81"] },
  { name: "AI Image Gen", category: "AI", colors: ["#A855F7", "#7C3AED"] },
  { name: "AI Text to Speech", category: "AI", colors: ["#8B5CF6", "#4F46E5"] },
  { name: "Zakat Calculator", category: "Finance", colors: ["#F59E0B", "#D97706"] },
];

function wrapName(name: string): [string, string] {
  if (name.length <= 12) return [name, ""];
  const words = name.split(" ");
  const mid = Math.ceil(words.length / 2);
  return [words.slice(0, mid).join(" "), words.slice(mid).join(" ")];
}

function toolCardImage(tool: (typeof TOOLS)[number]): string {
  const [line1, line2] = wrapName(tool.name);
  const gradId = `g-${tool.name.replace(/\s+/g, "")}`;
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="210" height="300" viewBox="0 0 210 300">
      <defs>
        <linearGradient id="${gradId}" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${tool.colors[0]}"/>
          <stop offset="100%" stop-color="${tool.colors[1]}"/>
        </linearGradient>
      </defs>
      <rect width="210" height="300" rx="20" fill="url(#${gradId})"/>
      <circle cx="170" cy="40" r="65" fill="white" fill-opacity="0.08"/>
      <rect x="24" y="24" width="44" height="44" rx="12" fill="white" fill-opacity="0.2"/>
      <path d="M38 46h16M38 54h12M38 38h16" stroke="white" stroke-width="3" stroke-linecap="round"/>
      <text x="24" y="228" fill="white" font-family="Arial, sans-serif" font-size="19" font-weight="700">${line1}</text>
      <text x="24" y="252" fill="white" font-family="Arial, sans-serif" font-size="19" font-weight="700">${line2}</text>
      <text x="24" y="276" fill="white" fill-opacity="0.8" font-family="Arial, sans-serif" font-size="10" letter-spacing="2">${tool.category.toUpperCase()}</text>
    </svg>
  `.trim();
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

export default function ToolsCylinderSection() {
  const images = TOOLS.map((tool) => ({
    src: toolCardImage(tool),
    alt: tool.name,
  }));

  return (
    <section className="relative bg-black py-24 overflow-hidden">
      <div className="px-6 md:px-16 mb-10 text-center">
        <span className="text-xs uppercase tracking-widest text-teal-300/70">
          The Toolbox
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-white mt-2">
          Every tool, in the round.
        </h2>
      </div>
      <CylinderCarousel images={images} cardWidth={220} animationDuration={38} />
    </section>
  );
}