import { useState, useEffect, useMemo } from "react";
import { formatNumber } from "../utils/numberFormat";

const PROGRESS_UNIT = 0.01;
const PROGRESS_TIMEOUT = 5;

const getArcPath = (start, end, innerRadius, outerRadius) => {
  const startAngle = start * Math.PI * 2;
  const endAngle = end * Math.PI * 2;
  const x1 = innerRadius * Math.sin(startAngle);
  const y1 = innerRadius * -Math.cos(startAngle);
  const x2 = outerRadius * Math.sin(startAngle);
  const y2 = outerRadius * -Math.cos(startAngle);
  const x3 = outerRadius * Math.sin(endAngle);
  const y3 = outerRadius * -Math.cos(endAngle);
  const x4 = innerRadius * Math.sin(endAngle);
  const y4 = innerRadius * -Math.cos(endAngle);
  const bigArc = end - start >= 0.5;
  const outerFlags = bigArc ? "1 1 1" : "0 0 1";
  const innerFlags = bigArc ? "1 1 0" : "1 0 0";
  return `M ${x1},${y1} L ${x2},${y2} A ${outerRadius} ${outerRadius} ${outerFlags} ${x3},${y3}
        L ${x4},${y4} A ${innerRadius} ${innerRadius} ${innerFlags} ${x1},${y1} Z`;
};

export const DonutChart = ({
  width,
  height,
  items,
  innerRadius,
  outerRadius,
}) => {
  const [visiblePart, setVisiblePart] = useState(0);

  useEffect(() => {
    if (visiblePart < 1) {
      setTimeout(
        () => setVisiblePart(visiblePart + PROGRESS_UNIT),
        PROGRESS_TIMEOUT
      );
    }
  }, [visiblePart]);

  const totalExpense = items.reduce((accumulator, currentObject) => {
    return accumulator + currentObject.value;
  }, 0);

  const segments = useMemo(() => {
    const sum = items.reduce((sum, item) => sum + item.value, 0);
    let start = 0;
    return items.map((item) => {
      const delta = (item.value / sum) * visiblePart;
      const path = getArcPath(start, start + delta, innerRadius, outerRadius);
      start += delta;
      return { ...item, path };
    });
  }, [items, innerRadius, outerRadius, visiblePart]);

  return (
    <svg width={"100%"} height={height} viewBox={`0 0 ${width} ${height}`}>
      <g transform={`translate(${width / 2},${height / 2})`}>
        {segments.map((segment) => (
          <path
            key={segment.color}
            stroke={segment.color}
            fill={segment.color}
            d={segment.path}
          />
        ))}
      </g>
      <g className="fill-black translate-y-[0.25em]">
        <text
          x="50%"
          y="50%"
          className="text-[2rem] translate-y-[0.25em] leading-[1] text-center"
          textAnchor="middle"
        >
          <tspan className="text-[40px] fill-black">
            {formatNumber(totalExpense)}
          </tspan>
          <tspan className="text-[19px] fill-light_purple_2 font-bold">
            .00
          </tspan>
        </text>
      </g>
    </svg>
  );
};
