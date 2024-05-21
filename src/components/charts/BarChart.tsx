import { useRef, useEffect } from "react";

import * as d3 from "d3";

interface BarChartProps {
  data: any[];
  width?: number;
  height?: number;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
}

export const BarChart = ({
  data,
  width = 640,
  height = 400,
  marginTop = 20,
  marginRight = 20,
  marginBottom = 30,
  marginLeft = 40,
}: BarChartProps) => {
  const svgRef = useRef();
  const currentWidth = width - marginLeft - marginRight;
  const currentHeight = height - marginTop - marginBottom;

  const drawChart = (data) => {
    const x = d3.scaleBand().range([0, currentWidth]).padding(0.1);
    const y = d3.scaleLinear().range([currentHeight, 0]);

    const svg = d3
      .select(svgRef.current)
      .append("svg")
      .attr("width", currentWidth + marginLeft + marginRight)
      .attr("height", currentHeight + marginTop + marginBottom)
      .append("g")
      .attr("transform", "translate(" + marginLeft + "," + marginTop + ")");

    x.domain(
      data.map((d) => {
        return d.letter;
      })
    );

    y.domain([0, d3.max(data, (d) => d.frequency)]);

    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d) => {
        return x(d.letter);
      })
      .attr("width", x.bandwidth())
      .attr("y", (d) => {
        return y(d.frequency);
      })
      .attr("height", (d) => {
        return currentHeight - y(d.frequency);
      })
      .attr("fill", "#f97316");

    svg
      .selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .text((d) => d.frequency.toFixed(2))
      .attr("x", (d) => {
        return x(d.letter);
      })
      .attr("y", (d) => {
        return y(d.frequency);
      });

    svg
      .append("g")
      .attr("transform", "translate(0," + currentHeight + ")")
      .call(d3.axisBottom(x))
      .append("text")
      .attr("class", "x-axis-label")
      .attr("x", width / 2)
      .attr("y", 40)
      .attr("fill", "currentColor")
      .text("X Axes");

    svg.append("g").call(d3.axisLeft(y));
  };

  useEffect(() => {
    drawChart(data);
  }, [data]);

  return <div ref={svgRef}></div>;
};
