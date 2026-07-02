import type { Metadata } from "next";
import {
    Scale,
    ChevronLeft,
    ShieldCheck,
    FileCheck,
    Sparkles,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Terms of Service",
    description:
        "Review the terms, responsibilities, and policies that govern participation and product submissions on Atlash Hub.",
    keywords: [
        "Atlash terms",
        "terms of service",
        "platform policies",
        "submission policies",
        "user agreement",
        "startup directory terms",
        "community rules",
        "Atlash Hub legal",
    ],
};

export default function TermsPage() {
    return (
        <main className="py-16 lg:py-24 bg-background">
            <div className="wrapper max-w-4xl px-4 pt-10 pb-20">
                {/* back */}
                <div className="mb-8">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-3 group">
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

                <div className="space-y-14">
                    {/* Hero */}
                    <section className="bg-white border-2 border-black rounded-[32px] p-8 md:p-10 shadow-[8px_8px_0px_0px_#000]">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#B19CFF] border-2 border-black mb-6">
                            <Scale className="size-4" />
                            <span className="text-xs font-black uppercase">
                                Terms & Conditions
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
                            Fair rules
                            <br />
                            build trust.
                        </h1>

                        <p className="text-lg md:text-xl text-black/60 leading-relaxed max-w-2xl">
                            Atlash is built around transparency, ownership, and
                            respect for creators. These terms explain how we
                            keep the platform reliable for everyone.
                        </p>
                    </section>

                    {/* Content */}
                    <div className="space-y-8">
                        <section className="bg-white border-2 border-black rounded-[28px] p-8 shadow-[6px_6px_0px_0px_#000]">
                            <div className="flex items-center gap-3 mb-5">
                                <ShieldCheck className="size-5 text-[#B19CFF]" />
                                <h2 className="text-2xl font-black">
                                    Use Atlash responsibly
                                </h2>
                            </div>

                            <p className="text-lg text-black/70 leading-relaxed">
                                By using Atlash, you agree to submit authentic
                                products, respect other builders, and avoid
                                malicious, fraudulent, or misleading content.
                            </p>
                        </section>

                        <section className="bg-white border-2 border-black rounded-[28px] p-8 shadow-[6px_6px_0px_0px_#000]">
                            <div className="flex items-center gap-3 mb-5">
                                <FileCheck className="size-5 text-[#FFB38A]" />
                                <h2 className="text-2xl font-black">
                                    You own your work
                                </h2>
                            </div>

                            <p className="text-lg text-black/70 leading-relaxed">
                                Creators retain ownership of their products,
                                brands, and intellectual property. By submitting
                                a product, you allow Atlash to display and index
                                it within the platform.
                            </p>
                        </section>

                        <section className="bg-white border-2 border-black rounded-[28px] p-8 shadow-[6px_6px_0px_0px_#000]">
                            <div className="flex items-center gap-3 mb-5">
                                <Sparkles className="size-5 text-[#B19CFF]" />
                                <h2 className="text-2xl font-black">
                                    Community moderation
                                </h2>
                            </div>

                            <p className="text-lg text-black/70 leading-relaxed">
                                Atlash reserves the right to review, reject, or
                                remove submissions that violate community
                                standards or reduce the quality of the platform.
                            </p>
                        </section>

                        <section className="bg-white border-2 border-black rounded-[28px] p-8 shadow-[6px_6px_0px_0px_#000]">
                            <div className="flex items-center gap-3 mb-5">
                                <Scale className="size-5 text-[#FFB38A]" />
                                <h2 className="text-2xl font-black">
                                    Platform responsibility
                                </h2>
                            </div>

                            <p className="text-lg text-black/70 leading-relaxed">
                                Atlash provides discovery and community
                                features. Users should perform their own
                                evaluation before using any third-party product
                                or service listed on the platform.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}
