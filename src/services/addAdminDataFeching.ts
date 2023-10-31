"use server";

import { authOptions } from "@/app/lib/AuthOption";

import { getServerSession } from "next-auth";
import { revalidateTag } from "next/cache";
export const addAdminsData = async (data: any) => {
  console.log(data);
  const session: any = await getServerSession(authOptions);
  console.log(session, "service token");

  const res = await fetch(
    "https://barber-service-backend.vercel.app/api/v1/users/create-admin",
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
