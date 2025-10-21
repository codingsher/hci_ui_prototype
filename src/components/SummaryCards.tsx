import { Activity, TrendingUp, AlertTriangle, Sparkles } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { LineChart, Line, ResponsiveContainer } from "recharts";

const sparklineData = [
  { value: 30 },
  { value: 45 },
  { value: 35 },
  { value: 50 },
  { value: 40 },
  { value: 60 },
  { value: 55 },
];

const cards = [
  {
    title: "Total Requests",
    value: "1.2M",
    change: "+12.5%",
    icon: Activity,
    iconColor: "text-blue-400",
    bgColor: "bg-blue-500/10",
    sparklineColor: "#3b82f6",
  },
  {
    title: "Average Response Time",
    value: "245ms",
    change: "-8.2%",
    icon: TrendingUp,
    iconColor: "text-green-400",
    bgColor: "bg-green-500/10",
    sparklineColor: "#22c55e",
  },
  {
    title: "Error Rate",
    value: "0.12%",
    change: "-2.1%",
    icon: AlertTriangle,
    iconColor: "text-orange-400",
    bgColor: "bg-orange-500/10",
    sparklineColor: "#f97316",
  },
  {
    title: "AI Interventions Today",
    value: "47",
    change: "+5",
    icon: Sparkles,
    iconColor: "text-purple-400",
    bgColor: "bg-purple-500/10",
    sparklineColor: "#a855f7",
  },
];

export function SummaryCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card) => (
        <Card key={card.title} className="bg-slate-900 border-slate-800">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-sm text-slate-400 mb-2">{card.title}</p>
                <h3 className="text-slate-100 mb-1">{card.value}</h3>
                <p className="text-xs text-green-400">{card.change} from last hour</p>
              </div>
              <div className={`p-3 rounded-lg ${card.bgColor}`}>
                <card.icon className={`w-5 h-5 ${card.iconColor}`} />
              </div>
            </div>
            <div className="mt-4 h-12">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={sparklineData}>
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke={card.sparklineColor}
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
