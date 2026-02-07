"use client";
import React from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const RadarChartComponent = () => {
  const data = [
    { subject: "DSA", student1: 85, student2: 72 },
    { subject: "Web Dev", student1: 92, student2: 88 },
    { subject: "DBMS", student1: 78, student2: 85 },
    { subject: "OS", student1: 81, student2: 76 },
    { subject: "Networks", student1: 88, student2: 90 },
  ];

  return (
    <ResponsiveContainer width="100%" height={320}>
      <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
        <PolarGrid stroke="#ccc" />
        <PolarAngleAxis dataKey="subject" tick={{ fontSize: 12 }} />
        <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fontSize: 10 }} />
        <Radar
          name="Student 1"
          dataKey="student1"
          stroke="#8b5cf6"
          fill="#8b5cf6"
          fillOpacity={0.6}
        />
        <Radar
          name="Student 2"
          dataKey="student2"
          stroke="#3b82f6"
          fill="#3b82f6"
          fillOpacity={0.6}
        />
        <Tooltip
          contentStyle={{ backgroundColor: "#fff", border: "1px solid #ccc" }}
        />
        <Legend wrapperStyle={{ paddingTop: "10px" }} />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default RadarChartComponent;
