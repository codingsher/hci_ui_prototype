import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Server, Activity, HardDrive, Cpu } from "lucide-react";
import { Progress } from "./ui/progress";

export function ServicesPage() {
  const services = [
    {
      id: 1,
      name: "API Gateway",
      type: "Gateway",
      status: "healthy",
      uptime: "99.99%",
      cpu: 45,
      memory: 62,
      requests: "15.2K/min",
      version: "v2.4.1"
    },
    {
      id: 2,
      name: "Authentication Service",
      type: "Microservice",
      status: "healthy",
      uptime: "99.97%",
      cpu: 32,
      memory: 48,
      requests: "8.5K/min",
      version: "v1.8.3"
    },
    {
      id: 3,
      name: "Database Primary",
      type: "Database",
      status: "warning",
      uptime: "99.95%",
      cpu: 78,
      memory: 85,
      requests: "22.1K/min",
      version: "PostgreSQL 14"
    },
    {
      id: 4,
      name: "Cache Layer (Redis)",
      type: "Cache",
      status: "healthy",
      uptime: "100%",
      cpu: 28,
      memory: 38,
      requests: "45.8K/min",
      version: "v7.0.5"
    },
    {
      id: 5,
      name: "Message Queue",
      type: "Queue",
      status: "healthy",
      uptime: "99.98%",
      cpu: 35,
      memory: 52,
      requests: "12.3K/min",
      version: "RabbitMQ 3.11"
    },
    {
      id: 6,
      name: "Analytics Engine",
      type: "Processing",
      status: "degraded",
      uptime: "98.85%",
      cpu: 92,
      memory: 88,
      requests: "5.2K/min",
      version: "v3.1.0"
    }
  ];

  const getStatusBadge = (status: string) => {
    const styles = {
      healthy: "bg-green-500/10 text-green-400 border-green-500/20",
      warning: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
      degraded: "bg-orange-500/10 text-orange-400 border-orange-500/20"
    };
    return styles[status as keyof typeof styles] || styles.healthy;
  };

  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-slate-900 border-slate-800">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardDescription className="text-slate-400">Total Services</CardDescription>
              <Server className="w-4 h-4 text-blue-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-slate-100">18</div>
            <p className="text-xs text-green-400 mt-1">+2 this week</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardDescription className="text-slate-400">Active</CardDescription>
              <Activity className="w-4 h-4 text-green-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-slate-100">16</div>
            <p className="text-xs text-slate-400 mt-1">88.9% healthy</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardDescription className="text-slate-400">Avg CPU Usage</CardDescription>
              <Cpu className="w-4 h-4 text-cyan-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-slate-100">52%</div>
            <p className="text-xs text-slate-400 mt-1">Within normal range</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-slate-800">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardDescription className="text-slate-400">Avg Memory</CardDescription>
              <HardDrive className="w-4 h-4 text-purple-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-slate-100">62%</div>
            <p className="text-xs text-yellow-400 mt-1">+8% from yesterday</p>
          </CardContent>
        </Card>
      </div>

      {/* Services Detail Table */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-slate-100">All Services</CardTitle>
          <CardDescription className="text-slate-400">
            Detailed view of all backend services and their current status
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-slate-800 hover:bg-slate-800/50">
                <TableHead className="text-slate-400">Service</TableHead>
                <TableHead className="text-slate-400">Type</TableHead>
                <TableHead className="text-slate-400">Status</TableHead>
                <TableHead className="text-slate-400">Uptime</TableHead>
                <TableHead className="text-slate-400">CPU</TableHead>
                <TableHead className="text-slate-400">Memory</TableHead>
                <TableHead className="text-slate-400">Requests</TableHead>
                <TableHead className="text-slate-400">Version</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {services.map((service) => (
                <TableRow key={service.id} className="border-slate-800 hover:bg-slate-800/50">
                  <TableCell className="text-slate-200">{service.name}</TableCell>
                  <TableCell className="text-slate-400">{service.type}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={getStatusBadge(service.status)}>
                      {service.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-slate-300">{service.uptime}</TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-400">{service.cpu}%</span>
                      </div>
                      <Progress value={service.cpu} className="h-1.5" />
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-400">{service.memory}%</span>
                      </div>
                      <Progress value={service.memory} className="h-1.5" />
                    </div>
                  </TableCell>
                  <TableCell className="text-slate-300">{service.requests}</TableCell>
                  <TableCell className="text-slate-400 text-xs">{service.version}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
