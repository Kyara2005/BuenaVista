import Hero from "@/components/Hero";
import Schedule from "@/components/Schedule";
import Intro from "@/components/Intro";
import VacacionalSection from "@/components/VacacionalSection";
import Includes from "@/components/Includes";
import Pricing from "@/components/Pricing";
import Gallery from "@/components/Gallery";
import Tournaments from "@/components/Tournaments";
import FooterCTA from "@/components/FooterCTA";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Hero />
      <Schedule />
      <Intro />
      <VacacionalSection />
      <Includes />
      <Pricing />
      <Gallery />
      <Tournaments />
      <FooterCTA />
      <WhatsAppButton variant="fab" />
    </>
  );
}
