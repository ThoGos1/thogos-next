import Footer from './Footer'
import Header from './Header'

export default function Layout({ children }) {
  return (
    <div>

      <Header/>

      <div className='putfoot'>
        { children }
      </div>

      <Footer/>

    </div>
  )
}