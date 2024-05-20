function App() {
  return (
    <div className="flex flex-col h-screen text-white bg-gray-800">
      <header className="flex justify-center items-center h-16 bg-gray-950">
        <h3 className="text-xl font-bold">
          Rendering charts using{" "}
          <a href="https://d3js.org/" target="_blank" rel="noopener noreferrer">
            <span className="underline text-orange-500 hover:text-orange-400 transition-all">
              D3js
            </span>
          </a>
        </h3>
      </header>
      <main className="flex flex-col items-center p-4">
        <span className="font-bold">Choose a chart type:</span>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <input type="radio" id="bar" name="chart-type" value="BAR" />
            <label htmlFor="bar">BAR</label>
          </div>
          <div className="flex items-center gap-1">
            <input type="radio" id="pie" name="chart-type" value="PIE" />
            <label htmlFor="pie">PIE</label>
          </div>
          <div className="flex items-center gap-1">
            <input type="radio" id="area" name="chart-type" value="AREA" />
            <label htmlFor="area">AREA</label>
          </div>
          <div className="flex items-center gap-1">
            <input type="radio" id="line" name="chart-type" value="LINE" />
            <label htmlFor="line">LINE</label>
          </div>
        </div>
        <div className="w-96 h-px my-4 rounded bg-white" />
      </main>
    </div>
  );
}

export default App;
