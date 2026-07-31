import WhatsAppButton from "./WhatsAppButton";

export default function FooterCTA() {
  return (
    <footer className="relative overflow-hidden px-4 py-16 md:py-20">
      <div className="absolute inset-0 bg-[#1a2b6b]" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 20% 30%, #e91e8c 0%, transparent 40%), radial-gradient(circle at 80% 70%, #1e8fd6 0%, transparent 45%), radial-gradient(circle at 50% 100%, #8fd12a 0%, transparent 40%)",
        }}
      />

      <div className="relative mx-auto max-w-3xl text-center text-white">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold md:text-5xl">
          Asegura el lugar de tu hijo
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/85 md:text-lg">
          Los cupos son limitados. Escríbenos al{" "}
          <strong className="text-[#ffe14a]">095 868 9486</strong> y vive el mejor verano del año.
        </p>
        <div className="mt-8 flex justify-center">
          <WhatsAppButton label="¡Reserva tu cupo ahora!" />
        </div>
        <p className="mt-12 text-sm text-white/50">
          © {new Date().getFullYear()} Buena Vista Club de Tenis · Vacacional de Colores
        </p>
      </div>
    </footer>
  );
}
