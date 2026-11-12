import type { Metadata } from "next";
import ProductExplorer from "@/components/products/product-explorer";
import {
    EXPLORE_PAGE_SIZE,
    getApprovedProductsPage,
} from "@/lib/products/product-select";
import BackHome from "@/components/common/back-home";
import SectionHeader from "@/components/common/section-header";
import { getCurrentSession } from "@/lib/auth-session";

export const metadata: Metadata = {
    title: "Explore Tools | Atlash Hub",
    description: "Browse curated developer tools, micro-SaaS, and open-source software vetted by the community.",
};

export default async function ExplorePage() {
    const session = await getCurrentSession();

    const data = await getApprovedProductsPage({
        limit: EXPLORE_PAGE_SIZE,
        cursor: null,
        search: "",
        sortBy: "trending",
        userId: session?.user?.id ?? null,
    });

    return (
        <main className="pt-20 pb-20">
            <div className="wrapper">
                <div className="mb-8">
                    <BackHome />
                </div>

                <SectionHeader
                    title={
                        <>
                            Find what{" "}
                            <span className="text-[#F5B726]">builders use.</span>
                        </>
                    }
                    description="Browse curated developer tools, micro-SaaS, and open-source software vetted by the community."
                    hideButton={true}
                />

                <ProductExplorer
                    products={data.products}
                    hasMore={data.hasMore}
                    nextCursor={data.nextCursor}
                />
            </div>
        </main>
    );
}
