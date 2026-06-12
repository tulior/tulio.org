import { Buffer } from 'node:buffer';
import sharp from 'sharp';

const width = 1200;
const height = 630;

type RenderOgImageOptions = {
  eyebrow: string;
  title: string;
  description?: string | undefined;
  meta?: string | undefined;
};

function escapeXml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function wrapLine(line: string, maxChars: number): string[] {
  const words = line.trim().split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  let current = '';

  for (const word of words) {
    const next = current ? `${current} ${word}` : word;

    if (next.length > maxChars && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  }

  if (current) {
    lines.push(current);
  }

  return lines;
}

function wrapText(value: string, maxChars: number, maxLines: number): string[] {
  const explicitLines = value.split('\n');
  const lines = explicitLines.flatMap((line) => wrapLine(line, maxChars));

  if (lines.length <= maxLines) {
    return lines;
  }

  const kept = lines.slice(0, maxLines);
  const last = kept.at(-1);
  kept[kept.length - 1] = `${(last ?? '').replace(/[\s.]+$/u, '')}…`;
  return kept;
}

function textLines({
  lines,
  x,
  y,
  size,
  lineHeight,
  family,
  weight = 400,
  fill,
  letterSpacing = 0,
}: {
  lines: string[];
  x: number;
  y: number;
  size: number;
  lineHeight: number;
  family: string;
  weight?: number;
  fill: string;
  letterSpacing?: number;
}): string {
  return lines
    .map(
      (line, index) =>
        `<text x="${x}" y="${y + index * lineHeight}" font-family="${family}" font-size="${size}" font-weight="${weight}" letter-spacing="${letterSpacing}" fill="${fill}">${escapeXml(line)}</text>`,
    )
    .join('\n');
}

export async function renderOgImage(options: RenderOgImageOptions): Promise<Buffer> {
  const titleLines = wrapText(options.title, 28, 3);
  const titleSize = titleLines.length > 2 ? 82 : 92;
  const titleLineHeight = Math.round(titleSize * 0.92);
  const descriptionLines = options.description ? wrapText(options.description, 72, 3) : [];
  const titleBottom = 222 + (titleLines.length - 1) * titleLineHeight;
  const descriptionY = titleBottom + 68;
  const metaY = descriptionY + Math.max(descriptionLines.length, 1) * 42 + 56;

  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <rect width="${width}" height="${height}" fill="#08100f" />
  <path d="M0 0H${width}V${height}H0Z" fill="url(#bg)" />
  <path d="M86 138H186" stroke="#c08457" stroke-width="2" opacity="0.85" />
  <path d="M86 548H1114" stroke="#263a35" stroke-width="1" />
  <path d="M834 96C920 72 1006 80 1092 120" stroke="#8fb7a8" stroke-width="1" opacity="0.22" fill="none" />
  <path d="M872 138C942 118 1014 124 1086 158" stroke="#8fb7a8" stroke-width="1" opacity="0.14" fill="none" />
  <path d="M910 180C966 166 1022 172 1078 198" stroke="#8fb7a8" stroke-width="1" opacity="0.10" fill="none" />
  <g opacity="0.22">
    <circle cx="1038" cy="452" r="2" fill="#8fb7a8" />
    <circle cx="1078" cy="452" r="2" fill="#8fb7a8" />
    <circle cx="1118" cy="452" r="2" fill="#8fb7a8" />
    <circle cx="1038" cy="492" r="2" fill="#8fb7a8" />
    <circle cx="1078" cy="492" r="2" fill="#8fb7a8" />
    <circle cx="1118" cy="492" r="2" fill="#8fb7a8" />
  </g>

  ${textLines({
    lines: [options.eyebrow],
    x: 86,
    y: 92,
    size: 28,
    lineHeight: 32,
    family: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
    weight: 700,
    fill: '#8fb7a8',
    letterSpacing: 1.5,
  })}

  ${textLines({
    lines: titleLines,
    x: 86,
    y: 222,
    size: titleSize,
    lineHeight: titleLineHeight,
    family: 'Georgia, Cambria, Times New Roman, serif',
    weight: 700,
    fill: '#eef1e8',
    letterSpacing: -3,
  })}

  ${textLines({
    lines: descriptionLines,
    x: 90,
    y: descriptionY,
    size: 30,
    lineHeight: 42,
    family: 'Inter, ui-sans-serif, system-ui, sans-serif',
    fill: '#c3cec7',
  })}

  ${options.meta ? textLines({
    lines: [options.meta],
    x: 90,
    y: Math.min(metaY, 510),
    size: 22,
    lineHeight: 28,
    family: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
    weight: 600,
    fill: '#91a39b',
    letterSpacing: 1.2,
  }) : ''}

  <defs>
    <radialGradient id="bg" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(960 72) rotate(133) scale(720 560)">
      <stop stop-color="#12211d" stop-opacity="0.8" />
      <stop offset="0.42" stop-color="#08100f" stop-opacity="0.22" />
      <stop offset="1" stop-color="#08100f" stop-opacity="0" />
    </radialGradient>
  </defs>
</svg>`;

  return sharp(Buffer.from(svg)).png().toBuffer();
}
