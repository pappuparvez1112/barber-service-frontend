"use client";
import { Button, Form, Input, message } from "antd";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

import React from "react";

type FieldType = {
  email?: string;
  password?: string;
};

const LoginForm: React.FC = () => {
  const router = useRouter();
  const onFinish = async (values: any) => {
    console.log("Success:", values);
    const result = await signIn("barber-service-backend", {
      email: values.email,
      password: values.password,
      redirect: false,
      // callbackUrl: "/",
    });
    console.log(result);
    if (result?.ok && !result.error) {
      router.push("/");
      message.success("User logged in successfully");
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your Email!" }]}
      >
        <Input type="email" />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
