"use server";

import { authOptions } from "@/app/lib/AuthOption";
import { Admin } from "@/interfaces";
import { getServerSession } from "next-auth";
export const getReviewsData = async (): Promise<Admin[]> => {
  const session: any = await getServerSession(authOptions);
  console.log(session, "service token");

  const res = await fetch(
    "https://barber-service-backend.vercel.app/api/v1/reviews",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: session?.accessToken,
      },
      next: {
        tags: ["All Reviews"],
      },
    }
  );
  const { data } = await res.json();
  console.log(data, "data");
  if (res.ok && data) {
    return data;
  } else {
    return [];
  }
};
