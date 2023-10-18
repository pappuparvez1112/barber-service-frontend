import HeroSection from "@/components/ui/HeroSection/HeroSection";
import PublicHeader from "@/components/view/Header/PublicHeader";

import ReviewPage from "@/components/ui/Review/Review";
import AboutPage from "./(public)/about-us/page";
import Services from "./(public)/services/page";

export default async function Home() {
  return (
    <>
      <PublicHeader />
      <HeroSection />

      <Services />
      <AboutPage />
      <ReviewPage />
    </>
  );
}
