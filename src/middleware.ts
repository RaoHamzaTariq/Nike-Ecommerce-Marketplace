import {clerkMiddleware} from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const publicRoutes = ["/login", "/joinus"];
const protectedRoutes = ["/checkout", "/profile"];

export default clerkMiddleware(async (auth, req) => {
  const auths = await auth();

  if (auths.userId && publicRoutes.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/", req.url));
  }


  if (!auths.userId && protectedRoutes.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
