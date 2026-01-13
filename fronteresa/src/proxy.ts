import { NextRequest, NextResponse } from "next/server";

const publicRoutes = [
  { route: "/sign-in", whenAuthenticated: "redirect" },
  { route: "/sign-up", whenAuthenticated: "redirect" },
  { route: "/c", whenAuthenticated: "next" },
] as const;


const REDIRECT_WHEN_NOT_AUTHENTICATED = "/sign-in";

export function proxy(request: NextRequest) {
  const url = request.nextUrl.pathname;
  const publicRoute = publicRoutes.find((route) => route.route == url);
  const token = request.cookies.get("auth_token");

  if (!token && !publicRoute) {
    const url = request.nextUrl.clone();
    url.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED;

    return NextResponse.redirect(url);
  }

  if (token && publicRoute) {
    if (publicRoute.whenAuthenticated != "next") {
      const url = request.nextUrl.clone();
      url.pathname = "/";

      return NextResponse.redirect(url);
    }
  }

  if (token && !publicRoute) {
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
