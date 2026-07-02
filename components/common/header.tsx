import { Activity } from "lucide-react";
import Link from "next/link";
import { SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { Suspense } from "react"; // 1. Import Suspense

export default function Header() {
    return (
        <div className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8">
            <header className="max-w-6xl mx-auto h-16 bg-white border-2 border-black rounded-2xl shadow-[4px_4px_0px_0px_#000] flex items-center justify-between px-6">
                <Link
                    href="/"
                    className="flex items-center gap-2 font-black text-xl shrink-0">
                    <Activity className="size-6" /> ATLASH
                </Link>

                <div className="flex items-center gap-3">
                    {/* 2. Wrap auth components in Suspense to prevent blocking the route */}
                    <Suspense
                        fallback={
                            <div className="w-24 h-9 bg-black/5 animate-pulse rounded-lg" />
                        }>
                        <SignedOut>
                            <SignInButton mode="modal">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="lowercase">
                                    log in
                                </Button>
                            </SignInButton>

                            <SignUpButton mode="modal">
                                <Button
                                    variant="default"
                                    size="sm"
                                    className="lowercase">
                                    get started
                                </Button>
                            </SignUpButton>
                        </SignedOut>
                    </Suspense>
                </div>
            </header>
        </div>
    );
}
