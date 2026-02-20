'use client';

import LandingHero from "@/components/LandingHero/LandingHero";
import FeaturesSection from "@/components/FeaturesSection/FeaturesSection";
import CtaSection from "@/components/CtaSection/CtaSection";

export default function Page() {
  return (
    <main>
      <LandingHero />
      <FeaturesSection />
      <CtaSection />
    </main>
  );
}