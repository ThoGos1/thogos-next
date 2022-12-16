import Link from 'next/link'
import Image from 'next/image'
import tlogo from "../public/t-logo.png"


export default function Header() {
  return (
    <div className='navbar'>

      <div style={{ cursor: "pointer", width: "64px", height: "64px", marginLeft: "15px", marginTop: "15px" }}>
        <Link href={'/'}>
          <div>
          <svg width="42" height="42" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="60" y="180" width="180" height="60" rx="10" transform="rotate(-90 60 180)" fill="#34A855"/>
        <rect width="180" height="60" rx="10" fill="#EA4333"/>
        <rect width="60" height="60" rx="10" fill="#4285F5"/>
        <rect x="31" width="29" height="60" fill="#4285F5"/>
        <rect x="60" y="60" width="60" height="49" rx="10" fill="#FBBC00"/>
        <rect x="60" y="60" width="60" height="25" fill="#FBBC00"/>
      </svg>
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