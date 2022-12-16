import Head from "next/head"
import Image from "next/image"
import tlogo from "../public/t-logo.png"

export default function Home() {
  
  return (
    <div className="grid">

      <Head>
        <title>Home</title>
        <meta name="description" content="Write something good here and all other heads"/>
      </Head>

      
      <div></div>


      <div>
        <span className="logo-1 drop">Welcome to</span>
        <span className="logo-2">ThoGos</span>
        <span className="logo-3">.com</span>
      </div>

      <Image src={tlogo} height={85} width={85} alt="ThoGos-logo"/>

    </div>  
  )
}