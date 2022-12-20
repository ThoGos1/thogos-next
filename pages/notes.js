import Head from "next/head"
import Image from "next/image"
import chemlogo from "../public/chemistry.jpg"
import Link from "next/link"

export default function Notes() {
    return (
      <div>
        <Head>
          <title>Notes | ThoGos</title>
          <meta name="description" content="Write something good here and all other heads"/>
        </Head>

        <h1 className="center" style={{fontSize: '56px', marginTop: "0px"}}>Simply Notes</h1>
        
        <div className="noteshow">

          <Link href={'notes/test-note'}>
            <div className="card">
              <div className="cardimg">
                <Image src={chemlogo} height={700} width={1500} alt="ThoGos-logo"/>
              </div>
              <p>Chemistry</p>
            </div>
          </Link>

          <Link href={'notes/test-note'}>
            <div className="card">
              <div className="cardimg">
                <Image src={chemlogo} height={64} width={64} alt="ThoGos-logo"/>
              </div>
              <p>Physics</p>
            </div>
          </Link>

          <Link href={'notes/test-note'}>
            <div className="card">
              <div className="cardimg">
                <Image src={chemlogo} height={64} width={64} alt="ThoGos-logo"/>
              </div>
              <p>Mathematics</p>
            </div>
          </Link>

          <Link href={'notes/test-note'}>
            <div className="card">
              <div className="cardimg">
                <Image src={chemlogo} height={64} width={64} alt="ThoGos-logo"/>
              </div>
              <p>Biology</p>
            </div>
          </Link>

          <Link href={'notes/test-note'}>
            <div className="card">
              <div className="cardimg">
                <Image src={chemlogo} height={64} width={64} alt="ThoGos-logo"/>
              </div>
              <p>Computer Science</p>
            </div>
          </Link>



        </div>


      </div>
    )
  }