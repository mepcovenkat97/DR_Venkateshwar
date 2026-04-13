import SEOHead from "@/components/SEOHead";
import FluidGradient from "@/components/FluidGradient";
import Hero from "@/sections/Hero";
import Experience from "@/sections/Experience";
import Skills from "@/sections/Skills";
import Education from "@/sections/Education";
import Certifications from "@/sections/Certifications";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <SEOHead />
      <FluidGradient />
      <Hero />
      <Experience />
      <Skills />
      <Education />
      <Certifications />
      <Footer />
    </>
  );
}
