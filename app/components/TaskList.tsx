"use client";

import { useTransition } from "react";
import { updateTaskStatus } from "@/lib/actions";
import type { Task } from "@/lib/data";

export function TaskList({ tasks }: { tasks: Task[] }) {
  const [isPending, startTransition] = useTransition();

  function handleStatusChange(taskId: string, newStatus: string) {
    startTransition(() => {
      updateTaskStatus(taskId, newStatus);
    });
  }

  return (
    <div style={{ opacity: isPending ? 0.6 : 1, transition: "opacity 0.15s" }}>
      {tasks.map((task) => (
        <div className="task-row" key={task.id}>
          <div>
            <div className="task-row__title">{task.title}</div>
            <div className="task-row__owner">{task.owner}</div>
          </div>
          <select
            className="status-select"
            defaultValue={task.status}
            onChange={(e) => handleStatusChange(task.id, e.target.value)}
          >
            <option value="todo">To Do</option>
            <option value="in-progress">In Progress</option>
            <option value="done">Done</option>
          </select>
        </div>
      ))}
    </div>
  );
}
