"use client";

import React, { useActionState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import BackHome from "@/components/common/back-home";

import { addProductAction } from "@/lib/products/product-actions";
import { FormState } from "@/types";

const initialState: FormState = {
    success: false,
    errors: undefined,
    message: "",
    timestamp: undefined,
};

const LIMITS = {
    name: 50,
    websiteUrl: 200,
    tagline: 80,
    tags: 100,
    description: 400,
} as const;

export default function ProductSubmitForm() {
    const [state, formAction, isPending] = useActionState(
        addProductAction,
        initialState,
    );

    const { errors, success } = state;

    useEffect(() => {
        if (!success) return;

        toast.success("Product submitted successfully", {
            description: "Your project is now under review.",
            duration: 5000,
        });

        const form = document.getElementById(
            "product-submit-form",
        ) as HTMLFormElement | null;

        form?.reset();
    }, [success, state.timestamp]);

    const getFieldErrors = (fieldName: string): string[] => {
        if (!errors) return [];

        const typedErrors = errors as Record<string, string[]>;

        return typedErrors[fieldName] ?? [];
    };

    const fieldError = (fieldName: string) => {
        const fieldErrors = getFieldErrors(fieldName);
        if (fieldErrors.length === 0) return null;

        return (
            <div aria-live="polite" className="pt-1">
                <p className="text-[11px] font-bold leading-4 text-red-500">
                    {fieldErrors[0]}
                </p>
            </div>
        );
    };

    return (
        <main className="fixed inset-0 z-50 overflow-y-auto bg-background px-4 font-sans">
            {/* Back to home - Absolute positioned */}
            <div className="group absolute left-5 top-5 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-opacity hover:opacity-70 sm:left-8 sm:top-7">
                <BackHome />
            </div>

            <div className="flex min-h-full items-center justify-center py-12 sm:py-16">
                {/* card container  */}
                <div className="w-full max-w-xl rounded-none border-2 border-foreground bg-[#F7F7F2] p-8 shadow-foreground shadow-nb-md dark:bg-[#111015] dark:border-zinc-800 sm:p-10">
                    {/* Page heading */}
                    <header className="mb-6 text-left">
                        <h1 className="text-3xl font-bold font-mono tracking-tight text-foreground sm:text-4xl">
                            Share what you&apos;ve{" "}
                            <span className="text-[#E97B77]">built.</span>
                        </h1>

                        <p className="mt-2 text-sm font-medium text-muted-foreground">
                            Tell the community about your product and get it
                            discovered by other builders.
                        </p>
                    </header>

                    {/* Form */}
                    <form
                        id="product-submit-form"
                        action={formAction}
                        className="space-y-4 text-left">
                        <div className="space-y-5">
                            {/* Product name */}
                            <div className="space-y-1.5">
                                <Label
                                    htmlFor="name"
                                    className="text-xs font-black uppercase tracking-wider text-zinc-950 dark:text-white">
                                    Product name
                                    <span className="text-red-500 ml-0.5">
                                        *
                                    </span>
                                </Label>

                                <Input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    maxLength={LIMITS.name}
                                    autoComplete="off"
                                    placeholder="e.g. Atlash"
                                    className="h-10 rounded-none border-2 border-foreground bg-transparent px-3 text-sm shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-foreground"
                                />

                                {fieldError("name")}
                            </div>

                            {/* Website */}
                            <div className="space-y-1.5">
                                <Label
                                    htmlFor="websiteUrl"
                                    className="text-xs font-black uppercase tracking-wider text-zinc-950 dark:text-white">
                                    Website URL
                                    <span className="text-red-500 ml-0.5">
                                        *
                                    </span>
                                </Label>

                                <Input
                                    id="websiteUrl"
                                    name="websiteUrl"
                                    type="url"
                                    required
                                    maxLength={LIMITS.websiteUrl}
                                    inputMode="url"
                                    autoComplete="url"
                                    placeholder="https://yourproduct.com"
                                    className="h-10 rounded-none border-2 border-foreground bg-transparent px-3 text-sm shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-foreground"
                                />

                                {fieldError("websiteUrl")}
                            </div>

                            {/* Tagline */}
                            <div className="space-y-1.5">
                                <Label
                                    htmlFor="tagline"
                                    className="text-xs font-black uppercase tracking-wider text-zinc-950 dark:text-white">
                                    Tagline
                                    <span className="text-red-500 ml-0.5">
                                        *
                                    </span>
                                </Label>

                                <Input
                                    id="tagline"
                                    name="tagline"
                                    type="text"
                                    required
                                    maxLength={LIMITS.tagline}
                                    placeholder="What does your product do?"
                                    className="h-10 rounded-none border-2 border-foreground bg-transparent px-3 text-sm shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-foreground"
                                />

                                {fieldError("tagline")}
                            </div>

                            {/* Tags */}
                            <div className="space-y-1.5">
                                <Label
                                    htmlFor="tags"
                                    className="text-xs font-black uppercase tracking-wider text-zinc-950 dark:text-white">
                                    Tags
                                    <span className="text-muted-foreground ml-1 normal-case font-medium">
                                        (up to 6)
                                    </span>
                                    <span className="text-red-500 ml-0.5">
                                        *
                                    </span>
                                </Label>

                                <Input
                                    id="tags"
                                    name="tags"
                                    type="text"
                                    required
                                    maxLength={LIMITS.tags}
                                    placeholder="AI, SaaS, Developer Tools"
                                    className="h-10 rounded-none border-2 border-foreground bg-transparent px-3 text-sm shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-foreground"
                                />

                                {fieldError("tags")}
                            </div>

                            {/* Description */}
                            <div className="space-y-1.5">
                                <div className="flex items-center justify-between">
                                    <Label
                                        htmlFor="description"
                                        className="text-xs font-black uppercase tracking-wider text-zinc-950 dark:text-white">
                                        Product story
                                        <span className="text-red-500 ml-0.5">
                                            *
                                        </span>
                                    </Label>

                                    <span className="text-[10px] font-bold text-muted-foreground">
                                        Max {LIMITS.description} characters
                                    </span>
                                </div>

                                <Textarea
                                    id="description"
                                    name="description"
                                    required
                                    maxLength={LIMITS.description}
                                    placeholder="Tell builders what you built, why you built it, and what makes it useful."
                                    className="h-20 resize-none rounded-none border-2 border-foreground bg-transparent px-3 py-2 text-sm leading-relaxed shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-foreground"
                                />

                                {fieldError("description")}
                            </div>
                        </div>

                        {/* Bottom action */}
                        <div className="mt-6  border-foreground/10">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                <div className="min-w-0">
                                    <p className="text-xs font-bold text-zinc-950 dark:text-white">
                                        Ready to launch?
                                    </p>

                                    <p className="mt-0.5 text-[11px] font-medium text-muted-foreground">
                                        Your submission will be reviewed before
                                        publication.
                                    </p>
                                </div>

                                <Button type="submit" disabled={isPending}>
                                    {isPending ? (
                                        <>
                                            <Loader2 className="mr-2 size-4 animate-spin" />
                                            Submitting
                                        </>
                                    ) : (
                                        <>Launch project</>
                                    )}
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}
