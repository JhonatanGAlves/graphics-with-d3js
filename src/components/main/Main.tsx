import { ChangeEvent, useState } from "react";

const enum ChartTypes {
  BAR = "BAR",
  PIE = "PIE",
  AREA = "AREA",
  LINE = "LINE",
}

export const Main = () => {
  const [selectedChart, setSelectedChart] = useState<string>(ChartTypes.BAR);

  const handleSelectedChart = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedChart(e.target.value);
  };

  return (
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
  );
};
