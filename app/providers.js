"use client";
//import antd styles
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Providers = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AntdRegistry>{children}</AntdRegistry>
    </QueryClientProvider>
  );
};

export default Providers;
