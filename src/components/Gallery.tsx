import Image from "next/image";
import { asset } from "@/lib/paths";

const GALLERY = [
  {
    src: asset("/images/galeria-vacacional-grupo.png"),
    alt: "Niños e instructores del vacacional en el césped del club",
  },
  {
    src: asset("/images/galeria-copa-mundo.png"),
    alt: "Socios celebrando la final de la Copa del Mundo en Club Buena Vista",
  },
  {
    src: asset("/images/galeria-natacion.png"),
    alt: "Niña disfrutando natación en el club",
  },
  {
    src: asset("/images/galeria-tenis.png"),
    alt: "Campeona de tenis categoría 12 años",
  },
  {
    src: asset("/images/galeria-fiestas.png"),
    alt: "Celebración y ambiente familiar en Buena Vista",
  },
  {
    src: asset("/images/galeria-torneo.png"),
    alt: "Torneo de tenis en Club Buena Vista",
  },
];

export default function Gallery() {
  const [first, second, ...rest] = GALLERY;

  return (
    <section id="galeria" className="relative px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-2 text-center text-sm font-bold uppercase tracking-widest text-[#1e8fd6]">
          Galería
        </p>
        <h2 className="mb-4 text-center text-3xl font-bold text-[#1a2b6b] md:text-5xl">
          Sonrisas, colores y <span className="text-[#e91e8c]">diversión</span>
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-center text-[#1a2b6b]/75">
          Cada día será una nueva aventura llena de movimiento, creatividad y amigos nuevos.
        </p>

        <figure className="group relative mb-4 aspect-[21/9] overflow-hidden md:aspect-[2.4/1]">
          <Image
            src={first.src}
            alt={first.alt}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="100vw"
          />
        </figure>

        <div className="mb-4 grid items-stretch gap-4 overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[#1a2b6b] to-[#1e8fd6] md:grid-cols-2">
          <figure className="group relative min-h-[240px] md:min-h-[320px]">
            <Image
              src={second.src}
              alt={second.alt}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </figure>
          <div className="flex flex-col justify-center gap-3 px-5 py-6 text-white md:px-8 md:py-8">
            <p className="text-lg font-bold leading-snug md:text-xl">
              ¡La gran final de la Copa del Mundo se vivió a lo grande en el Club Buena Vista! 🏆⚽️
            </p>
            <p className="text-sm leading-relaxed text-white/90 md:text-base">
              Nuestros socios disfrutaron de una jornada espectacular, llena de emoción, fútbol,
              actividades especiales y grandes premios, todo gracias al valioso apoyo de nuestros
              auspiciantes. 🎁✨
            </p>
            <p className="text-sm leading-relaxed text-white/85">
              Muchísimas gracias a todos los que nos acompañaron y compartieron este momento,
              haciendo de la gran final una experiencia verdaderamente inolvidable. ¡Nos vemos en el
              próximo evento! 🙌 Club Buena Vista
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {rest.map((item) => (
            <figure key={item.src} className="group relative aspect-[3/4] overflow-hidden">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
