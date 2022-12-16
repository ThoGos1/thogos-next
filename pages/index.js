import Head from "next/head"
import Image from "next/image"
import tlogo from "../public/t-logo.png"
import big from "../public/big.png"

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


      <svg width="85" height="85" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="60" y="180" width="180" height="60" rx="10" transform="rotate(-90 60 180)" fill="#34A855"/>
        <rect width="180" height="60" rx="10" fill="#EA4333"/>
        <rect width="60" height="60" rx="10" fill="#4285F5"/>
        <rect x="31" width="29" height="60" fill="#4285F5"/>
        <rect x="60" y="60" width="60" height="49" rx="10" fill="#FBBC00"/>
        <rect x="60" y="60" width="60" height="25" fill="#FBBC00"/>
      </svg>

    </div>  
  )
}