import { getToken } from "next-auth/jwt";
import { NextResponse, type NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
const hybridRoutes = ["/", "/login", "/register"];
const userAccessibleRoutes = [
  "/",
  "/dashboard",
  "/my-profile",
  "/my-appointments",
];

const rolesRedirect: Record<string, unknown> = {
  user: "https://barber-service-frontend.vercel.app/dashboard",
  admin: "https://barber-service-frontend.vercel.app/admins/dashboard",
  super_admin:
    "https://barber-service-frontend.vercel.app/super_admin/dashboard",
};
export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  //   console.log(token, "token middleware");
  const { pathname } = request.nextUrl;
  if (!token) {
    if (hybridRoutes.includes(pathname)) {
      return NextResponse.next();
    }
    return NextResponse.redirect(
      "https://barber-service-frontend.vercel.app/login"
    );
  }
  const role = token?.role as string;
  if (
    (role === "admin" && pathname.startsWith("/admins")) ||
    (role === "user" && userAccessibleRoutes.includes(pathname)) ||
    (role === "super_admin" && pathname.startsWith("/super_admin"))
  ) {
    return NextResponse.next();
  }
  if (
    pathname === "/" &&
    (role === "admin" || role === "super_admin") &&
    rolesRedirect[role]
  ) {
    return NextResponse.redirect(rolesRedirect[role] as string);
  }
  // if (
  //   (role === "admin" && pathname.startsWith("/admins")) ||
  //   (role === "patient" && patientAccessibleRoutes.includes(pathname)) ||
  //   (role === "doctor" && pathname.startsWith("/doctors"))
  // ) {
  //   return NextResponse.redirect(rolesRedirect[role] as string);
  // }
  // return NextResponse.redirect(
  //   "https://barber-service-frontend.vercel.app/login"
  // );
  const response = NextResponse.redirect(
    "https://barber-service-frontend.vercel.app"
  );
  response.cookies.delete("next-auth.session-token");
  return response;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    //hybrid
    "/",
    "/login",
    "/register",

    //user
    "/dashboard",
    "/my-profile",
    "/my-appointments",

    //admins
    "/admins/:page*",
    "/super_admin/:page*",
  ],
};
