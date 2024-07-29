"use client"

import React, { useState } from "react";
import { IconMenu2 } from "@tabler/icons-react";
import SideBarMenu from "@/components/sideBarMenu";
import { Dumbbell } from 'lucide-react';
import Link from "next/link";

export default function PagesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [open, setOpen] = useState(false);
    return (
        <main className="dark:bg-black dark:text-white w-full h-[100vh] flex-row md:flex md:p-0 p-4">
            <div className="flex items-center justify-between md:hidden">
                <Link href="#" className="flex items-center gap-2" prefetch={false}>
                    <Dumbbell className="h-8 w-8" />
                    <span className="text-xl font-bold">Fitness Hub</span>
                </Link>
                <button
                    className="p-2 md:hidden align-right"
                    onClick={() => setOpen(!open)}
                >
                    <IconMenu2 className="text-neutral-700 dark:text-neutral-200 h-6 w-6" />
                </button>
            </div>
            <SideBarMenu open={open} setOpen={setOpen} />
            <section className="pt-8 md:p-12 h-full w-full flex-1 ">
                {children}
            </section>
        </main>
    );
}
