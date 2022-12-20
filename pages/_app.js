import '../styles/globals.css'
import Layout from '../components/Layout'
import Script from 'next/script'
import Head from 'next/head'

// This is for pyodide but I removed it
//<Script src="https://cdn.jsdelivr.net/pyodide/v0.21.3/full/pyodide.js" strategy="beforeInteractive" />

// This is for Pyscript
// <link rel="stylesheet" href="https://pyscript.net/latest/pyscript.css" />
// <Script defer src="https://pyscript.net/latest/pyscript.js" strategy="beforeInteractive" />

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png" />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
        <link rel="mask-icon" href="/favicon_io/favicon.ico" />
        <link rel="shortcut icon" href="/favicon_io/favicon.ico" type="image/x-icon" />

        <link rel="alternate icon" href="/tau.png" />
        <link rel="icon" type="image/svg+xml" href="/svgtaulogo.svg" />

        <Script src="https://cdn.jsdelivr.net/pyodide/v0.21.3/full/pyodide.js" strategy="beforeInteractive" />
      </Head>
      
      <link href="https://fonts.cdnfonts.com/css/cubano" rel="stylesheet" />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}
export default MyApp