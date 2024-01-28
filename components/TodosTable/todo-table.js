"use client";

import { Button, Card, Form, Modal, Table } from "antd";
import { columns } from "./todo-table-columns";
import useTodos from "@/services/todo.hook";
import { useState } from "react";

const TodoTable = () => {
  const [open, setOpen] = useState(false);

  const { form } = Form.useForm();

  const { data: todosData, isFetching, error } = useTodos();

  const { todos } = todosData || [];

  console.log("data", todos);
  console.log("isFetching", isFetching);
  console.log("error", error);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <Card
        title="Todos"
        style={{
          width: "100%",
          overflow: "auto",
        }}
        extra={
          <>
            <Button type="primary" onClick={() => setOpen(true)}>
              Add Todo
            </Button>
          </>
        }
      >
        <Table
          dataSource={Array.isArray(todos) && todos}
          columns={columns}
          loading={isFetching}
          pagination={false}
        />
      </Card>

      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        centered
        closable={false}
        title={
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h3>Add Todo</h3>
            </div>
          </>
        }
      ></Modal>
    </>
  );
};

export default TodoTable;
