import { Category } from "@/interfaces";
import { getCategoriesData } from "@/services/services/category/categoryDataFetching";
import FormSelectField, { SelectOptions } from "./FormSelectFields";

type CategoryFieldProps = {
  name: string;
  label?: string;
  //   onChange: (e: any) => void;
};

const CategoryField = async ({ name, label }: CategoryFieldProps) => {
  const data: any = await getCategoriesData();
  console.log(data);
  const categories: Category[] = data;
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
      //   handleChange={(e) => onChange(e)}
    />
  );
};

export default CategoryField;
