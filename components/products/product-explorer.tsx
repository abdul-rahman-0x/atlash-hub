"use client";

import { Clock, Search, TrendingUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import ProductCard from "@/components/products/product-card";
import { useMemo, useState } from "react";
import { products } from "@/db/schema";
import { InferSelectModel } from "drizzle-orm";
import { cn } from "@/lib/utils";

type Product = InferSelectModel<typeof products>;

export default function ProductExplorer({
    products: initialProducts,
}: {
    products: Product[];
}) {
    const [sortBy, setSortBy] = useState<"trending" | "latest">("trending");
    const [searchQuery, setSearchQuery] = useState("");

    // functionality preserved: handles searching and sorting logic
    const filteredProducts = useMemo(() => {
        let result = [...initialProducts];

        if (searchQuery.length > 0) {
            const query = searchQuery.toLowerCase();
            result = result.filter(
                (p) =>
                    p.name.toLowerCase().includes(query) ||
                    p.tagline?.toLowerCase().includes(query),
            );
        }

        return result.sort((a, b) => {
            if (sortBy === "trending") return b.voteCount - a.voteCount;
            const dateA = a.createAt ? new Date(a.createAt).getTime() : 0;
            const dateB = b.createAt ? new Date(b.createAt).getTime() : 0;
            return dateB - dateA;
        });
    }, [searchQuery, initialProducts, sortBy]);

    return (
        <div className="space-y-10">
            {/* search and filter row */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4">
                {/* input styled with ink borders and lowercase placeholder */}
                <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-black/30 size-5" />
                    <Input
                        type="text"
                        placeholder="find something cool..."
                        className="h-14 pl-12 bg-white border-2 border-black rounded-2xl focus:ring-0 focus:ring-offset-0 placeholder:text-black/30 text-base shadow-none w-full lowercase"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                {/* toggle buttons using your brand palette */}
                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        onClick={() => setSortBy("trending")}
                        className={cn(
                            "flex-1 md:flex-none flex items-center justify-center gap-2 px-6 h-14 rounded-2xl text-sm font-black transition-all border-2 border-black",
                            sortBy === "trending"
                                ? "bg-[#FFB38A] text-black shadow-[4px_4px_0px_0px_#000]"
                                : "bg-white text-black/50 hover:bg-black/5",
                        )}>
                        <TrendingUp className="size-4" />
                        Trending
                    </button>
                    <button
                        type="button"
                        onClick={() => setSortBy("latest")}
                        className={cn(
                            "flex-1 md:flex-none flex items-center justify-center gap-2 px-6 h-14 rounded-2xl text-sm font-black transition-all border-2 border-black",
                            sortBy === "latest"
                                ? "bg-[#B19CFF] text-black shadow-[4px_4px_0px_0px_#000]"
                                : "bg-white text-black/50 hover:bg-black/5",
                        )}>
                        <Clock className="size-4" />
                        Recents
                    </button>
                </div>
            </div>

            {/* simple status text */}
            <div className="flex items-center gap-2 px-1">
                <p className="text-xs text-black/40 font-bold tracking-tight">
                    Showing {filteredProducts.length} products
                </p>
            </div>

            {/* products display */}
            {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                // friendly empty state
                <div className="py-24 text-center bg-black/5 rounded-4xl border-2 border-dashed border-black/10">
                    <p className="text-lg text-black/40  italic">
                        nothing found here yet!
                    </p>
                </div>
            )}
        </div>
    );
}
