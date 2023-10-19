import Title from "antd/es/typography/Title";
import React from "react";

const ServiceTable = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <>
      <Title level={3}>{title}</Title>
      {children}
    </>
  );
};

export default ServiceTable;
