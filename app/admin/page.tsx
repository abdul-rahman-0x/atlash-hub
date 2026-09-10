import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, History } from "lucide-react";

import { Button } from "@/components/ui/button";
import AdminProductCard from "@/components/admin/admin-product-card";
import AdminStatsCard from "@/components/admin/stats-card";
import EmptyState from "@/components/common/empty-state";
import BackHome from "@/components/common/back-home";

import { getAllProducts } from "@/lib/products/product-select";
import { verifyAdmin } from "@/lib/admin/verify-admin";

export const metadata: Metadata = {
    title: "Admin Moderation | Atlash",
    description:
        "Role-based moderation console to review submissions, verify schema integrity, and manage products on Atlash Hub.",
    keywords: [
        "admin dashboard",
        "product moderation",
        "community review",
        "atlash hub",
    ],
};

export default async function AdminPage({
    searchParams,
}: {
    searchParams: Promise<{ tab?: string }>;
}) {
    // 1. Server-side RBAC barrier (throws/redirects if unauthorized)
    await verifyAdmin();

    // 2. Read URL Query Parameter for tab navigation
    const { tab = "pending" } = await searchParams;
    const activeTab = tab === "history" ? "history" : "pending";

    // 3. Single Dataset Fetch & Segmentation
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

    const processedProducts = allProducts.filter(
        (product) => product.status !== "pending",
    );

    return (
        <main className="min-h-screen bg-[#FAF9F6] text-[#0F201D] pt-12 pb-24 font-sans">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
                {/* Navigation */}
                <div>
                    <BackHome href="/" label="Back to home" />
                </div>

                {/* Header */}
                <header className="space-y-4 text-left border-b border-[#0F201D]/10 pb-8">
                    <div>
                        <span className="bg-[#D2ECDB] text-[#0F201D] inline-flex items-center rounded-[6px] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.08em] font-mono">
                            Admin Console · RBAC Active
                        </span>
                    </div>

                    <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-none text-[#0F201D]">
                        Product Moderation
                    </h1>

                    <p className="text-base sm:text-lg text-[#0F201D]/70 font-medium leading-relaxed max-w-2xl">
                        Centralized moderation dashboard to review pending
                        submissions, validate submission metadata, and oversee
                        published products across Atlash Hub.
                    </p>
                </header>

                {/* Platform Overview */}
                <section className="space-y-3 text-left">
                    <h2 className="text-xs font-bold uppercase tracking-widest text-[#0F201D]/45 font-mono">
                        Platform Overview
                    </h2>

                    <AdminStatsCard
                        approved={approvedProducts.length}
                        pending={pendingProducts.length}
                        rejected={rejectedProducts.length}
                        all={allProducts.length}
                    />
                </section>

                {/* Submissions Section */}
                <section className="space-y-6 text-left">
                    {/* Header with Switcher Tabs */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#0F201D]/10 pb-4">
                        <div>
                            <h2 className="text-xs font-bold uppercase tracking-widest text-[#0F201D]/45 font-mono">
                                Submissions Queue
                            </h2>
                            <p className="text-xs text-[#0F201D]/60 mt-0.5">
                                {activeTab === "pending"
                                    ? "Products waiting for administrative approval"
                                    : "Previously reviewed and moderated submissions"}
                            </p>
                        </div>

                        <div className="flex items-center gap-2">
                            <Button
                                asChild
                                size="sm"
                                variant={
                                    activeTab === "pending"
                                        ? "default"
                                        : "outline"
                                }>
                                <Link href="/admin?tab=pending" scroll={false}>
                                    Pending ({pendingProducts.length})
                                </Link>
                            </Button>

                            <Button
                                asChild
                                size="sm"
                                variant={
                                    activeTab === "history"
                                        ? "default"
                                        : "outline"
                                }>
                                <Link href="/admin?tab=history" scroll={false}>
                                    History ({processedProducts.length})
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* Tab 1: Pending Submissions */}
                    {activeTab === "pending" && (
                        <div className="space-y-4">
                            {pendingProducts.length === 0 ? (
                                <div className="rounded-2xl border-2 border-dashed border-[#0F201D]/15 bg-white p-10 text-center">
                                    <EmptyState
                                        message="Queue is clear"
                                        description="There are no pending submissions waiting for review."
                                        icon={ShieldCheck}
                                    />
                                </div>
                            ) : (
                                pendingProducts.map((product) => (
                                    <AdminProductCard
                                        key={product.id}
                                        product={product}
                                    />
                                ))
                            )}
                        </div>
                    )}

                    {/* Tab 2: Review History */}
                    {activeTab === "history" && (
                        <div className="space-y-4">
                            {processedProducts.length === 0 ? (
                                <div className="rounded-2xl border-2 border-dashed border-[#0F201D]/15 bg-white p-10 text-center">
                                    <EmptyState
                                        message="No review history"
                                        description="Approved and rejected products will be recorded here."
                                        icon={History}
                                    />
                                </div>
                            ) : (
                                processedProducts.map((product) => (
                                    <AdminProductCard
                                        key={product.id}
                                        product={product}
                                    />
                                ))
                            )}
                        </div>
                    )}
                </section>
            </div>
        </main>
    );
}
