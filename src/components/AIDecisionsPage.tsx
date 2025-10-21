import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Brain, TrendingUp, Zap, Target, Activity, Clock } from "lucide-react";

export function AIDecisionsPage() {
  const recentDecisions = [
    {
      id: 1,
      timestamp: "14:32:05",
      decision: "Load Balance Adjustment",
      confidence: 95,
      action: "Redirected 25% traffic from Server 2 to Server 4",
      impact: "positive",
      metrics: { before: "78%", after: "62%" }
    },
    {
      id: 2,
      timestamp: "14:30:42",
      decision: "Rate Limit Increase",
      confidence: 88,
      action: "Increased rate limit for API endpoint /v1/analytics by 15%",
      impact: "positive",
      metrics: { before: "1000/min", after: "1150/min" }
    },
    {
      id: 3,
      timestamp: "14:28:15",
      decision: "Cache Strategy Update",
      confidence: 92,
      action: "Extended TTL for user session cache to 30 minutes",
      impact: "neutral",
      metrics: { before: "15min", after: "30min" }
    },
    {
      id: 4,
      timestamp: "14:25:33",
      decision: "Resource Scaling",
      confidence: 97,
      action: "Auto-scaled Analytics Engine from 4 to 6 instances",
      impact: "positive",
      metrics: { before: "4 nodes", after: "6 nodes" }
    },
    {
      id: 5,
      timestamp: "14:22:18",
      decision: "Traffic Throttling",
      confidence: 85,
      action: "Applied throttling to IP 192.168.1.105 (suspicious activity)",
      impact: "positive",
      metrics: { before: "unlimited", after: "100/min" }
    }
  ];

  const decisionTrend = [
    { time: "14:00", total: 12, successful: 11, reverted: 1 },
    { time: "14:10", total: 15, successful: 14, reverted: 1 },
    { time: "14:20", total: 18, successful: 17, reverted: 1 },
    { time: "14:30", total: 22, successful: 21, reverted: 1 },
    { time: "14:40", total: 16, successful: 15, reverted: 1 }
  ];

  const decisionTypes = [
    { name: "Load Balancing", value: 35, color: "#3b82f6" },
    { name: "Rate Limiting", value: 28, color: "#10b981" },
    { name: "Caching", value: 22, color: "#8b5cf6" },
    { name: "Scaling", value: 15, color: "#f59e0b" }
  ];

  const confidenceData = [
    { range: "90-100%", count: 42 },
    { range: "80-89%", count: 28 },
    { range: "70-79%", count: 12 },
    { range: "60-69%", count: 5 }
  ];

  const getImpactBadge = (impact: string) => {
    const styles = {
      positive: "bg-green-500/10 text-green-400 border-green-500/20",
      neutral: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      negative: "bg-red-500/10 text-red-400 border-red-500/20"
    };
    return styles[impact as keyof typeof styles];
  };

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-slate-900 border-slate-800">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardDescription className="text-slate-400">Total Decisions</CardDescription>
              <Brain className="w-4 h-4 text-purple-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-slate-100">87</div>
            <p className="text-xs text-green-400 mt-1">+12 vs last hour</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardDescription className="text-slate-400">Success Rate</CardDescription>
              <Target className="w-4 h-4 text-green-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-slate-100">94.3%</div>
            <p className="text-xs text-slate-400 mt-1">82/87 successful</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardDescription className="text-slate-400">Avg Confidence</CardDescription>
              <TrendingUp className="w-4 h-4 text-blue-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-slate-100">91.2%</div>
            <p className="text-xs text-green-400 mt-1">+2.1% improvement</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardDescription className="text-slate-400">Response Time</CardDescription>
              <Zap className="w-4 h-4 text-yellow-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-slate-100">42ms</div>
            <p className="text-xs text-slate-400 mt-1">Avg decision latency</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-slate-900 border-slate-800">
          <CardHeader>
            <CardTitle className="text-slate-100">Decision Trends</CardTitle>
            <CardDescription className="text-slate-400">AI decisions over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={decisionTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="time" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip
                  contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #334155", borderRadius: "8px" }}
                  labelStyle={{ color: "#cbd5e1" }}
                />
                <Line type="monotone" dataKey="successful" stroke="#10b981" strokeWidth={2} />
                <Line type="monotone" dataKey="reverted" stroke="#ef4444" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardHeader>
            <CardTitle className="text-slate-100">Decision Types</CardTitle>
            <CardDescription className="text-slate-400">Distribution by category</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={decisionTypes}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {decisionTypes.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #334155", borderRadius: "8px" }}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardHeader>
            <CardTitle className="text-slate-100">Confidence Distribution</CardTitle>
            <CardDescription className="text-slate-400">Decision confidence levels</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={confidenceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="range" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip
                  contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #334155", borderRadius: "8px" }}
                  labelStyle={{ color: "#cbd5e1" }}
                />
                <Bar dataKey="count" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Recent Decisions */}
        <Card className="bg-slate-900 border-slate-800">
          <CardHeader>
            <CardTitle className="text-slate-100">Recent AI Decisions</CardTitle>
            <CardDescription className="text-slate-400">Last 5 automated actions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 max-h-[250px] overflow-y-auto pr-2">
              {recentDecisions.map((decision) => (
                <div
                  key={decision.id}
                  className="p-3 bg-slate-950 rounded-lg border border-slate-800"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Activity className="w-4 h-4 text-purple-400" />
                      <span className="text-sm text-slate-200">{decision.decision}</span>
                    </div>
                    <Badge variant="outline" className={getImpactBadge(decision.impact)}>
                      {decision.impact}
                    </Badge>
                  </div>
                  <p className="text-xs text-slate-400 mb-2">{decision.action}</p>
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 text-slate-500">
                      <Clock className="w-3 h-3" />
                      {decision.timestamp}
                    </div>
                    <span className="text-blue-400">{decision.confidence}% confidence</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
