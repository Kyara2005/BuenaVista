/** Prefijo del sitio en GitHub Pages (vacío en desarrollo local). */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Rutas de `public/` compatibles con basePath (imágenes, videos, etc.). */
export function asset(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}
