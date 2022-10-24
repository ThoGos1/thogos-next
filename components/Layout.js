import Footer from './Footer'
import Header from './Header'

export default function Layout({ children }) {
  return (
    <div id="page-container">

      <Header className="head"/>

      <div id="content-wrap">
        { children }
      </div>

      <Footer id="footer"/>

    </div>
  )
}