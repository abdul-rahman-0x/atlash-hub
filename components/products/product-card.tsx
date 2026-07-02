import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Flame, Rocket, Sparkles, Users, ArrowRight } from "lucide-react";
import { InferSelectModel } from "drizzle-orm";
import { products } from "@/db/schema";
import VotingButtons from "./voting-buttons";

type Product = InferSelectModel<typeof products>;

export default function ProductCard({
    product,
    hasVoted = false,
}: {
    product: Product;
    hasVoted?: boolean;
}) {
    const getStatus = () => {
        if (product.voteCount >= 500) {
            return {
                label: "Trending",
                icon: Flame,
                color: "bg-[#FFB38A]",
            };
        }

        if (product.voteCount >= 100) {
            return {
                label: "Community Pick",
                icon: Sparkles,
                color: "bg-[#B19CFF]",
            };
        }

        return {
            label: "New Launch",
            icon: Rocket,
            color: "bg-[#B8F2E6]",
        };
    };

    const status = getStatus();
    const StatusIcon = status.icon;

    // fake social proof for now
    const makers = Math.floor(product.voteCount * 0.55 + 40);

    const hooks = [
        "People are bookmarking this.",
        "Growing fast this week.",
        "Built by indie makers.",
        "Getting community traction.",
        "Worth checking out.",
    ];

    const hook = hooks[product.voteCount % hooks.length];

    return (
        <Link href={`/products/${product.slug}`} className="block group">
            <Card
                className="
                    relative
                    h-full
                    bg-white
                    border-2
                    border-black
                    rounded-2xl
                    overflow-hidden
                    transition-all
                    shadow-[6px_6px_0px_0px_#000]
                    group-hover:translate-x-[3px]
                    group-hover:translate-y-[3px]
                    group-hover:shadow-none
                ">
                {/* top */}
                <div className="flex items-center justify-between px-6">
                    <div
                        className={`
                            ${status.color}
                            border-2
                            border-black
                            rounded-full
                            px-3
                            py-1
                            flex
                            items-center
                            gap-2
                            text-[10px]
                            font-black
                        `}>
                        <StatusIcon className="size-3" />
                        {status.label}
                    </div>

                    <VotingButtons
                        productId={product.id}
                        voteCount={product.voteCount}
                        hasVoted={hasVoted}
                    />
                </div>

                <CardHeader className="px-6 pt-5 pb-5">
                    {/* title */}
                    <CardTitle className="text-2xl font-black text-black mb-3">
                        {product.name}
                    </CardTitle>

                    {/* WHY SHOULD I CARE */}
                    <div className="mb-4">
                        <p className="text-xs uppercase tracking-widest font-black text-black/40 mb-2">
                            WHY PEOPLE LIKE IT
                        </p>

                        <CardDescription className="text-base font-semibold text-black/75 leading-relaxed line-clamp-2">
                            {product.tagline}
                        </CardDescription>
                    </div>

                    {/* social proof */}
                    <div className="flex items-center gap-2 mb-5">
                        <Users className="size-4 text-black/50" />

                        <p className="text-sm font-bold text-black/60">
                            Used by {makers} makers
                        </p>

                        <span className="text-black/20">•</span>

                        <p className="text-sm font-bold text-black/60">
                            {hook}
                        </p>
                    </div>

                    {/* tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {product.tags?.slice(0, 3).map((tag) => (
                            <Badge
                                key={tag}
                                variant="outline"
                                className="
                                        bg-black/5
                                        border-black/10
                                        rounded-full
                                        px-3
                                        py-1
                                        text-[10px]
                                        font-black
                                        uppercase
                                        tracking-wide
                                    ">
                                #{tag}
                            </Badge>
                        ))}
                    </div>

                    {/* footer */}
                    <div className="border-t border-black/10 pt-4 flex items-center justify-between">
                        <p className="text-xs font-black uppercase text-black/35">
                            Explore product
                        </p>

                        <div className="flex items-center gap-1 font-black text-sm">
                            View
                            <ArrowRight className="size-4" />
                        </div>
                    </div>
                </CardHeader>
            </Card>
        </Link>
    );
}
