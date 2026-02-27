import { chromium } from 'playwright';
import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const sites = [
  { id: '02', url: 'https://www.topology.vc/' },
  { id: '03', url: 'https://www.andreasantonsson.dev/' },
  { id: '04', url: 'https://takeagander.com/' },
  { id: '05', url: 'https://www.planetono.space/' },
  { id: '06', url: 'https://www.sileent.com/' },
  { id: '07', url: 'https://good-fella.com/' },
  { id: '08', url: 'https://www.foundrline.com/' },
];

function toKebab(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
  });

  const results = [];

  for (const site of sites) {
    console.log(`\n=== Analyzing ${site.id}: ${site.url} ===`);
    const page = await context.newPage();

    try {
      await page.goto(site.url, { waitUntil: 'networkidle', timeout: 30000 });
      await page.waitForTimeout(3000);

      // Take screenshot
      const tempName = `${site.id}-temp.jpg`;
      const tempPath = resolve(__dirname, 'screenshots', tempName);
      await page.screenshot({ path: tempPath, type: 'jpeg', quality: 85 });
      console.log(`  Screenshot saved: ${tempName}`);

      // Extract CSS data
      const analysis = await page.evaluate(() => {
        const result = {
          colors: [],
          fonts: new Set(),
          bgColors: [],
          textColors: [],
          buttons: [],
          cssVars: {},
          navStyles: null,
        };

        // Get CSS custom properties from :root
        const rootStyles = getComputedStyle(document.documentElement);
        const sheets = document.styleSheets;
        for (const sheet of sheets) {
          try {
            for (const rule of sheet.cssRules) {
              if (rule.selectorText === ':root' || rule.selectorText === 'html') {
                for (const prop of rule.style) {
                  if (prop.startsWith('--')) {
                    result.cssVars[prop] = rule.style.getPropertyValue(prop).trim();
                  }
                }
              }
            }
          } catch (e) { /* cross-origin */ }
        }

        // Sample key elements for colors and fonts
        const elements = document.querySelectorAll('h1, h2, h3, p, a, button, nav, header, section, [class*="hero"], [class*="cta"], [class*="btn"]');
        const sampledFonts = new Set();
        const sampledBgs = new Set();
        const sampledTexts = new Set();

        elements.forEach(el => {
          const cs = getComputedStyle(el);
          const font = cs.fontFamily;
          if (font && !font.includes('serif') || font.includes('sans-serif')) {
            sampledFonts.add(font.split(',')[0].trim().replace(/['"]/g, ''));
          }
          const bg = cs.backgroundColor;
          if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') {
            sampledBgs.add(bg);
          }
          const color = cs.color;
          if (color) {
            sampledTexts.add(color);
          }
        });

        result.fonts = [...sampledFonts].slice(0, 6);
        result.bgColors = [...sampledBgs].slice(0, 8);
        result.textColors = [...sampledTexts].slice(0, 8);

        // Analyze buttons
        const btns = document.querySelectorAll('button, a[class*="btn"], a[class*="cta"], [class*="button"], [role="button"]');
        btns.forEach(btn => {
          const cs = getComputedStyle(btn);
          result.buttons.push({
            text: btn.textContent.trim().substring(0, 50),
            bg: cs.backgroundColor,
            color: cs.color,
            borderRadius: cs.borderRadius,
            padding: cs.padding,
            border: cs.border,
            fontSize: cs.fontSize,
            fontWeight: cs.fontWeight,
          });
        });
        result.buttons = result.buttons.slice(0, 5);

        // Analyze nav
        const nav = document.querySelector('nav, header, [class*="nav"]');
        if (nav) {
          const cs = getComputedStyle(nav);
          result.navStyles = {
            bg: cs.backgroundColor,
            color: cs.color,
            position: cs.position,
            padding: cs.padding,
            display: cs.display,
            gap: cs.gap,
          };
          const navLinks = nav.querySelectorAll('a');
          result.navLinks = [...navLinks].slice(0, 8).map(a => ({
            text: a.textContent.trim().substring(0, 30),
            fontSize: getComputedStyle(a).fontSize,
            fontWeight: getComputedStyle(a).fontWeight,
            textTransform: getComputedStyle(a).textTransform,
            letterSpacing: getComputedStyle(a).letterSpacing,
          }));
        }

        // Get page title and meta description
        result.title = document.title;
        const metaDesc = document.querySelector('meta[name="description"]');
        result.description = metaDesc ? metaDesc.content : '';

        // Body background
        result.bodyBg = getComputedStyle(document.body).backgroundColor;
        result.bodyColor = getComputedStyle(document.body).color;

        return result;
      });

      // Scroll down and take more data
      await page.evaluate(() => window.scrollBy(0, 900));
      await page.waitForTimeout(1000);

      const scrolledAnalysis = await page.evaluate(() => {
        const sections = document.querySelectorAll('section, [class*="section"], main > div');
        return [...sections].slice(0, 5).map(s => {
          const cs = getComputedStyle(s);
          return {
            tag: s.tagName,
            className: s.className.substring(0, 80),
            bg: cs.backgroundColor,
            padding: cs.padding,
          };
        });
      });

      analysis.sections = scrolledAnalysis;
      analysis.url = site.url;
      analysis.id = site.id;
      results.push(analysis);

      console.log(`  Fonts: ${analysis.fonts.join(', ')}`);
      console.log(`  CSS vars: ${Object.keys(analysis.cssVars).length} found`);
      console.log(`  Buttons: ${analysis.buttons.length} found`);

    } catch (err) {
      console.error(`  FAILED: ${err.message}`);
      results.push({ id: site.id, url: site.url, error: err.message });
    } finally {
      await page.close();
    }
  }

  // Save analysis
  writeFileSync(
    resolve(__dirname, 'analysis-results.json'),
    JSON.stringify(results, null, 2)
  );
  console.log('\n=== Analysis complete. Results saved to analysis-results.json ===');

  await browser.close();
})();
