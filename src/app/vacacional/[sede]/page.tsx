import { notFound } from "next/navigation";
import type { Metadata } from "next";
import VacacionalContent from "@/components/VacacionalContent";
import { VACACIONAL_META, type VacacionalSlug } from "@/data/vacacionales";

type Props = { params: Promise<{ sede: string }> };

export function generateStaticParams() {
  return [{ sede: "QuitoTenis" }, { sede: "puembo" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { sede } = await params;
  if (!(sede in VACACIONAL_META)) return { title: "Vacacional" };
  return {
    title: `Vacacional de Colores · ${sede} | Buena Vista`,
    description: "Vacacional infantil Buena Vista Club de Tenis",
  };
}

export default async function VacacionalPage({ params }: Props) {
  const { sede } = await params;
  if (!(sede in VACACIONAL_META)) notFound();
  return <VacacionalContent sede={sede as VacacionalSlug} />;
}
