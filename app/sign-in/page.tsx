"use client";

import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { ArrowRight, Rocket, Shield, Users, Sparkles } from "lucide-react";

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
        <div className="min-h-screen flex flex-col lg:flex-row overflow-hidden">
            {/* ===================================== */}
            {/* HERO / BRANDING */}
            {/* ===================================== */}
            <div className="relative w-full lg:w-[55%] bg-[#B19CFF] overflow-hidden h-[220px] sm:h-[300px] lg:h-screen">
                {/* background effects */}
                <div className="absolute -left-20 -top-20 h-[500px] w-[500px] rounded-full bg-black/10 blur-[100px]" />
                <div className="absolute -right-20 bottom-0 h-[300px] w-[300px] rounded-full bg-white/30 blur-[80px]" />

                <div className="relative z-10 flex h-full flex-col justify-center px-6 py-6 sm:px-10 lg:px-24">
                    {/* logo */}
                    <div className="flex items-center gap-3 mb-4 lg:mb-8">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-black bg-white shadow-[4px_4px_0_0_#000]">
                            <Sparkles className="size-6" />
                        </div>

                        <div>
                            <h1 className="text-2xl lg:text-4xl font-black tracking-tight">
                                ATLASH
                            </h1>

                            <p className="text-black/60 text-xs lg:text-sm">
                                Discover what builders are shipping.
                            </p>
                        </div>
                    </div>

                    {/* hero text */}
                    <h2 className="text-3xl sm:text-5xl lg:text-8xl font-black leading-[0.85] tracking-tighter">
                        LAUNCH
                        <br />
                        DISCOVER
                        <br />
                        BUILD.
                    </h2>

                    <p className="mt-3 lg:mt-6 max-w-xl text-sm sm:text-base lg:text-xl font-medium text-black/70 leading-relaxed">
                        The community where developers, founders and indie
                        makers showcase what they&apos;re building.
                    </p>

                    {/* badges */}
                    <div className="hidden sm:flex flex-wrap gap-4 mt-6 lg:mt-8">
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
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="
                                    flex
                                    items-center
                                    bg-white
                                    border-2
                                    border-black
                                    rounded-xl
                                    px-4
                                    py-3
                                    font-bold
                                    shadow-[4px_4px_0_0_#000]
                                    transition-all
                                    hover:translate-x-[2px]
                                    hover:translate-y-[2px]
                                    hover:shadow-none
                                ">
                                <item.icon className="mr-2 size-5" />
                                {item.text}
                            </div>
                        ))}
                    </div>

                    {/* desktop stats */}
                    <div className="hidden lg:flex mt-20 items-center gap-6">
                        <div className="text-6xl font-black">500+</div>

                        <div className="font-bold text-black/70">
                            Products launched
                            <br />
                            by builders worldwide
                        </div>

                        <div className="ml-6 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border-2 border-black transition-all hover:bg-black hover:text-white">
                            <ArrowRight className="size-7" />
                        </div>
                    </div>
                </div>
            </div>

            {/* ===================================== */}
            {/* AUTH SECTION */}
            {/* ===================================== */}
            <div className="flex flex-1 items-center justify-center bg-[#0D0D0D] p-4 sm:p-6 lg:p-10">
                <div className="w-full max-w-md">
                    <div className="rounded-[32px] border border-white/10 bg-[#171717] p-8 shadow-2xl">
                        <h2 className="text-3xl font-black text-white">
                            Welcome back
                        </h2>

                        <p className="mt-2 text-white/50">
                            Sign in to continue exploring products.
                        </p>

                        {/* Google */}
                        <button
                            onClick={handleGoogle}
                            className="
                                mt-8
                                flex
                                h-14
                                w-full
                                cursor-pointer
                                items-center
                                justify-center
                                gap-3
                                rounded-xl
                                bg-white
                                font-bold
                                text-black
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:bg-gray-100
                                hover:shadow-[0_10px_30px_rgba(255,255,255,0.15)]
                                active:scale-[0.98]
                            ">
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                />
                            </svg>
                            Continue with Google
                        </button>

                        {/* GitHub */}
                        <button
                            onClick={handleGithub}
                            className="
                                mt-4
                                flex
                                h-14
                                w-full
                                cursor-pointer
                                items-center
                                justify-center
                                gap-3
                                rounded-xl
                                border
                                border-white/20
                                text-white
                                font-bold
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:bg-white/5
                                hover:shadow-[0_10px_30px_rgba(255,255,255,0.08)]
                                active:scale-[0.98]
                            ">
                            <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.8-.26.8-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.72.08-.72 1.21.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58A12.01 12.01 0 0 0 24 12C24 5.37 18.63 0 12 0z" />
                            </svg>
                            Continue with GitHub
                        </button>

                        {/* footer */}
                        <div className="mt-8 pt-8 border-t border-white/10">
                            <p className="text-center text-xs text-white/40 leading-relaxed">
                                By continuing, you agree to our{" "}
                                <Link
                                    href="/terms"
                                    className="text-white/70 underline hover:text-white transition-colors">
                                    Terms of Service
                                </Link>{" "}
                                and{" "}
                                <Link
                                    href="/privacy"
                                    className="text-white/70 underline hover:text-white transition-colors">
                                    Privacy Policy
                                </Link>
                                .
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
