import HeroSection from "@/components/home/HeroSection";
import StackingFeatureCards from "@/components/home/StackingFeatureCards";
import KPIBand from "@/components/home/KPIBand";
import HowItWorks from "@/components/home/HowItWorks";
import SolutionsByAudience from "@/components/home/SolutionsByAudience";
import TrustGovernance from "@/components/home/TrustGovernance";
import FinalCTA from "@/components/home/FinalCTA";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <StackingFeatureCards />
      <KPIBand />
      <HowItWorks />
      <SolutionsByAudience />
      <TrustGovernance />
      <FinalCTA />
    </div>
  );
}
