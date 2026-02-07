"use client";
import React from "react";
import LineChartComponent from "@/components/charts/LineChart";
import BarChartComponent from "@/components/charts/BarChart";
import StackedBarChartComponent from "@/components/charts/StackedBarChart";
import AreaChartComponent from "@/components/charts/AreaChart";
import StackedAreaChartComponent from "@/components/charts/StackedAreaChart";
import PieChartComponent from "@/components/charts/PieChart";
import DonutChartComponent from "@/components/charts/DonutChart";
import ScatterChartComponent from "@/components/charts/ScatterChart";
import BubbleChartComponent from "@/components/charts/BubbleChart";
import RadarChartComponent from "@/components/charts/RadarChart";
import ComposedChartComponent from "@/components/charts/ComposedChart";
import HistogramComponent from "@/components/charts/Histogram";
import TimelineChartComponent from "@/components/charts/TimelineChart";
import HeatmapComponent from "@/components/charts/Heatmap";
import TreemapComponent from "@/components/charts/Treemap";

const Dashboard = () => {
  const charts = [
    {
      id: 1,
      title: "Monthly Revenue Trend",
      description: "Line chart showing revenue growth over 12 months",
      component: <LineChartComponent />,
    },
    {
      id: 2,
      title: "Sales by Product Category",
      description: "Bar chart comparing sales across product categories",
      component: <BarChartComponent />,
    },
    {
      id: 3,
      title: "Regional Sales Distribution",
      description: "Stacked bar chart showing monthly sales split by region",
      component: <StackedBarChartComponent />,
    },
    {
      id: 4,
      title: "Website Traffic Growth",
      description: "Area chart visualizing visitor growth magnitude",
      component: <AreaChartComponent />,
    },
    {
      id: 5,
      title: "Platform Usage Trends",
      description: "Stacked area chart showing device usage over time",
      component: <StackedAreaChartComponent />,
    },
    {
      id: 6,
      title: "Market Share Distribution",
      description: "Pie chart displaying percentage market share by company",
      component: <PieChartComponent />,
    },
    {
      id: 7,
      title: "Task Status Overview",
      description: "Donut chart showing task completion status",
      component: <DonutChartComponent />,
    },
    {
      id: 8,
      title: "Attendance vs Performance",
      description:
        "Scatter plot showing correlation between attendance and marks",
      component: <ScatterChartComponent />,
    },
    {
      id: 9,
      title: "Product Performance Metrics",
      description: "Bubble chart comparing users, revenue, and profit",
      component: <BubbleChartComponent />,
    },
    {
      id: 10,
      title: "Student Skills Assessment",
      description: "Radar chart comparing technical skills across students",
      component: <RadarChartComponent />,
    },
    {
      id: 11,
      title: "Sales & Growth Analysis",
      description: "Composed chart combining sales bars with growth rate line",
      component: <ComposedChartComponent />,
    },
    {
      id: 12,
      title: "Exam Score Distribution",
      description: "Histogram showing distribution of student scores",
      component: <HistogramComponent />,
    },
    {
      id: 13,
      title: "Project Timeline",
      description: "Timeline chart displaying project milestones and status",
      component: <TimelineChartComponent />,
    },
    {
      id: 14,
      title: "Website Activity Heatmap",
      description: "Heatmap showing click intensity by day and time",
      component: <HeatmapComponent />,
    },
    {
      id: 15,
      title: "Category Sales Treemap",
      description: "Treemap showing hierarchical sales data by category",
      component: <TreemapComponent />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 md:px-8">
      {/* Header */}
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-gray-900">
          Analytics Dashboard
        </h1>
        <p className="mt-2 text-sm text-gray-600">
          Comprehensive Data Visualization with Recharts
        </p>
      </header>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {charts.map((chart) => (
          <div
            key={chart.id}
            className="rounded-xl bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            {/* Card Header */}
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {chart.title}
              </h2>
              <p className="mt-1 text-sm text-gray-500">{chart.description}</p>
            </div>

            {/* Chart Container */}
            <div className="h-auto w-full">{chart.component}</div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center text-xs text-gray-500">
        Built with React & Recharts • All charts use realistic sample data
      </footer>
    </div>
  );
};

export default Dashboard;
