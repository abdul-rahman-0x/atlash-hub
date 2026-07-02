"use client";

import Image from "next/image";
import { LogOut } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type UserMenuProps = {
    name: string;
    image?: string | null;
};

export default function UserMenu({ name, image }: UserMenuProps) {
    const router = useRouter();

    async function handleLogout() {
        await authClient.signOut();
        router.refresh();
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 border rounded-full px-3 py-1 hover:bg-black/5">
                    {image && (
                        <Image
                            src={image}
                            alt={name}
                            width={32}
                            height={32}
                            className="rounded-full"
                        />
                    )}

                    <span className="text-sm font-medium">{name}</span>
                </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
                <DropdownMenuItem
                    onClick={handleLogout}
                    className="cursor-pointer">
                    <LogOut className="mr-2 size-4" />
                    Sign out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
