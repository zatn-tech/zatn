"use client";

import Image from "next/image";
import ClientScore from "./ui/ClientScore";

export default function ReviewCard({ name, content, rating, image }) {
  const src = typeof image === "string" ? image : image?.src ?? image;

  return (
    <article className="relative mx-auto max-w-3xl px-0.5 md:px-2">
      <div className="pointer-events-none absolute -left-0.5 -top-2 font-display text-5xl leading-none text-mono-800/35 md:text-6xl">
        “
      </div>

      <div className="relative rounded-xl border border-mono-700/90 bg-gradient-to-br from-mono-900/95 via-mono-950 to-[#070707] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] md:p-6">
        <div className="absolute left-0 top-5 h-16 w-0.5 rounded-full bg-gradient-to-b from-mono-400 via-mono-600 to-transparent md:top-6 md:h-20" />

        <blockquote className="relative line-clamp-6 pl-4 text-sm font-light leading-relaxed text-mono-200 md:line-clamp-5 md:pl-5 md:text-[0.95rem] md:leading-relaxed">
          {content}
        </blockquote>

        <footer className="mt-5 flex flex-col gap-4 border-t border-mono-800/90 pt-5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <div className="flex min-w-0 items-center gap-3">
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl ring-1 ring-mono-700/80">
              <Image src={src} alt={name} fill className="object-cover" sizes="48px" />
            </div>
            <div className="min-w-0">
              <cite className="not-italic font-display text-base leading-tight text-mono-50 md:text-lg">
                {name}
              </cite>
              <p className="mt-0.5 text-[0.65rem] uppercase tracking-[0.18em] text-mono-500">
                Verified client
              </p>
            </div>
          </div>
          <ClientScore value={rating} max={5} compact />
        </footer>
      </div>
    </article>
  );
}
