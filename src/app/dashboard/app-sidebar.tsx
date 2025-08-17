"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";
import Image from "next/image";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

import {
  CircleUserRound,
  CreditCard,
  LayoutDashboard,
  LogOut,
  Settings,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ItemProp {
  title: string;
  url: string;
  icon: LucideIcon;
}

const items: ItemProp[] = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Payment",
    url: "/dashboard/payment",
    icon: CreditCard,
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: Settings,
  },
  {
    title: "Profile",
    url: "/dashboard/profile",
    icon: CircleUserRound,
  },
  {
    title: "Logout",
    url: "/login",
    icon: LogOut,
  },
];

export const AppSidebar = () => {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader>
        <figure className="mb-6 ml-4 flex flex-col items-center gap-4">
          <Image
            src="/assets/images/sidebar-header-image.jpg"
            alt="Damola Spencer's avatar"
            width={100}
            height={100}
            priority
            className="rounded-full w-25 h-25"
          />
          <figcaption className="text-xl font-open-sans">
            Damola Spencer
          </figcaption>
        </figure>
      </SidebarHeader>
      <SidebarContent className="font-dm-sans">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-3">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={item.url === pathname}>
                    <Link
                      href={item.url}
                      replace={item.url === "/login"}
                      className={cn(
                        "flex items-center gap-3 text-[#A8A8A8] text-lg py-5 px-15.5",
                        item.url === pathname &&
                          "!text-red border-l-4 border-l-red !bg-white shadow-[0_12px_24px_0_#9393931A]"
                      )}
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Image
          src="/assets/images/sidebar-footer-image.png"
          alt=""
          width={150}
          height={150}
          className="w-37.5 h-37.5 mx-auto"
        />
      </SidebarFooter>
    </Sidebar>
  );
};
