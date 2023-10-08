import { NextRequest, NextResponse } from "next/server";
import { createTask, getTasksPreview, updateTask } from "@/backend/task";

import {
  TaskInput,
  UpdateTaskInput,
  taskInputSchema,
  updateTaskInputSchema,
} from "@/types/task";

export const GET = async (request: NextRequest) => {
  try {
    const search = request.nextUrl.searchParams.get("search") as string;

    // hardcoded now
    // to change for user id from auth
    let userId: string = "c3c38ca1-54c2-4603-ac4f-d00db0f83437";

    const tasks = await getTasksPreview(userId, {
      search: search || undefined,
    });
    return NextResponse.json({ tasks });
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const POST = async (request: Request) => {
  try {
    const body = (await request.json()) as { input: TaskInput };

    if (!body || !body?.input) {
      return 422;
    }

    const task = await createTask(taskInputSchema.parse(body.input));
    return NextResponse.json({ task });
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const PATCH = async (request: Request) => {
  try {
    const body = (await request.json()) as {
      input: UpdateTaskInput;
      id: string;
    };

    if (!body || !body?.input || !body.id) {
      return 422;
    }

    const task = await updateTask(
      body.id,
      updateTaskInputSchema.parse(body.input)
    );
    return NextResponse.json({ task });
  } catch (error) {
    console.log(error);
    return error;
  }
};
