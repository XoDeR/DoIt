import { z } from "zod";

export const taskSchema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
  userId: z.string().optional(),
});

export type Task = z.infer<typeof taskSchema>;
