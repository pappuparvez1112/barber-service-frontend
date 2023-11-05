import HeroSection from "@/components/ui/HeroSection/HeroSection";
import PublicHeader from "@/components/view/Header/PublicHeader";
import Services from "./(public)/services/page";

const Home = () => {
  return (
    <div className="container">
      <PublicHeader />
      <HeroSection />
      <Services />
      {/* 
      <Services />
      <About />
      <ReviewPage /> */}
    </div>
  );
};
export default Home;
