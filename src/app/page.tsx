import HeroSection from "@/components/ui/HeroSection/HeroSection";
import ReviewPage from "@/components/ui/Review/Review";
import PublicHeader from "@/components/view/Header/PublicHeader";
import About from "./(public)/about-us/page";
import Services from "./(public)/services/page";

const Home = () => {
  return (
    <div className="container mx-auto md:container sm:container lg:container">
      <PublicHeader />
      <HeroSection />
      <Services />
      <About />
      <ReviewPage />
      {/* 
      <Services />
      // 
   */}
    </div>
  );
};
export default Home;
