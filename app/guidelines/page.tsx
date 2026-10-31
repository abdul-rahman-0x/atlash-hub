import type { Metadata } from "next";

import BackHome from "@/components/common/back-home";
import SectionHeader from "@/components/common/section-header";

export const metadata: Metadata = {
    title: "Community Guidelines",
    description:
        "Learn the principles that keep Atlash Hub a trusted place for builders, creators, and innovators to share products and collaborate.",
    keywords: [
        "Atlash community",
        "community guidelines",
        "product submission rules",
        "builder community",
        "startup showcase rules",
        "creator guidelines",
        "ethical product sharing",
        "Atlash Hub standards",
    ],
};

export default function GuidelinesPage() {
    return (
        <main className="pt-20 pb-20">
            <div className="wrapper">
                <div className="mx-auto max-w-3xl">
                    {/* Back navigation */}
                    <div className="mb-8">
                        <BackHome />
                    </div>

                    {/* Guidelines Header */}
                    <SectionHeader
                        title={
                            <>
                                Community{" "}
                                <span className="text-[#F5B726]">
                                    guidelines.
                                </span>
                            </>
                        }
                        description="Learn the principles that keep Atlash Hub a trusted place for builders, creators, and innovators to share products and collaborate."
                        hideButton={true}
                    />

                    {/* Guidelines Content Container */}
                    <article className="mt-12 space-y-10 text-[#0f201d]">
                        {/* Introductory Callout Box */}
                        <div className="rounded-r-xl border-l-4 border-[#F5B726] bg-[#0f201d]/[0.03] p-6">
                            <p className="text-sm font-medium leading-relaxed text-[#0f201d]/80 md:text-base">
                                Atlash exists to celebrate builders shipping
                                meaningful products. These guidelines help us
                                keep the community authentic, supportive, and
                                valuable for everyone.
                            </p>
                        </div>

                        {/* Section: Share what you've built */}
                        <section className="space-y-3">
                            <h2 className="text-xl font-bold tracking-tight md:text-2xl">
                                Share what you have built
                            </h2>
                            <p className="text-sm font-medium leading-relaxed text-[#0f201d]/70 md:text-base">
                                Submit products that you have personally
                                created, contributed to, or helped launch.
                                Authentic ownership builds genuine trust, and
                                trust builds communities worth joining. Because
                                every submission is linked directly to your
                                secure Better Auth session, submitting
                                plagiarized, misleading, or stolen work will
                                result in immediate account suspension and
                                removal of all listed products.
                            </p>
                        </section>

                        {/* Section: Support fellow builders */}
                        <section className="space-y-3">
                            <h2 className="text-xl font-bold tracking-tight md:text-2xl">
                                Support fellow builders
                            </h2>
                            <p className="text-sm font-medium leading-relaxed text-[#0f201d]/70 md:text-base">
                                Great products come from healthy, collaborative
                                communities. Offer constructive, thoughtful
                                feedback on other builders&apos; product
                                launches, engage in productive discussions, and
                                help others improve. Coordinated upvote
                                manipulation, botting, or using fake sessions
                                violates our core values of fairness and will
                                trigger database-level audit flags.
                            </p>
                        </section>

                        {/* Section: Maintain quality */}
                        <section className="space-y-3">
                            <h2 className="text-xl font-bold tracking-tight md:text-2xl">
                                Maintain submission quality
                            </h2>
                            <p className="text-sm font-medium leading-relaxed text-[#0f201d]/70 md:text-base">
                                Ensure your submissions contain clear project
                                names, descriptive taglines, accurate tags, and
                                active, functioning URLs. Every product goes
                                through our server-side validation pipeline
                                (using Zod schemas) to prevent broken links or
                                spam metadata. High-quality listings help the
                                entire community discover better tools and
                                startups.
                            </p>
                        </section>

                        {/* Section: Protect the ecosystem */}
                        <section className="space-y-3">
                            <h2 className="text-xl font-bold tracking-tight md:text-2xl">
                                Protect the ecosystem
                            </h2>
                            <p className="text-sm font-medium leading-relaxed text-[#0f201d]/70 md:text-base">
                                We have zero tolerance for malicious software,
                                phishing links, misleading redirects, or spam.
                                To protect builders, we operate a scalable,
                                multi-stage administrator moderation pipeline.
                                Administrators actively review submissions and
                                reserve the right to modify tags, reject
                                listings, or remove products to preserve the
                                integrity and security of the Atlash Hub index.
                            </p>
                        </section>
                    </article>
                </div>
            </div>
        </main>
    );
}
