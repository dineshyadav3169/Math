import chromium from 'chrome-aws-lambda';

const HTML =
  "<html>\n<head>\n<script>\nwindow.MathJax = {\n  loader: {\n    load: ['input/asciimath','output/chtml']\n  },\n  // tex: {\n  //   inlineMath: [['$', '$'], ['(', ')']]\n  // },\n  startup: {\n    // ready: () => {\n    //   console.log('MathJax is loaded, but not yet initialized');\n    //   MathJax.startup.defaultReady();\n    //   MathJax.startup.promise.then(() => {\n    //     console.log('MathJax initial typesetting complete');\n    //   });\n    // }\n    pageReady: () => {\n      return MathJax.startup.defaultPageReady().then(() => {\n  setTimeout(()=>{window.isloaded=true},1000)     });\n    }\n  }\n};\nconsole.log('load in')\n</script>\n<script defer id='MathJax-script' src='https://cdn.jsdelivr.net/npm/mathjax@3/es5/startup.js'></script>\n</head>\n<body>\n __ `l_(11)` __\n</body>\n</html>";

export default async function createPdf(req, res) {
  const browser = await chromium.puppeteer.launch({
      executablePath: await chromium.executablePath,
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      headless: chromium.headless,
  });
  const page = await browser.newPage();
  await page.setContent(HTML);
  await page.waitFor(() => window.isloaded == true);
  const buffer = await page.pdf({
    format: 'A4',
    printBackground: true,
    margin: {
      left: '0px',
      top: '0px',
      right: '0px',
      bottom: '0px',
    },
  });

  await page.close();
  await browser.close();

  res.end(buffer);
};
