"use client";
//import antd styles
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider } from "antd";
import { antdConfig } from "./antd-config";

const Providers = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AntdRegistry>
        <ConfigProvider theme={antdConfig}>{children}</ConfigProvider>
      </AntdRegistry>
    </QueryClientProvider>
  );
};

export default Providers;
