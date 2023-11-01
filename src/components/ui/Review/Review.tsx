/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable @next/next/no-img-element */
"use client";

import { getReviewData } from "@/app/utils/serviceData";

const ReviewPage = async () => {
  const data = await getReviewData();
  return (
    <div className="container text-center card  d-flex col-md-3 ms-5 ">
      <div className="section-header mb-5">
        <h1 className="text-primary text-uppercase mt-5">REVIEWS</h1>
        <h3 className="mt-5">
          What Our Client says <br /> Says{" "}
        </h3>
      </div>

      <div className=" mb-10 mt-10 ml-12 ">
        {data?.data?.map((review: any) => {
          return (
          
            <div
              key={data.id}
              className="max-w-sm mx-auto p-8 bg-white rounded-xl shadow-md space-y-2"
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
