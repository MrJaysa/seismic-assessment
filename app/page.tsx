import Navbar from "@/components/Navbar";
import CtaSection from "@/components/sections/CtaSection";
import FaqSection from "@/components/sections/FaqSection";
import FeatureButtomSection from "@/components/sections/FeatureBottomSection";
import FeatureSection from "@/components/sections/FeatureSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import FooterSection from "@/components/sections/FooterSection";
import HeroSection from "@/components/sections/HeroSection";
import HowSection from "@/components/sections/HowSection";
import WhoSection from "@/components/sections/WhoSection";

export default function Home() {
  return (
    <main className="relative w-full">
      <Navbar />
      <div className="flex flex-col gap-8 items-center">
        <HeroSection />
        <FeatureSection />
        <HowSection />
        <FeaturesSection />
        <WhoSection />
        <FeatureButtomSection />
        <FaqSection />
        <CtaSection />
        <FooterSection />
      </div>
    </main>
  );
}
