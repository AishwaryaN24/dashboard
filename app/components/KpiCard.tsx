import type { KpiMetric } from "@/lib/data";

function formatValue(metric: KpiMetric): string {
  switch (metric.unit) {
    case "currency":
      return `$${metric.value.toLocaleString()}`;
    case "percent":
      return `${metric.value}%`;
    default:
      return metric.value.toLocaleString();
  }
}

export function KpiCard({ metric }: { metric: KpiMetric }) {
  const isUp = metric.change >= 0;
  return (
    <div className="kpi-card">
      <div className="kpi-card__label">{metric.label}</div>
      <div className="kpi-card__value">{formatValue(metric)}</div>
      <div className={`kpi-card__change ${isUp ? "kpi-card__change--up" : "kpi-card__change--down"}`}>
        {isUp ? "▲" : "▼"} {Math.abs(metric.change)}% vs last period
      </div>
    </div>
  );
}
