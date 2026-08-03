import SiteHeader from "@/components/SiteHeader";
import CorporateHero from "@/components/CorporateHero";
import ClubSections from "@/components/ClubSections";
import SiteFooter from "@/components/SiteFooter";
import { WhatsAppFab } from "@/components/WhatsAppFab";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <CorporateHero />
        <ClubSections />
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </>
  );
}
