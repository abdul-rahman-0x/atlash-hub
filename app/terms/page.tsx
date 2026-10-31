import type { Metadata } from "next";

import BackHome from "@/components/common/back-home";
import SectionHeader from "@/components/common/section-header";

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
        <main className="pt-20 pb-20">
            <div className="wrapper">
                <div className="mx-auto max-w-3xl">
                    {/* Back navigation */}
                    <div className="mb-8">
                        <BackHome />
                    </div>

                    {/* Terms Header */}
                    <SectionHeader
                        title={
                            <>
                                Terms of{" "}
                                <span className="text-[#F5B726]">service.</span>
                            </>
                        }
                        description="Review the terms, responsibilities, and policies that govern participation and product submissions on Atlash Hub."
                        hideButton={true}
                    />

                    {/* Terms Content Container */}
                    <article className="mt-12 space-y-10 text-[#0f201d]">
                        {/* Introductory Callout Box */}
                        <div className="rounded-r-xl border-l-4 border-[#F5B726] bg-[#0f201d]/[0.03] p-6">
                            <p className="text-sm font-medium leading-relaxed text-[#0f201d]/80 md:text-base">
                                Atlash Hub is built around transparency,
                                ownership, and respect for creators. These terms
                                explain how we keep the platform reliable,
                                secure, and useful for everyone.
                            </p>
                        </div>

                        {/* Section: Agreement to Terms */}
                        <section className="space-y-3">
                            <h2 className="text-xl font-bold tracking-tight md:text-2xl">
                                Agreement to terms
                            </h2>
                            <p className="text-sm font-medium leading-relaxed text-[#0f201d]/70 md:text-base">
                                Welcome to Atlash Hub. By accessing or using our
                                community-driven product discovery platform, you
                                agree to comply with and be bound by these Terms
                                of Service. These rules help us maintain a
                                high-quality, trusted ecosystem where makers can
                                showcase their work and developers can discover
                                reliable, validated tools.
                            </p>
                        </section>

                        {/* Section: Accounts & Authentication */}
                        <section className="space-y-3">
                            <h2 className="text-xl font-bold tracking-tight md:text-2xl">
                                Accounts & authentication
                            </h2>
                            <p className="text-sm font-medium leading-relaxed text-[#0f201d]/70 md:text-base">
                                To list a product, upvote launches, or
                                participate in the community, you must
                                authenticate securely via our Better Auth system
                                using Google or GitHub. You are entirely
                                responsible for maintaining the security of your
                                session and account. Any activity linked to your
                                session, including submitted project metadata,
                                is your sole responsibility.
                            </p>
                        </section>

                        {/* Section: Product Submission & Validation */}
                        <section className="space-y-3">
                            <h2 className="text-xl font-bold tracking-tight md:text-2xl">
                                Product submission rules
                            </h2>
                            <p className="text-sm font-medium leading-relaxed text-[#0f201d]/70 md:text-base">
                                Every product submitted to Atlash Hub must pass
                                through our server-side validation pipeline. By
                                submitting a listing, you represent and warrant
                                that the tool is authentic, actively maintained,
                                free from malicious code, and owned or licensed
                                by you. Spam, misleading tags, or duplicate
                                listings violate our database integrity
                                constraints.
                            </p>
                        </section>

                        {/* Section: Ownership & Licensing */}
                        <section className="space-y-3">
                            <h2 className="text-xl font-bold tracking-tight md:text-2xl">
                                Ownership of your work
                            </h2>
                            <p className="text-sm font-medium leading-relaxed text-[#0f201d]/70 md:text-base">
                                You retain absolute ownership of your products,
                                brands, assets, and intellectual property. By
                                submitting a product to Atlash Hub, you grant us
                                a worldwide, non-exclusive, royalty-free license
                                to index, display, and share your project inside
                                our discovery feed to make it discoverable by
                                other builders.
                            </p>
                        </section>

                        {/* Section: Moderation & Quality Control */}
                        <section className="space-y-3">
                            <h2 className="text-xl font-bold tracking-tight md:text-2xl">
                                Moderation & administrative control
                            </h2>
                            <p className="text-sm font-medium leading-relaxed text-[#0f201d]/70 md:text-base">
                                To ensure discovering reliable software remains
                                easy, Atlash Hub is not a static directory. We
                                employ a multi-stage administrator moderation
                                pipeline. We reserve the absolute right to
                                review, reject, modify tags, or delete any
                                project submission that lowers the overall
                                quality of the platform or violates community
                                guidelines.
                            </p>
                        </section>

                        {/* Section: System Integrity */}
                        <section className="space-y-3">
                            <h2 className="text-xl font-bold tracking-tight md:text-2xl">
                                System integrity & upvoting
                            </h2>
                            <p className="text-sm font-medium leading-relaxed text-[#0f201d]/70 md:text-base">
                                Our voting mechanism is protected by server-side
                                validation and database-level constraints. Any
                                attempt to manipulate vote counts, bot accounts,
                                or exploit system authentication violates these
                                terms. Violators face immediate session
                                revocation and permanent platform bans to
                                preserve the trust of our builders.
                            </p>
                        </section>

                        {/* Section: Limitation of Liability */}
                        <section className="space-y-3">
                            <h2 className="text-xl font-bold tracking-tight md:text-2xl">
                                Limitation of liability
                            </h2>
                            <p className="text-sm font-medium leading-relaxed text-[#0f201d]/70 md:text-base">
                                Atlash Hub is provided on an &quot;as-is&quot;
                                and &quot;as-available&quot; basis. While we
                                moderate listed software, we do not verify the
                                stability, safety, or security of external tools
                                showcased on the platform. Users must perform
                                their own thorough evaluations and exercise
                                caution before utilizing any third-party
                                services listed here.
                            </p>
                        </section>
                    </article>
                </div>
            </div>
        </main>
    );
}
