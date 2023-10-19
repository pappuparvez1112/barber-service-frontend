import Table from "@/components/ui/Table/Table";

import UserTable from "@/components/view/Service/UsersTable";
import { getAllUsersData } from "@/services/users/usersDatafetching";
import { columns } from "./columsUsers";

const AllReviews = async () => {
  const data: any = await getAllUsersData();
  console.log(data);

  return (
    <UserTable title="All Users">
      <Table columns={columns} data={data} />
    </UserTable>
  );
};

export default AllReviews;
