import { z } from "zod";

export const taskInputSchema = z.object({
  title: z.string(),
  content: z.string().optional(),
  userId: z.string(),
});

export const updateTaskInputSchema = z.object({
  title: z.string().optional(),
  content: z.string().optional(),
});

export type UpdateTaskInput = z.infer<typeof updateTaskInputSchema>;
export type TaskInput = z.infer<typeof taskInputSchema>;

export const taskSchema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
  userId: z.string().optional(),
});

export type Task = z.infer<typeof taskSchema>;

export const taskPreviewSchema = z.object({
  id: z.string(),
  title: z.string(),
  userId: z.string(),
});

export type TaskPreview = z.infer<typeof taskPreviewSchema>;
