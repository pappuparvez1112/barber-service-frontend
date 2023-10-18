import { Card } from "antd";
import React from "react";

const ReviewCard = ({
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

export default ReviewCard;
