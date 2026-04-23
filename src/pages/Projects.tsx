import Sidebar from "@/components/dashboard/Sidebar";
import { Search, Plus, Filter, Download, MoreHorizontal, Calendar, Users, CheckCircle2, Clock, AlertCircle, Settings, Bell, Folder, GitBranch, Bug, FileCode } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const projectStatuses = [
  { name: "Planning", count: 5, color: "bg-slate-500", icon: Folder },
  { name: "In Progress", count: 12, color: "bg-amber-500", icon: Clock },
  { name: "In Review", count: 8, color: "bg-violet-500", icon: FileCode },
  { name: "Completed", count: 24, color: "bg-emerald-500", icon: CheckCircle2 },
];

const projects = [
  { id: "PRJ-2024-001", name: "Enterprise CRM Platform", client: "GlobalCorp", status: "In Progress", progress: 65, team: 8, deadline: "Dec 15, 2024", priority: "High", bugs: 12 },
  { id: "PRJ-2024-002", name: "Mobile Banking App", client: "FinanceFirst Bank", status: "In Review", progress: 90, team: 6, deadline: "Nov 30, 2024", priority: "Critical", bugs: 3 },
  { id: "PRJ-2024-003", name: "E-commerce API Gateway", client: "ShopStream", status: "In Progress", progress: 45, team: 5, deadline: "Jan 20, 2025", priority: "Medium", bugs: 8 },
  { id: "PRJ-2024-004", name: "AI Analytics Dashboard", client: "DataInsights", status: "Planning", progress: 15, team: 4, deadline: "Feb 28, 2025", priority: "High", bugs: 0 },
  { id: "PRJ-2024-005", name: "Healthcare Portal", client: "MedCare Plus", status: "In Progress", progress: 78, team: 10, deadline: "Dec 30, 2024", priority: "Critical", bugs: 5 },
  { id: "PRJ-2024-006", name: "Inventory Management System", client: "LogiTech", status: "Completed", progress: 100, team: 6, deadline: "Oct 15, 2024", priority: "Medium", bugs: 0 },
  { id: "PRJ-2024-007", name: "Blockchain Payment Solution", client: "CryptoPay", status: "In Review", progress: 85, team: 7, deadline: "Dec 1, 2024", priority: "High", bugs: 7 },
  { id: "PRJ-2024-008", name: "IoT Device Management", client: "SmartHome Inc", status: "Planning", progress: 10, team: 4, deadline: "Mar 15, 2025", priority: "Low", bugs: 0 },
];

const statsCards = [
  { title: "Active Projects", value: "29", change: "↑ 4.2%", color: "bg-violet-500" },
  { title: "Completed This Month", value: "8", change: "↑ 12.5%", color: "bg-emerald-500" },
  { title: "Avg Progress", value: "68%", change: "↑ 5.3%", color: "bg-sky-500" },
  { title: "Open Bugs", value: "35", change: "↓ 8.1%", color: "bg-rose-500" },
];

const statusColors: Record<string, string> = {
  "Planning": "bg-slate-500/20 text-slate-400 border border-slate-500/30",
  "In Progress": "bg-amber-500/20 text-amber-400 border border-amber-500/30",
  "In Review": "bg-violet-500/20 text-violet-400 border border-violet-500/30",
  "Completed": "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
};

const priorityColors: Record<string, string> = {
  "Critical": "text-rose-400",
  "High": "text-amber-400",
  "Medium": "text-sky-400",
  "Low": "text-slate-400",
};

const Projects = () => {
  const navigate = useNavigate();
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <main className="flex-1 ml-16 overflow-auto">
        {/* Top bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-xl sm:text-2xl font-bold text-foreground">Projects</h1>
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
                <p className="text-[10px] sm:text-xs text-white/60 mt-1 sm:mt-2">Than last month</p>
              </div>
            ))}
          </div>

          {/* Project Status Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {projectStatuses.map((status, i) => (
              <button
                key={i}
                onClick={() => setSelectedStatus(selectedStatus === status.name ? null : status.name)}
                className={`flex items-center gap-3 p-3 sm:p-4 rounded-2xl border transition-all ${
                  selectedStatus === status.name
                    ? "bg-card border-primary"
                    : "bg-card border-border hover:border-muted-foreground/30"
                }`}
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${status.color} flex items-center justify-center`}>
                  <status.icon size={20} className="text-white" />
                </div>
                <div className="text-left">
                  <p className="text-xl sm:text-2xl font-bold text-foreground">{status.count}</p>
                  <p className="text-xs text-muted-foreground">{status.name}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Search & Actions Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex items-center gap-2 bg-card border border-border rounded-xl px-3 py-2 w-full sm:w-64">
                <Search size={16} className="text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none w-full"
                />
              </div>
              <span className="text-sm text-muted-foreground whitespace-nowrap"><span className="text-foreground font-medium">{projects.length}</span> projects</span>
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
                <span className="hidden sm:inline">New Project</span>
              </button>
            </div>
          </div>

          {/* Projects Table */}
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px]">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Project</th>
                    <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Status</th>
                    <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Progress</th>
                    <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Team</th>
                    <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Deadline</th>
                    <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Priority</th>
                    <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Bugs</th>
                    <th className="py-3 px-4"></th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((project, i) => (
                    <tr key={i} className="border-b border-border last:border-0 hover:bg-accent/50 transition-colors">
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                            <Folder size={16} className="text-primary" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-foreground">{project.name}</p>
                            <p className="text-xs text-muted-foreground">{project.id} • {project.client}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${statusColors[project.status]}`}>
                          {project.status}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="w-24 sm:w-32">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs text-muted-foreground">{project.progress}%</span>
                          </div>
                          <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-primary rounded-full" style={{ width: `${project.progress}%` }} />
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-1.5">
                          <Users size={14} className="text-muted-foreground" />
                          <span className="text-sm text-foreground">{project.team}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-1.5">
                          <Calendar size={14} className="text-muted-foreground" />
                          <span className="text-sm text-foreground">{project.deadline}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className={`text-sm font-medium ${priorityColors[project.priority]}`}>
                          {project.priority}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-1.5">
                          <Bug size={14} className={project.bugs > 5 ? "text-rose-400" : "text-muted-foreground"} />
                          <span className={`text-sm ${project.bugs > 5 ? "text-rose-400" : "text-foreground"}`}>{project.bugs}</span>
                        </div>
                      </td>
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
      </main>
    </div>
  );
};

export default Projects;
