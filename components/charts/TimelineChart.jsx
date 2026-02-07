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
  Cell,
} from "recharts";

const TimelineChartComponent = () => {
  const data = [
    { milestone: "Planning", start: 0, duration: 15, status: "completed" },
    { milestone: "Design", start: 15, duration: 20, status: "completed" },
    {
      milestone: "Development",
      start: 35,
      duration: 45,
      status: "in-progress",
    },
    { milestone: "Testing", start: 80, duration: 25, status: "pending" },
    { milestone: "Deployment", start: 105, duration: 10, status: "pending" },
  ];

  const getColor = (status) => {
    switch (status) {
      case "completed":
        return "#10b981";
      case "in-progress":
        return "#f59e0b";
      case "pending":
        return "#94a3b8";
      default:
        return "#3b82f6";
    }
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div
          style={{
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            padding: "10px",
            borderRadius: "4px",
          }}
        >
          <p style={{ margin: 0, fontWeight: "bold" }}>{data.milestone}</p>
          <p style={{ margin: "5px 0 0 0", fontSize: "12px" }}>
            Duration: {data.duration} days
          </p>
          <p style={{ margin: "5px 0 0 0", fontSize: "12px" }}>
            Status: {data.status}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        layout="vertical"
        margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
        <XAxis
          type="number"
          label={{
            value: "Days from Start",
            position: "insideBottom",
            offset: -5,
          }}
          tick={{ fontSize: 12 }}
        />
        <YAxis
          type="category"
          dataKey="milestone"
          label={{ value: "Milestones", angle: -90, position: "insideLeft" }}
          tick={{ fontSize: 12 }}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend
          payload={[
            { value: "Completed", type: "square", color: "#10b981" },
            { value: "In Progress", type: "square", color: "#f59e0b" },
            { value: "Pending", type: "square", color: "#94a3b8" },
          ]}
          wrapperStyle={{ paddingTop: "20px" }}
        />
        <Bar dataKey="duration" stackId="a">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={getColor(entry.status)} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default TimelineChartComponent;
