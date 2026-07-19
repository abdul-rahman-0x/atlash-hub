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
        description: "Your project is now under review.",
        duration: 5000,
      });
    }
  }, [success]);

  const getFieldErrors = (fieldName: string): string[] => {
    if (!errors) return [];
    return (errors as Record<string, string[]>)[fieldName] ?? [];
  };

  return (
    <div className="max-w-7xl mx-auto pt-28 md:pt-22 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-start">
        {/* LEFT SIDE: Content & Info */}
        <div className="lg:sticky lg:top-10">
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="p-2 rounded-xl bg-[#FFB38A] border-2 border-black shadow-[3px_3px_0px_0px_#000] transition-all group-hover:shadow-none group-hover:translate-x-[2px] group-hover:translate-y-[2px]">
                <ChevronLeft className="size-4" />
              </div>
              <span className="font-black text-black/60 group-hover:text-black">
                back home
              </span>
            </Link>
          </div>

          <header className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-black leading-[0.9] tracking-tight">
              Share what you&apos;ve
              <span className="relative inline-block mx-4 group">
                {/* Decorative shadow layer */}
                <span className="absolute inset-0 bg-black rounded-2xl translate-x-2 translate-y-2 opacity-20 group-hover:translate-x-1 group-hover:translate-y-1 transition-all"></span>
                {/* Main Badge */}
                <span className="relative block px-6 py-2 bg-[#FFB38A] border-[3px] border-black rounded-2xl -rotate-3 text-white italic shadow-[5px_5px_0px_0px_#000] group-hover:rotate-0 transition-transform cursor-default">
                  built
                </span>
              </span>
              with the community.
            </h1>
            <p className="text-xl text-black/65 font-medium leading-relaxed max-w-lg">
              Launch your startup, AI tool, or experiment and get discovered by
              builders worldwide.
            </p>
          </header>

          {/* Stats Cards */}
          <div className="flex gap-4 mt-10">
            <div className="bg-white border-2 border-black rounded-2xl px-6 py-4 shadow-[4px_4px_0px_0px_#000]">
              <div className="flex gap-2 items-center mb-1 opacity-60">
                <Rocket className="size-4" />
                <span className="text-[10px] font-black uppercase tracking-wider">
                  launches
                </span>
              </div>
              <p className="text-3xl font-black">500+</p>
            </div>
            <div className="bg-white border-2 border-black rounded-2xl px-6 py-4 shadow-[4px_4px_0px_0px_#000]">
              <div className="flex gap-2 items-center mb-1 opacity-60">
                <Users className="size-4" />
                <span className="text-[10px] font-black uppercase tracking-wider">
                  makers
                </span>
              </div>
              <p className="text-3xl font-black">2k+</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: The Form */}
        <form
          action={formAction}
          className="bg-white border-[3px] border-black rounded-[32px] p-8 md:p-10 shadow-[10px_10px_0px_0px_#000] space-y-7">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                label="slug"
                name="slug"
                id="slug"
                placeholder="linear"
                required
                onChange={() => {}}
                error={getFieldErrors("slug")}
              />
            </div>

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
              label="short intro"
              name="tagline"
              id="tagline"
              placeholder="Issue tracking you'll enjoy using"
              required
              onChange={() => {}}
              error={getFieldErrors("tagline")}
            />
            <FormField
              label="tags"
              name="tags"
              id="tags"
              placeholder="saas, productivity, developer-tools"
              required
              onChange={() => {}}
              error={getFieldErrors("tags")}
            />
            <FormField
              label="full story"
              name="description"
              id="description"
              placeholder="Tell the community what you built..."
              required
              onChange={() => {}}
              error={getFieldErrors("description")}
              textarea
            />
          </div>

          <div className="border-t-2 border-black/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="text-center sm:text-left">
              <p className="font-black text-sm">Ready to launch?</p>
              <p className="text-xs text-black/50">
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
                  <Rocket className="mr-2 size-5" /> Launch Project
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
