"use client";

import HeroSection from "./sections/HeroSection";
import ServicesSection from "./sections/ServicesSection";
import WorksSection from "./sections/WorksSection";
import SocialSection from "./sections/SocialSection";
import WhySection from "./sections/WhySection";
import TestimonialsSection from "./sections/TestimonialsSection";
import Contact from "./Contact";
import Footer from "./Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen min-w-0 overflow-x-hidden bg-mono-950 text-mono-50">
      <HeroSection />
      <ServicesSection />
      <WorksSection />
      <SocialSection />
      <WhySection />
      <TestimonialsSection />
      <Contact />
      <Footer />
    </div>
  );
}
