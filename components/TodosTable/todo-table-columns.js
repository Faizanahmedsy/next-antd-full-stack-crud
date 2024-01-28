import { Button, Space } from "antd";

export const columns = [
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
        <Button type="primary" onClick={() => alert("foo")}>
          Edit
        </Button>
        <Button type="primary" danger onClick={() => alert("foo")}>
          Delete
        </Button>
      </Space>
    ),
  },
];
