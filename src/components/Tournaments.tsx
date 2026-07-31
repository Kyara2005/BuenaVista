export default function Tournaments() {
  return (
    <section id="torneos" className="relative overflow-hidden px-4 py-16 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a2b6b] via-[#1e8fd6] to-[#8fd12a]" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
        <div className="w-full max-w-xl shrink text-white lg:max-w-none lg:flex-1">
          <p className="mb-2 font-[family-name:var(--font-raleway)] text-sm font-bold uppercase tracking-widest text-[#ffe14a]">
            Torneos
          </p>
          <h2 className="font-[family-name:var(--font-raleway)] text-3xl font-bold md:text-4xl">
            También contamos con torneos de tenis
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/90 md:text-lg">
            ¡Te esperamos en el MT400 de{" "}
            <a
              href="https://www.instagram.com/tennisplus_ec/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#ffe14a] underline decoration-[#ffe14a]/50 underline-offset-4 hover:text-white"
            >
              @tennisplus_ec
            </a>{" "}
            en el Club Buena Vista!
          </p>
          <p className="mt-3 text-base leading-relaxed text-white/85">
            Nuestro presidente y reciente campeón del MT200, Rodrigo Godoy, te invita a ser parte del{" "}
            <strong>MT400 World Tennis Masters</strong>, del 21 al 27 de septiembre. Vive una semana
            de grandes partidos, competencia de alto nivel y el mejor ambiente tenístico.
          </p>
          <p className="mt-4 text-sm text-white/80">
            Inscríbete y forma parte de esta gran experiencia 💙🎾
          </p>
          <a
            href="https://www.instagram.com/tennisplus_ec/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#1a2b6b] transition hover:-translate-y-0.5"
          >
            Ver en Instagram →
          </a>
        </div>

        <div className="flex w-full shrink-0 justify-center lg:w-auto">
          <div className="overflow-hidden rounded-[1.25rem] bg-black shadow-2xl ring-4 ring-white/20">
            <video
              className="block h-auto max-h-[min(72vh,640px)] w-auto max-w-[min(100%,360px)] object-contain"
              controls
              playsInline
              preload="metadata"
            >
              <source src="/videos/buenaVista.mp4" type="video/mp4" />
              Tu navegador no soporta video HTML5.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
