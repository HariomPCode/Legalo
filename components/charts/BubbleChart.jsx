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
  ZAxis,
} from "recharts";

const BubbleChartComponent = () => {
  const data = [
    { users: 1200, revenue: 45000, profit: 12000 },
    { users: 2500, revenue: 78000, profit: 25000 },
    { users: 1800, revenue: 62000, profit: 18000 },
    { users: 3200, revenue: 95000, profit: 35000 },
    { users: 2900, revenue: 88000, profit: 28000 },
    { users: 1500, revenue: 52000, profit: 15000 },
    { users: 3800, revenue: 112000, profit: 42000 },
    { users: 2200, revenue: 71000, profit: 22000 },
    { users: 2700, revenue: 82000, profit: 26000 },
    { users: 3500, revenue: 105000, profit: 38000 },
    { users: 1900, revenue: 65000, profit: 19000 },
    { users: 3100, revenue: 92000, profit: 31000 },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <ScatterChart margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
        <XAxis
          type="number"
          dataKey="users"
          name="Users"
          label={{ value: "Total Users", position: "insideBottom", offset: -5 }}
          tick={{ fontSize: 12 }}
        />
        <YAxis
          type="number"
          dataKey="revenue"
          name="Revenue"
          label={{ value: "Revenue ($)", angle: -90, position: "insideLeft" }}
          tick={{ fontSize: 12 }}
        />
        <ZAxis
          type="number"
          dataKey="profit"
          range={[100, 1000]}
          name="Profit"
        />
        <Tooltip
          cursor={{ strokeDasharray: "3 3" }}
          formatter={(value, name) => {
            if (name === "Revenue" || name === "Profit") {
              return `$${value.toLocaleString()}`;
            }
            return value.toLocaleString();
          }}
          contentStyle={{ backgroundColor: "#fff", border: "1px solid #ccc" }}
        />
        <Legend wrapperStyle={{ paddingTop: "20px" }} />
        <Scatter
          name="Product Performance (bubble size = profit)"
          data={data}
          fill="#06b6d4"
          fillOpacity={0.6}
          shape="circle"
        />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default BubbleChartComponent;
