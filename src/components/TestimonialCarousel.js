"use client";

import CarouselShell from "./ui/CarouselShell";
import ReviewCard from "./ReviewCard";

export default function TestimonialCarousel({ reviews }) {
  return (
    <CarouselShell
      length={reviews.length}
      minHeightClass="min-h-0"
      renderSlide={(i) => (
        <ReviewCard
          name={reviews[i].name}
          content={reviews[i].content}
          rating={reviews[i].rating}
          image={reviews[i].image}
        />
      )}
    />
  );
}
