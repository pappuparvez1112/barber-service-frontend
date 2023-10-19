import Table from "@/components/ui/Table/Table";
import ServiceTable from "@/components/view/Service/ServiceTable";

import { Service } from "@/interfaces";
import { getServicesData } from "@/services/services/servicesDataFetching";
import { columns } from "../columsService";

const AllServices = async () => {
  const data: any = await getServicesData();
  console.log(data);

  return (
    <ServiceTable title="All Services">
      <Table<Service> columns={columns} data={data} />
    </ServiceTable>
  );
};

export default AllServices;
