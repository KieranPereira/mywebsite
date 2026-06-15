import {chromium} from 'playwright';
import fs from 'fs';

const OUT = 'scripts/shots';
fs.mkdirSync(OUT, {recursive: true});

const browser = await chromium.launch();
const page = await browser.newPage({viewport: {width: 1440, height: 900}});
await page.goto('http://localhost:3000', {waitUntil: 'networkidle', timeout: 60000});
await page.waitForTimeout(2500);

const slides = await page.$$('[data-deck-slide]');
console.log(`found ${slides.length} slides`);

for (let i = 0; i < slides.length; i++) {
  const id = await slides[i].getAttribute('id');
  await slides[i].scrollIntoViewIfNeeded();
  await page.waitForTimeout(1500);
  await page.screenshot({path: `${OUT}/${String(i + 1).padStart(2, '0')}-${id}.png`});
  console.log(`shot ${id}`);
}

await browser.close();
console.log('done');
