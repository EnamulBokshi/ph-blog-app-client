import { LucideIcon } from "lucide-react"

export type Route = {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  
}