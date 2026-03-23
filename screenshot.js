const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // Set viewport to desktop size
  await page.setViewport({ width: 1920, height: 1080 });

  console.log('Navigating to https://berrystrong-nextjs-app.vercel.app/');

  try {
    await page.goto('https://berrystrong-nextjs-app.vercel.app/', {
      waitUntil: 'networkidle0',
      timeout: 30000
    });

    // Take full page screenshot
    await page.screenshot({
      path: 'screenshot-full.png',
      fullPage: true
    });

    // Take viewport screenshot
    await page.screenshot({
      path: 'screenshot-viewport.png'
    });

    console.log('✅ Screenshots saved!');
    console.log('📸 Full page: screenshot-full.png');
    console.log('📸 Viewport: screenshot-viewport.png');

    // Get page title
    const title = await page.title();
    console.log('📄 Page Title:', title);

  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await browser.close();
  }
})();
