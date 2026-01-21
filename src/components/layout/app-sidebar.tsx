"use client"

import * as React from "react"
import {
  Bot,
  DatabaseBackup,
  LucideIcon,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
} from "@/components/ui/sidebar"
import { adminRoutes } from "@/routes/adminRoutes"
import { userRoutes } from "@/routes/userRoutes"
import { Route } from "@/types"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
 
  navMain: [
    {
      title: "Blogs",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Write Blog",
          url: "/dashboard/write-blog",
        },
        {
          title: "View Blogs",
          url: "/dashboard/view-blogs",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Analytics",
      url: "#",
      icon: DatabaseBackup,
      items: [
        {
          title: "View Stats",
          url: "/dashboard/blogs-stats",
        },
        
      ],
    },
   
  ],
 
}

export function AppSidebar({user, ...props }:{user:{role:string}} & React.ComponentProps<typeof Sidebar>) {

let routes:Route[] = [];
switch(user.role){
  case "admin": 
      routes = adminRoutes
      break;
  case "user":
    routes = userRoutes;
    break;
  default:
    routes = [];
    break;
}


  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent>
        <NavMain items={routes} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
