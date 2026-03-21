"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

/**
 * Uniform deliverable card — fixed image ratio + flex body so grid rows align.
 */
export default function ServiceCard({ image, topic, content, index, compact = false }) {
  const src = typeof image === "string" ? image : image?.src ?? image;
  /** Skip `/_next/image` for http(s) URLs — many shared hosts block outbound fetches or lack sharp. */
  const remoteUnoptimized = typeof src === "string" && /^https?:\/\//i.test(src);
  const pad = compact ? "p-5" : "p-6 md:p-7";

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-mono-800/90 bg-mono-950/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_20px_60px_-36px_rgba(0,0,0,0.85)] transition-[border-color,box-shadow] duration-500 hover:border-mono-600/80 hover:shadow-[0_28px_72px_-32px_rgba(0,0,0,0.9)]">
      <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-mono-900">
        <Image
          src={src}
          alt={topic}
          fill
          unoptimized={remoteUnoptimized}
          className="object-cover opacity-45 transition duration-700 group-hover:scale-[1.03] group-hover:opacity-55"
          sizes="(max-width: 768px) 90vw, (max-width: 1280px) 45vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-mono-950 via-mono-950/45 to-mono-950/15" />
        {index != null && (
          <span className="absolute left-3 top-3 font-mono text-[0.65rem] tabular-nums text-mono-400 md:left-4 md:top-4">
            {String(index).padStart(2, "0")}
          </span>
        )}
      </div>

      <div className={`relative flex min-h-0 flex-1 flex-col ${pad}`}>
        <div className="absolute left-0 top-6 hidden h-14 w-px bg-gradient-to-b from-mono-400 via-mono-600 to-transparent md:top-7 md:block" />

        <div className="mb-3 flex items-start justify-between gap-3 md:mb-4 md:pl-4">
          <div className="min-w-0">
            <p className="text-[0.6rem] font-semibold uppercase tracking-[0.35em] text-mono-500">
              Deliverable
            </p>
            <h3 className="mt-1.5 font-display text-xl leading-snug tracking-tight text-mono-50 md:text-2xl">
              {topic}
            </h3>
          </div>
          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-mono-700 text-mono-500 transition group-hover:border-mono-500 group-hover:text-mono-200">
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
          </span>
        </div>

        <p className="line-clamp-6 flex-1 text-justify text-[0.8125rem] leading-relaxed text-mono-400 md:pl-4 md:text-sm">
          {content}
        </p>

        <div className="mt-5 flex items-center gap-3 border-t border-mono-800/80 pt-4 md:mt-6 md:pl-4">
          <span className="h-px flex-1 bg-gradient-to-r from-mono-700 to-transparent" />
          <span className="whitespace-nowrap font-mono text-[0.55rem] uppercase tracking-[0.25em] text-mono-600">
            Zatn
          </span>
        </div>
      </div>
    </div>
  );
}
