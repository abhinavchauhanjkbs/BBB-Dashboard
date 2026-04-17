import { ArrowUpRight } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Cell, LabelList } from "recharts";

const data = [
  { name: "1 Aug", value: 12000 },
  { name: "2 Aug", value: 20000 },
  { name: "3 Aug", value: 17000 },
  { name: "4 Aug", value: 22000 },
  { name: "5 Aug", value: 14867 },
  { name: "6 Aug", value: 19000 },
  { name: "7 Aug", value: 21000 },
  { name: "8 Aug", value: 24000 },
];

const CustomLabel = (props: any) => {
  const { x, y, width, value, index } = props;
  if (index !== 4) return null;
  return (
    <g>
      <rect x={x + width / 2 - 28} y={y - 22} width={56} height={18} rx={9} fill="hsl(228, 12%, 18%)" />
      <text x={x + width / 2} y={y - 10} textAnchor="middle" fill="hsl(0, 0%, 95%)" fontSize={9} fontWeight={500}>
        ${value.toLocaleString()}
      </text>
    </g>
  );
};

const RevenueChart = () => {
  return (
    <div className="bg-card border border-border rounded-2xl p-5 h-full">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-base font-semibold text-foreground">Revenue</h3>
          <span className="text-xs text-muted-foreground">This month vs last</span>
        </div>
        <button className="w-8 h-8 rounded-full flex items-center justify-center bg-accent hover:bg-accent/80 transition-colors">
          <ArrowUpRight size={14} className="text-foreground" />
        </button>
      </div>

      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barSize={24}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(228, 10%, 20%)" vertical={false} />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(220, 10%, 55%)", fontSize: 10 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(220, 10%, 55%)", fontSize: 10 }}
              tickFormatter={(v) => `$${(v / 1000).toFixed(0)},000`}
              domain={[0, 25000]}
              ticks={[5000, 10000, 15000, 20000, 25000]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(0, 0%, 100%)",
                border: "none",
                borderRadius: "0.75rem",
                color: "hsl(0, 0%, 10%)",
                fontSize: "12px",
              }}
              cursor={false}
              formatter={(value: number) => [`$${value.toLocaleString()}`, "Revenue"]}
            />
            <Bar dataKey="value" radius={[6, 6, 0, 0]}>
              {data.map((_, index) => (
                <Cell key={index} fill="hsl(217, 91%, 60%)" />
              ))}
              <LabelList content={<CustomLabel />} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-2 flex items-center gap-2">
        <span className="text-xs text-muted-foreground">$</span>
        <span className="text-sm font-semibold text-foreground">14,867</span>
      </div>
    </div>
  );
};

export default RevenueChart;
