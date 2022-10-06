async function main(){
    let pyodide = await loadPyodide();
    console.log(pyodide.runPython("print(1 + 2)"));
    pyodide.runPython("print(1 + 2)");
}
main();

export default function Python() {
    return (
      <div className="python">
          <p>Python is here</p>
      </div>
    )
  }