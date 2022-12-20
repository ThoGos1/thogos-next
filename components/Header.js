import Link from 'next/link'

export default function Header() {
  return (
    <div className='navbar'>

      <div style={{ cursor: "pointer", width: "64px", height: "45px", marginLeft: "15px", marginTop: "15px" }}>
        <Link href={'/'}>
          <div className='logname'>
            <svg width="42" height="42" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="128" cy="128" r="128" fill="url(#paint0_linear_6_28)"/>
              <rect x="105.739" y="80.1391" width="44.5217" height="136.904" fill="white"/>
              <rect x="50.087" y="116.87" width="44.5217" height="155.826" transform="rotate(-90 50.087 116.87)" fill="white"/>
              <defs>
              <linearGradient id="paint0_linear_6_28" x1="128" y1="0" x2="128" y2="256" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F6A74C"/>
              <stop offset="1" stopColor="#DB672C"/>
              </linearGradient>
              </defs>
            </svg>

            <p style={{fontSize: "24px"}}>ThoGos</p>
          </div>
        </Link>
      </div>


      <div className='center2'>
        <nav>
          <Link href={'/notes'}>
            <a className='navitem'>Notes</a>
          </Link>
        </nav>


        <nav>
          <Link href={'/solver'}>
            <a className='navitem'>Calculators</a>
          </Link>
        </nav>
      </div>

      <p className='langchange'>Danish</p>

    </div>
  )
}