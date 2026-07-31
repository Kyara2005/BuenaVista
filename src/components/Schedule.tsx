export default function Schedule() {
  return (
    <section className="relative -mt-4 px-4 pb-8">
      <div className="mx-auto flex max-w-4xl flex-col items-stretch gap-3 overflow-hidden rounded-[2rem] bg-[#e91e8c] p-1 shadow-[0_16px_0_rgba(176,16,104,0.35)] sm:flex-row sm:gap-0">
        <div className="flex flex-1 flex-col items-center justify-center bg-white/15 px-6 py-5 text-center text-white sm:border-r sm:border-white/25">
          <p className="font-[family-name:var(--font-display)] text-xs font-bold uppercase tracking-widest opacity-90">
            Fechas 2026
          </p>
          <p className="mt-1 font-[family-name:var(--font-display)] text-xl font-black md:text-2xl">
            22 jun → 28 ago
          </p>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center bg-white/10 px-6 py-5 text-center text-white sm:border-r sm:border-white/25">
          <p className="font-[family-name:var(--font-display)] text-xs font-bold uppercase tracking-widest opacity-90">
            Horario
          </p>
          <p className="mt-1 font-[family-name:var(--font-display)] text-xl font-black md:text-2xl">
            Lun–Vie · 09h00–13h00
          </p>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center rounded-[1.75rem] bg-[#1a2b6b] px-6 py-5 text-center text-white sm:rounded-none sm:rounded-r-[1.75rem]">
          <p className="font-[family-name:var(--font-display)] text-xs font-bold uppercase tracking-widest opacity-90">
            Ciclos
          </p>
          <p className="mt-1 font-[family-name:var(--font-display)] text-xl font-black md:text-2xl">
            2 semanas · desde lunes
          </p>
        </div>
      </div>
    </section>
  );
}
