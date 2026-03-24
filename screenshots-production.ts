import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  const page = await context.newPage();

  try {
    console.log('Navigating to production site...');
    await page.goto('https://berrystrong-nextjs-app.vercel.app/', {
      waitUntil: 'networkidle'
    });

    // Wait a bit for any dynamic content
    await page.waitForTimeout(2000);

    console.log('Taking full page screenshot...');
    await page.screenshot({
      path: 'production-homepage-full.png',
      fullPage: true
    });

    console.log('Taking viewport screenshot...');
    await page.screenshot({
      path: 'production-homepage-viewport.png',
      fullPage: false
    });

    // Screenshot of header/navigation specifically
    console.log('Taking header screenshot...');
    const header = await page.locator('header').boundingBox();
    if (header) {
      await page.screenshot({
        path: 'production-header.png',
        clip: {
          x: 0,
          y: 0,
          width: 1920,
          height: header.height + 20
        }
      });
    }

    // Screenshot of services section
    console.log('Taking services section screenshot...');
    const servicesSection = await page.locator('#services').boundingBox();
    if (servicesSection) {
      await page.screenshot({
        path: 'production-services.png',
        clip: {
          x: 0,
          y: servicesSection.y - 50,
          width: 1920,
          height: servicesSection.height + 100
        }
      });
    }

    // Screenshot of testimonials section
    console.log('Taking testimonials section screenshot...');
    const testimonialsSection = await page.locator('#testimonials').boundingBox();
    if (testimonialsSection) {
      await page.screenshot({
        path: 'production-testimonials.png',
        clip: {
          x: 0,
          y: testimonialsSection.y - 50,
          width: 1920,
          height: testimonialsSection.height + 100
        }
      });
    }

    // Screenshot of CTA section
    console.log('Taking CTA section screenshot...');
    const ctaSection = await page.locator('section').filter({ hasText: 'Ready to Start Your Journey?' }).boundingBox();
    if (ctaSection) {
      await page.screenshot({
        path: 'production-cta.png',
        clip: {
          x: 0,
          y: ctaSection.y - 50,
          width: 1920,
          height: ctaSection.height + 100
        }
      });
    }

    console.log('Screenshots saved successfully!');
    console.log('Files created:');
    console.log('- production-homepage-full.png (full page)');
    console.log('- production-homepage-viewport.png (viewport only)');
    console.log('- production-header.png (header/navigation)');
    console.log('- production-services.png (services section)');
    console.log('- production-testimonials.png (testimonials section)');
    console.log('- production-cta.png (CTA section)');

  } catch (error) {
    console.error('Error taking screenshots:', error);
  } finally {
    await browser.close();
  }
})();
