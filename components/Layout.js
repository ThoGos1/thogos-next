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
        <NavItem icon="Notes" />
        <NavItem icon="Calculators" />


        <NavItem icon={ <Image src={cart} height={42} width={42} alt="ThoGos-logo"/> }>

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