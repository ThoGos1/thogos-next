import Head from "next/head"
import logo from "../public/Logo-dna.png"
import Image from "next/image"

export default function Home() {
  return (
    <div className="grid">

      <Head>
        <title>Home</title>
        <meta name="description" content="Write something good here and all other heads"/>
        <link rel="shortcut icon" href='../public/Logo-dna.png'/>
      </Head>

      
      
      <div></div>


      <div>
        <span className="logo-1 drop">Welcome to</span>
        <span className="logo-2">ThoGos</span>
        <span className="logo-3">.com</span>
      </div>

      <Image src={logo} height={213/2.5} width={146/2.5} alt="ThoGos-logo" style={{display: "block"}}/>

    </div>  
  )
}