import { NextRequest, NextResponse } from "next/server";
import { userServices } from "./services/user.service";
import { UserRole } from "./constants/user.role";

export async function  proxy(request: NextRequest){
    
    let isAuthenticated = false;
    let isAdmin = false;
    const {data:session} = await userServices.getSession();
    // console.log(session)
    const pathname = request.nextUrl.pathname;
    if(session){
        isAuthenticated = true;
        isAdmin = session.user.role === UserRole.admin
    }
    if(!isAuthenticated){
        NextResponse.redirect(new URL("/login", request.url));
    }

    if(isAdmin && pathname.startsWith('/dashboard')){
        NextResponse.redirect(new URL('/admin-dashboard', request.url));
    }

    if(!isAdmin && pathname.startsWith('/admin-dashboard')){
        NextResponse.redirect(new URL("/dashboard", request.url));
    }

    return NextResponse.next();
}


export const config = {
    matcher: [
        "/dashboard",
        "/dashboard/:path*",
        "/admin-dashboard",
        "/admin-dashboard/:path*"
        
    ]
}