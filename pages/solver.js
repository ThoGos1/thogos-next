import Link from "next/link"
import Combust from "./solvers/combust"

export default function Solver() {
    return (
      <div className="home">
        <title>Solver</title>
        <h1>Solver</h1>

        <div className="pageset">
          <div className="sidebar">
            Sidebar
            <nav>
              <Link href={'/solvers/combust'}>
                <a style={{ marginRight: '16px', marginLeft: '16px' }}>Combustion Analysis</a>
              </Link>
            </nav>
          </div>
          
          <div>
            Specific Solver

            <Combust/>

          </div>
          
        </div>


      </div>  
    )
  }