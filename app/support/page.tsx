import type { Metadata } from "next";
import { ArrowUpRight, Mail } from "lucide-react";

import BackHome from "@/components/common/back-home";
import SectionHeader from "@/components/common/section-header";

export const metadata: Metadata = {
    title: "Help & Support",
    description:
        "Get answers, contact support, and learn how to make the most of your experience on Atlash Hub.",
    keywords: [
        "Atlash support",
        "help center",
        "FAQ",
        "customer support",
        "builder assistance",
        "product submission help",
        "community support",
        "Atlash Hub help",
    ],
};

const SUPPORT_EMAIL = "abduls10x@gmail.com";

export default function SupportPage() {
    return (
        <main className="pt-20 pb-20">
            <div className="wrapper">
                <div className="mx-auto max-w-3xl">
                    {/* Back navigation */}
                    <div className="mb-8">
                        <BackHome />
                    </div>

                    {/* Support Header */}
                    <SectionHeader
                        title={
                            <>
                                Help &{" "}
                                <span className="text-[#F5B726]">support.</span>
                            </>
                        }
                        description="Find answers to common questions, get assistance with your submissions, or connect directly regarding Atlash Hub."
                        hideButton={true}
                    />

                    {/* Content Container */}
                    <article className="mt-12 space-y-10 text-[#0f201d]">
                        {/* Introductory Callout Box */}
                        <div className="rounded-r-xl border-l-4 border-[#F5B726] bg-[#0f201d]/[0.03] p-6">
                            <p className="text-sm font-medium leading-relaxed text-[#0f201d]/80 md:text-base">
                                Atlash Hub is built to give creators an honest
                                stage to launch, showcase, and gain traction.
                                If you need help with listings, moderation, or
                                account access, direct support is available
                                below.
                            </p>
                        </div>

                        {/* Section: FAQ 1 */}
                        <section className="space-y-3">
                            <h2 className="text-xl font-bold tracking-tight md:text-2xl">
                                How do products get featured?
                            </h2>
                            <p className="text-sm font-medium leading-relaxed text-[#0f201d]/70 md:text-base">
                                Products with strong community engagement,
                                verified launches, and high-quality metadata are
                                highlighted in our trending and featured
                                sections following administrative review. Our
                                moderation pipeline ensures authentic tools
                                receive the visibility they deserve.
                            </p>
                        </section>

                        {/* Section: FAQ 2 */}
                        <section className="space-y-3">
                            <h2 className="text-xl font-bold tracking-tight md:text-2xl">
                                Can I update my submission?
                            </h2>
                            <p className="text-sm font-medium leading-relaxed text-[#0f201d]/70 md:text-base">
                                Yes. If you need to edit your project&apos;s
                                title, description, tags, or links, reach out
                                directly via email with your project name and
                                requested edits. The listing will be reviewed
                                and updated promptly in the database.
                            </p>
                        </section>

                        {/* Section: FAQ 3 */}
                        <section className="space-y-3">
                            <h2 className="text-xl font-bold tracking-tight md:text-2xl">
                                Is Atlash Hub free?
                            </h2>
                            <p className="text-sm font-medium leading-relaxed text-[#0f201d]/70 md:text-base">
                                Yes. Atlash Hub is 100% free to use. It was
                                built by a solo creator (Abdul Rahman) to help
                                makers showcase their products, get verified,
                                and connect with a global community of builders.
                            </p>
                        </section>

                        {/* Section: Direct Contact */}
                        <section className="space-y-4 border-t border-[#0f201d]/10 pt-8">
                            <div className="space-y-2">
                                <h2 className="text-xl font-bold tracking-tight md:text-2xl">
                                    Contact directly
                                </h2>
                                <p className="text-sm font-medium leading-relaxed text-[#0f201d]/70 md:text-base">
                                    Have a technical question, moderation
                                    inquiry, or an issue with your account? Send
                                    an email and you will receive a response
                                    directly.
                                </p>
                            </div>

                            <a
                                href={`mailto:${SUPPORT_EMAIL}`}
                                className="group inline-flex items-center justify-between gap-6 rounded-xl border border-[#0f201d]/10 bg-[#0f201d]/[0.02] p-4 transition-all duration-150 hover:border-[#0f201d]/25 hover:bg-[#0f201d]/[0.04]">
                                <div className="flex items-center gap-3.5">
                                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#F5B726]/15 text-[#0f201d]">
                                        <Mail className="size-5" />
                                    </div>
                                    <div>
                                        <p className="text-[11px] font-bold uppercase tracking-wider text-[#0f201d]/50">
                                            Creator Support
                                        </p>
                                        <p className="font-semibold text-[#0f201d] transition-colors group-hover:text-[#E97B77]">
                                            {SUPPORT_EMAIL}
                                        </p>
                                    </div>
                                </div>

                                <ArrowUpRight className="size-4 text-[#0f201d]/40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#0f201d]" />
                            </a>
                        </section>
                    </article>
                </div>
            </div>
        </main>
    );
}
