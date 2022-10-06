import Script from "next/script";

var out;

async function main(){
    let pyodide = await loadPyodide();
    console.log(pyodide.runPython("print(1 + 2)"));
    pyodide.runPython("print(1 + 2)");
    pyodide.runPython("print('oewdi')");
    out = pyodide.runPython(`def sewey():
    return 3+2 
    sewey()`);
    console.log(out);
}
main();

export default function Python({which}) {
    return (
      <div className="python">
        <p>Python is here</p>
        <p>{out}</p>


      </div>
    )
}