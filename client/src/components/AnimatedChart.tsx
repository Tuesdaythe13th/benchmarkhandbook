import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ScatterChart,
  Scatter,
} from "recharts";

interface AnimatedChartProps {
  data: any[];
  type: "line" | "bar" | "area" | "scatter";
  dataKeys: {
    key: string;
    name: string;
    color: string;
    type?: "monotone" | "linear" | "natural";
  }[];
  title?: string;
  xAxisKey?: string;
  yAxisLabel?: string;
  xAxisLabel?: string;
  height?: number;
  animated?: boolean;
  className?: string;
}

/**
 * AnimatedChart Component
 * Wrapper around Recharts with consistent styling and animations
 * Supports line, bar, area, and scatter charts
 */
export const AnimatedChart: React.FC<AnimatedChartProps> = ({
  data,
  type,
  dataKeys,
  title,
  xAxisKey = "name",
  yAxisLabel,
  xAxisLabel,
  height = 300,
  animated = true,
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (animated) {
      setIsVisible(true);
    } else {
      setIsVisible(true);
    }
  }, [animated]);

  const chartProps = {
    data,
    margin: { top: 5, right: 30, left: 0, bottom: 5 },
  };

  const chartContent = (
    <>
      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
      <XAxis dataKey={xAxisKey} stroke="#64748b" />
      <YAxis stroke="#64748b" label={{ value: yAxisLabel, angle: -90, position: "insideLeft" }} />
      <Tooltip
        contentStyle={{
          backgroundColor: "#1e293b",
          border: "1px solid #f97316",
          borderRadius: "8px",
          color: "#fff",
        }}
        cursor={{ fill: "rgba(249, 115, 22, 0.1)" }}
      />
      <Legend wrapperStyle={{ color: "#475569" }} />

      {type === "line" &&
        dataKeys.map((dk) => (
          <Line
            key={dk.key}
            type={dk.type || "monotone"}
            dataKey={dk.key}
            name={dk.name}
            stroke={dk.color}
            strokeWidth={2}
            dot={{ fill: dk.color, r: 4 }}
            activeDot={{ r: 6 }}
            isAnimationActive={animated}
            animationDuration={1000}
          />
        ))}

      {type === "bar" &&
        dataKeys.map((dk) => (
          <Bar
            key={dk.key}
            dataKey={dk.key}
            name={dk.name}
            fill={dk.color}
            isAnimationActive={animated}
            animationDuration={1000}
          />
        ))}

      {type === "area" &&
        dataKeys.map((dk) => (
          <Area
            key={dk.key}
            type={dk.type || "monotone"}
            dataKey={dk.key}
            name={dk.name}
            fill={dk.color}
            stroke={dk.color}
            fillOpacity={0.3}
            isAnimationActive={animated}
            animationDuration={1000}
          />
        ))}

      {type === "scatter" &&
        dataKeys.map((dk) => (
          <Scatter
            key={dk.key}
            name={dk.name}
            dataKey={dk.key}
            fill={dk.color}
            isAnimationActive={animated}
            animationDuration={1000}
          />
        ))}
    </>
  );

  return (
    <div className={`w-full ${className}`}>
      {title && (
        <h3 className="text-lg font-bold text-slate-900 mb-4">{title}</h3>
      )}
      <div
        className={`transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <ResponsiveContainer width="100%" height={height}>
          {type === "line" && <LineChart {...chartProps}>{chartContent}</LineChart>}
          {type === "bar" && <BarChart {...chartProps}>{chartContent}</BarChart>}
          {type === "area" && <AreaChart {...chartProps}>{chartContent}</AreaChart>}
          {type === "scatter" && <ScatterChart {...chartProps}>{chartContent}</ScatterChart>}
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AnimatedChart;
