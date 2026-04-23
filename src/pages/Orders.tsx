import Sidebar from "@/components/dashboard/Sidebar";
import { Search, Filter, Download, Plus, ChevronLeft, ChevronRight, MoreHorizontal, Settings, Bell, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const statusColors: Record<string, string> = {
  "on way": "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
  "delivered": "bg-blue-500/20 text-blue-400 border border-blue-500/30",
  "cancel": "bg-red-500/20 text-red-400 border border-red-500/30",
};

const orders = [
  { id: "#634839", customer: "Kris Poyer", phone: "099 758-9012", category: "Laptops", price: "$ 1302.38", date: "26.07.2024", payment: "PayPal", status: "on way" },
  { id: "#634839", customer: "Kris Poyer", phone: "099 758-9012", category: "Laptops", price: "$ 1302.38", date: "26.07.2024", payment: "PayPal", status: "delivered" },
  { id: "#634839", customer: "Kris Poyer", phone: "099 758-9012", category: "Laptops", price: "$ 1302.38", date: "26.07.2024", payment: "PayPal", status: "cancel" },
  { id: "#634839", customer: "Kris Poyer", phone: "099 758-9012", category: "Laptops", price: "$ 1302.38", date: "26.07.2024", payment: "PayPal", status: "on way" },
  { id: "#634839", customer: "Kris Poyer", phone: "099 758-9012", category: "Laptops", price: "$ 1302.38", date: "26.07.2024", payment: "PayPal", status: "delivered" },
  { id: "#634839", customer: "Kris Poyer", phone: "099 758-9012", category: "Laptops", price: "$ 1302.38", date: "26.07.2024", payment: "PayPal", status: "delivered" },
  { id: "#634839", customer: "Kris Poyer", phone: "099 758-9012", category: "Laptops", price: "$ 1302.38", date: "26.07.2024", payment: "PayPal", status: "delivered" },
];

const statsCards = [
  { title: "New orders", value: "12", change: "↑ 2.6%", bg: "bg-emerald-500", borderColor: "border-emerald-500" },
  { title: "Await accepting orders", value: "20", change: "↑ 2.6%", bg: "bg-amber-500", borderColor: "border-amber-500" },
  { title: "On way orders", value: "57", change: "↑ 0.6%", bg: "bg-purple-500", borderColor: "border-purple-500" },
  { title: "Delivered orders", value: "98", change: "↑ 2.6%", bg: "bg-sky-500", borderColor: "border-sky-500" },
];

const Orders = () => {
  const [filters] = useState(["Laptops", "PayPal"]);
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <main className="flex-1 ml-16 overflow-auto">
        {/* Top bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-xl sm:text-2xl font-bold text-foreground">Order list</h1>
          <div className="flex items-center gap-2 sm:gap-3">
            <button onClick={() => navigate("/settings")} className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-muted-foreground hover:bg-accent transition-colors">
              <Settings size={18} />
            </button>
            <button className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-muted-foreground hover:bg-accent transition-colors">
              <Bell size={18} />
            </button>
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-purple-500 flex items-center justify-center text-sm font-medium text-white">
              A
            </div>
          </div>
        </div>

        <div className="px-4 sm:px-6 lg:px-8 pb-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6">
            {statsCards.map((card, i) => (
              <div key={i} className={`rounded-2xl p-3 sm:p-4 ${card.bg} border ${card.borderColor}`}>
                <p className="text-xs sm:text-sm text-white/80 mb-2 sm:mb-3">{card.title}</p>
                <div className="flex items-end justify-between">
                  <span className="text-2xl sm:text-3xl font-bold text-white">{card.value}</span>
                  <span className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 rounded-full bg-white/20 text-white">{card.change}</span>
                </div>
                <p className="text-[10px] sm:text-xs text-white/60 mt-1 sm:mt-2">Than last week</p>
              </div>
            ))}
          </div>

          {/* Search & Actions Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex items-center gap-2 bg-card border border-border rounded-xl px-3 py-2 w-full sm:w-48">
                <Search size={16} className="text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none w-full"
                />
              </div>
              <span className="text-sm text-muted-foreground whitespace-nowrap"><span className="text-foreground font-medium">180</span> orders</span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              <button className="flex items-center gap-1.5 sm:gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Download size={16} />
                <span className="hidden sm:inline">Export</span>
              </button>
              <button className="flex items-center gap-1.5 sm:gap-2 bg-card border border-border rounded-xl px-2 sm:px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Filter size={14} />
                <span className="hidden sm:inline">Sort: default</span>
              </button>
              <button className="flex items-center gap-1.5 sm:gap-2 bg-primary text-primary-foreground rounded-xl px-3 sm:px-4 py-2 text-sm font-medium hover:bg-primary/90 transition-colors">
                <Plus size={16} />
                <span className="hidden sm:inline">Add order</span>
              </button>
            </div>
          </div>

          {/* Filter Tags */}
          <div className="flex items-center gap-2 sm:gap-3 mb-4 flex-wrap">
            <Filter size={16} className="text-muted-foreground" />
            {filters.map((f) => (
              <span key={f} className="flex items-center gap-1.5 bg-card border border-border rounded-full px-3 py-1 text-xs text-foreground">
                {f}
                <X size={12} className="text-muted-foreground cursor-pointer hover:text-foreground" />
              </span>
            ))}
            <span className="text-xs text-muted-foreground cursor-pointer hover:text-foreground">Clear all (2)</span>
            <div className="ml-auto flex items-center gap-2 text-sm text-muted-foreground">
              <span className="hidden sm:inline">1 of 18</span>
              <button className="w-7 h-7 rounded-lg flex items-center justify-center bg-card border border-border hover:bg-accent transition-colors">
                <ChevronLeft size={14} />
              </button>
              <button className="w-7 h-7 rounded-lg flex items-center justify-center bg-card border border-border hover:bg-accent transition-colors">
                <ChevronRight size={14} />
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="bg-card border border-border rounded-2xl overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-3 sm:p-4 w-10">
                    <input type="checkbox" className="w-4 h-4 rounded border-border bg-transparent accent-primary" />
                  </th>
                  <th className="p-3 sm:p-4 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Order Number</th>
                  <th className="p-3 sm:p-4 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Customer</th>
                  <th className="p-3 sm:p-4 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider hidden md:table-cell">Category</th>
                  <th className="p-3 sm:p-4 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Price</th>
                  <th className="p-3 sm:p-4 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider hidden lg:table-cell">Date</th>
                  <th className="p-3 sm:p-4 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider hidden lg:table-cell">Payment</th>
                  <th className="p-3 sm:p-4 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Status</th>
                  <th className="p-3 sm:p-4 w-10"></th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, i) => (
                  <tr key={i} className="border-b border-border last:border-b-0 hover:bg-accent/30 transition-colors">
                    <td className="p-3 sm:p-4">
                      <input type="checkbox" className="w-4 h-4 rounded border-border bg-transparent accent-primary" />
                    </td>
                    <td className="p-3 sm:p-4 text-sm text-foreground font-medium">{order.id}</td>
                    <td className="p-3 sm:p-4">
                      <div className="text-sm text-foreground">{order.customer}</div>
                      <div className="text-xs text-muted-foreground">{order.phone}</div>
                    </td>
                    <td className="p-3 sm:p-4 text-sm text-muted-foreground hidden md:table-cell">{order.category}</td>
                    <td className="p-3 sm:p-4 text-sm text-foreground">{order.price}</td>
                    <td className="p-3 sm:p-4 text-sm text-muted-foreground hidden lg:table-cell">{order.date}</td>
                    <td className="p-3 sm:p-4 text-sm text-muted-foreground hidden lg:table-cell">{order.payment}</td>
                    <td className="p-3 sm:p-4">
                      <span className={`text-xs px-2 sm:px-3 py-1 rounded-full ${statusColors[order.status]}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="p-3 sm:p-4">
                      <button className="text-muted-foreground hover:text-foreground">
                        <MoreHorizontal size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Orders;
