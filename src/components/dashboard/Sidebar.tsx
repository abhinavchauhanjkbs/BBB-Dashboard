import { LayoutDashboard, ShoppingCart, Package, Grid3X3, Monitor, MessageCircle, Settings, LogOut, Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const navItems = [
  { icon: LayoutDashboard, path: "/" },
  { icon: ShoppingCart, path: "/orders" },
  { icon: Package, path: "#" },
  { icon: Grid3X3, path: "#" },
  { icon: Monitor, path: "#" },
  { icon: MessageCircle, path: "#" },
];

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside className={`flex flex-col items-center justify-between ${expanded ? "w-48" : "w-16"} py-6 bg-sidebar border-r border-border h-screen fixed left-0 top-0 transition-all duration-300 z-50`}>
      <div className={`flex flex-col ${expanded ? "items-start px-4" : "items-center"} gap-1 w-full`}>
        <div className={`mb-8 ${expanded ? "w-full" : ""}`}>
          <button
            onClick={() => setExpanded(!expanded)}
            className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
          >
            {expanded ? <X size={20} className="text-primary" /> : <Menu size={20} className="text-primary" />}
          </button>
        </div>

        {navItems.map((item, i) => (
          <button
            key={i}
            onClick={() => item.path !== "#" && navigate(item.path)}
            className={`${expanded ? "w-full flex items-center gap-3 px-3" : "w-10 justify-center"} h-10 rounded-xl flex items-center transition-colors ${
              location.pathname === item.path
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-accent"
            }`}
          >
            <item.icon size={20} />
          </button>
        ))}
      </div>

      <div className={`flex flex-col ${expanded ? "items-start px-4" : "items-center"} gap-1 w-full`}>
        <button className={`${expanded ? "w-full flex items-center gap-3 px-3" : "w-10 justify-center"} h-10 rounded-xl flex items-center text-muted-foreground hover:text-foreground hover:bg-accent transition-colors`}>
          <Settings size={20} />
        </button>
        <button
          onClick={() => {
            localStorage.removeItem("isLoggedIn");
            navigate("/login");
          }}
          className={`${expanded ? "w-full flex items-center gap-3 px-3" : "w-10 justify-center"} h-10 rounded-xl flex items-center text-muted-foreground hover:text-foreground hover:bg-accent transition-colors`}
        >
          <LogOut size={20} />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
