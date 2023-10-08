import { AppLayout } from "@/components/layouts/app-layout";

import AddUserForm from "@/components/add-user-form";
import { TaskForm } from "@/components/task-form";

export default function IndexPage() {
  return (
    <AppLayout>
      <div>DoIt</div>
      <AddUserForm />
      <TaskForm />
    </AppLayout>
  );
}
