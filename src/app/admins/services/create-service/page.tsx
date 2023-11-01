import CreateServiceForm from "@/components/forms/createServiceForm";
import { getCategoriesData } from "@/services/services/category/categoryDataFetching";

const CreateService = async () => {
  const data: any = await getCategoriesData();
  console.log(data);

  return <CreateServiceForm categories={data} />;
};

export default CreateService;
