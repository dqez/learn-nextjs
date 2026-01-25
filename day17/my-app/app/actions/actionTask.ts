"use server";

import { revalidatePath } from "next/cache";
import { db } from "../lib/db";
import { TaskSchema } from "../lib/schema";

export type FormState = {
  message: string;
  errors?: {
    title?: string[];
  };
};

export async function createTask(prevState: unknown, formData: FormData) {
  const rawFormData = {
    title: formData.get("title"),
  };

  const validatedFields = TaskSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    return {
      message: "Dữ liệu không hợp lệ",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    await db.task.create({
      data: {
        title: validatedFields.data.title,
      },
    });

    revalidatePath("/tasks");
  } catch (e) {
    console.error(e);
    return { message: "Lỗi Database: Không thể tạo Task" };
  }
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
