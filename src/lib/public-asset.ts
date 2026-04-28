/** Prefix paths for Vite `base` (e.g. GitHub Pages project site). */
export function publicAsset(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const trimmed = path.startsWith("/") ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${trimmed}`;
}
