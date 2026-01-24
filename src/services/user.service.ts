import { authClient } from "@/lib/auth-client";
import { cookies } from "next/headers"

export const userServices = {
    getSession: async()=>{
        try {
            const cookieStore = await cookies();
            const res = await fetch(`${process.env.AUTH_URL}/get-session`, {
                headers: {
                 Cookie: cookieStore.toString()   
                },
                cache: "no-store"
            },
           
        )
        console.log(res)
         const session = await res.json();
         if(!session){
            throw new Error('Session not found!');
         }
         return {data: session, error: null}
        } catch (error:any) {
            console.error(error)
            return{data: null, error: error.message}
        }
    }
}