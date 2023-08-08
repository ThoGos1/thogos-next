import Head from "next/head"
import Image from "next/image"
import chemlogo from "../public/chemfeat.png"
import Link from "next/link"
import blchev from "../public/blchev.svg"




export default function Home() {

  const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

  function scrollToTop() {
    if (!isBrowser()) return;
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div>
    
    <div className="grid">

      <Head>
        <title>JavaLite</title>
        <meta name="description" content="Write something good here and all other heads"/>
      </Head>

      
      <div></div>


      <div>
        <span id="behind" className="logo-1 drop">Welcome to</span>
        <span className="logo-2">JavaLite</span>
        <span className="logo-3">.com</span>
      </div>

      <div>
        <Image src={blchev} height={40} width={40} style={{transform: "rotate(90deg)"}} />
      </div>



    </div>


    <div className="featurednote">
      <h1 style={{padding: "20px", color: "white"}}>Featured Notes:</h1>

      <div className="noteshow">

          <Link href={'notes/test-note'}>
            <div className="card">
              <div className="cardimg">
                <Image src={chemlogo} height={186} width={186} alt="ThoGos-logo"/>
              </div>
              <p>Chemistry</p>
            </div>
          </Link>

          <Link href={'notes/test-note'}>
            <div className="card">
              <div className="cardimg">
                <Image src={chemlogo} height={186} width={186} alt="ThoGos-logo"/>
              </div>
              <p>Physics</p>
            </div>
          </Link>

          <Link href={'notes/test-note'}>
            <div className="card">
              <div className="cardimg">
                <Image src={chemlogo} height={186} width={186} alt="ThoGos-logo"/>
              </div>
              <p>Mathematics</p>
            </div>
          </Link>

      </div>
    </div>

    <div className="center" style={{padding: "100px"}}>
      <h1>Check out all of the Notes and Calculators in the menu above.</h1>
      <button className="absolute bottom-0 p-10" onClick={scrollToTop}>
        Up
      </button>
    </div>
    


    <div className="featuredsolv">
      <h1 style={{padding: "20px", color: "white"}}>Featured Calculators:</h1>

      <div className="noteshow">

          <Link href={'notes/test-note'}>
            <div className="card">
              <div className="cardimg">
                <Image src={chemlogo} height={186} width={186} alt="ThoGos-logo"/>
              </div>
              <p>Combust HxHy</p>
            </div>
          </Link>

          <Link href={'notes/test-note'}>
            <div className="card">
              <div className="cardimg">
                <Image src={chemlogo} height={186} width={186} alt="ThoGos-logo"/>
              </div>
              <p>bla bla</p>
            </div>
          </Link>

          <Link href={'notes/test-note'}>
            <div className="card">
              <div className="cardimg">
                <Image src={chemlogo} height={186} width={186} alt="ThoGos-logo"/>
              </div>
              <p>bla bla</p>
            </div>
          </Link>

      </div>
    </div>


    </div>
  )
}