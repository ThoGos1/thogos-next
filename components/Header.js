import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/Logo-dna.png'

export default function Header() {
  return (
    <div className='navbar'>

      <div style={{ cursor: "pointer", width: "64px", height: "64px", marginLeft: "15px", marginTop: "15px" }}>
        <Link href={'/'}>
          <div>
            <Image src={logo} height={213/5} width={146/5} alt="ThoGos-logo"/>
          </div>
        </Link>
      </div>


      <div className='center2'>
        <nav>
          <Link href={'/notes'}>
            <a className='navitem'>Simply Notes</a>
          </Link>
        </nav>


        <nav>
          <Link href={'/solver'}>
            <a className='navitem'>Problem Solver Calculators</a>
          </Link>
        </nav>
      </div>

      <p className='langchange'>Danish</p>

    </div>
  )
}