import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Search, Filter, Download, AlertCircle, Info, CheckCircle, XCircle } from "lucide-react";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";

export function LogsPage() {
  const logs = [
    {
      id: 1,
      timestamp: "2025-10-21 14:32:18",
      level: "error",
      service: "API Gateway",
      message: "Rate limit exceeded for client IP 192.168.1.105",
      details: "Threshold: 1000 req/min | Actual: 1243 req/min"
    },
    {
      id: 2,
      timestamp: "2025-10-21 14:31:52",
      level: "info",
      service: "Authentication Service",
      message: "User login successful",
      details: "UserID: user_8472 | Session: sess_abc123"
    },
    {
      id: 3,
      timestamp: "2025-10-21 14:31:45",
      level: "warning",
      service: "Database Primary",
      message: "Connection pool utilization high",
      details: "Active connections: 85/100 (85%)"
    },
    {
      id: 4,
      timestamp: "2025-10-21 14:31:22",
      level: "info",
      service: "Cache Layer",
      message: "Cache hit ratio optimal",
      details: "Hit rate: 94.2% | Miss rate: 5.8%"
    },
    {
      id: 5,
      timestamp: "2025-10-21 14:30:58",
      level: "error",
      service: "Analytics Engine",
      message: "Processing timeout on batch job",
      details: "Job ID: batch_7823 | Duration: 305s (timeout: 300s)"
    },
    {
      id: 6,
      timestamp: "2025-10-21 14:30:35",
      level: "info",
      service: "Message Queue",
      message: "Message processed successfully",
      details: "Queue: notifications | Message ID: msg_9284"
    },
    {
      id: 7,
      timestamp: "2025-10-21 14:30:12",
      level: "warning",
      service: "API Gateway",
      message: "Elevated response time detected",
      details: "Avg response: 485ms (threshold: 300ms)"
    },
    {
      id: 8,
      timestamp: "2025-10-21 14:29:48",
      level: "info",
      service: "Authentication Service",
      message: "Token refresh completed",
      details: "UserID: user_3921 | New expiry: 2025-10-21 15:29:48"
    }
  ];

  const getLevelIcon = (level: string) => {
    switch (level) {
      case "error":
        return <XCircle className="w-4 h-4 text-red-400" />;
      case "warning":
        return <AlertCircle className="w-4 h-4 text-yellow-400" />;
      case "info":
        return <Info className="w-4 h-4 text-blue-400" />;
      case "success":
        return <CheckCircle className="w-4 h-4 text-green-400" />;
      default:
        return <Info className="w-4 h-4 text-slate-400" />;
    }
  };

  const getLevelBadge = (level: string) => {
    const styles = {
      error: "bg-red-500/10 text-red-400 border-red-500/20",
      warning: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
      info: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      success: "bg-green-500/10 text-green-400 border-green-500/20"
    };
    return styles[level as keyof typeof styles] || styles.info;
  };

  return (
    <div className="space-y-6">
      {/* Filters Section */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-slate-100">Log Filters</CardTitle>
          <CardDescription className="text-slate-400">
            Search and filter system logs
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                placeholder="Search logs..."
                className="pl-10 bg-slate-950 border-slate-700 text-slate-100 placeholder:text-slate-500"
              />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="bg-slate-950 border-slate-700 text-slate-100">
                <SelectValue placeholder="Log Level" />
              </SelectTrigger>
              <SelectContent className="bg-slate-900 border-slate-700">
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="error">Error</SelectItem>
                <SelectItem value="warning">Warning</SelectItem>
                <SelectItem value="info">Info</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="bg-slate-950 border-slate-700 text-slate-100">
                <SelectValue placeholder="Service" />
              </SelectTrigger>
              <SelectContent className="bg-slate-900 border-slate-700">
                <SelectItem value="all">All Services</SelectItem>
                <SelectItem value="api">API Gateway</SelectItem>
                <SelectItem value="auth">Authentication</SelectItem>
                <SelectItem value="db">Database</SelectItem>
                <SelectItem value="cache">Cache Layer</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex gap-2 mt-4">
            <Button variant="outline" size="sm" className="bg-slate-950 border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-slate-100">
              <Filter className="w-4 h-4 mr-2" />
              More Filters
            </Button>
            <Button variant="outline" size="sm" className="bg-slate-950 border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-slate-100">
              <Download className="w-4 h-4 mr-2" />
              Export Logs
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Logs List */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-slate-100">Recent Logs</CardTitle>
          <CardDescription className="text-slate-400">
            Real-time system activity and events
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[600px] pr-4">
            <div className="space-y-3">
              {logs.map((log) => (
                <div
                  key={log.id}
                  className="p-4 bg-slate-950 rounded-lg border border-slate-800 hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1">{getLevelIcon(log.level)}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="outline" className={getLevelBadge(log.level)}>
                          {log.level.toUpperCase()}
                        </Badge>
                        <span className="text-xs text-slate-500">{log.timestamp}</span>
                        <Badge variant="outline" className="bg-slate-800/50 text-slate-400 border-slate-700">
                          {log.service}
                        </Badge>
                      </div>
                      <p className="text-sm text-slate-200 mb-1">{log.message}</p>
                      <p className="text-xs text-slate-500">{log.details}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
