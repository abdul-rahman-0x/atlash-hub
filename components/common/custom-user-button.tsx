"use client";

import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { Building2, ShieldCheck, LayoutDashboard } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function CustomUserButton() {
    return (
        <div className="h-10 w-10 rounded-xl border-2 border-black bg-white flex items-center justify-center shadow-[3px_3px_0px_0px_#000] hover:translate-x-px hover:translate-y-px hover:shadow-none transition-all cursor-pointer overflow-hidden">
            <UserButton
                appearance={{
                    elements: {
                        userButtonAvatarBox: "h-9 w-9 rounded-lg",
                        userButtonTrigger:
                            "focus:shadow-none focus:outline-none",
                    },
                }}>
                {/* Organization Tab - Branded Violet */}
                <UserButton.UserProfilePage
                    label="Organization"
                    labelIcon={<Building2 className="size-4" />}
                    url="organization">
                    <div className="p-6 space-y-4 bg-[#F9F7F0] min-h-[300px]">
                        <h2 className="text-xl font-black uppercase tracking-tight text-black">
                            Enterprise Units
                        </h2>
                        <p className="text-sm text-black/60 font-medium">
                            Switch between departmental hubs and organizational
                            nodes.
                        </p>
                        <OrganizationSwitcher
                            hidePersonal={true}
                            appearance={{
                                elements: {
                                    rootBox:
                                        "w-full border-2 border-black rounded-xl overflow-hidden shadow-[2px_2px_0px_0px_#000]",
                                    organizationSwitcherTrigger: "py-2",
                                },
                            }}
                        />
                    </div>
                </UserButton.UserProfilePage>

                {/* Admin Tab - Branded Peach */}
                <UserButton.UserProfilePage
                    label="Admin"
                    labelIcon={<ShieldCheck className="size-4" />}
                    url="admin">
                    <div className="p-6 space-y-4 bg-[#F9F7F0] min-h-[300px]">
                        <h2 className="text-xl font-black uppercase tracking-tight text-black">
                            System Admin
                        </h2>
                        <p className="text-sm text-black/60 font-medium">
                            Audit and authorize pending infrastructure
                            deployments.
                        </p>
                        <Link href="/admin" className="block">
                            <Button className="w-full justify-center font-black uppercase bg-[#FFB38A] text-black border-2 border-black shadow-[4px_4px_0px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
                                <LayoutDashboard className="mr-2 size-4" />
                                Launch Center
                            </Button>
                        </Link>
                    </div>
                </UserButton.UserProfilePage>
            </UserButton>
        </div>
    );
}
