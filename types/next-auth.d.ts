import "next-auth";

declare module "next-auth" {
  interface token {
    user: {
      email: string;
      accessToken: string;
      role: string;
      contactNo: string;
      fullName: string;
    };
  }
}
