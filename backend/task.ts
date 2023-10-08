import { TaskInput, TaskPreview, UpdateTaskInput } from "@/types/task";
import prisma from "@/lib/db";

export const createTask = async (input: TaskInput) => {
  const instance = await prisma.task.create({
    data: {
      title: input.title,
      content: input.content || "",
      userId: input.userId,
    },
  });
  return instance;
};

export const updateTask = async (id: string, input: UpdateTaskInput) => {
  const { ...rest } = input;

  try {
    const instance = await prisma.task.update({
      where: {
        id,
      },
      data: {
        ...rest,
      },
    });
    return instance;
  } catch (error) {
    console.log(error);
  }
};

export const getTasksPreview = async (
  userId: string,
  options?: {
    search?: string;
  }
): Promise<Array<TaskPreview>> => {
  return prisma.task.findMany({
    where: {
      user: {
        id: userId,
      },
    },
  });
};

export const getTask = async (id: string) => {
  return prisma.task.findUnique({
    where: {
      id,
    },
  });
};
