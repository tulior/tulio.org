const fallbackApiOrigin = 'https://api.tulio.org';

export const apiOrigin = import.meta.env.PUBLIC_API_ORIGIN ?? fallbackApiOrigin;

export function apiUrl(path: `/${string}`): string {
  return new URL(path, apiOrigin).toString();
}
