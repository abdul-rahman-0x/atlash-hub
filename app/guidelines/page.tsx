import type { Metadata } from "next";
import { ChevronLeft, Heart, Sparkles, Shield } from "lucide-react";
import Link from "next/link";

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
                            <Heart className="size-4 fill-current" />
                            <span className="text-xs font-black uppercase">
                                Community Principles
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
                            Build with
                            <br />
                            integrity.
                        </h1>

                        <p className="text-lg md:text-xl text-black/60 leading-relaxed max-w-2xl">
                            Atlash exists to celebrate builders shipping
                            meaningful products. These guidelines help us keep
                            the community authentic, supportive, and valuable
                            for everyone.
                        </p>
                    </section>

                    {/* Rules */}
                    <div className="space-y-8">
                        <section className="bg-white border-2 border-black rounded-[28px] p-8 shadow-[6px_6px_0px_0px_#000]">
                            <div className="flex items-center gap-3 mb-5">
                                <Sparkles className="size-5 text-[#B19CFF]" />
                                <h2 className="text-2xl font-black">
                                    Share what you&apos;ve built
                                </h2>
                            </div>

                            <p className="text-lg text-black/70 leading-relaxed">
                                Submit products you have personally created,
                                contributed to, or helped launch. Authenticity
                                builds trust, and trust builds communities worth
                                joining.
                            </p>
                        </section>

                        <section className="bg-white border-2 border-black rounded-[28px] p-8 shadow-[6px_6px_0px_0px_#000]">
                            <div className="flex items-center gap-3 mb-5">
                                <Heart className="size-5 text-[#FFB38A]" />
                                <h2 className="text-2xl font-black">
                                    Support fellow builders
                                </h2>
                            </div>

                            <p className="text-lg text-black/70 leading-relaxed">
                                Great products come from great communities.
                                Offer thoughtful feedback, celebrate launches,
                                and help others improve their work.
                            </p>
                        </section>

                        <section className="bg-white border-2 border-black rounded-[28px] p-8 shadow-[6px_6px_0px_0px_#000]">
                            <div className="flex items-center gap-3 mb-5">
                                <Shield className="size-5 text-[#B19CFF]" />
                                <h2 className="text-2xl font-black">
                                    Maintain quality
                                </h2>
                            </div>

                            <p className="text-lg text-black/70 leading-relaxed">
                                Use accurate descriptions, active links,
                                meaningful tags, and showcase real value.
                                Quality submissions help everyone discover
                                better products.
                            </p>
                        </section>

                        <section className="bg-white border-2 border-black rounded-[28px] p-8 shadow-[6px_6px_0px_0px_#000]">
                            <div className="flex items-center gap-3 mb-5">
                                <Shield className="size-5 text-[#FFB38A]" />
                                <h2 className="text-2xl font-black">
                                    Protect the ecosystem
                                </h2>
                            </div>

                            <p className="text-lg text-black/70 leading-relaxed">
                                Malicious software, phishing attempts, spam, and
                                deceptive content have zero tolerance. We work
                                hard to keep Atlash safe for every builder.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}
