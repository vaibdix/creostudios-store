import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/cart",
    "/category/cfbba7ef-17a8-4f09-9629-c9b8c470ace4",
    "/category/37bf67d7-0b6f-4b0b-a41f-70eb873492e2",
    "/category/16e625b3-0151-48a0-b82d-35ce02f53bcf",
    "/category/bff34dcc-f339-4b6b-8c29-70cde33a7042",
    "/licensepage",
    "/contact",
  ],
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
