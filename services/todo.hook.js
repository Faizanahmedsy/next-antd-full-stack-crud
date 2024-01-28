"use client";

import { useQuery } from "@tanstack/react-query";
import fetchTodos from "./todo.api";

const useTodos = () => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });
};

export default useTodos;
