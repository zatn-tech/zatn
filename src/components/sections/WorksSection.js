"use client";

import { motion } from "framer-motion";
import Mobile from "../Mobile";
import Laptop from "../Laptop";
import SectionHeader from "../ui/SectionHeader";
import SectionAtmosphere from "../ui/SectionAtmosphere";
import ScrollSection from "../ScrollSection";
import { display } from "../display";

function RoleBadges({ developed, maintenance }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {developed && (
        <span className="rounded-full border border-mono-700/80 bg-mono-900/80 px-3 py-1 text-[0.6rem] font-medium uppercase tracking-[0.2em] text-mono-400">
          Development
        </span>
      )}
      {maintenance && (
        <span className="rounded-full border border-mono-700/80 bg-mono-900/80 px-3 py-1 text-[0.6rem] font-medium uppercase tracking-[0.2em] text-mono-400">
          Ongoing care
        </span>
      )}
    </div>
  );
}

export default function WorksSection() {
  return (
    <section id="whoweare" className="relative overflow-x-hidden bg-mono-950 py-16 sm:py-20 md:py-32">
      <SectionAtmosphere />

      <div className="relative z-[1] mx-auto max-w-7xl min-w-0 px-4 sm:px-5 md:px-10">
        <SectionHeader
          eyebrow="Portfolio"
          title="Selected work"
          subtitle="Live sites and products we’ve shipped—fast, responsive, and built to grow with you."
        />

        <div className="mt-2 space-y-12 sm:space-y-16 md:space-y-24">
          {display.map((x, idx) => {
            const reverse = idx % 2 === 1;
            return (
              <ScrollSection key={x.topic} delay={idx * 0.04}>
                <article className="min-w-0 overflow-hidden rounded-2xl border border-mono-800/70 bg-gradient-to-b from-mono-900/35 to-mono-950/90 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_40px_80px_-48px_rgba(0,0,0,0.85)]">
                  {/* Mobile: title → phone → desktop. Desktop: phone | (title + laptop) or swapped */}
                  <div className="grid grid-cols-1 gap-0 lg:grid-cols-12">
                    {/* 1) Title + CTA — first on small screens */}
                    <div
                      className={`order-1 border-b border-mono-800/60 p-5 sm:p-7 lg:col-span-7 lg:row-start-1 lg:border-b-0 lg:p-9 xl:p-10 ${
                        reverse ? "lg:col-start-1" : "lg:col-start-6"
                      }`}
                    >
                      <h3 className="font-display text-xl leading-tight tracking-tight text-mono-50 sm:text-2xl md:text-3xl lg:text-[2rem]">
                        {x.topic}
                      </h3>
                      <RoleBadges developed={x.developed} maintenance={x.maintenance} />
                      <a
                        href={x.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-lg border border-mono-600 bg-mono-950/50 px-4 py-2.5 text-center text-sm text-mono-200 transition hover:border-mono-400 hover:bg-mono-900/80 hover:text-mono-50 sm:mt-6 sm:w-auto"
                      >
                        Visit live site
                        <span aria-hidden className="text-mono-500">
                          ↗
                        </span>
                      </a>
                    </div>

                    {/* 2) Phone mock */}
                    <div
                      className={`order-2 flex flex-col items-center border-b border-mono-800/60 p-6 sm:p-8 lg:col-span-5 lg:row-span-2 lg:row-start-1 lg:border-b-0 lg:p-9 xl:p-10 ${
                        reverse ? "lg:border-l lg:border-mono-800/40" : "lg:border-r lg:border-mono-800/40"
                      } ${reverse ? "lg:col-start-8" : "lg:col-start-1"}`}
                    >
                      <span className="mb-5 font-mono text-[0.6rem] uppercase tracking-[0.35em] text-mono-600 sm:mb-6 sm:text-[0.65rem]">
                        {String(idx + 1).padStart(2, "0")} · Mobile
                      </span>
                      <motion.div
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 12 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45 }}
                        className="flex w-full min-w-0 justify-center"
                      >
                        <Mobile image={x.mobile} link={x.link} title={x.topic} />
                      </motion.div>
                    </div>

                    {/* 3) Laptop */}
                    <div
                      className={`order-3 min-w-0 p-5 sm:p-7 lg:col-span-7 lg:row-start-2 lg:p-9 xl:p-10 ${
                        reverse ? "lg:col-start-1" : "lg:col-start-6"
                      }`}
                    >
                      <p className="mb-3 font-mono text-[0.55rem] uppercase tracking-[0.35em] text-mono-600 sm:mb-4 sm:text-[0.6rem]">
                        Desktop
                      </p>
                      <motion.div
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 10 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: 0.05 }}
                        className="w-full min-w-0"
                      >
                        <Laptop image={x.lap} link={x.link} title={x.topic} />
                      </motion.div>
                    </div>
                  </div>
                </article>
              </ScrollSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
