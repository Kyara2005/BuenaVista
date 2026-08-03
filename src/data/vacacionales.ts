import { asset } from "@/lib/paths";

export type VacacionalSlug = "QuitoTenis" | "puembo";

export const VACACIONAL_META: Record<
  VacacionalSlug,
  { flyer: string; whatsapp: string; whatsappDisplay: string }
> = {
  QuitoTenis: {
    flyer: asset("/images/flyer-club.png"),
    whatsapp: "593958689486",
    whatsappDisplay: "095 868 9486",
  },
  puembo: {
    flyer: asset("/images/flyer-puembo.png"),
    whatsapp: "593984571491",
    whatsappDisplay: "098 457 1491",
  },
};
