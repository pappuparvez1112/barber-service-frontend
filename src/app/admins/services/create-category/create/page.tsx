"use client";

import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormInput";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { addCategoriesData } from "@/services/services/category/addCategory";

import { Button, Col, Row, message } from "antd";
const CreateCategory = () => {
  // const data=addAdminsData(data)
  const onSubmit = async (data: any) => {
    message.loading("creating.....");
    try {
      console.log(data);
      const response = await addCategoriesData(data);

      message.success("Category created successfully");
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };
  const base = "Admin";
  return (
    <div>
      <UMBreadCrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          {
            label: "Categories",
            link: `/admins/services/create-category`,
          },
        ]}
      />
      <h1> Create Category </h1>
      <Form submitHandler={onSubmit}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput
              size="large"
              type="text"
              name="title"
              label="Category Name"
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

export default CreateCategory;
