"use client";
import FormSelectField, { SelectOptions } from "./FormSelectFields";

type CategoryFieldProps = {
  name: string;
  label?: string;
  categories: [];
};

const CategoryField = ({ name, label, categories }: CategoryFieldProps) => {
  const categoryOptions = categories?.map((categories: any) => {
    return {
      label: categories?.title,
      value: categories?.id,
    };
  });

  return (
    <FormSelectField
      name={name}
      label={label}
      options={categoryOptions as SelectOptions[]}
    />
  );
};

export default CategoryField;
