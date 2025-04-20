"use client";
import MainLayout from "@/layouts/main/main";
import { FC, ReactNode } from "react";

interface IProps  {
  children: ReactNode;
};

const Layout: FC<IProps> = ({ children }) => {
  return <MainLayout>{children}</MainLayout>;
}

export default Layout