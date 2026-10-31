import type { Metadata } from "next";

import BackHome from "@/components/common/back-home";
import SectionHeader from "@/components/common/section-header";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description:
        "Discover how Atlash Hub protects your data, secures your identity, and maintains transparency across our platform.",
    keywords: [
        "Atlash privacy",
        "privacy policy",
        "data protection",
        "user privacy",
        "secure authentication",
        "Better Auth",
        "Neon PostgreSQL",
        "platform security",
        "Atlash Hub privacy",
    ],
};

export default function PrivacyPage() {
    return (
        <main className="pt-20 pb-20">
            <div className="wrapper">
                <div className="mx-auto max-w-3xl">
                    {/* Back navigation */}
                    <div className="mb-8">
                        <BackHome />
                    </div>

                    {/* Privacy Header */}
                    <SectionHeader
                        title={
                            <>
                                Privacy{" "}
                                <span className="text-[#F5B726]">policy.</span>
                            </>
                        }
                        description="Discover how Atlash Hub protects your data, secures your identity, and maintains transparency across our platform."
                        hideButton={true}
                    />

                    {/* Privacy Content Container */}
                    <article className="mt-12 space-y-10 text-[#0f201d]">
                        {/* Introductory Callout Box */}
                        <div className="rounded-r-xl border-l-4 border-[#F5B726] bg-[#0f201d]/[0.03] p-6">
                            <p className="text-sm font-medium leading-relaxed text-[#0f201d]/80 md:text-base">
                                Atlash is designed with privacy, transparency,
                                and trust at its core. By maintaining a
                                server-first architecture, we minimize
                                client-side trust assumptions and collect only
                                what&apos;s necessary to operate the platform
                                securely.
                            </p>
                        </div>

                        {/* Section: Authentication */}
                        <section className="space-y-3">
                            <h2 className="text-xl font-bold tracking-tight md:text-2xl">
                                Authentication
                            </h2>
                            <p className="text-sm font-medium leading-relaxed text-[#0f201d]/70 md:text-base">
                                We use Better Auth to securely handle user
                                sessions and manage login flows via Google and
                                GitHub OAuth providers. This server-side session
                                architecture is integrated directly with our
                                relational database, ensuring complete
                                application ownership over user credentials and
                                avoiding dependency on unnecessary external
                                abstractions.
                            </p>
                        </section>

                        {/* Section: Product Data */}
                        <section className="space-y-3">
                            <h2 className="text-xl font-bold tracking-tight md:text-2xl">
                                Product data
                            </h2>
                            <p className="text-sm font-medium leading-relaxed text-[#0f201d]/70 md:text-base">
                                Submitted projects, descriptions, tags, website
                                links, and upvote events are processed through a
                                strict server-side validation pipeline (using
                                Zod schemas) before being stored in our Neon
                                PostgreSQL database. Once approved through our
                                moderation pipeline, this information is
                                displayed publicly as part of the Atlash
                                ecosystem.
                            </p>
                        </section>

                        {/* Section: Security Architecture */}
                        <section className="space-y-3">
                            <h2 className="text-xl font-bold tracking-tight md:text-2xl">
                                Security architecture
                            </h2>
                            <p className="text-sm font-medium leading-relaxed text-[#0f201d]/70 md:text-base">
                                Security influences nearly every architectural
                                decision within Atlash Hub. We implement
                                server-side session validation, route
                                protection, strict schema validations via
                                Drizzle and Zod, database-level integrity
                                constraints, and complete environment isolation.
                                Our goals are to minimize attack surfaces while
                                protecting the integrity of community
                                submissions.
                            </p>
                        </section>

                        {/* Section: Third-party services */}
                        <section className="space-y-3">
                            <h2 className="text-xl font-bold tracking-tight md:text-2xl">
                                Third-party services
                            </h2>
                            <p className="text-sm font-medium leading-relaxed text-[#0f201d]/70 md:text-base">
                                Atlash relies on trusted infrastructure
                                partners including Neon for serverless
                                PostgreSQL database services and Vercel for
                                hosting and application delivery. We never sell
                                your personal data or share it with third-party
                                advertising networks.
                            </p>
                        </section>

                        {/* Section: Data Portability & Deletion */}
                        <section className="space-y-3">
                            <h2 className="text-xl font-bold tracking-tight md:text-2xl">
                                Data portability & deletion
                            </h2>
                            <p className="text-sm font-medium leading-relaxed text-[#0f201d]/70 md:text-base">
                                We believe builders should own their
                                contributions. You can update or delete your
                                submitted projects and drafts directly from your
                                dashboard. Requesting full account deletion will
                                permanently purge your user profile, active
                                session records, and associated platform upvotes
                                from our Neon database within 30 days.
                            </p>
                        </section>

                        {/* Section: Our commitment */}
                        <section className="space-y-3">
                            <h2 className="text-xl font-bold tracking-tight md:text-2xl">
                                Our commitment
                            </h2>
                            <p className="text-sm font-medium leading-relaxed text-[#0f201d]/70 md:text-base">
                                We believe privacy is a feature, not an
                                afterthought. Atlash is built to showcase
                                builders and their work while protecting the
                                trust that makes communities thrive.
                            </p>
                        </section>
                    </article>
                </div>
            </div>
        </main>
    );
}
