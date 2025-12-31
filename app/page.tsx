import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import dynamic from "next/dynamic";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Problems = dynamic(() => import("@/components/Problems"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <div className="flex-1">
        <section id="home" className="w-full">
          <Hero />
        </section>
        <section id="problems" className="w-full">
          <Problems />
        </section>
        <section id="solution" className="w-full py-20">
          <Solution />
        </section>
        <section id="how-it-works" className="w-full py-20">
          <HowItWorks />
        </section>
        <section id="cta" className="w-full py-20">
          <CTASection />
        </section>
        <section id="footer" className="w-full">
          <Footer />
        </section>
      </div>
    </div>
  );
}
