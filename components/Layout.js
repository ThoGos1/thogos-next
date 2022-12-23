import Footer from './Footer'
import Header, { DropdownMenu, NavItem } from './Header'
import chev from "../public/chevron.svg"
import Image from 'next/image'
import tlogo from "../public/svgtaulogo.svg"
import cart from "../public/caret.svg"



export default function Layout({ children }) {
  return (
    <div>

      <Header>

        <NavItem icon="Notes">

          <DropdownMenu />
          
        </NavItem>

        
        <NavItem icon="Calculators">

          <DropdownMenu />

        </NavItem>


      </Header>




      <div className='putfoot'>
        { children }
      </div>



      <Footer/>

    </div>
  )
}