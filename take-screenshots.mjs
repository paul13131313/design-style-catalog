import { chromium } from 'playwright';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const data = JSON.parse(readFileSync(resolve(__dirname, 'styles.json'), 'utf-8'));

function toKebab(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
  });

  for (const style of data.styles) {
    const filename = `${style.id}-${toKebab(style.name)}.jpg`;
    const filepath = resolve(__dirname, 'screenshots', filename);
    console.log(`Capturing ${style.url} → ${filename}`);

    const page = await context.newPage();
    try {
      await page.goto(style.url, { waitUntil: 'networkidle', timeout: 30000 });
      await page.waitForTimeout(3000);
      await page.screenshot({ path: filepath, type: 'jpeg', quality: 85 });
      console.log(`  ✓ Saved ${filename}`);
    } catch (err) {
      console.error(`  ✗ Failed: ${err.message}`);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  console.log('Done.');
})();
