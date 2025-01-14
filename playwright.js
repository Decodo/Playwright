const { chromium } = require('playwright');

(async () => {
  // Proxy server
  const proxy = 'gate.smartproxy.com:10001';

  // Launch a new browser instance with proxy settings
  const browser = await chromium.launch({
    headless: false,
    proxy: {
      server: `http://${proxy}`,
    },
  });

  // Open a new browser context and pass the credentials
  const context = await browser.newContext({
    httpCredentials: {
      username: 'user',
      password: 'pass',
    },
  });

  // Open a single page
  const page = await context.newPage();

  // Check IP on the same page by navigating to the IP check URL
  await page.goto('https://ip.smartproxy.com/ip');
  const content = await page.evaluate(() => document.body.innerText);
  console.log(`Your IP: ${content}`);

  // Navigate to the ScrapeMe website
  await page.goto('https://scrapeme.live/shop/');

  // Select all elements matching the class
  const productElements = await page.$$('.woocommerce-loop-product__title');

  // Access the 3rd element (index 2) and get its text content
  const thirdProductTitle = await productElements[2].textContent();
  console.log(`3rd Product Title: ${thirdProductTitle}`);

  // Close the browser
  await browser.close();
})();