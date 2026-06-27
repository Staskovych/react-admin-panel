import { DollarSign, Users, CreditCard, Activity } from "lucide-react";
import type { StatsCardProps } from "./StatsCard";

export const dashboardStats: StatsCardProps[] = [
 {
  title: "Total Revenue",
  value: "$45,231.89",
  icon: DollarSign,
  trend: "+20.1% from last month",
 },
 {
  title: "Subscriptions",
  value: "+2350",
  icon: Users,
  trend: "+180.1% from last month",
 },
 {
  title: "Sales",
  value: "+12,234",
  icon: CreditCard,
  trend: "+19% from last month",
 },
 {
  title: "Active Now",
  value: "+573",
  icon: Activity,
  trend: "+201 since last hour",
 },
];
