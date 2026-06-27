import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { type LucideIcon } from "lucide-react";

export type StatsCardProps = {
 title: string;
 value: string;
 icon: LucideIcon;
 trend: string;
};

export function StatsCard({ title, value, icon, trend }: StatsCardProps) {
 const Icon = icon;

 return (
  <Card className="bg-slate-900 border-slate-800 min-h-36">
   <CardHeader className="flex flex-row justify-between items-center">
    <CardTitle className="text-sm font-medium text-slate-400">
     {title}
    </CardTitle>
    <Icon className="w-4 h-4 text-slate-400" />
   </CardHeader>
   <CardContent>
    <p className="text-2xl font-bold text-slate-100">{value}</p>
    <p className="text-sm text-slate-400">{trend}</p>
   </CardContent>
  </Card>
 );
}
