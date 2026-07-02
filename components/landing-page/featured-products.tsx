import SectionHeader from "@/components/common/section-header";
import ProductCard from "@/components/products/product-card";
import { getFeaturedProducts } from "@/lib/products/product-select";

export default async function FeaturedProducts() {
    const featuredProducts = await getFeaturedProducts();

    return (
        <section className="py-24 bg-[#F9F7F0] relative">
            <div className="wrapper">
                <SectionHeader
                    title="Projects Worth Your Attention"
                    description="A curated selection of products gaining momentum across the builder community."
                    href="/explore"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
