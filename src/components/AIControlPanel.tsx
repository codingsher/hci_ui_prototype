import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";
import { Slider } from "./ui/slider";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { Bot } from "lucide-react";

const loadDistribution = [
  { name: "US-East", value: 45, color: "#3b82f6" },
  { name: "EU-West", value: 32, color: "#22c55e" },
  { name: "Asia", value: 23, color: "#a855f7" },
];

export function AIControlPanel() {
  return (
    <Card className="bg-slate-900 border-slate-800">
      <CardHeader>
        <CardTitle className="text-slate-100 flex items-center gap-2">
          <Bot className="w-5 h-5 text-blue-400" />
          AI Control Panel
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* AI Toggle */}
        <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
          <div>
            <Label htmlFor="ai-mode" className="text-slate-200">
              AI-Controlled Mode
            </Label>
            <p className="text-xs text-slate-400 mt-1">
              Automatic decision making enabled
            </p>
          </div>
          <Switch id="ai-mode" defaultChecked />
        </div>

        {/* Rate Limit Controls */}
        <div className="space-y-4">
          <div>
            <Label className="text-slate-300 text-sm">Global Rate Limit</Label>
            <div className="flex items-center gap-3 mt-2">
              <Slider
                defaultValue={[75]}
                max={100}
                step={5}
                className="flex-1"
              />
              <span className="text-sm text-slate-400 min-w-[3rem]">75%</span>
            </div>
          </div>

          <div>
            <Label className="text-slate-300 text-sm">Request Throttle</Label>
            <div className="flex items-center gap-3 mt-2">
              <Slider
                defaultValue={[60]}
                max={100}
                step={5}
                className="flex-1"
              />
              <span className="text-sm text-slate-400 min-w-[3rem]">60%</span>
            </div>
          </div>
        </div>

        {/* Load Distribution */}
        <div>
          <Label className="text-slate-300 text-sm mb-3 block">
            Load Distribution by Region
          </Label>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={loadDistribution}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={70}
                paddingAngle={5}
                dataKey="value"
              >
                {loadDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1e293b",
                  border: "1px solid #334155",
                  borderRadius: "8px",
                }}
              />
              <Legend
                wrapperStyle={{ fontSize: "12px" }}
                iconType="circle"
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3 pt-2 border-t border-slate-800">
          {loadDistribution.map((region) => (
            <div key={region.name} className="text-center">
              <div
                className="w-3 h-3 rounded-full mx-auto mb-1"
                style={{ backgroundColor: region.color }}
              />
              <p className="text-xs text-slate-400">{region.name}</p>
              <p className="text-sm text-slate-200">{region.value}%</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
