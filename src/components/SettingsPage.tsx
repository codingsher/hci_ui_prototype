import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Switch } from "./ui/switch";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Separator } from "./ui/separator";
import { Bell, Shield, Database, Mail, Palette, Globe } from "lucide-react";
import { Slider } from "./ui/slider";

export function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-slate-100 mb-2">Settings</h2>
        <p className="text-sm text-slate-400">
          Configure your SmartStack AI dashboard and system preferences
        </p>
      </div>

      {/* General Settings */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-blue-400" />
            <CardTitle className="text-slate-100">General</CardTitle>
          </div>
          <CardDescription className="text-slate-400">
            Basic system configuration
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="system-name" className="text-slate-300">System Name</Label>
              <Input
                id="system-name"
                defaultValue="SmartStack AI - Production"
                className="bg-slate-950 border-slate-700 text-slate-100"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="refresh-rate" className="text-slate-300">Dashboard Refresh Rate</Label>
              <Select defaultValue="5">
                <SelectTrigger className="bg-slate-950 border-slate-700 text-slate-100">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-slate-900 border-slate-700">
                  <SelectItem value="1">1 second</SelectItem>
                  <SelectItem value="5">5 seconds</SelectItem>
                  <SelectItem value="10">10 seconds</SelectItem>
                  <SelectItem value="30">30 seconds</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="timezone" className="text-slate-300">Timezone</Label>
              <Select defaultValue="utc">
                <SelectTrigger className="bg-slate-950 border-slate-700 text-slate-100">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-slate-900 border-slate-700">
                  <SelectItem value="utc">UTC</SelectItem>
                  <SelectItem value="est">Eastern Time (EST)</SelectItem>
                  <SelectItem value="pst">Pacific Time (PST)</SelectItem>
                  <SelectItem value="cet">Central European Time (CET)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Notifications */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Bell className="w-5 h-5 text-yellow-400" />
            <CardTitle className="text-slate-100">Notifications</CardTitle>
          </div>
          <CardDescription className="text-slate-400">
            Configure alert and notification preferences
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-slate-300">Critical Alerts</Label>
              <p className="text-sm text-slate-500">Receive notifications for critical system events</p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator className="bg-slate-800" />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-slate-300">Warning Notifications</Label>
              <p className="text-sm text-slate-500">Get notified about warnings and degraded performance</p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator className="bg-slate-800" />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-slate-300">Info Messages</Label>
              <p className="text-sm text-slate-500">Display informational messages</p>
            </div>
            <Switch />
          </div>
          <Separator className="bg-slate-800" />
          <div className="grid gap-2">
            <Label htmlFor="email" className="text-slate-300">
              <Mail className="w-4 h-4 inline mr-2" />
              Alert Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="admin@smartstack.ai"
              className="bg-slate-950 border-slate-700 text-slate-100"
            />
          </div>
        </CardContent>
      </Card>

      {/* AI Configuration */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Palette className="w-5 h-5 text-purple-400" />
            <CardTitle className="text-slate-100">AI Settings</CardTitle>
          </div>
          <CardDescription className="text-slate-400">
            Configure AI decision-making parameters
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-slate-300">Enable AI Automation</Label>
              <p className="text-sm text-slate-500">Allow AI to make automated decisions</p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator className="bg-slate-800" />
          <div className="grid gap-3">
            <Label className="text-slate-300">Minimum Confidence Threshold</Label>
            <div className="flex items-center gap-4">
              <Slider
                defaultValue={[85]}
                max={100}
                step={5}
                className="flex-1"
              />
              <span className="text-sm text-slate-400 w-12 text-right">85%</span>
            </div>
            <p className="text-sm text-slate-500">AI decisions below this confidence level require manual approval</p>
          </div>
          <Separator className="bg-slate-800" />
          <div className="grid gap-3">
            <Label className="text-slate-300">Decision Frequency</Label>
            <div className="flex items-center gap-4">
              <Slider
                defaultValue={[30]}
                max={120}
                step={10}
                className="flex-1"
              />
              <span className="text-sm text-slate-400 w-12 text-right">30s</span>
            </div>
            <p className="text-sm text-slate-500">Minimum time between automated decisions</p>
          </div>
        </CardContent>
      </Card>

      {/* Security */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-green-400" />
            <CardTitle className="text-slate-100">Security</CardTitle>
          </div>
          <CardDescription className="text-slate-400">
            Security and access control settings
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-slate-300">Two-Factor Authentication</Label>
              <p className="text-sm text-slate-500">Require 2FA for admin access</p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator className="bg-slate-800" />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-slate-300">API Key Rotation</Label>
              <p className="text-sm text-slate-500">Automatically rotate API keys every 30 days</p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator className="bg-slate-800" />
          <div className="grid gap-2">
            <Label className="text-slate-300">Session Timeout (minutes)</Label>
            <Select defaultValue="30">
              <SelectTrigger className="bg-slate-950 border-slate-700 text-slate-100">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-slate-900 border-slate-700">
                <SelectItem value="15">15 minutes</SelectItem>
                <SelectItem value="30">30 minutes</SelectItem>
                <SelectItem value="60">60 minutes</SelectItem>
                <SelectItem value="never">Never expire</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Database Settings */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Database className="w-5 h-5 text-cyan-400" />
            <CardTitle className="text-slate-100">Data Retention</CardTitle>
          </div>
          <CardDescription className="text-slate-400">
            Configure data storage and retention policies
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-2">
            <Label className="text-slate-300">Log Retention Period</Label>
            <Select defaultValue="30">
              <SelectTrigger className="bg-slate-950 border-slate-700 text-slate-100">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-slate-900 border-slate-700">
                <SelectItem value="7">7 days</SelectItem>
                <SelectItem value="30">30 days</SelectItem>
                <SelectItem value="90">90 days</SelectItem>
                <SelectItem value="365">1 year</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Separator className="bg-slate-800" />
          <div className="grid gap-2">
            <Label className="text-slate-300">Metrics Retention Period</Label>
            <Select defaultValue="90">
              <SelectTrigger className="bg-slate-950 border-slate-700 text-slate-100">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-slate-900 border-slate-700">
                <SelectItem value="30">30 days</SelectItem>
                <SelectItem value="90">90 days</SelectItem>
                <SelectItem value="180">180 days</SelectItem>
                <SelectItem value="365">1 year</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          Save Changes
        </Button>
        <Button variant="outline" className="bg-slate-950 border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-slate-100">
          Reset to Defaults
        </Button>
      </div>
    </div>
  );
}
