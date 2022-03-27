import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";


export async function middleware(req) {
  if (req.nextUrl.pathname === "/dashboard" || req.nextUrl.pathname ==="/absense" || req.nextUrl.pathname ==="/calender") {
    const session = await getToken({ req, secret: process.env.JWT_SECRET });
    if (!session) {
        const url = req.nextUrl.clone()
        url.pathname = '/api/auth/signin'
        return NextResponse.rewrite(url)
    }
    return NextResponse.next();
  }
  

}
