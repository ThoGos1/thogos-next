import SidebarNote from "../components/SidebarNote"
import Head from "next/head"

export default function Notepage() {
    return (
      <div>
        <Head>
          <title>Notepage</title>
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