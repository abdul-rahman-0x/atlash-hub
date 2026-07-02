"use client";

import { FormField } from "@/components/forms/form-field";
import { Button } from "@/components/ui/button";
import { addProductAction } from "@/lib/products/product-actions";
import { FormState } from "@/types";
import { Loader2, ChevronLeft, Rocket, Users } from "lucide-react";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import Link from "next/link";

const initialState: FormState = {
    success: false,
    errors: undefined,
    message: "",
};

export default function ProductSubmitForm() {
    const [state, formAction, isPending] = useActionState(
        addProductAction,
        initialState,
    );

    const { errors, success } = state;

    useEffect(() => {
        if (success) {
            toast.success("Product submitted successfully", {
                description:
                    "Your project is now under review and will appear after approval.",
                duration: 5000,
            });
        }
    }, [success]);

    const getFieldErrors = (fieldName: string): string[] => {
        if (!errors) return [];
        return (errors as Record<string, string[]>)[fieldName] ?? [];
    };

    return (
        <div className="max-w-5xl mx-auto px-4 pt-10 pb-20">
            {/* back */}
            <div className="mb-8">
                <Link href="/" className="inline-flex items-center gap-3 group">
                    <div
                        className="
                        p-2
                        rounded-xl
                        bg-[#FFB38A]
                        border-2
                        border-black
                        shadow-[3px_3px_0px_0px_#000]
                        transition-all
                        group-hover:shadow-none
                        group-hover:translate-x-[2px]
                        group-hover:translate-y-[2px]
                    ">
                        <ChevronLeft className="size-4" />
                    </div>

                    <span className="font-black text-black/60 group-hover:text-black">
                        back home
                    </span>
                </Link>
            </div>

            {/* hero */}
            <section className="mb-12">
                <h1
                    className="
                    text-[clamp(2.2rem,5vw,4rem)]
                    font-black
                    leading-[0.95]
                    tracking-tight
                    max-w-4xl
                ">
                    Share what you&apos;ve
                    <span
                        className="
                        inline-block
                        mx-3
                        px-5
                        py-1
                        bg-[#FFB38A]
                        border-4
                        border-black
                        rounded-2xl
                        shadow-[5px_5px_0px_0px_#000]
                        -rotate-2
                        text-white
                        italic
                    ">
                        built
                    </span>
                    with the community.
                </h1>

                <p
                    className="
                    mt-5
                    text-lg
                    text-black/65
                    max-w-2xl
                    font-medium
                    leading-relaxed
                ">
                    Launch your startup, side project, AI tool, developer
                    product or experiment and get discovered by builders
                    worldwide.
                </p>

                {/* stats */}
                <div className="flex flex-wrap gap-4 mt-8">
                    <div
                        className="
                        bg-white
                        border-2
                        border-black
                        rounded-2xl
                        px-5
                        py-4
                        shadow-[4px_4px_0px_0px_#000]
                    ">
                        <div className="flex gap-2 items-center mb-1">
                            <Rocket className="size-4" />
                            <span className="text-xs font-black uppercase">
                                launches
                            </span>
                        </div>

                        <p className="text-3xl font-black">500+</p>
                    </div>

                    <div
                        className="
                        bg-white
                        border-2
                        border-black
                        rounded-2xl
                        px-5
                        py-4
                        shadow-[4px_4px_0px_0px_#000]
                    ">
                        <div className="flex gap-2 items-center mb-1">
                            <Users className="size-4" />
                            <span className="text-xs font-black uppercase">
                                makers
                            </span>
                        </div>

                        <p className="text-3xl font-black">2k+</p>
                    </div>
                </div>
            </section>

            {/* form */}
            <form
                action={formAction}
                className="
                    bg-white
                    border-2
                    border-black
                    rounded-[28px]
                    p-8
                    md:p-10
                    shadow-[8px_8px_0px_0px_#000]
                    space-y-8
                ">
                <div className="grid md:grid-cols-2 gap-8">
                    <FormField
                        label="name"
                        name="name"
                        id="name"
                        placeholder="Linear"
                        required
                        onChange={() => {}}
                        error={getFieldErrors("name")}
                    />

                    <FormField
                        label="website"
                        name="websiteUrl"
                        id="websiteUrl"
                        placeholder="https://linear.app"
                        required
                        onChange={() => {}}
                        error={getFieldErrors("websiteUrl")}
                    />

                    <FormField
                        label="slug"
                        name="slug"
                        id="slug"
                        placeholder="linear"
                        required
                        onChange={() => {}}
                        error={getFieldErrors("slug")}
                    />

                    <FormField
                        label="short intro"
                        name="tagline"
                        id="tagline"
                        placeholder="Issue tracking you'll enjoy using"
                        required
                        onChange={() => {}}
                        error={getFieldErrors("tagline")}
                    />

                    <div className="md:col-span-2">
                        <FormField
                            label="tags"
                            name="tags"
                            id="tags"
                            placeholder="saas, productivity, developer-tools"
                            required
                            onChange={() => {}}
                            error={getFieldErrors("tags")}
                        />
                    </div>

                    <div className="md:col-span-2">
                        <FormField
                            label="full story"
                            name="description"
                            id="description"
                            placeholder="Tell the community what you built, why you built it and who it's for..."
                            required
                            onChange={() => {}}
                            error={getFieldErrors("description")}
                            textarea
                        />
                    </div>
                </div>

                <div
                    className="
                    border-t
                    border-black/10
                    pt-8
                    flex
                    justify-between
                    items-center
                    gap-6
                    flex-wrap
                ">
                    <div>
                        <p className="font-black text-sm">Ready to launch?</p>

                        <p className="text-sm text-black/50">
                            Your submission will be reviewed first.
                        </p>
                    </div>

                    <Button
                        type="submit"
                        disabled={isPending}
                        size="lg"
                        className="
                            min-w-[220px]
                            text-base
                            font-black
                        ">
                        {isPending ? (
                            <Loader2 className="size-5 animate-spin" />
                        ) : (
                            <>
                                <Rocket className="mr-2 size-5" />
                                Launch Project
                            </>
                        )}
                    </Button>
                </div>
            </form>
        </div>
    );
}
