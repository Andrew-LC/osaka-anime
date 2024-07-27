"use client";

import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    IconArrowLeft,
    IconBrandTabler,
    IconSettings,
    IconUserBolt,
    IconMenu2,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

function SideBarMenu({ open, setOpen }) {
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
                                        src=""
                                        className="h-7 w-7 flex-shrink-0 rounded-full"
                                        width={50}
                                        height={50}
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

export default function Dashboard() {
    const [open, setOpen] = useState(false);

    return (
        <main className="dark:bg-black w-full h-[100dvh] flex-row md:flex md:p-0 p-4">
            <div className="flex items-center justify-between md:hidden">
                <h1 className="font-bold text-xl dark:text-white">Dashboard</h1>
                <button
                    className="p-2 md:hidden align-right"
                    onClick={() => setOpen(!open)}
                >
                    <IconMenu2 className="text-neutral-700 dark:text-neutral-200 h-6 w-6" />
                </button>
            </div>
            <SideBarMenu open={open} setOpen={setOpen} />
            <section className="flex-1 flex flex-col gap-4 h-full w-full p-4 pt-10 md:p-10">
                <h1 className="font-bold text-4xl dark:text-white">Dashboard</h1>
                <Tabs defaultValue="members" className="w-[400px]">
                    <TabsList>
                        <TabsTrigger value="members">Member Management</TabsTrigger>
                        <TabsTrigger value="payments">Payments</TabsTrigger>
                        <TabsTrigger value="employees">Employee Management</TabsTrigger>
                    </TabsList>
                    <TabsContent className="dark:text-white" value="members">Make changes to your account here.</TabsContent>
                    <TabsContent className="dark:text-white" value="payments">Change your password here.</TabsContent>
                    <TabsContent className="dark:text-white" value="employees">Change your password here.</TabsContent>
                </Tabs>
            </section>
        </main>
    );
}
