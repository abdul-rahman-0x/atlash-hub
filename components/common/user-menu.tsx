"use client";

import Image from "next/image";
import Link from "next/link";
import { LogOut, LayoutDashboard } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type UserMenuProps = {
    name: string;
    image?: string | null;
    isAdmin: boolean;
};

export default function UserMenu({ name, image, isAdmin }: UserMenuProps) {
    const router = useRouter();

    async function handleLogout() {
        await authClient.signOut();
        router.refresh();
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 border rounded-full px-3 py-1 hover:bg-black/5 transition-colors">
                    {image ? (
                        <Image
                            src={image}
                            alt={name}
                            width={32}
                            height={32}
                            className="rounded-full"
                        />
                    ) : (
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
                            {name.charAt(0).toUpperCase()}
                        </div>
                    )}

                    <span className="text-sm font-medium">{name}</span>
                </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
                align="end"
                className="w-56 rounded-xl border-2 border-black">
                {isAdmin && (
                    <>
                        <DropdownMenuItem asChild>
                            <Link
                                href="/admin"
                                className="cursor-pointer flex items-center">
                                <LayoutDashboard className="mr-2 size-4" />
                                Admin Dashboard
                            </Link>
                        </DropdownMenuItem>

                        <DropdownMenuSeparator />
                    </>
                )}

                <DropdownMenuItem
                    onClick={handleLogout}
                    className="cursor-pointer">
                    <LogOut className="mr-2 size-4" />
                    Sign Out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
