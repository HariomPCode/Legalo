"use client";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const AreaChartComponent = () => {
  const data = [
    { week: "Week 1", visitors: 12400 },
    { week: "Week 2", visitors: 15200 },
    { week: "Week 3", visitors: 18900 },
    { week: "Week 4", visitors: 16700 },
    { week: "Week 5", visitors: 21300 },
    { week: "Week 6", visitors: 24800 },
    { week: "Week 7", visitors: 28500 },
    { week: "Week 8", visitors: 31200 },
    { week: "Week 9", visitors: 35600 },
    { week: "Week 10", visitors: 39800 },
    { week: "Week 11", visitors: 43200 },
    { week: "Week 12", visitors: 48900 },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
        <XAxis
          dataKey="week"
          label={{ value: "Time Period", position: "insideBottom", offset: -5 }}
          tick={{ fontSize: 12 }}
        />
        <YAxis
          label={{ value: "Visitors", angle: -90, position: "insideLeft" }}
          tick={{ fontSize: 12 }}
        />
        <Tooltip
          formatter={(value) => value.toLocaleString()}
          contentStyle={{ backgroundColor: "#fff", border: "1px solid #ccc" }}
        />
        <Legend wrapperStyle={{ paddingTop: "20px" }} />
        <Area
          type="monotone"
          dataKey="visitors"
          stroke="#06b6d4"
          fill="#06b6d4"
          fillOpacity={0.6}
          name="Website Visitors"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChartComponent;
