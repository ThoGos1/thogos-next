import Footer from './Footer'
import Header from './Header'

export default function Layout({ children }) {
  return (
    <div className="layout">

      <Header className="head"/>

      <div style={{ marginTop: "64px" }}>
        { children }
      </div>

      <Footer/>

    </div>
  )
}