import { clerkMiddleware } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

// Define public routes that should be accessible without authentication
const publicRoutes = ["/login", "/joinus"];
const protectedRoutes = ["/checkout", "/profile"];

export default clerkMiddleware(async (auth, req) => {
  const user = await auth();

  // Redirect authenticated users away from public routes
  if (user.userId && publicRoutes.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Redirect unauthenticated users trying to access protected routes
  if (!user.userId && protectedRoutes.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Allow the request to proceed if none of the above conditions are met
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
