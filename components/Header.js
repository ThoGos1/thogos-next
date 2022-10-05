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
              <Image src={logo} height={60} width={60} />
            </div>
          </Link>
        </div>

        <nav>
          <Link href={'/'}>
            <a className='navitem' style={{ marginRight: '16px', marginLeft: '16px' }}>Python</a>
          </Link>
        </nav>

        <div style={{ width: "78%" }}></div>

        <p className='langchange'>danish</p>

      </div>
      
    </div>



  )
}