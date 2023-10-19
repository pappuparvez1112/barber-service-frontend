import Table from "@/components/ui/Table/Table";

import CategoryTable from "@/components/view/Service/CategoryTable";
import { Category } from "@/interfaces";
import { getCategoriesData } from "@/services/services/category/categoryDataFetching";
import { columns } from "./columsCategories";

const AllCategories = async () => {
  const data: any = await getCategoriesData();
  console.log(data);

  return (
    <CategoryTable title="All Services">
      <Table<Category> columns={columns} data={data} />
    </CategoryTable>
  );
};

export default AllCategories;
