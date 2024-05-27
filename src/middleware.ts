import { NextRequest, NextResponse } from "next/server";
 
let locales = ['en', 'pt'];
 
export function middleware(request: NextRequest) {
  const imageRegex = /\.(svg|png|jpeg|jpg|ico)$/i;
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}` || imageRegex.test(pathname)
  );

  if (pathnameHasLocale) return;
 
  const locale = 'en';
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}
 
export const config = {
  matcher: [
    '/((?!_next).*)',
  ],
}