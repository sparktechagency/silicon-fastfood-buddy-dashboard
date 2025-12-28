/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function ChartBar({
  chart,
}: {
  card: { totalUsers: string; activeUsers: string };
  chart: any;
}) {
  const data = chart?.map((item: any) => ({
    month: item?.month,
    count: item?.count,
    active: true,
  }));

  return (
    <div className="rounded-xl border border-sky-500/30 bg-linear-to-b from-[#062A44] to-[#041C2D] p-6 mt-5">
      {/* Stats */}

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-white">User Growth</h2>
        <span className="flex items-center gap-2 text-xs text-cyan-400 border border-cyan-400/30 px-3 py-1 rounded-md">
          2025
        </span>
      </div>

      {/* Chart */}
      <div className="h-[500px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="month" stroke="#8FBAD6" tick={{ fontSize: 12 }} />
            <YAxis
              stroke="#8FBAD6"
              tick={{ fontSize: 12 }}
              tickFormatter={(v) => `${v / 1000}K`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#FFB020",
                borderRadius: "10px",
                border: "none",
                color: "#000",
                fontWeight: 600,
              }}
              formatter={(value) => [
                value !== undefined ? `${value.toLocaleString()}` : "",
                "",
              ]}
            />
            <Line
              type="monotone"
              dataKey="users"
              stroke="#00E5FF"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="active"
              stroke="#FF8A00"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
