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

const HistogramComponent = () => {
  const data = [
    { scoreRange: "0-10", students: 3 },
    { scoreRange: "11-20", students: 8 },
    { scoreRange: "21-30", students: 15 },
    { scoreRange: "31-40", students: 22 },
    { scoreRange: "41-50", students: 35 },
    { scoreRange: "51-60", students: 48 },
    { scoreRange: "61-70", students: 62 },
    { scoreRange: "71-80", students: 55 },
    { scoreRange: "81-90", students: 38 },
    { scoreRange: "91-100", students: 24 },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
        <XAxis
          dataKey="scoreRange"
          label={{ value: "Score Range", position: "insideBottom", offset: -5 }}
          tick={{ fontSize: 12 }}
        />
        <YAxis
          label={{
            value: "Number of Students",
            angle: -90,
            position: "insideLeft",
          }}
          tick={{ fontSize: 12 }}
        />
        <Tooltip
          formatter={(value) => `${value} students`}
          contentStyle={{ backgroundColor: "#fff", border: "1px solid #ccc" }}
        />
        <Legend wrapperStyle={{ paddingTop: "20px" }} />
        <Bar dataKey="students" fill="#10b981" name="Students" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default HistogramComponent;
