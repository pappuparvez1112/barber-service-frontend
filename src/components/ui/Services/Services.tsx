/* eslint-disable @next/next/no-async-client-component */
// /* eslint-disable @next/next/no-async-client-component */
/* eslint-disable @next/next/no-img-element */
"use client";
import { getServiceData } from "@/app/utils/serviceData";
import ServiceCard from "@/components/view/Public/PublicCard";
import { Card, Row } from "antd";

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
    <>
      <div className="justify-center text-center mt-12">
        <h1 className="mb-6" style={{ color: "#1CC7C1" }}>
          OUR SERVICES
        </h1>
        <h2 className="mb-3">What We Do</h2>
        <p className="mb-6">
          We run a men’s barbershop in its best traditions. Our guys will help
          you look stylish and confident, and most importantly, manly
        </p>
      </div>
      <Row className="ml-28" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <div className="flex col-span-8 text-center pl-8 ml-8 ">
          <div className="flex gap-14 card-deck w-75 row mt-5 pt-5 mr-5 ">
            {data?.data?.map((service: any) => {
              return (
                <ServiceCard key={data.id} title={service.category.title}>
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
                </ServiceCard>
              );
            })}
          </div>
        </div>
        {/* <div className="flex col-span-8 text-center pl-8 ml-8 ">
          <div className=" card-deck w-75 row mt-5 pt-5 mr-5 ">
            {data?.data?.map((service: any) => {
              return (
                <ServiceCard key={data.id} title={service.category.title}>
                  <Card
                    hoverable
                    style={{ width: 300 }}
                    cover={
                      <Image
                        className="w-full"
                        src={service.serviceImage}
                        width={500}
                        height={500}
                        alt={"pic"}
                      ></Image>
                    }
                  >
                    <h1>{service.name}</h1>
                    <p>{service.description}</p>
                  </Card>
                </ServiceCard>
              );
            })}
          </div>
        </div>
        <div className="flex col-span-8 text-center pl-8 ml-8 ">
          <div className=" card-deck w-75 row mt-5 pt-5 mr-5 ">
            {data?.data?.map((service: any) => {
              return (
                <ServiceCard key={data.id} title={service.category.title}>
                  <Card
                    hoverable
                    style={{ width: 300 }}
                    cover={
                      <Image
                        className="w-full"
                        src={service.serviceImage}
                        width={500}
                        height={500}
                        alt={"pic"}
                      ></Image>
                    }
                  >
                    <h1>{service.name}</h1>
                    <p>{service.description}</p>
                  </Card>
                </ServiceCard>
              );
            })}
          </div>
        </div> */}
      </Row>
    </>
  );
};

export default ServicesPage;

// // {data.map((service: any) => {
// //   return (
// //     <Link key={data.id} href={`/available-services/${service.id}`}>
// //       <PublicCard title={service.category.title}>
// //         <div>
// //           <Image src={LoginImage} width={500} alt="login image" />
// //         </div>

// //         {/* <Buttons>Service details</Buttons> */}
// //       </PublicCard>
// //     </Link>
// //   );
// // })}

// const ServicePage = () => {
//   return (
//     <div>
//       <Services />
//     </div>
//   );
// };

// export default ServicePage;
