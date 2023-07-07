import SidebarSolv from "../../components/SidebarSolv"
import Head from "next/head"
import React, { useState } from 'react';

/*
async function main(code){
  let pyodide = await loadPyodide();
  console.log(pyodide.runPython("print(1 + 2)"));
  pyodide.runPython("print(1 + 2)");
  pyodide.runPython("print('oewdi')");
  pyodide.runPython("print()");
}
main('lol');
*/


export default function Combust() {
  const [output, setOutput] = useState("(enter a value above)");
  const [hydg, setHydg] = useState(0);
  const [co2, setCo2] = useState(0);
  const [molmass, setMolmass] = useState(0);


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(hydg);
    console.log(co2);
    console.log(molmass);

    if(isNaN(molmass)) {
      //setMolmass(0)
      console.log('is nan')
      console.log('new' + molmass)
    }

    if(hydg == "") {
      console.log("fail dood");
      return;
    }

    setOutput("Calculating...");

    if (typeof window !== 'undefined') {
      // Use the window object here
      // console.log(window.innerWidth);
      const initPyodide = window.loadPyodide({
        indexURL: "https://cdn.jsdelivr.net/pyodide/v0.21.3/full/",
      })
    
      const main = async (kw) => {
        let pyodide = await initPyodide;
        return await pyodide.runPythonAsync(kw);
      }

      
      out = main(`
      def comfac(n):
          fac = 1
     
          for i in range(1, 15):
              if(round(n * i, 1).is_integer() or int(str(round(n * i, 1))[str(round(n * i, 1)).index('.')+1]) == 9 or int(str(round(n * i, 2))[str(round(n * i, 2)).index('.')+1]) == 0):
                  fac = i
                  break
        
          return fac
      
      def getEmp2(was, gly, w=69):
          grams_co2 = gly
          grams_h2o = was
          moles_co2 = grams_co2 / 44
          moles_h2o = grams_h2o / 18
          moles_c = moles_co2
          moles_h = moles_h2o * 2
      
          if moles_c <= moles_h:
              ratio = round(moles_c/moles_h, 2)
              facm = comfac(round(1/ratio, 2))
              carb = facm
              vand = int(round(round(1/ratio, 2) * facm))
          else:
              ratio = round(moles_h/moles_c, 2)
              facm = comfac(round(1/ratio, 2))
              carb = int(round(round(1/ratio, 2) * facm))
              vand = facm
      
      
          mass = round(w/(carb*12 + vand))
          print("Actual Formula: " + "C" + str(carb*mass) + "H" + str(vand*mass))

          

          return "C" + str(carb) + "H" + str(vand)
          
      getEmp2(${hydg}, ${co2}, ${molmass})`);
      





      out.then(function(val) {
        console.log(val);
        setOutput(val)
        //setOutput(parseFloat(val));
        //console.log(parseFloat(val));
      });

    }
  }

  // ------------------------------------------------------------------ //

  return (
      <div>
      <Head>
        <title>CxHy Combustion</title>
        <meta name="description" content="Write something good here and all other heads"/>
      </Head>

      <div className="pageset">
        <SidebarSolv/>
        
        
        <div className="Stuff has to be inside this div, not outside">
          <h1>CxHy Combustion Analysis</h1>
          <h2>Determining Empirical Formula and Molecular Formula</h2>
          <p>Combust Solver</p>


          <form onSubmit={handleSubmit} id="watergram" className="inputtre">
            <label>
              Mass of Water:
                <input
                  type="number"
                  step={"any"}
                  required
                  onChange={(e) => setHydg(parseFloat(e.target.value))}
                  className="solvbox"
                  id="value={hydg}"
                />
            </label>

            <label>
              Mass of CO2:
                <input
                  type="number"
                  step={"any"}
                  required
                  onChange={(e) => setCo2(parseFloat(e.target.value))}
                  className="solvbox"
                  id="value={hydg}"
                />
            </label>

            <label>
              Molecular Mass:
                <input
                  type="number"
                  step={"any"}
                  
                  onChange={(e) => setMolmass(   isNaN(parseFloat(e.target.value)) ? 0 : parseFloat(e.target.value)    )}
                  className="solvbox"
                  id="value={hydg}"
                />
            </label>

            <input type="submit" value="Submit" style={{marginLeft: '10px'}} maxLength='10'/>
          </form>

          

          <p>Empirical Formula = {output} <br/>refresh page if it's stuck loading</p>

          <div id="out"></div>

        </div>
        
        
      </div>



    </div>
  )
}