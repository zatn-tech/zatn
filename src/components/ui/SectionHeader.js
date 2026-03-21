"use client";

import { motion } from "framer-motion";

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}) {
  const alignClass = align === "left" ? "text-left" : "text-center";
  const lineAlign = align === "left" ? "mr-auto" : "mx-auto";

  return (
    <div className={`mb-14 md:mb-20 ${alignClass}`}>
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`mb-4 block text-[0.65rem] font-medium uppercase tracking-[0.45em] md:text-xs ${
            light ? "text-mono-500" : "text-mono-500"
          }`}
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.05 }}
        className={`font-display text-[clamp(2rem,5vw,3.75rem)] leading-[1.08] tracking-tight ${
          light ? "text-mono-950" : "text-mono-50"
        }`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`mt-4 max-w-2xl text-base leading-relaxed md:text-lg ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-mono-600" : "text-mono-400"}`}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`mt-8 h-px w-20 origin-left bg-gradient-to-r from-mono-500 to-transparent md:w-28 ${lineAlign} ${
          align === "center" ? "origin-center" : ""
        }`}
      />
    </div>
  );
}
