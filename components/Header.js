import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logo.png'

export default function Header() {
  return (

    <div className='navbar'>

      <div className='toolbar'>

        <div style={{ cursor: "pointer" }}>
          <Link href={'/'}>
            <div>
              <Image src={logo} height={60} width={60} alt="ThoGos-logo"/>
            </div>
          </Link>
        </div>

        <div style={{ width: "36.4%" }}></div>


        <nav>
          <Link href={'/notes'}>
            <a className='navitem' style={{ marginRight: '16px', marginLeft: '16px' }}>S-Notes</a>
          </Link>
        </nav>


        <nav>
          <Link href={'/solver'}>
            <a className='navitem' style={{ marginRight: '16px', marginLeft: '16px' }}>Problem Solvers</a>
          </Link>
        </nav>

        <div style={{ width: "35.5%" }}></div>

        <p className='langchange'>Danish</p>

      </div>
      
    </div>



  )
}