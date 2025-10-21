import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ScrollArea } from "./ui/scroll-area";
import { AlertCircle, AlertTriangle, Info } from "lucide-react";

const alerts = [
  {
    id: 1,
    severity: "critical",
    timestamp: "2 min ago",
    service: "Payment Service",
    message: "High load detected",
    action: "Rate limiting applied",
  },
  {
    id: 2,
    severity: "warning",
    timestamp: "8 min ago",
    service: "Database Cluster",
    message: "Response time increasing",
    action: "Load shifted to replica",
  },
  {
    id: 3,
    severity: "info",
    timestamp: "15 min ago",
    service: "Cache Layer",
    message: "Cache refresh completed",
    action: "No action needed",
  },
  {
    id: 4,
    severity: "warning",
    timestamp: "23 min ago",
    service: "API Gateway",
    message: "Connection pool near limit",
    action: "Pool size increased",
  },
  {
    id: 5,
    severity: "info",
    timestamp: "31 min ago",
    service: "Auth Service",
    message: "Routine health check passed",
    action: "No action needed",
  },
];

const severityConfig = {
  critical: {
    icon: AlertCircle,
    color: "text-red-400",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/20",
  },
  warning: {
    icon: AlertTriangle,
    color: "text-orange-400",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
  },
  info: {
    icon: Info,
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
  },
};

export function AlertsPanel() {
  return (
    <Card className="bg-slate-900 border-slate-800">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-slate-100">Real-Time Alerts</CardTitle>
          <Badge variant="outline" className="bg-slate-800 text-slate-400 border-slate-700">
            {alerts.length} Active
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-3">
            {alerts.map((alert) => {
              const config = severityConfig[alert.severity as keyof typeof severityConfig];
              const Icon = config.icon;

              return (
                <div
                  key={alert.id}
                  className={`p-4 rounded-lg border ${config.bgColor} ${config.borderColor}`}
                >
                  <div className="flex gap-3">
                    <Icon className={`w-5 h-5 ${config.color} flex-shrink-0 mt-0.5`} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <p className="text-sm text-slate-200">{alert.service}</p>
                        <span className="text-xs text-slate-500 whitespace-nowrap">
                          {alert.timestamp}
                        </span>
                      </div>
                      <p className="text-sm text-slate-400 mb-2">{alert.message}</p>
                      <p className="text-xs text-slate-500">
                        <span className={config.color}>AI Action:</span> {alert.action}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
