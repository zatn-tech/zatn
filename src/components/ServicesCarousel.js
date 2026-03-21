"use client";

import CarouselShell from "./ui/CarouselShell";
import ServiceCard from "./ServiceCard";

export default function ServicesCarousel({ items }) {
  return (
    <CarouselShell
      length={items.length}
      minHeightClass="min-h-0"
      renderSlide={(i) => (
        <div className="px-1">
          <ServiceCard
            image={items[i].image}
            topic={items[i].topic}
            content={items[i].content}
            index={i + 1}
            compact
          />
        </div>
      )}
    />
  );
}
