import Navbar from "@/components/Navbar";
import CtaSection from "@/components/Sections/CtaSection";
import FaqSection from "@/components/Sections/FaqSection";
import FeatureButtomSection from "@/components/Sections/FeatureBottomSection";
import FeatureSection from "@/components/Sections/FeatureSection";
import FeaturesSection from "@/components/Sections/FeaturesSection";
import FooterSection from "@/components/Sections/FooterSection";
import HeroSection from "@/components/Sections/HeroSection";
import HowSection from "@/components/Sections/HowSection";
import WhoSection from "@/components/Sections/WhoSection";

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
