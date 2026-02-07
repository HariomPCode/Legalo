"use client";
import React from "react";
import { ResponsiveContainer } from "recharts";

const HeatmapComponent = () => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const hours = ["12am", "4am", "8am", "12pm", "4pm", "8pm"];

  // Simulated click data (0-100 scale)
  const data = [
    [12, 8, 6, 5, 7, 9, 15],
    [45, 38, 42, 48, 52, 35, 28],
    [78, 82, 85, 88, 92, 68, 55],
    [95, 98, 100, 98, 95, 72, 62],
    [82, 85, 88, 90, 88, 75, 58],
    [55, 58, 62, 65, 68, 52, 38],
  ];

  const getColor = (value) => {
    if (value < 20) return "#dbeafe";
    if (value < 40) return "#93c5fd";
    if (value < 60) return "#60a5fa";
    if (value < 80) return "#3b82f6";
    return "#1e40af";
  };

  const cellSize = 60;
  const marginLeft = 60;
  const marginTop = 40;

  return (
    <ResponsiveContainer width="100%" height={300}>
      <svg width="100%" height="100%" viewBox="0 0 500 300">
        {/* Title */}
        <text x="10" y="20" fontSize="14" fontWeight="bold" fill="#333">
          Website Clicks Heatmap
        </text>

        {/* Y-axis labels (hours) */}
        {hours.map((hour, i) => (
          <text
            key={`hour-${i}`}
            x={marginLeft - 10}
            y={marginTop + i * cellSize + cellSize / 2}
            textAnchor="end"
            fontSize="11"
            fill="#666"
            dominantBaseline="middle"
          >
            {hour}
          </text>
        ))}

        {/* X-axis labels (days) */}
        {days.map((day, i) => (
          <text
            key={`day-${i}`}
            x={marginLeft + i * cellSize + cellSize / 2}
            y={marginTop - 10}
            textAnchor="middle"
            fontSize="11"
            fill="#666"
          >
            {day}
          </text>
        ))}

        {/* Heatmap cells */}
        {data.map((row, rowIndex) =>
          row.map((value, colIndex) => (
            <g key={`cell-${rowIndex}-${colIndex}`}>
              <rect
                x={marginLeft + colIndex * cellSize}
                y={marginTop + rowIndex * cellSize}
                width={cellSize - 2}
                height={cellSize - 2}
                fill={getColor(value)}
                stroke="#fff"
                strokeWidth="2"
                rx="4"
              />
              <text
                x={marginLeft + colIndex * cellSize + cellSize / 2}
                y={marginTop + rowIndex * cellSize + cellSize / 2}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="11"
                fill={value > 60 ? "#fff" : "#333"}
                fontWeight="500"
              >
                {value}
              </text>
            </g>
          )),
        )}

        {/* Legend */}
        <text x="10" y="280" fontSize="11" fill="#666">
          Low
        </text>
        {[0, 1, 2, 3, 4].map((i) => (
          <rect
            key={`legend-${i}`}
            x={40 + i * 25}
            y={270}
            width={20}
            height={15}
            fill={getColor(i * 25)}
            stroke="#fff"
            rx="2"
          />
        ))}
        <text x={40 + 5 * 25 + 5} y="280" fontSize="11" fill="#666">
          High
        </text>
      </svg>
    </ResponsiveContainer>
  );
};

export default HeatmapComponent;
