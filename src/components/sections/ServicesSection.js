"use client";

import { motion } from "framer-motion";
import ServiceCard from "../ServiceCard";
import ServicesCarousel from "../ServicesCarousel";
import SectionHeader from "../ui/SectionHeader";
import SectionAtmosphere from "../ui/SectionAtmosphere";
import { whatwedo } from "../whatwedo";

export default function ServicesSection() {
  return (
    <section
      id="whatwedo"
      className="relative overflow-hidden bg-mono-950 py-20 md:py-32"
    >
      <SectionAtmosphere />

      <div className="relative z-[1] mx-auto max-w-7xl px-5 md:px-10">
        <SectionHeader
          eyebrow="Capabilities"
          title="What we deliver"
          subtitle="Four ways Zatn helps—websites, web apps, content, and video—scoped clearly and delivered with care."
        />

        <div className="md:hidden">
          <div className="rounded-2xl border border-mono-800/80 bg-[linear-gradient(180deg,rgba(12,12,12,0.5)_0%,rgba(6,6,6,0.9)_100%)] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            <ServicesCarousel items={whatwedo} />
          </div>
          <p className="mt-4 text-center text-[0.65rem] uppercase tracking-[0.35em] text-mono-600">
            Swipe or drag · {whatwedo.length} deliverables
          </p>
        </div>

        {/* Aligned grid: 2×2 on md, single row of 4 on xl */}
        <div className="hidden md:grid md:grid-cols-2 md:items-stretch md:gap-6 lg:gap-8 xl:grid-cols-4">
          {whatwedo.map((x, i) => (
            <motion.div
              key={x.topic}
              className="flex min-h-0"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <ServiceCard
                image={x.image}
                topic={x.topic}
                content={x.content}
                index={i + 1}
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-14 hidden items-center justify-center gap-4 md:flex">
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-mono-700" />
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.35em] text-mono-600">
            {String(whatwedo.length).padStart(2, "0")} core services
          </span>
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-mono-700" />
        </div>
      </div>
    </section>
  );
}
