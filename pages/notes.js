import Head from "next/head"
import Image from "next/image"
import logo from "../public/logo.png"
import Link from "next/link"

export default function Notes() {
    return (
      <div>
        <Head>
          <title>Notes</title>
          <meta name="description" content="Write something good here and all other heads"/>
        </Head>

        <h1 className="center">Simply Notes</h1>

        
        <div className="noteshow">

          <Link href={'notes/test-note'}>
            <div className="card">
              <div className="cardimg">
                <Image src={logo} height={64} width={64} alt="ThoGos-logo"/>
              </div>
              Chemistry
            </div>
          </Link>

          <div className="card">
            Sewey 2
          </div>

          <div className="card">
            Sewey 3
          </div>

          <div className="card">
            Sewey 4
          </div>

          <div className="card">
            Sewey 5
          </div>

          <div className="card">
            Sewey 6
          </div>

          <div className="card">
            Sewey 7
          </div>



        </div>


      </div>
    )
  }