export const getNewAccessToken = async (token: string) => {
  try {
    const res = await fetch(
      `
      https://barber-service-backend.vercel.app/api/v1/auth/refresh-token`,
      {
        method: "POST",
        body: JSON.stringify({ refreshToken: token }),
        headers: { "Content-Type": "application/json", Authorization: token },
      }
    );
    const data = await res.json();
    return data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message);
  }
};
