import Sidebar from "@/components/dashboard/Sidebar";
import { Search, Plus, Filter, Download, MoreHorizontal, MessageCircle, Clock, CheckCircle2, AlertCircle, XCircle, Users, Headphones, Settings, Bell, Reply, Paperclip, ArrowUpCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ticketStats = [
  { name: "Open", count: 18, icon: AlertCircle, color: "bg-amber-500" },
  { name: "In Progress", count: 12, icon: Clock, color: "bg-sky-500" },
  { name: "Resolved", count: 156, icon: CheckCircle2, color: "bg-emerald-500" },
  { name: "Escalated", count: 5, icon: ArrowUpCircle, color: "bg-rose-500" },
];

const tickets = [
  { id: "TKT-2024-0847", subject: "Server downtime in production", customer: "TechCorp Inc.", priority: "Critical", status: "Open", category: "Infrastructure", assigned: "John M.", created: "15 min ago", messages: 3 },
  { id: "TKT-2024-0846", subject: "API rate limit exceeded", customer: "DevFlow Solutions", priority: "High", status: "In Progress", category: "API", assigned: "Sarah K.", created: "45 min ago", messages: 7 },
  { id: "TKT-2024-0845", subject: "Database connection timeout", customer: "DataStream Pro", priority: "High", status: "In Progress", category: "Database", assigned: "Mike R.", created: "1 hour ago", messages: 5 },
  { id: "TKT-2024-0844", subject: "Feature request: SSO integration", customer: "SecureAuth Ltd", priority: "Medium", status: "Open", category: "Feature", assigned: "Unassigned", created: "3 hours ago", messages: 2 },
  { id: "TKT-2024-0843", subject: "Billing discrepancy on invoice", customer: "CloudBase Corp", priority: "Medium", status: "Open", category: "Billing", assigned: "Lisa T.", created: "5 hours ago", messages: 4 },
  { id: "TKT-2024-0842", subject: "Dashboard loading slow", customer: "Analytics Plus", priority: "Low", status: "Resolved", category: "Performance", assigned: "John M.", created: "1 day ago", messages: 12 },
  { id: "TKT-2024-0841", subject: "SSL certificate renewal", customer: "WebSecure Inc", priority: "High", status: "Resolved", category: "Security", assigned: "Sarah K.", created: "2 days ago", messages: 8 },
  { id: "TKT-2024-0840", subject: "User authentication failing", customer: "AppMakers Co", priority: "Critical", status: "Escalated", category: "Authentication", assigned: "Senior Team", created: "2 days ago", messages: 15 },
];

const recentActivity = [
  { user: "John M.", action: "resolved", ticket: "TKT-2024-0842", time: "10 min ago" },
  { user: "Sarah K.", action: "commented on", ticket: "TKT-2024-0841", time: "25 min ago" },
  { user: "Mike R.", action: "assigned", ticket: "TKT-2024-0845", time: "1 hour ago" },
  { user: "Lisa T.", action: "escalated", ticket: "TKT-2024-0840", time: "2 hours ago" },
];

const statsCards = [
  { title: "Open Tickets", value: "18", change: "↓ 5", color: "bg-amber-500" },
  { title: "Avg Response", value: "12m", change: "↓ 3m", color: "bg-emerald-500" },
  { title: "Resolution Rate", value: "94%", change: "↑ 2%", color: "bg-sky-500" },
  { title: "CSAT Score", value: "4.8", change: "↑ 0.2", color: "bg-violet-500" },
];

const statusColors: Record<string, string> = {
  "Open": "bg-amber-500/20 text-amber-400 border border-amber-500/30",
  "In Progress": "bg-sky-500/20 text-sky-400 border border-sky-500/30",
  "Resolved": "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
  "Escalated": "bg-rose-500/20 text-rose-400 border border-rose-500/30",
};

const priorityColors: Record<string, string> = {
  "Critical": "text-rose-400 bg-rose-500/10",
  "High": "text-amber-400 bg-amber-500/10",
  "Medium": "text-sky-400 bg-sky-500/10",
  "Low": "text-slate-400 bg-slate-500/10",
};

const Support = () => {
  const navigate = useNavigate();
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <main className="flex-1 ml-16 overflow-auto">
        {/* Top bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-xl sm:text-2xl font-bold text-foreground">Support Center</h1>
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
                <p className="text-[10px] sm:text-xs text-white/60 mt-1 sm:mt-2">This week</p>
              </div>
            ))}
          </div>

          {/* Ticket Status Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {ticketStats.map((stat, i) => (
              <button
                key={i}
                onClick={() => setSelectedStatus(selectedStatus === stat.name ? null : stat.name)}
                className={`flex items-center gap-3 p-3 sm:p-4 rounded-2xl border transition-all ${
                  selectedStatus === stat.name
                    ? "bg-card border-primary"
                    : "bg-card border-border hover:border-muted-foreground/30"
                }`}
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${stat.color} flex items-center justify-center`}>
                  <stat.icon size={20} className="text-white" />
                </div>
                <div className="text-left">
                  <p className="text-xl sm:text-2xl font-bold text-foreground">{stat.count}</p>
                  <p className="text-xs text-muted-foreground">{stat.name}</p>
                </div>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Tickets Table */}
            <div className="lg:col-span-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="flex items-center gap-2 bg-card border border-border rounded-xl px-3 py-2 w-full sm:w-64">
                    <Search size={16} className="text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Search tickets..."
                      className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none w-full"
                    />
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap"><span className="text-foreground font-medium">{tickets.length}</span> tickets</span>
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
                    <span className="hidden sm:inline">New Ticket</span>
                  </button>
                </div>
              </div>

              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[900px]">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Ticket</th>
                        <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Priority</th>
                        <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Status</th>
                        <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Category</th>
                        <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Assigned</th>
                        <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Created</th>
                        <th className="py-3 px-4"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {tickets.map((ticket, i) => (
                        <tr key={i} className="border-b border-border last:border-0 hover:bg-accent/50 transition-colors">
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                                <Headphones size={16} className="text-primary" />
                              </div>
                              <div className="min-w-0">
                                <p className="text-sm font-medium text-foreground truncate">{ticket.subject}</p>
                                <div className="flex items-center gap-2">
                                  <p className="text-xs text-muted-foreground">{ticket.id}</p>
                                  <span className="text-xs text-muted-foreground">•</span>
                                  <p className="text-xs text-muted-foreground truncate">{ticket.customer}</p>
                                </div>
                              </div>
                              {ticket.messages > 5 && (
                                <span className="flex-shrink-0 text-xs px-1.5 py-0.5 rounded-full bg-primary/10 text-primary">
                                  {ticket.messages}
                                </span>
                              )}
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${priorityColors[ticket.priority]}`}>
                              {ticket.priority}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${statusColors[ticket.status]}`}>
                              {ticket.status}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-sm text-muted-foreground">{ticket.category}</td>
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-chart-purple flex items-center justify-center text-xs font-medium text-white">
                                {ticket.assigned.split(' ')[0][0]}
                              </div>
                              <span className="text-sm text-foreground">{ticket.assigned}</span>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-sm text-muted-foreground">{ticket.created}</td>
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

            {/* Sidebar Panel */}
            <div className="space-y-6">
              {/* Team Availability */}
              <div className="bg-card border border-border rounded-2xl p-4">
                <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Users size={16} className="text-primary" />
                  Team Availability
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-xs font-medium text-white relative">
                      JM
                      <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 border-2 border-card rounded-full" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">John M.</p>
                      <p className="text-xs text-muted-foreground">Online • 4 tickets</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center text-xs font-medium text-white relative">
                      SK
                      <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 border-2 border-card rounded-full" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">Sarah K.</p>
                      <p className="text-xs text-muted-foreground">Online • 3 tickets</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-violet-500 flex items-center justify-center text-xs font-medium text-white relative">
                      MR
                      <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-amber-400 border-2 border-card rounded-full" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">Mike R.</p>
                      <p className="text-xs text-muted-foreground">Away • 2 tickets</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-rose-500 flex items-center justify-center text-xs font-medium text-white relative">
                      LT
                      <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-slate-400 border-2 border-card rounded-full" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">Lisa T.</p>
                      <p className="text-xs text-muted-foreground">Offline • 1 ticket</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-card border border-border rounded-2xl p-4">
                <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                  <MessageCircle size={16} className="text-primary" />
                  Recent Activity
                </h3>
                <div className="space-y-3">
                  {recentActivity.map((activity, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        {activity.action === "resolved" && <CheckCircle2 size={12} className="text-emerald-400" />}
                        {activity.action === "commented on" && <Reply size={12} className="text-sky-400" />}
                        {activity.action === "assigned" && <Users size={12} className="text-violet-400" />}
                        {activity.action === "escalated" && <ArrowUpCircle size={12} className="text-rose-400" />}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-foreground">
                          <span className="font-medium">{activity.user}</span>{" "}
                          <span className="text-muted-foreground">{activity.action}</span>{" "}
                          <span className="font-medium">{activity.ticket}</span>
                        </p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-card border border-border rounded-2xl p-4">
                <h3 className="text-sm font-semibold text-foreground mb-4">Quick Actions</h3>
                <div className="space-y-2">
                  <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-accent transition-colors text-left">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                      <CheckCircle2 size={16} className="text-emerald-400" />
                    </div>
                    <span className="text-sm text-foreground">Mark all as read</span>
                  </button>
                  <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-accent transition-colors text-left">
                    <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center">
                      <Paperclip size={16} className="text-sky-400" />
                    </div>
                    <span className="text-sm text-foreground">View attachments</span>
                  </button>
                  <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-accent transition-colors text-left">
                    <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
                      <Clock size={16} className="text-violet-400" />
                    </div>
                    <span className="text-sm text-foreground">View SLA metrics</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Support;
