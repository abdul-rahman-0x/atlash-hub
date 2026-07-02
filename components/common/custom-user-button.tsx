"use client";

import Link from "next/link";
import { useState } from "react";
import {
    Building2,
    LayoutDashboard,
    ShieldCheck,
    User,
    LogOut,
    ChevronDown,
} from "lucide-react";

export default function CustomUserButton() {
    const [open, setOpen] = useState(false);

    // TODO: Replace with Better Auth session data
    const user = {
        name: "Abdul",
        image: null,
    };

    const handleLogout = async () => {
        // TODO: Replace with:
        // await authClient.signOut();
        console.log("logout");
    };

    return (
        <div className="relative">
            {/* Trigger */}
            <button
                onClick={() => setOpen(!open)}
                className="h-10 px-2 rounded-xl border-2 border-black bg-white flex items-center gap-2 justify-center shadow-[3px_3px_0px_0px_#000] hover:translate-x-px hover:translate-y-px hover:shadow-none transition-all cursor-pointer">
                <div className="h-8 w-8 rounded-lg bg-black text-white flex items-center justify-center font-black">
                    {user.name.charAt(0)}
                </div>

                <ChevronDown className="size-4" />
            </button>

            {/* Dropdown */}
            {open && (
                <div className="absolute right-0 mt-3 w-80 rounded-2xl border-2 border-black bg-[#F9F7F0] shadow-[5px_5px_0px_0px_#000] overflow-hidden z-50">
                    {/* User Info */}
                    <div className="p-5 border-b-2 border-black">
                        <div className="flex items-center gap-3">
                            <div className="h-12 w-12 rounded-xl bg-black text-white flex items-center justify-center font-black text-lg">
                                {user.name.charAt(0)}
                            </div>

                            <div>
                                <h3 className="font-black uppercase">
                                    {user.name}
                                </h3>
                                <p className="text-sm text-black/60">
                                    Authenticated User
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Organization */}
                    <div className="p-5 border-b-2 border-black">
                        <div className="flex items-center gap-2 mb-3">
                            <Building2 className="size-4" />
                            <h2 className="font-black uppercase">
                                Organization
                            </h2>
                        </div>

                        <p className="text-sm text-black/60 mb-4">
                            Switch between departmental hubs and organizational
                            nodes.
                        </p>

                        <button className="w-full rounded-xl border-2 border-black bg-white py-2 px-4 font-bold">
                            Select Organization
                        </button>
                    </div>

                    {/* Admin */}
                    <div className="p-5 border-b-2 border-black">
                        <div className="flex items-center gap-2 mb-3">
                            <ShieldCheck className="size-4" />
                            <h2 className="font-black uppercase">
                                System Admin
                            </h2>
                        </div>

                        <p className="text-sm text-black/60 mb-4">
                            Audit and authorize pending infrastructure
                            deployments.
                        </p>

                        <Link href="/admin">
                            <button className="w-full flex items-center justify-center rounded-xl border-2 border-black bg-[#FFB38A] py-2 px-4 font-black uppercase shadow-[4px_4px_0px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
                                <LayoutDashboard className="mr-2 size-4" />
                                Launch Center
                            </button>
                        </Link>
                    </div>

                    {/* Profile */}
                    <Link
                        href="/profile"
                        className="flex items-center gap-3 px-5 py-4 hover:bg-black/5 transition-colors">
                        <User className="size-4" />
                        Profile
                    </Link>

                    {/* Logout */}
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-5 py-4 hover:bg-red-50 transition-colors text-left">
                        <LogOut className="size-4" />
                        Sign Out
                    </button>
                </div>
            )}
        </div>
    );
}
