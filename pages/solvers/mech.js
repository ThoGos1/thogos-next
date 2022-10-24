import SidebarSolv from "../../components/SidebarSolv"
import Head from "next/head"
import Script from "next/script"
import React, { useState } from "react"

var hydg;

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
            <form>
              <label>
                Name:
                <input 
                    type="number" 
                    value={hydg}
                    onChange={(e) => setHydg(e.target.value)}
                    class="solvbox"
                />
              </label>
              <input type="submit" value="Submit" style={{marginLeft: '10px'}} maxLength='10'/>
            </form>
            <py-script> print('Now you can!') </py-script>
          </div>
          
        </div>



      </div>
    )
  }