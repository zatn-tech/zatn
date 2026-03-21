"use client";

import { useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const variants = {
  enter: (dir) => ({
    x: dir > 0 ? 36 : -36,
    opacity: 0,
    filter: "blur(4px)",
  }),
  center: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
  },
  exit: (dir) => ({
    x: dir < 0 ? 36 : -36,
    opacity: 0,
    filter: "blur(4px)",
  }),
};

export default function CarouselShell({
  length,
  renderSlide,
  className = "",
  minHeightClass = "min-h-[240px]",
}) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = useCallback(
    (dir) => {
      setDirection(dir);
      setIndex((prev) => (prev + dir + length) % length);
    },
    [length],
  );

  const goTo = useCallback((target) => {
    setIndex((current) => {
      if (target === current) return current;
      setDirection(target > current ? 1 : -1);
      return target;
    });
  }, []);

  if (length === 0) return null;

  return (
    <div className={`relative ${className}`}>
      <div className={`relative overflow-hidden ${minHeightClass}`}>
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 420, damping: 36 },
              opacity: { duration: 0.18 },
              filter: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragEnd={(_, info) => {
              if (info.offset.x < -48) paginate(1);
              else if (info.offset.x > 48) paginate(-1);
            }}
            className="touch-pan-y"
          >
            {renderSlide(index)}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-4 flex flex-col items-stretch gap-4 border-t border-mono-800/80 pt-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
          {Array.from({ length }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-8 bg-mono-100"
                  : "w-1.5 bg-mono-700 hover:bg-mono-500"
              }`}
            />
          ))}
        </div>

        <div className="flex items-center justify-center gap-3 sm:justify-end">
          <span className="font-mono text-[0.65rem] tabular-nums tracking-widest text-mono-500">
            <span className="text-mono-100">{String(index + 1).padStart(2, "0")}</span>
            <span className="mx-1.5 text-mono-700">·</span>
            <span>{String(length).padStart(2, "0")}</span>
          </span>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous"
              onClick={() => paginate(-1)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-mono-700 bg-mono-950 text-mono-300 transition hover:border-mono-500 hover:bg-mono-900 hover:text-mono-50"
            >
              <ChevronLeft className="h-4 w-4" strokeWidth={1.75} />
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={() => paginate(1)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-mono-200 bg-mono-100 text-mono-950 transition hover:bg-white"
            >
              <ChevronRight className="h-4 w-4" strokeWidth={1.75} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
