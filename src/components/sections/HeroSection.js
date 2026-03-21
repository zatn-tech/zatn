"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Navbar from "../Navbar";
import GeometryBridge from "../GeometryBridge";
import { HERO_SCENE_VARIANT } from "../three/heroSceneConfig";

const HeroScene3D = dynamic(
  () => {
    switch (HERO_SCENE_VARIANT) {
      case "aurora":
        return import("@/components/three/HeroScene3DAurora");
      case "waves":
        return import("@/components/three/HeroScene3DWaves");
      case "neonGrid":
        return import("@/components/three/HeroScene3DNeonGrid");
      default:
        return import("@/components/three/HeroScene3D");
    }
  },
  {
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-mono-950" />,
  },
);

const line = {
  hidden: { opacity: 0, y: 28 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + i * 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function HeroSection() {
  const softOverlay =
    HERO_SCENE_VARIANT === "aurora" || HERO_SCENE_VARIANT === "waves";

  return (
    <>
      <div className="relative min-h-[100dvh] overflow-hidden">
        <HeroScene3D />
        <div
          className={
            softOverlay
              ? "pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/32 via-black/18 to-black/82"
              : "pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/55 via-black/35 to-black/90"
          }
        />
        <div
          className={
            softOverlay
              ? "pointer-events-none absolute inset-0 z-[1] bg-mono-radial opacity-18"
              : "pointer-events-none absolute inset-0 z-[1] bg-mono-radial opacity-25"
          }
        />
        <div
          className={
            softOverlay
              ? "pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(105deg,transparent_40%,rgba(255,255,255,0.01)_50%,transparent_60%)]"
              : "pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(105deg,transparent_40%,rgba(255,255,255,0.015)_50%,transparent_60%)]"
          }
        />

        {/* Must stack above #home or hero copy blocks taps on the fixed nav (same z + later sibling wins). */}
        <div className="relative z-50">
          <Navbar />
        </div>

        <div
          id="home"
          className="relative z-0 mx-auto flex min-h-[calc(100dvh-5rem)] max-w-7xl min-w-0 flex-col justify-center px-4 pb-20 pt-24 sm:px-5 sm:pb-24 sm:pt-28 md:px-10 md:pb-32 md:pt-32"
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.35em" }}
            transition={{ duration: 0.9 }}
            className="mb-6 text-[0.65rem] font-medium uppercase tracking-[0.35em] text-mono-400 md:text-xs"
          >
            Zatn · Web · Apps · Content · Video
          </motion.span>

          <h1 className="max-w-5xl font-display text-[clamp(2.75rem,8vw,5.5rem)] leading-[0.95] tracking-tight text-mono-50">
            {["Zatn thrives", "on your success"].map((t, i) => (
              <motion.span
                key={t}
                custom={i}
                variants={line}
                initial="hidden"
                animate="show"
                className="block"
              >
                {t}
              </motion.span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 max-w-xl md:ml-auto md:mt-16"
          >
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-12 bg-mono-500" />
              <span className="text-xs uppercase tracking-[0.2em] text-mono-500">Manifesto</span>
            </div>
            <p className="text-justify text-base leading-[1.75] text-mono-300 md:text-lg">
              Zatn builds websites and web apps, shapes content, and edits video—so your brand shows up
              clearly online. Practical work, clear communication, outcomes you can measure.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            className="mt-16 flex flex-wrap items-center gap-6 md:mt-20"
          >
            <a
              href="#whatwedo"
              className="group inline-flex items-center gap-3 border border-mono-600 bg-mono-950/40 px-7 py-3.5 text-sm font-medium uppercase tracking-[0.15em] text-mono-100 backdrop-blur-sm transition hover:border-mono-400 hover:bg-mono-900/60"
            >
              Explore work
              <span className="transition group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="text-sm uppercase tracking-[0.2em] text-mono-500 underline-offset-8 transition hover:text-mono-200 hover:underline"
            >
              Start a project
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="pointer-events-none absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 md:block"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-12 w-7 items-start justify-center rounded-full border border-mono-600/60 pt-2"
          >
            <span className="h-2 w-0.5 rounded-full bg-mono-400" />
          </motion.div>
        </motion.div>
      </div>

      <GeometryBridge />
    </>
  );
}
