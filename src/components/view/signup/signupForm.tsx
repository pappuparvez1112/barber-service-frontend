"use client";
import LoginImage from "@/app/assets/Privacy policy-rafiki.png";
import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormInput";
import FormTextAreaField from "@/components/forms/FormTextArea";
import { addSignUpData } from "@/services/users/addSignupDataFetching";
import { Button, Col, Row, message } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
  const router = useRouter();

  const onSubmit = async (data: any) => {
    message.loading("creating.....");
    try {
      console.log(data);
      const response = await addSignUpData(data);
      router.push("/login");

      message.success("User created successfully");
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };
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
                  USER INFORMATION
                </p>
                <Row
                  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                  style={{ marginBottom: "10px" }}
                >
                  <Col className="gutter-row" span={8}>
                    <FormInput
                      type="text"
                      name="fullName"
                      size="large"
                      label="FullName"
                    />
                  </Col>

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
                    <FormInput
                      type="text"
                      name="contactNo"
                      size="large"
                      label="ContactNo"
                    />
                  </Col>

                  <Col
                    className="gutter-row"
                    span={8}
                    style={{ marginBottom: "10px" }}
                  >
                    <FormTextAreaField
                      name="address"
                      label="Address"
                      rows={4}
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
