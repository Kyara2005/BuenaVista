import { asset } from "@/lib/paths";

export type VacacionalLocation = {
  slug: "QuitoTenis" | "puembo";
  name: string;
  subtitle: string;
  flyer: string;
  whatsapp: string;
  whatsappDisplay: string;
  dates: string;
  schedule: string;
  ages: string;
  priceNote: string;
  prices: { label: string; amount: string }[];
  location?: string;
  activities: string[];
  includes: string[];
  highlights: string[];
};

export const VACACIONALES: Record<"QuitoTenis" | "puembo", VacacionalLocation> = {
  QuitoTenis: {
    slug: "QuitoTenis",
    name: "Vacacional de Colores",
    subtitle: "Buena Vista Club de Tenis · Quito",
    flyer: asset("/images/flyer-club.png"),
    whatsapp: "593958689486",
    whatsappDisplay: "095 868 9486",
    dates: "Del 22 de junio al 28 de agosto",
    schedule: "Lunes a viernes · 09h00 a 13h00 · Ciclos de 2 semanas (inicio todos los lunes)",
    ages: "Para niños de 2 a 16 años",
    priceNote: "Valor por 2 semanas · IVA incluido",
    prices: [
      { label: "Socios", amount: "$155" },
      { label: "No socios", amount: "$200" },
    ],
    activities: [
      "Más de 16 actividades deportivas y recreativas",
      "Tenis, fútbol, arte, pádel, natación y más",
      "Grupos divididos por edades",
    ],
    includes: [
      "Kit de bienvenida: camiseta + gorra",
      "Ambiente seguro y lleno de energía",
      "Transporte puerta a puerta (costo adicional)",
    ],
    highlights: [
      "¡Este verano será inolvidable!",
      "Deporte, creatividad, aprendizaje y nuevos amigos.",
      "Los cupos son limitados — reserva ya.",
    ],
  },
  puembo: {
    slug: "puembo",
    name: "Vacacional de Colores",
    subtitle: "¡En Puembo! · Plaza San Marcos",
    flyer: asset("/images/flyer-puembo.png"),
    whatsapp: "593984571491",
    whatsappDisplay: "098 457 1491",
    dates: "Del 22 de junio al 31 de julio",
    schedule: "Lunes a viernes · 09h00 a 13h00",
    ages: "Para niños de 6 a 13 años",
    priceNote: "Valor por 2 semanas · IVA incluido",
    prices: [{ label: "Inscripción", amount: "$175" }],
    location: "Plaza San Marcos, Puembo",
    activities: ["Tenis", "Fútbol", "Arte", "Pádel", "Handball"],
    includes: [
      "Kit de bienvenida: camiseta + gorra",
      "Actividades deportivas y recreativas",
      "Ambiente seguro y divertido",
    ],
    highlights: [
      "Vacaciones llenas de color en Puembo.",
      "Deporte, creatividad y nuevos amigos.",
      "¡Reserva tu cupo ahora!",
    ],
  },
};
