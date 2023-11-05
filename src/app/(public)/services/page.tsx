import { getServiceData } from "@/app/utils/serviceData";
import ServicesPage from "@/components/ui/Services/Services";

const Services = async () => {
  const data: any = await getServiceData();

  console.log(data);
  return (
    <div className="container ">
      <ServicesPage data={data} />
    </div>
  );
};

export default Services;
