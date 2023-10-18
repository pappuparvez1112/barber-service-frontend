import { Card } from "antd";
import React from "react";

const ServiceCard = ({
  children,
  title,
  hoverable,
}: {
  children: React.ReactNode;
  title: string;
  hoverable?: boolean;
}) => (
  <Card title={title} hoverable={hoverable}>
    {children}
  </Card>
);

export default ServiceCard;
