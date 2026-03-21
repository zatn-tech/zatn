"use client";

import TestimonialCarousel from "../TestimonialCarousel";
import SectionHeader from "../ui/SectionHeader";
import SectionAtmosphere from "../ui/SectionAtmosphere";
import { review } from "../review";

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-mono-950 py-16 md:py-24">
      <SectionAtmosphere />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-px bg-gradient-to-r from-transparent via-mono-700 to-transparent" />

      <div className="relative z-[1] mx-auto max-w-4xl px-5 md:px-10">
        <SectionHeader
          eyebrow="Voices"
          title="What clients say"
          subtitle="Honest feedback from teams we’ve shipped with—not vanity quotes."
        />

        <div className="relative">
          <div className="rounded-xl border border-mono-800/90 bg-[linear-gradient(165deg,rgba(16,16,16,0.55)_0%,rgba(6,6,6,0.92)_100%)] p-3 shadow-[0_24px_80px_-48px_rgba(0,0,0,0.9)] md:p-5">
            <TestimonialCarousel reviews={review} />
          </div>

          <p className="mt-4 text-center text-[0.6rem] uppercase tracking-[0.35em] text-mono-600">
            Drag to explore · {review.length} stories
          </p>
        </div>
      </div>
    </section>
  );
}
