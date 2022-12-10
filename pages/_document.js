import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'


//         <link rel="stylesheet" href="https://pyscript.net/latest/pyscript.css" />


export default function Document() {
  return (
    <Html>
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