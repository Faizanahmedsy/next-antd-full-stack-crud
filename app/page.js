"use client";

import PageWrapper from "@/components/page-wrapper";
import { useQuery } from "@tanstack/react-query";
import { Table } from "antd";
import Card from "antd/es/card/Card";
import axios from "axios";

export default function Home() {
  // const { data, isFetching } = useQuery({
  //   queryKey: "todos",
  //   queryFn: () => axios.get("https://dummyjson.com/products/1"),
  // });

  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];
  return (
    <PageWrapper>
      <Card
        title="Card title"
        style={{
          width: "100%",
          overflow: "auto",
        }}
      >
        <Table dataSource={dataSource} columns={columns} />
      </Card>
    </PageWrapper>
  );
}
