import SidebarNote from "../components/SidebarNote"
import Head from "next/head"

export default function Notepage() {
    return (
      <div>
        <Head>
          <title>Notepage</title>
          <meta name="description" content="Write something good here and all other heads"/>
        </Head>

        <div className="pageset">
          
          <SidebarNote/>
          
          <div>
            Specific Note
          </div>
          
        </div>



      </div>
    )
  }