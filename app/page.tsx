import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import dynamic from "next/dynamic";

const Problems = dynamic(() => import("@/components/Problems"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Problems />
      <Solution />
      <HowItWorks />
      <Pricing />
      <Contact />
    </>
  );
}
