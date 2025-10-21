import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const services = [
  {
    name: "API Gateway",
    load: 72,
    prediction: "Normal",
    predictionVariant: "default" as const,
    action: "None",
    actionVariant: "outline" as const,
    uptime: 99.98,
  },
  {
    name: "Auth Service",
    load: 45,
    prediction: "Normal",
    predictionVariant: "default" as const,
    action: "None",
    actionVariant: "outline" as const,
    uptime: 99.99,
  },
  {
    name: "Database Cluster",
    load: 88,
    prediction: "Overload Risk",
    predictionVariant: "destructive" as const,
    action: "Rate Limiting",
    actionVariant: "secondary" as const,
    uptime: 99.95,
  },
  {
    name: "Cache Layer",
    load: 34,
    prediction: "Normal",
    predictionVariant: "default" as const,
    action: "None",
    actionVariant: "outline" as const,
    uptime: 100.0,
  },
  {
    name: "Payment Service",
    load: 91,
    prediction: "High Load",
    predictionVariant: "destructive" as const,
    action: "Load Shifted",
    actionVariant: "secondary" as const,
    uptime: 99.92,
  },
  {
    name: "Analytics Engine",
    load: 56,
    prediction: "Normal",
    predictionVariant: "default" as const,
    action: "None",
    actionVariant: "outline" as const,
    uptime: 99.97,
  },
];

export function ServicesTable() {
  return (
    <Card className="bg-slate-900 border-slate-800">
      <CardHeader>
        <CardTitle className="text-slate-100">Backend Services Status</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="border-slate-800 hover:bg-transparent">
              <TableHead className="text-slate-400">Service Name</TableHead>
              <TableHead className="text-slate-400">Current Load</TableHead>
              <TableHead className="text-slate-400">AI Prediction</TableHead>
              <TableHead className="text-slate-400">AI Action</TableHead>
              <TableHead className="text-slate-400 text-right">Uptime %</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {services.map((service) => (
              <TableRow key={service.name} className="border-slate-800 hover:bg-slate-800/50">
                <TableCell className="text-slate-200">{service.name}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Progress
                      value={service.load}
                      className="w-24 h-2 bg-slate-800"
                      indicatorClassName={
                        service.load > 85
                          ? "bg-red-500"
                          : service.load > 70
                          ? "bg-orange-500"
                          : "bg-green-500"
                      }
                    />
                    <span className="text-sm text-slate-300">{service.load}%</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={service.predictionVariant}
                    className={
                      service.predictionVariant === "destructive"
                        ? "bg-red-500/10 text-red-400 border-red-500/20"
                        : "bg-green-500/10 text-green-400 border-green-500/20"
                    }
                  >
                    {service.prediction}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={service.actionVariant}
                    className={
                      service.actionVariant === "secondary"
                        ? "bg-blue-500/10 text-blue-400 border-blue-500/20"
                        : "bg-slate-800 text-slate-500 border-slate-700"
                    }
                  >
                    {service.action}
                  </Badge>
                </TableCell>
                <TableCell className="text-right text-slate-200">{service.uptime}%</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
