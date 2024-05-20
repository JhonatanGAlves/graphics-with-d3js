import { ChangeEvent, useState } from "react";

const enum ChartTypes {
  BAR = "BAR",
  PIE = "PIE",
  AREA = "AREA",
  LINE = "LINE",
}

function App() {
  const [selectedChart, setSelectedChart] = useState<string>(ChartTypes.BAR);

  const handleSelectedChart = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedChart(e.target.value);
  };

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
            <input
              type="radio"
              id="bar"
              name="chart-type"
              value={ChartTypes.BAR}
              checked={selectedChart === ChartTypes.BAR}
              onChange={(e) => handleSelectedChart(e)}
            />
            <label htmlFor="bar">{ChartTypes.BAR}</label>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="radio"
              id="pie"
              name="chart-type"
              value={ChartTypes.PIE}
              checked={selectedChart === ChartTypes.PIE}
              onChange={(e) => handleSelectedChart(e)}
            />
            <label htmlFor="pie">{ChartTypes.PIE}</label>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="radio"
              id="area"
              name="chart-type"
              value={ChartTypes.AREA}
              checked={selectedChart === ChartTypes.AREA}
              onChange={(e) => handleSelectedChart(e)}
            />
            <label htmlFor="area">{ChartTypes.AREA}</label>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="radio"
              id="line"
              name="chart-type"
              value={ChartTypes.LINE}
              checked={selectedChart === ChartTypes.LINE}
              onChange={(e) => handleSelectedChart(e)}
            />
            <label htmlFor="line">{ChartTypes.LINE}</label>
          </div>
        </div>
        <div className="w-96 h-px my-4 rounded bg-white" />
      </main>
    </div>
  );
}

export default App;
