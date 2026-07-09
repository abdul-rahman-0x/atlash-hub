import type { Metadata } from "next";
import AdminProductCard from "@/components/admin/admin-product-card";
import AdminStatsCard from "@/components/admin/stats-card";
import EmptyState from "@/components/common/empty-state";
import { getAllProducts } from "@/lib/products/product-select";
import { ShieldCheck, Clock3, History, Sparkles } from "lucide-react";
import { verifyAdmin } from "@/lib/admin/verify-admin";
export const metadata: Metadata = {
    title: "Admin Dashboard | Atlash",
    description:
        "Internal moderation dashboard for reviewing, approving and managing community submissions on Atlash.",
    keywords: [
        "admin dashboard",
        "moderation panel",
        "product review",
        "startup directory",
        "internal tools",
        "dashboard ui",
        "atlash",
    ],
};

export default async function AdminPage() {
    /**
     * Verify that the current request belongs
     * to an authenticated administrator before
     * rendering the moderation dashboard.
     */
    await verifyAdmin();

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
        <main className="bg-background py-12 lg:py-20">
            <div className="wrapper">
                {/* HERO */}
                <section className="mb-16">
                    <div className="rounded-[36px] border-2 border-black bg-white p-8 md:p-10 shadow-[8px_8px_0px_0px_#000]">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                            <div className="max-w-3xl">
                                <div className="inline-flex items-center gap-2 rounded-full border-2 border-black bg-[#B19CFF] px-4 py-2 mb-6">
                                    <Sparkles className="size-4" />
                                    <span className="text-xs font-black uppercase">
                                        Internal Dashboard
                                    </span>
                                </div>

                                <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
                                    Community
                                    <br />
                                    Review Center
                                </h1>

                                <p className="text-lg text-black/60 max-w-2xl leading-relaxed">
                                    Review submissions, approve launches,
                                    moderate content, and maintain the quality
                                    of the Atlash ecosystem.
                                </p>
                            </div>

                            <div className="flex flex-col gap-4 min-w-[240px]">
                                <div className="rounded-3xl border-2 border-black bg-[#F9F7F0] p-5">
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40">
                                        Pending Reviews
                                    </p>

                                    <p className="text-4xl font-black mt-2">
                                        {pendingProducts.length}
                                    </p>
                                </div>

                                <div className="rounded-3xl border-2 border-black bg-[#FFB38A] p-5">
                                    <div className="flex items-center gap-2">
                                        <ShieldCheck className="size-5" />
                                        <span className="font-black">
                                            Admin Access
                                        </span>
                                    </div>

                                    <p className="text-sm mt-2 text-black/70">
                                        Moderation privileges enabled.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* STATS */}
                <section className="mb-20">
                    <div className="rounded-[32px] border-2 border-black bg-white p-3 shadow-[6px_6px_0px_0px_#000]">
                        <AdminStatsCard
                            approved={approvedProducts.length}
                            pending={pendingProducts.length}
                            rejected={rejectedProducts.length}
                            all={allProducts.length}
                        />
                    </div>
                </section>

                {/* PENDING */}
                <section className="mb-20">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="flex size-14 items-center justify-center rounded-2xl border-2 border-black bg-[#FFB38A]">
                            <Clock3 className="size-6" />
                        </div>

                        <div>
                            <h2 className="text-3xl font-black">
                                Awaiting Review
                            </h2>

                            <p className="text-black/50">
                                Submissions waiting for approval or rejection.
                            </p>
                        </div>
                    </div>

                    {pendingProducts.length === 0 ? (
                        <EmptyState
                            message="Inbox Zero"
                            description="All submissions have been reviewed. Great work."
                            icon={ShieldCheck}
                        />
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
                </section>

                {/* HISTORY */}
                <section className="pt-16 border-t-2 border-black/10">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="flex size-14 items-center justify-center rounded-2xl border-2 border-black bg-[#B19CFF]">
                            <History className="size-6" />
                        </div>

                        <div>
                            <h2 className="text-3xl font-black">
                                Review History
                            </h2>

                            <p className="text-black/50">
                                Complete record of processed submissions.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {allProducts.map((product) => (
                            <AdminProductCard
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
