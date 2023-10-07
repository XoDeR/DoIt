import { ReactNode } from "react";

export const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div>app-layout</div>
      <div>
        <section>{children}</section>
      </div>
    </div>
  );
};
