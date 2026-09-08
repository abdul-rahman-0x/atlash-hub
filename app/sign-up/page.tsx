"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import BackHome from "@/components/common/back-home";

type AuthProvider = "email" | "google" | "github" | null;

export default function SignUpPage() {
    const router = useRouter();
    const { data: session, isPending } = authClient.useSession();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const [loadingProvider, setLoadingProvider] = useState<AuthProvider>(null);
    const [error, setError] = useState("");

    const isLoading = loadingProvider !== null || isPending;

    useEffect(() => {
        if (session) {
            router.push("/explore");
        }
    }, [session, router]);

    if (isPending) {
        return (
            <div className="flex min-h-screen w-full items-center justify-center bg-background">
                <Loader2 className="size-7 animate-spin text-foreground" />
            </div>
        );
    }

    const handleCredentialsSignUp = async (
        event: React.FormEvent<HTMLFormElement>,
    ) => {
        event.preventDefault();

        if (isLoading) return;

        setError("");
        setLoadingProvider("email");

        try {
            const { error: signUpError } = await authClient.signUp.email({
                email,
                password,
                name,
                callbackURL: "/",
            });

            if (signUpError) {
                setError(signUpError.message || "Failed to create an account.");
            }
        } catch (err) {
            const errorMessage =
                err instanceof Error
                    ? err.message
                    : "Unable to create your account right now.";

            setError(`${errorMessage} Please try again.`);
        } finally {
            setLoadingProvider(null);
        }
    };

    const handleSocialSignIn = async (provider: "google" | "github") => {
        if (isLoading) return;

        setError("");
        setLoadingProvider(provider);

        try {
            const { error: socialError } = await authClient.signIn.social({
                provider,
                callbackURL: "/",
            });

            if (socialError) {
                setError(
                    socialError.message ||
                        `Unable to continue with ${provider}.`,
                );
                setLoadingProvider(null);
            }
        } catch (err) {
            const errorMessage =
                err instanceof Error
                    ? err.message
                    : `Unable to continue with ${
                          provider === "google" ? "Google" : "GitHub"
                      }.`;

            setError(`${errorMessage} Please try again.`);
            setLoadingProvider(null);
        }
    };

    return (
        <main className="relative flex min-h-screen w-full items-center justify-center bg-background px-4 py-20 sm:px-6">
            {/* Back to home */}
            <div className="group absolute left-5 top-5 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-opacity hover:opacity-70 sm:left-8 sm:top-7">
                <BackHome />
            </div>

            {/* Sign up card */}
            <section className="w-full max-w-xl rounded-none border-2 border-foreground bg-[#F7F7F2] p-8 text-center shadow-foreground shadow-nb-md sm:p-12 lg:p-16">
                <div className="mx-auto w-full max-w-md">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold tracking-tight text-foreground font-mono ">
                            Create your account
                        </h1>

                        <p className="mt-2 text-sm font-medium text-muted-foreground">
                            Join Atlash Hub and start sharing what you&apos;re
                            building.
                        </p>
                    </div>

                    {error && (
                        <div
                            role="alert"
                            aria-live="polite"
                            className="mb-5 border-2 border-destructive/20 bg-destructive/10 p-3 text-left text-xs font-semibold text-destructive">
                            {error}
                        </div>
                    )}

                    <form
                        onSubmit={handleCredentialsSignUp}
                        className="space-y-5 text-left">
                        {/* Name */}
                        <div className="space-y-2">
                            <Label htmlFor="name">
                                Name <span className="text-red-500">*</span>
                            </Label>

                            <Input
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                placeholder="Your name"
                                required
                                disabled={isLoading}
                                value={name}
                                onChange={(event) =>
                                    setName(event.target.value)
                                }
                            />
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                            <Label htmlFor="email">
                                Email <span className="text-red-500">*</span>
                            </Label>

                            <Input
                                id="email"
                                name="email"
                                type="email"
                                inputMode="email"
                                autoComplete="email"
                                placeholder="name@example.com"
                                required
                                disabled={isLoading}
                                value={email}
                                onChange={(event) =>
                                    setEmail(event.target.value)
                                }
                            />
                        </div>

                        {/* Password */}
                        <div className="space-y-2">
                            <Label htmlFor="password">
                                Password <span className="text-red-500">*</span>
                            </Label>

                            <div className="relative">
                                <Input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    autoComplete="new-password"
                                    placeholder="••••••••"
                                    required
                                    minLength={8}
                                    maxLength={128}
                                    disabled={isLoading}
                                    value={password}
                                    onChange={(event) =>
                                        setPassword(event.target.value)
                                    }
                                    className="pr-10"
                                />

                                <button
                                    type="button"
                                    aria-label={
                                        showPassword
                                            ? "Hide password"
                                            : "Show password"
                                    }
                                    aria-pressed={showPassword}
                                    disabled={isLoading}
                                    onClick={() =>
                                        setShowPassword((current) => !current)
                                    }
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground disabled:pointer-events-none disabled:opacity-50">
                                    {showPassword ? (
                                        <EyeOff size={16} aria-hidden="true" />
                                    ) : (
                                        <Eye size={16} aria-hidden="true" />
                                    )}
                                </button>
                            </div>
                        </div>

                        <Button
                            type="submit"
                            disabled={isLoading}
                            className="w-full">
                            {loadingProvider === "email" && (
                                <Loader2 className="mr-2 size-4 animate-spin" />
                            )}
                            Create Account
                        </Button>
                    </form>

                    <div className="relative my-7">
                        <span className="absolute inset-x-0 top-1/2 h-px bg-foreground/10" />

                        <span className="relative bg-[#F7F7F2] px-3 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                            Or
                        </span>
                    </div>

                    {/* Social sign in */}
                    <div className="grid grid-cols-2 gap-3">
                        <Button
                            type="button"
                            variant="outline"
                            className="text-foreground"
                            disabled={isLoading}
                            onClick={() => handleSocialSignIn("google")}>
                            {loadingProvider === "google" ? (
                                <Loader2 className="mr-2 size-4 animate-spin" />
                            ) : (
                                <svg
                                    className="mr-2 size-4"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true">
                                    <path
                                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                        fill="#4285F4"
                                    />
                                    <path
                                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                        fill="#34A853"
                                    />
                                    <path
                                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                        fill="#FBBC05"
                                    />
                                    <path
                                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                        fill="#EA4335"
                                    />
                                </svg>
                            )}
                            Google
                        </Button>

                        <Button
                            type="button"
                            variant="outline"
                            className="text-foreground"
                            disabled={isLoading}
                            onClick={() => handleSocialSignIn("github")}>
                            {loadingProvider === "github" ? (
                                <Loader2 className="mr-2 size-4 animate-spin" />
                            ) : (
                                <svg
                                    className="mr-2 size-4"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true">
                                    <path d="M12 .5C5.65.5.5 5.66.5 12.02c0 5.09 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.14c-3.2.7-3.88-1.37-3.88-1.37-.52-1.34-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.76 2.7 1.25 3.36.95.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.67 0-1.25.45-2.27 1.19-3.08.12-.29-.52-1.46.11-3.04 0 0 .98-.31 3.2 1.18a11.1 11.1 0 015.82 0c2.22-1.5 3.2-1.18 3.2-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.83 1.19 3.08 0 4.4-2.69 5.37-5.25 5.66.41.36.78 1.06.78 2.14v3.17c0 .31.21.66.79.55A11.52 11.52 0 0023.5 12C23.5 5.66 18.35.5 12 .5z" />
                                </svg>
                            )}
                            GitHub
                        </Button>
                    </div>

                    {/* Terms */}
                    <p className="mt-7 text-center text-xs leading-normal text-muted-foreground">
                        By creating an account, you agree to our{" "}
                        <Link
                            href="/terms"
                            className="font-semibold text-foreground hover:underline">
                            Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link
                            href="/privacy"
                            className="font-semibold text-foreground hover:underline">
                            Privacy Policy
                        </Link>
                        .
                    </p>

                    {/* Existing account */}
                    <p className="mt-6 border-t border-foreground/10 pt-6 text-sm font-medium text-muted-foreground">
                        Already have an account?{" "}
                        <Link
                            href="/sign-in"
                            className="font-semibold text-[#E97B77] hover:underline">
                            Sign in
                        </Link>
                    </p>
                </div>
            </section>
        </main>
    );
}
