export default function FloatingFigures() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {/* Pelota de tenis */}
      <svg
        className="float-y absolute left-[6%] top-[18%] h-14 w-14 md:h-20 md:w-20"
        viewBox="0 0 80 80"
        style={{ animationDelay: "0.2s" }}
      >
        <circle cx="40" cy="40" r="36" fill="#C8F542" stroke="#1a2b6b" strokeWidth="3" />
        <path
          d="M18 22c12 8 12 28 0 36M62 22c-12 8-12 28 0 36"
          fill="none"
          stroke="#fff"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>

      {/* Splash de pintura */}
      <svg
        className="float-x paint-splash absolute right-[8%] top-[12%] h-16 w-16 md:h-24 md:w-24"
        viewBox="0 0 100 100"
        style={{ animationDelay: "0.8s" }}
      >
        <path
          fill="#e91e8c"
          d="M50 8c8 14 28 10 34 24 8 16-6 28-2 42 4 12-10 22-24 18-10-3-14 10-26 6-14-5-8-22-18-30C4 58 10 38 22 30c10-7 8-22 28-22z"
        />
        <circle cx="72" cy="22" r="8" fill="#ff7a1a" />
        <circle cx="28" cy="70" r="6" fill="#4eb8f5" />
      </svg>

      {/* Bloque letra A */}
      <div
        className="float-y absolute right-[14%] top-[42%] hidden h-14 w-14 items-center justify-center rounded-xl bg-[#e53935] text-2xl font-black text-white shadow-lg md:flex"
        style={{ animationDelay: "1.2s", transform: "rotate(12deg)" }}
      >
        A
      </div>

      {/* Estrella */}
      <svg
        className="letter-wiggle absolute left-[12%] bottom-[28%] h-12 w-12 md:h-16 md:w-16"
        viewBox="0 0 64 64"
        style={{ animationDelay: "0.4s" }}
      >
        <path
          fill="#ffe14a"
          stroke="#1a2b6b"
          strokeWidth="2"
          d="M32 4l7.4 15.8L57 22.2l-12.5 12 3.2 17.6L32 43.4 16.3 51.8l3.2-17.6L7 22.2l17.6-2.4z"
        />
      </svg>

      {/* Puzzle */}
      <svg
        className="float-x absolute bottom-[18%] right-[22%] h-14 w-14 opacity-90"
        viewBox="0 0 64 64"
        style={{ animationDelay: "1.5s" }}
      >
        <path
          fill="#8fd12a"
          stroke="#1a2b6b"
          strokeWidth="2"
          d="M8 20h18v-6a8 8 0 0 1 16 0v6h14v18h-6a8 8 0 0 0 0 16h6v6H42v-6a8 8 0 0 0-16 0v6H8V42h6a8 8 0 0 0 0-16H8z"
        />
      </svg>

      {/* Sol */}
      <svg
        className="spin-slow absolute left-[42%] top-[6%] h-10 w-10 opacity-80 md:h-14 md:w-14"
        viewBox="0 0 64 64"
      >
        <circle cx="32" cy="32" r="12" fill="#ffe14a" stroke="#ff7a1a" strokeWidth="2" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
          <line
            key={deg}
            x1="32"
            y1="8"
            x2="32"
            y2="14"
            stroke="#ff7a1a"
            strokeWidth="3"
            strokeLinecap="round"
            transform={`rotate(${deg} 32 32)`}
          />
        ))}
      </svg>

      {/* Blob decorativo */}
      <div
        className="blob absolute -left-16 top-1/3 h-40 w-40 bg-[#ff6eb4]/35 md:h-56 md:w-56"
        style={{ animationDelay: "0.5s" }}
      />
      <div
        className="blob absolute -right-20 bottom-1/4 h-48 w-48 bg-[#8fd12a]/30"
        style={{ animationDelay: "1.8s" }}
      />
    </div>
  );
}
