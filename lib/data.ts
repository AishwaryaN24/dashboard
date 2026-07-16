export interface KpiMetric {
  id: string;
  label: string;
  value: number;
  unit: "count" | "percent" | "currency";
  change: number; // % change vs previous period
}

export interface RevenuePoint {
  month: string;
  revenue: number;
  target: number;
}

export interface Task {
  id: string;
  title: string;
  status: "todo" | "in-progress" | "done";
  owner: string;
}

// Simulated data source — swap with a real DB/API call.
const revenueSeries: RevenuePoint[] = [
  { month: "Jan", revenue: 42000, target: 40000 },
  { month: "Feb", revenue: 45500, target: 42000 },
  { month: "Mar", revenue: 41000, target: 44000 },
  { month: "Apr", revenue: 51000, target: 46000 },
  { month: "May", revenue: 55000, target: 48000 },
  { month: "Jun", revenue: 60500, target: 50000 },
];

const tasks: Task[] = [
  { id: "t1", title: "Migrate auth to Server Actions", status: "in-progress", owner: "Aishwarya" },
  { id: "t2", title: "Optimize LCP on product page", status: "todo", owner: "Aishwarya" },
  { id: "t3", title: "Add ISR to blog routes", status: "done", owner: "Rahul" },
  { id: "t4", title: "Fix accessibility on modal focus trap", status: "todo", owner: "Priya" },
];

// Simulate network latency like a real API/DB call would have.
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export async function getKpiMetrics(): Promise<KpiMetric[]> {
  await delay(150);
  return [
    { id: "revenue", label: "Monthly Revenue", value: 60500, unit: "currency", change: 10.1 },
    { id: "users", label: "Active Users", value: 8420, unit: "count", change: 4.3 },
    { id: "conversion", label: "Conversion Rate", value: 3.8, unit: "percent", change: -0.4 },
    { id: "uptime", label: "Uptime", value: 99.95, unit: "percent", change: 0.02 },
  ];
}

export async function getRevenueSeries(): Promise<RevenuePoint[]> {
  await delay(150);
  return revenueSeries;
}

export async function getTasks(): Promise<Task[]> {
  await delay(100);
  return tasks;
}
