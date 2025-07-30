import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className={cn("sticky top-1 w-fit rounded-2xl mx-auto px-4 bg-background my-6 py-1 flex justify-center items-center border border-border shadow-sm")}>
            <nav className="flex gap-4">
                <Link
                    href="/"
                    className="rounded-md font-medium hover:bg-accent h-10 px-4 py-2"
                >
                    Users
                </Link>
                <Link
                    href="/saved"
                    className="rounded-md font-medium hover:bg-accent h-10 px-4 py-2"
                >
                    Saved Users
                </Link>
            </nav>
        </footer>
    );
}
