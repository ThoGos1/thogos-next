import '../styles/globals.css'
import Layout from '../components/Layout'
import Script from 'next/script'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png" />
        <link rel="manifest" href="/favicon_io/site.webmanifest"></link>
        <link rel="mask-icon" href="/favicon_io/favicon.ico" color="#5bbad5" />
      </Head>
      
      <Script src="https://cdn.jsdelivr.net/pyodide/v0.21.3/full/pyodide.js" strategy="beforeInteractive" />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}
export default MyApp