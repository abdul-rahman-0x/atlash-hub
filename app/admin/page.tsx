import type { Metadata } from "next";
import AdminProductCard from "@/components/admin/admin-product-card";
import AdminStatsCard from "@/components/admin/stats-card";
import EmptyState from "@/components/common/empty-state";

import { getAllProducts } from "@/lib/products/product-select";
import { verifyAdmin } from "@/lib/admin/verify-admin";

import { ShieldCheck, Clock3, History, Sparkles } from "lucide-react";

export const metadata: Metadata = {
    title: "Admin Dashboard | Atlash",
    description:
        "Review community submissions, moderate content, and manage products before they go live.",
    keywords: [
        "admin dashboard",
        "product moderation",
        "community review",
        "startup launches",
        "dashboard",
        "atlash",
    ],
};

/**
 * Only authenticated administrators can access this page.
 * Community members never see this route or its moderation tools.
 *
 * Responsibilities
 * - Review pending submissions
 * - Approve or reject launches
 * - Monitor platform statistics
 * - View moderation history
 * ------------------------------------------------------------------
 */

export default async function AdminPage() {
    /**
     * Ensure the current request belongs
     * to an authenticated administrator.
     */
    await verifyAdmin();

    /**
     * Fetch every submission once.
     * The page derives each section
     * from this single dataset.
     */
    const allProducts = await getAllProducts();

    const pendingProducts = allProducts.filter(
        (product) => product.status === "pending",
    );

    const approvedProducts = allProducts.filter(
        (product) => product.status === "approved",
    );

    const rejectedProducts = allProducts.filter(
        (product) => product.status === "rejected",
    );

    return (
        <main className="min-h-screen bg-background pt-32 pb-24 lg:pt-40 lg:pb-32">
            <div className="wrapper max-w-7xl">
                {/* HERO */}
                <section className="mb-14 lg:mb-20">
                    <div className="overflow-hidden rounded-[36px] border-2 border-black bg-white shadow-[8px_8px_0px_0px_#000]">
                        <div className="flex flex-col gap-10 px-6 py-8 md:px-10 md:py-10 lg:flex-row lg:items-center lg:justify-between">
                            {/* Left Content */}
                            <div className="max-w-3xl">
                                <div className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-black bg-[#B19CFF] px-4 py-2">
                                    <Sparkles className="size-4" />

                                    <span className="text-xs font-black uppercase tracking-wide">
                                        Admin Dashboard
                                    </span>
                                </div>

                                <h1 className="text-4xl font-black tracking-tight md:text-5xl lg:text-6xl">
                                    Review Community
                                    <br />
                                    Submissions
                                </h1>

                                <p className="mt-5 max-w-2xl text-base leading-7 text-black/60 md:text-lg">
                                    Review new products, approve quality
                                    launches, reject spam, and keep the Atlash
                                    directory curated for the community.
                                </p>
                            </div>

                            {/* Right Summary */}
                            <div className="grid gap-4 sm:grid-cols-2 lg:w-[280px] lg:grid-cols-1">
                                <div className="rounded-3xl border-2 border-black bg-[#F9F7F0] p-6">
                                    <p className="text-[11px] font-black uppercase tracking-[0.18em] text-black/40">
                                        Pending Reviews
                                    </p>

                                    <p className="mt-2 text-5xl font-black">
                                        {pendingProducts.length}
                                    </p>

                                    <p className="mt-2 text-sm text-black/60">
                                        Products waiting for moderation.
                                    </p>
                                </div>

                                <div className="rounded-3xl border-2 border-black bg-[#FFB38A] p-6">
                                    <div className="flex items-center gap-2">
                                        <ShieldCheck className="size-5" />

                                        <span className="font-black uppercase">
                                            RBAC Enabled
                                        </span>
                                    </div>

                                    <p className="mt-3 text-sm leading-6 text-black/70">
                                        This dashboard is protected by
                                        role-based access control. Only
                                        administrators can review and manage
                                        submissions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* STATS */}
                {/* ------------------------------------------------------------------
                 * Platform Overview
                 * ------------------------------------------------------------------
                 *
                 * High-level moderation metrics that help administrators
                 * understand the current state of the platform before
                 * reviewing individual submissions.
                 * ------------------------------------------------------------------ */}
                <section className="mb-14 lg:mb-20">
                    <div className="rounded-[36px] border-2 border-black bg-white p-6 shadow-[6px_6px_0px_0px_#000] md:p-8">
                        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                            <div>
                                <span className="inline-block rounded-full border-2 border-black bg-[#F9F7F0] px-4 py-2 text-xs font-black uppercase tracking-wide">
                                    Platform Overview
                                </span>

                                <h2 className="mt-4 text-3xl font-black md:text-4xl">
                                    Moderation at a glance
                                </h2>

                                <p className="mt-3 max-w-2xl text-base leading-7 text-black/60">
                                    Monitor approved launches, pending reviews,
                                    rejected submissions, and overall platform
                                    activity from a single place.
                                </p>
                            </div>

                            <div className="rounded-2xl border-2 border-black bg-[#FFF5E9] px-5 py-3">
                                <p className="text-xs font-black uppercase tracking-[0.18em] text-black/50">
                                    Total Products
                                </p>

                                <p className="mt-1 text-3xl font-black">
                                    {allProducts.length}
                                </p>
                            </div>
                        </div>

                        <div className="rounded-[28px] border-2 border-black bg-background p-3">
                            <AdminStatsCard
                                approved={approvedProducts.length}
                                pending={pendingProducts.length}
                                rejected={rejectedProducts.length}
                                all={allProducts.length}
                            />
                        </div>
                    </div>
                </section>

                {/* PENDING */}
                {/* ------------------------------------------------------------------
                 * Pending Review Queue
                 * ------------------------------------------------------------------
                 *
                 * Every newly submitted product appears here until an
                 * administrator approves or rejects it.
                 * ------------------------------------------------------------------ */}
                <section className="mb-16 lg:mb-24">
                    <div className="rounded-[36px] border-2 border-black bg-white p-6 shadow-[6px_6px_0px_0px_#000] md:p-8">
                        {/* Section Header */}
                        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                            <div className="flex items-start gap-5">
                                <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl border-2 border-black bg-[#FFB38A]">
                                    <Clock3 className="size-7" />
                                </div>

                                <div>
                                    <span className="inline-block rounded-full border-2 border-black bg-[#FFF5E9] px-3 py-1 text-[11px] font-black uppercase tracking-wide">
                                        Moderation Queue
                                    </span>

                                    <h2 className="mt-4 text-3xl font-black">
                                        Pending Review
                                    </h2>

                                    <p className="mt-2 max-w-2xl text-base leading-7 text-black/60">
                                        Review each submission before it becomes
                                        visible to the community.
                                    </p>
                                </div>
                            </div>

                            <div className="rounded-2xl border-2 border-black bg-[#F9F7F0] px-5 py-4 text-center">
                                <p className="text-xs font-black uppercase tracking-[0.18em] text-black/50">
                                    Waiting
                                </p>

                                <p className="mt-1 text-4xl font-black">
                                    {pendingProducts.length}
                                </p>
                            </div>
                        </div>

                        {/* Empty State */}
                        {pendingProducts.length === 0 ? (
                            <div className="rounded-[28px] border-2 border-dashed border-black/20 bg-background p-8">
                                <EmptyState
                                    message="You're all caught up"
                                    description="There are no submissions waiting for review."
                                    icon={ShieldCheck}
                                />
                            </div>
                        ) : (
                            <div className="space-y-6">
                                {pendingProducts.map((product) => (
                                    <AdminProductCard
                                        key={product.id}
                                        product={product}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </section>

                {/* HISTORY */}
                {/* ------------------------------------------------------------------
                 * Review History
                 * ------------------------------------------------------------------
                 *
                 * Displays every moderated submission so administrators can
                 * quickly review previous decisions and platform activity.
                 * ------------------------------------------------------------------ */}
                <section className="pb-10 lg:pb-16">
                    <div className="rounded-[36px] border-2 border-black bg-white p-6 shadow-[6px_6px_0px_0px_#000] md:p-8">
                        {/* Section Header */}
                        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                            <div className="flex items-start gap-5">
                                <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl border-2 border-black bg-[#B19CFF]">
                                    <History className="size-7" />
                                </div>

                                <div>
                                    <span className="inline-block rounded-full border-2 border-black bg-[#F4F0FF] px-3 py-1 text-[11px] font-black uppercase tracking-wide">
                                        Activity Log
                                    </span>

                                    <h2 className="mt-4 text-3xl font-black">
                                        Review History
                                    </h2>

                                    <p className="mt-2 max-w-2xl text-base leading-7 text-black/60">
                                        Browse previously reviewed products,
                                        monitor moderation activity, and revisit
                                        approval decisions whenever needed.
                                    </p>
                                </div>
                            </div>

                            <div className="rounded-2xl border-2 border-black bg-[#F9F7F0] px-5 py-4 text-center">
                                <p className="text-xs font-black uppercase tracking-[0.18em] text-black/50">
                                    Processed
                                </p>

                                <p className="mt-1 text-4xl font-black">
                                    {approvedProducts.length +
                                        rejectedProducts.length}
                                </p>
                            </div>
                        </div>

                        {approvedProducts.length + rejectedProducts.length ===
                        0 ? (
                            <div className="rounded-[28px] border-2 border-dashed border-black/20 bg-background p-8">
                                <EmptyState
                                    message="No review history"
                                    description="Approved and rejected submissions will appear here."
                                    icon={History}
                                />
                            </div>
                        ) : (
                            <div className="space-y-6">
                                {allProducts.map((product) => (
                                    <AdminProductCard
                                        key={product.id}
                                        product={product}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </main>
    );
}
