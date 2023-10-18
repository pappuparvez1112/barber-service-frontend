export const getServiceData = async () => {
  // const token = await getServerSession(authOptions);
  // console.log(token, "service token");
  try {
    const res = await fetch(
      "https://barber-service-backend.vercel.app/api/v1/services",
      {
        cache: "no-cache",
      }
    );
    const data = await res.json();
    return data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message);
  }
};
export const getReviewData = async () => {
  try {
    const res = await fetch(
      "https://barber-service-backend.vercel.app/api/v1/reviews",
      {
        cache: "no-cache",
      }
    );
    const data = await res.json();
    return data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message);
  }
};
