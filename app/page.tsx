import { getKpiMetrics, getRevenueSeries, getTasks } from "@/lib/data";
import { KpiCard } from "./components/KpiCard";
import { RevenueChart } from "./components/RevenueChart";
import { TaskList } from "./components/TaskList";

// This is a Server Component: data fetching happens on the server,
// with zero client-side JS shipped for the fetch logic itself.
export default async function DashboardPage() {
  const [metrics, revenue, tasks] = await Promise.all([
    getKpiMetrics(),
    getRevenueSeries(),
    getTasks(),
  ]);

  return (
    <main className="dashboard">
      <div className="dashboard__header">
        <h1>KPI Dashboard</h1>
        <p>Real-time overview of revenue, users, and team tasks</p>
      </div>

      <section className="kpi-grid">
        {metrics.map((metric) => (
          <KpiCard key={metric.id} metric={metric} />
        ))}
      </section>

      <section className="panel">
        <h2>Revenue vs Target</h2>
        <RevenueChart data={revenue} />
      </section>

      <section className="panel">
        <h2>Team Tasks</h2>
        <TaskList tasks={tasks} />
      </section>
    </main>
  );
}
