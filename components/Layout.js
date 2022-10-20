import Footer from './Footer'
import Header from './Header'

export default function Layout({ children }) {
  return (
    <div>

      <Header className="head"/>

      <div>
        { children }
      </div>

      <Footer/>

    </div>
  )
}