import HeroSection from "@/components/ui/HeroSection/HeroSection";
import PublicHeader from "@/components/view/Header/PublicHeader";

import ReviewPage from "@/components/ui/Review/Review";
import About from "./(public)/about-us/page";
import Services from "./(public)/services/page";

export default async function Home() {
  return (
    <div className="md:container md:mx-auto">
      <PublicHeader />
      <HeroSection />

      <Services />
      <About />
      <ReviewPage />
    </div>
  );
}
