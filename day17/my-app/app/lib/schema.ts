import z from "zod";

export const TaskSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Tiêu đề không được để trống" })
    .min(3, { message: "Tiêu đề phải có ít nhất 3 ký tự" }),
  completed: z.boolean().optional(),
});

export type TaskType = z.infer<typeof TaskSchema>;
