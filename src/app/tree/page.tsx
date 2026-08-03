import type { Metadata } from "next";
import TreeClient from "./TreeClient";

export const metadata: Metadata = {
  title: "Enlaces | Buena Vista Club de Tenis",
  description: "WhatsApp e Instagram de Buena Vista Club de Tenis",
};

export default function TreePage() {
  return <TreeClient />;
}
