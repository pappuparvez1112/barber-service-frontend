"use client";

import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormInput";
import FormTextAreaField from "@/components/forms/FormTextArea";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { addServicesData } from "@/services/services/addServiceData";

import { Button, Col, Row, message } from "antd";
const CreateService = () => {
  const categoryOptions = [
    {
      label: "CLASSIC HAIRCUT",
      value: "CLASSIC HAIRCUT",
    },
    {
      label: "HAIR COLOR",
      value: "HAIR COLOR",
    },
    {
      label: "SHAVING",
      value: "SHAVING",
    },
  ];
  //   const data: any = await getServicesData();
  //   console.log(data);
  //   const categories: Category[] = data?.departments;
  //   const categoryOptions = categories?.map((categories: any) => {
  //     return {
  //       label: categories?.title,
  //       value: categories?.id,
  //     };
  //   });
  const onSubmit = async (data: any) => {
    message.loading("creating.....");
    try {
      console.log(data);
      const response = await addServicesData(data);

      message.success("Services created successfully");
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };

  return (
    <div>
      <UMBreadCrumb items={[{ label: "Services", link: `/admins/services` }]} />
      <h1>Add a Service </h1>
      <Form submitHandler={onSubmit}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput size="large" type="text" name="name" label="name" />
          </Col>

          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput type="text" name="price" size="large" label="Price" />
          </Col>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput
              type="text"
              name="categoryId"
              size="large"
              label="CategoryId"
            />
          </Col>
          {/* <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
            <FormSelectField
              size="large"
              name="category"
              options={categoryOptions}
              label="Category"
              placeholder="Select"
            />
          </Col> */}
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

export default CreateService;
