import '../styles/globals.css'
import Layout from '../components/Layout'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Script src="https://cdn.jsdelivr.net/pyodide/v0.18.1/full/pyodide.js" />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}

export default MyApp