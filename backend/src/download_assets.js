import fs from 'fs';
import path from 'path';

const outDir = 'frontend/public/images';
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const assets = [
  'images/mahajan-building.jpg',
  'images/about-us-img.jpg',
  'images/about-us1.avif',
  'images/about-us2.avif',
  'images/about-us3.avif',
  'images/about-us5.avif',
  'images/facilities-emergency-care.avif',
  'images/facilities-Ultramodern-ICU.avif',
  'images/facilities-room.avif',
  'images/facilities-LASER-machines.avif',
  'images/dept1.jpg',
  'images/dept2.avif',
  'images/dept3.avif',
  '_next/static/media/mahajan-logo.3ycnalru99nux.jpg'
];

async function downloadAll() {
  for (const asset of assets) {
    const url = `https://www.mahajanhealthcare.com/${asset}`;
    const filename = path.basename(asset);
    const dest = path.join(outDir, filename);
    try {
      console.log(`Downloading ${url} ...`);
      const res = await fetch(url);
      if (res.ok) {
        const buffer = await res.arrayBuffer();
        fs.writeFileSync(dest, Buffer.from(buffer));
        console.log(`Saved -> ${dest} (${buffer.byteLength} bytes)`);
      } else {
        console.log(`Failed HTTP ${res.status} for ${url}`);
      }
    } catch (e) {
      console.log(`Error downloading ${url}:`, e.message);
    }
  }
}

downloadAll();
