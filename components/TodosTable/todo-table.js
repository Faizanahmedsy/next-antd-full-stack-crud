"use client";

import { Button, Card, Form, Input, Modal, Space, Table, message } from "antd";
import useTodos from "@/services/todo.hook";
import { useState } from "react";
import TextArea from "antd/es/input/TextArea";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const TodoTable = () => {
  const [open, setOpen] = useState(false);
  const [toggleEdit, setToggleEdit] = useState(false);

  const { Item } = Form;

  const [form] = Form.useForm();

  const { data: todosData, isFetching, error, refetch } = useTodos();

  const { todos } = todosData || [];

  console.log("data", todos);
  console.log("isFetching", isFetching);
  console.log("error", error);

  const addTodoMutation = useMutation({
    mutationFn: (newTodo) =>
      axios.post("http://localhost:3000/api/todos", newTodo),
    onSuccess: () => {
      setOpen(false);
      refetch();
      message.success("Todo added successfully");
    },
    onError: () => {
      message.error("Something went wrong");
    },
  });

  const handleSubmit = async (payload) => {
    addTodoMutation.mutate(payload);

    form.resetFields();
  };

  const handleDelete = async (id) => {
    Modal.confirm({
      title: "Delete Todo",
      content: "Are you sure you want to delete this todo?",
      okText: "Yes",
      cancelText: "No",
      okButtonProps: {
        danger: true,
      },
      centered: true,
      onOk: async () => {
        try {
          await axios.delete(`http://localhost:3000/api/todos/?id=${id}`);
          refetch();
          message.success("Todo deleted successfully");
        } catch (error) {
          message.error("Something went wrong");
        }
      },
    });
  };

  const columns = [
    {
      title: "Sr No.",
      dataIndex: "id",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Action",
      render: (text, record) => (
        <Space size="middle">
          <Button
            disabled
            Tooltip
            title="Work in progress"
            type="primary"
            onClick={() => {
              setOpen(true);
              setToggleEdit(true);
            }}
          >
            Edit
          </Button>
          <Button
            type="primary"
            danger
            onClick={() => handleDelete(record?._id)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

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
            <Button
              type="primary"
              onClick={() => {
                setOpen(true);
                setToggleEdit(false);
              }}
            >
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
        onCancel={() => {
          setOpen(false);
          setToggleEdit(false);
          form.resetFields();
        }}
        onOk={form.submit}
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
              {toggleEdit ? <h3>Edit Todo</h3> : <h3>Add Todo</h3>}
            </div>
          </>
        }
      >
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Item name={"title"}>
            <Input placeholder="Title" />
          </Item>
          <Item
            name={"description"}
            style={{
              marginBottom: "40px",
            }}
          >
            <TextArea placeholder="Description" maxLength={100} showCount />
          </Item>
        </Form>
      </Modal>
    </>
  );
};

export default TodoTable;
