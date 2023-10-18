"use client";
import LoginImage from "@/app/assets/Privacy policy-rafiki.png";
import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormInput";
import FormSelectField from "@/components/forms/FormSelectFields";
import { roleOptions } from "@/constant/global";
import { Button, Col, Row, message } from "antd";
import Image from "next/image";
import Link from "next/link";

const onSubmit = async (values: any) => {
  console.log(values);
  const obj = { ...values };
  console.log(obj);
  const file = obj["file"];
  console.log(file);
  delete obj["file"];
  const data = JSON.stringify(obj);
  const formData = new FormData();
  console.log(formData);
  formData.append("file", file as Blob);
  formData.append("data", data);
  message.loading("Creating...");
  try {
    message.success("Admin created successfully!");
  } catch (err: any) {
    console.error(err.message);
  }
};
const SignUpPage = () => {
  return (
    <div>
      <Row
        justify="center"
        align="middle"
        style={{
          minHeight: "100vh",
        }}
      >
        <Col sm={12} md={16} lg={10}>
          <Image src={LoginImage} width={500} alt="login image" />
        </Col>

        <Col sm={12} md={8} lg={8}>
          <h1
            style={{
              margin: "15px 0",
            }}
          >
            First Register your account
          </h1>
          <div>
            <Form submitHandler={onSubmit}>
              <div
                style={{
                  border: "1px solid #d9d9d9",
                  borderRadius: "5px",
                  padding: "15px",
                  marginBottom: "10px",
                }}
              >
                <p
                  style={{
                    fontSize: "18px",
                    marginBottom: "10px",
                  }}
                >
                  Admin information
                </p>
                <Row
                  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                  style={{ marginBottom: "10px" }}
                >
                  <Col className="gutter-row" span={8}>
                    <FormInput
                      type="text"
                      name="admin.fullName"
                      size="large"
                      label="fullName"
                    />
                  </Col>
                  <Col
                    className="gutter-row"
                    span={8}
                    style={{ marginBottom: "10px" }}
                  />

                  <Col
                    className="gutter-row"
                    span={8}
                    style={{ marginBottom: "10px" }}
                  >
                    <FormInput
                      type="password"
                      name="password"
                      size="large"
                      label="Password"
                    />
                  </Col>
                  <Col
                    className="gutter-row"
                    span={8}
                    style={{ marginBottom: "10px" }}
                  >
                    <FormInput
                      type="Email"
                      name="email"
                      size="large"
                      label="Email"
                    />
                  </Col>

                  <Col
                    className="gutter-row"
                    span={8}
                    style={{ marginBottom: "10px" }}
                  >
                    <FormSelectField
                      size="large"
                      name="admin.gender"
                      options={roleOptions}
                      label="Role"
                      placeholder="Select"
                    />
                  </Col>
                </Row>
              </div>

              <Button htmlType="submit" type="primary">
                Create
              </Button>
              <Link href={"/login"}>
                <Button htmlType="submit" type="primary">
                  Login
                </Button>
              </Link>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SignUpPage;
