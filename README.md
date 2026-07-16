# KPI Dashboard

A KPI/analytics dashboard built with **Next.js 14 App Router**, demonstrating **Server Components**, **Server Actions**, and data visualization — mirrors the kind of internal dashboard tooling built in production (e.g. real-time KPI tracking).

## Features

- **Server Components** — KPI cards and page shell fetch data directly on the server, no client JS for data-fetching
- **Server Actions** — updating a task's status calls a server-side function directly (`lib/actions.ts`), no manual API route needed
- **Client Components where needed** — the revenue chart (Recharts) and interactive task dropdown are the only client-rendered pieces
- **Revalidation** — `revalidatePath` re-renders server data after a mutation

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Project Structure

```
app/
  page.tsx              # Server Component — fetches and composes the dashboard
  components/
    KpiCard.tsx          # Server Component
    RevenueChart.tsx      # Client Component (Recharts)
    TaskList.tsx          # Client Component (calls Server Action)
lib/
  data.ts                # Mock data layer — swap for a real DB/API
  actions.ts              # Server Actions
```

## Tech Stack

Next.js 14 (App Router) · TypeScript · Recharts · Server Actions
