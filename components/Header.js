import Link from 'next/link'

export default function Header() {
  return (
    <div className="head">
              <header>
        <Link href="/">
          <a>
            <h1>
              <span>Just Add</span>
              <span>Marmite</span>
            </h1>
            <h2>Spread The Joy</h2>
          </a>
        </Link>
      </header>
    </div>
  )
}