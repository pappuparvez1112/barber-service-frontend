/* eslint-disable @next/next/no-async-client-component */
// /* eslint-disable @next/next/no-async-client-component */
/* eslint-disable @next/next/no-img-element */
"use client";
import { getServiceData } from "@/app/utils/serviceData";

const ServicesPage = async () => {
  const data: any = await getServiceData();

  console.log(data);

  // const onclickHandler = async (id: string) => {
  //   message.loading("details.....");
  //   try {
  //     await data(id);
  //     console.log(data);

  //     message.success("Details shown successfully");
  //   } catch (err: any) {
  //     console.error(err.message);
  //     message.error(err.message);
  //   }
  // };
  return (
    <div className="md:container mx-auto mb-10">
      <div className="justify-center text-center mt-12 ">
        <h1 className="mb-6" style={{ color: "#1CC7C1" }}>
          OUR SERVICES
        </h1>
        <h2 className="mb-3">What We Do</h2>
        <p className="mb-6">
          We run a men’s barbershop in its best traditions. Our guys will help
          you look stylish and confident, and most importantly, manly
        </p>
      </div>
      {/* <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <div className="container grid gap-4 grid-cols-3 grid-rows-2   mt-5 pt-5 mr-5  ">
          {data?.data?.map((service: any) => {
            return (
              <ServiceCard  key={data.id} title={"Book Now"}>
                <Link href={"/booking"}>
                  <Card
                    hoverable
                    style={{ width: 300 }}
                    cover={
                      <img
                        className="w-full"
                        src={service.serviceImage}
                        width={500}
                        height={300}
                        alt={"pic"}
                      ></img>
                    }
                  >
                    <h1>{service.name}</h1>
                    <p>{service.description}</p>
                  </Card>
                </Link>
              </ServiceCard>
            );
          })}
        </div>
      </Row> */}

      <div className="container max-w-[1000px] ml-64  grid gap-32 grid-cols-3 grid-rows-2 mt-5 pt-5 mr-5">
        {data?.data?.map((service: any) => {
          return (
            <div
              className="bg-white rounded-lg shadow-lg overflow-hidden container"
              key={data.id}
            >
              <img
                className="w-72 h-48 object-cover"
                src={service.serviceImage}
                alt="Image Alt Text"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">Book Now</h2>
                <p className="text-gray-600 mb-2">{service.name}</p>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesPage;
