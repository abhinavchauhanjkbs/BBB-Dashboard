import { ArrowUpRight, CheckCircle, Users } from "lucide-react";

const BottomCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1.5fr] gap-4 sm:gap-5">
      {/* Orders Card */}
      <div className="bg-card border border-border rounded-2xl p-4 sm:p-5 flex flex-col">
        <div className="flex items-start justify-between mb-auto">
          <div className="w-10 h-10 rounded-xl bg-success/20 flex items-center justify-center">
            <CheckCircle size={20} className="text-success" />
          </div>
          <button className="w-8 h-8 rounded-full flex items-center justify-center bg-accent hover:bg-accent/80 transition-colors">
            <ArrowUpRight size={14} className="text-foreground" />
          </button>
        </div>
        <div className="mt-6 sm:mt-8">
          <h3 className="text-3xl sm:text-4xl font-bold text-foreground">98</h3>
          <p className="text-sm sm:text-base text-muted-foreground mt-1">orders</p>
          <p className="text-xs text-muted-foreground mt-2 sm:mt-3">
            12 orders are <span className="text-success">awaiting</span> confirmation.
          </p>
        </div>
      </div>

      {/* Customers Card */}
      <div className="bg-card border border-border rounded-2xl p-4 sm:p-5 flex flex-col relative overflow-hidden">
        <div className="flex items-start justify-between mb-auto relative z-10">
          <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
            <Users size={20} className="text-primary" />
          </div>
        </div>
        <div className="mt-6 sm:mt-8 relative z-10">
          <h3 className="text-3xl sm:text-4xl font-bold text-foreground">17</h3>
          <p className="text-sm sm:text-base text-muted-foreground mt-1">customers</p>
          <p className="text-xs text-muted-foreground mt-2 sm:mt-3">
            17 customers are <span className="text-primary">waiting</span> for response.
          </p>
        </div>
      </div>

      {/* Sales by Category */}
      <div className="sm:col-span-2 lg:col-span-1">
        <SalesByCategory />
      </div>
    </div>
  );
};

const SalesByCategory = () => {
  const categories = [
    { name: "Apple MacBook Air M2", color: "bg-chart-blue", pct: 35 },
    { name: "Apple Watch Series 9", color: "bg-chart-green", pct: 25 },
    { name: "Acoustics JBL Charge 5", color: "bg-chart-yellow", pct: 20 },
    { name: "Acoustics Divoom SongBird-HQ", color: "bg-chart-red", pct: 12 },
    { name: "Apple AirPods Pro 2", color: "bg-chart-purple", pct: 8 },
  ];

  return (
    <div className="bg-card border border-border rounded-2xl p-4 sm:p-5 h-full">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-base font-semibold text-foreground">Sales by Category</h3>
          <span className="text-xs text-muted-foreground">This month vs last</span>
        </div>
      </div>

      <div className="flex items-center gap-4 sm:gap-6">
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0">
          <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
            <circle cx="18" cy="18" r="14" fill="none" stroke="hsl(217, 91%, 60%)" strokeWidth="4"
              strokeDasharray="30.9 69.1" strokeDashoffset="0" />
            <circle cx="18" cy="18" r="14" fill="none" stroke="hsl(145, 63%, 42%)" strokeWidth="4"
              strokeDasharray="22 78" strokeDashoffset="-30.9" />
            <circle cx="18" cy="18" r="14" fill="none" stroke="hsl(38, 92%, 50%)" strokeWidth="4"
              strokeDasharray="17.6 82.4" strokeDashoffset="-52.9" />
            <circle cx="18" cy="18" r="14" fill="none" stroke="hsl(0, 84%, 60%)" strokeWidth="4"
              strokeDasharray="10.5 89.5" strokeDashoffset="-70.5" />
            <circle cx="18" cy="18" r="14" fill="none" stroke="hsl(262, 83%, 58%)" strokeWidth="4"
              strokeDasharray="7 93" strokeDashoffset="-81" />
          </svg>
        </div>

        <div className="flex flex-col gap-1.5 sm:gap-2">
          {categories.map((cat) => (
            <div key={cat.name} className="flex items-center gap-2">
              <span className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full ${cat.color}`} />
              <span className="text-[11px] sm:text-xs text-muted-foreground whitespace-nowrap">{cat.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BottomCards;
