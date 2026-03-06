import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <Stats />
        <Services />
        <Testimonials />
        <CTA />
      </main>
    </>
  );
}
