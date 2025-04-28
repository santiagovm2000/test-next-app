import DataStatsSection from "../components/DataStatsSection/DataStatsSection";
import FaqSection from "../components/FaqSection/FaqSection";
import FeaturesSection from "../components/FeatureSection/FeatureSection";
import GiveShot from "../components/GiveShot/GiveShot";
import HeroSection from "../components/HeroSection/Hero";
import IntegrationsSection from "../components/IntegrationsSection/IntegrationSection";
import TestimonialCardSection from "../components/TestimonialCardSection/TestimonialCardSection";
import TestimonialSection from "../components/TestimonialSection/TestimonialSection";
import TrialSection from "../components/TrialSection/TrialSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntegrationsSection />
      <DataStatsSection />
      <FeaturesSection />
      <TestimonialSection />
      <TrialSection />
      <FaqSection />
      <TestimonialCardSection />
      <GiveShot />
    </>
  );
}
