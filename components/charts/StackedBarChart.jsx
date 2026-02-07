"use client";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const StackedBarChartComponent = () => {
  const data = [
    { month: "Jan", north: 24000, south: 18000, east: 21000, west: 16000 },
    { month: "Feb", north: 27000, south: 22000, east: 19000, west: 18000 },
    { month: "Mar", north: 31000, south: 25000, east: 23000, west: 21000 },
    { month: "Apr", north: 29000, south: 28000, east: 26000, west: 22000 },
    { month: "May", north: 33000, south: 31000, east: 28000, west: 24000 },
    { month: "Jun", north: 36000, south: 34000, east: 31000, west: 27000 },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
        <XAxis
          dataKey="month"
          label={{ value: "Month", position: "insideBottom", offset: -5 }}
          tick={{ fontSize: 12 }}
        />
        <YAxis
          label={{ value: "Sales ($)", angle: -90, position: "insideLeft" }}
          tick={{ fontSize: 12 }}
        />
        <Tooltip
          formatter={(value) => `$${value.toLocaleString()}`}
          contentStyle={{ backgroundColor: "#fff", border: "1px solid #ccc" }}
        />
        <Legend wrapperStyle={{ paddingTop: "20px" }} />
        <Bar dataKey="north" stackId="a" fill="#ef4444" name="North Region" />
        <Bar dataKey="south" stackId="a" fill="#f59e0b" name="South Region" />
        <Bar dataKey="east" stackId="a" fill="#10b981" name="East Region" />
        <Bar dataKey="west" stackId="a" fill="#3b82f6" name="West Region" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default StackedBarChartComponent;
