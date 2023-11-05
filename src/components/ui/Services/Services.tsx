/* eslint-disable @next/next/no-async-client-component */
// /* eslint-disable @next/next/no-async-client-component */
/* eslint-disable @next/next/no-img-element */
"use client";

const ServicesPage = async ({ data }: any) => {
  // const data: any = await getServiceData();

  // console.log(data);

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
    <div className="container sm:container md:container lg:container ">
      <div className="text-center mt-6 sm:mt-12 mx-auto sm:mx-auto px-4 sm:px-4 md:px-8 lg:px-10 xl:px-12">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-4 text-teal-500">
          OUR SERVICES
        </h1>
        <h2 className="text-lg sm:text-xl text-white mb-2">What We Do</h2>
        <p className="text-lg sm:text-xl text-white mb-4 ">
          We run a men’s barbershop in its best traditions. Our team will help
          you look stylish and confident, and most importantly, manly.
        </p>
      </div>

      <div className="container md:container sm:container  grid gap-5 sm:gap-8 md:gap-14 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 pt-5  lg:max-w-[900px] md:max-w-[900px] sm:max-w-[400px] sm:ml-0 lg:ml-16">
        {data?.data?.map((service: any, index: number) => {
          return (
            <div
              className="bg-[#FEF9EC] rounded-lg shadow-lg overflow-hidden mb-5 sm:mb-10 md:mb-16 p-2 "
              key={index}
            >
              <img
                className="w-full object-cover"
                src={service.serviceImage}
                alt="Image Alt Text"
              />
              <div className="mt-4">
                <h2 className="text-xl sm:text-2xl font-semibold mb-2">
                  {service.name}
                </h2>
                <p className="text-gray-600 mb-2">{service.description}</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none">
                  Book Now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesPage;
