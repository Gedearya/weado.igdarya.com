import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type ChartDataPoint = {
  label: string;
  value: number;
  rainChance?: number;
};

type LineChartProps = {
  data: ChartDataPoint[];
  color?: string;
  height?: number;
};

function CustomTooltip({ active, payload, label, coordinate, viewBox }: any) {
  if (!active || !payload?.length) return null;

  const temp = payload[0].value;
  const rainChance = payload[0].payload.rainChance ?? 0;

  // Calculate position to center tooltip on the dot
  const tooltipWidth = 130;
  const x = coordinate?.x ?? 0;
  const chartWidth = viewBox?.width ?? 0;
  const halfTooltip = tooltipWidth / 2;

  // Clamp so tooltip doesn't overflow
  let left = x - halfTooltip;
  if (left < 0) left = 0;
  if (left + tooltipWidth > chartWidth) left = chartWidth - tooltipWidth;

  return (
    <div
      className="bg-gray-900 text-white rounded-lg px-3 py-2 text-xs shadow-lg"
      style={{ minWidth: tooltipWidth }}
    >
      <p className="font-semibold mb-1">{label}</p>
      <div className="flex items-center gap-1.5">
        <span className="w-2.5 h-2.5 bg-orange-500 rounded-full" />
        <span>Temp: {temp}°C</span>
      </div>
      <div className="flex items-center gap-1.5 mt-0.5">
        <span className="w-2.5 h-2.5 bg-blue-400 rounded-full" />
        <span>Precip: {rainChance}%</span>
      </div>
    </div>
  );
}

export function SimpleLineChart({
  data,
  color = "#f97316",
  height = 80,
}: LineChartProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <AreaChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 0 }}>
        <XAxis dataKey="label" hide />
        <YAxis hide domain={["dataMin - 1", "dataMax + 1"]} />
        <Tooltip
          content={<CustomTooltip />}
          cursor={{ stroke: "#9ca3af", strokeDasharray: "3 3" }}
          position={{ y: 0 }}
        />
        <Area
          type="monotone"
          dataKey="value"
          stroke={color}
          strokeWidth={2}
          fill={color}
          fillOpacity={0.05}
          dot={false}
          activeDot={{ r: 5, fill: color, stroke: "#fff", strokeWidth: 2 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
