import SectionHeader from "@/components/common/section-header";
import { Inbox } from "lucide-react";
import ProductCard from "@/components/products/product-card";
import EmptyState from "@/components/common/empty-state";
import { getRecentProducts } from "@/lib/products/product-select";
import { getCurrentSession } from "@/lib/auth-session";

export default async function RecentLaunches() {
    const session = await getCurrentSession();

    const recentProducts = await getRecentProducts(session?.user?.id ?? null);

    return (
        <section className="relative w-full border-b-2 border-[#0F201D] bg-background py-20 md:py-28">
            <div className="wrapper">
                <SectionHeader
                    title={
                        <>
                            Recently{" "}
                            <span className="text-[#E53A28]">launched</span>
                        </>
                    }
                    description="The latest verified developer tools submitted by builders."
                    href="/explore?sort=recent"
                />

                {recentProducts.length > 0 ? (
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {recentProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                hasVoted={product.hasVoted}
                            />
                        ))}
                    </div>
                ) : (
                    <EmptyState
                        message="No new launches this week"
                        description="Check back soon, or be the first builder to submit your project."
                        icon={Inbox}
                    />
                )}
            </div>
        </section>
    );
}
