
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import USP from "@/components/USP";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <Hero />
      <Features />
      <USP />
      <Testimonials />
      <FAQ />
      <CtaBanner />
      <Footer />
    </div>
  );
};

export default Index;
