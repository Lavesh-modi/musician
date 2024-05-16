import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL('/home', request.url)
const Auth =  request.cookies.get('accessToken')
if (!Auth){
  return NextResponse.redirect(new URL('/login', request.url))
}
return
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/contact',"/","/dashboard"],
}