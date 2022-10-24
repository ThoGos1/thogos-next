import SidebarSolv from "../../components/SidebarSolv"
import Head from "next/head"

async function main(){
  let pyodide = await loadPyodide();
  console.log(pyodide.runPython("print(1 + 2)"));
  pyodide.runPython("print(1 + 2)");
  pyodide.runPython("print('oewdi')");
}
main();

export default function Combust() {
  return (
      <div>
      <Head>
        <title>Combust</title>
        <meta name="description" content="Write something good here and all other heads"/>
      </Head>

      <div className="pageset">
        <SidebarSolv/>
        
        <div>
          <h1>heleofewofiweoifj</h1>
          <p>Combust Solver</p>
        </div>
        
      </div>



    </div>
  )
}