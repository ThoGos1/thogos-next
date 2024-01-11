import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html id='thogos' lang='en'>
      <Head>
        <Script src="https://cdn.jsdelivr.net/pyodide/v0.21.3/full/pyodide.js" strategy="beforeInteractive" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}