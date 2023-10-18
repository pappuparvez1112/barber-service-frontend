"use client";
import { Button as AntButton } from "antd";
import { revalidateTag } from "next/cache";
import React from "react";

const Buttons = ({
  children,
  ...props
}: {
  children: React.ReactNode;
  props: any;
}) => {
  return (
    <AntButton
      onClick={() => {
        revalidateTag("available-service");
      }}
      {...props}
    >
      {children}
    </AntButton>
  );
};

export default Buttons;
