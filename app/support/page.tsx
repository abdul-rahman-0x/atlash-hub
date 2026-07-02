import type { Metadata } from "next";
import {
    MessageCircle,
    ChevronLeft,
    Mail,
    Linkedin,
    Sparkles,
    HelpCircle,
} from "lucide-react";
import Link from "next/link";

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

export default function SupportPage() {
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
                            <MessageCircle className="size-4" />
                            <span className="text-xs font-black uppercase">
                                Help Center
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
                            Need help?
                            <br />
                            We&apos;ve got you.
                        </h1>

                        <p className="text-lg md:text-xl text-black/60 leading-relaxed max-w-2xl">
                            Find answers, get support, and connect with the
                            Atlash team. We&apos;re here to help builders ship
                            and grow.
                        </p>
                    </section>

                    {/* FAQ */}
                    <div className="space-y-8">
                        <section className="bg-white border-2 border-black rounded-[28px] p-8 shadow-[6px_6px_0px_0px_#000]">
                            <div className="flex items-center gap-3 mb-5">
                                <Sparkles className="size-5 text-[#B19CFF]" />
                                <h2 className="text-2xl font-black">
                                    How do products get featured?
                                </h2>
                            </div>

                            <p className="text-lg text-black/70 leading-relaxed">
                                Products with strong community engagement and
                                quality submissions may be highlighted in our
                                featured sections after review.
                            </p>
                        </section>

                        <section className="bg-white border-2 border-black rounded-[28px] p-8 shadow-[6px_6px_0px_0px_#000]">
                            <div className="flex items-center gap-3 mb-5">
                                <HelpCircle className="size-5 text-[#FFB38A]" />
                                <h2 className="text-2xl font-black">
                                    Can I update my submission?
                                </h2>
                            </div>

                            <p className="text-lg text-black/70 leading-relaxed">
                                Yes. If you need to update your project
                                information, contact us with your project slug
                                and the requested changes.
                            </p>
                        </section>

                        <section className="bg-white border-2 border-black rounded-[28px] p-8 shadow-[6px_6px_0px_0px_#000]">
                            <div className="flex items-center gap-3 mb-5">
                                <Sparkles className="size-5 text-[#B19CFF]" />
                                <h2 className="text-2xl font-black">
                                    Is Atlash free?
                                </h2>
                            </div>

                            <p className="text-lg text-black/70 leading-relaxed">
                                Absolutely. Atlash is free to use and designed
                                to help builders showcase their work and connect
                                with the community.
                            </p>
                        </section>
                    </div>

                    {/* Contact */}
                    <section className="bg-white border-2 border-black rounded-[32px] p-8 md:p-10 shadow-[8px_8px_0px_0px_#000]">
                        <h2 className="text-3xl font-black mb-8">
                            Contact us directly
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            <Link
                                href="mailto:support@atlash.hub"
                                className="flex items-center gap-5 p-6 border-2 border-black rounded-2xl hover:bg-[#F9F7F0] transition-all">
                                <div className="size-14 rounded-2xl bg-[#FFB38A] border-2 border-black flex items-center justify-center">
                                    <Mail className="size-6" />
                                </div>

                                <div>
                                    <p className="text-xs font-black uppercase tracking-wider text-black/40">
                                        Email Support
                                    </p>
                                    <p className="font-black">
                                        support@atlash.hub
                                    </p>
                                </div>
                            </Link>

                            <Link
                                href="https://www.linkedin.com/in/ar-rahman-in/"
                                target="_blank"
                                className="flex items-center gap-5 p-6 border-2 border-black rounded-2xl hover:bg-[#F9F7F0] transition-all">
                                <div className="size-14 rounded-2xl bg-[#B19CFF] border-2 border-black flex items-center justify-center">
                                    <Linkedin className="size-6" />
                                </div>

                                <div>
                                    <p className="text-xs font-black uppercase tracking-wider text-black/40">
                                        LinkedIn
                                    </p>
                                    <p className="font-black">Abdul Rahman</p>
                                </div>
                            </Link>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
