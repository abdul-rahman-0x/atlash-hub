import type { Metadata } from "next";
import SectionHeader from "@/components/common/section-header";
import ProductExplorer from "@/components/products/product-explorer";
import { getAllApprovedProducts } from "@/lib/products/product-select";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "explore",
    description: "take a look at all the projects shared by our friends.",
};

export default async function ExplorePage() {
    const products = await getAllApprovedProducts();

    return (
        <main className="pt-28 md:pt-36 pb-14">
            <div className="wrapper">
                <div className="mb-12">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-xs font-bold text-black/60 hover:text-black transition-all group">
                        <div className="p-2 rounded-lg bg-[#FFB38A] border-2 border-black shadow-[2px_2px_0px_0px_#000] group-hover:shadow-none group-hover:translate-x-px group-hover:translate-y-px">
                            <ChevronLeft className="size-4" />
                        </div>
                        <span className="lowercase">back to home</span>
                    </Link>
                </div>

                <SectionHeader
                    title="Everything We Built"
                    description="Discover all the amazing things built and shared by our community."
                    hideButton={true}
                />

                <ProductExplorer products={products} />
            </div>
        </main>
    );
}
