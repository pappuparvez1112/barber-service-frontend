"use server";

import { authOptions } from "@/app/lib/AuthOption";

import { getServerSession } from "next-auth";
import { revalidateTag } from "next/cache";
export const addCategoriesData = async (data: any) => {
  console.log(data);
  const session: any = await getServerSession(authOptions);
  console.log(session, "service token");

  const res = await fetch(
    "https://barber-service-backend.vercel.app/api/v1/categories/create-category",
    {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: session?.accessToken,
      },
      body: JSON.stringify(data),
    }
  );
  const response = await res.json();
  console.log(response);
  revalidateTag("all-doctors");
};
// export const getReviewData = async () => {
//   try {
//     const res = await fetch(
//       "https://barber-service-backend.vercel.app/api/v1/reviews",
//       {
//         cache: "no-cache",
//       }
//     );
//     const data = await res.json();
//     return data;
//   } catch (error: any) {
//     console.log(error);
//     throw new Error(error.message);
//   }
// };
