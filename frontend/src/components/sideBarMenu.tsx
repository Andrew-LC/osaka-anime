"use client";

import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
    IconArrowLeft,
    IconBrandTabler,
    IconSettings,
    IconUserBolt,
} from "@tabler/icons-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function SideBarMenu({ open, setOpen }) {
    const links = [
        {
            label: "Dashboard",
            href: "/dashboard",
            icon: (
                <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "Profile",
            href: "/profile",
            icon: (
                <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "Settings",
            href: "/settings",
            icon: (
                <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "Logout",
            href: "#",
            icon: (
                <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
    ];

    return (
        <div
            className={cn(
                "fixed inset-0 z-50 bg-white dark:bg-black transition-transform transform",
                open ? "translate-x-0" : "-translate-x-full",
                "md:relative md:translate-x-0"
            )}
        >
            <Sidebar open={open} setOpen={setOpen}>
                <SidebarBody className="flex flex-col justify-between">
                    <div className="text-xl mt-8 flex flex-col gap-2">
                        {links.map((link, idx) => (
                            <SidebarLink className="text-3xl" key={idx} link={link} />
                        ))}
                    </div>
                    <div>
                        <SidebarLink
                            link={{
                                label: "Andrew Lamichhane",
                                href: "/profile",
                                icon: (
                                    <Image
                                        src="https://images.unsplash.com/photo-1721646120400-2411520f303a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8"
                                        className="h-7 w-7 flex-shrink-0 rounded-full"
                                        width={80}
                                        height={80}
                                        alt="Avatar"
                                    />
                                ),
                            }}
                        />
                    </div>
                </SidebarBody>
            </Sidebar>
        </div>
    );
}
