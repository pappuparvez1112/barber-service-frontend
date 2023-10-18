"use client";

import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormInput";
import FormTextAreaField from "@/components/forms/FormTextArea";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";

import { useAddAdminWithFormDataMutation } from "@/redux/api/adminApi";
import { Button, Col, Row, message } from "antd";
const CreateAdmin = () => {
  const [addAdminWithFormData] = useAddAdminWithFormDataMutation();
  const onSubmit = async (data: any) => {
    message.loading("creating.....");
    try {
      console.log(data);
      const response = await addAdminWithFormData(data);

      message.success("Admin created successfully");
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };
  const base = "super_admin";
  return (
    <div>
      <UMBreadCrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: "Admin", link: `/${base}/admin` },
        ]}
      />
      <h1> Admin information </h1>
      <Form submitHandler={onSubmit}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput
              size="large"
              type="email"
              name="admin.email"
              label="Email"
            />
          </Col>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput
              size="large"
              type="text"
              name="admin.fullName"
              label="FullName"
            />
          </Col>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput
              type="password"
              name="password"
              size="large"
              label="Password"
            />
          </Col>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput
              type="text"
              name="admin.contactNo"
              size="large"
              label="ContactNo"
            />
          </Col>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormTextAreaField
              name="admin.presentAddress"
              label="Present Address"
              rows={4}
            />
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          add
        </Button>
      </Form>
    </div>
  );
};

export default CreateAdmin;
