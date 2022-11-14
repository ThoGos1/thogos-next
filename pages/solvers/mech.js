import SidebarSolv from "../../components/SidebarSolv"
import Head from "next/head"
import Script from "next/script"
import {longconfig, elementlist, nobleshorthand, longnoblelist, elementnamelist, longelementnamelist, affinitylist, longaffinitylist, ionizationlist, longionizationlist, numelectronlist, longnumelectronlist, ionformlist, longionformlist} from "../data"

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

            <p>{longconfig[1]}</p>

            <p>{elementlist[3]}</p>


          </div>
          
        </div>

        



      </div>
  )
}