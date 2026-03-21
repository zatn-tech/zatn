"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiInstagram } from "react-icons/fi";
import { Clapperboard, Film, Sparkles, Check } from "lucide-react";
import { instaprofiles } from "../insta";
import SectionHeader from "../ui/SectionHeader";
import SectionAtmosphere from "../ui/SectionAtmosphere";

const pillars = [
  { icon: Film, label: "Shoot & source", desc: "Briefs, references, and capture that fits the brand." },
  { icon: Clapperboard, label: "Edit & grade", desc: "Cuts, pacing, captions, and sound that hold attention." },
  { icon: Sparkles, label: "Ship & iterate", desc: "Formats for every channel—square, vertical, and widescreen." },
];

export default function SocialSection() {
  return (
    <section className="relative overflow-hidden border-y border-mono-800/80 bg-mono-950 py-16 sm:py-20 md:py-28">
      <SectionAtmosphere />

      <div className="relative z-[1] mx-auto max-w-6xl px-4 sm:px-5 md:px-10">
        <SectionHeader
          eyebrow="Production"
          title="Content & motion"
          subtitle="Video edits, reels, and social-first motion—shot for clarity, cut for retention, shipped in formats your audience actually watches."
        />

        {/* Process strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="mb-14 grid gap-4 sm:grid-cols-3 sm:gap-3 md:mb-16 md:gap-4"
        >
          {pillars.map(({ icon: Icon, label, desc }, i) => (
            <div
              key={label}
              className="rounded-2xl border border-mono-800/70 bg-mono-900/30 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-mono-700/80 bg-mono-950/80 text-mono-300">
                <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden />
              </div>
              <p className="font-mono text-[0.6rem] uppercase tracking-[0.28em] text-mono-500">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 font-display text-lg tracking-tight text-mono-100">{label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mono-500">{desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Featured profiles */}
        <div className="space-y-6 md:space-y-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.35em] text-mono-500">On Instagram</p>
              <p className="mt-1 text-sm text-mono-400">Recent collaborations and handles we’re proud to showcase.</p>
            </div>
          </div>

          <ul className="grid list-none gap-6 md:gap-8">
            {instaprofiles.map((profile, i) => (
              <motion.li
                key={profile.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="group"
              >
                <a
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col overflow-hidden rounded-2xl border border-mono-800/80 bg-gradient-to-br from-mono-900/50 to-mono-950/90 shadow-[0_24px_80px_-40px_rgba(0,0,0,0.85)] transition hover:border-mono-600/70 hover:shadow-[0_32px_90px_-36px_rgba(0,0,0,0.9)] md:flex-row md:items-stretch"
                >
                  {/* Small landscape snapshot — sized for tiny IG screengrabs; image scales inside without cropping */}
                  <div className="relative z-0 flex w-full shrink-0 justify-center bg-mono-900/40 p-3 sm:p-4 md:w-auto md:justify-start md:pl-5 md:pr-2 md:pt-6">
                    <div className="relative h-[100px] w-[168px] sm:h-[112px] sm:w-[184px] md:h-[118px] md:w-[196px]">
                      <Image
                        src={profile.image}
                        alt={`@${profile.name} on Instagram`}
                        fill
                        className="rounded-md object-contain object-center ring-1 ring-mono-800/80 transition duration-500 group-hover:ring-mono-600/60"
                        sizes="200px"
                      />
                    </div>
                    <span className="absolute bottom-2 right-2 inline-flex items-center gap-1 rounded border border-mono-700/80 bg-mono-950/90 px-2 py-0.5 text-[0.55rem] font-medium uppercase tracking-[0.15em] text-mono-400">
                      <FiInstagram className="h-3 w-3" aria-hidden />
                      IG
                    </span>
                  </div>

                  <div className="relative flex min-h-0 flex-1 flex-col gap-6 p-6 sm:flex-row sm:gap-0 sm:p-0 sm:pr-2 md:min-h-[200px]">
                    {/* Main copy */}
                    <div className="flex min-w-0 flex-1 flex-col justify-center gap-4 p-0 sm:py-8 sm:pl-6 sm:pr-6">
                      <div>
                        <p className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-mono-500">Profile</p>
                        <p className="mt-2 font-display text-2xl tracking-tight text-mono-50 md:text-[1.75rem]">
                          @{profile.name}
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-mono-400 md:text-base">{profile.blurb}</p>
                      </div>
                      <div>
                        <span className="inline-flex items-center gap-2 rounded-lg border border-mono-700/80 bg-mono-950/60 px-4 py-2.5 text-sm font-medium text-mono-200 transition group-hover:border-mono-500 group-hover:text-mono-50">
                          Open Instagram
                          <span aria-hidden className="text-mono-500 transition group-hover:translate-x-0.5 group-hover:text-mono-300">
                            ↗
                          </span>
                        </span>
                      </div>
                    </div>

                    {/* Right rail — fills empty space with structure + focus tags */}
                    <div className="relative flex shrink-0 flex-col justify-center border-t border-mono-800/70 bg-mono-950/40 px-5 py-5 sm:max-w-[220px] sm:border-l sm:border-t-0 sm:py-8 sm:pl-6 sm:pr-5 lg:max-w-[260px]">
                      <div
                        className="pointer-events-none absolute inset-y-0 right-0 hidden w-px bg-gradient-to-b from-transparent via-mono-700/40 to-transparent sm:block"
                        aria-hidden
                      />
                      <p className="font-mono text-[0.6rem] uppercase tracking-[0.28em] text-mono-500">Focus</p>
                      <ul className="mt-3 space-y-2.5">
                        {(profile.tags ?? []).map((tag) => (
                          <li
                            key={tag}
                            className="flex items-start gap-2.5 text-[0.8rem] leading-snug text-mono-300"
                          >
                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-mono-700/80 bg-mono-900/80 text-mono-500">
                              <Check className="h-3 w-3" strokeWidth={2.5} aria-hidden />
                            </span>
                            {tag}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-5 text-[0.65rem] leading-relaxed text-mono-600">
                        Formats: reels, carousels, and short explainers—aligned with your voice.
                      </p>
                    </div>
                  </div>
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
