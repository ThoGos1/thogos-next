import SidebarSolv from "../../components/SidebarSolv"
import Head from "next/head"
import Script from "next/script"

const name = "hello"

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


            <input type="text" id="test-input"/>


            <button id="submit-button" type="submit" py-onClick="func()">OK</button>


            <div id="test-output">s</div>

            <div id="out">p</div>

          </div>
          
        </div>

        



      </div>
  )
}