"use client";

import { motion } from "framer-motion";

/** Pure CSS / motion “3D” bridge between hero and content — no second WebGL canvas. */
export default function GeometryBridge() {
  return (
    <div className="relative overflow-hidden bg-mono-950 py-16 md:py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="mx-auto flex max-w-5xl flex-col items-center px-5">
        <div className="relative h-40 w-full max-w-md [perspective:600px] md:h-48">
          <div className="absolute inset-0 flex items-center justify-center [transform-style:preserve-3d]">
            <motion.div
              className="absolute h-36 w-36 rounded-full border border-mono-600/40 md:h-44 md:w-44"
              style={{ transform: "rotateX(68deg)" }}
              animate={{ rotateZ: 360 }}
              transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute h-28 w-28 rounded-full border border-mono-400/30 md:h-32 md:w-32"
              style={{ transform: "rotateX(68deg) rotateZ(28deg)" }}
              animate={{ rotateZ: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute h-16 w-16 rounded-full border border-dashed border-mono-300/25 md:h-20 md:w-20"
              style={{ transform: "rotateX(68deg) rotateZ(-15deg)" }}
              animate={{ rotateZ: 360 }}
              transition={{ duration: 11, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute h-3 w-3 rounded-full bg-mono-100 shadow-[0_0_24px_rgba(255,255,255,0.5)]"
              style={{ transform: "translateZ(40px)" }}
              animate={{ y: [0, -6, 0], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 flex items-center gap-4"
        >
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-mono-600" />
          <span className="text-[0.6rem] uppercase tracking-[0.5em] text-mono-500">Scroll</span>
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-mono-600" />
        </motion.div>
      </div>
    </div>
  );
}
