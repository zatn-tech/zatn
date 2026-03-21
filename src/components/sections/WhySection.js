"use client";

import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import SectionAtmosphere from "../ui/SectionAtmosphere";
import TiltCard from "../TiltCard";
import { whychooseus } from "../whychooseus";

function FloatingPlane({ className = "", duration, delay = 0 }) {
  return (
    <motion.div
      className={`pointer-events-none absolute inset-0 rounded-2xl border border-mono-700/25 bg-mono-950/20 ${className}`}
      style={{ transformStyle: "preserve-3d", transform: "rotateX(72deg)" }}
      initial={{ opacity: 0.3 }}
      animate={{
        rotateZ: [0, 360],
        opacity: [0.25, 0.45, 0.25],
      }}
      transition={{
        rotateZ: { duration, repeat: Infinity, ease: "linear", delay },
        opacity: { duration: 5, repeat: Infinity, ease: "easeInOut", delay },
      }}
    />
  );
}

export default function WhySection() {
  return (
    <section
      id="whychooseus"
      className="relative overflow-hidden bg-mono-950 py-20 md:py-32"
    >
      <SectionAtmosphere />

      <div className="pointer-events-none absolute left-[8%] top-[18%] h-28 w-28 [perspective:600px] md:left-[12%] md:h-36 md:w-36">
        <FloatingPlane duration={38} />
      </div>
      <div className="pointer-events-none absolute bottom-[22%] right-[6%] h-24 w-24 [perspective:600px] md:h-32 md:w-32">
        <FloatingPlane duration={46} delay={2} />
      </div>
      <div className="pointer-events-none absolute right-[20%] top-[40%] h-16 w-16 [perspective:500px] opacity-60">
        <motion.div
          className="h-full w-full rounded-lg border border-dashed border-mono-600/30"
          style={{ transform: "rotateX(60deg) rotateZ(12deg)" }}
          animate={{ rotateZ: [12, 372] }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative z-[1] mx-auto max-w-7xl px-5 md:px-10">
        <SectionHeader
          eyebrow="Why Zatn"
          title="Built for partnerships"
          subtitle="We’re not a faceless vendor list—we stay close to the work until it performs in the real world."
        />

        <div className="mx-auto [perspective:1400px]">
          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            {whychooseus.map((m1, i) => (
              <motion.div
                key={m1.name}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.55 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <TiltCard
                  maxTilt={14}
                  className="group relative h-full [transform-style:preserve-3d]"
                >
                  <div
                    className="relative h-full overflow-hidden rounded-2xl border border-mono-700/70 bg-mono-950/70 p-7 shadow-[0_1px_0_0_rgba(255,255,255,0.06)_inset,0_28px_0_-8px_rgba(0,0,0,0.85),0_56px_48px_-36px_rgba(0,0,0,0.75)] backdrop-blur-md transition-shadow duration-500 group-hover:shadow-[0_1px_0_0_rgba(255,255,255,0.08)_inset,0_36px_0_-10px_rgba(0,0,0,0.9),0_72px_56px_-40px_rgba(0,0,0,0.8)]"
                    style={{ transform: "translateZ(0)" }}
                  >
                    <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.04] via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                    <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-mono-100/5 blur-2xl transition group-hover:bg-mono-100/[0.07]" />

                    <div className="relative mb-6 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-mono-600/80 bg-gradient-to-br from-mono-800/90 to-mono-950 font-display text-sm text-mono-200 shadow-[0_8px_20px_-8px_rgba(0,0,0,0.9)] transition group-hover:border-mono-500 group-hover:text-mono-50">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="relative font-display text-2xl tracking-tight text-mono-50 md:text-[1.65rem]">
                      {m1.name}
                    </h3>
                    <p className="relative mt-4 text-justify text-sm leading-relaxed text-mono-400 md:text-[0.95rem]">
                      {m1.content}
                    </p>

                    <div className="relative mt-8 flex items-center gap-2 border-t border-mono-800/80 pt-5">
                      <span className="h-px flex-1 bg-gradient-to-r from-mono-600/50 to-transparent" />
                      <span className="text-[0.55rem] uppercase tracking-[0.35em] text-mono-600">
                        Partnership
                      </span>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
