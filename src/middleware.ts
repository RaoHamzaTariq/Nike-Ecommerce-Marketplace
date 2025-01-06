
// This function can be marked `async` if using `await` inside
export function middleware() {
//   return NextResponse.redirect(new URL('/home', request.url))
console.log("Middleware Function fire")
// const isLogin=true
// if(!isLogin){
//     return NextResponse.redirect(new URL('/login',request.url))
// }
// if(isLogin){
//     return NextResponse.next()
// }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/joinus',
}