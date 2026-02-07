"use client";
import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ScatterChartComponent = () => {
  const data = [
    { attendance: 45, marks: 52 },
    { attendance: 65, marks: 68 },
    { attendance: 72, marks: 75 },
    { attendance: 55, marks: 60 },
    { attendance: 88, marks: 92 },
    { attendance: 92, marks: 95 },
    { attendance: 78, marks: 82 },
    { attendance: 50, marks: 55 },
    { attendance: 95, marks: 98 },
    { attendance: 82, marks: 85 },
    { attendance: 70, marks: 73 },
    { attendance: 60, marks: 65 },
    { attendance: 85, marks: 88 },
    { attendance: 75, marks: 78 },
    { attendance: 58, marks: 62 },
    { attendance: 90, marks: 93 },
    { attendance: 68, marks: 71 },
    { attendance: 80, marks: 84 },
    { attendance: 62, marks: 67 },
    { attendance: 87, marks: 90 },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <ScatterChart margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
        <XAxis
          type="number"
          dataKey="attendance"
          name="Attendance"
          label={{
            value: "Attendance (%)",
            position: "insideBottom",
            offset: -5,
          }}
          tick={{ fontSize: 12 }}
          domain={[0, 100]}
        />
        <YAxis
          type="number"
          dataKey="marks"
          name="Marks"
          label={{ value: "Marks", angle: -90, position: "insideLeft" }}
          tick={{ fontSize: 12 }}
          domain={[0, 100]}
        />
        <Tooltip
          cursor={{ strokeDasharray: "3 3" }}
          formatter={(value) => value.toFixed(0)}
          contentStyle={{ backgroundColor: "#fff", border: "1px solid #ccc" }}
        />
        <Legend wrapperStyle={{ paddingTop: "20px" }} />
        <Scatter
          name="Student Performance"
          data={data}
          fill="#8b5cf6"
          shape="circle"
        />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default ScatterChartComponent;
