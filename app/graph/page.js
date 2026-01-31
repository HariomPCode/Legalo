"use client";

import DynamicChart from "@/app/graph/DynamicChart";

function ChartExamples() {
  const categoryData = [
    { name: "Jan", value: 400 },
    { name: "Feb", value: 300 },
    { name: "Mar", value: 600 },
    { name: "Apr", value: 800 },
    { name: "May", value: 500 },
    { name: "Jun", value: 700 },
  ];

  const pieData = [
    { name: "Product A", value: 400 },
    { name: "Product B", value: 300 },
    { name: "Product C", value: 300 },
    { name: "Product D", value: 200 },
  ];

  const histogramData = [
    23, 45, 12, 56, 78, 34, 67, 89, 23, 45, 67, 34, 56, 78, 90, 12, 34, 56, 78,
    23, 45, 67, 89, 34, 56, 78, 90, 23, 45, 67, 89, 12, 34, 56, 78, 90, 23, 45,
    67, 89, 12, 34, 56, 78, 90, 23, 45, 67, 89, 12,
  ];

  return (
    <div className="p-6 space-y-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-center">Dynamic Chart Examples</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded shadow h-[350px]">
          <DynamicChart type="bar" data={categoryData} title="Bar Chart" />
        </div>

        <div className="bg-white p-4 rounded shadow h-[350px]">
          <DynamicChart type="line" data={categoryData} title="Line Chart" />
        </div>

        <div className="bg-white p-4 rounded shadow h-[350px]">
          <DynamicChart type="area" data={categoryData} title="Area Chart" />
        </div>

        <div className="bg-white p-4 rounded shadow h-[350px]">
          <DynamicChart type="pie" data={pieData} title="Pie Chart" />
        </div>

        <div className="bg-white p-4 rounded shadow h-[350px]">
          <DynamicChart type="donut" data={pieData} title="Donut Chart" />
        </div>

        <div className="bg-white p-4 rounded shadow h-[350px]">
          <DynamicChart
            type="histogram"
            data={histogramData}
            title="Histogram"
          />
        </div>
      </div>
    </div>
  );
}

export default ChartExamples;
