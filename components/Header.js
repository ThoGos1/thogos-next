import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logo.png'

export default function Header() {
  return (
    <div className='navbar'>

      <div style={{ cursor: "pointer" }}>
        <Link href={'/'}>
          <div style={{ transform: "translateX(-15px)" }}>
            <Image src={logo} height={64} width={64} alt="ThoGos-logo"/>
          </div>
        </Link>
      </div>


      <div className='center2'>
        <nav>
          <Link href={'/notes'}>
            <a className='navitem'>S-Notes</a>
          </Link>
        </nav>


        <nav>
          <Link href={'/solver'}>
            <a className='navitem'>Problem Solvers</a>
          </Link>
        </nav>
      </div>

      <p className='langchange'>Danish</p>

    </div>
  )
}