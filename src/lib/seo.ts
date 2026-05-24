import { site } from '../data/site';

export function titleWithSite(title: string): string {
  return title.includes('tulio.org') ? title : `${title} | tulio.org`;
}

export function absoluteUrl(path: string): string {
  return new URL(path, site.url).toString();
}
