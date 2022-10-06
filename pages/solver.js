import Python from "../components/Python";

var which = 'ice';




export default function Solver() {
    return (
      <div className="home">
        <title>Solver</title>
        <h1>Solver</h1>

        <Python which={which}/>


      </div>  
    )
  }