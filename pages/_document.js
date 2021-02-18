import Document, { Html, Head, Main, NextScript } from "next/document"
import { GA_TRACKING_ID } from "../scripts/gtag"

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css2?family=Dosis:wght@400;700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Dosis:wght@400;700&display=swap"
            media="print"
            onload="this.media='all'"
          /> */}

          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          {/* <script dangerouslySetInnerHTML={{__html: `document.addEventListener('DOMContentLoaded', (event) => document.getElementById('nav').classList.add('animate__slideInDown')`}} /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
          <script> </script>
        </body>
      </Html>
    )
  }
}
