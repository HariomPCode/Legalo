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

const StackedAreaChartComponent = () => {
  const data = [
    { month: "Jan", mobile: 45000, desktop: 38000, tablet: 12000 },
    { month: "Feb", mobile: 52000, desktop: 36000, tablet: 14000 },
    { month: "Mar", mobile: 58000, desktop: 35000, tablet: 15000 },
    { month: "Apr", mobile: 65000, desktop: 33000, tablet: 16000 },
    { month: "May", mobile: 71000, desktop: 32000, tablet: 18000 },
    { month: "Jun", mobile: 78000, desktop: 31000, tablet: 19000 },
    { month: "Jul", mobile: 84000, desktop: 30000, tablet: 21000 },
    { month: "Aug", mobile: 91000, desktop: 29000, tablet: 22000 },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
        <XAxis
          dataKey="month"
          label={{ value: "Month", position: "insideBottom", offset: -5 }}
          tick={{ fontSize: 12 }}
        />
        <YAxis
          label={{ value: "Users", angle: -90, position: "insideLeft" }}
          tick={{ fontSize: 12 }}
        />
        <Tooltip
          formatter={(value) => value.toLocaleString()}
          contentStyle={{ backgroundColor: "#fff", border: "1px solid #ccc" }}
        />
        <Legend wrapperStyle={{ paddingTop: "20px" }} />
        <Area
          type="monotone"
          dataKey="mobile"
          stackId="1"
          stroke="#8b5cf6"
          fill="#8b5cf6"
          name="Mobile"
        />
        <Area
          type="monotone"
          dataKey="desktop"
          stackId="1"
          stroke="#3b82f6"
          fill="#3b82f6"
          name="Desktop"
        />
        <Area
          type="monotone"
          dataKey="tablet"
          stackId="1"
          stroke="#10b981"
          fill="#10b981"
          name="Tablet"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default StackedAreaChartComponent;
