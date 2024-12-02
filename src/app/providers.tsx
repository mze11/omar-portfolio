"use client";

import { NavigationBar } from "@/components";

type Props = {
  children: React.ReactNode;
};

export const Providers = ({ children }: Props) => {
  return (
    <>
      <NavigationBar />
      {children}
    </>
  );
};
