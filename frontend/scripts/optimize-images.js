// Generates optimized WebP variants of every PNG/JPG in /public/imageMenu.
// Outputs:
//   <name>.webp           (full size, quality 80)
//   <name>-1280.webp      (responsive)
//   <name>-768.webp       (responsive)
//   <name>-480.webp       (responsive)
// Original PNGs are kept as fallback.
//
// Run: npm run images
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC_DIR = path.resolve(__dirname, '..', 'public', 'imageMenu');
const WIDTHS = [480, 768, 1280];
const QUALITY = 78;

const isSource = (f) => /\.(png|jpe?g)$/i.test(f) && !/-(480|768|1280)\.(png|jpe?g)$/i.test(f);

function fmtKB(bytes) {
  return `${(bytes / 1024).toFixed(1)} kB`;
}

async function processOne(file) {
  const full = path.join(SRC_DIR, file);
  const base = file.replace(/\.(png|jpe?g)$/i, '');
  const stat = await fs.stat(full);
  const inputBytes = stat.size;

  const image = sharp(full, { failOn: 'none' });
  const meta = await image.metadata();
  const variants = [];

  const fullOut = path.join(SRC_DIR, `${base}.webp`);
  await image.clone().webp({ quality: QUALITY, effort: 5 }).toFile(fullOut);
  variants.push(fullOut);

  for (const w of WIDTHS) {
    if (!meta.width || meta.width <= w) continue;
    const out = path.join(SRC_DIR, `${base}-${w}.webp`);
    await image
      .clone()
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: QUALITY, effort: 5 })
      .toFile(out);
    variants.push(out);
  }

  let outputBytes = 0;
  for (const v of variants) outputBytes += (await fs.stat(v)).size;

  return { file, inputBytes, outputBytes, variants: variants.length };
}

async function main() {
  const entries = await fs.readdir(SRC_DIR);
  const files = entries.filter(isSource);
  if (!files.length) {
    console.log('No source images found in', SRC_DIR);
    return;
  }

  console.log(`Optimizing ${files.length} images from ${SRC_DIR}\n`);
  let totalIn = 0;
  let totalOut = 0;
  for (const f of files) {
    const r = await processOne(f);
    totalIn += r.inputBytes;
    totalOut += r.outputBytes;
    const ratio = (((r.inputBytes - r.outputBytes) / r.inputBytes) * 100).toFixed(0);
    console.log(`  ${r.file.padEnd(34)} ${fmtKB(r.inputBytes).padStart(10)}  ->  ${fmtKB(r.outputBytes).padStart(10)} (${r.variants} variants, -${ratio}%)`);
  }
  const saved = (((totalIn - totalOut) / totalIn) * 100).toFixed(0);
  console.log(`\nTotal: ${fmtKB(totalIn)}  ->  ${fmtKB(totalOut)} (-${saved}%)`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
