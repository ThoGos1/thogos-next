import SidebarSolv from "../../components/SidebarSolv"
import Head from "next/head"

export default function Mech() {
    return (
        <div>
        <Head>
          <title>Mech</title>
          <meta name="description" content="Write something good here and all other heads"/>
        </Head>

        <div className="pageset">
          <SidebarSolv/>
        
          
          <div>
            Mech Solver
          </div>
          
        </div>



      </div>
    )
  }