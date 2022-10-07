import Python from "../components/Python";

var which = 'ice';




export default function Solver() {
    return (
      <div className="home">
        <title>Solver</title>
        <h1>Solver</h1>

        <Python which={which}/>

        <div className="flex">
            sewey
        </div>

        <p className="drop">down animation</p>

        <div className="grid">
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
        </div>

        <button>Press me
            <div className="dropDown">
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
        </div>
        </button>


      </div>  
    )
  }