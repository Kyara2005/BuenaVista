/** Prefijo del sitio en GitHub Pages (vacío en desarrollo local). */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Rutas de `public/` compatibles con basePath (imágenes, videos, etc.). */
export function asset(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}

/** Enlaces internos absolutos con basePath (para <a> nativos). */
export function withBase(path: string): string {
  if (!path || path.startsWith("http") || path.startsWith("mailto:") || path.startsWith("tel:")) {
    return path;
  }
  if (path.startsWith("#")) {
    return path;
  }
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}

/**
 * Ancla a una sección del home.
 * En la home usa solo el hash; desde otras rutas incluye basePath.
 */
export function sectionHref(sectionId: string, onHome = false): string {
  const id = sectionId.replace(/^#/, "");
  if (onHome) return `#${id}`;
  // trailingSlash: home pública = /BuenaVista/
  return `${basePath}/#${id}`;
}
