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

const BarChartComponent = () => {
  const data = [
    { product: "Laptops", sales: 12400 },
    { product: "Phones", sales: 18900 },
    { product: "Tablets", sales: 8300 },
    { product: "Headphones", sales: 15600 },
    { product: "Monitors", sales: 9800 },
    { product: "Keyboards", sales: 6200 },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
        <XAxis
          dataKey="product"
          label={{
            value: "Product Category",
            position: "insideBottom",
            offset: -5,
          }}
          tick={{ fontSize: 12 }}
        />
        <YAxis
          label={{ value: "Sales (Units)", angle: -90, position: "insideLeft" }}
          tick={{ fontSize: 12 }}
        />
        <Tooltip
          formatter={(value) => value.toLocaleString()}
          contentStyle={{ backgroundColor: "#fff", border: "1px solid #ccc" }}
        />
        <Legend wrapperStyle={{ paddingTop: "20px" }} />
        <Bar
          dataKey="sales"
          fill="#3b82f6"
          name="Sales"
          radius={[8, 8, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
