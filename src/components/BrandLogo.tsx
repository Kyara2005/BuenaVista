import Image from "next/image";
import { asset } from "@/lib/paths";

type BrandLogoProps = {
  priority?: boolean;
  /** Variante para header (compacta) o bloques (más visible). */
  size?: "nav" | "block";
  /**
   * light = plata/blanco (hero oscuro, footer verde)
   * dark = verde institucional (header blanco, fondos claros)
   */
  tone?: "light" | "dark";
  className?: string;
};

/**
 * Logo con fondo transparente y proporción natural.
 * Dos tonos para contrastar en UI clara u oscura; tamaño generoso + sombra.
 */
export default function BrandLogo({
  priority = false,
  size = "nav",
  tone = "light",
  className = "",
}: BrandLogoProps) {
  const sizes =
    size === "nav"
      ? "h-14 w-[5.5rem] sm:h-16 sm:w-[6.25rem] md:h-[4.5rem] md:w-[7rem]"
      : "h-[5.25rem] w-[8rem] sm:h-24 sm:w-[9.5rem]";

  const src =
    tone === "dark"
      ? asset("/images/logo-buena-vista-dark.png")
      : asset("/images/logo-buena-vista-light.png");

  const shadow =
    tone === "dark"
      ? "drop-shadow(0 1px 2px rgba(18,53,43,0.18))"
      : "drop-shadow(0 2px 4px rgba(0,0,0,0.45)) drop-shadow(0 0 14px rgba(200,164,93,0.35))";

  return (
    <span
      className={`relative inline-flex shrink-0 items-center justify-center ${sizes} ${className}`}
      style={{ filter: shadow }}
    >
      <Image
        src={src}
        alt="Buena Vista Club de Tenis"
        fill
        priority={priority}
        sizes="(max-width: 640px) 96px, 128px"
        className="object-contain object-center"
      />
    </span>
  );
}
