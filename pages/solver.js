import SidebarSolv from "../components/SidebarSolv"
import Head from "next/head"

export default function Solver() {
    return (
      <div>
        <Head>
          <title>Solvers | ThoGos</title>
          <meta name="description" content="Write something good here and all other heads"/>
        </Head>

        <div className="pageset">
          
          <SidebarSolv/>
          
          <div>
            Specific Solverde
          </div>
          
        </div>



      </div>
    )
  }