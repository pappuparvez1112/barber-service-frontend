"use client";
import LoginImage from "@/app/assets/Privacy policy-rafiki.png";
import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormInput";
// import { useUserLoginMutation } from "@/redux/api/authApi";
import { Button, Col, Row, message } from "antd";
import { signIn } from "next-auth/react";
import Image from "next/image";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler } from "react-hook-form";

type FormValues = {
  email: string;
  password: string;
};
const LoginPage = () => {
  const router = useRouter();
  // console.log(isLoggedIn());

  // const [userLogin] = useUserLoginMutation();
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      const result = await signIn("barber-service-backend", {
        email: data.email,
        password: data.password,
        redirect: false,
        // callbackUrl: "/",
      });
      console.log(result);
      if (result?.ok && !result.error) {
        router.push("/");
        router.refresh();
        message.success("User logged in successfully");
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };
  return (
    <Row
      className="container"
      justify="center"
      align="middle"
      style={{
        minHeight: "100vh",
      }}
    >
      <Col className="order-1" sm={12} md={16} lg={10}>
        <Image src={LoginImage} width={400} height={400} alt="login image" />
      </Col>

      <Col className="order-2 p-8" sm={12} md={8} lg={8}>
        <h1
          className="text-[#ffffff]"
          style={{
            margin: "15px 0",
          }}
        >
          First login your account
        </h1>
        <div>
          <Form submitHandler={onSubmit}>
            <div className="text-[#ffffff]">
              <FormInput
                placeholder="Input your Email"
                name="email"
                type="email"
                size="large"
                label="Email"
              />
            </div>
            <div
              style={{
                margin: "15px 0",
                justifyContent: "space-between",
                display: "flex",
                gap: "10px",
              }}
            >
              <div
                className="text-[#ffffff]"
                style={{
                  width: 400,
                }}
              >
                <FormInput
                  name="password"
                  type="password"
                  size="large"
                  label="User password"
                  placeholder="input password"
                  visibilityToggle={{
                    visible: passwordVisible,
                    onVisibleChange: setPasswordVisible,
                  }}
                />
              </div>
              <div>
                <Button
                  style={{
                    width: 80,
                    marginTop: "17px",
                    height: "40px",
                  }}
                  onClick={() => setPasswordVisible((prevState) => !prevState)}
                >
                  {passwordVisible ? "Hide" : "Show"}
                </Button>
              </div>
            </div>
            <Button type="primary" htmlType="submit" className="me-10">
              Login
            </Button>
            <Link href="/signup">
              <Button type="primary" htmlType="submit">
                SignUp
              </Button>
            </Link>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default LoginPage;
