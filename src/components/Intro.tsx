export default function Intro() {
  return (
    <section className="relative px-4 py-14 md:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[#1a2b6b] md:text-4xl">
          ¡Este verano será{" "}
          <span className="letter-wiggle inline-block text-[#e91e8c]">inolvidable!</span>
        </h2>
        <p className="mt-5 text-base leading-relaxed text-[#1a2b6b]/80 md:text-lg">
          En el <strong>Vacacional de Colores 2026</strong>, los niños disfrutarán de semanas
          llenas de deporte, creatividad, aprendizaje y mucha diversión, mientras hacen nuevos
          amigos en un ambiente seguro y lleno de energía.
        </p>
      </div>
    </section>
  );
}
