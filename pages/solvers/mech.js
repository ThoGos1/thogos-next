import SidebarSolv from "../../components/SidebarSolv"
import Head from "next/head"
import {longconfig, elementlist, nobleshorthand, longnoblelist, elementnamelist, longelementnamelist, affinitylist, longaffinitylist, ionizationlist, longionizationlist, numelectronlist, longnumelectronlist, ionformlist, longionformlist} from "../data"
import React, { useState } from 'react';



export default function Mech() {
  const [output, setOutput] = useState("(enter a value above)");
  const [hydg, setHydg] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(hydg);
    setOutput("loading...");

    if(hydg == "") {
      return;
    }


    if (typeof window !== 'undefined') {
      // Use the window object here
      console.log(window.innerWidth);
      const initPyodide = window.loadPyodide({
        indexURL: "https://cdn.jsdelivr.net/pyodide/v0.21.3/full/",
      })
    
      const main = async (kw) => {
        let pyodide = await initPyodide;
        return await pyodide.runPythonAsync(kw);
      }
    
      main(`print(${hydg}/2)`);

      out = main(`
      def func():
          return ${hydg}/18.04
      func()`);

      out.then(function(val) {
        setOutput(parseFloat(val));
        console.log(parseFloat(val));
      });

    }
  }




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


            <button id="submit-button" type="submit">OK</button>


            <div id="test-output">s</div>

            <div id="out">p</div>

            <p>{longconfig[1]}</p>

            <p>{elementlist[3]}</p>

            <p>{output}</p>


            <form onSubmit={handleSubmit}>
              <label>
                Name:
                <input 
                    type="number" 
                    value={hydg}
                    onChange={(e) => setHydg(e.target.value)}
                    className="solvbox"
                />
              </label>
              <input type="submit" value="Submit" style={{marginLeft: '10px'}} maxLength='10'/>
            </form>

            <p>python = {output} moles of Hydrogen<br/>refresh page if it's stuck loading</p>



          </div>
          
        </div>

        



      </div>
  )
}