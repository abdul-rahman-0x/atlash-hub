import type { Metadata } from "next";
import { ChevronLeft, Lock, ShieldCheck, Database } from "lucide-react";
import Link from "next/link";

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
        "Clerk authentication",
        "platform security",
        "Atlash Hub privacy",
    ],
};

export default function PrivacyPage() {
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
                            <Lock className="size-4" />
                            <span className="text-xs font-black uppercase">
                                Privacy & Security
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
                            Your data
                            <br />
                            stays yours.
                        </h1>

                        <p className="text-lg md:text-xl text-black/60 leading-relaxed max-w-2xl">
                            Atlash is designed with privacy, transparency, and
                            trust at its core. We collect only what&apos;s
                            necessary to operate the platform securely.
                        </p>
                    </section>

                    {/* Content */}
                    <div className="space-y-8">
                        <section className="bg-white border-2 border-black rounded-[28px] p-8 shadow-[6px_6px_0px_0px_#000]">
                            <div className="flex items-center gap-3 mb-5">
                                <ShieldCheck className="size-5 text-[#B19CFF]" />
                                <h2 className="text-2xl font-black">
                                    Authentication
                                </h2>
                            </div>

                            <p className="text-lg text-black/70 leading-relaxed">
                                We use Clerk to securely authenticate users and
                                manage sessions. We only store the information
                                necessary to provide account access and platform
                                functionality.
                            </p>
                        </section>

                        <section className="bg-white border-2 border-black rounded-[28px] p-8 shadow-[6px_6px_0px_0px_#000]">
                            <div className="flex items-center gap-3 mb-5">
                                <Database className="size-5 text-[#FFB38A]" />
                                <h2 className="text-2xl font-black">
                                    Product data
                                </h2>
                            </div>

                            <p className="text-lg text-black/70 leading-relaxed">
                                Submitted projects, descriptions, tags, and
                                website links are stored securely in our
                                database and displayed publicly as part of the
                                Atlash ecosystem.
                            </p>
                        </section>

                        <section className="bg-white border-2 border-black rounded-[28px] p-8 shadow-[6px_6px_0px_0px_#000]">
                            <div className="flex items-center gap-3 mb-5">
                                <ShieldCheck className="size-5 text-[#B19CFF]" />
                                <h2 className="text-2xl font-black">
                                    Third-party services
                                </h2>
                            </div>

                            <p className="text-lg text-black/70 leading-relaxed">
                                Atlash relies on trusted infrastructure partners
                                including Clerk for authentication and Neon for
                                database services. We never sell personal data
                                or share it with advertising networks.
                            </p>
                        </section>

                        <section className="bg-[#F9F7F0] border-2 border-black rounded-[28px] p-8 shadow-[6px_6px_0px_0px_#000]">
                            <h2 className="text-sm font-black uppercase tracking-[0.2em] mb-4">
                                Our commitment
                            </h2>

                            <p className="text-lg text-black/70 leading-relaxed">
                                We believe privacy is a feature, not an
                                afterthought. Atlash is built to showcase
                                builders and their work while protecting the
                                trust that makes communities thrive.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}
