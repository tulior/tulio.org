import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = join(root, 'public');
const iconsDir = join(publicDir, 'icons');

const colors = {
  bg: '#08100f',
  text: '#eef1e8',
  accent: '#c08457',
  lightBg: '#eef1e8',
  lightText: '#08100f',
  lightAccent: '#9a5f38',
};

function faviconSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" role="img" aria-label="tulio.org icon">
  <style>
    :root { color-scheme: light dark; }
    .bg { fill: ${colors.bg}; }
    .mark { fill: ${colors.text}; }
    .dot { fill: ${colors.accent}; }
    @media (prefers-color-scheme: light) {
      .bg { fill: ${colors.lightBg}; }
      .mark { fill: ${colors.lightText}; }
      .dot { fill: ${colors.lightAccent}; }
    }
  </style>
  <rect class="bg" width="512" height="512" rx="96" />
  <rect class="mark" x="132" y="116" width="248" height="68" rx="28" />
  <rect class="mark" x="214" y="116" width="78" height="270" rx="32" />
  <rect class="mark" x="214" y="318" width="150" height="68" rx="30" />
  <circle class="dot" cx="386" cy="354" r="38" />
</svg>
`;
}

function rasterSvg({ maskable = false } = {}) {
  const scale = maskable ? 0.78 : 0.9;
  const offset = (512 - 512 * scale) / 2;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="${maskable ? 112 : 96}" fill="${colors.bg}" />
  <g transform="translate(${offset} ${offset}) scale(${scale})">
    <rect x="132" y="116" width="248" height="68" rx="28" fill="${colors.text}" />
    <rect x="214" y="116" width="78" height="270" rx="32" fill="${colors.text}" />
    <rect x="214" y="318" width="150" height="68" rx="30" fill="${colors.text}" />
    <circle cx="386" cy="354" r="38" fill="${colors.accent}" />
  </g>
</svg>
`;
}

async function renderPng(size, options = {}) {
  return sharp(Buffer.from(rasterSvg(options)))
    .resize(size, size, {
      fit: 'contain',
      withoutEnlargement: true,
    })
    .png({
      compressionLevel: 9,
      adaptiveFiltering: true,
    })
    .toBuffer();
}

function encodeIco(images) {
  const headerSize = 6;
  const entrySize = 16;
  const directorySize = headerSize + entrySize * images.length;
  const totalSize = directorySize + images.reduce((sum, image) => sum + image.buffer.length, 0);
  const ico = Buffer.alloc(totalSize);

  ico.writeUInt16LE(0, 0); // reserved
  ico.writeUInt16LE(1, 2); // image type: icon
  ico.writeUInt16LE(images.length, 4);

  let imageOffset = directorySize;

  images.forEach((image, index) => {
    const entryOffset = headerSize + entrySize * index;
    const sizeByte = image.size >= 256 ? 0 : image.size;

    ico.writeUInt8(sizeByte, entryOffset);
    ico.writeUInt8(sizeByte, entryOffset + 1);
    ico.writeUInt8(0, entryOffset + 2); // no color palette
    ico.writeUInt8(0, entryOffset + 3); // reserved
    ico.writeUInt16LE(1, entryOffset + 4); // color planes
    ico.writeUInt16LE(32, entryOffset + 6); // bits per pixel
    ico.writeUInt32LE(image.buffer.length, entryOffset + 8);
    ico.writeUInt32LE(imageOffset, entryOffset + 12);

    image.buffer.copy(ico, imageOffset);
    imageOffset += image.buffer.length;
  });

  return ico;
}

async function writePng(path, size, options = {}) {
  const png = await renderPng(size, options);
  await writeFile(path, png);
  return png;
}

await mkdir(iconsDir, { recursive: true });

await writeFile(join(publicDir, 'favicon.svg'), faviconSvg());

const favicon16 = await writePng(join(publicDir, 'favicon-16x16.png'), 16);
const favicon32 = await writePng(join(publicDir, 'favicon-32x32.png'), 32);
const favicon48 = await renderPng(48);

await writeFile(
  join(publicDir, 'favicon.ico'),
  encodeIco([
    { size: 16, buffer: favicon16 },
    { size: 32, buffer: favicon32 },
    { size: 48, buffer: favicon48 },
  ]),
);

await writePng(join(publicDir, 'apple-touch-icon.png'), 180);
await writePng(join(iconsDir, 'icon-192.png'), 192);
await writePng(join(iconsDir, 'icon-512.png'), 512);
await writePng(join(iconsDir, 'icon-512-maskable.png'), 512, { maskable: true });

console.log('Generated favicon.svg, favicon.ico, touch icons, and web manifest icons.');
