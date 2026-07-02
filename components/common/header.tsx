import { Activity } from "lucide-react";
import Link from "next/link";
import UserMenu from "./user-menu";

import { Button } from "../ui/button";
import { getCurrentSession } from "@/lib/auth-session";

export default async function Header() {
    const session = await getCurrentSession();

    return (
        <div className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8">
            <header className="max-w-6xl mx-auto h-16 bg-white border-2 border-black rounded-2xl shadow-[4px_4px_0px_0px_#000] flex items-center justify-between px-6">
                <Link
                    href="/"
                    className="flex items-center gap-2 font-black text-xl shrink-0">
                    <Activity className="size-6" />
                    ATLASH
                </Link>

                {session ? (
                    <UserMenu
                        name={session.user.name}
                        image={session.user.image}
                    />
                ) : (
                    <div className="flex items-center gap-3">
                        <Link href="/sign-in">
                            <Button
                                variant="outline"
                                size="sm"
                                className="lowercase">
                                log in
                            </Button>
                        </Link>

                        <Link href="/sign-in">
                            <Button size="sm" className="lowercase">
                                get started
                            </Button>
                        </Link>
                    </div>
                )}
            </header>
        </div>
    );
}
