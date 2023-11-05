/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable @next/next/no-img-element */
"use client";

import { getReviewData } from "@/app/utils/serviceData";

const ReviewPage = async () => {
  const data = await getReviewData();
  return (
    <div className="container text-center card mx-auto  d-flex mt-36 mb-36">
      <div className="section-header mb-5">
        <h1 className="text-[#FEF9EC] text-uppercase mt-5">REVIEWS</h1>
        <h3 className="mt-5 text-[#FEF9EC]">
          What Our Client says <br /> Says{" "}
        </h3>
      </div>

      <div className=" mb-10 mt-10 col-md-3 sm:ml-0 lg:ml-16  lg:max-w-[900px] md:max-w-[900px] sm:max-w-[700px] ">
        {data?.data?.map((review: any) => {
          return (
            <div
              key={data.id}
              className="max-w-[300px] mx-auto sm:mx-0 p-8 bg-[#FEF9EC] rounded-xl shadow-md space-y-2"
            >
              <img
                className="h-24 mx-auto rounded-full ring-4"
                src={review.service.serviceImage}
                alt="img"
              />
              <div className="text-center space-y-2">
                <div className="space-y-0.5">
                  <p className="text-lg text-black font-semibold">
                    {review.user.fullName}
                  </p>
                  <p className=" text-gray-500 font-medium">{review.review}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReviewPage;
