"use client";

import { motion } from "framer-motion";

function tierLabel(value) {
  if (value >= 4.75) return "Exceptional";
  if (value >= 4.5) return "Excellent";
  if (value >= 4.0) return "Strong";
  if (value >= 3.5) return "Solid";
  return "Good";
}

export default function ClientScore({ value, max = 5, compact = false }) {
  const safe = Math.min(max, Math.max(0, Number(value) || 0));
  const pct = (safe / max) * 100;
  const label = tierLabel(safe);

  if (compact) {
    return (
      <div className="w-full max-w-[200px] shrink-0 rounded-xl border border-mono-800/90 bg-gradient-to-br from-mono-950/90 to-mono-900/40 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:max-w-[190px]">
        <p className="text-[0.55rem] font-medium uppercase tracking-[0.3em] text-mono-500">
          Score
        </p>
        <div className="mt-1 flex items-baseline justify-between gap-2">
          <span className="font-mono text-2xl font-light tabular-nums text-mono-50">
            {safe.toFixed(1)}
          </span>
          <span className="text-right">
            <span className="block font-mono text-[0.65rem] text-mono-500">/ {max.toFixed(1)}</span>
            <span className="block text-[0.55rem] uppercase tracking-wider text-mono-500">
              {label}
            </span>
          </span>
        </div>
        <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-mono-900 ring-1 ring-mono-800/80">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-mono-600 via-mono-300 to-mono-100"
            initial={{ width: 0 }}
            whileInView={{ width: `${pct}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[220px] rounded-2xl border border-mono-800/90 bg-gradient-to-br from-mono-950/90 to-mono-900/50 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
      <p className="text-[0.6rem] font-medium uppercase tracking-[0.35em] text-mono-500">
        Client score
      </p>
      <div className="mt-3 flex items-baseline justify-between gap-3">
        <span className="font-mono text-[2.75rem] font-light leading-none tracking-tight text-mono-50 tabular-nums">
          {safe.toFixed(1)}
        </span>
        <div className="text-right">
          <span className="block font-mono text-xs text-mono-500">/ {max.toFixed(1)}</span>
          <span className="mt-1 block text-[0.65rem] uppercase tracking-[0.2em] text-mono-400">
            {label}
          </span>
        </div>
      </div>
      <div className="mt-5 h-2 overflow-hidden rounded-full bg-mono-900 ring-1 ring-mono-800/80">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-mono-600 via-mono-300 to-mono-100"
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
      <p className="mt-3 text-[0.65rem] leading-snug text-mono-600">
        Aggregated from post-project feedback (not a public marketplace score).
      </p>
    </div>
  );
}
