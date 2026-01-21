"use server";

import { revalidatePath } from "next/cache";
import { db } from "./db";

export async function createTask(formData: FormData) {
  const title = formData.get("title") as string;

  await db.task.create({
    data: {
      title: title,
    },
  });

  revalidatePath("/tasks");
}

export async function deleteTask(taskId: number) {
  await db.task.delete({
    where: { id: taskId },
  });

  revalidatePath("/tasks");
}

export async function toggleTaskStatus(taskId: number, currentStatus: boolean) {
  await db.task.update({
    where: { id: taskId },
    data: { completed: !currentStatus },
  });

  revalidatePath("/tasks");
}
