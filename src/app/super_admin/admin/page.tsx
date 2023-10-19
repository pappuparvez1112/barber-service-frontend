import Table from "@/components/ui/Table/Table";
import AdminTable from "@/components/view/Admin/AdminTable";

import { Admin } from "@/interfaces";
import { getAdminsData } from "@/services/adminDataFetching";
import { columns } from "./columsAdmin";

const AllAdmins = async () => {
  const data: any = await getAdminsData();
  console.log(data);

  return (
    <AdminTable title="All Doctors">
      <Table<Admin> columns={columns} data={data} />
    </AdminTable>
  );
};

export default AllAdmins;
