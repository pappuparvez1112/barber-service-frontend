/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable @next/next/no-img-element */
"use client";

import { getReviewData } from "@/app/utils/serviceData";
import ReviewCard from "@/components/view/Public/reviewCard";
import { Card } from "antd";

const ReviewPage = async () => {
  const data = await getReviewData();
  return (
    <div className=" text-center card shadow-sm d-flex col-md-3 ms-5 ">
      <div className="section-header mb-5">
        <h1 className="text-primary text-uppercase mt-5">REVIEWS</h1>
        <h3 className="mt-5">
          What Our Client says <br /> Says{" "}
        </h3>
      </div>

      <div className="text-center ">
        {data?.data?.map((review: any) => {
          return (
            <ReviewCard key={data.id} title={"Client Reviews"}>
              <Card
                hoverable
                style={{ width: 300 }}
                cover={
                  <img
                    className="w-full"
                    src={review.service.serviceImage}
                    width={500}
                    height={300}
                    alt={"pic"}
                  ></img>
                }
              >
                <h1>{review.service.name}</h1>
                <h1>{review.user.fullName}</h1>
                <p>{review.review}</p>
              </Card>
            </ReviewCard>
            // <div key={data.id}>
            //   <img
            //     style={{
            //       backgroundSize: "cover",
            //       backgroundRepeat: "no-repeat",
            //     }}
            //     className="mx-3"
            //     src={
            //       "https://as2.ftcdn.net/v2/jpg/04/92/24/83/1000_F_492248356_grA11KTSiJTzMXbITt2Q9k6Cv6L4wGqf.jpg"
            //     }
            //     alt="pic"
            //     width="60"
            //   />
            //   <div>
            //     <h3 className="text-primary ">client review</h3>
            //     <p className="m-0">{review.review}</p>
            //   </div>
            // </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReviewPage;
