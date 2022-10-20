import '../styles/globals.css'
import Layout from '../components/Layout'
import Script from 'next/script'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="shortcut icon" href='../public/Logo-dna.png'/>
      </Head>
      
      <Script src="https://cdn.jsdelivr.net/pyodide/v0.21.3/full/pyodide.js" strategy="beforeInteractive" />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}
export default MyApp