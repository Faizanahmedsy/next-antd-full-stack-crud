"use client";
//import antd styles
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider } from "antd";

const Providers = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AntdRegistry>
        <ConfigProvider
          theme={{
            token: {
              color: "#190482",
              colorHover: "#0044B7",
              borderRadius: "20px",
            },
            components: {
              Button: {
                colorPrimary: "#190482",
                colorPrimaryHover: "#0044B7",
                borderRadius: "10px",
              },
            },
          }}
        >
          {children}
        </ConfigProvider>
      </AntdRegistry>
    </QueryClientProvider>
  );
};

export default Providers;
