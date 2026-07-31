"use client";

import type { CSSProperties } from "react";

type ColorfulTitleProps = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "p";
};

const LETTER_COLORS = [
  "#1e8fd6",
  "#ff7a1a",
  "#8fd12a",
  "#e91e8c",
  "#ffe14a",
  "#1a2b6b",
  "#ff6eb4",
  "#4eb8f5",
];

export default function ColorfulTitle({
  text,
  className = "",
  as: Tag = "h1",
}: ColorfulTitleProps) {
  const words = text.split(" ");

  return (
    <Tag
      className={`font-[family-name:var(--font-raleway)] font-bold leading-[0.95] tracking-tight ${className}`}
      aria-label={text}
    >
      {words.map((word, wi) => (
        <span key={`${word}-${wi}`} className="mr-[0.28em] inline-block whitespace-nowrap last:mr-0">
          {word.split("").map((char, i) => {
            const color = LETTER_COLORS[(wi * 3 + i) % LETTER_COLORS.length];
            const delay = (wi * word.length + i) * 0.08;
            const rot = ((i % 5) - 2) * 4;
            return (
              <span
                key={`${char}-${i}`}
                className="letter-bounce text-outline"
                style={
                  {
                    color,
                    animationDelay: `${delay}s`,
                    "--rot": `${rot}deg`,
                  } as CSSProperties
                }
              >
                {char}
              </span>
            );
          })}
        </span>
      ))}
    </Tag>
  );
}
