import { Search, Bell, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TopBar = () => {
  const navigate = useNavigate();
  return (
    <header className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 gap-3">
      <div className="flex items-center gap-4 flex-1 min-w-0">
        <div className="relative w-full max-w-xs">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-card border border-border rounded-xl py-2 sm:py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
          />
        </div>
      </div>

      <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
        <span className="text-xs sm:text-sm text-muted-foreground mr-2 sm:mr-4 hidden sm:inline">Today, Mon 22 Nov</span>
        <button onClick={() => navigate("/settings")} className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent transition-colors">
          <Settings size={18} />
        </button>
        <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent transition-colors relative">
          <Bell size={18} />
          <span className="absolute top-1.5 sm:top-2 right-1.5 sm:right-2 w-2 h-2 rounded-full bg-primary" />
        </button>
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-primary to-chart-purple ml-1 sm:ml-2 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face"
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default TopBar;
