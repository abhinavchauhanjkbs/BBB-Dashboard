import { ArrowUpRight } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: "positive" | "negative";
  subtitle?: string;
  highlighted?: boolean;
}

const StatsCard = ({ title, value, change, changeType = "positive", subtitle = "This month vs last", highlighted = false }: StatsCardProps) => {
  return (
    <div className="rounded-2xl p-5 flex flex-col justify-between h-full bg-card border border-border">
      <div className="flex items-start justify-between mb-4">
        <span className="text-sm text-muted-foreground">{title}</span>
        <button className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
          highlighted ? "bg-primary" : "bg-accent hover:bg-accent/80"
        }`}>
          <ArrowUpRight size={14} className={highlighted ? "text-primary-foreground" : "text-foreground"} />
        </button>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-foreground mb-1 whitespace-nowrap">{value}</h3>
        <div className="flex items-center gap-2 flex-wrap">
          {change && (
            <span className={`text-xs font-medium px-2 py-0.5 rounded-full whitespace-nowrap ${
              changeType === "positive"
                ? "bg-success/20 text-success"
                : "bg-destructive/20 text-destructive"
            }`}>
              {change}
            </span>
          )}
          <span className="text-xs text-muted-foreground whitespace-nowrap">{subtitle}</span>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
