import Sidebar from "@/components/dashboard/Sidebar";
import TopBar from "@/components/dashboard/TopBar";
import StatsCard from "@/components/dashboard/StatsCard";
import RevenueChart from "@/components/dashboard/RevenueChart";
import BottomCards from "@/components/dashboard/BottomCards";
import { CalendarDays, ChevronDown } from "lucide-react";

const Index = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <main className="flex-1 ml-16 overflow-auto">
        <TopBar />

        <div className="px-4 sm:px-6 lg:px-8 pb-8">
          {/* Greeting */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-3">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-foreground">
                Hello, Barbara! 👋
              </h1>
              <p className="text-sm text-muted-foreground mt-1">
                This is what's happening in your store this month.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 bg-card border border-border rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 text-sm text-foreground hover:bg-accent transition-colors">
                This month
                <ChevronDown size={16} className="text-muted-foreground" />
              </button>
              <button className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center bg-card border border-border hover:bg-accent transition-colors">
                <CalendarDays size={18} className="text-muted-foreground" />
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1.5fr] gap-4 sm:gap-5 mb-5">
            <div className="grid grid-cols-2 md:grid-cols-1 md:grid-rows-2 gap-4 sm:gap-5">
              <StatsCard
                title="Total revenue"
                value="$ 99,560"
                change="↑ 2.6%"
                changeType="positive"
                
              />
              <StatsCard
                title="Total visitors"
                value="45,600"
                change="↓ 2.6%"
                changeType="negative"
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-1 md:grid-rows-2 gap-4 sm:gap-5">
              <StatsCard
                title="Total orders"
                value="35"
                change="↓ 2.6%"
                changeType="negative"
              />
              <StatsCard
                title="Net profit"
                value="$ 60,450"
                change="↑ 5.6%"
                changeType="positive"
              />
            </div>
            <div className="md:col-span-2 lg:col-span-1">
              <RevenueChart />
            </div>
          </div>

          {/* Bottom Section */}
          <BottomCards />
        </div>
      </main>
    </div>
  );
};

export default Index;
