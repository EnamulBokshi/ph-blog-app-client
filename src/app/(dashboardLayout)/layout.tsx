import { AppSidebar } from "@/components/layout/app-sidebar"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { UserRole } from "@/constants/user.role"
import { userServices } from "@/services/user.service"


export default async function Page({admin, user} : {admin: React.ReactNode, user:  React.ReactNode}) {
  const {data}  = await userServices.getSession();

const userInfo = data.user;

  return (
    <SidebarProvider>
      <AppSidebar user={userInfo}/>
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
         {userInfo.role === UserRole.admin? admin:user}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
