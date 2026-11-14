"use client";

import React, { useEffect, useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

export default function ConfirmedPage() {
    const [secondsLeft, setSecondsLeft] = useState(3);

    useEffect(() => {
        try {
            const channel = new BroadcastChannel("atlash_auth");
            channel.postMessage("verified");
            localStorage.setItem("atlash_auth_verified", Date.now().toString());
        } catch { }

        const countdownInterval = setInterval(() => {
            setSecondsLeft((prev) => (prev > 1 ? prev - 1 : 1));
        }, 1000);

        const redirectTimer = setTimeout(() => {
            window.location.href = "/";
        }, 3000);

        return () => {
            clearInterval(countdownInterval);
            clearTimeout(redirectTimer);
        };
    }, []);

    return (
        <main className="relative flex min-h-screen w-full items-center justify-center bg-background px-4 py-20 sm:px-6">
            <section className="w-full max-w-md rounded-none border-2 border-foreground bg-[#F7F7F2] p-8 text-center shadow-foreground shadow-nb-md sm:p-12">
                <div className="mx-auto flex size-14 items-center justify-center rounded-none border-2 border-foreground bg-[#D2ECDB] mb-6">
                    <CheckCircle2 className="size-7 text-[#0F201D]" />
                </div>

                <h1 className="text-2xl font-bold font-mono tracking-tight text-foreground sm:text-3xl mb-2">
                    Successfully Verified
                </h1>

                <p className="text-sm font-medium text-muted-foreground leading-relaxed mb-6">
                    Your session is active. Redirecting you to Atlash Hub in {secondsLeft}s...
                </p>

                <div className="flex items-center justify-center gap-2 text-xs font-mono font-medium text-muted-foreground">
                    <Loader2 className="size-3.5 animate-spin text-foreground" />
                    <span>Taking you to homepage</span>
                </div>
            </section>
        </main>
    );
}
