import SectionHeader from "@/components/common/section-header";
import { Calendar } from "lucide-react";
import ProductCard from "@/components/products/product-card";
import EmptyState from "@/components/common/empty-state";
import { getRecentProducts } from "@/lib/products/product-select";

export default async function RecentLaunches() {
    const recentProducts = await getRecentProducts();

    return (
        <section className="py-24 bg-background">
            <div className="wrapper">
                <SectionHeader
                    title="Recently Launched"
                    description="Take a look at the latest creations added to the hub."
                    href="/explore"
                />

                {recentProducts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {recentProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <EmptyState
                        message="it is a quiet week!"
                        description="we are waiting for some cool new stuff. check back soon or be the first to share!"
                        icon={Calendar}
                    />
                )}
            </div>
        </section>
    );
}
