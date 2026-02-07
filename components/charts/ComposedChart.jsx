"use client";
import React from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ComposedChartComponent = () => {
  const data = [
    { quarter: "Q1 2023", sales: 125000, growthRate: 5.2 },
    { quarter: "Q2 2023", sales: 142000, growthRate: 13.6 },
    { quarter: "Q3 2023", sales: 156000, growthRate: 9.9 },
    { quarter: "Q4 2023", sales: 178000, growthRate: 14.1 },
    { quarter: "Q1 2024", sales: 195000, growthRate: 9.6 },
    { quarter: "Q2 2024", sales: 218000, growthRate: 11.8 },
    { quarter: "Q3 2024", sales: 235000, growthRate: 7.8 },
    { quarter: "Q4 2024", sales: 262000, growthRate: 11.5 },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <ComposedChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
        <XAxis
          dataKey="quarter"
          label={{ value: "Quarter", position: "insideBottom", offset: -5 }}
          tick={{ fontSize: 12 }}
        />
        <YAxis
          yAxisId="left"
          label={{ value: "Sales ($)", angle: -90, position: "insideLeft" }}
          tick={{ fontSize: 12 }}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          label={{
            value: "Growth Rate (%)",
            angle: 90,
            position: "insideRight",
          }}
          tick={{ fontSize: 12 }}
        />
        <Tooltip
          formatter={(value, name) => {
            if (name === "Sales") {
              return [`$${value.toLocaleString()}`, name];
            }
            return [`${value}%`, name];
          }}
          contentStyle={{ backgroundColor: "#fff", border: "1px solid #ccc" }}
        />
        <Legend wrapperStyle={{ paddingTop: "20px" }} />
        <Bar
          yAxisId="left"
          dataKey="sales"
          fill="#3b82f6"
          name="Sales"
          radius={[8, 8, 0, 0]}
        />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="growthRate"
          stroke="#10b981"
          strokeWidth={3}
          dot={{ fill: "#10b981", r: 5 }}
          name="Growth Rate"
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default ComposedChartComponent;
