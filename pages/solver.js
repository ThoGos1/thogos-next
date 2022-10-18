import SidebarSolv from "../components/SidebarSolv"
import Head from "next/head"

export default function Solver() {
    return (
      <div>
        <Head>
          <title>Solver</title>
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