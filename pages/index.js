import Head from "next/head"

export default function Home() {
  
  return (
    <div className="grid">

      <Head>
        <title>ThoGos</title>
        <meta name="description" content="Write something good here and all other heads"/>
      </Head>

      
      <div></div>


      <div>
        <span className="logo-1 drop">Welcome to</span>
        <span className="logo-2">ThoGos</span>
        <span className="logo-3">.com</span>
      </div>


      <svg width="85" height="95" viewBox="0 0 180 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M60 200L60 67H120V180C120 191.046 111.046 200 100 200H60Z" fill="#34A855"/>
        <path d="M0 20C0 8.9543 8.95431 0 20 0L60 0V67H0L0 20Z" fill="#4285F5"/>
        <path d="M60 91L90 61L120 91L90 121L60 91Z" fill="#FBBC00"/>
        <path d="M60 0L180 0V47C180 58.0457 171.046 67 160 67H60V0Z" fill="#EA4333"/>
        <path d="M60 67H120V91H60V67Z" fill="#FBBC00"/>
      </svg>

    </div>  
  )
}