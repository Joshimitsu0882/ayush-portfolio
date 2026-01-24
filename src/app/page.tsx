import Hero from "@/components/Hero";
import About from "@/components/About";
import Capabilities from "@/components/Capabilities";
import SelectedWork from "@/components/SelectedWork";
import Tools from "@/components/Tools";
import CTA from "@/components/CTA";
import FadeIn from "@/components/ui/FadeIn";

export default function Home() {
  return (
    <main className="min-h-screen bg-off-white">
      <FadeIn>
        <Hero />
      </FadeIn>

      <FadeIn delay={200}>
        <About />
      </FadeIn>

      <FadeIn>
        <Capabilities />
      </FadeIn>

      <FadeIn>
        <SelectedWork />
      </FadeIn>

      <FadeIn>
        <Tools />
      </FadeIn>

      <FadeIn delay={100}>
        <CTA />
      </FadeIn>
    </main>
  );
}
