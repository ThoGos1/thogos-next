var out;

async function main(){
    let pyodide = await loadPyodide();
    console.log(pyodide.runPython("print(1 + 2)"));
    pyodide.runPython("print(1 + 2)");
    pyodide.runPython("print('oewdi')");
    out = pyodide.runPython(`def sewey():
    return print("hello sew") 
    sewey()`);
    console.log(out);
}
main();

export default function Python() {
    return (
      <div className="python">
        <p>Python is here</p>
        <p>{out}</p>


      </div>
    )
}