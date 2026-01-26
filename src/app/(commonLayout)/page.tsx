import { authClient } from "@/lib/auth-client";
import { userServices } from "@/services/user.service";

export default async function Home() {
  // const session = await authClient.getSession(); // session will be empty 
  /*
    This is a server component
    and server doesnot have access to client browser cookies
    getSession() calls /api/auth/get-session api 
    and includes the cookies of browser by default.

    as this is a server component so there will be no brower cookies in the server, so it will be null or empty
    This is why session is empty, as it cann't retrieve any session data from the database. 
    It's not possible to retrieve session data without session id, and better auth saves the session id in the browser cookies.
  */

  // TO get the user session, we have created a service 
  // const {data} = await userServices.getSession();
  // // console.log("Session Data: ",data)
  return (
  <div>
    Home page
  </div>
  );
}
