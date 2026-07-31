const ITEMS = [
  {
    icon: "🎨",
    title: "+16 actividades",
    desc: "Deportivas y recreativas todos los días",
    accent: "#e91e8c",
  },
  {
    icon: "👧🧒",
    title: "Grupos por edades",
    desc: "De 2 a 16 años, en un ambiente seguro",
    accent: "#1e8fd6",
  },
  {
    icon: "📅",
    title: "Ciclos de 2 semanas",
    desc: "Inicio todos los lunes · lunes a viernes",
    accent: "#8fd12a",
  },
  {
    icon: "⏰",
    title: "09h00 a 13h00",
    desc: "Mañanas llenas de energía y movimiento",
    accent: "#ff7a1a",
  },
  {
    icon: "👕",
    title: "Kit de bienvenida",
    desc: "Camiseta + gorra incluidas en la inscripción",
    accent: "#c9a800",
  },
  {
    icon: "🚌",
    title: "Transporte puerta a puerta",
    desc: "Servicio opcional con costo adicional",
    accent: "#1a2b6b",
  },
];

export default function Includes() {
  return (
    <section id="incluye" className="relative px-4 py-16 md:py-24">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-64 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at 30% 0%, #ff6eb4 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, #4eb8f5 0%, transparent 45%)",
        }}
      />
      <div className="relative mx-auto max-w-5xl">
        <p className="mb-2 text-center font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-widest text-[#e91e8c]">
          ¿Qué incluye?
        </p>
        <h2 className="mb-12 text-center font-[family-name:var(--font-display)] text-3xl font-bold text-[#1a2b6b] md:text-5xl">
          Todo para un verano{" "}
          <span className="letter-wiggle inline-block text-[#ff7a1a]">inolvidable</span>
        </h2>

        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item, i) => (
            <li
              key={item.title}
              className="pop-in text-center sm:text-left"
              style={{ animationDelay: `${0.08 * i}s` }}
            >
              <span
                className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl text-2xl text-white shadow-md sm:mx-0"
                style={{ backgroundColor: item.accent }}
              >
                {item.icon}
              </span>
              <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[#1a2b6b]">
                {item.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-[#1a2b6b]/75">{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
