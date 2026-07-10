"use client";

import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { Rocket, Shield, Users, Sparkles } from "lucide-react";

export default function SignInPage() {
    const handleGoogle = async () => {
        await authClient.signIn.social({
            provider: "google",
        });
    };

    const handleGithub = async () => {
        await authClient.signIn.social({
            provider: "github",
        });
    };

    return (
        <main className="min-h-screen bg-[#0D0D0D] lg:grid lg:grid-cols-[1.1fr_0.9fr]">
            {/* LEFT BRAND PANEL (Desktop Only) */}
            <section className="relative hidden overflow-hidden bg-[#B19CFF] lg:flex">
                {/* Background decoration */}
                <div className="absolute -left-32 -top-32 h-[520px] w-[520px] rounded-full bg-white/20 blur-[120px]" />
                <div className="absolute -right-24 bottom-0 h-[320px] w-[320px] rounded-full bg-black/10 blur-[100px]" />

                <div className="relative z-10 flex h-screen w-full flex-col justify-center px-20">
                    {/* Brand Logo & Name */}
                    <div className="flex items-center gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-black bg-white">
                            <Sparkles className="size-7" />
                        </div>

                        <div>
                            <h1 className="text-4xl font-black tracking-tight">
                                ATLASH
                            </h1>

                            <p className="mt-1 text-sm font-medium text-black/60">
                                Discover what builders are shipping.
                            </p>
                        </div>
                    </div>

                    {/* Hero Header */}
                    <div className="mt-14 max-w-2xl">
                        <h2 className="text-8xl font-black leading-[0.82] tracking-tighter">
                            LAUNCH
                            <br />
                            DISCOVER
                            <br />
                            BUILD.
                        </h2>

                        <p className="mt-8 max-w-xl text-xl leading-relaxed text-black/70">
                            A curated community where developers, founders, and
                            indie makers launch products, discover new ideas,
                            and connect with builders worldwide.
                        </p>
                    </div>

                    {/* Feature Badges */}
                    <div className="mt-12 flex flex-wrap gap-4">
                        {[
                            {
                                icon: Rocket,
                                text: "Launch Products",
                            },
                            {
                                icon: Users,
                                text: "Builder Community",
                            },
                            {
                                icon: Shield,
                                text: "Verified Launches",
                            },
                        ].map((item) => (
                            <div
                                key={item.text}
                                className="flex items-center gap-2 rounded-2xl border-2 border-black bg-white px-5 py-3 font-bold">
                                <item.icon className="size-5" />
                                <span>{item.text}</span>
                            </div>
                        ))}
                    </div>

                    {/* Stats Counter */}
                    <div className="mt-20 flex items-end gap-6">
                        <div className="text-6xl font-black tracking-tight">
                            500+
                        </div>

                        <div className="pb-2 text-lg font-semibold leading-snug text-black/70">
                            Products launched
                            <br />
                            by builders worldwide.
                        </div>
                    </div>
                </div>
            </section>

            {/* AUTH SECTION */}
            <section className="flex min-h-screen items-center justify-center px-6 py-10 sm:px-8 lg:px-12">
                <div className="w-full max-w-md">
                    {/* Authentication Card */}
                    <div className="rounded-4xl border border-white/10 bg-[#171717] p-6 shadow-2xl sm:p-8">
                        <div className="space-y-2">
                            <h2 className="text-4xl font-black tracking-tight text-white">
                                Welcome back
                            </h2>

                            <p className="text-base leading-relaxed text-white/60">
                                Continue with your preferred account to access
                                Atlash and discover new products.
                            </p>
                        </div>

                        <div className="mt-8 space-y-4">
                            {/* Google Auth Button */}
                            <button
                                onClick={handleGoogle}
                                className="flex w-full items-center justify-center gap-3 rounded-2xl cursor-pointer border-2 border-white bg-white px-5 py-4 font-bold text-black transition-colors duration-200 hover:bg-neutral-200 active:scale-[0.99]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="22"
                                    height="22"
                                    viewBox="0 0 24 24"
                                    fill="none">
                                    <path
                                        fill="#4285F4"
                                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                    />
                                    <path
                                        fill="#34A853"
                                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                    />
                                    <path
                                        fill="#FBBC05"
                                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22c-.08-.21-.19-.42-.19-.63z"
                                    />
                                    <path
                                        fill="#EA4335"
                                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                    />
                                </svg>
                                Continue with Google
                            </button>

                            {/* GitHub Auth Button */}
                            <button
                                onClick={handleGithub}
                                className="flex w-full items-center justify-center gap-3 rounded-2xl cursor-pointer border border-white/15 bg-transparent px-5 py-4 font-bold text-white transition-colors duration-200 hover:bg-white/5 active:scale-[0.99]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="21"
                                    height="21"
                                    viewBox="0 0 24 24"
                                    fill="currentColor">
                                    <path d="M12 .5C5.65.5.5 5.66.5 12.02c0 5.09 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.14c-3.2.7-3.88-1.37-3.88-1.37-.52-1.34-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.76 2.7 1.25 3.36.95.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.67 0-1.25.45-2.27 1.19-3.08-.12-.29-.52-1.46.11-3.04 0 0 .98-.31 3.2 1.18a11.1 11.1 0 015.82 0c2.22-1.5 3.2-1.18 3.2-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.83 1.19 3.08 0 4.4-2.69 5.37-5.25 5.66.41.36.78 1.06.78 2.14v3.17c0 .31.21.66.79.55A11.52 11.52 0 0023.5 12C23.5 5.66 18.35.5 12 .5z" />
                                </svg>
                                Continue with GitHub
                            </button>
                        </div>

                        <div className="my-8 h-px bg-white/10" />

                        {/* Terms & Privacy */}
                        <p className="text-center text-xs leading-relaxed text-white/45">
                            By continuing, you agree to our{" "}
                            <Link
                                href="/terms"
                                className="underline underline-offset-4 transition-colors hover:text-white">
                                Terms of Service
                            </Link>{" "}
                            and{" "}
                            <Link
                                href="/privacy"
                                className="underline underline-offset-4 transition-colors hover:text-white">
                                Privacy Policy
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
