"use client";
import React from "react";
import { Treemap, ResponsiveContainer, Tooltip } from "recharts";

const TreemapComponent = () => {
  const data = [
    {
      name: "Electronics",
      children: [
        { name: "Laptops", size: 85000 },
        { name: "Phones", size: 125000 },
        { name: "Tablets", size: 45000 },
        { name: "Accessories", size: 32000 },
      ],
    },
    {
      name: "Clothing",
      children: [
        { name: "Men", size: 68000 },
        { name: "Women", size: 95000 },
        { name: "Kids", size: 42000 },
      ],
    },
    {
      name: "Home & Garden",
      children: [
        { name: "Furniture", size: 52000 },
        { name: "Decor", size: 38000 },
        { name: "Kitchen", size: 45000 },
      ],
    },
    {
      name: "Sports",
      children: [
        { name: "Equipment", size: 35000 },
        { name: "Apparel", size: 28000 },
      ],
    },
  ];

  const COLORS = [
    "#8b5cf6",
    "#3b82f6",
    "#10b981",
    "#f59e0b",
    "#ef4444",
    "#06b6d4",
    "#ec4899",
    "#84cc16",
  ];

  const CustomContent = ({
    root,
    depth,
    x,
    y,
    width,
    height,
    index,
    name,
    size,
  }) => {
    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          style={{
            fill:
              depth < 2
                ? COLORS[index % COLORS.length]
                : COLORS[(index + 3) % COLORS.length],
            stroke: "#fff",
            strokeWidth: 2,
            fillOpacity: depth < 2 ? 0.8 : 1,
          }}
        />
        {width > 60 && height > 40 && (
          <>
            <text
              x={x + width / 2}
              y={y + height / 2 - 8}
              textAnchor="middle"
              fill="#fff"
              fontSize={depth < 2 ? 14 : 12}
              fontWeight={depth < 2 ? "bold" : "normal"}
            >
              {name}
            </text>
            {size && (
              <text
                x={x + width / 2}
                y={y + height / 2 + 10}
                textAnchor="middle"
                fill="#fff"
                fontSize={10}
              >
                ${(size / 1000).toFixed(0)}k
              </text>
            )}
          </>
        )}
      </g>
    );
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <Treemap
        data={data}
        dataKey="size"
        aspectRatio={4 / 3}
        stroke="#fff"
        fill="#8884d8"
        content={<CustomContent />}
      >
        <Tooltip
          formatter={(value) => `$${value.toLocaleString()}`}
          contentStyle={{ backgroundColor: "#fff", border: "1px solid #ccc" }}
        />
      </Treemap>
    </ResponsiveContainer>
  );
};

export default TreemapComponent;
