import { StatsCard } from "./StatsCard";
import { dashboardStats } from "./Dashboard-stats";

export function DashboardPage() {
 return (
  <div className="p-4 space-y-6">
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    {dashboardStats.map((stat) => (
     <StatsCard key={stat.title} {...stat} />
    ))}
   </div>
   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="rounded-lg border border-slate-800 p-4 min-h-64">
     Overview
    </div>
    <div className="rounded-lg border border-slate-800 p-4">Recent Sales</div>
   </div>
  </div>
 );
}
