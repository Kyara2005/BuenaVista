import WhatsAppButton from "./WhatsAppButton";

export default function Pricing() {
  return (
    <section id="precios" className="relative overflow-hidden px-4 py-16 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-[#4eb8f5] via-[#8fd12a]/40 to-[#ffe14a]/50" />
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="mb-2 font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-widest text-[#1a2b6b]">
          Valor por 2 semanas
        </p>
        <h2 className="mb-8 font-[family-name:var(--font-display)] text-3xl font-bold text-[#1a2b6b] md:text-5xl">
          ¡La aventura comienza aquí!
        </h2>

        <div className="grid gap-5 sm:grid-cols-2">
          <a
            href="https://wa.me/593958689486?text=Hola!%20Soy%20socio%20y%20quiero%20inscribirme%20al%20Vacacional%20de%20Colores"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-[2rem] bg-[#e91e8c] p-8 text-white shadow-[0_16px_0_#b01068] transition hover:-translate-y-1"
          >
            <span className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-white/15" />
            <p className="font-[family-name:var(--font-display)] text-lg font-semibold opacity-90">
              Socios
            </p>
            <p className="mt-2 font-[family-name:var(--font-display)] text-6xl font-black tracking-tight">
              $155
            </p>
            <p className="mt-2 text-sm font-medium opacity-90">IVA incluido</p>
            <span className="mt-5 inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-bold group-hover:bg-white group-hover:text-[#e91e8c]">
              Inscribirme →
            </span>
          </a>

          <a
            href="https://wa.me/593958689486?text=Hola!%20No%20soy%20socio%20y%20quiero%20inscribirme%20al%20Vacacional%20de%20Colores"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-[2rem] bg-[#ff7a1a] p-8 text-white shadow-[0_16px_0_#c45a0e] transition hover:-translate-y-1"
          >
            <span className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-white/15" />
            <p className="font-[family-name:var(--font-display)] text-lg font-semibold opacity-90">
              No socios
            </p>
            <p className="mt-2 font-[family-name:var(--font-display)] text-6xl font-black tracking-tight">
              $200
            </p>
            <p className="mt-2 text-sm font-medium opacity-90">IVA incluido</p>
            <span className="mt-5 inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-bold group-hover:bg-white group-hover:text-[#ff7a1a]">
              Inscribirme →
            </span>
          </a>
        </div>

        <p className="mt-8 rounded-2xl bg-[#1a2b6b] px-6 py-4 font-[family-name:var(--font-display)] text-lg font-bold text-white md:text-xl">
          ¡Inscríbete ya! Los cupos son limitados 🌈
        </p>

        <div className="mt-6 flex justify-center">
          <WhatsAppButton label="Escríbenos por WhatsApp" />
        </div>
      </div>
    </section>
  );
}
