"use client";

import { Editor } from "./editor";
import { Task } from "@/types/task";

export const TaskForm = ({
  task,
  create,
}: {
  task?: Task;
  create?: boolean;
}) => {
  const handleChangeContent = (
    content: Record<string, unknown> | null | undefined
  ) => {
    console.log(content);
  };

  return (
    <div>
      <div>Task</div>
      <Editor
        content={task?.content ? JSON.parse(task.content) : ""}
        onChange={handleChangeContent}
      />
    </div>
  );
};
