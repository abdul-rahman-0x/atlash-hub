import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { hasUserVoted } from "@/lib/products/product-select";
import type { Metadata } from "next";
import VotingButtons from "@/components/products/voting-buttons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getProductBySlug } from "@/lib/products/product-select";
import BackHome from "@/components/common/back-home";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const product = await getProductBySlug(slug);

    if (!product) {
        return {
            title: "Project Not Found | Atlash Hub",
        };
    }

    const productDescription =
        product.tagline ?? "Discover this builder's project on Atlash.";

    return {
        title: `${product.name} — Atlash Hub`,
        description: productDescription,
        keywords: [
            product.name,
            ...(product.tags ?? []),
            "developer tools",
            "atlash hub",
            "verified software",
        ],
        openGraph: {
            title: `${product.name} | Atlash Hub`,
            description: productDescription,
            type: "website",
            images: [{ url: "/banner.png" }],
        },
        twitter: {
            card: "summary_large_image",
            title: `${product.name} | Atlash Hub`,
            description: productDescription,
        },
    };
}

export default async function ProductDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const product = await getProductBySlug(slug);

    if (!product) {
        return (
            <main className="pt-20 pb-20 text-left">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-lg font-medium mb-4">
                        Product not found.
                    </p>
                    <BackHome href="/explore" label="Back to explore" />
                </div>
            </main>
        );
    }

    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const hasVotedStatus = session?.user?.id
        ? await hasUserVoted(product.id, session.user.id)
        : false;

    const launchDate = product.createAt
        ? new Intl.DateTimeFormat("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        }).format(new Date(product.createAt))
        : "Recently";

    const makersScore = Math.floor(product.voteCount * 0.55 + 40);

    const builderDisplay = product.submittedBy?.includes("@")
        ? product.submittedBy.split("@")[0]
        : product.submittedBy || "Anonymous";

    const getStatus = (votes: number) => {
        if (votes >= 500) {
            return {
                label: "Trending",
                color: "bg-[#FAC9C2] text-[#0F201D]",
            };
        }

        if (votes >= 100) {
            return {
                label: "Community Pick",
                color: "bg-[#D7E5F4] text-[#0F201D]",
            };
        }

        return {
            label: "New Launch",
            color: "bg-[#D2ECDB] text-[#0F201D]",
        };
    };

    const status = getStatus(product.voteCount);

    return (
        <main className="min-h-screen bg-[#FAF9F6] text-[#0F201D] pt-16 pb-24">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-10">
                    <BackHome href="/explore" label="Back to explore" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-8 space-y-8 text-left">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2.5">
                                <span
                                    className={`${status.color} inline-flex items-center rounded-[6px] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.08em] font-mono`}>
                                    {status.label}
                                </span>
                                <span className="inline-flex items-center gap-1.5 rounded-[6px] border border-[#0F201D]/15 bg-white/70 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-[#0F201D]/75 font-mono">
                                    <ShieldCheck className="size-3.5 text-emerald-600 stroke-[2.5]" />
                                    Verified Tool
                                </span>
                            </div>

                            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-none text-[#0F201D]">
                                {product.name}
                            </h1>

                            <p className="text-lg sm:text-xl text-[#0F201D]/75 font-semibold leading-relaxed max-w-2xl">
                                {product.tagline}
                            </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-x-8 gap-y-4 py-5 border-y border-[#0F201D]/10 text-left">
                            <div>
                                <span className="block text-[10px] font-bold uppercase tracking-widest text-[#0F201D]/45 font-mono">
                                    Maker
                                </span>
                                <span className="font-bold text-sm text-[#0F201D] mt-0.5 block truncate max-w-[150px]">
                                    @{builderDisplay}
                                </span>
                            </div>

                            <div className="hidden sm:block w-[1px] h-6 bg-[#0F201D]/10" />

                            <div>
                                <span className="block text-[10px] font-bold uppercase tracking-widest text-[#0F201D]/45 font-mono">
                                    Launched
                                </span>
                                <span className="font-bold text-sm text-[#0F201D] mt-0.5 block">
                                    {launchDate}
                                </span>
                            </div>

                            <div className="hidden sm:block w-[1px] h-6 bg-[#0F201D]/10" />

                            <div>
                                <span className="block text-[10px] font-bold uppercase tracking-widest text-[#0F201D]/45 font-mono">
                                    Community
                                </span>
                                <span className="font-black text-sm text-[#0F201D] mt-0.5 block">
                                    {makersScore} builders
                                </span>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <h2 className="text-xs font-bold uppercase tracking-widest text-[#0F201D]/40 font-mono">
                                Overview
                            </h2>
                            <p className="text-base sm:text-lg leading-relaxed text-[#0F201D]/80 whitespace-pre-wrap font-normal">
                                {product.description}
                            </p>
                        </div>

                        {product.tags && product.tags.length > 0 && (
                            <div className="pt-6 border-t border-[#0F201D]/10">
                                <span className="block text-[10px] font-bold uppercase tracking-widest text-[#0F201D]/45 font-mono mb-3">
                                    Categories
                                </span>
                                <div className="flex flex-wrap gap-1.5">
                                    {product.tags.map((tag) => (
                                        <Badge
                                            key={tag}
                                            variant="outline"
                                            className="rounded-md border-[#0F201D]/15 bg-white text-[#0F201D]/80 px-2.5 py-1 text-xs font-semibold">
                                            #{tag}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-8 lg:pl-10 lg:border-l border-[#0F201D]/10">
                        {product.websiteUrl && (
                            <div className="space-y-3 text-left">
                                <h3 className="text-xs font-bold uppercase tracking-widest text-[#0F201D]/45 font-mono">
                                    Live Product
                                </h3>
                                <p className="text-xs text-[#0F201D]/60 leading-relaxed">
                                    Launch the external application to explore this tool live.
                                </p>
                                <Button
                                    asChild
                                    size="lg"
                                    className="w-full bg-[#E27C72] text-black font-black border-2 border-[#0F201D] hover:bg-[#d46f65] rounded-xl py-6 shadow-[3px_3px_0px_0px_#0F201D] transition-all active:translate-x-[1px] active:translate-y-[1px] active:shadow-[2px_2px_0px_0px_#0F201D] cursor-pointer text-sm">
                                    <a
                                        href={product.websiteUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-1.5">
                                        Visit Website
                                        <ArrowUpRight className="w-4 h-4" />
                                    </a>
                                </Button>
                            </div>
                        )}

                        <div className="space-y-3 pt-6 border-t border-[#0F201D]/10 text-left">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-[#0F201D]/45 font-mono">
                                Support Project
                            </h3>
                            <p className="text-xs text-[#0F201D]/60 leading-relaxed">
                                Upvote to help this project climb the community leaderboard.
                            </p>
                            <div className="w-full min-h-[48px]">
                                <VotingButtons
                                    productId={product.id}
                                    voteCount={product.voteCount}
                                    hasVoted={hasVotedStatus}
                                    isAuthenticated={Boolean(session?.user)}
                                />
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
}
