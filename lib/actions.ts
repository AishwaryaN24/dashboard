"use server";

import { revalidatePath } from "next/cache";

// In a real app this would write to a database.
// Here it demonstrates the Server Action pattern: mutate, then revalidate.
export async function updateTaskStatus(taskId: string, newStatus: string) {
  console.log(`[Server Action] Updating task ${taskId} to status "${newStatus}"`);

  // Simulate a DB write
  await new Promise((res) => setTimeout(res, 200));

  // Re-fetches server-rendered data on the dashboard route
  revalidatePath("/");

  return { success: true, taskId, newStatus };
}
