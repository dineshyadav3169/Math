import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://www.google-analytics.com"/>
          <Script src="https://www.googletagmanager.com/gtag/js?id=G-HCY0ZSGCPS" strategy="afterInteractive"></Script>
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-HCY0ZSGCPS');
            `}
          </Script>
          {/* <link
            rel="preload"
            href="/fonts/inter-var-latin.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          /> */}
          <link href="/favicon.ico" rel="shortcut icon" />
          <link href="/site.webmanifest" rel="manifest" />
          <link
            href="/apple-touch-icon.png"
            rel="apple-touch-icon"
            sizes="180x180"
          />
          <link
            href="/favicon-32x32.png"
            rel="icon"
            sizes="32x32"
            type="image/png"
          />
          <link
            href="/favicon-16x16.png"
            rel="icon"
            sizes="16x16"
            type="image/png"
          />
          <link
            color="#4a9885"
            href="/safari-pinned-tabs.svg"
            rel="mask-icon"
          />
          <meta content="#ffffff" name="theme-color" />
          <meta name="robots" content="index, follow" />
          <meta content="#ffffff" name="msapplication-TileColor" />
          <meta
            content="/browserconfig.xml"
            name="msapplication-config"
          />
          <script defer src="/script.js"></script>
          <script defer id="MathJax-script" src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/startup.js"></script>
        </Head>
        <body className="bg-white text-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
