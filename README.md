<p align="center">
<a href="https://dashboard.smartproxy.com/?page=residential-proxies&utm_source=socialorganic&utm_medium=social&utm_campaign=resi_trial_GITHUB"><img src="https://i.imgur.com/opsHIEZ.png"</a>
</p>

[![](https://dcbadge.vercel.app/api/server/gvJhWJPaB4)](https://discord.gg/sCr34yVDVB)

<p align="center">
    <a href="https://github.com/Smartproxy/Smartproxy"> :house: Main Repository :house: </a>
</p>

### Disclaimer

The following script is an example showing how to utilize Smartproxy with Playwright.
Check out the official [Playwright](https://github.com/microsoft/playwright) repository for more information on development using this tool.

### Prerequisites

To run the example script, you'll need to install the following:

* [Node.js](https://nodejs.org/en/download/)
* A package manager tool such as [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/), or [pnpm](https://pnpm.io/)

### Installation & usage
Follow these steps to set up and get started right away: 

1. **Install Playwright**. You can get Playwright using npm, yarn, or pnpm by entering the command below into your terminal. You'll have a few prompts to answer, such as picking between TypeScript and JavaScript, the name of your tests folder, and browsers:
   
   **npm**: `npm init playwright@latest`
   
   **yarn**: `yarn create playwright`
   
   **pnpm**: `pnpm create playwright`
   
2. **Include Playwright in your script**. Create a new JavaScript (.js) file and include the following line at the beginning. You can switch the _chromium_ option with _webkit_ or _firefox_ if you have them installed:
   
`const { chromium } = require('playwright');`

3. **Navigate to a web page and extract a specific element**. For this example, we're going to extract data from a website called [ScrapeMe](https://scrapeme.live/shop/), which is ideal for various web scraping tests. The website has a list of items similar to those of a regular online shop. While Playwright offers a wide range of features to interact with web pages, for this example, we'll simply select the 3rd product from the list by its class name. If you're unsure how to inspect a website's HTML and find the class name of the titles, check out our comprehensive guide on [inspecting elements](https://smartproxy.com/blog/how-to-inspect-element).

```
const { chromium } = require('playwright');

(async () => {
  // Launch a new browser instance
  const browser = await chromium.launch({ headless: false });
  // Open a new page
  const page = await browser.newPage();
  // Navigate to the ScrapeMe website
  await page.goto('https://scrapeme.live/shop/');

  // Select all elements matching the class
  const productElements = await page.$$('.woocommerce-loop-product__title');

  // Access the 3rd element (index 2) and get its text content
  const thirdProductTitle = await productElements[2].textContent();
  console.log(`3rd Product Title: ${thirdProductTitle}`);

  // After the above actions are performed, close the browser.
  await browser.close();
})();
```

4. **Proxy implementation**. To use proxies with Playwright, you can pass proxy settings through the browser's _launch_ or [_launchPersistentContext_](https://playwright.dev/docs/api/class-browsertype) options. Playwright supports proxy integration via the proxy object, which accepts the proxy server URL.
   See the full file here.
7. **Run the script**. While in your project folder, run the following command:

`node playwright.js`

This script does several things – first, it connects to a proxy server to make future requests through a different IP address. Then, it makes a request to the Smartproxy IP-checker website to print your IP address to check if the connection is coming from a different address from your own. Finally, it makes the same request to the ScrapeMe website that prints the 3rd element from the product page.

If you did everything correctly, you should see the following result in your terminal:
![playwright-does-magic-wow](https://github.com/user-attachments/assets/ee9d9b00-c2cf-4f77-b33b-76e9bc7ff839)

## Need help?

Email - sales@smartproxy.com
<br><a href="https://smartproxy.com">Live chat 24/7</a>
