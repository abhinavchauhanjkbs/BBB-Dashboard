import Sidebar from "@/components/dashboard/Sidebar";
import { Search, Plus, Filter, Download, MoreHorizontal, Server, Cloud, Database, HardDrive, Cpu, Activity, AlertTriangle, CheckCircle2, Settings, Bell, Wifi, WifiOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const resourceTypes = [
  { icon: Server, name: "Servers", count: 24, online: 22, offline: 2, color: "bg-emerald-500" },
  { icon: Cloud, name: "Cloud", count: 18, online: 18, offline: 0, color: "bg-sky-500" },
  { icon: Database, name: "Databases", count: 12, online: 11, offline: 1, color: "bg-violet-500" },
  { icon: HardDrive, name: "Storage", count: 8, online: 8, offline: 0, color: "bg-amber-500" },
];

const servers = [
  { id: "SRV-001", name: "Web Server Cluster A", type: "Production", region: "US-East", cpu: 45, memory: 62, storage: 78, status: "Online", uptime: "45d 12h" },
  { id: "SRV-002", name: "Database Primary", type: "Production", region: "US-East", cpu: 72, memory: 85, storage: 65, status: "Online", uptime: "89d 4h" },
  { id: "SRV-003", name: "API Gateway", type: "Production", region: "US-West", cpu: 38, memory: 45, storage: 32, status: "Online", uptime: "23d 8h" },
  { id: "SRV-004", name: "Cache Redis Cluster", type: "Production", region: "EU-West", cpu: 55, memory: 90, storage: 15, status: "Warning", uptime: "12d 3h" },
  { id: "SRV-005", name: "Staging Environment", type: "Staging", region: "US-East", cpu: 12, memory: 25, storage: 40, status: "Online", uptime: "5d 18h" },
  { id: "SRV-006", name: "Backup Server", type: "Backup", region: "US-West", cpu: 8, memory: 15, storage: 92, status: "Offline", uptime: "-" },
  { id: "SRV-007", name: "Analytics Processing", type: "Processing", region: "EU-West", cpu: 88, memory: 76, storage: 55, status: "Warning", uptime: "3d 22h" },
  { id: "SRV-008", name: "Dev Server", type: "Development", region: "US-East", cpu: 25, memory: 40, storage: 35, status: "Online", uptime: "8d 14h" },
];

const alerts = [
  { id: "ALT-001", severity: "Critical", message: "Backup Server Offline", resource: "SRV-006", time: "5 min ago" },
  { id: "ALT-002", severity: "Warning", message: "High Memory Usage on Redis", resource: "SRV-004", time: "12 min ago" },
  { id: "ALT-003", severity: "Warning", message: "CPU Usage > 85% on Analytics", resource: "SRV-007", time: "28 min ago" },
];

const statsCards = [
  { title: "Total Resources", value: "62", change: "↑ 2", color: "bg-sky-500" },
  { title: "Online", value: "59", change: "95% uptime", color: "bg-emerald-500" },
  { title: "Active Alerts", value: "3", change: "↓ 2", color: "bg-amber-500" },
  { title: "Avg CPU Usage", value: "42%", change: "Normal", color: "bg-violet-500" },
];

const statusColors: Record<string, string> = {
  "Online": "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
  "Warning": "bg-amber-500/20 text-amber-400 border border-amber-500/30",
  "Offline": "bg-rose-500/20 text-rose-400 border border-rose-500/30",
};

const alertColors: Record<string, string> = {
  "Critical": "bg-rose-500",
  "Warning": "bg-amber-500",
  "Info": "bg-sky-500",
};

const Infrastructure = () => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState<string | null>(null);

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <main className="flex-1 ml-16 overflow-auto">
        {/* Top bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-xl sm:text-2xl font-bold text-foreground">Infrastructure</h1>
          <div className="flex items-center gap-2 sm:gap-3">
            <button onClick={() => navigate("/settings")} className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-muted-foreground hover:bg-accent transition-colors">
              <Settings size={18} />
            </button>
            <button className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-muted-foreground hover:bg-accent transition-colors">
              <Bell size={18} />
            </button>
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-primary to-chart-purple flex items-center justify-center text-sm font-medium text-white">
              A
            </div>
          </div>
        </div>

        <div className="px-4 sm:px-6 lg:px-8 pb-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6">
            {statsCards.map((card, i) => (
              <div key={i} className={`rounded-2xl p-3 sm:p-4 ${card.color}`}>
                <p className="text-xs sm:text-sm text-white/80 mb-2 sm:mb-3">{card.title}</p>
                <div className="flex items-end justify-between">
                  <span className="text-2xl sm:text-3xl font-bold text-white">{card.value}</span>
                  <span className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 rounded-full bg-white/20 text-white">{card.change}</span>
                </div>
                <p className="text-[10px] sm:text-xs text-white/60 mt-1 sm:mt-2">Real-time</p>
              </div>
            ))}
          </div>

          {/* Resource Type Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {resourceTypes.map((resource, i) => (
              <button
                key={i}
                onClick={() => setSelectedType(selectedType === resource.name ? null : resource.name)}
                className={`flex items-center gap-3 p-3 sm:p-4 rounded-2xl border transition-all ${
                  selectedType === resource.name
                    ? "bg-card border-primary"
                    : "bg-card border-border hover:border-muted-foreground/30"
                }`}
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${resource.color} flex items-center justify-center`}>
                  <resource.icon size={20} className="text-white" />
                </div>
                <div className="text-left flex-1">
                  <p className="text-xs text-muted-foreground">{resource.name}</p>
                  <div className="flex items-center gap-2">
                    <p className="text-xl sm:text-2xl font-bold text-foreground">{resource.count}</p>
                    <div className="flex items-center gap-1">
                      <Wifi size={10} className="text-emerald-400" />
                      <span className="text-xs text-emerald-400">{resource.online}</span>
                    </div>
                    {resource.offline > 0 && (
                      <div className="flex items-center gap-1">
                        <WifiOff size={10} className="text-rose-400" />
                        <span className="text-xs text-rose-400">{resource.offline}</span>
                      </div>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Servers Table */}
            <div className="lg:col-span-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="flex items-center gap-2 bg-card border border-border rounded-xl px-3 py-2 w-full sm:w-64">
                    <Search size={16} className="text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Search resources..."
                      className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none w-full"
                    />
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap"><span className="text-foreground font-medium">{servers.length}</span> servers</span>
                </div>

                <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                  <button className="flex items-center gap-1.5 sm:gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                    <Download size={16} />
                    <span className="hidden sm:inline">Export</span>
                  </button>
                  <button className="flex items-center gap-1.5 sm:gap-2 bg-card border border-border rounded-xl px-2 sm:px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                    <Filter size={14} />
                    <span className="hidden sm:inline">Filter</span>
                  </button>
                  <button className="flex items-center gap-1.5 sm:gap-2 bg-primary text-primary-foreground rounded-xl px-3 sm:px-4 py-2 text-sm font-medium hover:bg-primary/90 transition-colors">
                    <Plus size={16} />
                    <span className="hidden sm:inline">Add Server</span>
                  </button>
                </div>
              </div>

              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[800px]">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Server</th>
                        <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Type</th>
                        <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Region</th>
                        <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">CPU</th>
                        <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Memory</th>
                        <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Status</th>
                        <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Uptime</th>
                        <th className="py-3 px-4"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {servers.map((server, i) => (
                        <tr key={i} className="border-b border-border last:border-0 hover:bg-accent/50 transition-colors">
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                                <Server size={16} className="text-primary" />
                              </div>
                              <div>
                                <p className="text-sm font-medium text-foreground">{server.name}</p>
                                <p className="text-xs text-muted-foreground">{server.id}</p>
                              </div>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-sm text-muted-foreground">{server.type}</td>
                          <td className="py-3 px-4 text-sm text-muted-foreground">{server.region}</td>
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-2">
                              <div className="w-16 h-1.5 bg-muted rounded-full overflow-hidden">
                                <div className={`h-full rounded-full ${server.cpu > 80 ? 'bg-rose-500' : server.cpu > 60 ? 'bg-amber-500' : 'bg-emerald-500'}`} style={{ width: `${server.cpu}%` }} />
                              </div>
                              <span className="text-xs text-muted-foreground">{server.cpu}%</span>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-2">
                              <div className="w-16 h-1.5 bg-muted rounded-full overflow-hidden">
                                <div className={`h-full rounded-full ${server.memory > 85 ? 'bg-rose-500' : server.memory > 70 ? 'bg-amber-500' : 'bg-emerald-500'}`} style={{ width: `${server.memory}%` }} />
                              </div>
                              <span className="text-xs text-muted-foreground">{server.memory}%</span>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${statusColors[server.status]}`}>
                              {server.status === "Online" && <Wifi size={10} />}
                              {server.status === "Offline" && <WifiOff size={10} />}
                              {server.status === "Warning" && <AlertTriangle size={10} />}
                              {server.status}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-sm text-muted-foreground">{server.uptime}</td>
                          <td className="py-3 px-4">
                            <button className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent transition-colors">
                              <MoreHorizontal size={16} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Alerts Panel */}
            <div className="bg-card border border-border rounded-2xl p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <Activity size={16} className="text-primary" />
                  Active Alerts
                </h3>
                <button className="text-xs text-primary hover:underline">View All</button>
              </div>
              <div className="space-y-3">
                {alerts.map((alert, i) => (
                  <div key={i} className="flex gap-3 p-3 rounded-xl bg-accent/50 hover:bg-accent transition-colors">
                    <div className={`w-2 h-full min-h-[40px] rounded-full ${alertColors[alert.severity]}`} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full text-white ${alertColors[alert.severity]}`}>
                          {alert.severity}
                        </span>
                        <span className="text-xs text-muted-foreground">{alert.time}</span>
                      </div>
                      <p className="text-sm font-medium text-foreground">{alert.message}</p>
                      <p className="text-xs text-muted-foreground">{alert.resource}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-border">
                <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Cpu size={16} className="text-primary" />
                  System Health
                </h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-muted-foreground">Overall Health</span>
                      <span className="text-emerald-400">98%</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full" style={{ width: "98%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-muted-foreground">Response Time</span>
                      <span className="text-sky-400">45ms avg</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-sky-500 rounded-full" style={{ width: "92%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-muted-foreground">Error Rate</span>
                      <span className="text-amber-400">0.3%</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500 rounded-full" style={{ width: "3%" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Infrastructure;
