"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/shared/query/query-client";
import { FC, ReactNode } from "react";
interface IProps {
  children: ReactNode;
}

const Providers: FC<IProps> = ({ children }) => {
  return (
          <QueryClientProvider client={queryClient}>
          {children}
          </QueryClientProvider>
  );
}

export default Providers;
