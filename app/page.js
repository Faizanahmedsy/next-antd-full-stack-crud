"use client";

import PageWrapper from "@/components/PageWrapper/page-wrapper";
import TodoTable from "@/components/TodosTable/todo-table";

export default function Home() {
  return (
    <PageWrapper>
      <TodoTable />
    </PageWrapper>
  );
}
