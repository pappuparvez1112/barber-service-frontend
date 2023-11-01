"use client";

import CategoryField from "@/components/forms/CategoryField";
import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormInput";
import FormTextAreaField from "@/components/forms/FormTextArea";
import BreadCrumb from "@/components/ui/BreadCrumb";
import { addServicesData } from "@/services/services/addServiceData";

import { Button, Col, Row, message } from "antd";
const CreateServiceForm = ({ categories }: { categories: [] }) => {
  // const categoryOptions = [
  //   {
  //     label: "CLASSIC HAIRCUT",
  //     value: "CLASSIC HAIRCUT",
  //   },
  //   {
  //     label: "HAIR COLOR",
  //     value: "HAIR COLOR",
  //   },
  //   {
  //     label: "SHAVING",
  //     value: "SHAVING",
  //   },
  // ];

  const onSubmit = async (data: any) => {
    message.loading("creating.....");
    try {
      const response = await addServicesData(data);
      console.log(response);

      message.success("Services created successfully");
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };

  return (
    <div>
      <BreadCrumb items={[{ label: "Services", link: `/admins/services` }]} />
      <h1>Add a Service </h1>
      <Form submitHandler={onSubmit}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput size="large" type="text" name="name" label="name" />
          </Col>

          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput type="text" name="price" size="large" label="Price" />
          </Col>
          {/* <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput
              type="text"
              name="categoryId"
              size="large"
              label="CategoryId"
            />
          </Col> */}
          <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
            <CategoryField
              name="categoryId"
              label="Category"
              categories={categories}
            />
          </Col>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormTextAreaField
              name="description"
              label="Description"
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

export default CreateServiceForm;
