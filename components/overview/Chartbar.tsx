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
  card,
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
      <div className="grid grid-cols-2 gap-6 mb-8">
        <StatCard title="Total User" value={card?.totalUsers} />
        <StatCard title="Active Users" value={card?.activeUsers} />
      </div>

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-white">User Growth</h2>
        <span className="flex items-center gap-2 text-xs text-cyan-400 border border-cyan-400/30 px-3 py-1 rounded-md">
          2025
        </span>
      </div>

      {/* Chart */}
      <div className="h-80">
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

/* Stats Card */
function StatCard({ title, value }) {
  return (
    <div className="rounded-xl bg-[#0B3A55] px-6 py-5 shadow-lg">
      <p className="text-sm text-cyan-200">{title}</p>
      <h3 className="text-2xl font-bold text-white mt-1">{value}</h3>
    </div>
  );
}
